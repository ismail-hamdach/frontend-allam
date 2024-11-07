import { NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

let defaultLocale = "en";
let locales = ["bn", "en", "ar"];

// Get the preferred locale, similar to above or using a library
function getLocale(request) {
  const acceptedLanguage = request.headers.get("accept-language") ?? undefined;
  let headers = { "accept-language": acceptedLanguage };
  let languages = new Negotiator({ headers }).languages();

  return match(languages, locales, defaultLocale); // -> 'en-US'
}

export function middleware(request) {
  const isDevelopment = process.env.NODE_ENV === 'development';

  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;

  const detectLinkPathIsMissing = () => {
    if (isDevelopment) {
      return locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
      );
    } else {
      return locales.every(
        (locale) => !pathname.startsWith(`/app/${locale}/`) && pathname !== `/app/${locale}`
      );
    }
  }

  const pathnameIsMissingLocale = detectLinkPathIsMissing()
  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    const basePath = process.env.NODE_ENV !== "development" ? `/app/${locale}` : `/${locale}`;

    return NextResponse.redirect(
      new URL(`${basePath}/${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, assets, api)
    //"/((?!api|assets|.*\\..*|_next).*)",
    "/((?!api|assets|docs|.*\\..*|_next).*)",
    // Optional: only run on root (/) URL
  ],
};

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useRouter, usePathname } from "next/navigation";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const isLocationMatch = (targetLocation, locationName) => {
  return (
    locationName === targetLocation ||
    locationName.startsWith(`${targetLocation}/`)
  );
};

export const RGBToHex = (r, g, b) => {
  const componentToHex = (c) => {
    const hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  const redHex = componentToHex(r);
  const greenHex = componentToHex(g);
  const blueHex = componentToHex(b);

  return "#" + redHex + greenHex + blueHex;
};

export function hslToHex(hsl) {
  // Remove "hsla(" and ")" from the HSL string
  hsl = hsl.replace("hsla(", "").replace(")", "");

  // Split the HSL string into an array of H, S, and L values
  const [h, s, l] = hsl.split(" ").map((value) => {
    if (value.endsWith("%")) {
      // Remove the "%" sign and parse as a float
      return parseFloat(value.slice(0, -1));
    } else {
      // Parse as an integer
      return parseInt(value);
    }
  });

  // Function to convert HSL to RGB
  function hslToRgb(h, s, l) {
    h /= 360;
    s /= 100;
    l /= 100;

    let r, g, b;

    if (s === 0) {
      r = g = b = l;
    } else {
      const hue2rgb = (p, q, t) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };

      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }

    // Convert RGB values to integers
    const rInt = Math.round(r * 255);
    const gInt = Math.round(g * 255);
    const bInt = Math.round(b * 255);

    // Convert RGB values to a hex color code
    const rgbToHex = (value) => {
      const hex = value.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    };

    return `#${rgbToHex(rInt)}${rgbToHex(gInt)}${rgbToHex(bInt)}`;
  }

  // Call the hslToRgb function and return the hex color code
  return hslToRgb(h, s, l);
}

export const hexToRGB = (hex, alpha) => {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
};

export const formatTime = (time) => {
  if (!time) return "";

  const date = new Date(time);
  const formattedTime = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true, // Add this option to display AM/PM
  });

  return formattedTime;
};

// object check
export function isObjectNotEmpty(obj) {
  if (typeof obj !== "object" || obj === null) {
    return false;
  }
  return Object.keys(obj).length > 0;
}

export const formatDate = (date) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString("en-US", options);
};

// random word
export function getWords(inputString) {
  // Remove spaces from the input string
  const stringWithoutSpaces = inputString.replace(/\s/g, "");

  // Extract the first three characters
  return stringWithoutSpaces.substring(0, 3);
}

// for path name
export function getDynamicPath(pathname) {
  const prefixes = ["en", "bn", "ar"];

  for (const prefix of prefixes) {
    if (pathname.startsWith(`/${prefix}/`)) {
      return `/${pathname.slice(prefix.length + 2)}`;
    }
  }

  return pathname;
}

// translate

export const translate = (title, trans) => {
  const lowercaseTitle = title.toLowerCase();

  if (trans?.hasOwnProperty(lowercaseTitle)) {
    return trans[lowercaseTitle];
  }

  return title;
};


export const parseText = (text) => {
  // Sample input JSON string (with some correction for unclosed string)
  const inputText = `
{
    "words": [
        {
            "arabic": "أسد",
            "english": "Lion",
            "pronunciation": "a-saad",
            "example": {
                "arabic": "الأسد ملك الغابة",
                "english": "The lion is the king of the jungle"
            }
        },
        {
            "arabic": "فيل",
            "english": "Elephant",
            "pronunciation": "feel",
            "example": {
                "arabic": "الفيل حيوان ضخم",
                "english": "The elephant is a large animal"
            }
        },
        {
            "arabic": "غزال",
            "english": "Deer",
            "pronunciation": "gha-zaal",
            "example": {
                "arabic": "الغزال يعيش في الغابات",
                "english": "The deer lives in the forests"
            }
        },
        {
            "arabic": "نمر",
            "english": "Tiger",
            "pronunciation": "noomar",
            "example": {
                "arabic": "النمر من الحيوانات المفترسة",
                "english": "The tiger is a predator animal"
            }
        },
        {
            "arabic": "دلفين",
            "english": "Dolphin",
            "pronunciation": "da-la-feen",
            "example": {
                "arabic": "الدلفين يعيش في المحيطات",
                "english": "The dolphin lives in the oceans"
            }
        }
    ]
}
`;

  // Parse the JSON string into a JavaScript object
  const data = JSON.parse(inputText);

  // Loop through each word and extract the relevant information
  const parsedWords = data.words.map(word => {
    return {
      arabic: word.arabic,
      english: word.english,
      pronunciation: word.pronunciation,
      exampleArabic: word.example.arabic,
      exampleEnglish: word.example.english
    };
  });

  // Output the parsed words
  return parsedWords;

}


export const parseSentence = (sentence) => {
  // const data = JSON.parse(jsonString); // Parse the JSON string
  // const sentence = data.sentence; // Extract the sentence

  // Use a regular expression to extract the parts
  const match = sentence.match(/^(.+?)\s\((.+?)\)\s-\s(.+)$/);

  if (match) {
    return {
      arabic: match[1].trim(), // Arabic sentence
      transliteration: match[2].trim(), // Transliteration
      description: match[3].trim(), // Description
    };
  }

  // Return null or an empty object if the format is incorrect
  return null;
}

export const parseStory = (story) => {


  // Split the story into main content and description
  const parts = story.split("\n\n");

  

  // Return null or an empty object if the format is incorrect
  return parts;
}

// SidebarNav modern is the main sidebar data used in the project

import { 
  DashBoard, 
  User, 
  NoteIcon, 
  Docs, 
  Messages, 
  Note3, 
  List, 
  Book, 
  Crown, 
  Cup, 
  Stacks, 
  ClipBoard, 
  Note2 
} from "@/components/svg";


export const menusConfig = {
  mainNav: [
    {
      title: "Dashboard",
      icon: DashBoard,
      href: "/dashboard",
    },
    {
      title: "Child's Profile",
      icon: DashBoard,
      href: "/onboarding",
    },
  ],
  sidebarNav: {
    modern: {
      parent: [
        {
          title: "Dashboard",
          icon: DashBoard,
          href: "/dashboard",
        },
        {
          title: "Child Profile",
          icon: User,
          href: "/onboarding",
        },
      ],
      child: [
        {
          title: "Dashboard",
          icon: DashBoard,
          href: "/advancement",
        },
        {
          title: "Conversation",
          icon: Messages, // Icon representing conversation or chat
          href: "/games/conversation",
        },
        {
          title: "Alphabet Runner",
          icon: List, // Replace `RunningIcon` with an available alternative
          href: "/games/alphabet-runner",
        },
        {
          title: "Arabic Story Builder",
          icon: Book, // Book icon for story building
          href: "/games/arabic-story-builder",
        },
        {
          title: "Word Match Adventure",
          icon: Cup, // You can replace `PuzzlePiece` with an icon like `NoteIcon`
          href: "/games/word-match-adventure",
        },
        {
          title: "Arabic Grammar Quest",
          icon: Docs, // Grammar/learning document icon
          href: "/games/arabic-grammar-quest",
        },
        {
          title: "Pronunciation Pro",
          icon: Note3, // You can replace `Microphone` with Note3 for audio/recording
          href: "/games/pronunciation-pro",
        },
        {
          title: "Conjugation Clash",
          icon: Crown, // Replace with `Crown` or `Cup` for achievement/battle representation
          href: "/games/conjugation-clash",
        },
        {
          title: "Memory Match - Arabic Edition",
          icon:  Stacks, // You can replace `Brain` with Stacks to indicate memory or knowledge
          href: "/games/memory-match",
        },
        {
          title: "Emoji Translator",
          icon: Note2, // Replace with a suitable emoji or `User`
          href: "/games/emoji-translator",
        },
        {
          title: "Sentence Builder Challenge",
          icon: ClipBoard || Note2, // Replace with `ClipBoard` or Note2 for sentence creation
          href: "/games/sentence-builder-challenge",
        }
      ],
      
    },
    classic: [
      {
        isHeader: true,
        title: "menu",
      },
      {
        title: "Dashboard",
        icon: DashBoard,
        href: "/dashboard",
      },

    ],
  },
};

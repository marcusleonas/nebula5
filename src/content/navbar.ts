import {
    Info,
    Gamepad2,
    NotebookText,
    Globe,
    Sparkle,
    History,
    Signature,
    UserRoundPlus,
    PcCase,
    Icon as LucideIcon,
} from "@lucide/astro";

interface NavLink {
    href: string;
    label: string;
    description: string;
    icon?: typeof LucideIcon;
    external?: boolean;
}

interface NavGroup {
    label: string;
    description: string;
    links: NavLink[];
}

export const navLinks: NavGroup[] = [
    {
        label: "info",
        description: "stuff about this site and me!",
        links: [
            {
                href: "/about",
                label: "about me",
                description:
                    "learn a little more about me - webrings are here too!",
                icon: Info,
            },
            {
                href: "/gaming",
                label: "gaming",
                description: "games i've played & loved",
                icon: Gamepad2,
            },
            {
                href: "/setup",
                label: "my setup",
                description: "laptop specs, software, peripherals, etc",
                icon: PcCase,
            },
        ],
    },
    {
        label: "content",
        description: "stuff that i've authored, drawn, coded, etc",
        links: [
            {
                href: "/blog",
                label: "blog",
                description: "stupid rambles by a silly goober",
                icon: NotebookText,
            },
        ],
    },
    {
        label: "bits n bobs",
        description: "random things i couldn't fit anywhere else",
        links: [
            {
                href: "/buttons",
                label: "buttons",
                description: "my button collection",
                icon: Globe,
            },
            {
                href: "/blinkies",
                label: "blinkies",
                description: "ooooh shiny",
                icon: Sparkle,
            },
        ],
    },
    {
        label: "extras",
        description: "misc stuff",
        links: [
            {
                href: "/changelog",
                label: "changelog",
                description: "the list of changes to my site",
                icon: History,
            },
            {
                href: "https://wishbone.atabook.org",
                label: "guestbook",
                description: "please sign if you like my site",
                icon: Signature,
                external: true,
            },
            {
                href: "https://nekoweb.org/follow/n3bula.lol",
                description: "follow me nyow!",
                label: "nekoweb",
                icon: UserRoundPlus,
                external: true,
            },
        ],
    },
];

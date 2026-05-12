import GenshinImpact from "~/images/games/genshinimpact.jpg";
import DBD from "~/images/games/dead-by-daylight.jpg";

import FFXVI from "~/images/games/ffxvi.jpg";
import FFVII from "~/images/games/ffvii-remake.jpg";

import RDR2 from "~/images/games/rdr2.webp";

import RE2R from "~/images/games/re2r.jpg";
import RE3R from "~/images/games/re3r.jpg";
import RE4R from "~/images/games/re4r.jpg";

import TLOU1 from "~/images/games/tlou1.jpg";

export interface Game {
    name: string;
    link: string;
    image: ImageMetadata;
    status: "played" | "playing";
}

export const games: Game[] = [
    {
        name: "Genshin Impact",
        link: "https://genshin.hoyoverse.com",
        image: GenshinImpact,
        status: "playing",
    },
    {
        name: "Dead by Daylight",
        link: "https://deadbydaylight.com",
        image: DBD,
        status: "playing",
    },
    {
        name: "Final Fantasy XVI",
        link: "https://na.finalfantasyxvi.com",
        image: FFXVI,
        status: "playing",
    },

    // PLAYED
    {
        name: "Red Dead Redemption 2",
        link: "https://www.rockstargames.com/reddeadredemption2/",
        image: RDR2,
        status: "played",
    },
    {
        name: "Resident Evil 2 Remake",
        link: "https://www.residentevil.com/2/",
        image: RE2R,
        status: "played",
    },
    {
        name: "Resident Evil 3 Remake",
        link: "https://www.residentevil.com/re3",
        image: RE3R,
        status: "played",
    },
    {
        name: "Resident Evil 4 Remake",
        link: "https://www.residentevil.com/re4",
        image: RE4R,
        status: "played",
    },
    {
        name: "Final Fantasy VII Remake",
        link: "https://ffvii.square-enix-games.com/en-us/games/remake-intergrade",
        image: FFVII,
        status: "played",
    },
    {
        name: "The Last Of Us Part 1",
        link: "https://www.playstation.com/en-gb/games/the-last-of-us-part-i/",
        image: TLOU1,
        status: "played",
    },
];

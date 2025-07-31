import { Vollkorn, Barlow_Condensed, Nunito } from "next/font/google";

export const vollkorn = Vollkorn({
    weight: ["400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    variable: "--font-vollkorn",
});

export const barlowcondensed = Barlow_Condensed({
    weight: ["400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    variable: "--font-barlow-condensed",
});

export const nunito = Nunito({
    weight: ["400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    variable: "--font-nunito",
});

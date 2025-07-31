import { MenuItem } from "@/types/types";

export const menuItems: MenuItem[] = [
    {
        key: "1",
        title: "Home",
        url: "/",
    },
    {
        key: "2",
        title: "Services",
        submenu: [
            {
                key: "1",
                title: "Web Development",
                url: "/",
            },
            {
                key: "2",
                title: "App Development",
                url: "/",
            },
        ],
    },
    {
        key: "3",
        title: "About Us",
        submenu: [
            {
                key: "1",
                title: "Web Development 1",
                url: "/services/web-development",
            },
            {
                key: "2",
                title: "App Development 1",
                url: "/services/app-development",
            },
        ],
    },
    {
        key: "4",
        title: "Contact",
        url: "/contact",
    },
];

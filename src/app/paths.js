// pages
// commonComponents
import { Homepage } from "@pages/Homepage";
import { Discover } from "@pages/Discover";
import { Diet } from "@pages/Diet";

// constants
import { constants } from "@app";

const {
    // commonComponents
    HOMEPAGE,
    DISCOVER,
    DIET,
} = constants;

export const commonComponents = [
    {
        path: HOMEPAGE.PATH,
        component: Homepage,
    },
    {
        path: DISCOVER.PATH,
        component: Discover,
    },
    {
        path: DIET.PATH,
        component: Diet,
    },
];
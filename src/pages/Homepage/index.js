/**
 * Hub file
 */

import { ReduxMW } from "./ReduxMW";
import { Homepage as Homepage_ } from "./Homepage";
export * from "./type";
export const Homepage = ReduxMW(Homepage_);
/**
 * Hub file
 */

import { ReduxMW } from "./ReduxMW";
import { HomepageExercises as HomepageExercises_ } from "./HomepageExercises";
export const HomepageExercises = ReduxMW(HomepageExercises_);
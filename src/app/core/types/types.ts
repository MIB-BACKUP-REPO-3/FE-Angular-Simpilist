import { SORT_DIRECTIONS } from "../constants/constants";


// we add all the shared types here
export type SortDirection =
  (typeof SORT_DIRECTIONS)[keyof typeof SORT_DIRECTIONS];

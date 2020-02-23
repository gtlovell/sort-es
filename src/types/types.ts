import { SortOption } from "../interfaces/interfaces";

type sortable<T> = (first: T, second: T) => number;

type sortableWithOption<T> = (options?: SortOption) => sortable<T>;

type datable = Date | number | string;

export { sortable, sortableWithOption, datable };

import { SortOrder, SortKey } from '../models/enums';

export const sortUtil = <T>(
  a: T,
  b: T,
  sortKey?: SortKey | string,
  sortOrder?: SortOrder
): number => {
  const keyA = a[sortKey || SortKey.CREATED];
  const keyB = b[sortKey || SortKey.CREATED];

  if (keyA === undefined || keyB === undefined) {
    console.error('Sort key cannot be found in the object of type T', a, b, sortKey);
  }

  const dateA = new Date(keyA).getTime();
  const dateB = new Date(keyB).getTime();

  if (sortOrder === SortOrder.ASC) {
    return dateA - dateB;
  } else {
    return dateB - dateA;
  }
};

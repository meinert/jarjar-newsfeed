import { SortOrder, SortKey } from '../models/enums';

interface HasCreated {
  created: Date | string;
}

export const sortUtil = <T extends HasCreated>(
  a: T,
  b: T,
  sortKey: SortKey,
  sortOrder: SortOrder
): number => {
  const keyA = a[sortKey];
  const keyB = b[sortKey];

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

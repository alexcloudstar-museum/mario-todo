const getLocalStorageItem = (key: string): string => {
  return localStorage.getItem(key);
};

export default getLocalStorageItem;

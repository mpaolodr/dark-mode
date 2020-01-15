import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    //this will check if there's already a key in local storage
    const item = window.localStorage.getItem(key);
    return item
      ? JSON.parse(item)
      : window.localStorage.setItem(key, JSON.stringify(initialValue));
  });

  //update value of local storage
  //this will be the setter
  const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};

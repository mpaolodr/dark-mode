import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkmode = () => {
  const [value, setValue] = useLocalStorage("dark-mode", false);

  useEffect(() => {
    return value
      ? document.body.classList.add("dark-mode")
      : document.body.classList.remove("dark-mode");
  }, [value]);

  const setNewValue = e => {
    e.preventDefault();
    setValue(!value);
  };

  return [value, setNewValue];
};

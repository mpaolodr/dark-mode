import { useLocalStorage } from "./useLocalStorage";

export const useForm = (key, initialValues = {}) => {
  const [values, setValues] = useLocalStorage(key, initialValues);

  //handle changes
  const handleChange = e => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value
    });
  };

  return [values, setValues, handleChange]; //setValues included if you want to separate your handlesubmit
};

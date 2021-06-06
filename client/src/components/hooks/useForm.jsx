import { useState } from "react";

const useForm = () => {
  const [values, setValues] = useState({});
  const changeChandler = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return [values, changeChandler];
};

export default useForm;

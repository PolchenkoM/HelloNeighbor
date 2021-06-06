import { useState } from "react";

const useLoginForm = () => {
  const [loginValues, setLoginValues] = useState({});
  const changeLoginChandler = (e) => {
    setLoginValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return [loginValues, changeLoginChandler];
};

export default useLoginForm;

import React, { useState, useEffect } from "react";
const useFlash = (timeout) => {
  const [flash, setFlash] = useState(true);
  const [template, setTemplate] = useState(() => (
    <p className="bg-success">{localStorage.getItem("message")}</p>
  ));

  useEffect(() => {
    if (flash) {
      setTimeout(() => {
        setFlash(false), setTemplate(null);
        localStorage.setItem("message", "");
      }, timeout);
    }
  }, [flash, timeout]);
  return template;
};
export default useFlash;

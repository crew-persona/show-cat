import { useState } from "react";

export const useGetIpAddress = () => {
  const [ipValue, setIpValue] = useState("");
  fetch("https://geolocation-db.com/json/").then((ipData) =>
    ipData.json().then((value) => {
      setIpValue(value.IPv4);
    })
  );
  return ipValue;
};

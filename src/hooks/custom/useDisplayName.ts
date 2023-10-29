import { useDebugValue, useEffect, useState } from "react";

export const useDisplayName = () => {
  const [displayName, setDisplayName] = useState<string>();
  useEffect(() => {
    setDisplayName("xD");
  }, []);
  useDebugValue(displayName ?? "loading...");
  return displayName;
};

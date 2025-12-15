import { useContext } from "react";
import { MyContext } from "./context";

export const useMyContext = () => {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error("useMyContext doit être utilisé dans MyProvider");
  }

  return context;
};

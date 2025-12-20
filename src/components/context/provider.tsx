
import { useState } from "react";
import { MyContext } from "./context";
import type { InfoProjectSelectedType, Props } from "../../lib/utils";




export const MyProvider = ({ children }: Props) => {

  const [currentInfoProjectSelected, setCurrentInfoProjectSelected] = useState<InfoProjectSelectedType | null>(null);

 const handleSetCurrentInfoProjectSelected = (data: Partial<InfoProjectSelectedType> | null) => {
   if (data === null) {
     setCurrentInfoProjectSelected(null);
   } else {
     setCurrentInfoProjectSelected({
       title: data.title ?? null,
       subTitle: data.subTitle ?? null,
       year: data.year ?? null,
     });
   }
 };

  return (
    <MyContext.Provider value={{ currentInfoProjectSelected, handleSetCurrentInfoProjectSelected }}>
      {children}
    </MyContext.Provider>
  );
};

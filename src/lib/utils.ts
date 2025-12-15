import gsap from "gsap";
import type { ReactNode } from "react";

  
  export const globalTimeline =  gsap.timeline({
    duration:0.7,
     ease:"power3.out",
      delay:2
  })
 
              export type workCardType = {
                  image:string,
                  title:string,
                  subTitle:string,
                  onShowThumbnail:(el:string | null)=>void 
              }

  export type workCardInSelectedModeType = {
    index:number,
    title:string,
    subTitle:string,
    image:string,
    onLeave?:()=>void,
    onHover:(el:{year?:string,title?:string;image?:string,subTitle?:string}) => void,
    moreInfos?:{
      year:string,

    }
    
  }


  export type InfoProjectSelectedType = {
    title:string | null,
    subTitle:string | null,
    year:string | null
  }


export type Props = {
  children: ReactNode;
};
  
 export type MyContextType = {
   currentInfoProjectSelected: InfoProjectSelectedType | null;
   handleSetCurrentInfoProjectSelected: (data: Partial<InfoProjectSelectedType> | null) => void;
 };
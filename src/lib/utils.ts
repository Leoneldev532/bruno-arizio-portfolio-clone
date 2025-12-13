import gsap from "gsap";

  
  export const globalTimeline =  gsap.timeline({
    duration:0.5,
     ease:"power3.out",
      delay:2
  })
 
              export type workCardType = {
                  image:string,
                  title:string,
                  subTitle:string,
                  onShowThumbnail:(el:string | null)=>void 
              }
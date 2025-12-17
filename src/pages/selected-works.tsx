import {  useState } from "react";
import { getworksList } from "../lib/data";
import WorkCardSelectedMode from "../components/workCardSelectedMode";
import gsap from "gsap";
import { useMyContext } from "../components/context/useMyContext";
import { useGSAP } from "@gsap/react";

const SelectedWorks = () => {
  const [currentProject, setCurrentProject] = useState<string>("./7.gif");
  const { handleSetCurrentInfoProjectSelected } = useMyContext();

  useGSAP(() => {
    const workCardS = gsap.utils.toArray(".workcard-selected-mode");
    const tl = gsap.timeline()
    tl.from(workCardS, {
      scale: 1.4,
      x:-40,
      duration:0.8,
      ease:"expo.in",
      opacity: 1,
    });

   

  }, []);

const showProject = () => {
 gsap.to(".show-project-container", {
  opacity: 1,
  duration: 0.4,
  delay:0.2,
  ease: "power2.out",
  zIndex: 50,
  overwrite: "auto",
});
};

const hideProject = () => {
 gsap.to(".show-project-container", {
  opacity: 0,
  duration: 0.4,
  delay:0.2,
  ease: "power2.inOut",
  zIndex: 0,
  overwrite: "auto",
});
};


  const worksList =  getworksList(setCurrentProject, showProject, hideProject, handleSetCurrentInfoProjectSelected);


 

  return (
    <div className="flex   flex-col justify-center items-center relative w-full">
  <div className="fixed pt-32 lg:pt-10  show-project-container pointer-events-none opacity-0 z-0 bg-white/95 backdrop-grayscale-100 left-0 h-full w-full top-6 flex justify-center items-start ">
  <div className="w-[80%] lg:w-[65%] show-project-container  bg-white h-[70%] lg:h-[80%] absolute wrapper-image-work-selected pointer-events-none flex justify-center items-center">
    <img
      src={currentProject}
      className="w-full h-full object-cover pointer-events-none"
      draggable={false}
    />
  </div>
      </div>

      <div className="grid z-0 absolute px-8 lg:px-24 pt-20 gap-y-4 grid-cols-4  xl:grid-cols-5 lg:gap-y-48 gap-x-10 lg:gap-x-28 w-full  h-full">
        {worksList?.map((item, index: number) => (
          <WorkCardSelectedMode
            key={"wks" + index}
            index={index}
            image={item.image}
            onHover={item.onHover}
            onLeave={item.onLeave}
            title={item.title}
            subTitle={item.subTitle}
            moreInfos={item.moreInfos}
          />
        ))}
      </div>
      <div className="h-[50vh] "></div>
    </div>
  );
};

export default SelectedWorks;

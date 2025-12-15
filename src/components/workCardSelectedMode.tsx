import { useEffect, useRef } from "react";
import type { workCardInSelectedModeType } from "../lib/utils";
import { useScreenWidth } from "../lib/useScreenWidth";

const WorkCardSelectedMode = (
  workCardInSelectedModeProps: workCardInSelectedModeType
) => {
  const workCardSelectedModeRef = useRef<HTMLDivElement | null>(null);
  const width = useScreenWidth()


useEffect(() => {
  const container = workCardSelectedModeRef.current;
  if (!container) return;

  const show = () => {
    workCardInSelectedModeProps?.onHover?.({
      title: workCardInSelectedModeProps.title,
      subTitle: workCardInSelectedModeProps.subTitle,
      year: workCardInSelectedModeProps.moreInfos?.year,
      image: workCardInSelectedModeProps.image,
    });
  };

  const hide = () => {
    workCardInSelectedModeProps?.onLeave?.();
  };

  if (width > 850) {
    container.addEventListener("mouseenter", show);
    container.addEventListener("mouseleave", hide);
  } else {
    container.addEventListener("click", show);
  }

  return () => {
    container.removeEventListener("mouseenter", show);
    container.removeEventListener("mouseleave", hide);
    container.removeEventListener("click", show);
  };
}, [width]);

  return (
    <div
      ref={workCardSelectedModeRef}
      className="flex flex-col -translate-x-10  transition-all ease-in duration-300 scale-100 opacity-100 w-[20vw] lg:w-full  overflow-hidden h-[40vw] cursor-pointer xl:h-[20vw] workcard-selected-mode justify-start items-start"
    >
      <div className="h-2/3 overflow-hidden w-full">
        {workCardInSelectedModeProps?.image && (
          <img
            className="w-full object-cover h-full"
            src={workCardInSelectedModeProps.image}
          />
        )}

      </div>
      
        <div className="flex py-4 flex-col ">
          <span className="text-[8px] sm:text-sm pb-1.5 lg:pb-3">{workCardInSelectedModeProps?.index}. </span>
          <h2 className="font-semibold text-[8px] sm:text-xs">
            {workCardInSelectedModeProps?.title}{" "}
          </h2>
          <span className="text-[8px] sm:text-xs text-gray-400">{workCardInSelectedModeProps?.subTitle} </span>
        </div>
    </div>
  );
};

export default WorkCardSelectedMode;

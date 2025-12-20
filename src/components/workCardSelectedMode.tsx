import { useEffect, useRef, useState } from "react";
import type { workCardInSelectedModeType } from "../lib/utils";
import { useScreenWidth } from "../lib/useScreenWidth";

const WorkCardSelectedMode = (
  workCardInSelectedModeProps: workCardInSelectedModeType
) => {
  const workCardSelectedModeRef = useRef<HTMLDivElement | null>(null);
  const width = useScreenWidth()
  const [isShown, setIsShown] = useState(false);


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

  const toggle = () => {
    if (isShown) {
      hide();
      setIsShown(false);
    } else {
      show();
      setIsShown(true);
    }
  };

  if (width > 850) {
    container.addEventListener("mouseenter", show);
    container.addEventListener("mouseleave", hide);
  } else {
    container.addEventListener("click", toggle);
  }

  return () => {
    container.removeEventListener("mouseenter", show);
    container.removeEventListener("mouseleave", hide);
    container.removeEventListener("click", toggle);
  };
}, [width, isShown]);

  return (
    <div
      ref={workCardSelectedModeRef}
      className="flex flex-col  opacity-100 w-full md:w-[20vw] lg:w-full  overflow-hidden h-[50vw] md:h-[40vw] cursor-pointer xl:h-[20vw] workcard-selected-mode justify-start items-start"
    >
      <div className="h-2/3 overflow-hidden w-full">
        {workCardInSelectedModeProps?.image && (
          <img
            className="w-full object-cover h-full"
            src={workCardInSelectedModeProps.image}
          />
        )}

      </div>
      
        <div className="flex py-2.5 flex-col ">
          <span className="text-sm pb-1.5 lg:pb-1">{workCardInSelectedModeProps?.index}. </span>
          <h2 className="font-semibold text-sm sm:text-xs">
            {workCardInSelectedModeProps?.title}{" "}
          </h2>
          <span className="text-sm sm:text-xs text-gray-400">{workCardInSelectedModeProps?.subTitle} </span>
        </div>
    </div>
  );
};

export default WorkCardSelectedMode;

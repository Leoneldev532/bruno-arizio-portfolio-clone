import { useEffect, useRef, useState } from "react";
import { globalTimeline, type workCardType } from "../lib/utils";
import WorkCard from "../components/workCard";
import { useGSAP } from "@gsap/react";
import { useLenis } from "../lib/useLenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getworksList } from "../lib/data";

const Home = () => {
  const [currentProject, setCurrentProject] = useState<string>("./7.gif");

  const worksList =  getworksList(setCurrentProject)

  const containerWorkCardRef = useRef<HTMLDivElement | null>(null);
  const showWorkCardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    globalTimeline
      .to(
        containerWorkCardRef?.current,
        {
          x: 0,
          ease: "expo.out",
        },
        "-=0.5"
      )
      .fromTo(
        showWorkCardRef?.current,
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        },
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        },
        "<"
      )
      .to(".summary-home-page", {
        opacity: 1,
        y: 0,
      });
  }, []);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const containerWorkCard = containerWorkCardRef.current;
    if (!containerWorkCard) return;

    const workCards: NodeListOf<HTMLDivElement> | [] =
      containerWorkCardRef.current?.querySelectorAll(".workcard") || [];
    console.log(1 / (workCards.length - 1), 555);
    const tl = gsap.timeline({
      repeat: -1,
      scrollTrigger: {
        start: "top-=50 top",
        end: `+=${containerWorkCard.scrollHeight}`,
        pin: true,
        scrub: 1,
        trigger: ".part-2",
      
      },
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="flex helveticanowtext   w-full px-4 pt-4 h-full justify-between ">
      <div
        ref={containerWorkCardRef}
        className="w-3/12 md:w-2/12 -translate-x-50 transition-transform duration-300 ease-in work-card-container h-auto flex flex-col gap-20 "
      >
        {worksList?.map((item: workCardType, index: number) => (
          <WorkCard
            key={"wk" + index}
            image={item.image}
            onShowThumbnail={item.onShowThumbnail}
            title={item.title}
            subTitle={item.subTitle}
          />
        ))}
      </div>

      <div className="w-9/12 md:w-10/12 h-full flex-col  part-2 flex   justify-between items-center">
        <div className="h-[30vh] summary-home-page relative pt-4 md:pt-0 -top-6   w-full flex flex-col justify-between items-center">
          <p className="text-left  max-w-sm font-semibold text-xs    text-black/40">
            Bruno Arizio Selected Works General Info CET 02:21 AM Globally
            recognized Independent Designer and Creative Director based in the
            Netherlands. Working at the intersection of design, art, and
            photography with a host of international clients that includes the
            J. Paul Getty Museum, Frank O. Gehry and Partners, The Obama
            Foundation, Gates Foundation, Delta Airlines, Adobe, Meta, Adidas,
            VanMoof, Lexus, Toyota, Samsung, Ecco®, and more.
          </p>
          <div className="text-left w-full max-w-sm font-semibold text-xs  flex flex-col justify-start ">
            <span>For inquiries:</span>
            <a href="mailto:hello@brunoarizio.com" className="underline ">
              {" "}
              hello@brunoarizio.com{" "}
            </a>
          </div>
        </div>

        <div
          ref={showWorkCardRef}
          className="w-full h-[61vh] bg-black  mb-12 show-work-card-container overflow-hidden flex justify-center items-center "
        >
          <img src={currentProject} className="w-[70%] h-[95%] object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Home;

import { useEffect, useRef, useState } from "react";
import { globalTimeline, type workCardType } from "../lib/utils";
import WorkCard from "../components/workCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getworksList } from "../lib/data";

const Home = () => {
  const [currentProject, setCurrentProject] = useState<string>("./7.gif");

  const worksList =  getworksList(setCurrentProject)

  const containerWorkCardRef = useRef<HTMLDivElement | null>(null);
  const showWorkCardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const tl = gsap.timeline()
    const workCards = document.querySelectorAll(".workcard")

    tl
      .to(
        workCards,
        { 
          delay:0,
          x: "0%",
           duration:1.5,
          ease:"expo.inOut",
          stagger:{
            each:0.045,
            from:"start"
          }
        },
        "<"
      )

      globalTimeline.to(
        showWorkCardRef?.current,
        {
          duration:1.5,
          ease:"expo.inOut",
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
          
        },
        "<"
      )

      globalTimeline.to(".summary-home-page", {
        opacity: 1,
        y: 0,
            duration:1.5,
          ease:"expo.inOut",
      },"<");

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
        className="w-3/12 md:w-2/12   work-card-container h-auto flex flex-col gap-20 "
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
            Leonel Yimga Passionate  Front-End Developer specializing in modern web technologies. Based in
            Cameroon. Creating interactive and responsive user experiences with
            expertise in React, JavaScript, HTML, CSS, and more. Worked on
            projects including component libraries, email platforms, and fashion
            websites.
          </p>
          <div className="text-left w-full max-w-sm font-semibold text-xs  flex flex-col justify-start ">
            <span>Featured Projects:</span>
            <ul className="list-disc list-inside">
              <li><a href="https://ly-ui.dev" className="underline">Ly UI (Component Library)</a></li>
              <li><a href="https://smadmail.com/" className="underline">Smad Mail</a></li>
              <li><a href="https://fashion-website-indol-nine.vercel.app/" className="underline">The French Totothe</a></li>
              <li><a href="mailto:leonelyimga@gmail.com" className="hover:underline">leonelyimga@gmail.com</a></li>
            </ul>
          </div>
        </div>

        <div
          ref={showWorkCardRef}
          className="w-full h-[61vh] bg-black  mb-12 show-work-card-container overflow-hidden flex justify-center items-center "
        >
          <img src={currentProject} className="w-[80%] lg:w-[70%] h-[95%] object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Home;

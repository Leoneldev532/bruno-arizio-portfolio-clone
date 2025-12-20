import { useEffect, useRef, useState } from "react";
import { globalTimeline, type workCardType } from "../lib/utils";
import WorkCard from "../components/workCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getworksList } from "../lib/data";
import { SplitText } from "gsap/SplitText";

const Home = () => {
  const [currentProject, setCurrentProject] = useState<string>("./7.gif");

  const worksList =  getworksList(setCurrentProject)

  const containerWorkCardRef = useRef<HTMLDivElement | null>(null);
  const showWorkCardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    
    gsap.registerPlugin(ScrollTrigger,SplitText);
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

      const summaryHomePage = document.querySelectorAll(".summary-home-page p")

      const summaryWords =  SplitText.create(summaryHomePage,{type:"words",mask:"lines"})
    
      gsap.set(summaryWords.words,{
        y:"140%"
      })
      

      globalTimeline.to(summaryWords.words, {
        delay:0.4,
        y: "0%",
        stagger:{
          amount:0.2,
        }, 
          ease:"power2.out",
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
        className="w-3/12  md:w-2/12   work-card-container h-auto hidden md:flex flex-col gap-20 "
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

      <div className="w-full md:w-10/12 h-full flex-col  part-2 flex   justify-between items-start md:items-center">
        <div className="h-[30vh] summary-home-page relative   w-full flex flex-col gap-y-8 items-start md:items-center">
          <p className="text-left lg:max-w-lg font-semibold text-xs    text-black/40">
            Leonel Yimga, a passionate Front-End Developer specializing in modern web technologies. Based in
            Cameroon, I craft interactive and responsive user experiences with
            expertise in React, JavaScript, TypeScript, HTML, CSS, and frameworks like Next.js. My portfolio includes
            projects such as reusable component libraries, dynamic email platforms, and elegant fashion e-commerce websites.
            I am committed to writing clean, efficient code and staying up-to-date with the latest industry trends to deliver
            high-quality digital solutions.
          </p>
          <p className="text-left w-full lg:max-w-lg font-semibold text-xs  flex flex-col justify-start ">
              leonelyimga@gmail.com
          </p>
        </div>

        <div
          ref={showWorkCardRef}
          className="w-full h-[40vh] md:h-[51vh] bg-black  md:mb-12 show-work-card-container overflow-hidden flex justify-center items-center "
        >
          <img src={currentProject} className="w-[80%] lg:w-[70%] lg:h-[90%] h-[85%] object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Home;

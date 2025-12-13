import { useEffect, useRef, useState } from "react";
import { globalTimeline, type workCardType } from "../lib/utils";
import WorkCard from "../components/workCard";
import { useGSAP } from "@gsap/react";
import { useLenis } from "../lib/useLenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Home = () => {
  const [currentProject, setCurrentProject] = useState<string>("./7.gif");

  const worksList: workCardType[] = [
    {
      image: "./7.gif",
      title: "Getty Research Institute",
      subTitle: "Sculpting Harmony",
      onShowThumbnail: (el) => {
        setCurrentProject(el || "./7.gif");
      },
    },
    {
      image: "./12.gif",
      title: "Obama Foundation",
      subTitle: "Design Innovation",
      onShowThumbnail: (el) => {
        setCurrentProject(el || "./12.gif");
      },
    },
    {
      image: "./14.gif",
      title: "Adobe",
      subTitle: "Creative Solutions",
      onShowThumbnail: (el) => {
        setCurrentProject(el || "./14.gif");
      },
    },
    {
      image: "./bg.gif",
      title: "Meta",
      subTitle: "Digital Experiences",
      onShowThumbnail: (el) => {
        setCurrentProject(el || "./bg.gif");
      },
    },
    {
      image: "./kid.webp",
      title: "Samsung",
      subTitle: "Technology Integration",
      onShowThumbnail: (el) => {
        setCurrentProject(el || "./kid.webp");
      },
    },
    {
      image: "./7.gif",
      title: "Getty Research Institute",
      subTitle: "Sculpting Harmony",
      onShowThumbnail: (el) => {
        setCurrentProject(el || "./7.gif");
      },
    },
    {
      image: "./12.gif",
      title: "Obama Foundation",
      subTitle: "Design Innovation",
      onShowThumbnail: (el) => {
        setCurrentProject(el || "./12.gif");
      },
    },
    {
      image: "./14.gif",
      title: "Adobe",
      subTitle: "Creative Solutions",
      onShowThumbnail: (el) => {
        setCurrentProject(el || "./14.gif");
      },
    },
    {
      image: "./bg.gif",
      title: "Meta",
      subTitle: "Digital Experiences",
      onShowThumbnail: (el) => {
        setCurrentProject(el || "./bg.gif");
      },
    },
    {
      image: "./kid.webp",
      title: "Samsung",
      subTitle: "Technology Integration",
      onShowThumbnail: (el) => {
        setCurrentProject(el || "./kid.webp");
      },
    },
    {
      image: "./7.gif",
      title: "Getty Research Institute",
      subTitle: "Sculpting Harmony",
      onShowThumbnail: (el) => {
        setCurrentProject(el || "./7.gif");
      },
    },
    {
      image: "./12.gif",
      title: "Obama Foundation",
      subTitle: "Design Innovation",
      onShowThumbnail: (el) => {
        setCurrentProject(el || "./12.gif");
      },
    },
    {
      image: "./14.gif",
      title: "Adobe",
      subTitle: "Creative Solutions",
      onShowThumbnail: (el) => {
        setCurrentProject(el || "./14.gif");
      },
    },
    {
      image: "./bg.gif",
      title: "Meta",
      subTitle: "Digital Experiences",
      onShowThumbnail: (el) => {
        setCurrentProject(el || "./bg.gif");
      },
    },
    {
      image: "./kid.webp",
      title: "Samsung",
      subTitle: "Technology Integration",
      onShowThumbnail: (el) => {
        setCurrentProject(el || "./kid.webp");
      },
    },
    {
      image: "./7.gif",
      title: "Getty Research Institute",
      subTitle: "Sculpting Harmony",
      onShowThumbnail: (el) => {
        setCurrentProject(el || "./7.gif");
      },
    },
    {
      image: "./12.gif",
      title: "Obama Foundation",
      subTitle: "Design Innovation",
      onShowThumbnail: (el) => {
        setCurrentProject(el || "./12.gif");
      },
    },
    {
      image: "./14.gif",
      title: "Adobe",
      subTitle: "Creative Solutions",
      onShowThumbnail: (el) => {
        setCurrentProject(el || "./14.gif");
      },
    },
    {
      image: "./bg.gif",
      title: "Meta",
      subTitle: "Digital Experiences",
      onShowThumbnail: (el) => {
        setCurrentProject(el || "./bg.gif");
      },
    },
    {
      image: "./kid.webp",
      title: "Samsung",
      subTitle: "Technology Integration",
      onShowThumbnail: (el) => {
        setCurrentProject(el || "./kid.webp");
      },
    },
    {
      image: "./7.gif",
      title: "Getty Research Institute",
      subTitle: "Sculpting Harmony",
      onShowThumbnail: (el) => {
        setCurrentProject(el || "./7.gif");
      },
    },
    {
      image: "./12.gif",
      title: "Obama Foundation",
      subTitle: "Design Innovation",
      onShowThumbnail: (el) => {
        setCurrentProject(el || "./12.gif");
      },
    },
    {
      image: "./14.gif",
      title: "Adobe",
      subTitle: "Creative Solutions",
      onShowThumbnail: (el) => {
        setCurrentProject(el || "./14.gif");
      },
    },
    {
      image: "./bg.gif",
      title: "Meta",
      subTitle: "Digital Experiences",
      onShowThumbnail: (el) => {
        setCurrentProject(el || "./bg.gif");
      },
    },
    {
      image: "./kid.webp",
      title: "Samsung",
      subTitle: "Technology Integration",
      onShowThumbnail: (el) => {
        setCurrentProject(el || "./kid.webp");
      },
    },
    {
      image: "./7.gif",
      title: "Getty Research Institute",
      subTitle: "Sculpting Harmony",
      onShowThumbnail: (el) => {
        setCurrentProject(el || "./7.gif");
      },
    },
    {
      image: "./12.gif",
      title: "Obama Foundation",
      subTitle: "Design Innovation",
      onShowThumbnail: (el) => {
        setCurrentProject(el || "./12.gif");
      },
    },
    {
      image: "./14.gif",
      title: "Adobe",
      subTitle: "Creative Solutions",
      onShowThumbnail: (el) => {
        setCurrentProject(el || "./14.gif");
      },
    },
    {
      image: "./bg.gif",
      title: "Meta",
      subTitle: "Digital Experiences",
      onShowThumbnail: (el) => {
        setCurrentProject(el || "./bg.gif");
      },
    },
    {
      image: "./kid.webp",
      title: "Samsung",
      subTitle: "Technology Integration",
      onShowThumbnail: (el) => {
        setCurrentProject(el || "./kid.webp");
      },
    },

    {
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      title: "Obama Foundation",
      subTitle: "Design Innovation",
      onShowThumbnail: (el) => setCurrentProject(el || "./kid.webp"),
    },
    {
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      title: "Adobe",
      subTitle: "Creative Solutions",
      onShowThumbnail: (el) => setCurrentProject(el || "./kid.webp"),
    },
    {
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
      title: "Meta",
      subTitle: "Digital Experiences",
      onShowThumbnail: (el) => setCurrentProject(el || "./kid.webp"),
    },
    {
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
      title: "Samsung",
      subTitle: "Technology Integration",
      onShowThumbnail: (el) => setCurrentProject(el || "./kid.webp"),
    },
    {
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
      title: "Architecture Studio",
      subTitle: "Modern Structures",
      onShowThumbnail: (el) => setCurrentProject(el || "./kid.webp"),
    },
    {
      image:
        "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?auto=format&fit=crop&w=1200&q=80",
      title: "Creative Lab",
      subTitle: "Visual Research",
      onShowThumbnail: (el) => setCurrentProject(el || "./kid.webp"),
    },
    {
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
      title: "Digital Agency",
      subTitle: "Future Interfaces",
      onShowThumbnail: (el) => setCurrentProject(el || "./kid.webp"),
    },
    {
      image:
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
      title: "UX Research",
      subTitle: "Human Interfaces",
      onShowThumbnail: (el) => setCurrentProject(el || `kid.webp`),
    },
    {
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
      title: "Product Design",
      subTitle: "Functional Aesthetics",
      onShowThumbnail: (el) => setCurrentProject(el || `kid.webp`),
    },
    {
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80",
      title: "Creative Agency",
      subTitle: "Brand Systems",
      onShowThumbnail: (el) => setCurrentProject(el || `kid.webp`),
    },
    {
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80",
      title: "Tech Workspace",
      subTitle: "Clean Interfaces",
      onShowThumbnail: (el) => setCurrentProject(el || `kid.webp`),
    },

    {
      image:
        "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1200&q=80",
      title: "Landscape Studio",
      subTitle: "Natural Balance",
      onShowThumbnail: (el) => setCurrentProject(el || `kid.webp`),
    },
    {
      image:
        "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1200&q=80",
      title: "Digital Art",
      subTitle: "Abstract Motion",
      onShowThumbnail: (el) => setCurrentProject(el || `kid.webp`),
    },

    {
      image:
        "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=80",
      title: "Creative Systems",
      subTitle: "Generative Design",
      onShowThumbnail: (el) => setCurrentProject(el || `kid.webp`),
    },
    {
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      title: "Corporate Design",
      subTitle: "Visual Identity",
      onShowThumbnail: (el) => setCurrentProject(el || `kid.webp`),
    },
    {
      image:
        "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?auto=format&fit=crop&w=1200&q=80",
      title: "Innovation Studio",
      subTitle: "Concept Development",
      onShowThumbnail: (el) => setCurrentProject(el || `kid.webp`),
    },
    {
      image:
        "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=1200&q=80",
      title: "Software Lab",
      subTitle: "Scalable Systems",
      onShowThumbnail: (el) => setCurrentProject(el || `kid.webp`),
    },
    {
      image:
        "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1200&q=80",
      title: "Motion Studio",
      subTitle: "Animated Experiences",
      onShowThumbnail: (el) => setCurrentProject(el || `kid.webp`),
    },
    {
      image:
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=80",
      title: "Brand Lab",
      subTitle: "Identity Systems",
      onShowThumbnail: (el) => setCurrentProject(el || `kid.webp`),
    },
    {
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      title: "Web Studio",
      subTitle: "Modern Development",
      onShowThumbnail: (el) => setCurrentProject(el || `kid.webp`),
    },
  ];

  useLenis();
  const containerWorkCardRef = useRef<HTMLDivElement | null>(null);
  const showWorkCardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    globalTimeline
      .from(
        containerWorkCardRef?.current,
        {
          x: -200,
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
        // snap: {
        //   snapTo: 1 / (workCards.length - 1) + 1,
        //   duration: 0.4,
        //   ease: "power2.out",
        //   inertia: false,
        // },
      },
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="flex   w-full px-4 pt-4 h-full justify-between ">
      <div
        ref={containerWorkCardRef}
        className="w-3/12 md:w-2/12  work-card-container h-auto flex flex-col gap-20 "
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
        <div className="h-[30vh] summary-home-page relative z-50 -top-6  w-full flex flex-col justify-between items-center">
          <p className="text-left  max-w-sm font-semibold text-xs z-   text-black/40">
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

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

const GeneralInfo = () => {

  const talks = [
    { title: "Ly UI", url: "#" },
    { title: "Smad Mail", url: "#" },
    { title: "The French Totothe", url: "#" },
    { title: "Nice-carou", url: "#" },
    { title: "Github Sign-Up", url: "#" },
    { title: "Biccas", url: "#" },
    { title: "Go Meal", url: "#" },
    { title: "Humanity Afghanistan", url: "#" },
    { title: "Blindspot", url: "#" },
    { title: "FLAMIN HOT", url: "#" },
    { title: "Nomadi", url: "#" },
    { title: "African Market", url: "#" },
    { title: "Template Waitlist Form", url: "#" }
  ];

        useGSAP(()=>{
            gsap.registerPlugin(SplitText)

            const descriptionWords =  SplitText.create('.author-description',{
                type:"lines,words"
            })

            gsap.to(descriptionWords.words,{
                opacity:1,
                y:0,
                stagger:0.01
            })



        },[])

  return (
    <div className="flex flex-col justify-start w-full items-start gap-8">
      <div className="pt-8 flex EBGaramond12 flex-col gap-8 lg:max-w-[70%] w-full ">
        <p className="author-description  px-4 w-full  text-2xl ">

          Leonel Yimga is a passionate front-end developer with a strong focus on creating engaging web experiences. His work combines modern technologies with creative animations to deliver intuitive user interfaces.
        </p>
        <p className="author-description    px-4 w-full  text-2xl">
          His portfolio showcases a variety of projects, from component libraries to email platforms and fashion websites, all built with cutting-edge tools like React, Next.js, and GSAP.
        </p>
        <p className="author-description    px-4 w-full  text-2xl">
          As a teacher, Leonel shares his knowledge of web development with young people during summer programs, helping them start their journey in coding and design.
        </p>
      </div>
      <div className=" flex EBGaramond12 flex-col gap-8 pt-50   w-full ">
        <div className="flex flex-col gap-4 px-4">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {talks.map((talk, index) => (
              <div key={index} className="flex flex-col gap-2">
                <a href={talk.url} className="text-lg text-neutral-700 font-medium underline">{talk.title}</a>
              </div>
            ))}
          </div>
        </div>
     
      </div>
 
    </div>
  );
};

export default GeneralInfo;

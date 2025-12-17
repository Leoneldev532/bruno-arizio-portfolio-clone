import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

const GeneralInfo = () => {

  const talks = [
    { title: "It's Nice That", links: ["Sculpting Harmony The Brand Identity"] },
    { title: "Sculpting Harmony", links: ["Awwwards Amsterdam 2022 Talk Lover's Magazine Interview Communication Arts"] },
    { title: "Impermanence", links: ["British Interactive Media Association Panel Under Consideration"] },
    { title: "Toptal Top Interactive Agencies", links: ["Interview Awwwards Workshop", "Amsterdam"] },
    { title: "FWA Spotlight", links: ["PAGE Magazine"] }
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

          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
          quibusdam similique rem nesciunt dolore esse, dolorem excepturi ad
          repudiandae eius distinctio tempore, et delectus voluptatum? Quam
          veniam consequatur voluptatibus illo?
        </p>
        <p className="author-description    px-4 w-full  text-2xl">
          His body of work is permeated by a strong emphasis on visual rhythm, space and
 tension in attempt to create for the senses beyond the immediate perception.
        </p>
        <p className="author-description    px-4 w-full  text-2xl">
          As an educator, Bruno advocates using design as a tool for dialoguing with society,
 training designers to understand the power of their voices. Preparing them to
 examine the medium with a critical eye while producing work with intention.
        </p>
      </div>
      <div className=" flex EBGaramond12 flex-col gap-8 pt-50   w-full ">
        <div className="flex flex-col gap-4 px-4">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {talks.map((talk, index) => (
              <div key={index} className="flex flex-col gap-2">
                <h3 className="text-lg text-neutral-700 font-medium">{talk.title}</h3>
                <div className="flex flex-col gap-y-2">

                {talk.links.map((link, i) => <p key={i} className="text-sm font-semibold">{link}</p>)}
              </div>
              </div>
            ))}
          </div>
        </div>
     
      </div>
 
    </div>
  );
};

export default GeneralInfo;

import { useGSAP } from "@gsap/react";
import { useEffect } from "react";
import { NavLink } from "react-router";
import { globalTimeline } from "../lib/utils";
import gsap from "gsap";

const Header = () => {
  useGSAP(() => {
    const links : HTMLLIElement[]  = gsap.utils.toArray(".item-header-link");

    links.forEach((item:HTMLLIElement)=>{
        gsap.set(item,{y:200,opacity:0})
    })
   
    globalTimeline.to(links, {
      y: 0,
      opacity:1,
      duration: 0.5,
      stagger:0.08,
    });

  }, []);

  return (
    <header className="px-4 py-1 z-10  w-full fixed bg-white  overflow-hidden ">
      <ul className="w-full h-full font-semibold   flex  justify-between items-center">
        <div className="w-8/12 md:w-5/12 pr-4 flex justify-between items-center">
        <li className="overflow-hidden h-8 item-header-link">
          <NavLink to="/" className={"underline text-xs"}>
            {" "}
            Leonel Yimga
          </NavLink>
        </li>
        <li className="overflow-hidden item-header-link">
          <NavLink to="/" className={"underline text-xs"}>
            {" "}
            Selected Works
          </NavLink>
        </li>
        <li className="overflow-hidden item-header-link">
          <NavLink to="/" className={"underline text-xs"}>
            {" "}
            General Info
          </NavLink>
        </li>
         </div>

          <div className="w-2/12 flex justify-end items-center">
        <li className="overflow-hidden item-header-link">
          <NavLink to="/" className={"underline text-xs"}>
            {" "}
            CET 12:06
          </NavLink>
        </li>
         </div>
      </ul>
    </header>
  );
};

export default Header;

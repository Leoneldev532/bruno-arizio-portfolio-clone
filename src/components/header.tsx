import { useGSAP } from "@gsap/react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { globalTimeline } from "../lib/utils";
import gsap from "gsap";
import { useLenis } from "../lib/useLenis";
import { useMyContext } from "./context/useMyContext";
import { useState, useEffect } from "react";

const Header = () => {




  useLenis()
  const location = useLocation();
  const isHompage  = location.pathname === "/"

  const [time, setTime] = useState("");

  const {currentInfoProjectSelected,handleSetCurrentInfoProjectSelected} = useMyContext()

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("fr-FR", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );

    tick();
    const interval = setInterval(tick, 1000);

    return () => clearInterval(interval);
  }, []);

  useGSAP(() => {
handleSetCurrentInfoProjectSelected({subTitle:null,title:null,year:null})
    if(!isHompage) return ;

    const links : HTMLLIElement[]  = gsap.utils.toArray(".item-header-link");

    links.forEach((item:HTMLLIElement)=>{
        gsap.set(item,{y:200,opacity:0})
    })

    globalTimeline.to(links, {
      y: 0,
      opacity:1,
      duration: 0.5,
      stagger:0.08,
    })
  }, []);




  return (
    <header className="px-4 py-1 z-10  helveticanowtext  w-full fixed bg-white  overflow-hidden ">
      <ul className="w-full h-full font-semibold   flex  justify-between items-center">
        <div className="w-10/12 sm:w-8/12 md:w-5/12 pr-4 flex justify-between items-center">
        <li className="overflow-hidden item-header-link ">
        {currentInfoProjectSelected?.title ?  <span className="text-xs"> {currentInfoProjectSelected.title}</span> :  <NavLink to="/" className={"underline text-xs"} >
            {" "}
            Leonel Yimga
          </NavLink>}
        </li>
        <li className="overflow-hidden item-header-link">
            {currentInfoProjectSelected?.subTitle ?  <span className="text-xs"> {currentInfoProjectSelected.subTitle} </span> :  
          <NavLink to="/selected-works" className={"underline text-xs"} >
            {" "}
            Selected Works
          </NavLink> }
        </li>
        <li className="overflow-hidden item-header-link">
            {currentInfoProjectSelected?.year ?  <span className="text-xs"> {currentInfoProjectSelected.year}</span> :  
          <NavLink to="/general-info" className={"underline text-xs"} >
            {" "}
            General Info
          </NavLink> }
        </li>
         </div>

          <div className="w-2/12 flex justify-end items-center">
        <li className="overflow-hidden item-header-link text-xs">
            CET  {time}
        </li>
         </div>
      </ul>
    </header>
  );
};

export default Header;

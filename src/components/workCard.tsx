import { useEffect, useRef } from "react"
import type { workCardType } from "../lib/utils"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const WorkCard = (workCard: workCardType) => {
  const workCardRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const container = workCardRef.current
    if (!container) return

  const imageContainer = container.querySelector(".image-container")
  const title = container.querySelector("h2")
  const subTitle = container.querySelector("span")

  if (!imageContainer || !title || !subTitle) return

  gsap.set([title, subTitle], { x: 20, opacity: 0 })

  const tl = gsap.timeline({ paused: true })
  const gl = gsap.timeline({ paused: true })




   tl.to(imageContainer, {
    
          clipPath: "polygon(25% 25%,75% 25%,75% 75%,25% 75%)",
    duration: 0.3,
    ease: "power2.out"
  })
  .to([title, subTitle], {
    x: 0,
    opacity: 1,
    duration: 0.3
  }, "<")


    gl.to(imageContainer, {
        clipPath: `polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)`,
        duration: 0.3
      })
      .to([title, subTitle], {
        x: 20,
        opacity: 0,
        duration: 0.3
      }, "<")


  const show = () => {
    tl.play()
    workCard?.onShowThumbnail?.(workCard.image)
  }

  const hide = () => {
    gl.play()
  }

  const st = ScrollTrigger.create({
    trigger: container,
    start: "top 40%",
    end: "+=100",
    onEnter: show,
    onEnterBack: show,
    onLeave: hide,
    onLeaveBack: hide,
  })

  imageContainer.addEventListener("mouseenter", show)
  imageContainer.addEventListener("mouseleave", hide)

  return () => {
    imageContainer.removeEventListener("mouseenter", show)
    imageContainer.removeEventListener("mouseleave", hide)
    st.kill()
    tl.kill()
    gl.kill()
  }
}, [workCard.image, workCard.onShowThumbnail]) 

  return (
    <div ref={workCardRef} className='flex w-full translate-x-[-100%] h-20 workcard group gap-2'>
      <div className='image-container h-20 w-10/12 lg:w-1/4'>
        {workCard.image && (
          <img src={workCard.image} className='w-full object-cover h-full' alt={workCard.title} />
        )}
      </div>

      <div className='flex flex-col lg:w-2/3 gap-0.5 justify-center items-start'>
        <h2 className="text-xs font-semibold">{workCard.title}</h2>
        <span className="text-black/70 text-xs">{workCard.subTitle}</span>
      </div>
    </div>
  )
}

export default WorkCard
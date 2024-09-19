import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
function Card() {

   const images = [
      '/images/1.png',
      '/images/2.png',
      '/images/3.png',
      '/images/4.png',
      '/images/5.png',
      '/images/6.png',
   ]

   useEffect(() => {
      gsap.utils.toArray('.card').forEach(card => {
         gsap.to(card, {
            opacity: 0,
            scale: 0.8,
            scrollTrigger: {
               trigger: card,
               start: 'top 15%',
               end: 'bottom 15%',
               scrub: true
            }
         })
      });

   }, [])


   return (
      <div className='w-full text-white flex flex-col gap-8 items-center py-[15vh] '>

         {
            images.map((curr) => (
               <div className='card sticky top-[15vh]  w-[27vw] bg-[#383025] flex items-center flex-col gap-5 rounded-lg px-[30px] py-[10vh]'>
                  <img
                     className='w-[150px]'
                     src={curr} alt="no" />
                  <p className='text-2xl font-thin text-center'>
                     The <br />
                     <span className='font-bold'>Algorithem</span>
                  </p>

                  <div className='text-center'>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, amet!
                  </div>
               </div>
            ))
         }

      </div>
   )
}

export default Card
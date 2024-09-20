const main=document.querySelector('.main');
const cursor=document.querySelector('.cursur');
const image=document.querySelector('.overlay')

main.addEventListener('mousemove',(e)=>{
   gsap.to(cursor,{
      x:e.x,
      duration:1,
      y:e.y,
      ease:'back.out'
   })
})


image.addEventListener('mouseenter',()=>{
   cursor.innerHTML='view more'
   cursor.style.backgroundColor=`#ffffffbc`
   gsap.to(cursor,{
      scale:2
   });
   
})
image.addEventListener('mouseleave',()=>{
   cursor.innerHTML=''
      cursor.style.backgroundColor=`#fff`
   gsap.to(cursor,{
      scale:1
   });
   
})
const list=document.querySelector('.listIcon');
const removeList=document.querySelector('.cancle');
const sidebar=document.querySelector('.sidebar');

const tl=gsap.timeline();

tl.to(sidebar,{
   duration:0.4,
   right:0,
})
tl.from('.sidebar li ',{
   duration:0.4,
   x:150,
   stagger:0.1,
})
tl.pause();

list.addEventListener('click',()=>{
   tl.play();
   list.style.display='none'
})

removeList.addEventListener('click',()=>{
   tl.reverse();
      list.style.display='block'
})
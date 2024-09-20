let intialPath=`M 100 250 Q 600 250 1300 250`

let finalPath=`M 100 250 Q 600 250 1300 250`;

const string=document.querySelector('.string');

string.addEventListener('mousemove',(e)=>{
  finalPath=`M 100 250 Q ${e.x} ${e.y} 1300 250`
 
  gsap.to('svg path',{
   attr:{d:finalPath},
   // duration:0.2,
   ease:'power3.Out'

  })
   
})

string.addEventListener('mouseleave',()=>{
   gsap.to('svg path',{
    attr:{d:intialPath},
    duration:0.5,
    ease:`elastic.out(1,0.2)`
   })
    
 })
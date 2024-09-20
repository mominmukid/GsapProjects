const h2=document.querySelector('h2');
const h2Text=h2.textContent;

 const sliptedText=h2Text.split('');
 
 
const halfLength=sliptedText.length/2;
let cutter='';

sliptedText.map((item,index)=>{
 if(index<halfLength){
cutter+=`<span class="a">${item}</span>`
 }else{
   cutter+=`<span class="b">${item}</span>`
 }
h2.innerHTML=cutter;
})

gsap.from('h2 .a',{
     y:100,
     opacity:0,
     dealy:0.5,
     stagger:0.12,
     duration:1,

})

gsap.from('h2 .b',{
   y:100,
   opacity:0,
   dealy:0.5,
   stagger:-0.12,
   duration:1,
})
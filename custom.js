// let btn=document.getElementById('btn');
// let bn=document.getElementById('bn');
// let hh=document.getElementById('hh');
// let dib=document.getElementById('dib');





// btn.addEventListener('click',()=>{
//   bn.style.background='#00ffff'
// });

// const my=['a','b','c','d'];
// let cunter=0;
// while(cunter<my.length){
//   console.log(my[cunter])
//   cunter++;
// }
// let nm="hi   im maruf web designer web developer";
// let maseeage=document.getElementById('maseeage');


// let index=0;
// let isdeleting=false;


// const typeEfet=()=>{
// if(!isdeleting && index<=nm.length){
//   maseeage.textContent=nm.substring(0,index)
// index++;


// } else if(isdeleting && index>=0){
//   maseeage.textContent=nm.substring(0,index)
//   index--;

// } ;
// if(index>nm.length){
//   isdeleting=true;
// }else if(index<0){
//   isdeleting=false;
// } 

// setTimeout(typeEfet,200)


// }
// typeEfet();


let maruf='hello im maruf web designer & web developer';
let dib=document.getElementById('dib');
let card=document.getElementById('card');

let maruf2=0;
let maruf3=false;

const maruf4=()=>{
if(!maruf3 && maruf2<=maruf.length){
dib.style.color='#fff'
// card.style.background='red'
dib.style.fontFamily='"Exo", sans-serif'


  dib.textContent=maruf.substring(0,maruf2);
  maruf2++;

}else if(maruf3 && maruf2>=0){
  dib.textContent=maruf.substring(0,maruf2);
  dib.style.color='#fff'
  dib.style.fontFamily='"Exo", sans-serif'
  maruf2--;
}
setTimeout(maruf4,200);

if(maruf2>maruf.length){
   
  maruf3=true;
}else if(maruf2<0){
  maruf3=false;
 
}

};

maruf4();





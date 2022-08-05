let a_o=[];
let c_o=[];
let tile;
let click_a_o=[];
let score=0;

document.addEventListener('keypress',color_change);
document.addEventListener('click',function(e){

      if(e.target.id !=0 && e.target.id !="header"){
        if(click_a_o.includes(e.target.id)){
          click_a_o=click_a_o.filter(item => item !== e.target.id);
          
        }else{
          alert("oops!WRONG click!!! YOUR SCORE"+" "+score);
          a_o=[];
          c_o=[];
          score=0;
        }
        if(click_a_o.length==0){
          score+=1;
          color_change();
        }
      }
    });

function color_change(){
    tile=(1+Math.floor(Math.random()*16)).toString();
    document.getElementById(tile).style.backgroundColor="white";
    setTimeout(function(){
        document.getElementById(tile).style.backgroundColor="pink";
    },300);
    a_o.push(tile);
    click_a_o=a_o;
    
   }
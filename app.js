alert("Welcome to dice");
alert("GAME RULES:"+"\n"+"- The game has 2 players, playing in rounds "+"\n"+"- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score"+"\n"+"- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn"+"\n"+"- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn"+"\n"+"- The first player to reach 100 points on GLOBAL score wins the game");
alert("قواعد اللعبة:"+"\n"+"- اللعبة لديها لاعبين اثنين ، يلعبون في الجولات"+"\n"+"- في كل دور ، يقوم اللاعب بلف نرد عدة مرات كما يرغب. يتم إضافة كل نتيجة إلى مجموعته"+"\n"+"- ولكن ، إذا كان اللاعب يلف 1 ، يتم فقد كل نقاطه من  بعد ذلك ، حان دور اللاعب التالي"+"\n"+"- يمكن للاعب اختيار"+ " 'Hold' "+" ، مما يعني أنه يتم إضافة نقاط  إلى مجموعته  بعد ذلك ، حان دور اللاعب التالي"+"\n"+" أول لاعب يحصل على 100 نقطة يفوز باللعبة");
document.querySelector('#name-1').textContent=prompt("name of Second player!");
document.querySelector('#name-0').textContent=prompt("name of first player!");
// /*
// GAME RULES:

// - The game has 2 players, playing in rounds
// - In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
// - BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
// - The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
// - The first player to reach 100 points on GLOBAL score wins the game

// */
/*var x="abdelali";
document.querySelector('#name-0').textContent=x;

playere=1;

num3achwa2i = Math.floor(Math.random()*6)+1;
//document.querySelector('#current-'+).textContent=num3achwa2i;
document.querySelector('#current-'+playere).innerHTML='<u>'+num3achwa2i+'</u>'

document.getElementById('hna kandir smiya dyal id bla ma3rf # hit m3arf asln').textContent*/

///kankhbi img f lawl
///dala dyal trja3 
rest() ;
   
var math,count,tabdil,score,tabdil1,score,gamePlaying;


document.querySelector('.btn-roll').addEventListener('click',function(){
     if(gamePlaying){
      math= Math.floor(Math.random()*6+1);
      count+=math; ///kan3mt fih dakkchi li f math
    ///tanbd img   
     tabdil=  document.querySelector('.dice');
     tabdil.style.display='block';
      tabdil.src='dice-'+math+'.png'; 

   if(math!==1){
    document.querySelector('#current-'+tabdil1).textContent=count;///kanht dakchi f html
     ///kan3mt fih dakkchi li f math
   } 
   else{
    tabdil5();///dala dyal nextplayer
       }
     }
        
});

document.querySelector('.btn-hold').addEventListener('click',function(){
       if(gamePlaying){
///nzid scour f blasto
score[tabdil1]+=count;
document.querySelector('#score-'+tabdil1).textContent=score[tabdil1];
    ////larbh ndir lih winer
    if(score[tabdil1]>=100)
    {
      document.querySelector('#name-'+tabdil1).textContent='winner!';
      document.querySelector('.dice').style.display='none';
    
    document.querySelector('.player-'+tabdil1+'-panel').classList.add('winner');
    document.querySelector('.player-'+tabdil1+'-panel').classList.remove('active');
    gamePlaying=false;
    }
  else
    {
    //dala dyal nextplayer
    tabdil5();    
    }
       }            
          })
          
          document.querySelector('.btn-new').addEventListener('click',rest)
             
///dala katbdl liya nextplayer
function tabdil5() {
  
  if(tabdil1==0)
  {
           tabdil1=1;
  }
  else{tabdil1=0;
 }
  count=0;
  document.querySelector('#current-0').textContent=0;
  document.querySelector('#current-1').textContent=0;
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  document.querySelector('.dice').style.display='none';
       
}
 ////dala katrj3 liya kolchi l 0
function rest(){
  document.querySelector('.dice').style.display='none';
            document.querySelector('#score-0').textContent=0;
            document.querySelector('#score-1').textContent=0;
            document.querySelector('#current-0').textContent=0;
            document.querySelector('#current-1').textContent=0;
            score=[0,0];
            count=0;
            tabdil1=0;
            document.querySelector('.player-0-panel').classList.remove('winner');
            document.querySelector('.player-1-panel').classList.remove('winner');
            document.querySelector('.player-0-panel').classList.remove('active');
            document.querySelector('.player-1-panel').classList.remove('active');
            document.querySelector('.player-0-panel').classList.add('active');
            gamePlaying=true;         
}


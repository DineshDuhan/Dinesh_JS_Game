
var scores,roundScore,activePlayer,dice,isPlaying;
init();
//document.querySelector('#current--0').textContent = dice;



 
//var x = document.querySelector('#current--0').textContent;

document.querySelector('.btn--roll').addEventListener('click', function() {
	
   if(isPlaying){	
	//1 random number
  dice = Math.floor(Math.random()*6) + 1;

	//2 display result in dice's image
 var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';

    if(dice !== 1){
    	roundScore += dice;
    	document.querySelector('#current--' + activePlayer ).textContent = roundScore;
    }
    else{
          nextPlayer();
    }
}
});


document.querySelector('.btn--hold').addEventListener('click', function() {
	if(isPlaying){
    scores[activePlayer] += roundScore;
    document.querySelector('#score--'+ activePlayer).textContent = scores[activePlayer];
     


     if(scores[activePlayer]>=100){
     	document.querySelector('#name--'+activePlayer).textContent = 'Winner';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player--'+ activePlayer).classList.add('Winner');
        document.querySelector('.player--'+activePlayer).classList.remove('player--active');
        isPlaying = false;
     }
     else{
     	nextPlayer();
     }
  }
});

document.querySelector('.btn--new').addEventListener('click', init);


function  nextPlayer() {
	// body...

    	activePlayer == 0 ? activePlayer = 1 : activePlayer = 0 ;
    	roundScore =0;
    	document.getElementById('current--0').textContent  ='0';
    	document.getElementById('current--1').textContent = '0';
    	document.querySelector('.player--0').classList.toggle('player--active');
    	document.querySelector('.player--1').classList.toggle('player--active'); 	
         document.querySelector('.dice').style.display = 'none';
}

function init() {
	// body...
    isPlaying = true;
	scores = [0,0];
	activePlayer =0;
	roundScore =0;
 document.getElementById('score--0').textContent = '0';
 document.getElementById('score--1').textContent = '0';
 document.getElementById('current--0').textContent = '0';
 document.getElementById('current--1').textContent = '0';
 document.getElementById('name--0').textContent = 'Player 1';
  document.getElementById('name--1').textContent = 'Player 2';
 document.querySelector('.player--0').classList.remove('Winner');
  document.querySelector('.player--1').classList.remove('Winner'); 
 document.querySelector('.player--0').classList.remove('player--active');
  document.querySelector('.player--1').classList.remove('player--active');
 document.querySelector('.player--0').classList.add('active');


}
let currentPlayingAudio = null;
 
function playSong(url){
  if(currentPlayingAudio){
    currentPlayingAudio.pause();
    currentPlayingAudio.currentTime=0;
  }
  const audio = new Audio(url);
  audio.play();
  currentPlayingAudio=audio;
  audioonended = ()=> {
    currentPlayingAudio=null;
  };
}

function addsongtobutton(buttonId,songUrl)
{
  const button = document.getElementById(buttonId)
  button.addEventListener('click',() => {
    playSong(songUrl);
  });
}

addsongtobutton('button1','song1.mp3');
addsongtobutton('button2','song2.mp3');
addsongtobutton('button3','song3.mp3');
addsongtobutton('button4','song4.mp3');
addsongtobutton('button5','song5.mp3');
addsongtobutton('button6','song6.mp3');


 const btn = document.querySelectorAll(".btn");
  btn.addEventListener('pushdown',(event) => 
  {
   btn.classlist.add('key-pressed');
  });
function handleKeyPress(event) {
   const key=event.key.toLowerCase();
   if(key==='s')
    playSong('song1.mp3');
   else if(key==='h')
    playSong('song2.mp3');
  else if(key==='r')
    playSong('song3.mp3');
  else if(key==='a')
    playSong('song4.mp3');
  else if(key==='v')
    playSong('song5.mp3');
  else
   playSong('song6.mp3');
}
document.addEventListener('keydown',handleKeyPress);

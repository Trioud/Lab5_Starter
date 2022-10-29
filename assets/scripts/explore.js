// explore.js

//Resources found at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const selectVoice = document.getElementById('voice-select');
  const text = document.getElementById('text-to-speak');
  const pushToTalk = document.querySelector('button');
  const face = document.querySelector('img');

  var voiceList = [];
  
  function fillVoiceList(){
    voiceList = synth.getVoices();
    for(var i = 0; i < voiceList.length; i++){
      const choice = document.createElement('option');
      choice.textContent = `${voiceList[i].name}(${voiceList[i].lang})`;
      choice.setAttribute('data-lang', voiceList[i].lang);
      choice.setAttribute('data-name', voiceList[i].name);
      selectVoice.appendChild(choice);
    }
  }
  fillVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = fillVoiceList;
  }

  pushToTalk.addEventListener('click', () => {
		const speak = new SpeechSynthesisUtterance(text.value);
    const chosen = selectVoice.selectedOptions[0].getAttribute('data-name');
    for(var i = 0; i < voiceList.length; i++){
      if(voiceList[i].name === chosen){
        speak.voice = voiceList[i];
      }
    }
    speechSynthesis.speak(speak);
    speak.addEventListener('start', () => {
      face.src = 'assets/images/smiling-open.png';
    })
    speak.addEventListener('end', () => {
      face.src = 'assets/images/smiling.png';
    })
	}) 
}
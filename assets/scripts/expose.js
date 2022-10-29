// expose.js

window.addEventListener('DOMContentLoaded', init);

const playAudio = (path, soundValue) => {
	const audio = new Audio(path);
	audio.volume = soundValue;
	audio.play();
}

function init() {
  	const selectHorn = document.getElementById('horn-select');
	const imageHorn = document.getElementsByTagName("img")[0];
	const imageSoundIndicator = document.getElementsByTagName("img")[1];

	const buttonSound = document.getElementsByTagName("button")[0];
	const inputSound = document.getElementById('volume');

  	selectHorn.addEventListener('change', () => {
    	const value = selectHorn.value;
    	if (value === 'air-horn')
			imageHorn.src = 'assets/images/air-horn.svg'
    	else if (value === 'car-horn')
			imageHorn.src = 'assets/images/car-horn.svg'
    	else if (value === 'party-horn')
		imageHorn.src = 'assets/images/party-horn.svg'
    	else
        	return;

 	})
	buttonSound.addEventListener('click', () => {
		const value = selectHorn.value;
    	if (value === 'air-horn')
			playAudio('assets/audio/air-horn.mp3', inputSound.value)
    	else if (value === 'car-horn')
			playAudio('assets/audio/car-horn.mp3', inputSound.value)
    	else if (value === 'party-horn') {
			playAudio('assets/audio/party-horn.mp3', inputSound.value)
			const Confetti = new JSConfetti();
			Confetti.addConfetti();
		}
    	else
        	return;
	})
	inputSound.addEventListener('change', () => {
		const value = inputSound.value;
		if (value == 0)
			imageSoundIndicator.src = 'assets/icons/volume-level-0.svg'
		else if (value > 0 && value < 33)
			imageSoundIndicator.src = 'assets/icons/volume-level-1.svg'
		else if (value >= 33 && value < 67)
			imageSoundIndicator.src = 'assets/icons/volume-level-2.svg'
		else if (value >= 67)
			imageSoundIndicator.src = 'assets/icons/volume-level-3.svg'
		else
			return;
	})

}
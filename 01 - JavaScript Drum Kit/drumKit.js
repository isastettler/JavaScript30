function removeTransition(e) {
	if (e.propertyName !== 'transform')	return;
	e.target.classList.remove('playing');
}

function playSound(e) {
	const drumKey = document.querySelector(`div[data-key="${e.keyCode}"]`);
	const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	if (!sound)	return;
	drumKey.classList.add('playing');
	sound.currentTime = 0;
	sound.play();
}


const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach((key) => key.addEventListener('transitionend', removeTransition));
document.addEventListener('keydown', playSound);

document.addEventListener('keydown', (e) => {
  const drumKey = document.querySelector(`div[data-key="${e.keyCode}"]`);
  const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!drumKey) {
    return;
  }
  sound.currentTime = 0;
  sound.play();
});

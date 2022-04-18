const sound = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
};

const removeTransition = (e) => {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
};

const keys = document.querySelectorAll('.key');
keys.forEach((key) => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', sound);

// if i didn't use ES6, i could write the function as:
// function removeTransition(e) {
//   if (e.propertyName !== "transform") return;
//   this.classList.remove("playing");
// };

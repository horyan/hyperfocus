// TODOs:
// start remaps to stop functionality
// real-time status subheading: Pending / Waiting for input..., FOCUS MODE ON, BREAK MODE ON
  // countdown timer
// disableInputs: grey text, pointer-events: none;
// roadmap:
  // support decimal minutes 
  // slider toggle: opt in for audio
  // slider toggle: opt in for recurring intervals

function revertDefault(e){
  // paste reusable 'revert default' chunk here
  // e.target.textContent = 'Start';
  // e.target.setAttribute('type', 'submit');
}

function startFocus(bgClasses, focusTimer, breakTimer) {
  bgClasses.toggle('blue-bg');
  document.title = 'Hyperfocus | FOCUS';
  focusTimer.setAttribute('readonly', '');
  breakTimer.setAttribute('readonly', '');
}

function configureTimers(bgClasses, focusTimer, breakTimer) {
  const focusMinutes = focusTimer.value * 1000 * 60;
  const breakMinutes = breakTimer.value * 1000 * 60;
  /*// real-time action button status
  const actionBtn = document.getElementById('action-btn').textContent = 'Stop';
  actionBtn.setAttribute('type', 'reset');
  actionBtn.addEventListener('reset', revertDefault);*/
  
  setTimeout(() => {
    focusMinutes === 60000 ? alert('1 minute of focus has passed') : alert(`${focusMinutes/60000} minutes of focus have passed`);
    
    // start break mode
    bgClasses.toggle('blue-bg');
    bgClasses.toggle('green-bg');
    document.title = 'Hyperfocus | BREAK';
    setTimeout(() => {
      breakMinutes === 60000 ? alert('1 minute of break has passed') : alert(`${breakMinutes/60000} minutes of break have passed`);
      // reusable revert default chunk
      bgClasses.toggle('green-bg');
      document.title = 'Hyperfocus';
      focusTimer.removeAttribute('readonly');
      breakTimer.removeAttribute('readonly');
    }, breakMinutes);
  }, focusMinutes);
}


document.getElementById('interval-form').addEventListener('submit', (e)=>{
  e.preventDefault();
  const backgroundClasses = document.getElementById('background').classList;
  const focusInput = document.getElementById('focus-input');
  const breakInput = document.getElementById('break-input');
  startFocus(backgroundClasses, focusInput, breakInput);
  configureTimers(backgroundClasses, focusInput, breakInput);
});

// TODOs:
// add stop functionality
// include countdown timers
// roadmap:
  // support decimal minutes 
  // slider toggle: opt in for audio
  // slider toggle: opt in for recurring intervals

function revertDefault(e){
  // paste reusable 'revert default' chunk here
  // e.target.textContent = 'Start';
  // e.target.setAttribute('type', 'submit');
  // OR just have stop button enabled, hit to refresh page
    // easier than accounting for different stop behaviors per phase
}

function startFocus(bgClasses, focusTimer, breakTimer) {
  bgClasses.toggle('blue-bg');
  document.title = 'Hyperfocus | FOCUS';
  focusTimer.setAttribute('disabled', '');
  breakTimer.setAttribute('disabled', '');
}

function configureTimers(bgClasses, focusTimer, breakTimer) {
  const focusMinutes = focusTimer.value * 1000 * 60;
  const breakMinutes = breakTimer.value * 1000 * 60;
  // real-time action button status
  const actionBtn = document.getElementById('action-btn');
  actionBtn.textContent = 'Stop';
  // TODO: add functionality
  actionBtn.setAttribute('disabled', ''); // temporary
  //actionBtn.setAttribute('type', 'reset');
  //actionBtn.addEventListener('click', revertDefault);
  
  setTimeout(() => {
    focusMinutes === 60000 ? console.log(('1 minute of focus has passed')) : console.log((`${focusMinutes/60000} minutes of focus have passed`));
    
    // start break mode
    document.getElementById('status').textContent = 'BREAK MODE IN PROGRESS...';
    bgClasses.toggle('blue-bg');
    bgClasses.toggle('green-bg');
    document.title = 'Hyperfocus | BREAK';
    setTimeout(() => {
      breakMinutes === 60000 ? console.log(('1 minute of break has passed')) : console.log((`${breakMinutes/60000} minutes of break have passed`));
      // reusable revert default chunk
      const actionBtn = document.getElementById('action-btn');
      actionBtn.textContent = 'Start';
      // TODO: revert start functionality after implementing stop
      document.getElementById('status').textContent = 'Waiting for input...';
      bgClasses.toggle('green-bg');
      document.title = 'Hyperfocus';
      focusTimer.removeAttribute('disabled');
      breakTimer.removeAttribute('disabled');
      actionBtn.removeAttribute('disabled'); // temporary
    }, breakMinutes);
  }, focusMinutes);
}


document.getElementById('interval-form').addEventListener('submit', (e)=>{
  e.preventDefault();

  // status: FOCUS MODE IN PROGRESS
  document.getElementById('status').textContent = 'FOCUS MODE IN PROGRESS...';

  const backgroundClasses = document.getElementById('background').classList;
  const focusInput = document.getElementById('focus-input');
  const breakInput = document.getElementById('break-input');
  startFocus(backgroundClasses, focusInput, breakInput);
  configureTimers(backgroundClasses, focusInput, breakInput);
});

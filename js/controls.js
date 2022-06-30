export function Controls({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet
}){
  function resetControls(){
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonStop.classList.add('hide')
    buttonSet.classList.remove('hide')
  }
  
  function updateControls(){
    buttonPlay.classList.add('hide');
    buttonPause.classList.remove('hide')
    buttonStop.classList.remove('hide')
    buttonSet.classList.add('hide')
  }

  return {
    resetControls,
    updateControls
  }
}



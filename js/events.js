import { buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonSoundOn,
  buttonSoundOff,
  } from "./elements.js"

export default function Events({
  controls,
  timer,
  sound
}){

  buttonPlay.addEventListener('click', function (){
    controls.play()
  
    timer.countdown()
  
    sound.pressButton()
  })

  buttonPause.addEventListener('click', function(){
    controls.pause()
  
    timer.pauseTime()
  
    sound.pressButton()
  })
  
  buttonStop.addEventListener('click', function(){
    controls.reset()
    timer.reset()
    sound.pressButton()
  })
  
  buttonSoundOn.addEventListener('click', function(){
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
    sound.bgSoundOff()
  })
  
  buttonSoundOff.addEventListener('click', function(){
    buttonSoundOn.classList.remove('hide')
    buttonSoundOff.classList.add('hide')
    sound.bgSoundOn()
  })
  
    buttonSet.addEventListener('click', function(){
      let newMinutes = controls.getMinutes()
  
      if(!newMinutes){
        timer.reset()
        return
      }
  
      timer.updateDisplay(newMinutes, 0)
      timer.updateMinutes(newMinutes)
    })

}



import { Timer } from "./timer";

import { Controls } from "./controls";


const buttonPlay = document.querySelector('.play')

const buttonPause = document.querySelector('.pause')

const buttonStop = document.querySelector('.stop')

const buttonSet = document.querySelector('.set')

const buttonSoundOn = document.querySelector('.soundOn')

const buttonSoundOff = document.querySelector('.soundOff')

const minutesDisplay = document.querySelector('.minutes')

const secondsDisplay = document.querySelector('.seconds')

let minutes = Number(minutesDisplay.textContent)
let timerTimeout

const timer = Timer({minutesDisplay,
  secondsDisplay,
  timerTimeout,
  resetControls})

const controls = Controls({buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet})

buttonPlay.addEventListener('click', function (){
  updateControls()

  timer.countdown()


})

buttonPause.addEventListener('click', function(){
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')

  timer.clearTimeout(timerTimeout)
})

buttonStop.addEventListener('click', function(){
  resetControls()
  timer.resetTimer()
})

buttonSoundOn.addEventListener('click', function(){
  buttonSoundOn.classList.add('hide')
  buttonSoundOff.classList.remove('hide')
})

buttonSoundOff.addEventListener('click', function(){
  buttonSoundOn.classList.remove('hide')
  buttonSoundOff.classList.add('hide')
})

  buttonSet.addEventListener('click', function(){
    newMinutes = prompt('how many minutes?')

    if(!newMinutes){
      timer.resetTimer()
      return
    }

    minutes = newMinutes

    timer.updateTimerDisplay(minutes, 0)

  })


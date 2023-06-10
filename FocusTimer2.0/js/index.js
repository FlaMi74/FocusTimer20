import {
    minutes, minutesDisplay,
    seconds, secondsDisplay,
    btnPlay, btnStop, btnPause,
    btnPlus, btnMinus,
    btnForest, btnRain,
    btnCoffee, btnFire } from "./elements.js"

import Timer from "./timer.js"
import Sounds from "./sounds.js"

const sounds = Sounds({ btnCoffee, btnFire, btnForest, btnRain})

const timer = Timer({ minutesDisplay, secondsDisplay, minutes, seconds, 
                      btnPlay, btnPause })


btnPlay.addEventListener('click', function () {
    btnPlay.classList.add('hide')
    btnPause.classList.remove('hide')
    timer.reciveMinutes()
})

btnPause.addEventListener('click', function () {
    timer.pauseCount()
})

btnStop.addEventListener('click', function () {
    timer.reset()
})

btnPlus.addEventListener('click', timer.plusMinutes)
btnMinus.addEventListener('click', timer.minusMinutes)

btnForest.addEventListener('click', sounds.forestSound)
btnRain.addEventListener('click', sounds.rainSound)
btnCoffee.addEventListener('click', sounds.coffeeSound)
btnFire.addEventListener('click', sounds.fireSound)
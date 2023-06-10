export default function Timer({ minutesDisplay, secondsDisplay, minutes, seconds,
    btnPlay, btnPause }) {

let timerCount
let beginMinutes

function reciveMinutes() {
    if (minutes >= 0 && seconds > 0) {
        countTimer()
        return
    }
    minutes = prompt("Quantos minutos?")
    if (!minutes) {
        pauseCount()
        return
    }
    if ((minutes * 0) != 0) {
        alert("Apenas números!")
        pauseCount()
        return
    } else {
        beginMinutes = Number(minutes)
        minutesDisplay.textContent = String(minutes).padStart(2, "0")
        seconds = Number(secondsDisplay.textContent)
    }
    countTimer()
}

function countTimer() {
    timerCount = setTimeout(function () {
        if ((minutes < 0) && (seconds <= 0)) {
            reciveMinutes()
        }
        if ((minutes == 0 && seconds == 0)) {
            const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
            kitchenTimer.play()
            minutes = 0
            seconds = 0
            reset()
            return
        } else {
            if (seconds == 0) {
                seconds = 60
                seconds--
                minutes = minutes - 1
            } else {
                seconds--
            }
        }
        minutesDisplay.textContent = String(minutes).padStart(2, "0")
        secondsDisplay.textContent = String(seconds).padStart(2, "0")

        countTimer()

    }, 1000)
}

function plusMinutes() {
    if ((minutes > 0) && (seconds >= 0)) {
        minutes = minutes + 5
        minutesDisplay.textContent = String(minutes).padStart(2, "0")
    } else {
        alert("Defina um número no botão Play antes de clicar aqui!")
    }
}

function minusMinutes() {
    if ((minutes <= 0) && (seconds >= 0)) {
        alert("Defina um número no botão Play antes de clicar aqui!")
    } else {
        if ((minutes - 5) < 0) {
            alert("Não é possível executar! Número negativo no contador.")
            return
        } else {
            minutes = minutes - 5
            minutesDisplay.textContent = String(minutes).padStart(2, "0")
        }
    }
}

function pauseCount() {
    btnPlay.classList.remove('hide')
    btnPause.classList.add('hide')
    clearTimeout(timerCount)
}

function reset() {
    pauseCount()
    minutes = 0
    seconds = 0
    minutesDisplay.textContent = String(beginMinutes).padStart(2, "0")
    secondsDisplay.textContent = "00"
}

return {
    reset, reciveMinutes,
    countTimer, plusMinutes,
    minusMinutes, pauseCount
}
}
export default function sounds ({btnCoffee, btnFire, btnForest, btnRain}) {

    const btnPressForest = new Audio("/sounds/Floresta.wav")
    const btnPressFire = new Audio("/sounds/Lareira.wav")
    const btnPressCoffee = new Audio("/sounds/Cafeteria.wav")
    const btnPressRain = new Audio("/sounds/Chuva.wav")
    let playStopForest
    let playStopRain
    let playStopCoffee
    let playStopFire

function forestSound() {
    if (!playStopForest) {
        btnForest.classList.add('hide')
        btnPressForest.play()
        playStopForest = true
        btnPressForest.loop = true
    } else {
        btnPressForest.pause()
        btnForest.classList.remove('hide')
        playStopForest = false
    }
}

function rainSound() {
    if (!playStopRain) {
        btnRain.classList.add('hide')
        btnPressRain.play()
        playStopRain = true
        btnPressRain.loop = true
    } else {
        btnPressRain.pause()
        btnRain.classList.remove('hide')
        playStopRain = false
    }
}

function coffeeSound() {
    if (!playStopCoffee) {
        btnCoffee.classList.add('hide')
        btnPressCoffee.play()
        playStopCoffee = true
        btnPressCoffee.loop = true
    } else {
        btnPressCoffee.pause()
        btnCoffee.classList.remove('hide')
        playStopCoffee = false
    }
}

function fireSound() {
    if (!playStopFire) {
        btnFire.classList.add('hide')
        btnPressFire.play()
        playStopFire = true
        btnPressFire.loop = true
    } else {
        btnPressFire.pause()
        btnFire.classList.remove('hide')
        playStopFire = false
    }
}
return {
    fireSound, coffeeSound,
    forestSound, rainSound
}
}
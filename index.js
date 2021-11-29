const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeleft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0 //обнуляем результат
let currentTime = timeleft.textContent //пусть игра длится 1 минуту

function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole')
    })
    square.forEach(className => {
        className.classList.remove('cross')


    })//в каждой итерации очищаем со всех полей крота и крестик
    let randomPosition = square[Math.floor(Math.random() * 16)] //появление крота носит рандомный характер
    randomPosition.classList.add('mole')



    square.forEach(el => {//пользователь щелкает на крота и мы фиксируем id клетки//меняем класс на крестик и обновляем счет
        el.addEventListener('click', () => {
            if (el.id === randomPosition.id) {
                result = result + 1;
                score.textContent = result
                el.classList.add('cross')

            }
            randomPosition = [] //самый важный момент, каждый раз очищаю массив истории появления крота!!!
        })

    })
}

function moveMole() {
    let timerId = null
    timerId = setInterval(randomSquare, 1000)
}//установили частоту исполнения функции randomSquare

function countDown() {
    currentTime--
    timeleft.textContent = currentTime
    if (currentTime === 0) {
        clearInterval(timerId)
        alert('ИГРА ЗАКОНЧЕНА! Твой счет ' + result)
        window.location.reload()
    }
}//задаем игре временные рамки
let timerId = setInterval(countDown, 1000)
moveMole()
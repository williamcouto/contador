let increment_num = document.getElementById('increment_num')
let num_reset = document.getElementById('reset-num')
let num_decrem = document.getElementById('decrease-num')
let display_num = document.getElementById('display_valor')

increment_num.addEventListener('click', increaseNum)
num_decrem.addEventListener('click', decreaseNum )
num_reset.addEventListener('click', reset)

let count = 0

function increaseNum(){
    count += 1
    display_num.textContent = count
}

function decreaseNum(){
    count -= 1
    display_num.textContent = count
}

function reset(){
    count = 0
    display_num.textContent = count
}
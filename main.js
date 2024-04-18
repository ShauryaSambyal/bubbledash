function bubbleMaker(){
    var clutter = ''
    for (var i = 1; i<=133; i++){
    let rn = Math.floor(Math.random() * 10)
    clutter += `<div class="bubble">${rn}</div>`
    }
    document.querySelector('.pbtm').innerHTML = clutter
}

let timer = 60
function timerSet(){
    var timerInt = setInterval( function() {
        if (timer > 0) {
            timer --
            document.querySelector('#timer').textContent = timer
        } else {
            clearInterval(timerInt)
            document.querySelector('.pbtm').innerHTML = `<h1>Game Over 😉</h1>`
        }
    },1000)
}

let hitRn = 0
function hitPoint(){
    hitRn = Math.floor(Math.random()*10)
    document.querySelector('#hitval').textContent = hitRn    
}

let score = 0
function setScore() {
    score += 10
    document.querySelector('#scoreval').textContent = score
}

document.querySelector('.pbtm').addEventListener('click', function(dets){
    let clickedNum = Number(dets.target.textContent)
    if (clickedNum === hitRn){
        setScore()
        bubbleMaker()
        hitPoint()
    }
})

timerSet()
bubbleMaker()
hitPoint()


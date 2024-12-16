const canvas = document.getElementById('gameArea')
const context = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let ballX = 200
let ballY = 200
let ballRadius = 50
let ballVelocityX = 2
let ballVelocityY = 2

function gameUpdate() {
    ballX += ballVelocityX
    ballY += ballVelocityY
}

function gameDraw() {
    context.beginPath()
    context.arc(ballX, ballY, ballRadius, 0, Math.PI * 2)
    context.stroke()
}

function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height)
    window.requestAnimationFrame(gameLoop)

    gameUpdate()
    gameDraw()
}

gameLoop()


tiles.loadMap(tiles.createMap(tilemap`
    level1
`))
robot.beginScreen()
while (robot.goalReached() == false) {
    if (robot.canMove("forward")) {
        robot.moveForward()
    } else if (robot.canMove("left")) {
        robot.turnLeft()
    } else if (robot.canMove("right")) {
        robot.turnRight()
    }
    
}
//  game.set_game_over_effect(True, effects.confetti)
game.gameOver(true)

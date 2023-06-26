scene.onOverlapTile(SpriteKind.Player, assets.tile`
        door1
    `, function on_overlap_tile(sprite: Sprite, location: tiles.Location) {
    tiles.loadMap(tileMap2)
    robot.beginScreen()
})
let tileMap2 : tiles.WorldMap = null
tiles.loadMap(tiles.createMap(tilemap`
    level1
`))
robot.beginScreen()
let tileMap1 = tiles.createMap(tilemap`
    level1
`)
tileMap2 = tiles.createMap(tilemap`
    level2
`)
tiles.connectMapById(tileMap1, tileMap2, ConnectionKind.Door1)
while (robot.goalReached() == false) {
    if (robot.detectCoin()) {
        robot.collectCoin()
    }
    
    if (robot.canMove("left")) {
        robot.turnLeft()
        robot.moveForward()
    } else if (robot.canMove("forward")) {
        robot.moveForward()
    } else if (robot.canMove("right")) {
        robot.turnRight()
    } else {
        robot.turnLeft()
    }
    
    
}

info.setScore(0)
info.changeScoreBy(1)
info.score()
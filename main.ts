scene.onOverlapTile(SpriteKind.Player, assets.tile`
        door1
    `, function on_overlap_tile(sprite: Sprite, location: tiles.Location) {
    tiles.loadMap(tileMap2)
    robot.beginScreen()
})
tiles.loadMap(tiles.createMap(tilemap`
    level1
`))
robot.beginScreen()
let tileMap1 = tiles.createMap(tilemap`
    level1
`)
let tileMap2 = tiles.createMap(tilemap`
    level2
`)
tiles.connectMapById(tileMap1, tileMap2, ConnectionKind.Door1)
while (robot.goalReached() == false) {
    if (robot.canMove("forward")) {
        robot.moveForward()
        if (robot.canMove("right")) {
            robot.turnRight()
        }
        
    } else if (robot.canMove("right")) {
        robot.turnRight()
    } else {
        robot.turnLeft()
    }
    
}

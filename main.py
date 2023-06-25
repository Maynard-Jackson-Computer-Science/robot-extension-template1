def on_overlap_tile(sprite, location):
    tiles.load_map(tileMap2)
    robot.begin_screen()
scene.on_overlap_tile(SpriteKind.player, assets.tile("""
        door1
    """),
    on_overlap_tile)

tiles.load_map(tiles.create_map(tilemap("""
    level1
""")))
robot.begin_screen()
tileMap1 = tiles.create_map(tilemap("""
    level1
"""))
tileMap2 = tiles.create_map(tilemap("""
    level2
"""))
tiles.connect_map_by_id(tileMap1, tileMap2, ConnectionKind.door1)

while robot.goal_reached() == False:
    if robot.can_move("forward"):
        robot.move_forward()
        if robot.can_move("right"):
            robot.turn_right()
    elif robot.can_move("right"):
        robot.turn_right()
    else:
        robot.turn_left()
    
tiles.load_map(tiles.create_map(tilemap("""
    level1
""")))
robot.begin_screen()
while robot.goal_reached() == False:
    if robot.can_move("forward"):
        robot.move_forward()
    elif robot.can_move("left"):
        robot.turn_left()
    elif robot.can_move("right"):
        robot.turn_right()
# game.set_game_over_effect(True, effects.confetti)
game.game_over(True)
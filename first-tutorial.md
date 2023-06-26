# Create a Character

## Introduction @unplugged

Explore with the robot!

![Image description](https://github.com/Maynard-Jackson-Computer-Science/robot-extension-template1/blob/master/robot-move-1.gif)



## Step One

Use the ``||robot:move forward||`` block to move the robot.

```
// @highlight
robot.move_forward()
```

## Step Two

Determine whether the robot can move using the ``||robot:can move||`` block.

```
// @highlight
if robot.can_move("right"):
    robot.turn_right()

```

## Step Three

Collect any coins with the detect coin ``||robot:detect coin||`` block.

```
if robot.detect_coin():
    robot.collect_coin()
```

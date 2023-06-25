// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`0a000700010203040202040202050f1111111212111113060e111111121211121206101112111212111111070f1112111211121211060f1412111111111111080d0a0c0b0a0c0b0a0a09`, img`
2 2 2 2 2 2 2 2 2 2 
2 . . . 2 2 . . . 2 
2 . . . 2 2 . 2 2 2 
2 . 2 . 2 2 . . . 2 
2 . 2 . 2 . 2 2 . 2 
2 . 2 . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest2,myTiles.tile1,myTiles.tile2,myTiles.tile4,myTiles.tile5], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`0a000700010203040202040202050f1112121111111213060e111111111211121106101212121112111211070f1111111112111211060f1412121212111111080d0a0c0b0a0c0b0a0a09`, img`
2 2 2 2 2 2 2 2 2 2 
2 . 2 2 . . . 2 . 2 
2 . . . . 2 . 2 . 2 
2 2 2 2 . 2 . 2 . 2 
2 . . . . 2 . 2 . 2 
2 . 2 2 2 2 . . . 2 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest2,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile5], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "goalTile":
            case "tile3":return tile3;
            case "startTile":
            case "tile5":return tile5;
            case "door1":
            case "tile4":return tile4;
            case "coinTile":
            case "tile6":return tile6;
            case "floorTile":
            case "tile1":return tile1;
            case "wallTile":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.

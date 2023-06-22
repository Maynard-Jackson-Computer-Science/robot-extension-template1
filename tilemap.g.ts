// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`0a000700010203040202040202050f1111111212111113060e111111121211121206101112111212111111070f1112111211121211060f1112111111111111080d0a0c0b0a0c0b0a0a09`, img`
2 2 2 2 2 2 2 2 2 2 
2 . . . 2 2 . . . 2 
2 . . . 2 2 . 2 2 2 
2 . 2 . 2 2 . . . 2 
2 . 2 . 2 . 2 2 . 2 
2 . 2 . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest2,myTiles.tile1,myTiles.tile2,myTiles.tile3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.

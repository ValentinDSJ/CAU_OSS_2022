function createApple(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

function drawApple(){
    ctx.fillStyle = 'red';
    ctx.fillRect(players[0].apple[1]*tileSize,players[0].apple[0]*tileSize,tileSize,tileSize);
    if(PLAYER_NUM==2)ctx.fillRect(players[1].apple[1]*tileSize,players[1].apple[0]*tileSize,tileSize,tileSize);
}

function ifConflictCreateApple(apple_y, apple_x, list){
    let i = 0;
    console.log("check conflict:",list);
    while (i<list.length){
        if( apple_y===list[i][0] && apple_x===list[i][1]){
                console.log("apple conflict",apple_y,apple_x);
                apple_y = createApple(0,(canvas.clientHeight/tileSize)-1);
                apple_x = createApple(0,(canvas.clientWidth/tileSize)-1);  
                console.log(apple_y,apple_x);
                i=0;
        }
        i+=1
    }
}

function createRandomApple(player){
    apple_y = createApple(0,(canvas.clientHeight/tileSize)-1);
    apple_x = createApple(0,(canvas.clientWidth/tileSize)-1);
    let forConflict = [];
    let apples = [];
    for( let j=0; j<players.length;j++){
        apples.push(players[j].apple)
    }
    
    ifConflictCreateApple(apple_y,apple_x,players[0].snake)

    if(is2Player){
        forConflict.push(players[0]);
        forConflict.push(players[1]);
        if(apples){
            forConflict.push(apples);
        }
        ifConflictCreateApple(apple_y,apple_x,forConflict);
    }
    player.apple = [apple_y,apple_x];
}
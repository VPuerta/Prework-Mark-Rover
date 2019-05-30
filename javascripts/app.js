// Rover Object Goes Here
// ======================
var rover = {direction: "N", x: 0, y: 0, travelLog: [{x: 0, y: 0}]};

// ======================
function turnLeft(rover) {
    var direction = rover.direction;
    switch(direction){
        case "N":
            direction = "W";
            break;
        case "E":
            direction= "N";
            break;
        case "S":
            direction = "E";
            break;
        case "W":
            direction = "S";
            break;
        default:
            break;
    }
    rover.direction = direction;
    console.log("Rover is now " + direction);
}

function turnRight(rover) {
    var direction = rover.direction;
    switch(direction){
        case "N":
            direction = "E";
            break;
        case "E":
            direction= "S";
            break;
        case "S":
            direction = "W";
            break;
        case "W":
            direction = "N";
            break;
        default:
            break;
    }
    rover.direction = direction;
    console.log("Rover is now " + direction);
}

function moveForward(rover){
    if (!canMove(rover)) {
        console.log("You can't move");
        return;
    }

    var direction = rover.direction;
    switch(direction){
        case "N":
            rover.y-=1;
            break;
        case "E":
            rover.x+=1;
            break;
        case "S":
            rover.y+=1;
            break;
        case "W":
            rover.x-=1;
            break;
        default:
            break;
    }

    rover.travelLog.push({x: rover.x, y: rover.y});
    console.log("Rover is now at (" + rover.x + ", " + rover.y + ")");
    log(rover);
}

function travel(rover, command) {
    for (var i= 0; i < command.length; i++) {
        switch (command[i]) {
            case 'f':
                moveForward(rover);
                break;
            case 'r':
                turnRight(rover);
                break;
            case 'l':
                turnLeft(rover);
                break;
            default:
                break;
        }
    }
}

function log(rover) {
    var string = "Rover have been in [";

    for (var i = 0; i< rover.travelLog.length; i++) {
        let point = rover.travelLog[i];
        string += " (" + point.x + ", " + point.y + ")"
    }
    string = string + "]";
    console.log(string);
}

function canMove(rover) {
    var result = true;
    var direction = rover.direction;
    switch(direction){
        case "N":
            result = rover.y > 0;
            break;
        case "E":
            result = rover.x < 10;
            break;
        case "S":
            result = rover.y < 10;
            break;
        case "W":
            result = rover.x > 0;
            break;
        default:
            break;
    }
    return result;
}




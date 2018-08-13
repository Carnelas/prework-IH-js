

var roverto = {
  direction: 'N',
  x : 0,
  y : 0,
  travelLog : []
};

// mensaje de inicio
console.log("Bienvenido a bordo. Usa la función 'move()' con las letras 'l' , 'r', 'f', o 'b' para mover el rover.");

function turnLeft(){
switch (roverto.direction) {
  case 'N':
  roverto.direction = 'W';
    break;
  case 'E':
    roverto.direction = 'N';
    break;
  case 'S':
    roverto.direction = "E";
    break;
  case 'W':
    roverto.direction = "S";
    break;
}   console.log("¡A la izquierda! Ahora mismo estamos mirando al " + roverto.direction);
}

function turnRight(){
  switch (roverto.direction) {
    case 'N':
      roverto.direction = 'E';
      break;
    case 'E':
      roverto.direction = 'S';
      break;
    case 'S':
      roverto.direction = 'W';
      break;
    case 'W':
      roverto.direction = 'N';
      break;
  }   console.log("¡A la derecha! Ahora mismo estamos mirando al " + roverto.direction);
  }

function moveForward(){
  switch (roverto.direction) {
    case "N":
    if (marsMap(roverto)) {
      return;
    } else {
    [roverto.x][roverto.y++];}
    break;
    case "S":
    if (marsMap(roverto)) {
      return;
    } else {
    [roverto.x][roverto.y--];}
    break;
    case "E":
    if (marsMap(roverto)) {
      return;
    } else {
    [roverto.x++][roverto.y];}
    break;
    case "W":
    if (marsMap(roverto)) {
      return;
    } else {
    [roverto.x--][roverto.y];}
    break;
  } //añade al travelLog la situación actual
    roverto.travelLog.push("(" + roverto.x + ", " + roverto.y + ")");
}


function moveBackward() {
  switch (roverto.direction) {
      case "N":
      if (marsMap(roverto)) {
        return;
      } else {
      [roverto.x][roverto.y--];}
      break;
      case "S":
      if (marsMap(roverto)) {
        return;
      } else {
      [roverto.x][roverto.y++];}
      break;
      case "E":
      if (marsMap(roverto)) {
        return;
      } else {
      [roverto.x--][roverto.y];}
      break;
      case "W":
      if (marsMap(roverto)) {
        return;
      } else {
      [roverto.x++][roverto.y];}
      break;
      
      
  } roverto.travelLog.push("(" + roverto.x + ", " + roverto.y + ")");
}

function move(str) {
  switch (str) {
    case 'f':
      moveForward();
      break;
    case 'b':
      moveBackward();
      break;
    case 'l':
      turnLeft();
      break;
    case 'r':
      turnRight();
      break;
    default:
      console.log("Introduce un comando correcto");
      break;
  }
  console.log('direction: ' + roverto.direction);
  console.log('position: ' + roverto.x , roverto.y);
  console.log(roverto.travelLog);
}


  function marsMap() {
    if (roverto.x > 9)
      console.log('¡Borde del tablero!');
    
    if (roverto.y > 9)
      console.log('¡Borde del tablero!');
    
    if (roverto.y < 1)
      console.log('¡Borde del tablero!');
    
    if (roverto.x < 1) 
      console.log('¡Borde del tablero!');
    
  }
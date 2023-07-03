const keydownHandler = event => {
    if (event.keyCode === 37) {
        tankLeftPressed = true;
    } else if (event.keyCode === 39) {
        tankRightPressed = true;
    } else if (event.keyCode === 38 ){
        tankUpPressed = true;
    } else if (event.keyCode === 40){
        tankDownPressed = true;
    } else if (event.keyCode === 32 && !isFired) {
        isCharging = true;
    }
};
  const keyupHandler = event => {
    if (event.keyCode === 37) {
        tankLeftPressed = false;
    } else if (event.keyCode === 39) {
        tankRightPressed = false;
    } else if (event.keyCode === 38){
        tankUpPressed = false;
    } else if (event.keyCode === 40){
        tankDownPressed = false;
    } else if (event.keyCode === 32 && !isFired) {
        isCharging = false;
        gauge = Math.PI;
    }
  };
  const start = setInterval(draw, 10);
  document.addEventListener("keydown", keydownHandler, false);
  document.addEventListener("keyup", keyupHandler, false);
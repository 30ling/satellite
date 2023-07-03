const keydownHandler = event => {
    if (event.keyCode === 37) {
      tankLeftPressed = true;
    } else if (event.keyCode === 39) {
      tankRightPressed = true;
    } else if (event.keyCode === 38 && cannonAngle <= Math.PI) {
      cannonAngle += cannonAngleDIF;
    } else if (event.keyCode === 40 && cannonAngle >= 0) {
       cannonAngle -= cannonAngleDIF;
    } else if (event.keyCode === 32 && !isFired) {
        isCharging = true;
    }
  };
  const keyupHandler = event => {
    if (event.keyCode === 37) {
      tankLeftPressed = false;
    } else if (event.keyCode === 39) {
      tankRightPressed = false;
    } else if (event.keyCode === 32 && !isFired) {
        isCharging = false;
        isFired = true;
        missilePower = gauge * 1.6;
        missileDx = missilePower * Math.cos(cannonAngle);
        missileDy = missilePower * Math.sin(cannonAngle);
        gauge = Math.PI;
    }
  };
  const start = setInterval(draw, 10);
  document.addEventListener("keydown", keydownHandler, false);
  document.addEventListener("keyup", keyupHandler, false);
  
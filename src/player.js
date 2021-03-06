// PLAYER: Create new player and add to environment

const playerBody = Bodies.circle(sizeW / 2, sizeH - 80, sizeW / 60, {
  render: {
    sprite: {
      texture: "images/player.png",
      xScale: 0.15,
      yScale: 0.15,
    },
  },
});
playerBody.frictionAir = 0;
playerBody.friction = 0;
World.add(world, playerBody);

// PLAYER MOVEMENT
let xMove = sizeW / 60;
document.addEventListener("keydown", (event) => {
  let { x, y } = playerBody.velocity;
  if (event.code === "ArrowLeft") {
    Body.setVelocity(playerBody, { x: x - xMove, y: 0 });
  } else if (event.code === "ArrowRight") {
    Body.setVelocity(playerBody, { x: x + xMove, y: 0 });
  } else if (event.code === "Space") {
    let ammo = Bodies.circle(
      playerBody.position.x,
      playerBody.position.y - 50,
      sizeW / 200,
      {
        render: {
          sprite: {
            texture: "images/bullet.png",
            xScale: 0.05,
            yScale: 0.05,
          },
        },
      }
    );
    ammo.frictionAir = 0;
    Body.setVelocity(ammo, { x: 0, y: -(sizeH / 40) });
    World.add(world, ammo);
  }
});
document.addEventListener("keyup", (event) => {
  if (event.code === "ArrowLeft" || event.code === "ArrowRight") {
    Body.setVelocity(playerBody, { x: 0, y: 0 });
  }
});

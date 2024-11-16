// Variants.js
export const fadeIn = (direction = "up", delay = 0) => {
  let x = 0;
  let y = 0;

  // Adjust initial position based on direction
  if (direction === "left") {
    x = -100;
  } else if (direction === "right") {
    x = 100;
  } else if (direction === "up") {
    y = 20;
  } else if (direction === "down") {
    y = -20;
  }

  return {
    hidden: {
      opacity: 0,
      x: x,
      y: y,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay: delay,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
};

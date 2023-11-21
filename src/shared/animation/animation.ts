const duration = 0.6;

export const getAnimationVariants = (additionalDuration = 0) => {
  return {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: (custom: number) => {
      const time = custom * 0.2 + additionalDuration;
      return {
        y: 0,
        opacity: 1,
        transition: { delay: time, duration },
      };
    },
  };
};

export const animationNavbar = {
  initial: {
    y: -100,
  },
  animate: {
    y: 0,
    transition: { duration },
  },
};

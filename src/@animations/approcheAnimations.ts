export const pageAppear = {
  initial : {

  },
  animate: {
    transition: {
      delayChildren : 1,
      staggerChildren : 0.2
    }
  }
}

export const imgAppear = {
  initial: {
    opacity:0, 
    y:50
  },
  animate:{
    opacity : 1,
    y: 0,
    transition:{
      duration : 0.75, 
      ease: "easeOut",
    }
  }
}

export const textAppear = {
  initial: {
    opacity:0, 
  },
  animate:{
    opacity : 1,
    transition:{
      duration : 1.5, 
      ease: "easeOut",
      delay : 1
    }
  }
}
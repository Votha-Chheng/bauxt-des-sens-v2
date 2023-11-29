export const heroAnimation = {
  initial : {
    opacity : 0,
    x:"25%"
  },
  heroAppear : {
    opacity : 1,
    x :0,
    transition : {
      duration : 0.75,
    }
  }
}

export const heroTitleAnimation = {
  initial : {
    opacity : 0,
    x:"-50%",
    y:"50%"
  },
  heroAppear : {
    opacity : 1,
    x:"-50%",
    y:0,
    transition : {
      delay: 0.25,
      duration : 0.75,
    }
  }
}
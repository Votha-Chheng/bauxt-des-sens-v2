export const parentList = {
  ulAppear : {
    transition:  {
      delayChildren : 0.5,
      staggerChildren : 0.2
    }
  }
}

export const childList = {
  initial : {
    opacity: 0,
    x : 200
  },
  ulAppear : {
    opacity : 1,
    x:0,
    transition : {
      duration : 0.8,
    }
  }
}

export const lastSentence = {
  initial : {
    opacity: 0,
  },
  animate : {
    opacity : 1,
    transition : {
      delay:1.5,
      duration : 0.8,
    }
  }
}
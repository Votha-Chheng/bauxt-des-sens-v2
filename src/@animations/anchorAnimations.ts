export const logoAnim = {
  initial:{ 
    opacity : 0
  },
  animate:{ 
    opacity:1,
    transition:{
      opacity:{
        delay:0.9, 
        duration:0.8
      }
    } 
  }  
}

export const bgImgAnim = {
  initial:{ 
    filter : "blur(0px) brightness(125%)", 
    opacity:0
  },
  animate:{ 
    filter:"blur(5px) brightness(125%)", 
    opacity: 0.5,
    transition:{
      filter:{
        delay : 2, 
        duration:2
      },
      opacity: {
        delay:2, 
        duration:1
      }
    } 
  }  
}

export const folder = {
  initial:{
    x:0, 
    display: 'block'
  },
  animate: {
    x:"100%", 
    display: 'none',
    transition:{
      x : {
        delay:0.1, 
        duration:0.75
      }, 
      display: { 
        delay: 3
      }
    }
  }       
}

export const variantsPhrases = {
  initial : {
    opacity: 0,
  },
  animate : {
    opacity: 1,
    transition : {
      delay : 2.25,
    }
  } 
}

export const variantBorderTop = {
  initial : {
    x : '100%',
  },
  animate : {
    x : '0%',
    transition : {
      delay : 2.25,
      duration : 2
    }
  }
}

export const variantBorderBottom = {
  initial : {
    x : '-100%',
  },
  animate : {
    x : '0%',
    transition : {
      delay : 2.25,
      duration : 2
    }
  }
}
import ctaBg from '../public/assets/shared/desktop/bg-pattern-call-to-action.svg'
import leaf from '../public/assets/shared/desktop/bg-pattern-leaf.svg'
import smCircle from '../public/assets/shared/desktop/bg-pattern-small-circle.svg'
import threeCircle from '../public/assets/shared/desktop/bg-pattern-three-circles.svg'
import twoCircle from '../public/assets/shared/desktop/bg-pattern-two-circles.svg'
import introTablet from '../public/assets/shared/tablet/bg-pattern-design-pages-intro-tablet.svg'
import introMobile from '../public/assets/shared/tablet/bg-pattern-design-pages-intro-tablet.svg'
import bgHome from '../public/assets/home/desktop/bg-pattern-hero-home.svg'
import leafLeft from '../public/assets/shared/desktop/bg-pattern-leaf-left.svg'

const theme = {
    colors:{
        pryPeach: 'hsl(11, 73%, 66%)',
        pryBlack: 'hsl(270, 3%, 11%)',
        pryWhite: 'hsl(0, 0%, 100%)',
        secPeach: 'hsl(11, 100%, 80%)',    
        secDarkGrey: 'hsl(264, 5%, 20%)',
        secLightGrey: 'hsl(210, 17%, 95%)',
    },
    font:{
      rubik:`'Rubik', sans-serif`
    },
    weight:{
      regular: '400',
      mid: '500'
    },
    queries:{
      
      mobile: `${375/16}rem`,
      tablet: `${768/16}rem`,
      deskMini: `${976/16}rem`,
      deskMid: `${1129/16}rem`

    },
    bg:{
      ctaBg,
      twoCircle,
      threeCircle,
      leaf,
      smCircle,
      introMobile,
      introTablet,
      bgHome,
      leafLeft
    },
    bRadius: '15px',
    maxWidth: '1111px',
    genPad: '0 20px'

}

export default theme
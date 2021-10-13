const theme ={
    colors:{
        pryPeach: 'hsl(11, 73%, 66%)',
        pryBlack: 'hsl(270, 3%, 11%)',
        pryWhite: 'hsl(0, 0%, 100%)',
        secPeach: 'hsl(11, 100%, 80%)',      secDarkGrey: 'hsl(264, 5%, 20%)',
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

    }
}

export default theme
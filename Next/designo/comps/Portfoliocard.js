
import {PortfolioCard,
    CardImgWrap,
    CardImage,
    CardContent,
    CardHeader,
    CardDes,} from '../styles/component-styles/PortfolioCard.style'



function Portfoliocard({ src, name, description }) {
  return (
    <PortfolioCard>
      <CardImgWrap>
        <CardImage src={src} layout='fill' />
      </CardImgWrap>
      <CardContent>
        <CardHeader>{name}</CardHeader>
        <CardDes>{description}</CardDes>
      </CardContent>
    </PortfolioCard>
  )
}

export default Portfoliocard

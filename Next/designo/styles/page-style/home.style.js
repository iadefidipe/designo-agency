import styled from "styled-components";

export const  StyledHome  = styled.div`
     
     
     &>*{
         section{
            margin: 50px auto;
            max-width: ${ ({theme}) => theme.maxWidth };
            
         }
     }

     & > div:first-child{
        background: ${ ({theme}) => `url(${theme.bg.leafLeft.src}) no-repeat left center`};

        &>div{
            padding: ${ ({theme}) => theme.genPad } ;

        }

     }
     & > div:last-child{
    padding: ${ ({theme}) => theme.genPad } ;

        background: ${ ({theme}) => `url(${theme.bg.leaf.src}) no-repeat right center`};   
     }

     @media (max-width: ${ ({theme}) => theme.queries.tablet }) { 
        
        &> div:first-child,&> div:last-child{
                background: none;
            }
    }

     
`

export const HeroSection = styled.section`
    

    margin: ${ ({theme}) => theme.genPad } ;
    
    background: ${ ({theme}) => `url(${theme.bg.bgHome.src})
    no-repeat right center`};

    background-color: ${ ({theme}) => theme.colors.pryPeach };
  
  border-radius: 15px;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 95px;
  overflow: hidden;
  height: 40rem;
  width: 100%;

  &>*{
    flex: 1;
  }

  @media (max-width:${({theme}) => theme.queries.deskMed}) {

        flex-direction: column;    
    }

    @media (max-width: ${({theme}) => theme.queries.deskMid}) {
    border-radius: 0px ;
   
    }

    @media (max-width: ${({theme}) => theme.queries.tablet}) {
        height: 52.6875rem;
        background-position: 250px center;
        padding: 0 24px;
    }
    @media (max-width: ${({theme}) => theme.queries.tabletMid}) {
        background-position: 200px center;
    }

    @media (max-width:${({theme}) => theme.queries.mobileXL}) {

        background-position: left center;
        
    }



`
export const HeroLeft = styled.div`
    flex: 1.5;

    &>p{
        margin: 20px 0 40px;
    }

    @media (max-width: ${({theme}) => theme.queries.deskMed}) {
        margin-top: 50px;
        text-align: center; 
    }
  
`


export const HeroRight = styled.div`
    position: relative;

    &>div{       
        position: absolute;
        top: -300px;
        left: 0;
        right: -150px;
        bottom: 0;
    }

    @media (max-width: ${({theme}) => theme.queries.deskMed}) {
        height: 848px;
        min-width: 100%;
        & > div {
            top: -150px;        
            left: 50%;
            transform: translateX(-50%);
        } 
    }

    @media (max-width: ${({theme}) => theme.queries.tablet}) {
        & > div {
            top: -200px;
        }      
    }

    @media (max-width:${({theme}) => theme.queries.tabletMid}) {

        &> div {
            top: -150px;
        }
    }

    @media (max-width: ${({theme}) => theme.queries.mobileXL}) {
        &> div {
            top: -120px;
        }   
    }

    @media (max-width: ${({theme}) => theme.queries.mobile}) {
        & > div {
            top: 0px;
        }
    }
`

export const PortfolioSection = styled.section`
    margin: 160px auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    row-gap: 24px;
    column-gap: 30px;
    width: 100%;
    height: 640px;

    
    &> div:first-child{
        grid-column: 1/2;
        grid-row: 1/3;
    }

    @media (max-width:${({theme}) => theme.queries.tablet}) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3, 1fr);
        
        & > div:first-child {
            grid-column: unset;
            grid-row: unset;
        }  
    }

` 



export const HomeDiv = styled.div``

export const QualitiesSection = styled.section`
    display: flex;
    justify-content: space-between;
    gap: 30px;
    color: ${ ({theme}) => theme.colors.pryBlack };
    
    @media (max-width: ${({theme}) => theme.queries.tablet}) {
        flex-direction: column;  
    }


`
export const CtaSection = styled.section`
  transform: translateY(120px);

  @media (max-width:${({theme}) => theme.queries.tablet}) {
        transform: translateY(150px); 
    }

    @media (max-width: ${({theme}) => theme.queries.mobile}) {
        transform: translateY(200px); 
    }
`

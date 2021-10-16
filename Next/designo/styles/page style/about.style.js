import styled from "styled-components";
import Image from "next/image";

export const StyledAbout = styled.div`
padding: 100px 0;

`

export const AboutSection = styled.section`
    

 min-height: 480px;
 border-radius: ${ ({theme}) => theme.bRadius };

 background-color: ${ ({theme}) => theme.colors.pryPeach };
 color: ${ ({theme}) => theme.colors.pryWhite };

 display:flex;
 align-items: center ;
 
  & > *{
      flex:1;
  }

`



export const InnerDiv = styled.div`
   

    flex: 1 635px;

`
export const AboutImage = styled(Image)`
    border-radius: ${ ({theme}) => `0 ${theme.bRadius} ${theme.bRadius} 0 ` };
    width: 100%;
    height: 480px !important;

`
export const ImageDiv = styled.div`
    flex:1 476px;
    
    position: relative;
    object-fit: cover;


   
    
    /* &>div{
        border: 1px solid green;
        height: 100%;
    } */

 
`    
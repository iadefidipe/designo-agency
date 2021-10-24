import React from "react"
import Button from "./Button"
import { locationListData } from "../data/LocationData"
import {
  ImageWrap,
  ListContainer,
  ListImage,
  ListWrap,
} from "../styles/component-styles/LocationList.style"

const LocationList = () => {
  return (
    <ListContainer>
      {locationListData.map((data, index) => (
        <ListWrap key={index}>
          <ImageWrap>
            <ListImage src={data.image} alt={data.country} />
          </ImageWrap>

          <h3>{data.country}</h3>

          <Button
            text={`See Location`}
            label={data.label}
            link={data.anchorLink}
            color={"light"}
          />
        </ListWrap>
      ))}
    </ListContainer>
  )
}

export default LocationList

import React from "react"
import {
  LocationCta,
  LocationPageContainer,
  LocationMaps,
} from "../styles/page-style/locations.style"
import { locationData } from "../data/LocationData"
import Cta from "../comps/Cta"
import MapCard from "../comps/MapCard"

const locations = () => {
  return (
    <LocationPageContainer>
      <LocationMaps>
        <MapCard data={locationData.canada} />
        <MapCard reverse data={locationData.australia} />
        <MapCard data={locationData.uk} />
      </LocationMaps>

      <LocationCta>
        <Cta />
      </LocationCta>
    </LocationPageContainer>
  )
}

export default locations

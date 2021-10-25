import React from "react"
import {
  LocationCta,
  LocationPageContainer,
  LocationMaps,
} from "../styles/page-style/locations.style"
import { locationData } from "../data/LocationData"
import Cta from "../comps/Cta"
import MapCard from "../comps/MapCard"
import Head from "next/head"

const locations = () => {
  return (
    <>
      <Head>
        <title>Locations - Find Our Closest Offices</title>
        <meta
          name='description'
          content='Designo has offices in major cities around the world. Feel free to contact any of our offices to start your project.'
        />
      </Head>
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
    </>
  )
}

export default locations

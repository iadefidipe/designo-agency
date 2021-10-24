import {
  MapCardContainer,
  ContentWrap,
  MapWrap,
  Map,
  MapFrame,
  AddressWrap,
  ContactWrap,
  Address,
  Contact,
  ContactHeader,
  ContactContainer,
} from "../styles/component-styles/MapCard.style"

function MapCard({ data, reverse }) {
  return (
    <MapCardContainer id={`#${data.id}`}>
      <MapWrap reverse={reverse}>
        <Map>
          <MapFrame
            src={data.map.src}
            allowfullscreen=''
            loading='lazy'
          ></MapFrame>
        </Map>

        <ContentWrap>
          <h3>{data.country}</h3>
          <ContactContainer>
            <AddressWrap>
              <Address>{data.address.office}</Address>
              <Address>{data.address.street}</Address>
              <Address>{data.address.state}</Address>
            </AddressWrap>

            <ContactWrap>
              <ContactHeader>{data.contact.header}</ContactHeader>
              <Contact href={`tel:${data.contact.phone}`}>
                {" "}
                P: {data.contact.phone}
              </Contact>
              <Contact href={`mailto:${data.contact.mail}`}>
                {" "}
                M: {data.contact.mail}
              </Contact>
            </ContactWrap>
          </ContactContainer>
        </ContentWrap>
      </MapWrap>
    </MapCardContainer>
  )
}

export default MapCard

import CanadaImage from "../public/assets/shared/desktop/illustration-canada.svg"
import AustraliaImage from "../public/assets/shared/desktop/illustration-australia.svg"
import UkImage from "../public/assets/shared/desktop/illustration-united-kingdom.svg"

export const locationListData = [
  {
    country: "Canada",
    image: CanadaImage,
    label: "see our Canadian contact information",
    anchorLink: "/locations#canada",
  },
  {
    country: "Australia",
    image: AustraliaImage,
    label: "see our Australian contact information",
    anchorLink: "/locations#australia",
  },
  {
    country: "United Kingdom",
    image: UkImage,
    label: "see our United Kingdom contact information",
    anchorLink: "/locations#united-kingdom",
  },
]

export const locationData = {
  canada: {
    id: "canada",
    country: "Canada",
    image: CanadaImage,
    anchorLink: "",
    address: {
      office: "Designo Central Office",
      street: "3886 Wellington Street",
      state: "Toronto, Ontario M9C 3J5",
    },
    contact: {
      header: "Contact",
      phone: "+1 253-863-8967",
      mail: "contact@designo.co",
    },
    map: {
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.1995586386342!2d-79.39672808476332!3d43.644016279121644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d9a0737d9f%3A0xbc1ae74f23fabf4e!2sWellington%20St%20W%2C%20Toronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sng!4v1632567081005!5m2!1sen!2sng",
    },
  },
  australia: {
    id: "australia",
    country: "Australia",
    image: AustraliaImage,
    anchorLink: "",
    address: {
      office: "Designo AU Office",
      street: "19 Balonne Street",
      state: "New South Wales 2443",
    },
    contact: {
      header: "Contact",
      phone: "(02) 6720 9092",
      mail: "contact@designo.au",
    },
    map: {
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.758074760467!2d149.7860512148108!3d-30.329398481779528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ba73450a680702d%3A0x44a309bd6607346e!2s19%20Balonne%20St%2C%20Narrabri%20NSW%202390%2C%20Australia!5e0!3m2!1sen!2sng!4v1632571222666!5m2!1sen!2sng",
    },
  },
  uk: {
    id: "united-kingdom",
    country: "United Kingdom",
    image: UkImage,
    anchorLink: "",
    address: {
      office: "Designo UK Office",
      street: "13  Colorado Way",
      state: "Rhyd-y-fro SA8 9GA",
    },
    contact: {
      header: "Contact",
      phone: "078 3115 1400",
      mail: "contact@designo.uk",
    },
    map: {
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.202353138406!2d1.295836815530474!3d51.14161947957658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47debac4c78f6955%3A0xc66f33ac4fefdd41!2s13%20Colorado%20Cl%2C%20Dover%20CT16%202AY%2C%20UK!5e0!3m2!1sen!2sng!4v1632573610841!5m2!1sen!2sng",
    },
  },
}

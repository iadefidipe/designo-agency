import logoDark from "../public/assets/shared/desktop/logo-dark.png";
import logoLight from "../public/assets/shared/desktop/logo-light.png";
import facebook from "../public/assets/shared/desktop/icon-facebook.svg";
import youtube from "../public/assets/shared/desktop/icon-youtube.svg";
import twitter from "../public/assets/shared/desktop/icon-twitter.svg";
import pinterest from "../public/assets/shared/desktop/icon-pinterest.svg";
import instagram from "../public/assets/shared/desktop/icon-instagram.svg";
import close from "../public/assets/shared/mobile/icon-close.svg";
import hamburger from "../public/assets/shared/mobile/icon-hamburger.svg";

export const menuData = {
  header: {
    logo: logoDark,
    alt: "designo web agency",
    label: "visit homepage",
  },
  footer: {
    logo: logoLight,
    alt: "designo",
    label: "go back to homepage",
  },
  homeLink: "/",
  mobileDrop:{
      hamburger,
      close
  },
  address: {
    office: "Designo Central Office",
    street: "3886 Wellington Street",
    city: "Toronto, Ontario M9C 3J5",
  },
  contact: {
    title: "Contact Us (Central Office)",
    phone: "+234 813-9055-161",
    phoneLink: "tel:+234 813-9055-161",
    phoneLabel: "call us via our official number",
    email: "israeladefidipe@gmail.com",
    emailLink: "mailto:israeladefidipe@gmail.com",
    emailLabel: "send us an email"
  },
  social: [
    {
      label: "follow us on facebook",
      icon: facebook,
      link: "https://facebook.com.designo",
    },
    {
      label: "subscribe to our youtube channel",
      icon: youtube,
      link: "https://youtube.com.designo",
    },
    {
      label: "follow us on twitter",
      icon: twitter,
      link: "https://twitter.com/iadefidipe",
    },
    {
      label: "join us on pinterest",
      icon: pinterest,
      link: "https://pinterest.com.designo",
    },
    {
      label: "follow us on instagram",
      icon: instagram,
      link: "https://instagram.com.designo",
    },
  ],
  menu: [
    {
      title: "our company",
      link: "/about",
      label: "visit about page",
    },
    {
      title: "locations",
      link: "/locations",
      label: "visit locations page",
    },
    {
      title: "contact",
      link: "/contact",
      label: "visit contact page",
    },
  ],
};
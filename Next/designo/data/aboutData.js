import aboutMobile from "../public/assets/about/mobile/image-about-hero.jpg";
import aboutTablet from "../public/assets/about/tablet/image-about-hero.jpg";
import aboutDesktop from "../public/assets/about/desktop/image-about-hero.jpg";
import talentMobile from "../public/assets/about/mobile/image-world-class-talent.jpg";
import talentTablet from "../public/assets/about/tablet/image-world-class-talent.jpg";
import talentDesktop from "../public/assets/about/desktop/image-world-class-talent.jpg";
import dealMobile from "../public/assets/about/mobile/image-real-deal.jpg";
import dealTablet from "../public/assets/about/tablet/image-real-deal.jpg";
import dealDesktop from "../public/assets/about/desktop/image-real-deal.jpg";

const aboutData = {
  sectionOne: {
    header: "About Us",
    content: {
      p1: "Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.",
    },
    image: {
      imgMobile: aboutMobile,
      imgTablet: aboutTablet,
      imgDesktop: aboutDesktop,
      imgAlt: "developers collaborating on a project",
    },
  },
  sectionTwo: {
    header: "World-class talent",
    content: {
      p1: "We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.",
      p2: "Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.",
    },
    image: {
      imgMobile: talentMobile,
      imgTablet: talentTablet,
      imgDesktop: talentDesktop,
      imgAlt: "a lady looking at beautiful arts on the wall",
    },
  },
  sectionThree: {
    header: "The real deal",
    content: {
      p1: "As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.",
      p2: "We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.",
    },
    image: {
      imgMobile: dealMobile,
      imgTablet: dealTablet,
      imgDesktop: dealDesktop,
      imgAlt: "a lady pinning design ideas to the wall",
    },
  },
};

export default aboutData
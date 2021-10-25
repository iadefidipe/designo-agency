import blogr from "../public/assets/web-design/desktop/image-blogr.jpg"
import builder from "../public/assets/web-design/desktop/image-builder.jpg"
import camp from "../public/assets/web-design/desktop/image-camp.jpg"
import express from "../public/assets/web-design/desktop/image-express.jpg"
import photon from "../public/assets/web-design/desktop/image-photon.jpg"
import transfer from "../public/assets/web-design/desktop/image-transfer.jpg"
import webDesign from "../public/assets/home/desktop/image-web-design-large.jpg"
import appDesign from "../public/assets/home/desktop/image-app-design.jpg"
import graphicDesign from "../public/assets/home/desktop/image-graphic-design.jpg"
import airfilter from "../public/assets/app-design/desktop/image-airfilter.jpg"
import eyecam from "../public/assets/app-design/desktop/image-eyecam.jpg"
import faceit from "../public/assets/app-design/desktop/image-faceit.jpg"
import loopstudios from "../public/assets/app-design/desktop/image-loopstudios.jpg"
import todo from "../public/assets/app-design/desktop/image-todo.jpg"
import boxedWater from "../public/assets/graphic-design/desktop/image-boxed-water.jpg"
import timBrown from "../public/assets/graphic-design/desktop/image-change.jpg"
import science from "../public/assets/graphic-design/desktop/image-science.jpg"

export const portfolioData = [
  {
    id: "web-design",
    header: "web design",
    subHeader:
      "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
    image: webDesign,
    imageAlt: "a web app on a desktop",
    cta: "view projects",
    class: "large",
    label: "explore our web design projects",
    title: "Web Design - We Design Web Applications",
    metaDescription:
      "Explore our web applictions. We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
    projects: [
      {
        image: express,
        imageAlt: "express website mockup",
        name: "express",
        description:
          "A multi-carrier shipping website for ecommerce businesses",
      },
      {
        image: transfer,
        imageAlt: "transfer website mockup",
        name: "transfer",
        description:
          "Site for low-cost money transfers and sending money within seconds",
      },
      {
        image: photon,
        imageAlt: "photon website mockup",
        name: "photon",
        description:
          "A state-of-the-art music player with high-resolution audio and DSP effects",
      },
      {
        image: builder,
        imageAlt: "builder website mockup",
        name: "builder",
        description:
          "Connects users with local contractors based on their location",
      },
      {
        image: blogr,
        imageAlt: "blogr website mockup",
        name: "blogr",
        description:
          "Blogr is a platform for creating an online blog or publication",
      },
      {
        image: camp,
        imageAlt: "camp website mockup",
        name: "camp",
        description:
          "Get expert training in coding, data, design, and digital marketing",
      },
    ],

    more: [
      {
        id: "app-design",
        header: "app design",
        image: appDesign,
        imageAlt: "a mobile phone",
        cta: "view projects",
      },
      {
        id: "graphic-design",
        header: "graphic design",
        image: graphicDesign,
        imageAlt: "a beautiful design",
        cta: "view projects",
      },
    ],
  },
  {
    id: "app-design",
    header: "app design",
    subHeader:
      "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.",
    image: appDesign,
    imageAlt: "a mobile phone",
    cta: "view projects",
    class: "small-1",
    label: "explore our app design projects",
    title: "App Design - We Design Mobile Applications",
    metaDescription:
      "Explore our mobile applictions. Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.",
    projects: [
      {
        image: airfilter,
        imageAlt: "airfilter mobile app mockup",
        name: "airfilter",
        description:
          "Solving the problem of poor indoor air quality by filtering the air",
      },
      {
        image: eyecam,
        imageAlt: "eyecam mobile app mockup",
        name: "eyecam",
        description:
          "Product that lets you edit your favorite photos and videos at any time",
      },
      {
        image: faceit,
        imageAlt: "faceit mobile app mockup",
        name: "faceit",
        description:
          "Get to meet your favorite internet superstar with the faceit app",
      },
      {
        image: todo,
        imageAlt: "todo mobile app mockup",
        name: "todo",
        description:
          "A todo app that features cloud sync with light and dark mode",
      },
      {
        image: loopstudios,
        imageAlt: "loopstudios mobile app mockup",
        name: "loopstudios",
        description: "A VR experience app made for Loopstudios",
      },
    ],

    more: [
      {
        id: "web-design",
        header: "web design",
        image: webDesign,
        imageAlt: "a web app",
        cta: "view projects",
      },
      {
        id: "graphic-design",
        header: "graphic design",
        image: graphicDesign,
        imageAlt: "a beautiful design",
        cta: "view projects",
      },
    ],
  },
  {
    id: "graphic-design",
    header: "graphic design",
    subHeader:
      "We deliver eye-catching branding materials that are tailored to meet your business objectives.",
    image: graphicDesign,
    imageAlt: "a beautiful design",
    cta: "view projects",
    class: "small-2",
    label: "explore our graphic design projects",
    title: "Graphics Design - We Design Beautiful Graphics",
    metaDescription:
      "Explore our graphic designs. We deliver eye-catching branding materials that are tailored to meet your business objectives.",
    projects: [
      {
        image: timBrown,
        imageAlt: "tim brown book mockup",
        name: "tim brown",
        description:
          "A book cover designed for Tim Brown’s new release, ‘Change’",
      },
      {
        image: boxedWater,
        imageAlt: "boxed water book mockup",
        name: "boxed water",
        description: "A simple packaging concept made for Boxed Water",
      },
      {
        image: science,
        imageAlt: "science book mockup",
        name: "science",
        description:
          "Get to meet your favorite internet superstar with the faceit app",
      },
    ],

    more: [
      {
        id: "app-design",
        header: "app design",
        image: appDesign,
        imageAlt: "a mobile phone",
        cta: "view projects",
      },
      {
        id: "web-design",
        header: "web design",
        image: webDesign,
        imageAlt: "a web app",
        cta: "view projects",
      },
    ],
  },
]

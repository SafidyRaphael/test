// import images
// import Hero_person from "../assets/images/Hero/person.png";
import Hero_person from "./assets/images/Hero/eray.png";

import postgre from "./assets/images/Skills/postgre.png";
import php from "./assets/images/Skills/php.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";
import mongo from "./assets/images/Skills/mongodb.png";


import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import avatar1 from "./assets/images/Testimonials/ty1.png";
import avatar2 from "./assets/images/Testimonials/iscam.png";
import avatar3 from "./assets/images/Testimonials/germe.jpeg";
// import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

import person_project from "./assets/images/Projects/person.png";
import project1 from "./assets/images/Projects/eray.png";
import project2 from "./assets/images/Projects/logo.png";
import project3 from "./assets/images/Projects/logo.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Eray Digital",
    firstName: "Eray",
    LastName: "Digital",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "",
        text: "Transformez vos idées en solutions numériques innovantes pour une présence en ligne impactante et une croissance durable !",
      },
      // {
      //   count: "20+",
      //   text: "Projects Worked in my career",
      // },
    ],
  },
  skills: {
    title: "Technologie",
    subtitle: "Compétences techniques",
    skills_content: [
      {
        name: "Postre SQL",
        para: "Bases de données SQL et NoSQL",
        logo: postgre,
      },
      {
        name: "Node js",
        para: "Lorem ipsum text  dummy",
        logo: nodejs,
      },
      {
        name: "Adobe Photoshop",
        para: "Designs web et Graphiques.",
        logo: ps,
      },
      {
        name: "React js",
        para: "Développement mobile(React Native)",
        logo: reactjs,
      },
      {
        name: "PHP",
        para: "Développement back-end Wordpress",
        logo: php,
      },
      {
        name: "Python",
        para: "Développement web Fullstack",
        logo: python,
      },
      {
        name: "Mongodb",
        para: "Bases de données NoSQL",
        logo: mongo,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "Activités principales",
    service_content: [
      {
        title: "Web Development",
        para: "Conception de solutions numériques sur mesure (sites web, applications mobiles et web, logiciels personnalisés).",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "Réalisation de designs web et graphiques.",
        logo: services_logo2,
      },
      {
        title: "Web Editing",
        para: "Développement de plateformes éducatives sur mesure pour les établissements scolaires.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "Réalisations majeures",
    image: person_project,
    project_content: [
      {
        title: "Eraylink : Plateforme pour l'insertion professionnelle des jeunes universitaires.",
        image: project1,
      },
      {
        title: "Eray Share : Plateforme d'apprentissage en ligne avec une vaste bibliothèque de cours.",
        image: project2,
      },
      {
        title: "Eray Learning : Plateforme pour la gestion des cours et formations en ligne",
        image: project3,
      },
    ],
  },

  Testimonials: {
    title: "Partenariats stratégiques",
    subtitle: "Nos Partenariats",
    testimonials_content: [
      {
        review:
          "“Observatoire de la Jeunesse”",
        img: avatar1,
        name: "Formation en ligne des membres de la coperative dans la domaine de Gestion",
      },
      {
        review:
          "“FJE ISCAM”",
        img: avatar2,
        name: "Met des formations dans notre Plateforme",
      },
      {
        review:
          "“GERME (Programme de formation à l'entrepreneuriat)”",
        img: avatar3,
        name: "Propose des formations dans notre plateformes",
      },
    ],
  },
  
  Hireme: {
    title: "Collaborons ensemble et Digitalisons le monde de demain",
    subtitle: "",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "Nous sommes ouvers a tout type",
    btnText: "Hire Me",
  },

  Contact: {
    title: "Contactez  nous",
    // subtitle: "Pour plus info",
    social_media: [
      {
        text: "erayrelation@gmail.com",
        icon: GrMail,
        link: "mailto:erayrealtion@gmail.com",
      },
      {
        text: "+261 38 82 180 33 , +261 34 31 480 66",
        icon: MdCall,
        link: "https://wa.me/+261 38 82 180 33",
      },
      {
        text: "Eray Digital",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/company/eray-digital/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};

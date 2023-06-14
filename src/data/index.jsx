import carla from '../assets/carla.png'
import lana from '../assets/lana.png'
import legal from '../assets/legal.png'
import myfreeworks from '../assets/myfreeworks.png'
import rano from '../assets/rano.png'
import townsend from '../assets/townsend.png'
import cover from '../assets/cover.jpg'
import onepage from '../assets/OnePage.png'
import portfolio from '../assets/portfolio.png'
import vitrine from '../assets/vitrine.png'
import commerce from '../assets/e-commerce.png'
import api from '../assets/api.jpg'
import styled from 'styled-components'

export const WebGrowth = () => {
  const WebGrowthSpan = styled.span`
    font-weight: 600;
  `
  return (
    <>
      <WebGrowthSpan>WebGrowth</WebGrowthSpan>
    </>
  )
}

export const whyElements = [
  {
    number: 36,
    text: "d'entreprises se démarquent grâce à un site web.",
  },

  {
    number: 56,
    text: 'des internautes font confiance aux entreprises ayant un site web.',
  },

  {
    number: 75,
    text: "des consommateurs jugent la crédibilité d'une entreprise en ligne sur le design de son site web.",
  },

  {
    number: 83,
    text: 'des internautes font des achats ou sollicitent des services en ligne.',
  },
]

export const archivementsElements = [
  {
    id: 'legal',
    cover: legal,
    description:
      "Legal est un site vitrine pour une agence/entreprise spécialisée dans le droit. Grâce à cette vitrine, les potentiels clients ont facilement accès aux informations voulues et une facilité à entrer en contact avec les membres de l'équipe de l'agence pour de potentiels services.",
  },

  {
    id: 'rano',
    cover: rano,
    description:
      "Ce projet est un site OnePage/landing page dédié à la présentation d'une nouvelle application mobile. Avec un design moderne et attrayant, j'ai mis en avant les fonctionnalités uniques de cette application et les avantages qu'elle offre. Le site offre une expérience immersive avec des visuels captivants, des animations fluides et des informations claires pour attirer l'attention des visiteurs.",
  },

  {
    id: 'lana',
    cover: lana,
    description:
      "Découvrez un site vitrine captivant conçu spécialement pour les passionnés de l'art visuel. Présentant le travail exceptionnel d'un talentueux artiste visuel ( fictif ), ce site est une vitrine numérique mettant en avant sa créativité, son expertise et son style unique. Chaque élément visuel est soigneusement sélectionné pour évoquer des émotions et captiver votre imagination.",
  },

  {
    id: 'carla',
    cover: carla,
    description:
      'Un peu comme le projet Clarita, Carla, photographe, a eu droit à un portfolio. Le sien par contre est multipage et a une section blog (simulées bien entendu).',
  },

  {
    id: 'myfreeworks',
    cover: myfreeworks,
    description:
      'Un projet de marketplace, il permet à tout vendeur de proposer ses articles au grand public.',
  },

  {
    id: 'townsend',
    cover: townsend,
    description:
      'Ce projet est un portfolio multipage pour une personne fictive (simulation).',
  },
]

export const operatedModeElements = [
  {
    id: '01',
    title: 'Etude approfondie du projet',
    paragraph:
      'Une étude approfondie du projet sera réalisée avec vous lors d’un call qui sera programmé afin de cerner au maximum vos besoins et objectifs pour une meilleure',
  },

  {
    id: '02',
    title: 'Devis et cahier de charge',
    paragraph:
      'Un cahier retraçant l’ensemble du processus de construction, vous sera fourni, si vous en avez pas, suivi d’un devis complet incluant toutes les prestations définies dans le cahier des charges.',
  },

  {
    id: '03',
    title: 'Construction et developpement',
    paragraph:
      'Nos experts de chaque prestation intervenant dans votre projet, mettons à dispositions de ce dernier leur expertise, afin de faire ressortir le meilleur de votre projet.',
  },

  {
    id: '04',
    title: 'Livraison et retouche',
    paragraph:
      'Une première version vous sera livrée à cette étape du processus, vous permettant de tester les fonctionnalités et les pages/sections de votre site. Vous aurez la possibilité de demander des retouches autant de fois que voulues si besoin et aucune d’entre elles ne vous sera facturée.',
  },

  {
    id: '05',
    title: 'Déploiement et maintenance',
    paragraph:
      'Nos experts de chaque prestation intervenant dans votre projet, mettons à dispositions de ce dernier leur expertise, afin de faire ressortir le meilleur de votre projet.',
  },
]

export const offresElements = [
  {
    id: 'onepage',
    offre: 'Site OnePage',
    cover: onepage,
    right: false,
  },

  {
    id: 'vitrine',
    offre: 'Site Vitrine',
    cover: vitrine,
    right: true,
  },

  {
    id: 'e-commerce',
    offre: 'Site E-commerce',
    cover: commerce,
    right: false,
  },

  {
    id: 'portfolio',
    offre: 'Portfolio',
    cover: portfolio,
    right: true,
  },

  {
    id: 'api',
    offre: 'Application backend / API Restful',
    cover: api,
    right: false,
  },
]

export const reviewsElements = [
  {
    id: '1',
    review:
      "J'ai été séduit par la qualité du portfolio que WebGrowth m'a réalisé, je les recommande !!",
    name: 'Clarita Semassou',
    fonction: 'Graphic Designer',
    cover: cover,
  },

  {
    id: '2',
    review:
      "WebGrowth m'a permis de convertir plus de 100 prospects en un mois.",
    name: 'Précieux TOSSOU',
    fonction: 'Rédacteur web',
    cover: cover,
  },

  {
    id: '3',
    review:
      "WebGrowth m'a permis de convertir plus de 100 prospects en un mois.",
    name: 'Précieux TOSSOU',
    fonction: 'Rédacteur web',
    cover: cover,
  },

  {
    id: '002',
    review:
      "WebGrowth m'a permis de convertir plus de 100 prospects en un mois.",
    name: 'Précieux TOSSOU',
    fonction: 'Rédacteur web',
    cover: cover,
  },

  {
    id: '03',
    review:
      "WebGrowth m'a permis de convertir plus de 100 prospects en un mois.",
    name: 'Précieux TOSSOU',
    fonction: 'Rédacteur web',
    cover: cover,
  },

  {
    id: '102',
    review:
      "WebGrowth m'a permis de convertir plus de 100 prospects en un mois.",
    name: 'Précieux TOSSOU',
    fonction: 'Rédacteur web',
    cover: cover,
  },

  {
    id: '31010',
    review:
      "WebGrowth m'a permis de convertir plus de 100 prospects en un mois.",
    name: 'Précieux TOSSOU',
    fonction: 'Rédacteur web',
    cover: cover,
  },
]
const question1 = () => {
  const Span = styled.span`
    font-weight: 500;
  `
  return (
    <>
      {WebGrowth()} est une jeune agence de marketing digital qui opère sur le
      marché. Elle dispose de toutes les
      <Span> ressources (humaines et matérielles) </Span>
      nécessaires pour mener à bien votre projet. Tout est fait avec précision
      et assiduité. Le design est pensé et réalisé par des experts en la matière
      et en fonction du projet et de vos objectifs. Chaque ligne est codée avec
      soin et le contenu ajouté est déterminant pour augmenter l’impact de votre
      site.
      <br />
      <br />
      <p>
        Nous vous accompagnerons à chaque étape du processus :
        <div className="row justify-content-center">
          <ul className="col-7 text-start">
            <li>
              <Span>L’étude</Span> de votre projet;
            </li>
            <li>
              <Span>Le design</Span> de votre projet;
            </li>
            <li>
              <Span>Le développement</Span> de votre projet ;
            </li>
            <li>
              <Span>Le déploiement</Span> de votre projet ;
            </li>{' '}
            <li>
              <Span>La maintenance</Span> de votre projet pour nous assurer que
              tout y est.
            </li>
          </ul>
        </div>
      </p>
      Aussi, nous vous impliquons personnellement dans le projet en travaillant
      étroitement avec vous dans l’optique de ne laisser passer aucun de vos
      désirs.
      <br />
      <br />
      Faire appel à {WebGrowth()} pour concevoir un site internet, c’est se
      concentrer sur les tâches plus importantes pour votre entreprise pendant
      que des professionnels mettent en place pour vous,
      <Span> une machine à prospects.</Span>
    </>
  )
}
const Important = styled.span`
  font-weight: 500;
`
const Span = styled.span`
  font-weight: 500;
  font-size: 1.5em;
`
const question2 = () => {
  return (
    <>
      <Span>Pas du tout.</Span> Juste avec une idée, nous pouvons vous
      accompagner sur votre projet. Nous allons ensemble organiser une réunion
      pour discuter plus en profondeur et vous proposer des solutions
      appropriées pour atteindre vos objectifs. Que ce soit pour{' '}
      <Important>la charte graphique</Important>,{' '}
      <Important>le design graphique</Important> ou{' '}
      <Important>les contenus</Important>,{' '}
      <Important>nous nous occupons de tout</Important>.
      <br />
      <br />
      Seuls l’hébergement et le nom de domaine sont à votre charge. Toutefois,
      nous sommes prêts à vous fournir un accompagnement gratuit afin de vous
      orienter et de vous conseiller le meilleur choix. Tout dépendra des moyens
      financiers à votre disposition.
    </>
  )
}

const question3 = () => {
  return (
    <>
      {WebGrowth()} priorise la création de site web par l’exploitation des
      <Important> langages de programmation</Important>,{' '}
      <Important>les frameworks</Important> et{' '}
      <Important>le coding en général</Important>. Notre objectif est d’aider
      nos clients à créer des{' '}
      <Important>sites originaux et authentiques</Important> qui vous permettent
      de vous démarquer des offres proposées par les utilisateurs de CMS comme
      WordPress.
      <br />
      <br />
      L’avantage ici est d’optimiser votre référencement dans les moteurs de
      recherche sans dépenser une fortune. Pendant que les templates nécessitent
      plusieurs abonnements mensuels plus ou moins coûteux, nos services
      requièrent uniquement l’achat d’un hébergement et d’un nom de domaine, ce
      qui est une option très économique.
    </>
  )
}

const question4 = () => {
  return (
    <>
      Chez {WebGrowth()}, nous aimons la flexibilité. De ce fait, les
      gestionnaires de contenu ( CMS ) sont proscrits dans nos prestations. Nous
      utilisons purement et uniquement le coding.
      <br />
      <br />
      Comme outils utilisés nous avons les langages tels que :
      <Important>JavaScript</Important> , <Important>HTML 5</Important>,{' '}
      <Important>CSS 3</Important>, <Important>PHP</Important>,{' '}
      <Important>MySql</Important> et les frameworks comme{' '}
      <Important>React Js</Important>, <Important>Laravel</Important>, pour ne
      citer qu’eux.
    </>
  )
}

const question6 = () => {
  return (
    <>
      <Span>Bien entendu</Span>. Cela est primordial et passe par plusieurs
      points :
      <ul>
        <li>
          <Important>Les contenus (textes, images, etc.)</Important> : ils
          seront réalisés avec soin et optimisés conformément aux exigences
          actuelles dans le domaine de façon à booster votre référencement.
        </li>

        <li>
          <Important>La structure technique</Important> : Votre code source,
          propre, commenté dans certains cas, respectera les règles de balisages
          HTML et participera au chargement rapide du votre site.
        </li>

        <li>
          <Important>Liens externes</Important> : l’échange de ceux-ci avec
          votre site sera
        </li>
      </ul>
    </>
  )
}

const question7 = () => {
  return (
    <>
      <Span> Tout à fait</Span>, il le sera. <Important>60 %</Important> des
      sites sur internet sont consultés via des moyens mobiles comme les
      téléphones, tablettes et autres mobiles et il y a de grande chance que
      vous soyez en train de consulter celui-ci sur votre smartphone.
      <br />
      <br />
      Étant donné que chez {WebGrowth()} nous mettons l’accent sur le fait qu’un
      site doit être un meilleur investissement, il serait contraire à cela que
      votre site ne soit pas optimisé pour les mobiles, tablettes etc.
    </>
  )
}

const question8 = () => {
  return (
    <>
      <Span>Aucunement</Span>. Et c’est l’avantage du système «{' '}
      <Important>All in One</Important> ». Tout est compris dans le prix de la
      prestation. Jusqu’à ce que vous soyez{' '}
      <Important>satisfait à 100%</Important>, toutes les retouches sont
      comprises dans la prestation. Même pas un centime vous sera facturé de
      plus
    </>
  )
}
export const faqElements = [
  {
    id: '1',
    question: 'Pourquoi confier mon projet de conception de site à WebGrowth ?',
    answer: question1(),
  },

  {
    id: '2',
    question:
      'Devrais-je avoir toutes les ressources nécessaires à portée de main avant de vous contacter.?',
    answer: question2(),
  },

  {
    id: '3',
    question:
      'Dois-je avoir un hébergement et un nom de domaine avant toutes choses?',
    answer: question3(),
  },

  {
    id: '4',
    question:
      'Quels sont les outils de développement utilisés chez WebGrowth.?',
    answer: question4(),
  },

  {
    id: '5',
    question:
      'Avez-vous les compétences nécessaires pour produire un résultat exceptionnel ?',
    answer: `Chaque projet est unique et important et traité avec toutes les exigences
    de nos clients. De ce fait, nous mettons à votre disposition,
    des professionnels qualifiés et des experts
    dans différents domaines. Nous vous donnons même la possibilité
    d’avoir un entretien avec eux pour discuter de votre projet
    et de la stratégie à mettre en place pour le réaliser.`,
  },

  {
    id: '6',
    question: 'Mon site sera-t-il optimisé pour le référencement SEO.?',
    answer: question6(),
  },

  {
    id: '7',
    question:
      'Mon site sera-t-il adapté aux autres écrans ( mobiles, tablettes, etc. ).?',
    answer: question7(),
  },

  {
    id: '8',
    question: 'Quant aux retouches, sont-elles facturées? ',
    answer: question8(),
  },
]

export const footerElements = [
  {
    id: '1',
    title: 'Whatsapp:',
    icone: 'bi-whatsapp',
    data: '+229 53 82 72 59',
  },

  {
    id: '2',
    title: 'Mail:',
    icone: 'bi-envelope',
    data: 'webgrowthservice@gmail.com',
  },
]

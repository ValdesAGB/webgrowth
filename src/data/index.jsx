import socialfath from '../assets/reviewer cover/socialfath.jpeg'
import designer from '../assets/reviewer cover/designer.jpg'
import redacteur from '../assets/reviewer cover/redacteur.jpg'
import unknow from '../assets/reviewer cover/unknow.jpg'
import carla from '../assets/lastAchiviements/carla.png'
import lana from '../assets/lastAchiviements/lana.png'
import legal from '../assets/lastAchiviements/legal.png'
import rano from '../assets/lastAchiviements/rano.png'
import onepage from '../assets/offres cover/offre onepage.png'
import portfolio from '../assets/offres cover/offre portfolio.png'
import vitrine from '../assets/offres cover/offre vitrine.png'
import commerce from '../assets/offres cover/offre e-commerce.png'
import styled from 'styled-components'
import React from 'react'

export const rdv = 'https://calendly.com/webgrowthservice/call-de-decouverte'

const Important = styled.span`
  font-weight: 500;
`

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

export const navigationElements = [
  {
    id: 'accueil',
    title: 'Accueil',
    href: '#',
  },

  {
    id: 'achievements',
    title: 'Nos Réalisations',
    href: '#achievements',
  },

  {
    id: 'offers',
    title: 'Nos Offres',
    href: '#offers',
  },

  {
    id: 'reviews',
    title: 'Avis Clients',
    href: '#reviews',
  },

  {
    id: 'faq',
    title: 'FAQ',
    href: '#faq',
  },
]

export const whyElements = [
  {
    number: 36,
    text: "des entreprises de part le monde ont décidé d'investir en 2022, dans la création de sites web pour s’ouvrir à de  nouvelles opportunités.",
  },

  {
    number: 56,
    text: 'des internautes font moins confiance aux entreprises sans site web.',
  },

  {
    number: 75,
    text: "des consommateurs clés jugent la crédibilité d'une entreprise sur le design de son site web.",
  },

  {
    number: 83,
    text: " des internautes francophones ont pris l'habitude de solliciter des services et/ou de faire leurs achats en ligne suite à la ",
  },
]

const legalDescription = () => {
  return (
    <React.Fragment>
      Le prototype <Important>Legal</Important> est un exemple de site web que
      nous avons développé pour une entreprise spécialisée dans le domaine du
      droit. Ce site est conçu pour présenter de manière professionnelle les
      services juridiques offerts par l'entreprise et fournir aux visiteurs des
      informations claires et pertinentes.
      <br />
      <br />
      Doté d'un design sobre et élégant, le prototype Legal met en avant
      l'expertise et la crédibilité de l'entreprise dans le domaine juridique.
      La page d'accueil offre un aperçu concis des principaux domaines de
      pratique couverts, tels que le droit des affaires, le droit de la famille
      et le droit immobilier, ainsi que des témoignages clients mettant en
      valeur les réussites de l'entreprise.
      <br />
      <br />
      Une navigation intuitive permet aux utilisateurs de trouver rapidement les
      informations dont ils ont besoin, que ce soit les coordonnées de
      l'entreprise, les profils des avocats, les services offerts ou les
      articles de blog sur des sujets juridiques pertinents. Le prototype Legal
      propose également une section de ressources, offrant aux visiteurs des
      documents juridiques téléchargeables, des FAQ et des guides pratiques pour
      les aider dans leurs démarches.
      <br />
      <br />
      Grâce à une mise en <Important>page responsive</Important>, le prototype
      Legal s'adapte parfaitement à tous les appareils, offrant une expérience
      utilisateur optimale aussi bien sur ordinateur que sur tablette ou
      smartphone.
      <br />
      <br />
      Avec le prototype Legal, notre objectif est de créer un site web
      professionnel et convaincant pour l'entreprise spécialisée dans le droit,
      renforçant sa visibilité en ligne, générant de nouvelles opportunités
      commerciales et inspirant confiance aux visiteurs en quête de services
      juridiques de qualité.
    </React.Fragment>
  )
}

const ranoDescription = () => {
  return (
    <React.Fragment>
      Le prototype <Important>Rano</Important> est une landing page conçue pour
      présenter une application mobile innovante et pratique. Cette page
      d'accueil captivante offre aux visiteurs un aperçu convaincant des
      fonctionnalités et des avantages de l'application Rano.
      <br />
      <br />
      Avec un design moderne et attrayant, le prototype Rano met en valeur
      l'interface élégante et conviviale de l'application mobile. Des visuels
      attrayants et des illustrations soigneusement choisies permettent aux
      utilisateurs de visualiser les différents écrans de l'application et de se
      projeter dans son utilisation.
      <br />
      <br />
      La landing page Rano met en évidence les principales caractéristiques de
      l'application ainsi que quelques témoignages d'utilisateurs satisfaits
      venant renforcer sa crédibilité et démontrer son impact positif sur la
      productivité et l'organisation quotidienne. Des appels à l'action bien
      placés invitent les visiteurs à télécharger l'application sur les
      plateformes iOS et Android, offrant ainsi une expérience utilisateur
      fluide et accessible à tous.
      <br />
      <br />
      Avec le prototype Rano, notre objectif est de créer une landing page
      captivante et persuasive, mettant en avant les fonctionnalités
      exceptionnelles de l'application mobile. Nous visons à susciter
      l'engagement des visiteurs, à générer des téléchargements et à faire de
      Rano l'application de référence de son secteur.
    </React.Fragment>
  )
}

const lanaDescription = () => {
  return (
    <React.Fragment>
      Le prototype <Important>Lana</Important> est un site OnePage élégant et
      percutant conçu spécialement pour une agence de photographie. Cette page
      unique offre une expérience immersive et met en valeur le talent
      artistique et la créativité de l'agence.
      <br />
      <br />
      Avec un design épuré et moderne, le prototype Lana offre une présentation
      visuelle époustouflante des travaux photographiques de l'agence. Des
      images de haute qualité sont soigneusement intégrées tout au long de la
      page, capturant l'essence des moments et des émotions figés par l'objectif
      de l'agence.
      <br />
      <br />
      La navigation fluide et intuitive permet aux visiteurs de parcourir
      facilement les différentes sections du site OnePage. Le prototype Lana
      propose également un formulaire de contact simple et convivial permettant
      aux visiteurs intéressés de prendre rapidement et facilement contact avec
      l'équipe de l'agence.
      <br />
      <br />
      Avec le prototype Lana, notre objectif est de créer un site OnePage
      remarquable qui capture l'essence et la magie de l'art de la photographie.
      Nous souhaitons offrir une vitrine attrayante pour l'agence de
      photographie, mettant en avant son talent, son style distinctif et son
      professionnalisme. En combinant un design visuellement captivant et une
      navigation intuitive, le site Lana vise à attirer de nouveaux clients et à
      inspirer un véritable sentiment d'émerveillement devant le pouvoir de la
      photographie.
    </React.Fragment>
  )
}

const carlaDescription = () => {
  return (
    <React.Fragment>
      Le prototype <Important>Carla</Important> est un site OnePage élégant et
      artistique, spécialement conçu pour mettre en valeur le talent et le
      travail d'une photographe passionnée. Cette page unique offre une
      expérience visuelle immersive, permettant aux visiteurs de découvrir et
      d'apprécier l'art de la photographe Carla.
      <br />
      <br />
      Avec un design minimaliste et moderne, le prototype Carla met en avant les
      clichés captivants et émotionnels de la photographe. Chaque image sera
      soigneusement sélectionnée pour transmettre un message et une histoire
      uniques, créant ainsi une connexion profonde avec les spectateurs.
      <br />
      <br />
      La navigation fluide et intuitive du site OnePage Carla permet aux
      visiteurs de parcourir aisément les différentes sections. Des galeries
      d'images interactives invitent les visiteurs à plonger dans l'univers
      visuel de Carla et à explorer sa vision artistique.
      <br />
      <br />
      Le prototype Carla propose également une section dédiée à la biographie de
      la photographe, permettant aux visiteurs de mieux comprendre son parcours,
      sa passion et son approche artistique. Un formulaire de contact discret
      est également disponible pour ceux qui souhaitent obtenir plus
      d'informations ou réserver une séance photo.
      <br />
      <br />
      Avec le prototype Carla, notre objectif est de créer une expérience en
      ligne qui met en valeur le talent et l'art de la photographe. Nous
      souhaitons offrir une vitrine visuelle inspirante, permettant aux
      visiteurs d'apprécier le travail exceptionnel de Carla et de ressentir
      l'émotion et la beauté de ses photographies. En combinant un design épuré,
      une navigation intuitive et des images puissantes, le site Carla aspire à
      captiver les visiteurs, à attirer de nouveaux clients et à susciter un
      véritable engouement pour l'art de la photographie.
    </React.Fragment>
  )
}

export const archivementsElements = [
  {
    id: 'legal',
    cover: legal,
    description: legalDescription(),
    href: 'https://legal.valdesagbokoni.com/',
  },

  {
    id: 'rano',
    cover: rano,
    description: ranoDescription(),
    href: 'https://rano.valdesagbokoni.com/',
  },

  {
    id: 'lana',
    cover: lana,
    description: lanaDescription(),
    href: 'https://lana.valdesagbokoni.com/',
  },

  {
    id: 'carla',
    cover: carla,
    description: carlaDescription(),
    href: 'https://carlatown.valdesagbokoni.com/',
  },
]

export const operatedModeElements = [
  {
    id: '01',
    title: 'Etude approfondie du projet',
    paragraph:
      'Une étude approfondie du projet sera réalisée avec vous lors d’un call ou par messagerie selon votre convenance, afin de cerner au maximum vos besoins et objectifs pour une ',
  },

  {
    id: '02',
    title: 'Devis et cahier de charge',
    paragraph:
      "Un cahier des charges retraçant l’ensemble du processus vous sera fourni s'il vous fait défaut. Il sera suivi d’un devis complet incluant toutes les prestations définies dans le cahier susmentionné.",
  },

  {
    id: '03',
    title: 'Construction et developpement',
    paragraph:
      'Notre équipe d’experts intervenant dans votre projet, se mettront à l’ouvrage afin d’en faire ressortir le meilleur dans le respect de vos recommandations et en restant axés sur votre vision.',
  },

  {
    id: '04',
    title: 'Livraison et retouche',
    paragraph:
      'Une première version vous sera livrée à cette étape du processus, vous permettant de tester les fonctionnalités et les pages/sections de votre site. Vous aurez la possibilité de demander des retouches autant de fois que voulues si besoin et aucune d’entre elles ne vous sera sur-facturée dans les délais du projet.',
  },

  {
    id: '05',
    title: 'Déploiement et maintenance',
    paragraph: `Après votre approbation, la version finale de votre projet sera déployée sur votre hébergeur, lequel vous aurez préalablement à votre disposition. 
      Une fois déployé, nous garantissons la maintenance de votre site sur une période de
      `,
  },
]

const siteOnePage = () => {
  return (
    <React.Fragment>
      Un site <Important>OnePage</Important> est un type de site web qui
      présente tout son contenu sur une seule page, éliminant ainsi la nécessité
      de naviguer vers différentes pages. Toutes les informations, sections et
      éléments visuels sont organisés de manière fluide et continue sur la même
      page. Le défilement vertical permet aux visiteurs de parcourir les
      différentes sections du site sans interruption. Un site OnePage est idéal
      pour présenter de manière concise et visuellement attrayante des
      informations essentielles, des produits ou services spécifiques, ou pour
      créer une expérience immersive en mettant l'accent sur un contenu
      principal.
      <br />
      <br />
      Grâce à sa conception épurée, sa navigation fluide et son format intuitif,
      un site OnePage offre une expérience utilisateur cohérente et engageante,
      permettant aux visiteurs d'accéder facilement à l'information et de se
      concentrer sur les messages clés, le tout sur une seule page.
    </React.Fragment>
  )
}

const siteVitrine = () => {
  return (
    <React.Fragment>
      Un site <Important>vitrine</Important> est un site web qui agit comme une
      vitrine virtuelle pour une entreprise, une organisation, un produit ou un
      service. Son objectif principal est de présenter de manière attrayante et
      informative l'identité, les valeurs, les produits ou services de l'entité
      représentée. Contrairement à un site de commerce électronique, un site
      vitrine ne propose généralement pas de fonctionnalités de vente en ligne,
      mais se concentre plutôt sur la fourniture d'informations clés et la
      génération de prospects ou de contacts. Il est conçu avec un design
      soigné, une navigation intuitive et un contenu concis pour offrir une
      expérience utilisateur optimale. Un site vitrine vise à créer une présence
      en ligne professionnelle, à attirer l'attention des visiteurs et à les
      encourager à en savoir plus sur l'entreprise ou à prendre contact pour en
      savoir davantage sur ses offres.
      <br />
      <br />
      En résumé, un site vitrine est une vitrine virtuelle attrayante et
      informative pour une entreprise ou une organisation, mettant en valeur son
      identité, ses produits ou services. Son objectif est de fournir une
      présence en ligne professionnelle, de susciter l'intérêt des visiteurs et
      de les inciter à en savoir plus ou à prendre contact.
    </React.Fragment>
  )
}

const portfolioService = () => {
  return (
    <React.Fragment>
      Un <Important>portfolio web</Important> est un site web qui présente de
      manière organisée et visuellement attrayante les réalisations, les
      compétences et les expériences d'un individu ou d'une entreprise. Il sert
      de vitrine en ligne pour exposer des exemples concrets de travaux réalisés
      dans des domaines tels que le design graphique, l'illustration, la
      photographie, le développement web ou d'autres formes d'expression
      créative. Un portfolio web permet aux visiteurs de découvrir le style, la
      créativité et la qualité du travail effectué, tout en offrant des
      informations complémentaires sur le parcours professionnel, les
      compétences et les réalisations de l'auteur du portfolio. Il est conçu de
      manière à mettre en valeur visuellement les projets, à fournir une
      navigation intuitive et à offrir des moyens de contact pour des
      opportunités professionnelles.
      <br />
      <br />
      En résumé, un portfolio web est un site web qui présente de manière
      esthétique et organisée les travaux, les compétences et l'expérience d'un
      individu ou d'une entreprise. Il sert de vitrine en ligne pour exposer des
      réalisations, tout en fournissant des informations sur le parcours
      professionnel et des moyens de contact. Le portfolio web permet aux
      visiteurs de découvrir et d'apprécier le talent et la créativité de
      l'auteur, tout en offrant des opportunités professionnelles et une
      visibilité accrue dans le domaine concerné.
    </React.Fragment>
  )
}

const apiBackend = () => {
  return (
    <React.Fragment>
      Une <Important>application backend</Important>, également appelée
      application côté serveur, est la partie d'un système logiciel qui gère le
      traitement des données, les calculs et les opérations liées à la logique
      métier d'une application. Contrairement à l'application frontend, qui se
      concentre sur l'interface utilisateur et l'interaction avec les
      utilisateurs, l'application backend fonctionne généralement en
      arrière-plan, traitant les requêtes, gérant les bases de données et
      fournissant les services nécessaires à l'application. Elle peut être
      développée à l'aide de langages de programmation tels que Python, Java,
      Ruby ou Node.js, et est responsable de la gestion des fonctionnalités
      telles que l'authentification, l'accès aux données, la logique de
      traitement et la communication avec d'autres systèmes.
      <br />
      <br />
      L'application backend est essentielle pour assurer le bon fonctionnement
      d'une application, en gérant les aspects techniques et les opérations
      nécessaires à son bon déploiement et à son utilisation. Elle fournit les
      fonctionnalités nécessaires pour manipuler les données, communiquer avec
      les bases de données, exécuter des tâches complexes et garantir la
      sécurité et l'intégrité des informations. En résumé, l'application backend
      constitue la partie "côté serveur" d'un système logiciel, gérant les
      opérations et la logique métier nécessaires au bon fonctionnement d'une
      application, tout en assurant la communication avec d'autres composants du
      système.
    </React.Fragment>
  )
}

const eCommerce = () => {
  return (
    <React.Fragment>
      Un site <Important>e-commerce</Important> est une plateforme en ligne
      conçue pour faciliter la vente de produits ou de services. Il permet aux
      entreprises de présenter leur catalogue, de recevoir des commandes et de
      traiter les paiements en ligne de manière sécurisée. Les clients peuvent
      parcourir les produits, obtenir des informations détaillées, passer des
      commandes et suivre leur livraison. Un site e-commerce vise à offrir une
      expérience d'achat pratique, avec une navigation intuitive, des
      descriptions claires et des options de paiement sécurisées. Il permet aux
      entreprises d'étendre leur portée, de promouvoir leurs produits et de
      générer des revenus grâce aux ventes en ligne.
      <br />
      <br />
      En résumé, un site e-commerce est une plateforme en ligne pour la vente de
      produits ou de services. Il offre aux entreprises une présence numérique,
      une visibilité étendue et une expérience d'achat fluide pour les clients.
    </React.Fragment>
  )
}

export const offresElements = [
  {
    id: 'onepage',
    offre: 'Site OnePage',
    cover: onepage,
    right: false,
    text: siteOnePage(),
  },

  {
    id: 'vitrine',
    offre: 'Site Vitrine',
    cover: vitrine,
    right: true,
    text: siteVitrine(),
  },

  {
    id: 'commerce',
    offre: 'Site E-commerce',
    cover: commerce,
    right: false,
    text: eCommerce(),
  },

  {
    id: 'portfolio',
    offre: 'Portfolio',
    cover: portfolio,
    right: true,
    text: portfolioService(),
  },

  {
    id: 'api',
    offre: 'Application backend / API Restful',
    cover: commerce,
    right: false,
    text: apiBackend(),
  },
]

export const reviewsElements = [
  {
    id: '1',
    review:
      'J’ai particulièrement apprécié naviguer sur le site de manière totalement intuitive. Les couleurs étaient parfaitement concordantes. Je n’hésiterai pas une seconde à recommander WEBGROWTH pour toutes personnes voulant un site qui se démarque.',
    name: 'Clarita Semassou',
    fonction: 'Graphic Designer',
    cover: designer,
  },

  {
    id: '2',
    review:
      'Très belle prestation. Je suis entièrement satisfait de la qualité du service rendu dans le cadre de la conception de mon portfolio. Je recommande vivement.',
    name: 'Précieux TOSSOU',
    fonction: 'Rédacteur web',
    cover: redacteur,
  },

  {
    id: '3',
    review:
      "Je suis ravi de recommander l'agence Web Growth pour leur excellente prestation en matière de création de sites web. Avec une équipe de professionnels créatifs et techniques, l'agence a pu comprendre nos besoins et nous proposer une solution personnalisée pour améliorer la présence en ligne de notre entreprise. La communication était claire et transparente tout au long du processus de conception et de développement, ce qui nous a permis de voir notre site web prendre vie de manière rapide et efficace. Nous sommes très heureux du résultat final et recommanderons certainement Web Growth pour leur expertise et leur service de qualité supérieure dans ce domaine.",
    name: 'Hanane ADOGONI',
    fonction: 'CEO SOCIALFAH',
    cover: socialfath,
  },
  {
    id: '4',
    review: 'Très bon travail, je vous les recommande vivement.',
    name: 'Georges AYENI',
    fonction: 'Développeur web',
    cover: unknow,
  },
]

const question1 = () => {
  const Span = styled.span`
    font-weight: 500;
  `
  return (
    <>
      {WebGrowth()} est une jeune agence de conception de site web dotée d’une
      équipe expérimentée sur le marché. Elle dispose de toutes les
      <Span> ressources (humaines et matérielles) </Span>
      nécessaires pour mener à bien votre projet. Tout est fait avec précision
      et assiduité. Le design est pensé et réalisé par des experts en la matière
      et en fonction du projet et de vos objectifs. Chaque ligne est codée avec
      soin et le contenu ajouté est déterminant pour augmenter l’impact de votre
      site.
      <br />
      <br />
      Notre objectif, c’est de proposer un service{' '}
      <Important>« All in One »</Important> ( tout en un ). Avec seulement une
      idée aussi vague qu’elle soit ( pour ne pas dire un mot ), nous vous
      accompagnerons jusqu’à votre objectif et voir au-delà tout en maintenant
      un point d’honneur sur votre <Important>satisfaction à 100%.</Important>
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
            </li>
            <li>
              <Span>La maintenance</Span> de votre projet pour nous assurer que
              tout y est.
            </li>
          </ul>
        </div>
      </p>
      Aussi, nous vous impliquons personnellement dans le projet en travaillant
      étroitement avec vous dans l’optique de ne laisser passer aucun détail.
      <br />
      <br />
      Faire appel à {WebGrowth()} pour concevoir un site internet, c’est se
      concentrer sur les tâches plus importantes pour votre entreprise pendant
      que des professionnels mettent en place pour vous
      <Span> une machine à prospects.</Span>
    </>
  )
}

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
      <Important>le design</Important> ou <Important>les contenus</Important>,{' '}
      <Important>nous nous occupons de tout</Important>.
      <br />
      <br />
      Seuls l’hébergement et le nom de domaine sont à votre charge. Toutefois,
      nous sommes prêts à vous fournir un accompagnement gratuit afin de vous
      orienter et de vous conseiller les meilleurs choix. Tout dépendra des
      moyens financiers à votre disposition.
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
      <Important> JavaScript</Important>, <Important>HTML 5</Important>,
      <Important> CSS 3</Important>, <Important>PHP</Important>,
      <Important> MySql</Important> et les frameworks comme{' '}
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
          <Important>Les contenus </Important> ({' '}
          <Important>textes, images</Important>, etc.) : ils seront réalisés
          avec soin et optimisés conformément aux exigences actuelles dans le
          domaine de façon à booster votre référencement.
        </li>

        <li>
          <Important>La structure technique</Important> : Votre code source,
          propre, commenté dans certains cas, respectera les règles de balisages
          HTML et participera au chargement rapide du votre site.
        </li>

        <li>
          <Important>Liens externes</Important> : Facile sera l’échange de
          ceux-ci avec votre site.
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
      téléphones, tablettes et autres mobiles et il y a de grandes chances que
      vous soyez en train de consulter celui-ci avec votre smartphone.
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
      plus.
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
    answer: `Chaque projet est unique, important et traité avec toutes les exigences
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
    id: '3',
    title: 'LinkedIn:',
    icone: 'bi-linkedin',
    data: 'https://www.linkedin.com/company/webgrowth-agency/',
    user: '@WebGrowth',
  },

  {
    id: '1',
    title: 'Whatsapp:',
    icone: 'bi-whatsapp',
    data: '+229 53 82 72 59',
  },

  {
    id: '4',
    title: 'Facebook:',
    icone: 'bi-facebook',
    data: 'https://web.facebook.com/webgrowthagency',
    user: '@webgrowthagency',
  },

  {
    id: '2',
    title: 'Mail:',
    icone: 'bi-envelope',
    data: 'webgrowthservice@gmail.com',
  },
]

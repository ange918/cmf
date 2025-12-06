import { useEffect, useRef } from 'react'

function Documentation() {
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const fadeElements = pageRef.current?.querySelectorAll('.fade-in')
    fadeElements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="documentation-page" ref={pageRef}>
      <div
        className="page-header-bg"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
        }}>
        <div className="page-header-overlay"></div>
        <div className="container">
          <h1>Documentation CFM</h1>
          <p>Découvrez notre vision, notre histoire et nos objectifs</p>
        </div>
      </div>

      <section className="doc-section section">
        <div className="container">
          <div className="doc-content fade-in">
            <h2 className="section-title">La Vision du Groupe COMATRA FISH MARINE (CFM)</h2>
            <p>
              Assurer aux ménages une alimentation de qualité et variée par des produits halieutiques sains issus d'une pêche responsable et d'une aquaculture durable multi-trophique. CFM ambitionne une production aquacole en mer et en bassin à terre à recirculation, de Poissons de bouche, d'alevins d'aquaculture pour les producteurs ; De pêche de coquillages et fruits de mer ainsi que la production d'aliment pour poisson pour une meilleure qualité des poissons et un coût de production minoré. À terre, en cage en lagune et en mer et sur les Côtes de Côte d'Ivoire, Bénin et Togo.
            </p>
          </div>
        </div>
      </section>

      <section className="doc-section section" style={{ background: 'var(--gray-light)' }}>
        <div className="container">
          <div className="doc-content fade-in">
            <h2 className="section-title">Notre Histoire</h2>
            <p>
              COMATRA FISH MARINE (CFM) a été créé en Mars 2013 par Mr ROMEO DAVID, ancien pêcheur professionnel sur des armements de pêche au thon rouge à Sète (France). Il s'est formé en aquaculture à l'université de Montpellier - CREUFOP en 2008-2010-2020, pour développer des activités dans le secteur aquacole, pêche professionnelle, dans l'industrie de l'import-export des produits de mer et surgelés, ainsi que dans l'agro-industrie. Une filiale CFM Côte D'Ivoire a été créée le 27 novembre 2015 à Abidjan en Côte d'Ivoire. Elle est le fruit d'une réflexion sagement mûrie entre Roméo DAVID, Diane DAVID, Karen Elisa DAVID et Feu Fabrizio Alexandro CALAMARO.
            </p>
            <p>
              COMATRA FISH MARINE est une SARL qui œuvre dans le secteur de la pêche en mer et de l'aquaculture marine et continentale.
            </p>
            <p>
              En 2015, CFM a initié des campagnes de prospection de sites aquacoles en Côte d'Ivoire, notamment sur toute la lagune Aby (à l'est d'Abidjan), séparée en 2 zones pouvant accueillir plusieurs unités de production aquacoles. Elle a organisé des campagnes de concertation avec les populations locales sur l'acquisition de zones aquacoles dans la lagune, qui ont donné un avis favorable.
            </p>
            <p>
              CFM a mené des études sur le diagnostic de la lagune Aby afin d'avoir le profil écologique de ce milieu depuis début 2016. CFM recueille, consulte et analyse les informations bibliographiques disponibles, échange avec des experts scientifiques locaux (CNRA, CRO, Universités Ivoiriennes) et internationaux (Université de Montpellier, IRD Montpellier, INRA de Montpellier) pour bâtir une stratégie d'exploitation rationnelle des sites potentiels.
            </p>
            <p>
              En 2022, CFM a initié des négociations avec les autorités des régions Sud Comoé et par la suite la région des Grands Ponts pour l'acquisition du foncier sur la Côte pour le développement de la pisciculture marine et continentale.
            </p>
          </div>
        </div>
      </section>

      <section className="doc-section section">
        <div className="container">
          <div className="doc-content fade-in">
            <h2 className="section-title">Domaines d'expertise de CFM</h2>
            
            <div className="expertise-card">
              <h3>1. Pêche industrielle durable</h3>
              <p>
                La pêche industrielle durable demeure le domaine d'expertise N°1 de notre société. COMATRA FISH MARINE est doté d'une expertise dans le secteur de la pêche maritime pour fournir les meilleures captures de poissons nobles avec une pêche durable et des engins de pêche qui n'impactent pas l'environnement. Nous ciblons uniquement des espèces sélectives : Maigre, Carangue, Daurade royale, Sériole, Dentex, Pagre, Sar, Vivaneau, Barramundi, Tambour, Ombrine, Courbine, Empereur, Bar, ainsi que crustacés (Gambas et langoustes).
              </p>
            </div>

            <div className="expertise-card">
              <h3>2. Distribution et négoce de produits halieutiques frais</h3>
              <p>
                COMATRA FISH MARINE bénéficie d'un réseau fiable et efficace d'armateurs de pêche auprès desquels elle s'appuie pour garantir les approvisionnements.
              </p>
            </div>

            <div className="expertise-card">
              <h3>3. Développement de l'aquaculture durable</h3>
              <p>
                COMATRA FISH MARINE est un opérateur aquacole. Sa technique de production est orientée vers les élevages en cages flottantes respectueuses de l'environnement et à recirculation à terre bio-sécurisée. Cette technique innovante en Afrique permet d'utiliser une petite surface pour produire de grandes quantités de poisson dans un système à terre bio-sécurisé. L'utilisation d'aliments extrudés flottants permet de gérer rationnellement les effluents aquacoles, gage d'une préservation du milieu.
              </p>
            </div>

            <div className="expertise-card">
              <h3>4. Distribution d'équipements et intrants aquacoles</h3>
              <p>
                COMATRA FISH MARINE a noué des partenariats solides avec des équipementiers et des fabricants d'aliments aquacoles et centres de recherche en ingénierie de la nutrition animale, ce qui le positionne comme un acteur sûr pour le développement de l'aquaculture en Afrique de l'Ouest et Centrale.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="doc-section section" style={{ background: 'var(--gray-light)' }}>
        <div className="container">
          <div className="doc-content fade-in">
            <h2 className="section-title">Zone d'intervention</h2>
            <p>
              COMATRA FISH MARINE est actuellement présent et intervient dans un premier temps en Côte d'Ivoire et au Bénin, par la suite au Togo. Son déploiement en Afrique de l'Ouest est une priorité et constitue un objectif stratégique pour la durabilité de notre groupe.
            </p>

            <h3>Partenaires du Sud potentiels</h3>
            <p>
              Les Universités de Côte d'Ivoire, du Bénin, du Togo et centres de recherche : CNRA (Côte d'Ivoire), CRO (Côte d'Ivoire), IRHOB (Bénin), ITRA (Bénin), CNHOC (Togo).
            </p>

            <h3>Partenaires internationaux potentiels</h3>
            <p>
              Université de Montpellier (service formation continue), IRD de Montpellier, INRA de Montpellier, OSU-OREME, Observatoire de recherche en environnement, Station Marine de Sète, Bureau d'étude en ingénierie aquacole et Pêche (Aqualog).
            </p>
          </div>
        </div>
      </section>

      <section className="doc-section section">
        <div className="container">
          <div className="doc-content fade-in">
            <h2 className="section-title">Le contexte du marché ivoirien</h2>
            <p>
              Une étude de marché du poisson montre un marché ivoirien d'environ 630 000 tonnes/an en 2022 de poisson congelé, importé d'Asie principalement, vendu sur Abidjan à 1.9 à 2 €/kg de tilapia, et au moins 4€/kg de poisson marin, selon la taille et l'espèce.
            </p>
            <p>
              Le marché du tilapia frais et entier est de 100 000 tonnes/an autour d'Abidjan, à un prix de vente de 2.5 à 3€/kg selon la taille. L'ensemble des produits du marché ivoirien est largement déficitaire, il s'agit en grande majorité de produits d'importation.
            </p>
            <p>
              Le produit livré par CFM sera un produit frais (tilapias, silures africains, autres poissons marins, coquillages et crustacés) abattu du matin, glacé, conditionné en caisses isothermes et stocké en chambre froide positive pour garantir un produit de qualité supérieure.
            </p>

            <h3>Clients ciblés</h3>
            <ul className="doc-list">
              <li>Les cantines scolaires, universitaires, militaires et d'entreprises</li>
              <li>Les restaurants et lieux de regroupements de personnes</li>
              <li>Les mareyeurs et semi-grossistes locaux pour la distribution autour d'Abidjan</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="doc-section section" style={{ background: 'var(--gray-light)' }}>
        <div className="container">
          <div className="doc-content fade-in">
            <h2 className="section-title">Objectifs généraux de CFM</h2>
            <ol className="doc-objectives">
              <li>
                <strong>Production aquacole</strong> - Produire à moyen terme quelques milliers de tonnes de poisson en cage en mer et à terre à recirculation bio-sécurisée sur les sites identifiés en région Sud Comoé et Grands Ponts, ainsi que lancer l'activité de pêche en mer.
              </li>
              <li>
                <strong>Maîtrise biologique</strong> - Maîtriser la totalité du cycle biologique de chaque espèce produite (sélection des géniteurs performants, écloserie, pré-grossissement et grossissement).
              </li>
              <li>
                <strong>Suivi environnemental</strong> - Mettre en place un système de suivi environnemental des sites exploités pour le maintien d'un équilibre des sites naturels et une production durable.
              </li>
              <li>
                <strong>Développement RSE</strong> - Participer activement au développement économique et social de la population locale avec un programme RSE (Responsabilité Environnementale, Éthique et Économique).
              </li>
              <li>
                <strong>Management qualité</strong> - Mettre en place un système de management par la qualité avec traçabilité pour biosécuriser la production, uniformiser et améliorer les process, optimiser la gestion et garantir des produits de qualité optimale.
              </li>
              <li>
                <strong>Diversification des productions</strong> - Tilapia d'eaux douce, saumâtre et marine, silures, coquillages, autres espèces marines locales pour diminuer les risques de la monoculture.
              </li>
              <li>
                <strong>Diversification des systèmes</strong> - Cages, bassins en terre à recirculation d'eau, bassins hors sol, filières ou longlines pour optimiser les coûts de production.
              </li>
              <li>
                <strong>Diversification des sites</strong> - Lagune, façade maritime, Grand Lahou, Jacqueville, Bassam, Fresco, Sassandra, San-Pedro, Tabou, Assinie pour minimiser les risques climatiques et écologiques.
              </li>
              <li>
                <strong>Formation professionnelle</strong> - Mettre en place un dispositif de formation professionnelle continue en collaboration avec l'Université de Montpellier et les Universités de Côte d'Ivoire, Bénin et Togo.
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className="doc-section section">
        <div className="container">
          <div className="doc-content fade-in">
            <h2 className="section-title">La stratégie de CFM</h2>
            <p>
              En aquaculture, le 1er objectif est l'obtention des juvéniles. Le 2ème est le grossissement de ces juvéniles, au moyen d'un système de production adapté à l'espèce et au site, jusqu'à une taille marchande.
            </p>
            <p>
              Pour obtenir des juvéniles de qualité, être indépendant et maîtriser l'ensemble du cycle biologique des espèces produites, CFM projette :
            </p>
            <ul className="doc-list">
              <li>De construire à terre en bordure de lagune Aby un Centre de Ressources Aquacoles (CRA) avec approvisionnement d'eau de la lagune ou de forage</li>
              <li>D'implanter des sites aquacoles satellites de grossissement en cages et/ou en enclos en lagune Aby, ou à terre (en bassins en terre ou hors sol à recirculation bio-sécurisée)</li>
            </ul>
            <p>
              Le CRA intégrera les phases de reproduction des géniteurs et d'élevage larvaire, de nurserie et de pré-grossissement de poissons pour approvisionner en juvéniles ses sites de grossissement et vendre une partie de sa production à des fermes de la région.
            </p>
          </div>
        </div>
      </section>

      <section className="doc-section section" style={{ background: 'var(--gray-light)' }}>
        <div className="container">
          <div className="doc-content fade-in">
            <h2 className="section-title">Perspectives de développement</h2>
            <p>
              Les perspectives de développement de CFM vont au-delà des objectifs fixés au terme des premières années. La production sera augmentée, les produits (espèces et types), les sites et les systèmes de production seront diversifiés.
            </p>
            <p>
              <strong>Un objectif de 100 000 tonnes de production par an est réaliste au terme de 16 ans après démarrage.</strong>
            </p>
            <p>
              Des entreprises similaires sont développées en Afrique (Ghana, Zambie, Mozambique), aux États-Unis et en Arabie Saoudite avec des unités de production de 5 000 à 100 000 tonnes de Tilapia, Saumon et poisson marin par an.
            </p>
          </div>
        </div>
      </section>

      <section className="doc-section section">
        <div className="container">
          <div className="doc-content fade-in">
            <h2 className="section-title">Partenaires clés</h2>
            
            <div className="partner-section">
              <h3>L'Université de Montpellier</h3>
              <p>
                L'Université de Montpellier est l'une des plus anciennes universités d'Europe (An 980). Elle regroupe 17 composantes de formation, 72 unités de recherche et 40 000 étudiants, ce qui en fait la 6ème université française.
              </p>
              <p>
                Depuis les années 70, les équipes de l'université mettent au point la reproduction et l'élevage de nombreuses espèces de poissons méditerranéens et tropicaux, participent à l'amélioration des process de production, sélectionnent et améliorent génétiquement des souches de poissons, et travaillent sur la nutrition et la gestion sanitaire des cheptels.
              </p>
            </div>

            <div className="partner-section">
              <h3>AQUALOG</h3>
              <p>
                Bureau d'étude en ingénierie aquacole qui réalisera les études de faisabilité technique et économique, les études d'ingénierie, la conduite et la réception des travaux de construction et d'équipement des fermes, ainsi que l'assistance technique à la production.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="product-cta section">
        <div className="container">
          <h2>Intéressé par nos activités ?</h2>
          <p>Contactez-nous pour en savoir plus sur nos projets et opportunités de partenariat.</p>
          <a href="/contact" className="btn btn-primary">
            Nous contacter
          </a>
        </div>
      </section>
    </div>
  )
}

export default Documentation

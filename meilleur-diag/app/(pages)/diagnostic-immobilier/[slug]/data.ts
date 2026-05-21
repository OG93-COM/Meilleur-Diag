export type VilleData = {
    slug: string
    name: string
    dept: string
    region: string
    metaTitle: string
    metaDescription: string
    metaKeywords: string
    canonical: string
    ogImage: string
    schemaDescription: string
    headerTitle: string
    headerSubtitle: string
    intro: string[]
    population: string
    specificites: string[]
    loi: string
    loiDetails: string[]
    diagList: { label: string; href: string; note?: string }[]
    pourquoiNous: string
    conclusion: string
    voisines: { name: string; slug: string }[]
  }
  
  const base = '/services'
  
  const diagListBase = [
    { label: 'DPE — Diagnostic de Performance Énergétique', href: `${base}/diagnostic-performance-energetique` },
    { label: 'Diagnostic Amiante', href: `${base}/diagnostic-amiante`, note: 'Biens construits avant 1997' },
    { label: 'Diagnostic Plomb (CREP)', href: `${base}/diagnostic-plomb`, note: 'Biens construits avant 1949' },
    { label: 'Diagnostic Électricité', href: `${base}/diagnostic-electricite`, note: 'Installations de plus de 15 ans' },
    { label: 'Diagnostic Gaz', href: `${base}/diagnostic-gaz`, note: 'Installations de plus de 15 ans' },
    { label: 'Diagnostic Loi Carrez', href: `${base}/diagnostic-loi-carrez`, note: 'Vente en copropriété' },
    { label: 'Diagnostic Loi Boutin', href: `${base}/diagnostic-loi-boutin`, note: 'Location' },
    { label: 'ERP — État des Risques et Pollutions', href: `${base}/diagnostic-risques-naturels` },
    { label: 'Diagnostic Assainissement', href: `${base}/diagnostic-assainissement`, note: 'Biens non raccordés' },
    { label: 'Diagnostic Termites', href: `${base}/diagnostic-termites`, note: 'Zones à risque uniquement' },
  ]
  
  export const villesData: Record<string, VilleData> = {
    'diagnostic-immobilier-seine-saint-denis': {
      slug: 'diagnostic-immobilier-seine-saint-denis',
      name: 'Seine-Saint-Denis',
      dept: '93',
      region: 'Île-de-France',
      metaTitle: 'Diagnostic Immobilier Seine-Saint-Denis (93) | Meilleur Diag',
      metaDescription: 'Diagnostic immobilier obligatoire en Seine-Saint-Denis (93) : DPE, Amiante, Plomb, Gaz, Électricité. Diagnostiqueurs certifiés, intervention 7j/7, rapport en 24h. Devis gratuit.',
      metaKeywords: 'diagnostic immobilier seine saint denis, diagnostic immobilier 93, DPE seine saint denis, diagnostic amiante 93, diagnostic plomb seine saint denis, diagnostiqueur certifié 93, diagnostic vente location 93',
      canonical: 'https://meilleur-diag.com/diagnostic-immobilier/diagnostic-immobilier-seine-saint-denis',
      ogImage: '/images/diagnostic-immobilier-seine-saint-denis.jpg',
      schemaDescription: 'Diagnostic immobilier obligatoire en Seine-Saint-Denis. DPE, Amiante, Plomb, Gaz, Électricité, ERP — diagnostiqueurs certifiés.',
      headerTitle: 'Diagnostic Immobilier en Seine-Saint-Denis (93)',
      headerSubtitle: 'Vente, location, travaux — tous vos diagnostics obligatoires réalisés par des experts certifiés dans toutes les communes du 93. Rapport livré en 24h.',
      intro: [
        "La Seine-Saint-Denis, premier département de la petite couronne nord de Paris, concentre un parc immobilier parmi les plus diversifiés d'Île-de-France : des maisons individuelles d'avant-guerre à Aulnay-sous-Bois et Drancy, des immeubles haussmanniens à Saint-Denis, des résidences récentes à Pantin ou Montreuil. Cette diversité implique des profils de diagnostics très variés selon l'âge et le type de bien.",
        "Pour toute vente ou location dans le 93, la loi impose la remise d'un Dossier de Diagnostic Technique (DDT) complet à l'acquéreur ou au locataire. Meilleur Diag intervient dans toutes les communes de Seine-Saint-Denis, 7 jours sur 7, avec des diagnostiqueurs certifiés et assurés.",
      ],
      population: '1,7 million d\'habitants',
      specificites: [
        'Fort taux de bâti antérieur à 1997 — diagnostic amiante très fréquent',
        'Nombreux logements construits avant 1949 à Saint-Denis et Aubervilliers — CREP (plomb) quasi-systématique',
        'Présence de zones à risque inondation en bord de Seine et de canaux',
        'Plusieurs communes concernées par des anciens sites industriels (pollution des sols)',
        'Marchés locatifs très actifs à Montreuil, Bobigny, Saint-Denis — obligation DPE et Loi Boutin',
      ],
      loi: 'Diagnostic immobilier en Seine-Saint-Denis : ce que dit la loi',
      loiDetails: [
        'Pour la vente : un DDT complet doit être fourni dès la signature de la promesse de vente.',
        'Pour la location : DPE, ERP, et diagnostics électricité/gaz (si installations de plus de 15 ans) sont obligatoires depuis juillet 2017.',
        'Le diagnostic termites n\'est pas exigé dans la plupart des communes du 93 sauf arrêté préfectoral spécifique.',
        'L\'assainissement non collectif concerne principalement les maisons individuelles non raccordées au tout-à-l\'égout.',
      ],
      diagList: diagListBase,
      pourquoiNous: "Nous intervenons chaque jour dans toutes les communes de Seine-Saint-Denis — Saint-Denis, Aubervilliers, Aulnay-sous-Bois, Montreuil, Bobigny, Drancy, Épinay-sur-Seine et bien d'autres. Notre connaissance du parc immobilier local, de ses spécificités en matière d'amiante et de plomb, et notre réactivité en font le partenaire de confiance des particuliers et des professionnels du 93.",
      conclusion: "Que vous vendiez une maison ancienne à Aulnay, un appartement à Montreuil ou un local commercial à Saint-Denis, Meilleur Diag vous garantit des diagnostics précis, conformes et livrés rapidement. Notre équipe est disponible 7j/7 pour s'adapter à votre calendrier.",
      voisines: [
        { name: 'Aulnay-sous-Bois', slug: 'diagnostic-immobilier-aulnay-sous-bois' },
        { name: 'Val-de-Marne (94)', slug: 'diagnostic-immobilier-val-de-marne' },
      ],
    },
  
    'diagnostic-immobilier-aulnay-sous-bois': {
      slug: 'diagnostic-immobilier-aulnay-sous-bois',
      name: 'Aulnay-sous-Bois',
      dept: '93',
      region: 'Île-de-France',
      metaTitle: 'Diagnostic Immobilier Aulnay-sous-Bois 93 | Meilleur Diag',
      metaDescription: 'Diagnostic immobilier à Aulnay-sous-Bois (93600) : DPE, Amiante, Plomb, Gaz, Électricité. Expert local certifié, intervention rapide, rapport en 24h. Devis gratuit.',
      metaKeywords: 'diagnostic immobilier aulnay sous bois, diagnostic amiante aulnay sous bois, DPE aulnay sous bois 93, diagnostiqueur aulnay sous bois, diagnostic vente location aulnay 93600',
      canonical: 'https://meilleur-diag.com/diagnostic-immobilier/diagnostic-immobilier-aulnay-sous-bois',
      ogImage: '/images/diagnostic-immobilier-aulnay-sous-bois.jpg',
      schemaDescription: 'Diagnostic immobilier à Aulnay-sous-Bois (93600). DPE, Amiante, Plomb, Électricité, Gaz — expert local certifié.',
      headerTitle: 'Diagnostic Immobilier à Aulnay-sous-Bois',
      headerSubtitle: 'Expert local en diagnostic immobilier à Aulnay-sous-Bois (93600). Vente et location — tous vos diagnostics obligatoires réalisés par des professionnels certifiés.',
      intro: [
        "Aulnay-sous-Bois, commune de Seine-Saint-Denis de plus de 86 000 habitants, est une ville résidentielle et pavillonnaire au parc immobilier varié : maisons individuelles en centre-ville, pavillons des années 50-70 dans les quartiers périphériques, immeubles récents en périphérie. Bien desservie par l'A1, l'A3 et le RER B, elle attire régulièrement des acheteurs et locataires cherchant un cadre de vie calme à proximité de Paris.",
        "En tant que propriétaire à Aulnay-sous-Bois, vous êtes soumis aux mêmes obligations légales que partout en France : tout bien mis en vente ou en location doit être accompagné d'un Dossier de Diagnostic Technique (DDT) complet. L'absence ou l'inexactitude d'un diagnostic peut entraîner des sanctions ou l'annulation de la transaction.",
      ],
      population: '86 000 habitants',
      specificites: [
        'Grand nombre de pavillons construits avant 1997 — diagnostic amiante très fréquent',
        'Nombreuses maisons d\'avant 1949 — diagnostic plomb (CREP) souvent requis',
        'Zone exposée au retrait-gonflement des argiles — mentionné dans l\'ERP',
        'Marché pavillonnaire actif — diagnostics vente avec Loi Carrez ou Boutin',
        'Installations gaz et électriques souvent anciennes dans le bâti pavillonnaire',
      ],
      loi: 'Diagnostics obligatoires à Aulnay-sous-Bois',
      loiDetails: [
        'Vente d\'un bien : DDT complet à remettre dès la promesse de vente.',
        'Location : DPE, ERP, Loi Boutin, et diagnostics électricité/gaz si installation de plus de 15 ans.',
        'Construction neuve : DPE neuf obligatoire avant toute mise en vente ou location.',
        'Le diagnostic termites n\'est pas obligatoire à Aulnay-sous-Bois à ce jour (hors arrêté préfectoral).',
      ],
      diagList: diagListBase,
      pourquoiNous: "Nous intervenons régulièrement à Aulnay-sous-Bois et connaissons parfaitement les spécificités du bâti local — pavillons des années 50, maisons de centre-ville antérieures à 1949, immeubles collectifs plus récents. Notre réactivité (intervention souvent possible sous 48h) et nos tarifs transparents en font le choix naturel des habitants d'Aulnay.",
      conclusion: "Vous vendez ou louez un bien à Aulnay-sous-Bois ? Ne perdez pas de temps. Contactez Meilleur Diag pour un devis gratuit et sans engagement. Nos diagnostiqueurs certifiés se déplacent rapidement, réalisent l'ensemble des diagnostics en une seule visite si possible, et vous transmettent votre rapport complet en moins de 24 heures.",
      voisines: [
        { name: 'Seine-Saint-Denis (93)', slug: 'diagnostic-immobilier-seine-saint-denis' },
        { name: 'Val-de-Marne (94)', slug: 'diagnostic-immobilier-val-de-marne' },
        { name: 'Hauts-de-Seine (92)', slug: 'diagnostic-immobilier-hauts-de-seine' },
      ],
    },
  
    'diagnostic-immobilier-hauts-de-seine': {
      slug: 'diagnostic-immobilier-hauts-de-seine',
      name: 'Hauts-de-Seine',
      dept: '92',
      region: 'Île-de-France',
      metaTitle: 'Diagnostic Immobilier Hauts-de-Seine (92) | Meilleur Diag',
      metaDescription: 'Diagnostic immobilier dans les Hauts-de-Seine (92) : DPE, Amiante, Plomb, Électricité, Gaz. Neuilly, Boulogne, Levallois, Nanterre — diagnostiqueurs certifiés, rapport en 24h.',
      metaKeywords: 'diagnostic immobilier hauts de seine, diagnostic immobilier 92, DPE hauts de seine, diagnostic amiante 92, diagnostiqueur neuilly boulogne levallois, diagnostic vente 92',
      canonical: 'https://meilleur-diag.com/diagnostic-immobilier/diagnostic-immobilier-hauts-de-seine',
      ogImage: '/images/diagnostic-immobilier-hauts-de-seine-92.jpg',
      schemaDescription: 'Diagnostic immobilier dans les Hauts-de-Seine (92). DPE, Amiante, Plomb, Électricité, Gaz — experts certifiés à Neuilly, Boulogne, Levallois.',
      headerTitle: 'Diagnostic Immobilier dans les Hauts-de-Seine (92)',
      headerSubtitle: 'Neuilly-sur-Seine, Boulogne-Billancourt, Levallois-Perret, Nanterre, Courbevoie — diagnostics immobiliers certifiés dans tout le 92.',
      intro: [
        "Les Hauts-de-Seine abritent certains des marchés immobiliers les plus prisés d'Île-de-France. De Neuilly-sur-Seine à Boulogne-Billancourt, en passant par Levallois-Perret et Courbevoie, les biens y atteignent des prix parmi les plus élevés de la région. Dans ce contexte, un diagnostic immobilier complet et fiable n'est pas seulement une obligation légale — c'est un outil de valorisation et de protection pour le vendeur comme pour l'acheteur.",
        "Meilleur Diag intervient dans tout le département des Hauts-de-Seine avec des diagnostiqueurs certifiés, capables de traiter aussi bien des appartements haussmanniens que des villas contemporaines ou des locaux professionnels.",
      ],
      population: '1,6 million d\'habitants',
      specificites: [
        'Parc immobilier haut de gamme avec nombreux biens d\'avant 1997 — amiante fréquent',
        'Forte proportion d\'appartements en copropriété — Loi Carrez systématique en vente',
        'Nombreux immeubles d\'avant 1949 à Neuilly, Levallois, Clichy — CREP requis',
        'Zones inondables en bord de Seine à Boulogne, Colombes, Asnières',
        'Marchés locatifs premium — DPE déterminant pour la valeur du bien',
      ],
      loi: 'Ce que la loi impose dans les Hauts-de-Seine',
      loiDetails: [
        'Vente : DDT complet obligatoire avant la promesse de vente, incluant Loi Carrez pour les copropriétés.',
        'Location : DPE, ERP, Loi Boutin obligatoires ; diagnostics électricité et gaz si installation de plus de 15 ans.',
        'La classe DPE est particulièrement scrutée dans ce département à fort potentiel locatif.',
        'Les zones inondables de bord de Seine doivent être mentionnées dans l\'ERP.',
      ],
      diagList: diagListBase,
      pourquoiNous: "Dans les Hauts-de-Seine, nos diagnostiqueurs interviennent à Neuilly-sur-Seine, Boulogne-Billancourt, Levallois-Perret, Nanterre, Courbevoie, Colombes, Rueil-Malmaison, Issy-les-Moulineaux et toutes les autres communes du 92. Notre connaissance du bâti local et notre réactivité font de nous le prestataire de confiance des agences immobilières et des notaires du département.",
      conclusion: "Que vous vendiez un appartement à Neuilly ou une maison à Rueil-Malmaison, Meilleur Diag vous garantit des diagnostics précis, reconnus et livrés rapidement. Contactez-nous pour un devis gratuit.",
      voisines: [
        { name: 'Yvelines (78)', slug: 'diagnostic-immobilier-yvelines' },
        { name: 'Seine-Saint-Denis (93)', slug: 'diagnostic-immobilier-seine-saint-denis' },
      ],
    },
  
    'diagnostic-immobilier-val-de-marne': {
      slug: 'diagnostic-immobilier-val-de-marne',
      name: 'Val-de-Marne',
      dept: '94',
      region: 'Île-de-France',
      metaTitle: 'Diagnostic Immobilier Val-de-Marne (94) | Meilleur Diag',
      metaDescription: 'Diagnostic immobilier dans le Val-de-Marne (94) : DPE, Amiante, Plomb, Gaz, Électricité. Créteil, Vincennes, Vitry, Ivry — experts certifiés, rapport en 24h.',
      metaKeywords: 'diagnostic immobilier val de marne, diagnostic immobilier 94, DPE val de marne, diagnostic amiante 94, diagnostiqueur créteil vincennes vitry, diagnostic vente location 94',
      canonical: 'https://meilleur-diag.com/diagnostic-immobilier/diagnostic-immobilier-val-de-marne',
      ogImage: '/images/diagnostic-immobilier-val-de-marne-94.jpg',
      schemaDescription: 'Diagnostic immobilier dans le Val-de-Marne (94). DPE, Amiante, Plomb, Gaz, Électricité — experts certifiés à Créteil, Vincennes, Vitry.',
      headerTitle: 'Diagnostic Immobilier dans le Val-de-Marne (94)',
      headerSubtitle: 'Créteil, Vincennes, Vitry-sur-Seine, Ivry-sur-Seine, Champigny — diagnostics immobiliers certifiés dans tout le 94.',
      intro: [
        "Le Val-de-Marne offre une grande diversité de profils immobiliers : des villes résidentielles prisées comme Vincennes et Saint-Mandé, des zones en pleine transformation comme Vitry-sur-Seine et Ivry-sur-Seine, et des secteurs pavillonnaires étendus à Champigny, Sucy-en-Brie ou Maisons-Alfort. Cette diversité se reflète dans les diagnostics requis, qui varient fortement selon l'âge et la localisation du bien.",
        "Meilleur Diag couvre l'intégralité du département du Val-de-Marne, avec une connaissance précise des zones inondables (bords de Marne et de Seine) et des spécificités du bâti local.",
      ],
      population: '1,4 million d\'habitants',
      specificites: [
        'Bord de Marne et de Seine — nombreuses communes en zone inondable (ERP obligatoire)',
        'Bâti ancien à Vincennes, Saint-Mandé — amiante et plomb fréquents',
        'Zones industrielles reconverties à Vitry et Ivry — pollution des sols à vérifier',
        'Fort marché locatif étudiant à Créteil (université, CHU)',
        'Pavillons des années 50-70 à Champigny et Maisons-Alfort — diagnostics gaz et électricité courants',
      ],
      loi: 'Obligations légales dans le Val-de-Marne',
      loiDetails: [
        'Vente : DDT complet obligatoire, incluant ERP (zones inondables très présentes dans le 94).',
        'Location : DPE, ERP, Loi Boutin, diagnostics électricité/gaz si installation de plus de 15 ans.',
        'Zones inondables de bord de Marne et de Seine à mentionner systématiquement dans l\'ERP.',
        'Ancien tissu industriel de Vitry et Ivry : pollution des sols à vérifier via les bases BASIAS/BASOL.',
      ],
      diagList: diagListBase,
      pourquoiNous: "Du Bois de Vincennes aux rives de la Marne, Meilleur Diag intervient dans toutes les communes du Val-de-Marne : Créteil, Vincennes, Vitry-sur-Seine, Ivry-sur-Seine, Champigny-sur-Marne, Maisons-Alfort, Saint-Maur-des-Fossés et bien d'autres. Notre équipe est familiarisée avec les spécificités locales, notamment les zones inondables et le bâti pavillonnaire d'après-guerre.",
      conclusion: "Propriétaire dans le Val-de-Marne ? Meilleur Diag vous accompagne pour tous vos diagnostics obligatoires, avec une intervention rapide et un rapport conforme remis en 24 heures.",
      voisines: [
        { name: 'Seine-Saint-Denis (93)', slug: 'diagnostic-immobilier-seine-saint-denis' },
        { name: 'Hauts-de-Seine (92)', slug: 'diagnostic-immobilier-hauts-de-seine' },
        { name: 'Essonne (91)', slug: 'diagnostic-immobilier-essonne' },
      ],
    },
  
    'diagnostic-immobilier-yvelines': {
      slug: 'diagnostic-immobilier-yvelines',
      name: 'Yvelines',
      dept: '78',
      region: 'Île-de-France',
      metaTitle: 'Diagnostic Immobilier Yvelines (78) | Meilleur Diag',
      metaDescription: 'Diagnostic immobilier dans les Yvelines (78) : DPE, Amiante, Plomb, Gaz, Électricité. Versailles, Saint-Germain-en-Laye, Mantes-la-Jolie — experts certifiés, rapport en 24h.',
      metaKeywords: 'diagnostic immobilier yvelines, diagnostic immobilier 78, DPE yvelines, diagnostic amiante versailles, diagnostiqueur saint germain laye, diagnostic vente location 78',
      canonical: 'https://meilleur-diag.com/diagnostic-immobilier/diagnostic-immobilier-yvelines',
      ogImage: '/images/diagnostic-immobilier-yvelines-78.jpg',
      schemaDescription: 'Diagnostic immobilier dans les Yvelines (78). DPE, Amiante, Plomb, Gaz — experts certifiés à Versailles, Saint-Germain-en-Laye, Mantes.',
      headerTitle: 'Diagnostic Immobilier dans les Yvelines (78)',
      headerSubtitle: 'Versailles, Saint-Germain-en-Laye, Mantes-la-Jolie, Poissy, Sartrouville — diagnostics certifiés dans tout le département des Yvelines.',
      intro: [
        "Les Yvelines sont le plus grand département d'Île-de-France, avec un profil immobilier très varié : du prestige de Versailles et Saint-Germain-en-Laye aux zones pavillonnaires de la vallée de la Seine, en passant par les secteurs ruraux du Vexin et du pays mantais. Cette diversité implique des obligations de diagnostics très différentes selon le bien.",
        "Dans les Yvelines, le parc immobilier ancien est important — notamment à Versailles, Rambouillet et dans les communes rurales — ce qui rend les diagnostics amiante, plomb et énergie particulièrement courants.",
      ],
      population: '1,4 million d\'habitants',
      specificites: [
        'Nombreux châteaux et demeures historiques — diagnostics complets souvent nécessaires',
        'Bâti pavillonnaire étendu des années 50-80 — amiante et installations vieillissantes',
        'Zones rurales avec assainissement non collectif — diagnostic SPANC fréquent',
        'Vallée de la Seine — zones inondables à Mantes, Conflans, Poissy',
        'Forte demande locative autour de Versailles et des grandes écoles de Saclay',
      ],
      loi: 'Diagnostics obligatoires dans les Yvelines',
      loiDetails: [
        'Vente : DDT complet avec ERP (zones inondables de la Seine concernent plusieurs communes).',
        'Assainissement non collectif : diagnostic SPANC obligatoire pour les maisons individuelles non raccordées — fréquent en zone rurale.',
        'Location : DPE, ERP, diagnostics électricité/gaz si installation de plus de 15 ans.',
        'Zones inondables de la vallée de la Seine à mentionner dans l\'ERP pour Mantes, Conflans, Poissy.',
      ],
      diagList: diagListBase,
      pourquoiNous: "Nous intervenons dans toutes les Yvelines, de Versailles à Mantes-la-Jolie, de Rambouillet à Sartrouville. Notre connaissance du parc immobilier local — notamment des maisons rurales avec assainissement individuel — nous permet de proposer des diagnostics adaptés à chaque situation.",
      conclusion: "Vendez ou louez en toute conformité dans les Yvelines avec Meilleur Diag. Intervention sous 48h, rapport en 24h, tarifs compétitifs.",
      voisines: [
        { name: 'Hauts-de-Seine (92)', slug: 'diagnostic-immobilier-hauts-de-seine' },
        { name: "Val-d'Oise (95)", slug: 'diagnostic-immobilier-val-doise' },
        { name: 'Essonne (91)', slug: 'diagnostic-immobilier-essonne' },
      ],
    },
  
    'diagnostic-immobilier-essonne': {
      slug: 'diagnostic-immobilier-essonne',
      name: 'Essonne',
      dept: '91',
      region: 'Île-de-France',
      metaTitle: 'Diagnostic Immobilier Essonne (91) | Meilleur Diag',
      metaDescription: 'Diagnostic immobilier en Essonne (91) : DPE, Amiante, Plomb, Gaz, Électricité. Évry, Massy, Corbeil-Essonnes, Gif-sur-Yvette — experts certifiés, rapport en 24h.',
      metaKeywords: 'diagnostic immobilier essonne, diagnostic immobilier 91, DPE essonne, diagnostic amiante évry massy, diagnostiqueur essonne, diagnostic vente location 91',
      canonical: 'https://meilleur-diag.com/diagnostic-immobilier/diagnostic-immobilier-essonne',
      ogImage: '/images/diagnostic-immobilier-essonne-91.jpg',
      schemaDescription: 'Diagnostic immobilier en Essonne (91). DPE, Amiante, Plomb, Gaz, Électricité — experts certifiés à Évry, Massy, Corbeil.',
      headerTitle: 'Diagnostic Immobilier en Essonne (91)',
      headerSubtitle: 'Évry-Courcouronnes, Massy, Corbeil-Essonnes, Gif-sur-Yvette, Palaiseau — diagnostics certifiés dans tout le département de l\'Essonne.',
      intro: [
        "L'Essonne est un département en pleine transformation, tiré par le développement du pôle scientifique et technologique de Saclay, les projets du Grand Paris Express, et un marché immobilier en forte croissance. Le parc de logements y est très hétérogène : des tours des années 70 à Évry-Courcouronnes, des pavillons des années 50-80 à Corbeil ou Draveil, et des maisons rurales dans les plateaux de la Beauce.",
        "Cette diversité implique des diagnostics très variés. Meilleur Diag intervient dans tout le département avec une équipe habituée aux configurations les plus variées.",
      ],
      population: '1,3 million d\'habitants',
      specificites: [
        'Grand ensemble d\'Évry — bâti des années 70, amiante très présent',
        'Zones rurales au sud — assainissement individuel (SPANC) fréquent',
        'Vallée de la Seine et de l\'Orge — zones inondables à vérifier dans l\'ERP',
        'Développement du plateau de Saclay — forte demande locative (étudiants, chercheurs)',
        'Nombreux pavillons des années 50-80 — diagnostics électricité et gaz courants',
      ],
      loi: 'Obligations de diagnostic en Essonne',
      loiDetails: [
        'Vente : DDT complet obligatoire, avec ERP mentionnant les zones inondables des vallées.',
        'Assainissement : diagnostic SPANC requis pour les maisons avec fosse septique ou micro-station.',
        'Location : DPE obligatoire — importance croissante avec l\'interdiction de louer les logements G.',
        'Grand Paris Express : la revalorisation foncière renforce l\'enjeu du DPE pour les propriétaires.',
      ],
      diagList: diagListBase,
      pourquoiNous: "Nous couvrons l'intégralité de l'Essonne, des zones urbaines d'Évry et Massy aux communes rurales du sud du département. Notre équipe est habituée aux diagnostics en zone de croissance rapide comme Palaiseau ou Saclay, et aux spécificités de l'assainissement non collectif en zone rurale.",
      conclusion: "En Essonne, le marché immobilier évolue vite. Assurer la conformité de vos diagnostics, c'est protéger votre transaction et valoriser votre bien. Meilleur Diag vous accompagne à chaque étape.",
      voisines: [
        { name: 'Hauts-de-Seine (92)', slug: 'diagnostic-immobilier-hauts-de-seine' },
        { name: 'Val-de-Marne (94)', slug: 'diagnostic-immobilier-val-de-marne' },
        { name: 'Seine-et-Marne (77)', slug: 'diagnostic-immobilier-seine-et-marne' },
      ],
    },
  
    'diagnostic-immobilier-val-doise': {
      slug: 'diagnostic-immobilier-val-doise',
      name: "Val-d'Oise",
      dept: '95',
      region: 'Île-de-France',
      metaTitle: "Diagnostic Immobilier Val-d'Oise (95) | Meilleur Diag",
      metaDescription: "Diagnostic immobilier dans le Val-d'Oise (95) : DPE, Amiante, Plomb, Gaz, Électricité. Cergy, Argenteuil, Pontoise, Sarcelles — experts certifiés, rapport en 24h.",
      metaKeywords: "diagnostic immobilier val d'oise, diagnostic immobilier 95, DPE val d'oise, diagnostic amiante cergy argenteuil, diagnostiqueur 95, diagnostic vente location val d'oise",
      canonical: "https://meilleur-diag.com/diagnostic-immobilier/diagnostic-immobilier-val-doise",
      ogImage: '/images/diagnostic-immobilier-val-de-oise-95.jpg',
      schemaDescription: "Diagnostic immobilier dans le Val-d'Oise (95). DPE, Amiante, Plomb, Gaz, Électricité — experts certifiés à Cergy, Argenteuil, Pontoise.",
      headerTitle: "Diagnostic Immobilier dans le Val-d'Oise (95)",
      headerSubtitle: "Cergy-Pontoise, Argenteuil, Sarcelles, Goussainville — diagnostics certifiés dans tout le Val-d'Oise.",
      intro: [
        "Le Val-d'Oise est un département aux visages multiples : la ville nouvelle de Cergy-Pontoise avec ses logements des années 70-80, le tissu pavillonnaire dense d'Argenteuil et Sarcelles, les zones rurales du Vexin et du Pays de France. Chaque secteur a ses propres enjeux en matière de diagnostics immobiliers.",
        "Meilleur Diag intervient dans l'ensemble du Val-d'Oise avec des diagnostiqueurs certifiés, disponibles 7j/7 pour répondre aux besoins des propriétaires, agences et notaires du département.",
      ],
      population: '1,2 million d\'habitants',
      specificites: [
        'Ville nouvelle de Cergy — bâti des années 70-80, amiante présent dans les collectifs',
        'Argenteuil — fort marché locatif, DPE et diagnostics location très demandés',
        'Zones rurales du Vexin — maisons avec assainissement individuel, SPANC fréquent',
        'Vallée de l\'Oise — zones inondables à mentionner dans l\'ERP',
        'Goussainville, Garges — pavillons d\'après-guerre, plomb et amiante courants',
      ],
      loi: "Diagnostics obligatoires dans le Val-d'Oise",
      loiDetails: [
        'Vente : DDT complet avec ERP — zones inondables de la vallée de l\'Oise concernées.',
        'Location : DPE, Loi Boutin, ERP, diagnostics électricité/gaz si installation de plus de 15 ans.',
        'Assainissement : SPANC requis pour les maisons rurales du Vexin non raccordées.',
        'Amiante : très fréquent dans les collectifs des années 70 à Cergy et Sarcelles.',
      ],
      diagList: diagListBase,
      pourquoiNous: "De Cergy à Argenteuil, de Pontoise à Goussainville, nos diagnostiqueurs interviennent dans tout le Val-d'Oise avec une bonne connaissance des spécificités locales. Intervention sous 48h, rapport en 24h.",
      conclusion: "Propriétaire dans le Val-d'Oise ? Meilleur Diag est votre partenaire local pour des diagnostics fiables, rapides et reconnus. Demandez votre devis gratuit en ligne.",
      voisines: [
        { name: 'Seine-Saint-Denis (93)', slug: 'diagnostic-immobilier-seine-saint-denis' },
        { name: 'Hauts-de-Seine (92)', slug: 'diagnostic-immobilier-hauts-de-seine' },
        { name: 'Yvelines (78)', slug: 'diagnostic-immobilier-yvelines' },
      ],
    },
  
    'diagnostic-immobilier-seine-et-marne': {
      slug: 'diagnostic-immobilier-seine-et-marne',
      name: 'Seine-et-Marne',
      dept: '77',
      region: 'Île-de-France',
      metaTitle: 'Diagnostic Immobilier Seine-et-Marne (77) | Meilleur Diag',
      metaDescription: 'Diagnostic immobilier en Seine-et-Marne (77) : DPE, Amiante, Plomb, Gaz, Électricité. Melun, Meaux, Fontainebleau, Chelles — experts certifiés, rapport en 24h.',
      metaKeywords: 'diagnostic immobilier seine et marne, diagnostic immobilier 77, DPE seine et marne, diagnostic amiante melun meaux, diagnostiqueur 77, diagnostic vente location seine et marne',
      canonical: 'https://meilleur-diag.com/diagnostic-immobilier/diagnostic-immobilier-seine-et-marne',
      ogImage: '/images/diagnostic-immobilier-seine-et-marne-77.jpg',
      schemaDescription: 'Diagnostic immobilier en Seine-et-Marne (77). DPE, Amiante, Plomb, Gaz, Électricité — experts certifiés à Melun, Meaux, Fontainebleau.',
      headerTitle: 'Diagnostic Immobilier en Seine-et-Marne (77)',
      headerSubtitle: 'Melun, Meaux, Fontainebleau, Chelles, Provins — diagnostics immobiliers certifiés dans tout le département de Seine-et-Marne.',
      intro: [
        "La Seine-et-Marne est le plus vaste département d'Île-de-France, avec un marché immobilier très différent selon les secteurs : des villes en plein développement comme Chelles ou Pontault-Combault, des villes historiques comme Meaux ou Provins, et de nombreuses zones rurales avec des maisons de campagne et propriétés de caractère.",
        "Le parc immobilier de Seine-et-Marne est souvent ancien, notamment dans les centres-bourgs et les communes rurales. Les diagnostics amiante, plomb et assainissement sont particulièrement fréquents dans ce département.",
      ],
      population: '1,4 million d\'habitants',
      specificites: [
        'Nombreuses maisons rurales avec assainissement individuel — diagnostic SPANC très fréquent',
        'Bâti ancien dans les centres-bourgs — amiante et plomb courants',
        'Zones inondables de la Seine et de la Marne — ERP obligatoire dans de nombreuses communes',
        'Fort développement résidentiel autour de Chelles et Pontault — DPE enjeu majeur',
        'Propriétés de caractère (manoirs, fermes rénovées) — diagnostics complexes et complets',
      ],
      loi: 'Obligations de diagnostic en Seine-et-Marne',
      loiDetails: [
        'Vente : DDT complet avec ERP — zones inondables très présentes le long de la Seine et de la Marne.',
        'Assainissement : diagnostic SPANC obligatoire dans de nombreuses communes rurales du 77.',
        'Biens anciens : amiante (avant 1997) et plomb (avant 1949) très fréquents dans les centres anciens.',
        'DPE : enjeu croissant avec les nouvelles restrictions sur les logements énergivores.',
      ],
      diagList: diagListBase,
      pourquoiNous: "En Seine-et-Marne, nous intervenons de Chelles à Fontainebleau, de Meaux à Melun. Notre expérience avec les maisons rurales, les propriétés de caractère et les assainissements individuels du département nous distingue. Nous nous adaptons à tous les profils de biens, des studios en copropriété aux grandes maisons de campagne.",
      conclusion: "La Seine-et-Marne présente des enjeux spécifiques — assainissement, zones inondables, bâti rural ancien. Meilleur Diag vous accompagne avec expertise et réactivité pour tous vos diagnostics immobiliers dans le 77.",
      voisines: [
        { name: 'Val-de-Marne (94)', slug: 'diagnostic-immobilier-val-de-marne' },
        { name: 'Essonne (91)', slug: 'diagnostic-immobilier-essonne' },
        { name: 'Seine-Saint-Denis (93)', slug: 'diagnostic-immobilier-seine-saint-denis' },
      ],
    },
  }
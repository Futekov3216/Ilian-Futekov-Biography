export const BRAND = "Castagnaro Digital"

export const WHATSAPP_NUMBER_DISPLAY = "+55 45 99809-2892"
export const WHATSAPP_NUMBER_E164 = "5545998092892"
export const CONTACT_EMAIL = "felipecastagnarodecarvalho@gmail.com"

export type Locale = "en" | "es" | "pt"

export const LOCALES: { code: Locale; label: string; short: string }[] = [
  { code: "en", label: "English", short: "EN" },
  { code: "es", label: "Español", short: "ES" },
  { code: "pt", label: "Português", short: "PT" },
]

/**
 * Builds a wa.me deep link with a prefilled message. Used by the header CTA
 * and the closing section so every "talk to us" entry point behaves the same.
 */
export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER_E164}?text=${encodeURIComponent(message)}`
}

export type ServiceId = "web" | "apps" | "apis" | "security"

export interface ServiceCopy {
  id: ServiceId
  index: string
  title: string
  description: string
  meta: string
}

export type ClientId = "nissei" | "shipsmart"

export interface ClientCopy {
  id: ClientId
  name: string
  sector: string
  region: string
  summary: string
  contribution: string
  url: string
}

export interface ProjectCopy {
  id: string
  name: string
  kind: string
  year: string
  description: string
  stack: string[]
  /** `image` swaps in a real screenshot once the backend supplies one. */
  media: { type: "image" | "placeholder"; src?: string; alt: string }
}

export interface Copy {
  localeName: string
  meta: { title: string; description: string }
  nav: {
    services: string
    clients: string
    work: string
    developer: string
    theme: string
    lightTheme: string
    darkTheme: string
    language: string
    menu: string
    close: string
    skipToContent: string
  }
  cta: {
    talk: string
    whatsappMessage: string
    viewProjects: string
    email: string
  }
  hero: {
    eyebrow: string
    title: string
    lead: string
    support: string
    networkLabel: string
  }
  services: {
    eyebrow: string
    title: string
    lead: string
    items: ServiceCopy[]
  }
  clients: {
    eyebrow: string
    title: string
    lead: string
    visits: string
    contributionLabel: string
    items: ClientCopy[]
  }
  work: {
    eyebrow: string
    title: string
    lead: string
    stackLabel: string
    items: ProjectCopy[]
  }
  developer: {
    eyebrow: string
    name: string
    role: string
    bio: string[]
    stackLabel: string
    stack: string[]
    security: { title: string; body: string }
    availability: string
  }
  closing: {
    title: string
    lead: string
    primary: string
    whatsappHint: string
    emailHint: string
  }
  footer: { tagline: string; rights: string; builtWith: string }
}

type Localized = Record<Locale, string>

interface ProjectSource {
  id: string
  name: string
  year: string
  kind: Localized
  description: Localized
  stack: string[]
}

const projectSources: ProjectSource[] = [
  {
    id: "aprovatrilha",
    name: "AprovaTrilha",
    year: "2026",
    kind: {
      en: "Exam-prep platform",
      es: "Plataforma de preparación para exámenes",
      pt: "Plataforma de preparação para exames",
    },
    description: {
      en: "Exam-prep platform for the Brazilian Bar Exam (OAB): a Next.js 16/TypeScript web app on Postgres/Drizzle, with adaptive study plans, question practice, essay answers graded by a self-hosted LLM behind a prompt-injection guard, and a library of recommended books with Amazon affiliate links. It also has Asaas recurring billing, BullMQ background jobs, and self-hosted Docker deployment with Cloudflare Tunnel.",
      es: "Plataforma de preparación para el examen de la Orden de Abogados de Brasil (OAB): una aplicación web en Next.js 16/TypeScript sobre Postgres/Drizzle, con planes de estudio adaptativos, práctica de preguntas, respuestas escritas corregidas por un LLM autoalojado protegido contra prompt injection y una biblioteca de libros recomendados con enlaces de afiliado de Amazon. También incluye pagos recurrentes vía Asaas, tareas en segundo plano con BullMQ y despliegue autoalojado en Docker con Cloudflare Tunnel.",
      pt: "Plataforma de preparação para o Exame da Ordem (OAB): uma aplicação web em Next.js 16/TypeScript sobre Postgres/Drizzle, com planos de estudo adaptativos, prática de questões, respostas dissertativas corrigidas por um LLM auto-hospedado protegido contra prompt injection e uma biblioteca de livros recomendados com links de afiliado da Amazon. Também conta com pagamentos recorrentes via Asaas, tarefas em segundo plano com BullMQ e deploy auto-hospedado em Docker com Cloudflare Tunnel.",
    },
    stack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "BullMQ",
      "Asaas",
      "Docker",
      "Cloudflare Tunnel",
    ],
  },
  {
    id: "tyche",
    name: "Project Tyche",
    year: "2026",
    kind: {
      en: "Equity research engine",
      es: "Motor de análisis de acciones",
      pt: "Motor de análise de ações",
    },
    description: {
      en: "TypeScript engine that ingests SEC XBRL fundamentals and daily market prices into PostgreSQL via Drizzle ORM. It computes point-in-time metrics, sector-percentile scores, accounting red flags (Piotroski, Altman, Beneish) and reverse DCF valuations, served by a TanStack Start dashboard with a screener, company research pages, watchlists, a trade journal and alerts.",
      es: "Motor en TypeScript que ingiere datos fundamentales XBRL de la SEC y precios diarios de mercado en PostgreSQL mediante Drizzle ORM. Calcula métricas point-in-time, puntuaciones por percentil sectorial, alertas contables (Piotroski, Altman, Beneish) y valoraciones por DCF inverso, servidas en un panel TanStack Start con screener, páginas de análisis de empresas, listas de seguimiento, diario de operaciones y alertas.",
      pt: "Motor em TypeScript que ingere dados fundamentalistas XBRL da SEC e preços diários de mercado no PostgreSQL via Drizzle ORM. Calcula métricas point-in-time, pontuações por percentil setorial, alertas contábeis (Piotroski, Altman, Beneish) e valuations por DCF reverso, servidos em um painel TanStack Start com screener, páginas de análise de empresas, watchlists, diário de operações e alertas.",
    },
    stack: [
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "TanStack Start",
      "SEC XBRL",
    ],
  },
  {
    id: "mensalpix",
    name: "MensalPix",
    year: "2026",
    kind: {
      en: "Tuition billing SaaS",
      es: "SaaS de cobro de mensualidades",
      pt: "SaaS de cobrança de mensalidades",
    },
    description: {
      en: "Multi-tenant Brazilian SaaS that automates monthly tuition collection for schools, studios and gyms: a Laravel/Inertia React platform with recurring Pix Automático and card billing through each school's own Asaas account, WhatsApp dunning reminders, automatic NFS-e invoicing, and Stripe subscription billing.",
      es: "SaaS brasileño multi-tenant que automatiza el cobro de mensualidades para escuelas, estudios y gimnasios: una plataforma en Laravel/Inertia React con cobros recurrentes por Pix Automático y tarjeta a través de la cuenta Asaas de cada escuela, recordatorios de cobro por WhatsApp, emisión automática de NFS-e y suscripciones con Stripe.",
      pt: "SaaS brasileiro multi-tenant que automatiza a cobrança de mensalidades para escolas, estúdios e academias: uma plataforma em Laravel/Inertia React com cobrança recorrente por Pix Automático e cartão pela conta Asaas de cada escola, lembretes de cobrança por WhatsApp, emissão automática de NFS-e e assinaturas via Stripe.",
    },
    stack: [
      "Laravel",
      "Inertia",
      "React",
      "Pix Automático",
      "Asaas",
      "WhatsApp",
      "NFS-e",
      "Stripe",
    ],
  },
  {
    id: "quienscent",
    name: "Quienscent",
    year: "2026",
    kind: {
      en: "Digital signage SaaS",
      es: "SaaS de señalización digital",
      pt: "SaaS de sinalização digital",
    },
    description: {
      en: "Multi-tenant digital signage platform: an Android player app (Java/ExoPlayer) controlled in real time over WebSocket, and a Laravel/Vue admin panel with Stripe recurring billing and live product price lookups.",
      es: "Plataforma SaaS multi-tenant de señalización digital: una app Android (Java/ExoPlayer) controlada en tiempo real vía WebSocket y un panel administrativo en Laravel/Vue con pagos recurrentes vía Stripe y consulta de precios de productos en tiempo real.",
      pt: "Plataforma SaaS multi-tenant de sinalização digital: um aplicativo Android (Java/ExoPlayer) com controle em tempo real via WebSocket e um painel administrativo em Laravel/Vue, com pagamentos recorrentes via Stripe e consulta de preços de produtos em tempo real.",
    },
    stack: ["Java", "ExoPlayer", "WebSocket", "Laravel", "Vue.js", "Stripe"],
  },
  {
    id: "trix",
    name: "Trix",
    year: "2026",
    kind: {
      en: "Multi-store e-commerce SaaS",
      es: "SaaS de e-commerce multitienda",
      pt: "SaaS de e-commerce multi-loja",
    },
    description: {
      en: "Django/React control plane and a Laravel/Twig store runtime, with an isolated SQLite database per store sharded across nodes, Traefik routing, an HMAC-signed internal API and es/pt-BR localization.",
      es: "Control plane en Django/React y runtime de tiendas en Laravel/Twig, con una base SQLite aislada por tienda y sharding en varios nodos, enrutamiento vía Traefik, API interna firmada con HMAC y soporte multilingüe (es/pt-BR).",
      pt: "Control plane em Django/React e runtime de lojas em Laravel/Twig, com um banco SQLite isolado por loja e sharding em vários nós, roteamento via Traefik, API interna assinada com HMAC e suporte multilíngue (es/pt-BR).",
    },
    stack: ["Django", "React", "Laravel", "Twig", "SQLite", "Traefik"],
  },
  {
    id: "melia",
    name: "Melia",
    year: "2023 – 2025",
    kind: {
      en: "Open-source MMORPG server",
      es: "Servidor MMORPG open source",
      pt: "Servidor de MMORPG open source",
    },
    description: {
      en: "Built an admin panel to manage the game server (PHP, Laravel, MySQL) and contributed C#/.NET features such as new character skills, along with bug fixes and code reviews.",
      es: "Desarrollé un panel administrativo para gestionar el servidor del juego (PHP, Laravel, MySQL) y contribuí con funcionalidades en C#/.NET, como nuevas habilidades de personajes, además de correcciones de bugs y revisiones de código.",
      pt: "Desenvolvi um painel administrativo para gerenciamento do servidor do jogo (PHP, Laravel, MySQL) e contribuí com funcionalidades em C#/.NET, como novas habilidades de personagens, além de correções de bugs e revisões de código.",
    },
    stack: ["PHP", "Laravel", "MySQL", "C#", ".NET"],
  },
  {
    id: "path-of-destruction",
    name: "Path of Destruction",
    year: "2018 – 2022",
    kind: {
      en: "Multiplayer game on Steam",
      es: "Juego multijugador en Steam",
      pt: "Jogo multiplayer na Steam",
    },
    description: {
      en: "Built and shipped on Steam a 2D top-down multiplayer shooter in Unity3D (C#) with Photon (PUN2) networking, including custom visual effects, textures, animations and shaders.",
      es: "Desarrollé y lancé en Steam un juego de disparos multijugador 2D top-down en Unity3D (C#) con red Photon (PUN2), con efectos visuales, texturas, animaciones y shaders propios.",
      pt: "Desenvolvi e lancei na Steam um jogo de tiro multiplayer 2D top-down em Unity3D (C#) com rede Photon (PUN2), criando efeitos visuais, texturas, animações e shaders personalizados.",
    },
    stack: ["Unity3D", "C#", "Photon PUN2", "Shaders"],
  },
  {
    id: "screensaver",
    name: "ScreenSaver",
    year: "2020",
    kind: {
      en: "Android application",
      es: "Aplicación Android",
      pt: "Aplicativo Android",
    },
    description: {
      en: "Screensaver app built with Xamarin.Forms, Prism and MVVM that plays user-defined videos or animations, deployed simultaneously to more than 80 devices in Nissei stores (Paraguay).",
      es: "App de protector de pantalla en Xamarin.Forms, Prism y MVVM que reproduce videos o animaciones definidos por el usuario, implantada simultáneamente en más de 80 dispositivos en las tiendas Nissei (Paraguay).",
      pt: "Aplicativo de descanso de tela em Xamarin.Forms, Prism e MVVM que reproduz vídeos ou animações definidos pelo usuário, implantado simultaneamente em mais de 80 dispositivos na loja Nissei (Paraguai).",
    },
    stack: ["Xamarin.Forms", "Prism", "MVVM", "Android"],
  },
]

function projectsFor(locale: Locale): ProjectCopy[] {
  return projectSources.map(({ kind, description, ...project }) => ({
    ...project,
    kind: kind[locale],
    description: description[locale],
    media: { type: "placeholder", alt: "" },
  }))
}

export const copy: Record<Locale, Copy> = {
  en: {
    localeName: "English",
    meta: {
      title: "Castagnaro Digital — Web, mobile and API development",
      description:
        "We design and build web platforms, mobile applications and RESTful APIs with a focus on scalable, secure delivery.",
    },
    nav: {
      services: "Services",
      clients: "Clients",
      work: "Projects",
      developer: "Developer",
      theme: "Theme",
      lightTheme: "Light theme",
      darkTheme: "Dark theme",
      language: "Language",
      menu: "Menu",
      close: "Close",
      skipToContent: "Skip to content",
    },
    cta: {
      talk: "Talk to me",
      whatsappMessage:
        "Hello Felipe, I found Castagnaro Digital and I would like to talk about a project.",
      viewProjects: "See projects",
      email: "Send an email",
    },
    hero: {
      eyebrow: "Software studio — Brazil, working worldwide",
      title: "Software built to hold up in production.",
      lead: "We design and build web platforms, mobile applications and RESTful APIs. Every delivery starts with the data model and the failure cases, not the mockup.",
      support:
        "Senior full-stack delivery: PHP and Laravel, C# and .NET, Vue.js and React — with security reviewed as part of the build.",
      networkLabel: "Animated diagram of a connected software platform",
    },
    services: {
      eyebrow: "What we do",
      title: "Four kinds of work, one delivery standard.",
      lead: "Scoped engagements or ongoing capacity, always with the same expectations around tests, review and handover.",
      items: [
        {
          id: "web",
          index: "01",
          title: "Web platforms",
          description:
            "Product interfaces, dashboards and internal systems — from the first data model to the last empty state.",
          meta: "React · Vue.js · TypeScript",
        },
        {
          id: "apps",
          index: "02",
          title: "Mobile applications",
          description:
            "Cross-platform apps that stay usable offline and reconcile cleanly with the systems behind them.",
          meta: ".NET MAUI · React Native",
        },
        {
          id: "apis",
          index: "03",
          title: "RESTful APIs",
          description:
            "Documented, versioned services with predictable contracts, sensible rate limits and real observability.",
          meta: "Laravel · .NET · PHP",
        },
        {
          id: "security",
          index: "04",
          title: "Security review",
          description:
            "Threat modelling and hardening for authentication, authorization and data flows before launch.",
          meta: "Auth · Hardening · Bug bounty",
        },
      ],
    },
    clients: {
      eyebrow: "Clients",
      title: "Teams that ship with us.",
      lead: "Long-running partnerships where the work is measured by what reaches production.",
      visits: "Visit site",
      contributionLabel: "Contribution",
      items: [
        {
          id: "nissei",
          name: "Nissei",
          sector: "Retail and distribution",
          region: "Brazil",
          summary:
            "Large-scale retail and distribution operation serving customers and franchisees across Brazil.",
          contribution:
            "Integration work and platform features connecting commerce systems with day-to-day operations.",
          url: "https://nissei.com/br/",
        },
        {
          id: "shipsmart",
          name: "ShipSmart",
          sector: "Logistics technology",
          region: "Global",
          summary:
            "Logistics technology platform coordinating shipping, warehousing and fulfilment for growing brands.",
          contribution:
            "Service and API development supporting logistics workflows and customer-facing tools.",
          url: "https://shipsmart.global/",
        },
      ],
    },
    work: {
      eyebrow: "Projects",
      title: "Selected work.",
      lead: "Each case carries the scope, the stack and the outcome that mattered to the client.",
      stackLabel: "Stack",
      items: projectsFor("en"),
    },
    developer: {
      eyebrow: "Developer",
      name: "Felipe Castagnaro de Carvalho",
      role: "Full Stack Developer",
      bio: [
        "Full Stack Developer with experience in PHP, Laravel, C#, .NET, Vue.js and React. I work on developing web, mobile applications, and RESTful APIs, with a focus on scalable and secure solutions.",
        "Information security enthusiast with active participation in Bug Bounty programs.",
      ],
      stackLabel: "Working stack",
      stack: [
        "PHP",
        "Laravel",
        "C#",
        ".NET",
        "Vue.js",
        "React",
        "TypeScript",
        "RESTful APIs",
        "PostgreSQL",
      ],
      security: {
        title: "Security by default",
        body: "Authentication, authorization and input handling are reviewed as part of the build, informed by ongoing bug bounty work.",
      },
      availability: "Available for new work",
    },
    closing: {
      title: "Have a system that needs to be built, or fixed?",
      lead: "Send a short description of the problem. You will get an honest read on scope, timeline and what it takes to ship it well.",
      primary: "Talk to me on WhatsApp",
      whatsappHint: "Direct line, replies during business hours (BRT).",
      emailHint: "Prefer email? Write to",
    },
    footer: {
      tagline: "Web platforms, mobile applications and RESTful APIs.",
      rights: "All rights reserved.",
      builtWith: "Built and maintained by Castagnaro Digital.",
    },
  },
  es: {
    localeName: "Español",
    meta: {
      title: "Castagnaro Digital — Desarrollo web, móvil y APIs",
      description:
        "Diseñamos y construimos plataformas web, aplicaciones móviles y APIs RESTful con foco en soluciones escalables y seguras.",
    },
    nav: {
      services: "Servicios",
      clients: "Clientes",
      work: "Proyectos",
      developer: "Desarrollador",
      theme: "Tema",
      lightTheme: "Tema claro",
      darkTheme: "Tema oscuro",
      language: "Idioma",
      menu: "Menú",
      close: "Cerrar",
      skipToContent: "Ir al contenido",
    },
    cta: {
      talk: "Habla conmigo",
      whatsappMessage:
        "Hola Felipe, encontré Castagnaro Digital y me gustaría conversar sobre un proyecto.",
      viewProjects: "Ver proyectos",
      email: "Enviar un correo",
    },
    hero: {
      eyebrow: "Estudio de software — Brasil, trabajando en todo el mundo",
      title: "Software hecho para aguantar en producción.",
      lead: "Diseñamos y construimos plataformas web, aplicaciones móviles y APIs RESTful. Cada entrega empieza por el modelo de datos y los casos de fallo, no por el mockup.",
      support:
        "Entrega full stack senior: PHP y Laravel, C# y .NET, Vue.js y React — con la seguridad revisada durante la construcción.",
      networkLabel: "Diagrama animado de una plataforma de software conectada",
    },
    services: {
      eyebrow: "Qué hacemos",
      title: "Cuatro tipos de trabajo, un mismo estándar de entrega.",
      lead: "Proyectos acotados o capacidad continua, siempre con las mismas exigencias de pruebas, revisión y traspaso.",
      items: [
        {
          id: "web",
          index: "01",
          title: "Plataformas web",
          description:
            "Interfaces de producto, paneles e sistemas internos: del primer modelo de datos al último estado vacío.",
          meta: "React · Vue.js · TypeScript",
        },
        {
          id: "apps",
          index: "02",
          title: "Aplicaciones móviles",
          description:
            "Apps multiplataforma que siguen siendo útiles sin conexión y se sincronizan bien con los sistemas detrás.",
          meta: ".NET MAUI · React Native",
        },
        {
          id: "apis",
          index: "03",
          title: "APIs RESTful",
          description:
            "Servicios documentados y versionados, con contratos previsibles, límites de uso sensatos y observabilidad real.",
          meta: "Laravel · .NET · PHP",
        },
        {
          id: "security",
          index: "04",
          title: "Revisión de seguridad",
          description:
            "Modelado de amenazas y endurecimiento de autenticación, autorización y flujos de datos antes del lanzamiento.",
          meta: "Auth · Hardening · Bug bounty",
        },
      ],
    },
    clients: {
      eyebrow: "Clientes",
      title: "Equipos que entregan con nosotros.",
      lead: "Colaboraciones de largo plazo donde el trabajo se mide por lo que llega a producción.",
      visits: "Ver sitio",
      contributionLabel: "Contribución",
      items: [
        {
          id: "nissei",
          name: "Nissei",
          sector: "Comercio y distribución",
          region: "Brasil",
          summary:
            "Operación de comercio y distribución a gran escala que atiende a clientes y franquiciados en todo Brasil.",
          contribution:
            "Integraciones y funcionalidades de plataforma que conectan los sistemas de comercio con la operación diaria.",
          url: "https://nissei.com/br/",
        },
        {
          id: "shipsmart",
          name: "ShipSmart",
          sector: "Tecnología logística",
          region: "Global",
          summary:
            "Plataforma de tecnología logística que coordina envíos, almacenamiento y cumplimiento para marcas en crecimiento.",
          contribution:
            "Desarrollo de servicios y APIs que sostienen los flujos logísticos y las herramientas de cliente.",
          url: "https://shipsmart.global/",
        },
      ],
    },
    work: {
      eyebrow: "Proyectos",
      title: "Trabajos seleccionados.",
      lead: "Cada caso reúne el alcance, el stack y el resultado que importaba al cliente.",
      stackLabel: "Stack",
      items: projectsFor("es"),
    },
    developer: {
      eyebrow: "Desarrollador",
      name: "Felipe Castagnaro de Carvalho",
      role: "Full Stack Developer",
      bio: [
        "Full Stack Developer con experiencia en PHP, Laravel, C#, .NET, Vue.js y React. Trabajo en el desarrollo de aplicaciones web, móviles y APIs RESTful, con foco en soluciones escalables y seguras.",
        "Entusiasta de la seguridad de la información con participación activa en programas de Bug Bounty.",
      ],
      stackLabel: "Stack de trabajo",
      stack: [
        "PHP",
        "Laravel",
        "C#",
        ".NET",
        "Vue.js",
        "React",
        "TypeScript",
        "APIs RESTful",
        "PostgreSQL",
      ],
      security: {
        title: "Seguridad por defecto",
        body: "La autenticación, la autorización y el tratamiento de datos se revisan durante la construcción, con base en el trabajo continuo en bug bounty.",
      },
      availability: "Disponible para nuevos proyectos",
    },
    closing: {
      title: "¿Tienes un sistema por construir o por arreglar?",
      lead: "Envía una descripción breve del problema. Recibirás una lectura honesta del alcance, los plazos y lo que hace falta para entregarlo bien.",
      primary: "Habla conmigo por WhatsApp",
      whatsappHint: "Línea directa, respuestas en horario comercial (BRT).",
      emailHint: "¿Prefieres correo? Escribe a",
    },
    footer: {
      tagline: "Plataformas web, aplicaciones móviles y APIs RESTful.",
      rights: "Todos los derechos reservados.",
      builtWith: "Creado y mantenido por Castagnaro Digital.",
    },
  },
  pt: {
    localeName: "Português",
    meta: {
      title: "Castagnaro Digital — Desenvolvimento web, mobile e APIs",
      description:
        "Criamos plataformas web, aplicativos mobile e APIs RESTful com foco em soluções escaláveis e seguras.",
    },
    nav: {
      services: "Serviços",
      clients: "Clientes",
      work: "Projetos",
      developer: "Desenvolvedor",
      theme: "Tema",
      lightTheme: "Tema claro",
      darkTheme: "Tema escuro",
      language: "Idioma",
      menu: "Menu",
      close: "Fechar",
      skipToContent: "Ir para o conteúdo",
    },
    cta: {
      talk: "Fale comigo",
      whatsappMessage:
        "Olá Felipe, encontrei a Castagnaro Digital e gostaria de conversar sobre um projeto.",
      viewProjects: "Ver projetos",
      email: "Enviar e-mail",
    },
    hero: {
      eyebrow: "Estúdio de software — Brasil, atendendo o mundo",
      title: "Software feito para aguentar produção.",
      lead: "Criamos plataformas web, aplicativos mobile e APIs RESTful. Cada entrega começa pelo modelo de dados e pelos casos de falha, não pelo mockup.",
      support:
        "Entrega full stack sênior: PHP e Laravel, C# e .NET, Vue.js e React — com segurança revisada durante a construção.",
      networkLabel: "Diagrama animado de uma plataforma de software conectada",
    },
    services: {
      eyebrow: "O que fazemos",
      title: "Quatro tipos de trabalho, um padrão de entrega.",
      lead: "Projetos fechados ou capacidade contínua, sempre com as mesmas exigências de teste, revisão e transferência.",
      items: [
        {
          id: "web",
          index: "01",
          title: "Plataformas web",
          description:
            "Interfaces de produto, painéis e sistemas internos — do primeiro modelo de dados ao último estado vazio.",
          meta: "React · Vue.js · TypeScript",
        },
        {
          id: "apps",
          index: "02",
          title: "Aplicativos mobile",
          description:
            "Apps multiplataforma que continuam úteis sem conexão e sincronizam direito com os sistemas por trás.",
          meta: ".NET MAUI · React Native",
        },
        {
          id: "apis",
          index: "03",
          title: "APIs RESTful",
          description:
            "Serviços documentados e versionados, com contratos previsíveis, limites de uso sensatos e observabilidade real.",
          meta: "Laravel · .NET · PHP",
        },
        {
          id: "security",
          index: "04",
          title: "Revisão de segurança",
          description:
            "Modelagem de ameaças e endurecimento de autenticação, autorização e fluxos de dados antes do lançamento.",
          meta: "Auth · Hardening · Bug bounty",
        },
      ],
    },
    clients: {
      eyebrow: "Clientes",
      title: "Times que entregam com a gente.",
      lead: "Parcerias de longo prazo em que o trabalho é medido pelo que chega à produção.",
      visits: "Ver site",
      contributionLabel: "Contribuição",
      items: [
        {
          id: "nissei",
          name: "Nissei",
          sector: "Varejo e distribuição",
          region: "Brasil",
          summary:
            "Operação de varejo e distribuição em grande escala, atendendo clientes e franqueados em todo o Brasil.",
          contribution:
            "Integrações e funcionalidades de plataforma que conectam os sistemas de comércio à operação diária.",
          url: "https://nissei.com/br/",
        },
        {
          id: "shipsmart",
          name: "ShipSmart",
          sector: "Tecnologia logística",
          region: "Global",
          summary:
            "Plataforma de tecnologia logística que coordena envios, armazenagem e fulfillment para marcas em crescimento.",
          contribution:
            "Desenvolvimento de serviços e APIs que sustentam os fluxos logísticos e as ferramentas do cliente.",
          url: "https://shipsmart.global/",
        },
      ],
    },
    work: {
      eyebrow: "Projetos",
      title: "Trabalhos selecionados.",
      lead: "Cada caso reúne o escopo, a stack e o resultado que importava para o cliente.",
      stackLabel: "Stack",
      items: projectsFor("pt"),
    },
    developer: {
      eyebrow: "Desenvolvedor",
      name: "Felipe Castagnaro de Carvalho",
      role: "Full Stack Developer",
      bio: [
        "Full Stack Developer com experiência em PHP, Laravel, C#, .NET, Vue.js e React. Atuo no desenvolvimento de aplicações web, mobile e APIs RESTful, com foco em soluções escaláveis e seguras.",
        "Entusiasta de segurança da informação, com participação ativa em programas de Bug Bounty.",
      ],
      stackLabel: "Stack de trabalho",
      stack: [
        "PHP",
        "Laravel",
        "C#",
        ".NET",
        "Vue.js",
        "React",
        "TypeScript",
        "APIs RESTful",
        "PostgreSQL",
      ],
      security: {
        title: "Segurança por padrão",
        body: "Autenticação, autorização e tratamento de dados são revisados durante a construção, com base no trabalho contínuo em bug bounty.",
      },
      availability: "Disponível para novos projetos",
    },
    closing: {
      title: "Tem um sistema para construir ou para consertar?",
      lead: "Envie uma descrição curta do problema. Você recebe uma leitura honesta de escopo, prazo e do que é preciso para entregar bem.",
      primary: "Fale comigo no WhatsApp",
      whatsappHint: "Linha direta, respostas em horário comercial (BRT).",
      emailHint: "Prefere e-mail? Escreva para",
    },
    footer: {
      tagline: "Plataformas web, aplicativos mobile e APIs RESTful.",
      rights: "Todos os direitos reservados.",
      builtWith: "Criado e mantido pela Castagnaro Digital.",
    },
  },
}

export function inferLocale(acceptLanguage: string | null | undefined): Locale {
  if (!acceptLanguage) return "en"

  const ranked = acceptLanguage
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=")
      return { tag: tag.trim().toLowerCase(), q: q ? Number(q) : 1 }
    })
    .sort((a, b) => b.q - a.q)

  for (const { tag } of ranked) {
    if (tag.startsWith("pt")) return "pt"
    if (tag.startsWith("es")) return "es"
    if (tag.startsWith("en")) return "en"
  }

  return "en"
}

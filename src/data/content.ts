export const content = {
  cover: {
    title: 'Company Profile 2026',
    tagline: 'Engineering Digital Systems.\nDelivering Business Outcomes.',
    body: 'Progettiamo infrastrutture digitali che generano valore e crescono con il vostro business.',
  },

  about: {
    headline: 'Il reparto tech che vi mancava',
    subtitle: 'Design, engineering, AI, cloud e strategia. Un unico team, un unico sistema.',
    body: 'Non costruiamo asset isolati che invecchiano. Progettiamo infrastrutture digitali che diventano parte operativa del vostro business.',
    origin: 'Nati dentro Etechus. Cresciuti su progetti della Commissione Europea. Abituati a standard, scadenze e compliance che non ammettono improvvisazione.',
    partners: ['AWS Partner', 'Webflow Certified Partner', 'Shopify Partner'],
  },

  problem: {
    headline: 'Il digitale della maggior parte delle aziende è un costo, non un asset',
    stat: '70',
    statUnit: '%',
    statSource: 'BCG, 2020, survey su 825 executive a livello globale',
    statDesc: 'dei progetti di digital transformation non raggiunge gli obiettivi dichiarati.',
    pattern: 'Il pattern è sempre lo stesso: un fornitore esegue un brief, nessuno si chiede "perché", e il sistema funziona il giorno del lancio. Sei mesi dopo è già un problema.',
    conclusion: 'Il digitale dovrebbe generare valore anche mentre dormite. Se non lo fa, non è un investimento, è una tassa ricorrente.',
  },

  ecosystem: {
    headline: 'Un ecosistema, non un deliverable',
    subtitle: 'Il 70% dei progetti digitali fallisce per come viene impostato, non per come viene costruito. Il nostro approccio parte da lì.',
    intro: 'Ogni progetto wmie opera su due assi simultanei:',
    axisStrategicTitle: 'Asse strategico — perché il 30% vince',
    strategies: [
      {
        title: 'Strategia ancorata al business, non al brief',
        body: 'Non partiamo da cosa volete, partiamo da dove deve arrivare il vostro business. Ogni decisione tecnica è legata a un risultato misurabile e a una metrica di impatto concordata prima di scrivere una riga di codice.',
      },
      {
        title: 'Decision-maker al tavolo, dal giorno zero',
        body: 'Progettiamo con chi decide, non solo con chi esegue. Se CEO, CTO o CMO non sono coinvolti nel processo, lo diciamo prima di iniziare, non dopo il primo rilascio.',
      },
      {
        title: 'Monitoraggio continuo, non a consuntivo',
        body: 'Ogni sistema nasce con KPI operativi e di business, soglie di intervento automatiche e una single source of truth sui dati. Ogni cliente riceve accesso a una dashboard di monitoraggio in tempo reale: metriche di performance, stato dell\'infrastruttura e anomalie, tutto in un unico punto. Noi misuriamo in corso d\'opera e interveniamo. Voi avete visibilità completa, sempre.',
      },
      {
        title: 'Governance adattiva, non rigida',
        body: 'Il piano iniziale non è un contratto immutabile. Rivediamo priorità e scope a intervalli regolari sulla base di dati reali, non di opinioni e correggiamo rotta prima che i problemi diventino costi.',
      },
    ],
    axisExecutiveTitle: 'Asse esecutivo — cosa costruiamo concretamente',
    executiveRows: [
      { level: 'Percezione', what: 'Brand, identità, storytelling', why: 'Il primo contatto genera fiducia o la distrugge.' },
      { level: 'Esperienza', what: 'UX/UI, flussi di conversione', why: 'Ogni click è guadagno o abbandono.' },
      { level: 'Intelligenza', what: 'AI, automazioni, integrazioni', why: 'Il lavoro ripetitivo lo fanno le macchine.' },
      { level: 'Infrastruttura', what: 'Cloud AWS, CDN, autoscaling', why: 'Se crolla sotto traffico, tutto il resto è inutile.' },
      { level: 'Evoluzione', what: 'Monitoraggio, iterazione, roadmap', why: 'Un asset digitale o cresce, o muore.' },
    ],
  },

  services: {
    headline: 'Quattro leve, un unico ecosistema',
    subtitle: 'Ogni leva esiste per alimentare le altre. Se funzionano solo in isolamento, non stiamo facendo il nostro lavoro.',
    items: [
      {
        title: 'Web & Webflow Development',
        desc: 'Il punto di ingresso dell\'ecosistema. Siti e landing costruiti per convertire, non per essere vetrine. Performance-first (LCP < 2.5s), SEO-native, integrati con CRM, analytics e automazioni. Da qui parte ogni flusso di acquisizione.',
        feeds: 'Alimenta: E-Commerce, App, AI & Automazioni.',
      },
      {
        title: 'App & Web App',
        desc: 'Dove il cliente o il team torna ogni giorno. Dashboard, portali clienti, tool interni che sostituiscono fogli Excel e processi manuali. Progettiamo strumenti che il team apre per scelta, non per obbligo.',
        feeds: 'Alimenta: AI & Automazioni, Web',
      },
      {
        title: 'E-Commerce',
        desc: 'Dove il traffico diventa fatturato. Shopify, custom o headless, ottimizzato per ridurre ogni frizione tra "voglio comprare" e "ho comprato". Ogni barriera rimossa è margine recuperato.',
        feeds: 'Alimenta: App & Web App, AI & Automazioni (analisi comportamento)',
      },
      {
        title: 'AI & Automazioni',
        desc: 'Dove il sistema diventa autonomo. Chatbot, classificazione documenti, workflow automatizzati, integrazioni tra piattaforme. Non AI perché lo fanno tutti, AI che restituisce ore reali ogni settimana al team operativo.',
        feeds: 'Alimenta: tutti gli altri livelli con dati e ottimizzazione continua',
      },
    ],
    bottomText: 'Ogni progetto può partire da una singola leva, ma la costruiamo già dentro un\'architettura che può espandersi. Così quando il business cresce, il sistema è pronto. Senza rifare tutto da capo.',
  },

  sla: {
    headline: 'I numeri dietro ogni progetto',
    subtitle: 'Non sono obiettivi, sono i nostri SLA operativi. Li monitoriamo in tempo reale e interveniamo prima che il cliente se ne accorga.',
    uptime: {
      value: '99.9',
      unit: '%',
      label: 'Uptime garantito',
      desc: 'Il vostro sito resta online il 99.9% del tempo. Lo 0.1% restante non è un disservizio garantito, è lo scenario peggiore che il nostro SLA tollera.',
    },
    lcp: {
      value: '< 2.5',
      unit: 's',
      label: 'Largest Contentful Paint',
      desc: 'Ogni secondo in più costa fino al 7% di conversioni perse (Google)',
    },
    cls: {
      value: '< 0.1',
      label: 'Cumulative Layout Shift',
      desc: 'L\'utente clicca dove intende cliccare. Meno errori, più conversioni',
    },
    inp: {
      value: '< 200',
      unit: 'ms',
      label: 'Interaction to Next Paint',
      desc: 'L\'interfaccia reagisce come un\'app nativa, non come un sito lento',
    },
    accentMetrics: [
      { value: '10', unit: 'x', label: 'Fino a 10x il traffico normale', desc: 'Lancio prodotto, campagna virale, picco stagionale.' },
      { value: '< 2', unit: 'h', label: 'MTTR — Mean Time to Recovery', desc: 'Un incidente non blocca il vostro business per una settimana.' },
      { label: 'HTTPS 100% + IAM rigoroso', desc: 'Nessuna credenziale esposta, accessi controllati, compliance by default.' },
    ],
  },

  process: {
    headline: 'Un ciclo in cinque fasi che non si ferma',
    phases: [
      {
        name: 'Discovery',
        subtitle: 'Capire prima di progettare.',
        body: 'Entriamo nei vostri processi reali. Non partiamo dal brief, partiamo dal problema di business. Analizziamo dove perdete tempo, soldi o clienti. Spesso la soluzione giusta non è quella richiesta e dirvelo subito vi fa risparmiare mesi.',
        checkpoint: 'Obiettivi validati, metriche di successo concordate, scope definito.',
      },
      {
        name: 'Design',
        subtitle: 'Ogni scelta visiva è una decisione economica.',
        body: 'Flussi, gerarchie, interazioni: ogni decisione è validata su dati reali di comportamento utente. Utilizziamo strumenti come Clarity e Hotjar per tracciare sessioni, heatmap e pattern di navigazione, e incrociamo questi dati con gli obiettivi di business. Non prendiamo nessuna scelta estetica senza un dato che la giustifichi.',
        checkpoint: 'Prototipo testato su utenti reali, flussi approvati dai decision-maker.',
      },
      {
        name: 'Build',
        subtitle: 'Costruito per durare, non per consegnare.',
        body: 'Codice pulito, test continui, performance come requisito, non come bonus. Ogni componente è modulare: regge la crescita, regge i cambi di strategia, regge il prossimo sviluppo senza riscritture.',
        checkpoint: 'Ambiente di staging validato, KPI tecnici verificati.',
      },
      {
        name: 'Go-live',
        subtitle: 'Un evento gestito, non un salto nel vuoto.',
        body: 'Deploy controllato, tracking configurato, analytics attive dal primo minuto, team formato sull\'uso del sistema. Niente va live senza un piano di monitoraggio e un piano B.',
        checkpoint: 'Metriche baseline registrate, soglie di allarme attive.',
      },
      {
        name: 'Growth',
        subtitle: 'Il lavoro più importante inizia qui.',
        body: 'Iteriamo su dati reali, non su ipotesi. Ogni ciclo di analisi genera una roadmap evolutiva concreta. L\'obiettivo non è mantenere il sistema, è farlo crescere con il business.',
        checkpoint: 'Rialimenta il Discovery con nuovi dati, nuove priorità, nuovi obiettivi.',
      },
    ],
  },

  caseStudy: {
    headline: 'Da un sito che non funzionava a +52% di prenotazioni dirette',
    client: 'C&O Welcoming Italy, gestione di 30+ strutture ricettive di lusso, 100+ posti letto, ~3.000 ospiti per stagione estiva.',
    situation: 'Un sito WordPress costruito da un\'agenzia senza competenze tecniche. Nessuna manutenzione. Tempi di caricamento inaccettabili. Il sistema di prenotazione diretta non funzionava. Risultato: ogni ospite che non riusciva a prenotare dal sito finiva sugli OTA, dove ogni prenotazione costava a Oliviero tra il 15% e il 20% in commissioni. Su 3.000 ospiti stagionali, il costo di quell\'inefficienza si misurava in decine di migliaia di euro a stagione.',
    interventionIntro: 'Siamo partiti dalla Discovery: dove perde soldi Oliviero? Non nel design. Nel flusso di prenotazione e nella frammentazione operativa.',
    interventionSubtitle: 'Abbiamo ricostruito l\'ecosistema completo:',
    interventionPoints: [
      { label: 'Sito', desc: 'Migrazione su Webflow, infrastruttura che scala in automatico, tempi di caricamento abbattuti.' },
      { label: 'Operatività', desc: '30 strutture migrate da un channel manager inadatto a uno in grado di gestire quella mole di guest.' },
      { label: 'Conversione', desc: 'Flusso di prenotazione diretta riprogettato da zero, ogni punto di frizione eliminato.' },
    ],
    results: [
      { value: '+52%', label: 'prenotazioni dirette' },
      { value: '20%', label: 'Risparmio per prenotazione vs OTA' },
      { value: '30', label: 'strutture gestite da un unico sistema' },
    ],
    bottomNote: 'Ore di lavoro manuale eliminate ogni settimana.',
  },

  videoMockups: [
    { url: 'https://bento.wmie.it/wmie/Documents/portfolio/ceowelcomingitaly.webm', caption: 'C&O Welcoming Italy' },
    { url: 'https://bento.wmie.it/wmie/Documents/portfolio/guilds.webm', caption: 'Guilds' },
    { url: 'https://bento.wmie.it/wmie/Documents/portfolio/construction-concept.webm', caption: 'Construction Concept' },
    { url: 'https://bento.wmie.it/wmie/Documents/portfolio/pharma-concept.webm', caption: 'Pharma Concept' },
    { url: 'https://bento.wmie.it/wmie/Documents/portfolio/construction-concept-2.webm', caption: 'Construction Concept 2' },
    { url: 'https://bento.wmie.it/wmie/Documents/portfolio/boat-concept.webm', caption: 'Boat Concept' },
    { url: 'https://bento.wmie.it/wmie/Documents/portfolio/enermed.webm', caption: 'Enermed' },
  ],

  products: {
    headline: 'Costruiamo prima per noi. Poi per voi.',
    subtitle: 'We are founders. Ogni competenza che portiamo nei vostri progetti è stata testata prima sui nostri prodotti. Con i nostri soldi, i nostri utenti e i nostri problemi.',
    items: [
      {
        name: 'Swiftrise',
        desc: 'CDN globale con 750+ PoP e Cloud IDE integrato, infrastruttura interamente su AWS.',
        competence: 'Architettura cloud a scala globale, gestione infrastruttura distribuita, ottimizzazione costi AWS.',
      },
      {
        name: 'Cream Experiences',
        desc: 'Piattaforma eventi. Halloween 2024: 600+ partecipanti, copertura radio locale.',
        competence: 'Lancio di prodotti consumer sotto pressione reale, gestione picchi di traffico con deadline non negoziabili.',
      },
      {
        name: 'Quella',
        desc: 'Portale immobiliare AI-powered. L\'utente descrive il suo stile di vita, l\'AI trova la casa giusta.',
        competence: 'Integrazione AI in prodotti reali con utenti non tecnici.',
        grant: 'Ha completato il programma di innovazione europeo EINS Spoke 4, ricevendo un grant di 70k€.',
        link: 'https://www.linkedin.com/posts/wmie_siamo-onesti-accendere-la-tv-oggi-%C3%A8-un-rischio-activity-7419347998624632833-PNmo?utm_medium=ios_app&rcm=ACoAADRmksUBoPDzgsdSXiNwVvS-akcw0_BvJBk&utm_source=social_share_send&utm_campaign=copy_link',
        linkLabel: 'Il nostro post a riguardo',
      },
      {
        name: 'Pigeon.zip',
        desc: 'Social file sharing anonimo con scadenza automatica.',
        competence: 'Progettazione UX per utenti non tecnici, architettura privacy-first con gestione automatica del ciclo di vita dei dati.',
      },
      {
        name: 'Cards',
        desc: 'Biglietto da visita digitale con file sharing e notifiche push.',
        competence: 'Ideazione, sviluppo e rilascio di micro-prodotti funzionali in tempi rapidi. Dalla prima riga di codice al prodotto live.',
      },
    ],
    bottomText: 'Ogni problema che incontriamo e risolviamo su un nostro prodotto diventa un pattern che replichiamo nei progetti cliente.',
  },

  results: {
    headline: 'Non solo clienti. Risultati.',
    clients: [
      {
        name: 'C&O Welcoming Italy',
        country: 'Italia',
        context: '30+ strutture ricettive di lusso, ~3.000 ospiti/stagione.',
        problem: 'Sito WordPress non mantenuto, prenotazioni dirette non funzionanti, dipendenza da OTA con commissioni del 15-20%.',
        intervention: 'Ricostruzione completa dell\'ecosistema digitale. Sito, channel manager, flusso di prenotazione.',
        metric: '+52%',
        metricLabel: 'prenotazioni dirette / Risparmio fino al 20% per prenotazione vs OTA / 30 strutture gestite da un unico sistema',
      },
      {
        name: 'CAO Formaggi',
        country: 'Italia',
        context: 'Caseificio multinazionale, export globale.',
        problem: 'I sales rep internazionali non avevano uno strumento digitale per presentare i prodotti ai buyer esteri.',
        intervention: 'Sito storytelling con modelli 3D interattivi di ogni formaggio. L\'utente lo esplora e lo "taglia" come se lo avesse in mano.',
        metric: 'WIP',
        metricLabel: 'Work in progress / NDA',
      },
      {
        name: 'Enermed',
        country: 'Italia',
        context: 'Fornitore energia ad alto valore tecnologico.',
        problem: 'Un prodotto innovativo (smart meter) difficile da comunicare ai clienti.',
        intervention: 'UI/UX completa con modello 3D interattivo dello smart meter per rendere tangibile l\'offerta tecnologica.',
        metric: '3 min',
        metricLabel: 'Dwell Time / Strumento di comunicazione per il team commerciale e per investor relations.',
      },
      {
        name: 'W2EW',
        country: 'Paesi Bassi',
        context: 'Progetto Horizon Europe 2020, grant €6M.',
        problem: 'Necessità di comunicare avanzamenti alla Commissione Europea e attrarre nuovi investitori su un progetto tecnico complesso.',
        intervention: 'Sito web che traduce complessità tecnica in comunicazione chiara per stakeholder istituzionali.',
        metric: '4 min',
        metricLabel: 'Dwell Time / Ha contribuito ad attrarre nuovi investimenti nel progetto.',
      },
      {
        name: 'Guilds',
        country: 'Italia',
        context: 'Progetto Horizon 2020, fondi UE.',
        problem: 'Spiegare un sistema di certificazione professionale su blockchain a un pubblico non tecnico.',
        intervention: 'Sito web con oggetti 3D interattivi che rendono comprensibile un concetto astratto.',
        metric: '5 min',
        metricLabel: 'Dwell Time / Ha contribuito a trovare nuovi fondi e a costruire una community attiva.',
      },
    ],
    bottomNote: 'Ogni progetto è sviluppato per ottenere il massimo punteggio sui Core Web Vitals di Google, indipendentemente dalla complessità.',
    engagementStat: 'Engagement medio dei nostri clienti: 3-5 minuti. Media di mercato: ~54 secondi (Contentsquare). Non è un caso, è design, storytelling e tecnologia che lavorano insieme.',
  },

  team: {
    headline: 'Il team che lavora sul vostro progetto',
    subtitle: 'Non siamo un collettivo di freelance assemblati a progetto. Siamo un team stabile con competenze complementari. Design, engineering, cloud e AI allo stesso tavolo dal giorno zero.',
    badges: ['Amazon Web Services Partner', 'AWS Startups Program', 'Webflow Certified Partner', 'Shopify Partner', 'Incorporati da Etechus'],
    founders: [
      {
        name: 'Alessio Meloni',
        role: 'Co-Founder, PM e architettura di sistemi',
        bio: 'È il punto di contatto tra il business del cliente e le decisioni tecniche. Parla la lingua del CEO e quella del developer.',
        credentials: 'AWS Solution Architect · Sales & Marketing',
      },
      {
        name: 'Enrico Santamaria',
        role: 'Co-Founder, Direzione creativa e Product design',
        bio: 'Ogni interfaccia, ogni flusso, ogni interazione passa da lui, dal concept alla produzione.',
        credentials: 'UI/UX Designer · Webflow Certified Partner',
      },
    ],
    members: [
      {
        name: 'Andreea, Michele',
        role: 'AWS Solution Architects',
        bio: 'Architettura cloud, scaling, ottimizzazione costi. Sono loro a garantire che l\'infrastruttura regga i picchi e che non paghiate più del necessario.',
      },
      {
        name: 'Fabio',
        role: 'AI Engineer & PhD Student',
        bio: 'Sistemi AI in produzione, non prototipi accademici. Dalla classificazione documenti ai workflow automatizzati. Progetta l\'AI che entra nei vostri sistemi.',
      },
    ],
    partnerships: [
      { name: 'Amazon Web Services Partner + AWS Startups Program', benefit: 'Accesso a supporto tecnico prioritario, architetture validate AWS, pricing riservato per le infrastrutture dei clienti.' },
      { name: 'Webflow Certified Partner', benefit: 'Accesso anticipato a funzionalità, supporto diretto dal team Webflow, standard di sviluppo certificati.' },
      { name: 'Shopify Partner', benefit: 'Implementazioni e-commerce con supporto tecnico dedicato e accesso a risorse riservate ai partner.' },
      { name: 'Incorporati da Etechus', benefit: 'Nati dentro un\'azienda che sviluppa tecnologia per la Commissione Europea. Standard di compliance, documentazione e governance enterprise dal giorno zero.' },
    ],
  },

  postProject: {
    headline: 'Cosa cambia dopo il primo progetto',
    subtitle: 'Il primo progetto risolve un problema. Quello che viene dopo trasforma il modo in cui operate.',
    pillars: [
      {
        title: 'Da fornitore a partner decisionale',
        body: 'Dopo il primo progetto conosciamo i vostri processi, i vostri vincoli, le vostre priorità. Non aspettiamo il prossimo brief, anticipiamo il prossimo problema. Quando serve una decisione tecnologica, siamo già al tavolo con il contesto per prenderla bene.',
      },
      {
        title: 'Da progetto isolato a ecosistema integrato',
        body: 'Ogni sistema che costruiamo è progettato per comunicare con quelli che verranno dopo. Il secondo progetto parte più veloce del primo. Il terzo costa meno del secondo. Il digitale smette di essere una voce di spesa e diventa l\'infrastruttura operativa che fa funzionare il business.',
      },
      {
        title: 'Da soluzioni custom a piattaforma consolidata',
        body: 'Ogni progetto genera componenti riutilizzabili e pattern testati. Niente viene buttato via, niente viene riscritto da zero. Ogni iterazione è più rapida, più sicura e meno costosa, perché costruiamo su fondamenta che abbiamo già validato.',
      },
    ],
  },

  cta: {
    sectionIntro: 'Parliamo del vostro ecosistema',
    headline: 'Un unico team. Un unico sistema.',
    headlineAccent: 'Costruito per generare valore anche quando non ci state pensando.',
    criteria: [
      'Ha un business che funziona e vuole farlo scalare con la tecnologia',
      'Coinvolge i decision maker nel processo, non solo il reparto IT',
      'Cerca un partner che dica "no" quando serve, non un esecutore silenzioso',
      'Ha budget adeguato a costruire qualcosa che dura',
    ],
    buttonText: 'Da quale problema volete partire?',
  },
}

/* ─────────────────────────────────────────────────────────────
   WMIE Company Profile — content (director-owned)
   All copy lives here. Components read, never write.
   Facts come from the case studies published in the wmie.it CMS.
   ───────────────────────────────────────────────────────────── */

/* ─── Media (Vercel Blob, public CDN, no binaries in the repo) ─── */
export const BLOB = 'https://drrmobjnk8tvuzmv.public.blob.vercel-storage.com'
const blob = (file: string) => `${BLOB}/${file}`

export const media = {
  cao: {
    metodoSet: blob('cao-metodo-set.mp4'),
    metodoPagina: blob('cao-metodo-pagina.mp4'),
    metodoCategorie: blob('cao-metodo-categorie.mp4'),
    formaHero: blob('cao-forma-hero.mp4'),
    alphaDemo: blob('cao-3d-alpha-demo.mp4'),
    qualitaTimeline: blob('cao-qualita-timeline.mp4'),
    storieDrag: blob('cao-storie-drag.mp4'),
    catalogo: blob('cao-catalogo.mp4'),
    assistenteDop: blob('cao-assistente-dop.mp4'),
    eventsMinisite: blob('cao-events-minisite.mp4'),
  },
  tendenze: {
    schedaProdotto: blob('tendenze-scheda-prodotto.jpg'),
    selettore: blob('tendenze-selettore-4x3.jpg'),
    collection: blob('tendenze-collection-4x3.jpg'),
    mailShopify: blob('tendenze-mail-shopify.jpg'),
  },
  collu: {
    collection: blob('collu-collection.jpg'),
    schedaProdotto: blob('collu-scheda-prodotto-4x3.jpg'),
    home: blob('collu-home-4x3.jpg'),
  },
}

export type MediaSliderItem = {
  type: 'video' | 'image'
  src: string
  label: string
  caption?: string
}

export type Product = {
  name: string
  desc: string
  competence: string
  grantBadge?: string
  grant?: string
  link?: string
  linkLabel?: string
}
/** Typed pass-through: a renamed field in a product literal fails the build. */
const productList = (items: Product[]): Product[] => items

const videoMockups = [
  { url: 'https://bento.wmie.it/wmie/Documents/portfolio/ceowelcomingitaly.webm', caption: 'C&O Welcoming Italy' },
  { url: 'https://bento.wmie.it/wmie/Documents/portfolio/guilds.webm', caption: 'Guilds' },
  { url: 'https://bento.wmie.it/wmie/Documents/portfolio/construction-concept.webm', caption: 'Construction Concept' },
  { url: 'https://bento.wmie.it/wmie/Documents/portfolio/pharma-concept.webm', caption: 'Pharma Concept' },
  { url: 'https://bento.wmie.it/wmie/Documents/portfolio/construction-concept-2.webm', caption: 'Construction Concept 2' },
  { url: 'https://bento.wmie.it/wmie/Documents/portfolio/boat-concept.webm', caption: 'Boat Concept' },
  { url: 'https://bento.wmie.it/wmie/Documents/portfolio/enermed.webm', caption: 'Enermed' },
]

export const content = {
  cover: {
    title: 'Company Profile 2026',
    tagline: 'Engineering Digital Systems.\nDelivering Business Outcomes.',
    body: 'Progettiamo infrastrutture digitali che generano valore e crescono con il vostro business.',
    ambientVideo: media.cao.formaHero,
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
        desc: 'Dove il traffico diventa fatturato. Shopify e Shopify Plus, custom o headless, presidiati dalla scheda prodotto al gestionale. Ogni frizione rimossa tra "voglio comprare" e "ho comprato" è margine recuperato; le automazioni si provano in dry run con Collaudo prima di toccare il catalogo.',
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

  /* ─── C&O Welcoming Italy (unchanged) ─── */
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

  /* ─── New case studies (Q4 2026) ─── */
  caseStudies: {
    cao: {
      sectionNumber: '06',
      sectionText: 'Case Study',
      headline: 'Il formaggio in 3D che pesa quanto',
      headlineAccent: 'una foto',
      intro: 'CAO Formaggi — Cooperativa casearia sarda dal 1966, 700 soci, Pecorino Sardo DOP e Pecorino Romano DOP esportati in oltre 20 Paesi. Ogni trattativa con i buyer esteri si gioca sul far percepire la qualità prima dell\'assaggio.',
      challenge: {
        title: 'La sfida',
        body: 'I sales representative si presentavano ai buyer con PDF e cataloghi cartacei, che comprimono crosta, pasta e taglio in una foto statica. Serviva uno strumento digitale degno del prodotto, leggero abbastanza da aprirsi ovunque nel mondo si trovi il buyer.',
        metrics: [
          { value: 'PDF', label: 'Strumenti di vendita obsoleti', desc: 'Materiali che non rendevano giustizia al prodotto.' },
          { value: '20+', label: 'Paesi da servire, ognuno diverso', desc: 'Buyer su reti e dispositivi molto diversi tra loro.' },
          { value: '1966', label: 'Un marchio storico', desc: '700 soci e sessant\'anni di storia meritano una presenza online al loro livello.' },
        ],
      },
      intervention: {
        title: 'L\'intervento',
        items: [
          {
            label: 'Il 3D servito come video trasparente',
            desc: 'Shooting fotografico in sede, rimodellazione 3D sul prodotto reale, 72 fotogrammi a 60 fps. Il render viaggia come stacked-alpha video in AV1 (HEVC per i Safari meno recenti) e il browser lo ricompone in WebGL: una scheda prodotto passa da 30 MB a 564 KB.',
          },
          {
            label: 'Storytelling di filiera',
            desc: 'Dal territorio al lotto: transizioni GSAP che portano il buyer dalla curiosità alla comprensione del perché quel formaggio vale il suo prezzo. Le storie dei soci si sfogliano come un mazzo di carte.',
          },
          {
            label: 'Assistente AI con la mascotte CAO',
            desc: 'Un agente RAG sul catalogo reale: suggerisce l\'abbinamento giusto mentre il buyer guarda un prodotto e consiglia le referenze adatte al suo mercato. Una guida competente a qualsiasi ora, in ogni fuso orario.',
          },
        ],
      },
      stats: [
        { value: '564 KB', label: 'Una scheda prodotto in 3D', note: 'da 30 MB di render' },
        { value: '60 fps', label: '72 fotogrammi per animazione', note: 'forma intera e taglio, per ogni formaggio' },
        { value: '20+', label: 'Paesi, lingua rilevata dal dispositivo', note: 'Microsoft Clarity sulle sessioni reali' },
      ],
      bottomNote: 'Metodo wmie: render approvati dal management prima di una riga di codice. Build completa in staging, lancio in arrivo.',
    },

    caoEvents: {
      sectionNumber: '07',
      sectionText: 'Case Study',
      headline: 'Lo stesso cliente, il vincolo opposto: 400 smartphone su una rete',
      headlineAccent: 'satura',
      intro: 'CAO Formaggi · Event minisite — Nato per la presentazione del BMW iX3 alla Rinascente di Cagliari, marzo 2025. Oggi è il catalogo che CAO porta alle fiere internazionali: un QR code sul totem dello stand, la pagina si apre nella lingua del telefono.',
      items: [
        {
          label: 'Architettura zero-compute',
          desc: 'Next.js in static export: HTML puro servito dalla CDN edge, nessun server runtime. I picchi di traffico in sala non toccano nessuna macchina.',
        },
        {
          label: 'Ogni asset ricodificato',
          desc: 'Font su misura con subsetting (-78%), immagini AVIF, video ricodificati (-75%). L\'identità intera, stemma e tipografia compresi, in un budget da 600 KB.',
        },
        {
          label: 'Lingua senza selettore',
          desc: 'Redirect 307 sulla lingua del dispositivo, prima che la pagina si disegni: italiano o inglese, senza un tocco in più.',
        },
      ],
      stats: [
        { value: '95', label: 'Lighthouse Performance', note: 'mobile · TBT 0 ms · CLS 0' },
        { value: '-85%', label: 'First-load weight', note: 'da ~4 MB a ~600 KB' },
        { value: '0', label: 'Cataloghi stampati', note: 'la carta sostituita dal QR sul totem' },
      ],
      videoCaption: 'Caricamento a freddo su smartphone: stemma, claim, marquee dei formaggi, reveal fotografico e fascia "Dal 1966".',
    },

    shopify: {
      number: '03 · E-commerce',
      badge: 'Shopify Partner',
      title: 'Il braccio tecnico dello store',
      subtitle: 'Due store multimarca da oltre 20.000 articoli, un SaaS nato dal lavoro sul campo e un bug di piattaforma corretto da Shopify. Presidiamo la parte tecnologica dell\'e-commerce, dalla scheda prodotto al gestionale.',
      stats: [
        { value: '+18%', label: 'Conversione a parità di traffico · Tendenze Store' },
        { value: '13.835', label: 'Prodotti riportati sui canali di vendita · Gruppo Collu' },
        { value: '22 giorni', label: 'Dal report wmie al fix di Shopify in produzione' },
      ],
    },

    tendenze: {
      sectionNumber: '08',
      sectionText: 'Case Study',
      headline: 'Dal selettore delle varianti al bug corretto da',
      headlineAccent: 'Shopify',
      intro: 'Tendenze Store — 22 punti vendita in 14 città della Sardegna e uno store Shopify Plus da oltre 20.000 articoli, da Emporio Armani a Tommy Hilfiger. wmie ne presidia la parte tecnologica, in tandem con Sartoria del Marketing che ne cura il marketing.',
      challenge: {
        title: 'La sfida',
        body: 'Lo store arriva a wmie già costruito. Sulla scheda prodotto il selettore delle varianti non arrivava sotto gli occhi di chi compra: chi apriva una maglietta non vedeva che esisteva anche in rosso o in un\'altra taglia. Il feed di Google Merchant non conosceva il margine. E su Shopify Plus ogni modifica tocca lo store mentre vende.',
        metrics: [
          { value: '20.000+', label: 'Articoli con varianti invisibili', desc: 'Un problema di interfaccia che pesa su ogni sessione.' },
          { value: '24h', label: 'Un feed senza il dato di margine', desc: 'Il budget finiva sui prodotti che si vendono, non su quelli che guadagnano.' },
          { value: '0', label: 'Spazio per sbagliare', desc: 'Un errore in produzione si paga sulle vendite della giornata.' },
        ],
      },
      intervention: {
        title: 'L\'intervento',
        items: [
          {
            label: 'La scheda prodotto che vende',
            desc: 'Selettore delle taglie in vista appena si apre il prodotto, pulsanti a larghezza uguale con target di tocco ampi, guida alle taglie a un tocco. Nella prima settimana la conversione sale del 18% a parità di traffico.',
          },
          {
            label: 'I margini dentro Google Merchant',
            desc: 'Un flusso quotidiano legge il margine, tagga i prodotti che fanno guadagnare lo store e li porta nel feed. Da qui nasce Collaudo, il SaaS wmie che prova le automazioni in dry run prima di toccare il catalogo vero.',
          },
          {
            label: 'Il bug di piattaforma',
            desc: '5 agosto: la homepage esce vuota per l\'80% delle richieste, con status 200 e log puliti. wmie costruisce la riproduzione, esclude otto ipotesi e consegna a Shopify request-id appaiati. Il 27 agosto il fix è in produzione nello Storefront Renderer.',
          },
        ],
      },
      stats: [
        { value: '+18%', label: 'Conversione a parità di traffico', note: 'rilevato sui dati dello store' },
        { value: '22 giorni', label: 'Dal report al fix di Shopify', note: 'root cause confermata per iscritto' },
        { value: '30/30', label: 'Richieste corrette dopo il workaround', note: 'da ~80% di homepage vuote' },
      ],
      bottomNote: 'Quando il guasto sta sotto la piattaforma, un corso sulla piattaforma non basta: servono le competenze di una software house.',
    },

    collu: {
      sectionNumber: '09',
      sectionText: 'Case Study',
      headline: 'Il ponte tecnico fra gestionale, piattaforma e',
      headlineAccent: 'campagne',
      intro: 'Gruppo Collu — Moda multimarca dalla Sardegna, circa 20.000 prodotti su gruppocollu.it. Lo store gira su Shopify e prende i dati dal gestionale Atelier di Zucchetti. wmie entra su incarico di Sartoria del Marketing come referente tecnico dello store.',
      challenge: {
        title: 'La sfida',
        body: 'Sullo store i prodotti c\'erano, ma senza canali di vendita attivi: in vetrina e su Google Merchant ne compariva una frazione. Il passaggio al gestionale aveva riscritto tutte le URL, e anni di traffico organico e campagne portavano su pagine inesistenti. Quattro fornitori, ognuno con ragione sulla propria parte, e nessuno con il quadro completo.',
        metrics: [
          { value: '13.835', label: 'Prodotti caricati ma invisibili', desc: 'Foto, prezzo e varianti al loro posto, canali di vendita spenti.' },
          { value: '404', label: 'Le URL riscritte dal gestionale', desc: 'Traffico e campagne su pagine che non esistevano più.' },
          { value: '4', label: 'Fornitori, quattro pezzi di verità', desc: 'Gestionale, connettore, piattaforma e campagne in mani diverse.' },
        ],
      },
      intervention: {
        title: 'L\'intervento',
        items: [
          {
            label: 'Le URL prodotto, ricostruite',
            desc: 'Uno script incrocia barcode, SKU e dati di catalogo per associare ogni prodotto vecchio al suo nuovo: 6.449 redirect prodotto-verso-prodotto, circa 300 link recuperati lato SEO.',
          },
          {
            label: 'Il catalogo torna davanti ai clienti',
            desc: 'wmie isola i 13.835 articoli fuori dai canali, si fa spiegare dal fornitore del gestionale come il connettore decide la pubblicazione e riattiva in blocco prodotti e collezioni. Di nuovo in vetrina e su Google Merchant.',
          },
          {
            label: 'Dal sintomo alla causa',
            desc: 'Taglie che non esistono, marchi diversi nella stessa scheda: wmie non gira la segnalazione. Ricostruisce cosa fa il connettore, isola la regola e la consegna al fornitore che può chiuderla, scritta come il suo reparto sviluppo la può lavorare.',
          },
        ],
      },
      stats: [
        { value: '13.835', label: 'Prodotti riportati sui canali', note: 'di nuovo su Google Merchant' },
        { value: '6.449', label: 'Redirect prodotto-verso-prodotto', note: '~300 link recuperati lato SEO' },
        { value: '6 mesi', label: 'Dall\'emergenza alle evolutive', note: 'feed, saldi, interfaccia, accessibilità' },
      ],
      bottomNote: 'Un sintomo apre un ticket e resta lì. Una causa provata sui dati arriva a destinazione e si chiude.',
    },
  },

  /* ─── Media sliders ─── */
  sliders: {
    caoMetodo: {
      eyebrow: 'CAO Formaggi · Il metodo',
      caption: 'Prima i render, poi il codice: le pagine approvate dal management prima dello sviluppo.',
      items: [
        { type: 'video', src: media.cao.metodoSet, label: 'Set', caption: 'Le pagine di Pastorino Sardo, Molissardo e Gran CAO nei render presentati al management.' },
        { type: 'video', src: media.cao.metodoPagina, label: 'Pagina prodotto', caption: 'Il render della pagina Molissardo al Tartufo, dall\'apertura scura ai valori nutrizionali.' },
        { type: 'video', src: media.cao.metodoCategorie, label: 'Categorie', caption: 'Le categorie di prodotto in preview, con le pill colorate che entrano in scena.' },
      ] as MediaSliderItem[],
    },
    caoSito: {
      eyebrow: 'CAO Formaggi · Il sito',
      caption: 'La build in staging: 3D ultra-leggero, storytelling di filiera, assistente AI.',
      items: [
        { type: 'video', src: media.cao.formaHero, label: 'Forma 3D', caption: 'La forma del Gran CAO in pagina: la resa di un render 3D, il peso di una clip leggera.' },
        { type: 'video', src: media.cao.alphaDemo, label: 'Alpha demo', caption: 'A sinistra colore e maschera in un file solo; a destra il browser li ricompone sopra testo e fondi.' },
        { type: 'video', src: media.cao.qualitaTimeline, label: 'Filiera', caption: 'Dal latte al lotto: le tappe del processo si scoprono una alla volta, scendendo.' },
        { type: 'video', src: media.cao.storieDrag, label: 'Storie dei soci', caption: 'Le storie dei soci si sfogliano trascinando, come un mazzo di carte: dal 1966 in avanti.' },
        { type: 'video', src: media.cao.catalogo, label: 'Catalogo', caption: 'Un assaggio della pagina catalogo, dalla build del sito.' },
        { type: 'video', src: media.cao.assistenteDop, label: 'Assistente AI', caption: 'La mascotte CAO risponde sul catalogo reale e suggerisce gli abbinamenti.' },
      ] as MediaSliderItem[],
    },
    tendenze: {
      eyebrow: 'Tendenze Store · tendenzestore.com',
      caption: 'La scheda prodotto oggi e l\'email con cui Shopify conferma root cause e fix.',
      items: [
        { type: 'image', src: media.tendenze.schedaProdotto, label: 'Scheda prodotto', caption: 'La scheda prodotto oggi: il selettore delle taglie in vista appena si apre il prodotto.' },
        { type: 'image', src: media.tendenze.selettore, label: 'Selettore', caption: 'Le taglie, la guida e lo stato di selezione in un colpo d\'occhio.' },
        { type: 'image', src: media.tendenze.collection, label: 'Collection', caption: 'La collection donna, con le taglie già visibili sulla card.' },
        { type: 'image', src: media.tendenze.mailShopify, label: 'Risposta di Shopify', caption: 'L\'email con cui Shopify chiude il ticket il 27 agosto: root cause confermata, fix in produzione.' },
      ] as MediaSliderItem[],
    },
    collu: {
      eyebrow: 'Gruppo Collu · gruppocollu.it',
      caption: 'Il catalogo davanti a chi compra.',
      items: [
        { type: 'image', src: media.collu.collection, label: 'Collection', caption: 'La sezione donna con migliaia di articoli: la stessa parte di catalogo che restava fuori dai canali di vendita.' },
        { type: 'image', src: media.collu.schedaProdotto, label: 'Scheda prodotto', caption: 'La scheda prodotto dello store ereditato, con taglie e disponibilità.' },
        { type: 'image', src: media.collu.home, label: 'Home e menu', caption: 'La home e il menu portato sulle URL corrette delle collezioni.' },
      ] as MediaSliderItem[],
    },
    concepts: {
      eyebrow: 'Design concepts',
      caption: 'Esplorazioni di design: direzioni visive che testiamo prima di proporle ai clienti.',
      items: [
        { type: 'video', src: videoMockups[2].url, label: 'Construction' },
        { type: 'video', src: videoMockups[3].url, label: 'Pharma' },
        { type: 'video', src: videoMockups[4].url, label: 'Construction 2' },
        { type: 'video', src: videoMockups[5].url, label: 'Boat' },
      ] as MediaSliderItem[],
    },
  },

  videoMockups,

  products: {
    headline: 'Costruiamo prima per noi.',
    headlineAccent: 'Poi per voi.',
    subtitle: 'We are founders. Ogni competenza che portiamo nei vostri progetti è stata testata prima sui nostri prodotti. Con i nostri soldi, i nostri utenti e i nostri problemi.',
    items: productList([
      {
        name: 'Swiftrise',
        desc: 'CDN per codice e asset costruita sopra Amazon CloudFront: zero cache sul browser, tutto all\'edge, purge con effetto immediato.',
        competence: 'Architettura cloud a scala globale, mani dirette sull\'edge, ottimizzazione costi AWS.',
      },
      {
        name: 'Cream Experiences',
        desc: 'Piattaforma eventi. Halloween 2024: 600+ partecipanti, copertura radio locale.',
        competence: 'Lancio di prodotti consumer sotto pressione reale, gestione picchi di traffico con deadline non negoziabili.',
      },
      {
        name: 'Quella',
        desc: 'Portale immobiliare AI-first. L\'utente descrive il suo stile di vita, il motore di raccomandazione ordina gli immobili per compatibilità.',
        competence: 'Integrazione AI in prodotti reali con utenti non tecnici.',
        grantBadge: 'e.INS Spoke 4 · PNRR — Grant da 50.000 $',
        grant: 'Selezionata dal programma e.INS Spoke 4 (PNRR, capofila la Camera di Commercio di Sassari) con l\'MVP funzionante: tutte le fasi di coaching e advisory superate, grant da 50.000 $ in servizi.',
        link: 'https://www.linkedin.com/posts/wmie_siamo-onesti-accendere-la-tv-oggi-%C3%A8-un-rischio-activity-7419347998624632833-PNmo?utm_medium=ios_app&rcm=ACoAADRmksUBoPDzgsdSXiNwVvS-akcw0_BvJBk&utm_source=social_share_send&utm_campaign=copy_link',
        linkLabel: 'Il nostro post a riguardo',
      },
      {
        name: 'Pigeon.zip',
        desc: 'Trasferimento file senza limiti, gratuito e senza registrazione: il file non passa mai dal server, carica dritto sullo storage.',
        competence: 'Architettura cloud a costo zero di compute: firme a tempo, un solo hop verso lo storage.',
      },
      {
        name: 'Cards',
        desc: 'Biglietto da visita digitale su chip NFC con fallback QR, nessuna app. Progettato, sviluppato e venduto in autonomia: 100+ ordini al pre-lancio.',
        competence: 'Ideazione, sviluppo e rilascio di micro-prodotti funzionali in tempi rapidi. Dalla prima riga di codice al prodotto live.',
      },
      {
        name: 'Collaudo',
        desc: 'SaaS Shopify per scrivere automazioni in codice e provarle in dry run prima di applicarle al catalogo. Nato dal lavoro su Tendenze Store, oggi sullo Shopify App Store.',
        competence: 'Da un problema di un cliente a un prodotto a mercato; sicurezza operativa sugli store Shopify Plus.',
      },
    ]),
    bottomText: 'Ogni problema che incontriamo e risolviamo su un nostro prodotto diventa un pattern che replichiamo nei progetti cliente.',
  },

  results: {
    headline: 'Non solo clienti.',
    headlineAccent: 'Risultati.',
    clients: [
      {
        name: 'C&O Welcoming Italy',
        country: 'Italia',
        context: '30+ strutture ricettive di lusso, ~3.000 ospiti/stagione.',
        problem: 'Sito WordPress non mantenuto, prenotazioni dirette non funzionanti, dipendenza da OTA con commissioni del 15-20%.',
        intervention: 'Ricostruzione completa dell\'ecosistema digitale. Sito, channel manager, flusso di prenotazione.',
        metric: '+52%',
        metricLabel: 'prenotazioni dirette / Risparmio fino al 20% per prenotazione vs OTA',
      },
      {
        name: 'CAO Formaggi',
        country: 'Italia',
        context: 'Cooperativa casearia dal 1966, export in oltre 20 Paesi.',
        problem: 'PDF e cataloghi cartacei per un prodotto che va percepito prima dell\'assaggio.',
        intervention: 'Sito-strumento con formaggi in 3D serviti come video trasparente ultra-leggero, storytelling di filiera e assistente AI. Più il minisite per le fiere.',
        metric: '564 KB',
        metricLabel: 'una scheda prodotto in 3D, da 30 MB di render / 95 Lighthouse sul minisite eventi',
      },
      {
        name: 'Tendenze Store',
        country: 'Italia',
        context: 'Shopify Plus, 20.000+ articoli, 22 punti vendita.',
        problem: 'Varianti invisibili sulla scheda prodotto, feed senza margine, un bug di piattaforma.',
        intervention: 'Fix alla scheda prodotto, automazione dei margini su Google Merchant, report che porta Shopify a correggere lo Storefront Renderer.',
        metric: '+18%',
        metricLabel: 'conversione a parità di traffico / Fix Shopify in produzione in 22 giorni',
      },
      {
        name: 'Gruppo Collu',
        country: 'Italia',
        context: 'Shopify + gestionale Atelier, ~20.000 prodotti.',
        problem: '13.835 prodotti fuori dai canali di vendita, URL riscritte, quattro fornitori senza il quadro completo.',
        intervention: '6.449 redirect, catalogo riattivato, un solo referente tecnico fra gestionale, piattaforma e campagne.',
        metric: '13.835',
        metricLabel: 'prodotti riportati sui canali / 6 mesi dall\'emergenza alle evolutive',
      },
      {
        name: 'Enermed',
        country: 'Italia',
        context: 'Fornitore energia ad alto valore tecnologico.',
        problem: 'Un prodotto innovativo (smart meter) difficile da comunicare ai clienti.',
        intervention: 'UI/UX completa con modello 3D interattivo dello smart meter per rendere tangibile l\'offerta tecnologica.',
        metric: '3 min',
        metricLabel: 'Dwell Time / Strumento per il team commerciale e per investor relations',
      },
      {
        name: 'W2EW + Guilds',
        country: 'Paesi Bassi · Italia',
        context: 'Due progetti Horizon 2020: W2EW (grant €6M) e Guilds (certificazioni su blockchain).',
        problem: 'Comunicare avanzamenti tecnici complessi a Commissione Europea, investitori e community non tecniche.',
        intervention: 'Siti che traducono la complessità in comunicazione chiara, con oggetti 3D interattivi.',
        metric: '4-5 min',
        metricLabel: 'Dwell Time / Nuovi investimenti e fondi attratti sui due progetti',
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

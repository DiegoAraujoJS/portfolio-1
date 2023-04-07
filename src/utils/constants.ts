const textContents = {
    homepage: 'Homepage',
    aboutMe: 'About Me',
    services: 'Services',
    works: 'Works',
    contact: 'Contact',
    whatDoIOffer: 'What do I offer?',
    whatDoIOfferContent:'My approach to website design is to create a website that strengthens your company’s brand while ensuring ease of use and simplicity for your audience.' 
}

export const translations = {
        en: textContents,
        es: {
            homepage: 'Página principal',
            aboutMe: 'Sobre mí',
            services: 'Servicios',
            works: 'Trabajos',
            contact: 'Contacto',
            whatDoIOffer: '¿Qué ofrezco?',
            whatDoIOfferContent: 'Mi enfoque en el diseño de sitios web es crear un sitio web que fortalezca la marca de su empresa mientras garantiza la facilidad de uso y la simplicidad para su audiencia.'
        },
        fr: {
            homepage: 'Page d\'accueil',
            aboutMe: 'À propos de moi',
            services: 'Services',
            works: 'Travaux',
            contact: 'Contact',
            whatDoIOffer: 'Ce que je propose',
            whatDoIOfferContent: 'Mon approche de la conception de sites Web consiste à créer un site Web qui renforce la marque de votre entreprise tout en garantissant la facilité d\'utilisation et la simplicité pour votre public.'
        },
        de: {
            homepage: 'Startseite',
            aboutMe: 'Über mich',
            services: 'Dienstleistungen',
            works: 'Arbeiten',
            contact: 'Kontakt',
            whatDoIOffer: 'Was biete ich an?',
            whatDoIOfferContent: 'Meine Herangehensweise an die Webseitengestaltung besteht darin, eine Website zu erstellen, die die Marke Ihres Unternehmens stärkt, während die Benutzerfreundlichkeit und Einfachheit für Ihr Publikum gewährleistet wird.'
        },
        it: {
            homepage: 'Homepage',
            aboutMe: 'Su di me',
            services: 'Servizi',
            works: 'Lavori',
            contact: 'Contatto',
            whatDoIOffer: 'Cosa offro?',
            whatDoIOfferContent: 'Il mio approccio alla progettazione di siti Web consiste nel creare un sito Web che rafforzi la marca della tua azienda garantendo facilità d\'uso e semplicità per il tuo pubblico.'
        },
    } satisfies {[key: string]: typeof textContents}

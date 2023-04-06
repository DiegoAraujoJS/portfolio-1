const textContents = {
    homepage: 'Homepage',
    aboutMe: 'About Me',
    services: 'Services',
}

export const translations = {
        en: textContents,
        es: {
            homepage: 'Página principal',
            aboutMe: 'Sobre mí',
            services: 'Servicios',
        },
        fr: {
            homepage: 'Page d\'accueil',
            aboutMe: 'À propos de moi',
            services: 'Services',
        },
        de: {
            homepage: 'Startseite',
            aboutMe: 'Über mich',
            services: 'Dienstleistungen',
        },
        it: {
            homepage: 'Homepage',
            aboutMe: 'Su di me',
            services: 'Servizi',
        },
    } satisfies {[key: string]: typeof textContents}

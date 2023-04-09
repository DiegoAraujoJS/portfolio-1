import { translations } from "../utils/constants";

const Nav = ({lang, setLang, darkMode, setDarkMode}: {
    lang: keyof typeof translations;
    setLang: (lang: keyof typeof translations) => void;
    setDarkMode: (darkMode: boolean) => void;
    darkMode: boolean;
}) => <nav className="w-full top-0 bg-white z-10 dark:bg-slate-900">
        <div className="container mx-auto py-5 flex items-center justify-between">
            <div>
            </div>
            <ul
                className="hidden absolute md:flex space-x-10 text-gray-600 dark:text-gray-100 font-bold text-sm uppercase"
            >
                <li className="hover:text-gray-500">
                    <a href="#">{translations[lang].homepage}</a>
                </li>
                <li className="hover:text-gray-500">
                    <a href="#services">{translations[lang].services}</a>
                </li>
                <li className="hover:text-gray-500">
                    <a href="#works">{translations[lang].works}</a>
                </li>
                <li className="hover:text-gray-500">
                    <a href="#contact">{translations[lang].contact}</a>
                </li>
            </ul>
            <div/>
            <div className="flex justify-between w-1/5">
                <img src="https://flagcdn.com/gb.svg" width="30" onClick={() => setLang('en')}/>
                <img src="https://flagcdn.com/es.svg" width="30" onClick={() => setLang('es')}/>
                <img src="https://flagcdn.com/br.svg" width="30" onClick={() => setLang('br')}/>
                <img src="https://flagcdn.com/fr.svg" width="30" onClick={() => setLang('fr')}/>
                <img src="https://flagcdn.com/it.svg" width="30" onClick={() => setLang('it')}/>
                <img src="https://flagcdn.com/de.svg" width="30" onClick={() => setLang('de')}/>
            </div>
            <img
                id="moon"
                src="/img/moon.png"
                className="hidden md:block w-5 cursor-pointer"
                alt=""
                onClick={() => setDarkMode(!darkMode)}
            />
            <div id="hamburger" className="space-y-1 md:hidden cursor-pointer z-20">
                <div className="w-6 h-0.5 bg-black"></div>
                <div className="w-6 h-0.5 bg-black"></div>
                <div className="w-6 h-0.5 bg-black"></div>
            </div>
            <ul
                id="menu"
                className="hidden bg-indigo-900 absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center"
            >
                <li>
                    <a id="hLink" href="#">{translations[lang].homepage}</a>
                </li>
                <li>
                    <a id="hLink" href="#services">{translations[lang].services}</a>
                </li>
                <li>
                    <a id="hLink" href="#works">{translations[lang].works}</a>
                </li>
                <li>
                    <a id="hLink" href="#contact">{translations[lang].contact}</a>
                </li>
            </ul>
        </div>
    </nav>

export default Nav;

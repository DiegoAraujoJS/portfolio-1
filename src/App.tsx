import { useState } from "react"
import { translations } from "./utils/constants"

const App = () => {

    const [lang, setLang] = useState<keyof typeof translations>('en')

    return (
        <div className="font-nunito">
            <div className="h-1/2 lg:h-screen bg-gradient-to-t from-indigo-200">
                <nav className="fixed top-0 bg-white w-full">
                    <div className="container mx-auto py-5 flex justify-between">
                        <div> Hello </div>
                        <div>
                            <ul className="hidden md:flex space-x-10 text-gray-600 font-bold text-sm uppercase">
                                <li className="hover:text-gray-500">
                                    <a href="#">{translations[lang]['homepage']}</a>
                                </li>
                                <li className="hover:text-gray-500">
                                    <a href="#">{translations[lang]['aboutMe']}</a>
                                </li>
                                <li className="hover:text-gray-500">
                                    <a href="#">{translations[lang]['services']}</a>
                                </li>
                                <li></li>
                            </ul>
                        </div>
                        <div> Hello </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default App

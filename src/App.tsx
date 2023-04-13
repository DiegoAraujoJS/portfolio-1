import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense, useState } from "react"
import Nav from "./components/Nav"
import TexturedRotatingPlane from "./TexturedRotatingPlane"
import { translations } from "./utils/constants"

const App: React.FC = () => {
    const [lang, setLang] = useState<keyof typeof translations>('en')

    const [darkMode, setDarkMode] = useState(false)

    return <div className={`font-nunito ${darkMode ? "dark" : ""}`}>
        <Nav lang={lang} setLang={setLang} darkMode={darkMode} setDarkMode={setDarkMode}/>
        <div
            className="h-1/2 flex justify-around items-center lg:h-screen bg-gradient-to-t from-indigo-200 dark:from-slate-800 dark:to-slate-900 relative overflow-hidden"
        >

            <div style={{ maxHeight: '100px', maxWidth: '100px', height: '100px', width: '100px', marginRight: '20px'}}>
                <div
                    className="hidden md:block top-1/3 text-6xl left-5 font-bold text-gray-500"
                >Freelance</div>
            </div>

            <div style={{ maxHeight: '250px', maxWidth: '250px', height: '250px', width: '250px'}}>
                <Canvas
                    camera={{ fov: 70, near: 0.01, far: 100, position: [0, 0, 1] }}
                >
                    <Suspense fallback={null}>
                        <TexturedRotatingPlane />
                        <OrbitControls autoRotate autoRotateSpeed={4} />
                    </Suspense>
                </Canvas>
            </div>

            <div style={{ maxHeight: '100px', maxWidth: '100px', height: '100px', width: '100px'}}>
                <div
                    className="hidden lg:flex flex-col gap-5 rounded-md shadow-lg absolute top-0 bottom-0 m-auto right-10 bg-white dark:bg-slate-900 dark:shadow-slate-800 p-6 h-fit w-1/3"
                >
                    <h1 className="text-4xl font-bold text-indigo-900">{translations[lang].hi}</h1>
                    <p className="text-gray-400">{translations[lang].presentation}</p>
                    <a
                        className="bg-indigo-600 text-white text-xl px-3 py-2 rounded-md font-semibold w-fit"
                        href="#contact"
                    >Hire Me</a
                    >
                </div>
            </div>
            


        </div>

        <div id="services" className="dark:bg-slate-900">
            <div className="container mx-auto">

                <div className="flex flex-col gap-3 items-center">
                    <h1 className="text-indigo-600 font-bold">{translations[lang].services}</h1>
                    <h1 className="text-3xl dark:text-white">{translations[lang].whatDoIOffer}</h1>
                    <p className="w-1/2 text-center text-gray-400">{translations[lang].whatDoIOfferContent}</p>
                </div>

                <div className="p-5 sm:p-0 flex flex-wrap justify-around">

                    <div
                        className="w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3"
                    >
                        <img className="w-10" src="/img/icon.png" alt="" />
                        <h1 className="font-medium text-lg dark:text-white">UX / UI Design</h1>
                        <p className="text-gray-400">{translations[lang].portfolioDescription1}</p>
                        <a className="text-indigo-600 font-semibold text-sm" href=""
                        >Read More</a
                        >
                    </div>

                    <div
                        className="w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3"
                    >
                        <img className="w-10" src="/img/icon.png" alt="" />
                        <h1 className="font-medium text-lg dark:text-white">Product & Idea Shaping</h1>
                        <p className="text-gray-400">{translations[lang].portfolioDescription2}</p>
                        <a className="text-indigo-600 font-semibold text-sm" href=""
                        >Read More</a
                        >
                    </div>
                </div>
            </div>
        </div>

        <div id="works" className="py-40 dark:bg-slate-900">
            <div className="container mx-auto">

                <div className="flex flex-col gap-3 items-center">
                    <h1 className="text-indigo-600 font-bold">PORTFOLIO</h1>
                    <h1 className="text-3xl dark:text-white">Works & Projects</h1>
                    <p className="w-1/2 text-center text-gray-400"></p>
                </div>

                <div className="p-5 sm:p-0 flex flex-wrap justify-between">

                    <div
                        className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110"
                    >
                        <img src="/img/item.png" />
                    </div>

                    <div
                        className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110"
                    >
                        <img src="/img/item.png" />
                    </div>
                    <div
                        className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110"
                    >
                        <img src="/img/item.png" />
                    </div>

                    <div
                        className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110"
                    >
                        <img src="/img/item.png" />
                    </div>
                </div>
            </div>
        </div>


        <div id="contact" className="dark:bg-slate-900">
            <div className="container mx-auto">

                <div className="flex flex-col gap-3 items-center">
                    <h1 className="text-indigo-600 font-bold">{translations[lang].contact}</h1>
                    <h1 className="text-3xl dark:text-white">{translations[lang].haveAQuestion}</h1>
                    <p className="w-1/2 text-center text-gray-400">{translations[lang].letsDiscussIt}</p>
                </div>

                <form className="mt-5 p-8 flex flex-col gap-5 items-center">
                    <input
                        className="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white"
                        type="text"
                        placeholder="Name Surname"
                    />
                    <input
                        className="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white"
                        type="email"
                        placeholder="Email"
                    />
                    <textarea
                        className="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white"
                        cols={30}
                        rows={10}
                        placeholder="Message..."
                    ></textarea>
                    <button
                        className="w-1/2 bg-indigo-600 text-white font-medium px-3 py-2 rounded-md cursor-pointer"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>

        <div className="w-full bg-gray-800">
            <div className="container mx-auto py-5 flex items-center justify-between">
                <div className="flex gap-2">
                    <img src="/img/facebook.png" alt="" />
                    <img src="/img/instagram.png" alt="" />
                    <img src="/img/twitter.png" alt="" />
                    <img src="/img/linkedin.png" alt="" />
                </div>
            </div>
        </div>
    </div>
  
}

export default App

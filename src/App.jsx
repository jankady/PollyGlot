import React from 'react'
import logo from './assets/logo.png'
import OpenAI from 'openai';
import france from './assets/france-flag-icon-256.png';
import japan from './assets/japan-flag-icon-256.png';
import spain from './assets/spain-flag-icon-256.png';

function App() {

    const client = new OpenAI({
        apiKey: "../.env.OPENAI_API_KEY",
        dangerouslyAllowBrowser: true
    });

    return (
        <main
            className="text-center text-primary flex flex-col justify-start mt-5 items-center gap-2 text-lg w-3/5 mx-auto">
            <header className="mb-2 ">
                <img src={logo} alt="PollyGlot logo" className="w-9/10 mx-auto"/>
            </header>

            <section className="border-2 border-black/10 px-4 py-5 rounded-xl shadow-lg">
                <h1 className="text-primary font-bold mb-4 text-xl">Write text to translate:</h1>

                <textarea
                    className="w-full h-40 p-4 text-text font-bold bg-area rounded-lg mb-4 resize-none
                         placeholder-text placeholder:font-bold placeholder:opacity-50"
                    placeholder="How are you?" name="message"></textarea>

                <h1 className="text-primary font-bold mb-4 text-xl">Select language:</h1>

                <div className="flex flex-col gap-4 mb-4 text-text items-start w-fit mx-auto">
                    <label className="font-semibold flex items-center gap-2">
                        <input type="radio" name="language" value="Spanish"/>
                        Spanish
                        <img src={spain} alt="icon of spain" className="w-5 shadow-lg/50 shadow-black"/>
                    </label>
                    <label className="font-semibold flex items-center gap-2">
                        <input type="radio" name="language" value="Spanish"/>
                        French
                        <img src={france} alt="icon of spain" className="w-5 shadow-lg/50 shadow-black"/>
                    </label>
                    <label className="font-semibold flex items-center gap-2">
                        <input type="radio" name="language" value="Spanish"/>
                        Japanese
                        <img src={japan} alt="icon of spain" className="w-5 shadow-lg/50 shadow-black"/>
                    </label>
                </div>

                <button
                    className="bg-secondary w-full text-white px-8 py-3 rounded-lg hover:bg-primary transition font-semibold cursor-pointer">
                    Translate
                </button>
            </section>
        </main>
    )
}

export default App

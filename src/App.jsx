import React from 'react'
import logo from './assets/logo.png'
import OpenAI from 'openai';
import france from './assets/france-flag-icon-256.png';
import japan from './assets/japan-flag-icon-256.png';
import spain from './assets/spain-flag-icon-256.png';


const client = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
});

function App() {

    const [screen, setScreen] = React.useState(0);
    const [userText, setUserText] = React.useState({
        userText: "",
        transletedText: ""
    });
    const [selectedLanguage, setSelectedLanguage] = React.useState("");


    function onChangeText(event) {
        setUserText(prev => (
            {
                ...prev,
                userText: event.target.value
            }
        ))
    }

    function onChangeLanguage(event) {
        console.log(event.target.value)
        setSelectedLanguage(event.target.value);
    }


    async function handleSubmit() {
        console.log(selectedLanguage)
        if (screen === 0) {
            // try {
            //     const response = await client.chat.completions.create({
            //         model: "gpt-3.5-turbo",
            //         messages: [
            //             {
            //                 role: "system",
            //                 content: "You are a helpful language assistant that translates fluent from any language to Spanish."
            //             },
            //             {role: "user", content: "Translate the following text to Spanish: 'How are you?'"}
            //         ],
            //     })
            //     console.log(response.choices[0].message.content);
            // } catch (error) {
            //     console.error("Error during translation:", error);
            // }
            setScreen(1)
        } else {
            setScreen(0)
        }
    }

    return (
        <main
            className="text-center text-primary flex flex-col justify-start mt-5 items-center gap-2 text-lg w-3/5 mx-auto">
            <header className="mb-2 ">
                <img src={logo} alt="PollyGlot logo" className="w-9/10 mx-auto"/>
            </header>

            <section className="border-2 border-black/10 px-4 py-5 rounded-xl shadow-lg">
                <h1 className="text-primary font-bold mb-4 text-xl">{screen === 0 ? "Write text to translate:" : "Original text:"}</h1>

                <textarea
                    className="w-full h-40 p-4 text-text font-bold bg-area rounded-lg mb-4 resize-none
                         placeholder-text placeholder:font-bold placeholder:opacity-50"
                    placeholder="How are you?" name="message" disabled={screen === 1}
                    defaultValue={screen === 1 ? userText : undefined} value={userText.userText}
                    onChange={onChangeText}></textarea>

                <h1 className="text-primary font-bold mb-4 text-xl">{screen === 0 ? "Select language:" : "Your translation:"}</h1>

                {screen === 0 && <div className="flex flex-col gap-4 mb-4 text-text items-start w-fit mx-auto">
                    <label className="font-semibold flex items-center gap-2">
                        <input type="radio" name="language" value="Spanish" onChange={onChangeLanguage}/>
                        Spanish
                        <img src={spain} alt="icon of spain" className="w-5 shadow-lg/50 shadow-black"/>
                    </label>
                    <label className="font-semibold flex items-center gap-2">
                        <input type="radio" name="language" value="French" onChange={onChangeLanguage}/>
                        French
                        <img src={france} alt="icon of spain" className="w-5 shadow-lg/50 shadow-black"/>
                    </label>
                    <label className="font-semibold flex items-center gap-2">
                        <input type="radio" name="language" value="Japanese" onChange={onChangeLanguage}/>
                        Japanese
                        <img src={japan} alt="icon of spain" className="w-5 shadow-lg/50 shadow-black"/>
                    </label>
                </div>}
                {screen === 1 && <textarea
                    className="w-full h-40 p-4 text-text font-bold bg-area rounded-lg mb-4 resize-none
                         placeholder-text placeholder:font-bold placeholder:opacity-50"
                    name="message" disabled={true}>Hi</textarea>}

                <button
                    className="bg-secondary w-full text-white px-8 py-3 rounded-lg hover:bg-primary transition font-semibold cursor-pointer"
                    onClick={handleSubmit}>
                    {screen === 0 ? "Translate" : "Start Over"}
                </button>
            </section>
        </main>
    )
}

export default App

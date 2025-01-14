import { createContext } from 'react'
import { useState } from 'react'

const AppContext = createContext({
    lang: 'no',
    switchLang: () => {},
})

export function Provider({ children }: { children: React.ReactNode }) {
    const { lang, switchLang } = LangSlice()

    return (
        <AppContext.Provider value={{ lang, switchLang }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext

export const LANGUAGES = {
    NO: 'no',
    EN: 'en',
}

export function LangSlice() {
    const [lang, setLang] = useState(LANGUAGES.NO)

    function switchLang() {
        setLang((prev) => (prev === LANGUAGES.NO ? LANGUAGES.EN : LANGUAGES.NO))
    }

    return { lang, switchLang }
}

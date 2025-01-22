import { createContext, useEffect } from 'react'
import { useState } from 'react'

const AppContext = createContext({
  login: false,
  setLoggedIn: (() => {}) as Function
})

export function Provider({ children }: { children: React.ReactNode }) {
    const [login, setLoggedIn] = useState(false);

    useEffect(() => {
      console.log("Waiting 10s then logging in.")
      setTimeout(() => {
        console.log("Automatically logged in after 10s")
        setLoggedIn(true)
      }, 10000);
  }, []);

  console.log(login)
  return (
    <>
      <AppContext.Provider value={{ login, setLoggedIn }}>
        {children}
      </AppContext.Provider>
    </>
  );
}

export default AppContext

export const LANGUAGES = {
    NO: 'en',
    EN: 'en',
}

export function LangSlice() {
    const [lang, setLang] = useState(LANGUAGES.NO)

    function switchLang() {
        setLang((prev) => (prev === LANGUAGES.NO ? LANGUAGES.EN : LANGUAGES.NO))
    }

    return { lang, switchLang }
}

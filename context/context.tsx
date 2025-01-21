import { createContext, useEffect } from 'react'
import { useState } from 'react'

const AppContext = createContext({})

export function Provider({ children }: { children: React.ReactNode }) {
    const [isLogged, setIsLogged] = useState(false);
  console.log("test");
  useEffect(() => {
    fetch("http://10.0.2.2:3000/api/auth")
      .then((response) => response.json())
      .then((data) => {
        console.log("this is data", data);
        setIsLogged(data);
      });
  }, []);

  return (
    <>
      <AppContext.Provider value={{ isLogged, setIsLogged }}>
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

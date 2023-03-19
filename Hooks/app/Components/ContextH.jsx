import React from 'react';
/*

1. we need to define a context and that context will be used in the child components
2. top down or bottom up (will do this)
3. Parent App where you will define the context provide 
4. Child component will consume those context using and display those values  
*/

const LocaleContext = React.createContext("English");

function En(){
    const { locale, setLocale } = React.useContext(LocaleContext);
    return(
        <React.Fragment>
            <p>{locale}</p>
            <button onClick={() => setLocale("Spanish")}>Toggle to spanish</button>
        </React.Fragment>
    )
}

function Sp(){
    const { locale, setLocale } = React.useContext(LocaleContext);
    return(
        <React.Fragment>
            <p>{locale}</p>
            <button onClick={() => setLocale("English")}>Toggle to english</button>
        </React.Fragment>
    )
}

export function Home(){
    const [locale, setLocale] = React.useState("English");

    const value = React.useMemo(() => ({
        locale,
        setLocale
    }),[locale])

    return(
        <React.Fragment>
            <LocaleContext.Provider value ={value}>
                {locale === 'English' ? <En/> : <Sp/> }
            </LocaleContext.Provider>
        </React.Fragment>
    )
}


/*
- we need to create two componets which is fibo and prime calculation
- we need to main components that 
*/
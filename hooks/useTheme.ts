import {useLocalStorage} from "usehooks-ts";
import {useEffect} from "react";


const THEMES = {
    dark: 'dark',
    light: 'light',
}
export default () => {
    const [currentTheme, setCurrentTheme] = useLocalStorage("theme", 
        window.matchMedia('(prefers-color-scheme: dark)').matches ? THEMES.dark : THEMES.light);
    
    useEffect(() => {
        if(currentTheme == THEMES.dark) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [currentTheme])
    
    const setDarkMode = () => {
        setCurrentTheme(THEMES.dark)
    }
    const setLightMode = () => {
        setCurrentTheme(THEMES.light)
    }

    const toggleTheme = () => {
        setCurrentTheme((theme) => theme == THEMES.dark ? THEMES.light : THEMES.dark)
    }
    
    return {
        currentTheme,
        setDarkMode,
        setLightMode,
        toggleTheme
    }
}
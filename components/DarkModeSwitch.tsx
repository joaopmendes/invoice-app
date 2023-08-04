'use client'
import Image from "next/image";
import useTheme, {THEMES} from "@/hooks/useTheme";

export const DarkModeSwitch = () => {
    const {currentTheme, setDarkMode, setLightMode} = useTheme();
    return (
        <div className={'h-[20px] w-[20px] relative'}>
            {
                currentTheme == THEMES.dark ?
                    <Image src={'/assets/icon-sun.svg'} alt={'sun'} width="20" height="20" onClick={setLightMode} className={'cursor-pointer'}/>
                    : <Image src={'/assets/icon-moon.svg'} alt={'sun'} width="20" height="20" onClick={setDarkMode} className={'cursor-pointer'}/>
            } 
        </div>
    );
};
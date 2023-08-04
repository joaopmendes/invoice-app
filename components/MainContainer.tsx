import {PropsWithChildren} from "react";

const MainContainer: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <main className='main-container'>
            <div className="inner-container ">
                {children}
            </div>
        </main>
    );
};


export default MainContainer;
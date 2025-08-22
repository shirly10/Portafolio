import { createContext, useEffect, useRef } from 'react';
import Header from '../Components/Header.jsx';

export const AnimationContext = createContext();

function AnimationProvider({children}) {

    const refMain = useRef();

    const showHandler = () => {
        refMain.current.classList.add('mostrar-vista');
        setTimeout(() => {
            refMain.current.classList.remove('mostrar-vista');
        }, 1000);
    }

    const hideHandler = () => {
        refMain.current.classList.add("cerrar-vista");
        setTimeout(() => {
            refMain.current.classList.remove("cerrar-vista");
        }, 500);
    }

    useEffect(() => {
        showHandler();
    }, []);

    return (
        <AnimationContext.Provider value={{showHandler, hideHandler}}>
            <Header />
            <main className='Main mostrar-vista' ref={refMain}> 
                {children}
            </main>
        </AnimationContext.Provider>
    )
}

export default AnimationProvider;
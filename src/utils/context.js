
import { createContext } from "react";

const Context = createContext();

const AppContext = ({ children }) => {
    return (
        <Context.Provider >
            {children}
        </Context.Provider>
    )
}

Context.displayName = "Context";

export default AppContext;
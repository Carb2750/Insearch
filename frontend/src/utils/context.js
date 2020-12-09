import { createContext, useContext, useReducer } from 'react';

let dispatcvIsConfigured = false;

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => {
    const reducerValue = useReducer(reducer, initialState);
    if(!dispatcvIsConfigured) {
        dispatcvIsConfigured = true;
    }

    return (
        <StateContext.Provider value={reducerValue}>
            {children}
        </StateContext.Provider>
    );
}

export const useStateContext = () => useContext(StateContext);
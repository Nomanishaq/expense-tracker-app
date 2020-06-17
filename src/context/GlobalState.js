import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

const initialState = {
    transations: [
  { id: 1, text: 'Flower', amount: -20 },
  { id: 2, text: 'Salary', amount: 400 },
  { id: 3, text: 'Book', amount: -10 },
  { id: 4, text: 'Camera', amount: 150 }
]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children })=>{
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return(<GlobalContext.Provider value={{
          transations: state.transations
      }}>
          {children}
      </GlobalContext.Provider>
  )
}
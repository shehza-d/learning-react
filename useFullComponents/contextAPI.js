import { createContext, useReducer } from 'react'
import { reducer } from './Reducer_file_path';
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./context/Context_file_path"

//wrapper
//   <React.StrictMode>
//     <ContextProvider>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </ContextProvider>
//   </React.StrictMode>
//wrapper



//this global context is object{} that contains components
export const GlobalContext = createContext("Initial Value");

let data = {
  darkTheme: true,
  user: {},
  isLogin: null,
  baseUrl: (window.location.href.includes('localhost'))
    ?
    `http://localhost:5001/api/v1` : `/api/v1`
}

export default function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, data)
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  )
}
import {createContext,useReducer} from 'react'
export const themecontext=createContext();
const initialstate = {
    darkmode: localStorage.getItem('darkmode') === 'true' ? true : false, // Check localStorage
  };
  
  // Reducer function to toggle dark mode
  const themereducer = (state, action) => {
    switch (action.type) {
      case 'toggle':
        const newDarkmode = !state.darkmode;
        localStorage.setItem('darkmode', newDarkmode); // Save dark mode preference
        return { darkmode: newDarkmode };
      default:
        return state;
    }
  };

export const Themeprovider=(props)=>{
    const [state,dispatch]=useReducer(themereducer,initialstate);
    return (
        <themecontext.Provider value={{state,dispatch}}>{props.children}</themecontext.Provider>
    )

}
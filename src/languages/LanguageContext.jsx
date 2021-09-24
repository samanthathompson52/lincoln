import React from "react";
import Dictionary from './Dictionary';

const LanguageContext = React.createContext({
    isSpanish: false,
    setSpanish: () => {},
    dict: Dictionary.en
});

export default LanguageContext;
import React from "react";
import Dictionary from './Dictionary';

const LanguageContext = React.createContext({
    dict: Dictionary.en
});

export default LanguageContext;
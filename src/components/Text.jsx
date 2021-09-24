import { useContext } from 'react';
import LanguageContext from '../languages/LanguageContext';

const Text = ({id}) => {
    const lang = useContext(LanguageContext);
    if (id in lang.dict) {
        return lang.dict[id];
    } else {
        return "";
    }
}

export default Text;
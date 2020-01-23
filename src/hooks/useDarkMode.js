import React, { useEffect } from "react";
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
    const [storedValue, setValue] = useLocalStorage('enableDarkMode');

    useEffect(() => {
        if (storedValue === true) {
            document.querySelector('body').classList.add('dark-mode');
        } else {
            document.querySelector('body').classList.remove('dark-mode');
        }
    },[storedValue]);

    return [storedValue, setValue];
}

export default useDarkMode;
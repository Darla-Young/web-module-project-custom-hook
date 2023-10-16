// * [x] Build a hook that ONLY setups a boolean state value. This value governs if dark mode is on or off.
// * [x] Return the slice of state created and the state modification function.
// * [x] Import useLocalStorage into the useDarkMode hook.

import * as useLocalStorage from './useLocalStorage';

const useDarkMode = (key, value) => {
    const [darkMode, setDarkMode] = useLocalStorage(key, value)
    return [darkMode, setDarkMode]
};
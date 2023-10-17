// * [?] Build a hook called (nobody knows) that takes in a key value and an initialValue.
// * [?] Use the code from GP to build the the hook. (wtf is GP?)
import { useState } from 'react'

const useLocalStorage = (key, initialValue) => {
    const [state, setState] = useState(() => {
        if (localStorage.getItem(key)) {
            return JSON.parse(localStorage.getItem(key))
        }
        localStorage.setItem(key, JSON.stringify(initialValue))
        return initialValue
    })

    const setStoredState = (value) => {
        localStorage.setItem(key, JSON.stringify(value))
        setState(value)
    }

    return([state, setStoredState])
};

export default useLocalStorage
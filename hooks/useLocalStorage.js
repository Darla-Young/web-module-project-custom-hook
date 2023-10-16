// * [?] Build a hook called (nobody knows) that takes in a key value and an initialValue.
// * [?] Use the code from GP to build the the hook. (wtf is GP?)

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    });

    const setValue = value => {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    };
    
    return [storedValue, setValue];
};
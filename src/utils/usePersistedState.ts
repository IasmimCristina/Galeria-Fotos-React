import { useState, useEffect } from "react";

// Hook relacionado ao salvamento no Local Storage.
function usePersistedState(key: string, initialState: any) {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key);

    if (storageValue) return JSON.parse(storageValue);
    else return initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]); // Sempre que o state sofrer alguma alteração.

  return [state, setState];
}

export default usePersistedState;

import { useState, useEffect, Dispatch, SetStateAction } from "react";

// Tipificação do theme e setThem no App.tsx:
type Response<T> = [T, Dispatch<SetStateAction<T>>];

// Hook relacionado ao salvamento no Local Storage.
function usePersistedState<T>(key: string, initialState: T): Response<T> {
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

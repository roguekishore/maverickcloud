import { createContext, useContext } from 'react';
export const EdCtx = createContext(null);
export const useEd = () => useContext(EdCtx);

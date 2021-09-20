import { createContext, useContext } from 'react';

export type ContextProps = {
  isPopulated: string | null;
  handleOnSet: () => void
};

const ListContext = createContext({} as ContextProps);

export const ListProvider: React.FC = ({ children }) => {
  const handleOnSet = () => {
    localStorage.removeItem("populated")
    localStorage.setItem("populated", 'true')
  }

  const isPopulated = localStorage.getItem("populated")

  return (
    <ListContext.Provider value={{ isPopulated, handleOnSet }}>
      {children}
    </ListContext.Provider>
  );
};

export const useList = () => {
  const useListContext = useContext(ListContext);

  return useListContext;
};
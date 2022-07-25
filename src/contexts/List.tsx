import { createContext, ReactNode, useContext } from "react";

export type ContextProps = {
  isPopulated: string | null;
  handleOnSet: () => void;
};

interface ListContextProps {
  children: ReactNode;
}

const ListContext = createContext({} as ContextProps);

export const ListProvider = ({ children }: ListContextProps) => {
  const handleOnSet = () => {
    localStorage.removeItem("populated");
    localStorage.setItem("populated", "true");
  };

  const isPopulated = localStorage.getItem("populated");

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

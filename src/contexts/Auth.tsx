import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface ContextProps {
  isAuth: boolean;
  isLoading: boolean;
  handleLogin: () => void;
  handleLogout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<ContextProps>({} as ContextProps);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  const handleLogin = async () => {
    setIsAuth(true);
  };

  const handleLogout = async () => {
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuth, isLoading, handleLogin, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const useAuthContext = useContext(AuthContext);

  return useAuthContext;
};

import React, { createContext, useContext, useState, ReactNode, useEffect, Dispatch, SetStateAction } from "react";

interface LoadingContextType {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const LoadingContext = createContext<LoadingContextType>({
  loading: false,
  setLoading: () => {}
});

export const useLoading = (): LoadingContextType => useContext(LoadingContext);

interface LoadingProviderProps {
  children: ReactNode;
}

export const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(() => {
    const storedLoading = sessionStorage.getItem("loading");
    return storedLoading ? JSON.parse(storedLoading) : false;
  });

  useEffect(() => {
    const storedLoading = sessionStorage.getItem("loading");
    if (storedLoading !== null) {
      setLoading(JSON.parse(storedLoading));
    }
  }, []);

  const setLoadingState: LoadingContextType["setLoading"] = (state) => {
    setLoading(state);
    sessionStorage.setItem("loading", JSON.stringify(state));
  };

  return (
    <LoadingContext.Provider value={{ loading, setLoading: setLoadingState }}>
      {children}
    </LoadingContext.Provider>
  );
};

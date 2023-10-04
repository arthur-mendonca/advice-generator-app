import { createContext, useState } from "react";
import {
  IAdviceContext,
  IAdviceContextProvider,
  ISlipAdvice,
} from "./interfaces";
import { api } from "../services";

export const AdviceContext = createContext({} as IAdviceContext);

export const AdviceProvider: React.FC<IAdviceContextProvider> = ({
  children,
}) => {
  const [advice, setAdvice] = useState("");
  const [adviceID, setAdviceID] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const getRandomAdvice = async (): Promise<ISlipAdvice | undefined> => {
    try {
      const response = await api.get("");
      setAdviceID(response.data.slip.id);
      setAdvice(response.data.slip.advice);
      setError(null);
      return response.data;
    } catch (error) {
      setError("Some error ocurred. Try refreshing the page");
      console.log(error);
    }
  };

  return (
    <AdviceContext.Provider
      value={{ advice, getRandomAdvice, adviceID, error }}
    >
      {children}
    </AdviceContext.Provider>
  );
};

export interface IAdviceContext {
  advice: string;
  getRandomAdvice: () => Promise<ISlipAdvice | undefined>;
  adviceID: number | null;
  error: string | null;
}

export interface IAdviceContextProvider {
  children: React.ReactNode;
}

interface Advice {
  id: number;
  advice: string;
}

export interface ISlipAdvice {
  slip: Advice;
}

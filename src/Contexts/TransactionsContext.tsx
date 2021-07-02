import { createContext, ReactNode, useEffect, useState } from "react";

type TransactionType = {
  id: number;
  title: string;
  amount: number;
  category: string;
  type: string;
  createdAt: number;
};

type TransactionsContextData = {
  transactions: TransactionType[];
  storeTransaction: (props: TransactionType) => void;
};

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionsContextData);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionType[]>([]);

  async function storeTransaction({
    id,
    title,
    amount,
    category,
    type,
    createdAt,
  }: TransactionType) {
    const transaction = {
      id,
      title,
      amount,
      category,
      type,
      createdAt,
    };

    setTransactions([...transactions, transaction]);
  }

  useEffect(() => {
    setTransactions(JSON.parse(localStorage.getItem("transactions") || "[]"));
  }, []);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  return (
    <TransactionsContext.Provider value={{ transactions, storeTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}

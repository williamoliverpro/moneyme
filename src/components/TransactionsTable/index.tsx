import { useContext } from "react";
import { useMediaQuery } from "react-responsive";

import { Container } from "./styles";
import { CardList } from "../CardList";
import { TransactionsContext } from "../../Contexts/TransactionsContext";

export function TransactionsTable() {
  const { transactions } = useContext(TransactionsContext);

  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });

  return (
    <Container>
      {!isTabletOrMobileDevice && transactions.length !== 0 ? (
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Valor</th>
              <th>Categoria</th>
              <th>Data</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>
                  {new Intl.DateTimeFormat("pt-BR").format(
                    transaction.createdAt
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        transactions.map((transaction) => (
          <CardList
            key={transaction.id}
            title={transaction.title}
            type={transaction.type}
            amount={transaction.amount}
            category={transaction.category}
            createdAt={transaction.createdAt}
          />
        ))
      )}
    </Container>
  );
}

import { Container } from "./styles";

interface CardListProps {
  title: string;
  type: string;
  amount: number;
  category: string;
  createdAt: number;
}

export function CardList({
  title,
  type,
  amount,
  category,
  createdAt,
}: CardListProps) {
  return (
    <Container type={type}>
      <h1>{title}</h1>
      <p>
        {new Intl.NumberFormat("pt-br", {
          style: "currency",
          currency: "BRL",
        }).format(amount)}
      </p>
      <div>
        <p>{category}</p>
        <p>{new Intl.DateTimeFormat("pt-br").format(new Date(createdAt))}</p>
      </div>
    </Container>
  );
}

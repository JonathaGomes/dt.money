import { Container, Content } from "./styles";
import logoImg from "../../assets/logo.svg";

interface HeaderProps {
	onOpenNewTransactionModalOpen: () => void;
}

export function Header({ onOpenNewTransactionModalOpen }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewTransactionModalOpen}>Nova Transação</button>
      </Content>
    </Container>
  );
}

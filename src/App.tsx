import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransaction } from "./components/NewTransactionModal";
import { GlobalStyles } from "./styles/globalStyles";

Modal.setAppElement("#root");
export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModalOpen() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModalOpen() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <>
      <Header
        onOpenNewTransactionModalOpen={handleOpenNewTransactionModalOpen}
      />
      <Dashboard />
      <NewTransaction
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModalOpen}
      />
      <GlobalStyles />
    </>
  );
}

import type { NextPage } from "next";

type HeaderProps = {
  setAccessToken(s: string): void;
  sair(): void;
  showModal(): void;
};

export const Header: NextPage<HeaderProps> = ({ setAccessToken, sair, showModal }) => {
  const mobile = window.innerWidth < 954;

  const userName = localStorage.getItem("name");
  const firstName = userName?.split(" ")[0] || "";

  const handleSair = () => {
    localStorage.clear();
    setAccessToken("");
  };

  return (
    <div className="container-header">
      <img src="/logo.svg" alt="Logo Fiap" className="logo" />
      <button onClick={showModal}>
        <span>+</span>Adicionar Tarefa
      </button>
      <div className="mobile">
        <span>Olá, {firstName}</span>
        <img src="/exit-mobile.svg" alt="Sair" onClick={handleSair} />
      </div>
      <div className="desktop">
        <span>Olá, {firstName}</span>
        <img src="/exit-desktop.svg" alt="Sair" onClick={handleSair} />
      </div>
    </div>
  );
};
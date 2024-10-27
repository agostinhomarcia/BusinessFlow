import styled from 'styled-components';

export const Container = styled.header`
  z-index: 99;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0a0a23;
  padding: 15px 30px;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);

  img {
    width: 50px;
    margin-right: 10px;
  }

  /* Oculta o menu padrão em telas pequenas */
  @media (max-width: 768px) {
    padding: 15px 20px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  h2 {
    color: #ffffff;
    font-size: 22px;
    font-weight: bold;
    margin: 0;
  }
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 30px;

  /* Estilos para quando o menu hamburguer está ativo em telas pequenas */
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 70px;
    right: 20px;
    background-color: #0a0a23;
    padding: 10px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    width: auto;
  }
`;

export const Li = styled.li`
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;

  a {
    text-decoration: none;
    color: #ffffff;
    transition: color 0.3s;

    &:hover {
      color: #007bff;
      border-bottom: 2px solid #007bff;
      text-decoration: none;
    }
  }

  /* Reduz o tamanho da fonte em telas pequenas */
  @media (max-width: 768px) {
    font-size: 16px;
    margin: 8px 0;
  }
`;

export const HamburgerIcon = styled.div`
  display: none;
  font-size: 28px;
  color: #ffffff;
  cursor: pointer;

  /* Exibe o ícone apenas em telas menores */
  @media (max-width: 768px) {
    display: block;
  }
`;

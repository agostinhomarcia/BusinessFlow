import styled from 'styled-components';

export const Container = styled.header`
  z-index: 99;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0a0a23; /* Fundo escuro, mas com tom moderno */
  padding: 15px 30px;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);

  img {
    width: 50px;
    margin-right: 10px;
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
`;

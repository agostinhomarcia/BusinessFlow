import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { Container, Menu, Li, LogoContainer } from "./styles";

function Header() {
  return (
    <Container>
      <LogoContainer>
        <Link to="/Home">
          <img src={Logo} alt="logo-connect" />
        </Link>
        <h2>BusinessFlow</h2>
      </LogoContainer>
      <Menu>
        <Li>
          <Link to="/Home">Home</Link>
        </Li>
        <Li>
          <Link to="/RegisterPartners">Cadastrar Parceiros</Link>
        </Li>
        <Li>
          <Link to="/ViewPartners">Ver Parceiros</Link>
        </Li>
        <Li>
          <Link to="/RegisterCompanies">Cadastrar Empresas</Link>
        </Li>
        <Li>
          <Link to="/ViewCompanies">Ver Empresas</Link>
        </Li>
        <Li>
          <Link to="/Login">Sair</Link>
        </Li>
      </Menu>
    </Container>
  );
}

export default Header;

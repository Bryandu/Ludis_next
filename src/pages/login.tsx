import ImgLogin from '../assets/img/basquete.jpg';
import styled from 'styled-components';

export const SectionLogin = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${ImgLogin});
  background-position: center;
  background-size: cover;
  article {
    max-width: 330px;
    height: 420px;
    background: #151515;
    border-radius: 5px;
    margin: 0 1rem;
  }
`;

const Login: React.FC = () => {
  return (
    <SectionLogin>
      <article>
        <h1>Conecte</h1>
      </article>
    </SectionLogin>
  );
};

export default Login;

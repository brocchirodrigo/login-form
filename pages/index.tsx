import type { NextPage } from 'next';
import Head from 'next/head';
import { GlobalStyle } from '../styles/GlobalStyles';

const Home: NextPage = () => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Login Form</title>
        <meta name="description" content="Formulário de login" />
      </Head>
      <h1>Hello World!</h1>
    </>
  );
};

export default Home;

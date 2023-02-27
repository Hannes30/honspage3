import Head from "next/head";

const CustomHead = () => {
  return (
    <Head>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
      />
      <link rel="icon" href="/images/logo.png" />
    </Head>
  );
};

export default CustomHead;

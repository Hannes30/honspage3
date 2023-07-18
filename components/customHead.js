import Head from "next/head";
import dotenv from "dotenv";
dotenv.config();

const CustomHead = () => {
  return (
    <Head>
      <link rel="icon" href="/images/logo.png" />
      <title>Hannes Scheibelauer</title>
      <meta
        name="description"
        content="Portfolio Seite von Hannes Scheibelauer, ein Web Developer aus Niederösterreich"
      ></meta>
      <meta
        name="keywords"
        content="Hannes Scheibelauer,Scheibelauer,Website Erstellen,Web Developer,"
      ></meta>
      <meta name="robots" content="index, follow"></meta>
      <meta
        property="og:title"
        content="Portfolio Website von Hannes Scheibelauer"
      ></meta>
      <meta
        property="og:description"
        content="Hannes Scheibelauer ist ein Web Developer aus Niederösterreich. Er erstellt Websites und Web Apps für Firmen und Privatpersonen."
      ></meta>
      <meta
        property="og:image"
        content="https://hannes-scheibelauer.com/images/logo.png"
      ></meta>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`}
      ></script>
      <script>
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${process.env.GA_TRACKING_ID}');
    `}
      </script>
    </Head>
  );
};

export default CustomHead;

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Header from './Header'; // Importa el componente Header
import Img1 from '/Pinterest/img/1.png';

const Explorar = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Explorar</title>
        <link rel="stylesheet" href="/Pinterest/css/explorar.css" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Header /> {/* Utiliza el nuevo encabezado Header */}
        
        <div className="h">
          <h1 className="fecha">17 de Septiembre de 2023</h1>
        </div>
        <div className="container">
          <section className="galeria">
            <Image className="one" src={Img1} alt="" />
            <Image className="one" src="/Pinterest/img/2.png" alt="" />
            <Image className="one" src="/Pinterest/img/4.png" alt="" />
            <Image className="one" src="/Pinterest/img/5.png" alt="" />
            <Image className="one" src="/Pinterest/img/6.png" alt="" />
            <Image className="one" src="/Pinterest/img/7.png" alt="" />
          </section>
          <h3 className="compras">Compras Destacadas</h3>
          <Image className="tres" src="/Pinterest/img/8.png" alt="" />
          <Image className="dos" src="/Pinterest/img/9.png" alt="" />
        </div>
      </body>
    </>
  );
};

export default Explorar;

import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <meta name="description" content="Descrição da sua página"/>
        <meta name="keywords" content="palavras-chave, relevantes, para, sua, página"/>
        <meta name="robots" content="index,follow"/>
        <meta name="author" content="Nome do autor ou empresa"/>

        <meta property="og:title" content="Título da sua página"/>
        <meta property="og:description" content="Descrição da sua página"/>
        <meta property="og:image" content="URL da imagem da sua página"/>
        <meta property="og:url" content="URL da sua página"/>
        <meta property="og:site_name" content="Nome do seu site"/>
        <meta property="og:type" content="website"/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="Título da sua página"/>
        <meta name="twitter:description" content="Descrição da sua página"/>
        <meta name="twitter:image" content="URL da imagem da sua página"/>
        <meta name="twitter:site" content="@usuariodotwitter"/>

        <meta name="linkedin:title" content="Título da sua página"/>
        <meta name="linkedin:description" content="Descrição da sua página"/>
        <meta name="linkedin:image" content="URL da imagem da sua página"/>
        <meta name="linkedin:url" content="URL da sua página"/>

        <meta name="pinterest:description" content="Descrição da sua página"/>
        <meta name="pinterest:image" content="URL da imagem da sua página"/>

        <meta name="youtube:title" content="Título da sua página"/>
        <meta name="youtube:description" content="Descrição da sua página"/>
        <meta name="youtube:image" content="URL da imagem da sua página"/>
        <meta name="youtube:url" content="URL da sua página"/>

        <meta property="og:whatsapp:title" content="Título da sua página"/>
        <meta property="og:whatsapp:description" content="Descrição da sua página"/>
        <meta property="og:whatsapp:image" content="URL da imagem da sua página"/>

        <link rel="icon" href="URL do seu favicon"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
// import Footer from './footer'

import Head from 'next/head'
import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <div className="bg-gradient-to-b from-sky-600 to-indigo-700 min-h-screen m-0 p-0">
      <Head>
        <title>Volunstreet</title>
        <meta name="description" content="Volunstreet App" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        />
      </Head>
      <Navbar fixed={true} />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  )
}

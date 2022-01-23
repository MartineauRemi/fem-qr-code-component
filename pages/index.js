import Head from "next/head";
import Card from "../components/Card";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <link rel='icon' type='img/png' size='32x32' href='./favicon-32x32.png' />
        <title>QR Code Component</title>
      </Head>
      <div>
        <main className='w-full h-screen flex justify-center items-center bg-grayishBlue'>
          <Card />
        </main>
        <Footer />
      </div>
    </>
  )
}

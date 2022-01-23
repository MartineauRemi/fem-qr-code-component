import Head from "next/head";
import Card from "../components/Card";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <link rel='icon' type='img/png' size='32x32' href='./favicon-32x32.png' />
        <meta name='description' content="Rémi Martineau's solution to the Frontend-Mentor challenge : QR Code Component. It is built with NextJS and TailwindCSS." />
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

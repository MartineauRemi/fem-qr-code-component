import Card from "../components/Card";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <div>
      <main className='w-full h-screen flex justify-center items-center bg-grayishBlue'>
        <Card />
      </main>
      <Footer />
    </div>
  )
}

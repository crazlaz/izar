import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Book from '../components/Book'
const Home: NextPage = () => {
  return (
    <div className='bg-black'>

<div className='animate-bounce pt-12 flex flex-row'>
  <Image src="/sun.png" width="200" height="200" />
  <Image src="/space.png" width="250" height="250" />
</div>

    <div className="flex flex-col items-center justify-center  bg-black text-white">
      <Head>
        <title>Izar One Year Bash!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center bg-black">
      <h1 className="text-3xl font-bold pb-4 italic text-yellow-300 font-carlos">
         One Year Around The Sun!
          
        </h1>
      
        <h1 className="text-3xl font-bold pb-4 italic font-adc">
        Join us to Celebrate{' '}
          
        </h1>

        <a className="text-blue-600  animate-pulse text-4xl font-adc font-bold pt-3">
            Izar's One Year Around The Sun!
          </a>

          <a className="text-yellow-300  animate-pulse text-1xl font-adc font-bold pt-3">
            No gift necessary, cash and gift cards accepted
          </a>

        <p className="mt-3 text-1xl text-blue pt-6 underline italic text-yellow-300" >
          Oct 8th 4PM
          
        </p>
        <p className="mt-3 text-1xl pt-3 underline-offset-2 italic text-blue-500">
          
          2304 Hunter Davis CT Monroe NC 28110
        </p>

       
      </main>
</div>
<div className='pt-12 flex flex-row'>
  <Image src="/izarr.png" width="250" height="250" />
</div>
<Book />
</div>
  )
}

export default Home

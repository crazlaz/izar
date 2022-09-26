import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Book from '../components/Book'
const Home: NextPage = () => {
  return (
    <div className='bg-black'>

<div className='animate-bounce pt-12'>
  <Image src="/moon.png" width="200" height="200" />
</div>
    <div className="flex flex-col items-center justify-center  bg-black text-white">
      <Head>
        <title>Izar One Year Bash!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center bg-black">
        <h1 className="text-3xl font-bold pb-4">
          We Invite You To Celebrate{' '}
          
        </h1>

        <a className="text-blue-600  animate-pulse text-4xl font-bold pt-3">
            Izar's One Year Birthday!
          </a>

        <p className="mt-3 text-1xl text-blue pt-6 underline" >
          Oct 8th 4PM
          
        </p>
        <p className="mt-3 text-1xl pt-3">
          
          2304 Hunter Davis CT Monroe NC 28110
        </p>
<div className='animate-bounce'>
  <Image src="/star.png" width="200" height="200" />
</div>
       
      </main>
</div>
<Book />
</div>
  )
}

export default Home

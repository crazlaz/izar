import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className='bg-black'>
    <div className="flex flex-col items-center justify-center  bg-black text-white">
      <Head>
        <title>Izar One Year Bash!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center bg-black">
        <h1 className="text-3xl font-bold pb-4 pt-6">
          We Invite You To{' '}
          
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
    <div class="container drop-shadow-xl content-center px-5 py-12 ">
  
  
  
      <div class="container items-center px-5 py-12  bg-backlol lg:px-20">
        <form
          class="mx-auto my-6 mb-4 flex w-full transform flex-col  bg-backlol p-10 px-8 pt-6 transition duration-500 ease-in-out lg:w-1/2 "
          name="contact v2"
          method="post"
          data-netlify="true"
  
          onSubmit="submit"
          data-netlify-honeypot="bot-field"
        >
  
          <input type="hidden" name="form-name" value="contact v2" />
  
          <div hidden>
            <input name="bot-field" />
          </div>
  
  
          <div class="relative pt-4">
            <label
              for="name"
              minlength="3" 
              maxlength="64"
              class="text-blueGray-500 text-base font-black leading-7"
            >
             First Name:
              <br />
              <input
                placeholder="Full Name"
                type="full-name"
                id="fullName"
                minlength="3" 
                maxlength="64"
                name="fullName"
                class="focus:border-blueGray-500 focus:shadow-outline mt-2 mr-4 w-full transform rounded-lg bg-wood px-4 py-2 text-base text-black ring-offset-2 ring-offset-current transition duration-500 ease-in-out focus:bg-wood focus:outline-none focus:ring-2"
              />
            </label>
          </div>
  
          <div class="relative pt-4">
            <label
              htmlFor="name"
              class=" text-blueGray-500 text-base font-black leading-7"
            >
              Phone:
            </label>
            <input
              type="number"
              minlength="3" 
              maxlength="64"
              id="number"
              name="number"
              placeholder="number"
              class="focus:border-blueGray-500 focus:shadow-outline mt-2 mr-4 w-full transform rounded-lg bg-wood px-4 py-2 text-base text-black ring-offset-2 ring-offset-current transition duration-500 ease-in-out focus:bg-wood focus:outline-none focus:ring-2"
            />
          </div>
  
          <div class="relative pt-4">
            <label
              htmlFor="e-mail"
              class="text-blueGray-500 text-base font-black leading-7"
            >
              E-Mail:
            </label>
            <input
              type="text"
              id="e-mail"
              minlength="3"
              maxlength="64"
              name="e-mail"
              placeholder="E-Mail"
              class="font-blackfocus:border-blueGray-500 focus:shadow-outline mt-2 mr-4 w-full transform rounded-lg bg-wood px-4 py-2 text-base text-black ring-offset-2 ring-offset-current transition duration-500 ease-in-out  focus:outline-none focus:ring-2"
            />
          </div>
  
          <div class="relative pt-4">
            <label
              htmlFor="name"
              class="text-blueGray-500 text-base font-black leading-7"
            >
              Date:
            </label>
            <input
              type="date"
              id="date"
              name="date"
              placeholder="name"
              class="focus:border-blueGray-500 focus:shadow-outline mt-2 mr-4 w-full transform rounded-lg bg-wood px-4 py-2 text-base text-black ring-offset-2 ring-offset-current transition duration-500 ease-in-out focus:bg-wood focus:outline-none focus:ring-2"
            />
          </div>

          <div class="relative pt-4">
            <label
              htmlFor="time"
              class="text-blueGray-500 text-base font-black leading-7"
            >
              Time:
            </label>
            <input
              type="time"
              id="time"
              name="time"
              placeholder="time"
              class="focus:border-blueGray-500 focus:shadow-outline mt-2 mr-4 w-full transform rounded-lg bg-wood px-4 py-2 text-base text-black ring-offset-2 ring-offset-current transition duration-500 ease-in-out focus:bg-wood focus:outline-none focus:ring-2"
            />
          </div>



          <div class="inline-block relative pt-6 pb-6 w-64">
          <label class='font-black' htmlFor="lashes">Lash Services</label>
          <select type="lashes" htmlFor="lashes" id="lashes" name="lashes" class="block appearance-none w-full bg-wood border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
    <option type="lashes" htmlFor="lashes" id="lashes" name="lashes">Not this time!</option>
    <option type="lashes" htmlFor="lashes" id="lashes" name="lashes">Classic Set - $120</option> 
    <option type="lashes" htmlFor="lashes" id="lashes" name="lashes">Hybrid Set - $135</option>
    <option type="lashes" htmlFor="lashes" id="lashes" name="lashes">Volume Set - $145</option>
    <option type="lashes" htmlFor="lashes" id="lashes" name="lashes">Fill In - $60 two weeks</option>
    <option type="lashes" htmlFor="lashes" id="lashes" name="lashes">Fill In - $70 three weeks</option>
    <option type="lashes" htmlFor="lashes" id="lashes" name="lashes">Lash Lift - $80</option> 
  </select>
  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
  </div>
</div>






          <div class="inline-block relative pt-6 pb-6 w-64">
          <label class='font-black' type="waxing" htmlFor="waxing" id="waxing" name="waxing">Waxing Services</label>
          <select type="waxing" htmlFor="waxing" id="waxing" name="waxing" class="block appearance-none w-full bg-wood border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
    <option type="waxing" htmlFor="waxing" id="waxing" name="waxing">Not this time!</option>
    <option type="waxing" htmlFor="waxing" id="waxing" name="waxing">Bikini Wax - $45</option>
    <option type="waxing" htmlFor="waxing" id="waxing" name="waxing">Brazilian Wax - $65</option> 
  </select>
  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
  </div>
</div>




<div class="inline-block relative pt-6 pb-6 w-64">
          <label class='font-black' htmlFor="extra">Extras</label>
          <select type="extra" htmlFor="extra" id="extra" name="extra" class="block appearance-none w-full bg-wood border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
    <option type="extra" htmlFor="extra" id="extra" name="extra">Not this time!</option>
    <option type="extra" htmlFor="extra" id="extra" name="extra">Colors $10</option> 
    <option type="extra" htmlFor="extra" id="extra" name="extra">Wispy $15</option>
    <option type="extra" htmlFor="extra" id="extra" name="extra">Lash Removal $20</option>
    <option type="extra" htmlFor="extra" id="extra" name="extra">Lash Lift Tint $10</option>
  </select>
  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
  </div>
</div>










  

  <div>
        <textarea
          name="comments"
          class="text-blueGray-500 focus:shadow-outline apearance-none autoexpand mt-2 h-32 w-full transform rounded-lg border bg-wood px-4 py-2 text-base ring-offset-2 ring-offset-current transition duration-500 ease-in-out focus:border-blue-500 focus:outline-none focus:ring-2"
          id="description"
        
          maxlength="2000"
          type="text"
          placeholder="Message..."
          required=""
        ></textarea>
      </div>      


      
      <div class="mb-4 flex w-full items-center pt-4">
        <button
        alert-message="Message"
          type="submit"
          class="focus:shadow-outline w-full transform rounded-md border-indigo-600 bg-wood py-3 text-base text-black ring-offset-2 ring-offset-current transition duration-500 ease-in-out hover:bg-blue-800 focus:outline-none focus:ring-2 "
        >
          {' '}
          Confirm Appointment!
        </button>

</div>
<div>
<div className="text-sm">
   <b> please note:</b> by confirming you agree to <a href="/terms"  class="underline">terms and conditions.</a>
  </div>
</div>

</form>
<div className="text-center">

</div>
</div>
</div>
)

    </div>
  )
}

export default Home

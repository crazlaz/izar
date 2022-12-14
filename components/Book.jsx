  export default function Example() {
    return (
      <div class="container drop-shadow-xl content-center px-5 py-12 bg-black">
  
  
  
      <div class="container items-center px-5 py-12  bg-backlol lg:px-20">
      
        <form
          class="mx-auto my-6 mb-4 flex w-full transform flex-col  p-10 px-8 pt-6 transition duration-500 ease-in-out lg:w-1/2 "
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
          <div className="pt-12">
<a className="text-yellow-300 font-bold text-2xl pb-12 font-carlos">Will you be joining Izar's space adventure?</a>
</div>
          <div class="relative pt-4">
            <label
              for="name"
              minlength="3" 
              maxlength="64"
              class="text-blueGray-500 text-base font-black leading-7"
            >
            Name:
              <br />
              <input
                placeholder="Name"
                type="full-name"
                id="fullName"
                minlength="3" 
                maxlength="64"
                name="fullName"
                class="focus:border-blueGray-500 focus:shadow-outline mt-2 mr-4 w-full transform rounded-lg bg-wood px-4 py-2 text-base text-black ring-offset-2 ring-offset-current transition duration-500 ease-in-out focus:bg-wood focus:outline-none focus:ring-2"
              />
            </label>
          </div>

          <div class="inline-block relative pt-6 ">
          <label class='text-white' type="waxing" htmlFor="waxing" id="waxing" name="waxing">Number of Guest</label>
          <select type="waxing" htmlFor="waxing" id="waxing" name="waxing" class="block appearance-none w-full bg-wood border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
    <option type="waxing" htmlFor="waxing" id="waxing" name="waxing">1</option>
    <option type="waxing" htmlFor="waxing" id="waxing" name="waxing">2+</option>
    <option type="waxing" htmlFor="waxing" id="waxing" name="waxing">4+</option> 
  </select>
  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
  </div>
</div>
  

      
      <div class="flex items-center mb-4 pt-12">
    <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes! Count me in!</label>
    </div>
<div class="flex items-center">
    <input checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">No, but have a blast!</label>
</div>
<div class="flex items-center">
    <input checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 pt-3 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Maybe! See you at blastoff!</label>
</div>

      
      <div class="mb-4 flex w-full items-center pt-4">
        <button
        alert-message="Message"
          type="submit"
          class=" w-full transform rounded-md bg-white py-3 text-base text-black ring-offset-2 ring-offset-current transition duration-500 ease-in-out hover:bg-blue-800 focus:outline-none focus:ring-2 "
        >
          {' '}
          1 2 3...Blast Off!
        </button>

</div>
</form>
<div class="text-center">

</div>
</div>
</div>
)
}
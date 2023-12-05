'use client'

function ContactForm() {
  return (
        <div className="py-8 lg:py-16 p-5   w-full">
      <form action="#" className="space-y-8">
          <div>
       

              <label for="email" className="block mb-2 text-sm font-medium text-black ">Your Email *</label>
              <input type="email" id="email" className="block p-3 w-full text-sm text-black  border border-gray-300  " required/>
          </div>
          <div>
              <label for="Name" className="block mb-2 text-sm font-medium text-black">Nane *</label>
              <input type="text" id="Name" className="block p-3 w-full text-sm text-black  border border-gray-300  "  required/>
          </div>
          <div class="sm:col-span-2 mb-5">
              <label for="message" className="block mb-2 text-sm font-medium ttext-black"> Your Message *</label>
              <textarea id="message" rows="6" className="block p-3 w-full text-sm text-black  border border-gray-300  " ></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white  bg-black sm:w-fit hover:bg-primary-800 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      </form>
        </div>
  )
}

export default ContactForm
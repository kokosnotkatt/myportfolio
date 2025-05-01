import React from 'react'

const socialLinks = [
  {
    href: 'https://github.com/kokosnotkatt',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48603 2 2 6.48604 2 12C2 17.514 6.48603 22 12 22C17.514 22 22 17.514 22 12C22 6.48604 17.514 2 12 2ZM12 3.5C16.7033 3.5 20.5 7.2967 20.5 12C20.5 15.8327 17.9785 19.0613 14.5 20.126V17.5684C14.5 16.6133 13.9497 15.7943 13.1543 15.3867C13.9276 15.2388 14.6457 14.9454 15.249 14.5309C15.8522 14.1165 16.3232 13.5929 16.6228 13.0037C16.9224 12.4145 17.0421 11.7765 16.9718 11.1429C16.9015 10.5093 16.6434 9.89818 16.2188 9.36035C16.4405 8.67771 16.6883 7.48034 16.0996 6.53809C14.9647 6.53809 14.2323 7.31604 13.8828 7.7998C13.2853 7.60352 12.6459 7.5017 12 7.5C11.3537 7.50057 10.7136 7.60139 10.1152 7.79688C9.76487 7.31289 9.03311 6.53809 7.90039 6.53809C7.22486 7.61941 7.64246 8.78228 7.86621 9.25684C7.41288 9.79235 7.12862 10.4078 7.03781 11.0505C6.94699 11.6931 7.05233 12.3438 7.34478 12.9468C7.63723 13.5498 8.10809 14.087 8.71698 14.5124C9.32587 14.9379 10.0546 15.2389 10.8408 15.3896C10.1877 15.7262 9.69864 16.337 9.54883 17.0781H8.8916C8.2431 17.0781 7.99112 16.8146 7.64062 16.3701C7.29463 15.9256 6.92259 15.6269 6.47559 15.5029C6.23459 15.4774 6.07223 15.6607 6.28223 15.8232C6.99173 16.3062 7.0407 17.0968 7.3252 17.6143C7.5842 18.0803 8.11484 18.5 8.71484 18.5H9.5V20.126C6.02153 19.0613 3.5 15.8327 3.5 12C3.5 7.2967 7.29669 3.5 12 3.5Z" fill="currentColor" />
    </svg>,
    alt: 'GitHub'
  },
  
];

const EmailSection = () => {
  return (
    <section id="contact" className="section">
      <div className=" container lg:grid lg:grid-cols-2 lg:items-stretch mt-20 mb-20 text-xl">
        <div className=" mb-12 lg:mb-0 lg:flex lg:flex-col">
          <h2 className="headline-2 lg:max-w-[12ch] text-2xl">
          CONTACT ME 
          </h2>
          <p className=" text-zinc-400
           mt-5 mb-8 max-w-[50ch] lg:max-w-[30ch]">
          Reach out today to discuss your project needs and start collaborating on something amazing!
          </p>
          <div className=" flex items-center gap-2">
            {socialLinks.map(({ href, icon},key) => (
              <a
                key={key}
                href={href}
                target="_blank"
                className=" w-12 h-12 grid place-items-center
                ring-inset ring-2 ring-zinc-50/2 rotate-lg transition-[background-color,color]
                hover:bg-zinc-100 hover:text-zinc-900 active:bg-zinc-50/80"
              >
                {icon}
              </a>
            ))}
          </div>

        </div>
        <form 
         action="https://getform.io/f/aejrpvjb"
         method="POST"
         className="xl:pl-10 2xl:pl-20"
         target="_blank"
        >
          <div className="md:grid ">
            <div className="mb-4">
              <label 
                htmlFor="name"
                className="label md:items-center md:grid-cols-2 md:gap-2 block text-zinc-200 text-xl font-normal mb-2"
              >
                Name
              </label>

              <input 
                 type="text" 
                 name="name"
                 id="name"
                 autoComplete="name"
                 required
                 placeholder="Name Lastname"
                 className="text-field text-sm mt-2 block outline-none w-full 
                 px-3 py-3 bg-zinc-700 rounded-xl ring-1 ring-inset ring-transparent
                 transition-shadow hover:ring-zinc-50/5 focus:ring-sky-400 
                 focus:ring-2 text-zinc-400"
              />
            </div>
          </div>
          <div className="md:grid">
            <div className="mb-4">
              <label 
                htmlFor="email"
                className="label md:items-center md:grid-cols-2 md:gap-2 block text-zinc-200 text-xl font-normal mb-2"
              >
                Email
              </label>

              <input 
                 type="text" 
                 name="email"
                 id="email"
                 autoComplete="email"
                 required
                 placeholder="email01@gmail.com"
                 className="text-field text-sm mt-2 block outline-none w-full 
                 px-3 py-3 bg-zinc-700 rounded-xl ring-1 ring-inset ring-transparent
                 transition-shadow hover:ring-zinc-50/5 focus:ring-sky-400 
                 focus:ring-2 text-zinc-400"
              />
            </div>
          </div>

          <div className="md:grid">
            <div className="mb-4" >
              <label 
                htmlFor="message"
                className="label md:items-center md:grid-cols-2 md:gap-2 block text-zinc-200 text-xl font-normal mb-2"
              >
                message
              </label>

              <input 
                 type="text" 
                 name="message"
                 id="message"
                 required
                 placeholder="Hi!"
                 className="text-field text-sm mt-2 block outline-none w-full 
                 px-3 py-3 bg-zinc-700 rounded-xl ring-1 ring-inset ring-transparent
                 transition-shadow hover:ring-zinc-50/5 focus:ring-sky-400 
                 focus:ring-2 text-zinc-400"
              />
            </div>
          </div>

          <button
            type="submit"
            className="text-field rounded-2xl justify-center mt-1 mb-1
                 px-2 py-2 bg-sky-400 hover:bg-sky-200/90"
          >
            submit
          </button>

        </form>
      </div>
      
    </section>
  )
}

export default EmailSection

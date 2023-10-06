import React from 'react'

function About() {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-2 object-cover object-center rounded" alt="hero" src="/logo.jpeg" />
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">About Us</h1>
            <p class="mb-8 leading-relaxed">At <b>A2z Solutions</b>, we're dedicated to bringing your digital dreams to life. 🌐 Whether you're looking to develop cutting-edge apps, create stunning websites, or embark on a transformative internship journey, we've got you covered.

Our team of passionate developers and designers is committed to excellence, turning your ideas into tangible digital solutions that make an impact. 💡 We believe in the power of innovation and collaboration, and we're here to help you succeed in the fast-paced world of technology.</p>
            <div class="flex justify-center">
              <a href='#' class="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Read More</a>
              <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Contact</button>
            </div>
          </div>
        </div>
      </section>
      
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded rounded-2xl" alt="hero" src="/banner.png" />
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">What we Offer</h1>
            <p class="mb-8 leading-relaxed"><b>App Development:</b> From concept to deployment, we create customized mobile and web applications that set you apart in the digital landscape.
<br/>
<b>Web Development:</b> Our web development experts craft responsive, user-friendly websites that captivate your audience and drive results.

<br/>
<b>Internship Programs:</b> We're passionate about nurturing the next generation of tech talent. Explore our internship opportunities to kickstart your career in the digital world.</p>
            <div class="flex justify-center">
              <a href='https://forms.gle/Ht48YquXUWVneNsz5' class="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Apply Now</a>
              {/* <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Contact</button> */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
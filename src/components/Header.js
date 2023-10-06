import React from 'react'

function Header() {
    return (

        <div class="relative h-screen overflow-hidden bg-black">
            <img src='Banner2.jpeg' class="absolute object-cover w-full h-full"  >
    </img>
            <div class="absolute inset-0 bg-black opacity-25">
            </div>
            <header class="absolute top-0 left-0 right-0 z-20">
                <nav class="container px-6 py-4 mx-auto md:px-12">
                    <div class="items-center justify-center md:flex">
                        <div class="flex items-center justify-between">
                            {/* <div class="hidden">
              <button class="text-white focus:outline-none">
                <svg class="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  </path>
                </svg>
              </button>
            </div> */}
                        </div>
                        <div class="items-center text-center md:flex">
                            <a href="/" class="mx-3 text-lg text-white uppercase cursor-pointer hover:text-gray-300">
                                Home
                            </a>
                            <a href="/dashboard" class="mx-3 text-lg text-white uppercase cursor-pointer hover:text-gray-300">
                                Dashboard
                            </a>
                        </div>
                    </div>
                </nav>
            </header>
            <div class="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
                <div class="relative z-10 flex flex-col items-center w-full">
                    <h1 class="mt-4 font-extrabold leading-tight text-center text-white text-7xl sm:text-8xl">
                        A2z Solutions
                    </h1>
                    <p className='mt-3 text-xl text-center text-white sm:text-xl'>
                        <b>Internship and Training  🎓📕</b>
                    </p>
                    <a href="/dashboard" class="block px-4 rounded-xl py-3 mt-10 text-lg font-bold text-white uppercase bg-indigo-600 hover:bg-indigo-800">
                        Login 
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header
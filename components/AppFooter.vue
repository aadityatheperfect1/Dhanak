<template>
    <footer class="relative dark:bg-gray-1200" >
        <div class="mx-auto w-full max-w-screen-xxl p-3 py-6 lg:py-8" style="background-color: #000000;" >
            <div style=" display: flex; justify-content: space-around; margin:10px; justify-items: center; background-color: #000000;">
              <div class="container sm:grid-col-1 md:grid-col-3 lg:grid-col-3 sm:justify-center xl:flex xl:justify-around lg:flex lg:justify-around md:flex md:justify-around">
                <div class="justify-center items-center md:w-1/2 lg:w-1/3 xl:w-1/3 mt-4  mt-4 ">
                <h2 class="text-sm font-semibold text-gray-900 uppercase dark:text-white" style="text-align: center;margin-bottom: 1rem;">Links</h2>
                  <ul style="text-align: center;" class="text-gray-500 dark:text-gray-400 font-medium" >
                          <li>
                            <NuxtLink class="hover:underline" to="/">Home</NuxtLink>
                          </li>
                          <li>
                            <NuxtLink class="hover:underline" to="/about">About</NuxtLink>
                          </li>
                          <li>
                            <NuxtLink class="hover:underline" to="/events">Events</NuxtLink>
                          </li>
                          <li>
                            <NuxtLink class="hover:underline" to="/registration">Log In</NuxtLink>
                          </li>
                          <li>
                            <NuxtLink class="hover:underline" to="/registration">Sign Up</NuxtLink>
                          </li>
                          <li>
                            <NuxtLink class="hover:underline" to="/merchandise">Merchandise</NuxtLink>
                          </li>
                          <li>
                            <NuxtLink class="hover:underline" to="/accomodation">Accomodation</NuxtLink>
                          </li>
                          <li>
                            <NuxtLink class="hover:underline" to="/workshops">Workshops</NuxtLink>
                          </li>
                          <li>
                            <NuxtLink class="hover:underline" to="/team">Team</NuxtLink>
                          </li>
                      </ul>
                </div>
                <div class="justify-center items-center md:w-1/2 lg:w-1/3 xl:w-1/4 mt-4 mt-4">
                  <div>
                      <h2 class=" mb-1 text-sm font-semibold text-gray-900 uppercase dark:text-white" style="text-align: center;margin-bottom: 1rem;" >Follow us</h2>
                      <ul style="text-align: center;" class="text-gray-500 dark:text-gray-400 font-medium">
                          <li>
                              <a href="https://www.instagram.com/dhanak.iist/" target="_blank" class="hover:underline ">Instagram</a>
                          </li>
                          <li>
                              <a href="https://www.facebook.com/iist.dhanak" target="_blank" class="hover:underline">Facebook</a>
                          </li>
                          <li>
                              <a href="https://www.youtube.com/@DhanakIIST" target="_blank" class="hover:underline">Youtube</a>
                          </li>
                          <li>
                              <a href="https://www.linkedin.com/in/dhanak-iist-b2ba83bb" target="_blank" class="hover:underline">LinkedIn</a>
                          </li>
                      </ul>
                  </div>
                </div>
                <div class=" justify-center items-center md:w-1/2 lg:w-1/3 xl:w-1/3 mt-4 mt-4" >
                  <div>
                      <h2 class=" mb-1 text-sm font-semibold text-gray-900 uppercase dark:text-white" style="text-align: center;margin-bottom: 1rem;">Legal</h2>
                      <ul style="text-align: center;" class="text-gray-500 dark:text-gray-400 font-medium">
                          <li>
                              <a href="#" class="hover:underline">Privacy Policy</a>
                          </li>
                          <li>
                              <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                          </li>
                      </ul>
                  </div>
                </div>
              
              </div>
          </div>
          <hr class=" border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div class="mx-auto w-full max-w-screen-xxl container justify-center items-center sm:grid-col-1 md:grid-col-3 lg:grid-col-3 xl:grid-col3 sm:justify-center xl:flex xl:justify-between lg:flex lg:justify-between md:flex md:justify-between" style="background-color: #000000;">
            <div class="md:w-1/2 lg:w-1/3 xl:w-1/3" style="display:flex; align-item:center; padding-top:10px; margin:10px; justify-content: center;">
              <span class="text-sm flex items-center justify-center text-white-500 sm:text-center dark:text-gray-400">© 2024 Copyright: <a href="https://flowbite.com/" class="hover:underline">Dhanak 2024</a>
              </span>
            </div>
              <div class="my-auto flex hidden sm:hidden md:inline-block lg:inline-block xl:inline-block  absolute left-[42%] md:left-[45%] lg:left-[47%] xl:left-[48%]">
                <a href="https://iist.dhanak.org.in/">
                  <img src="../assets/dhanak_logo_sm.svg" height="70vh" width="60vh" alt="Dhanak Logo" />
                </a>
              </div>
              <div class="flex items-center justify-center sm:flex sm:items-center sm:justify-center inline-block sm:inline-block md:hidden lg:hidden xl:hidden">
                <a class="flex sm:flex" href="https://iist.dhanak.org.in/">
                  <img src="../assets/dhanak_logo_sm.svg" height="70vh" width="60vh" alt="Dhanak Logo" />
                </a>
              </div>
              <div class="flex items-center justify-center gap-6 mt-2 md:w-1/2 lg:w-1/3 xl:w-1/3">
                  <a href="https://www.facebook.com/iist.dhanak" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <!-- <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                            <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                        </svg> -->
                        <img class="w-8 h-8" aria-hidden="true" src="../assets/facebook.svg" alt="dhanak facebook">
                      <span class="sr-only">Facebook Page</span>
                  </a>
                  <a href="https://www.instagram.com/dhanak.iist/" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                      <!-- <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                            <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                        </svg> -->
                        <img class="w-8 h-8" aria-hidden="true" src="../assets/instagram.svg" alt="dhanak instagram">
                        <span class="sr-only">Instagram Page</span>
                  </a>
                  <a href="https://www.youtube.com/@DhanakIIST" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                      <!-- <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                        <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                    </svg> -->
                    <img class="w-8 h-8" aria-hidden="true" src="../assets/youtube.svg" alt="dhanak youtube">
                      <span class="sr-only">Youtube Channel</span>
                  </a>
                  <a href="https://www.linkedin.com/in/dhanak-iist-b2ba83bb" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                      <!-- <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd"/>
                    </svg> -->
                    <img class="w-8 h-8" aria-hidden="true" src="../assets/linkedn.svg" alt="dhanak linkedin">
                      <span class="sr-only">LinkedIn</span>
                  </a>
              </div>
          </div>
        </div>
    </footer>
</template>

<style scoped>
h2{
  margin-left: 2.1rem;
  margin-right: 2.1rem;
  font-weight: 600;
  color: #FFC95F;
  font-family: 'Poppins', sans-serif;
  text-decoration: none;
  border: none;
  background: none;
  font-size: 18px;
}

li{
    margin-left: 2.1rem;
    margin-right: 2.1rem;
    font-weight: 600;
    color: white;
    font-family: 'Poppins', sans-serif;
    text-decoration: none;
    border: none;
    background: none;
    font-size: 18px;
  }
</style>
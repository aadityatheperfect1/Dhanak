<template>
    <header id="navbar" style="border-bottom: solid 1px rgb(50, 50, 50);" class="fixed text-[14px] font-oddval font-[400] top-0 h-[64px] z-50 flex items-center bg-[#111111] w-screen">
    <div class="flex w-screen items-center justify-between">
        <div class=" items-center text-white ml-[2rem]">
          <NuxtLink class="hidden  xl:inline-block" to="https://www.iist.ac.in/"><img height="120vh" width="200vh" src="../assets/IIST_LOGO_lg.svg" alt="Navbar logo"></NuxtLink>
          <NuxtLink to="https://www.iist.ac.in/"><img class="inline-block xl:hidden h-[2.5rem]" src="../assets/IIST_LOGO_sm.png" alt=""></NuxtLink>
        </div>
        <div class=" my-auto flex  absolute left-[42%] md:left-[45%] lg:left-[47%] xl:left-[48%]">
          <NuxtLink to="https://dhanak.iist.org.in/"><img class="max-h-[3rem] md:max-h-[3rem]" src="../assets/dhanak_logo_sm.svg" alt="Navbar logo"></NuxtLink>
        </div>
        <div class="mr-[2rem] h-full flex lg:items-right">
          <div class=" flex items-center gap-3">
              <NuxtLink class="hidden xl:inline-block pointer-cursor-element block mt-4 p-2 px-4  lg:mt-0 text-[#ffffff] hover:text-white hover:bg-[#1A1A1A] hover:rounded-lg mr-2" to="/">Home</NuxtLink>
              <!-- <li><NuxtLink to="/about">About</NuxtLink></li> -->
              <!-- <li><NuxtLink to="/team">Team</NuxtLink></li> -->
              <NuxtLink class="hidden xl:inline-block pointer-cursor-element block mt-4 p-2 px-4  lg:mt-0 text-[#ffffff] hover:text-white hover:bg-[#1A1A1A] hover:rounded-lg mr-2" to="/workshops">Workshops</NuxtLink>
              <NuxtLink class="hidden xl:inline-block pointer-cursor-element block mt-4 p-2 px-4  lg:mt-0 text-[#ffffff] hover:text-white hover:bg-[#1A1A1A] hover:rounded-lg mr-2" to="/merchandise">Merch</NuxtLink>
              <NuxtLink class="hidden xl:inline-block pointer-cursor-element block mt-4 p-2 px-4  lg:mt-0 text-[#ffffff] hover:text-white hover:bg-[#1A1A1A] hover:rounded-lg mr-2" to="/accomodation">Accomodation</NuxtLink>
              <NuxtLink class="hidden xl:inline-block block mt-4 mx-2 p-2 px-4 bg-[#EC941C] rounded-lg  lg:mt-0 text-black font-[600] hover:bg-[#c8790a] mr-2 pointer-cursor-element" to="/events">Events</NuxtLink>
              <button style=" z-index: 5;"
                class="text-white block xl:hidden hover:text-gray-300 focus:outline-none focus:text-gray-300">
                <input id="checkbox" type="checkbox" v-model="isMobileMenuVisible" @click="toggleMobileMenu();">
                  <label class="toggle" for="checkbox">
                      <div id="bar1" class="bars"></div>
                      <div id="bar2" class="bars"></div>
                      <div id="bar3" class="bars"></div>
                  </label>
              </button>
            </div>
        </div>
        <!-- <div class="col-span-5 flex items-center">
          <ul class="items-center justify-end lg:flex">
            <li><NuxtLink to="/events">Events</NuxtLink></li>
            <li><NuxtLink to="/merchandise">Merch</NuxtLink></li>
            <li><NuxtLink to="/accomodation">Accomodation</NuxtLink></li>
            <li><NuxtLink to="/registration">Register</NuxtLink></li>
          </ul>
        </div> -->
      
    </div>

    <!-- Hamburger Menu for Small Screens -->
    <!-- <div class="flex sticky top-0 z-50 items-center justify-between" 
          style=" width:100%;">
          <div class="ml-[2rem]">
            <NuxtLink to="https://www.iist.ac.in/"><img class="h-[2.25rem]" src="../assets/IIST_LOGO_sm.png" alt=""></NuxtLink>
          </div>
            <NuxtLink to="https://dhanak.iist.org.in/" @click="toggleMobileMenu();" style="z-index: 3; !important">
              <img class="my-auto flex max-h-[3rem] md:max-h-[3rem] md:absolute left-[47%] lg:left-[47%]" src="../assets/dhanak_logo_sm.png">
            </NuxtLink>
            <div class="block  mr-[2rem]">
              <button id="mobile-menu-btn" style=" z-index: 5;"
              class="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300">
              <input id="checkbox" type="checkbox" v-model="isMobileMenuVisible" @click="toggleMobileMenu();">
                <label class="toggle" for="checkbox">
                    <div id="bar1" class="bars"></div>
                    <div id="bar2" class="bars"></div>
                    <div id="bar3" class="bars"></div>
                </label>
            </button>
            </div>
    </div> -->
  </header>
  <!-- Mobile Menu (Hidden by default) -->
  <div v-show="isMobileMenuVisible"
        class=" shadow-lg w-full left-0 right-0 grid items-center justify-center"
        style=" position: fixed; top:0;  z-index: 2; background-color: #111111e2;">
        <div class="grid mt-20 mb-10">
          <NuxtLink @click="toggleMobileMenu();" class="mt-4 mobileNavbarLink" to="/">Home</NuxtLink>
          <NuxtLink @click="toggleMobileMenu();" class="mt-4 mobileNavbarLink" to="/about">About</NuxtLink>
          <NuxtLink @click="toggleMobileMenu();" class="mt-4 mobileNavbarLink" to="/team">Team</NuxtLink>
          <NuxtLink @click="toggleMobileMenu();" class="mt-4 mobileNavbarLink" to="/events">Events</NuxtLink>
          <NuxtLink @click="toggleMobileMenu();" class="mt-4 mobileNavbarLink" to="/workshops">Workshops</NuxtLink>
          <NuxtLink @click="toggleMobileMenu();" class="mt-4 mobileNavbarLink" to="/merchandise">Merchandise</NuxtLink>   
          <NuxtLink @click="toggleMobileMenu();" class="mt-4 mobileNavbarLink" to="/accomodation">Accomodation</NuxtLink>
          <NuxtLink @click="toggleMobileMenu();" class="mt-4 mobileNavbarLink" to="/signin">LogIn</NuxtLink>
          <NuxtLink @click="toggleMobileMenu();" class="mt-4 mobileNavbarLink" to="/registration">SignUp</NuxtLink>
        </div>
    </div>
</template>

<script>
  export default {
  data() {
    return {
      isMobileMenuVisible: false,
    };
  },

  methods: {
    toggleMobileMenu() {
      this.isMobileMenuVisible = !this.isMobileMenuVisible;
    },
  }
};
</script>

<style scoped>
@font-face {
  font-family: Market_Deco;
  src: url(../assets/fonts/Market_Deco.ttf);
}
  #navbar{
    /* background: rgba(4, 4, 36, 0.86);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.1px);
    -webkit-backdrop-filter: blur(5.1px);
    border: 1px solid rgba(4, 4, 36, 0.24); */
}

/* li{
    margin-left: 1rem;
    margin-right: 1rem;
    color: white;
    font-family: 'Market_Deco';
    text-decoration: none;
    border: none;
    background: none;
    font-size: 18px;
}

li::before {
  margin-left: auto;
}

li::after, li::before {
  content: '';
  width: 0%;
  height: 2px;
  background: #EC9420;
  display: block;
  transition: 0.5s;
}

li:hover::after, li:hover::before {
  width: 100%;
} */


#checkbox {
  display: none;
}

.toggle {
  position: relative;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition-duration: .5s;
}

.bars {
  width: 100%;
  height: 5px;
  background-color: #EC9420;
  border-radius: 4px;
}

#bar2 {
  transition-duration: .8s;
}

#bar1,#bar3 {
  width: 70%;
}

#checkbox:checked + .toggle .bars {
  position: absolute;
  transition-duration: .5s;
}

#checkbox:checked + .toggle #bar2 {
  transform: scaleX(0);
  transition-duration: .5s;
}

#checkbox:checked + .toggle #bar1 {
  width: 100%;
  transform: rotate(45deg);
  transition-duration: .5s;
}

#checkbox:checked + .toggle #bar3 {
  width: 100%;
  transform: rotate(-45deg);
  transition-duration: .5s;
}

#checkbox:checked + .toggle {
  transition-duration: .5s;
  transform: rotate(180deg);
}
  .mobileNavbarLink {
    /* */
    width: 15rem;
    font-size: 1.2rem;
  padding: 1rem 2.5rem;
  border: none;
  outline: none;
  border-radius: 0.4rem;
  cursor: pointer;
  font-family: 'Market_Deco';
  text-transform: uppercase;
  text-align: center;
  background-color: #111111;
  color: rgb(255, 255, 255);
  font-weight: 800;
  /* box-shadow: 0px 0px 60px #1C9C8C; */
  }

  .mobileLogo{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
  }
</style>
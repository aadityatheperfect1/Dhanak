<template>
    <header id="navbar" class="flex pt-2 justify-center backdrop-blur border-b border-gray-200 dark:border-gray-800 -mb-px sticky top-0 z-50 lg:mb-0 lg:border-0">
    <div class="lg:flex max-w-7xl hidden items-center">
      <div class="grid grid grid-cols-12 gap-4">
        <div class="col-span-5 flex justify-end">
          <ul class="items-center justify-end lg:flex">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/team">Team</NuxtLink></li>
            <li><NuxtLink to="/registration">Register</NuxtLink></li>
          </ul>
        </div>
        <div class="lg:flex col-span-2 justify-center items-center">
          <NuxtLink to="/"><img height="120vh" width="110vh" src="../assets/dhanak_logo.png" alt="Navbar logo"></NuxtLink>
        </div>
        <div class="col-span-5 flex items-center">
          <ul class="items-center justify-end lg:flex">
            <li><NuxtLink to="/events">Events</NuxtLink></li>
            <li><NuxtLink to="/merchandise">Merch</NuxtLink></li>
            <li><NuxtLink to="/workshops">Workshops</NuxtLink></li>
            <li><NuxtLink to="/accomodation">Accomodation</NuxtLink></li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Hamburger Menu for Small Screens -->
    <div class="lg:hidden xl:hidden flex sticky top-0 z-50 items-center justify-around" 
          style=" width:100%;">
          <div style="width: 36px; height: 32px;">
          </div>
            <NuxtLink @click="toggleMobileMenu();" style="z-index: 3; !important">
              <img height="120vh" width="110vh" src="../assets/dhanak_logo.png">
            </NuxtLink>
            <button id="mobile-menu-btn" style=" z-index: 3;"
              class="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300">
              <input id="checkbox" type="checkbox" v-model="isMobileMenuVisible" @click="toggleMobileMenu();">
                <label class="toggle" for="checkbox">
                    <div id="bar1" class="bars"></div>
                    <div id="bar2" class="bars"></div>
                    <div id="bar3" class="bars"></div>
                </label>
            </button>
    </div>
  </header>
  <!-- Mobile Menu (Hidden by default) -->
  <div v-show="isMobileMenuVisible"
        class=" md:hidden shadow-lg w-full left-0 right-0 grid items-center justify-center"
        style=" position: fixed; top:0;  z-index: 2; background-color: rgba(4, 4, 36, 0.86);">
        <div class="grid mt-32 mb-10">
          <NuxtLink @click="toggleMobileMenu();" class="mt-4 mobileNavbarLink" to="/">Home</NuxtLink>
          <NuxtLink @click="toggleMobileMenu();" class="mt-4 mobileNavbarLink" to="/about">About</NuxtLink>
          <NuxtLink @click="toggleMobileMenu();" class="mt-4 mobileNavbarLink" to="/team">Team</NuxtLink>
          <NuxtLink @click="toggleMobileMenu();" class="mt-4 mobileNavbarLink" to="/events">Events</NuxtLink>
          <NuxtLink @click="toggleMobileMenu();" class="mt-4 mobileNavbarLink" to="/workshops">Workshops</NuxtLink>
          <NuxtLink @click="toggleMobileMenu();" class="mt-4 mobileNavbarLink" to="/registration">SignUp</NuxtLink>
          <NuxtLink @click="toggleMobileMenu();" class="mt-4 mobileNavbarLink" to="/registration">LogIn</NuxtLink>
          <NuxtLink @click="toggleMobileMenu();" class="mt-4 mobileNavbarLink" to="/merchandise">Merchandise</NuxtLink>   
          <NuxtLink @click="toggleMobileMenu();" class="mt-4 mobileNavbarLink" to="/accomodation">Accomodation</NuxtLink>
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
    background: rgba(4, 4, 36, 0.86);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.1px);
    -webkit-backdrop-filter: blur(5.1px);
    border: 1px solid rgba(4, 4, 36, 0.24);
}

li{
    margin-left: 2.1rem;
    margin-right: 2.1rem;
    font-weight: 600;
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
}


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
  background-color: rgb(14, 14, 26);
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
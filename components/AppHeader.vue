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
  </header>
</template>

<style scoped>
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
    font-family: 'Poppins', sans-serif;
    text-decoration: none;
    border: none;
    background: none;
    font-size: 16px;
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
</style>
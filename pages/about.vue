<template>
  <header class="h-screen bg-cover bg-center">
    <img class="comingSoon" src="../assets/dhanak_landing.webp" alt="dhanak landing">
    <div class="pt-20 text-6xl sm:text-4xl md:text-7xl lg:text-7xl xl:text-7xl text-center flex justify-center items-center" style="color: #FFF9C9; font-family: Market_Deco; text-shadow: 2px 2px 10px #000000; color: #EAF4D4; font-weight: bolder;">
      About
    </div>
    <section class="grid mb-0">
      <div class="text-6xl sm:text-6xl md:text-8xl lg:text-8xl xl:text-8xl mt-36 sm:mt-16 md:mt-28 lg:mt-28 xl:mt-36 text-white text-center font-normal" style="font-family: 'oddval'; color: #FFF9C9;" >
      Coming Soon.
    </div>
    <div class="text-7xl sm:text-6xl md:text-8xl lg:text-8xl xl:text-8xl mt-16 sm:mt-24 md:mt-20 lg:mt-20 xl:mt-16 text-white text-center font-normal" style="font-family: 'oddval'; color: #FFF9C9;" >
      Stay Tuned!
    </div>
    </section>
  </header>
    <div class="about">
      
    </div>
</template>


<style scoped>
.about{
    background-image: repeating-radial-gradient(  #338a7d 87%,#086454 90%);
background-size: 50px 50px;
  }
@font-face {
  font-family: Market_Deco;
  src: url(../assets/fonts/Market_Deco.ttf);
}

h1{
font-size: 72px;
font-family: 'Market_Deco';
font-weight: bold;
color: #EAF4D4;
text-shadow: 2px 2px 10px #000000;
}

.comingSoonAbout{
background-image: repeating-radial-gradient(  #0c0a0a 80%,#338a7d 90%,#086454 90%);
background-size: 65px 65px;
}

.comingSoon{
  background-color: transparent;
  position: absolute;
  width: 100vw;
  height: 100vh;
  -o-object-position: center;
  object-position: center;
  -o-object-fit: cover;
  object-fit: cover;
  color:transparent;
  z-index: -1;
  line-height: inherit;
}
</style>
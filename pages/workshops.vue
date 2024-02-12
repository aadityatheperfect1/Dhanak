<!-- <template>
  <div class="workshops">
  </div>
    <div class="flex justify-center items-center">
      <h1 class="mt-8" style="font-family: Market_Deco; text-shadow: 2px 2px 10px #000000; color: #EAF4D4; font-weight: bolder; font-size: 64px;">
          workshops
      </h1>
    </div>
    
    <div class=" flex items-center justify-center">
      <div class="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8 mx-2 my-4">
       
        <div v-for="item in apiData" :key="item.id" class="workshop-card  overflow-hidden mx-2 my-4">
          <div class="workshopImage">
            <img :src="item.image" :alt="`workshop ${index + 1}`" >
            <h1 class="workshop-name mt-6" >
            {{ item.name.split(":")[0] }}
           
            </h1>
          </div>
        </div>
      </div>
    
  </div>
</template>


<style scoped>
@font-face {
  font-family: Market_Deco;
  src: url(../assets/fonts/Market_Deco.ttf);
}

.workshops{
background-image: repeating-radial-gradient(  #338a7d 87%,#086454 90%);
background-size: 50px 50px;
}
.workshop-card{
display: grid;
justify-items: center;
align-items: center;
width: 18em;
height: 22em;
background-image: url(../assets/Polaroid.svg);
background-size: cover;
border-radius: 0px;
box-shadow: 0px 10px 20px rgb(36, 36, 36);
}
.workshopImage{
position: relative;
width: 90%;
}
.workshop-name{
color: #474747;
font-size: 64px;
text-align: center;
font-family: 'blackrush';
line-height: 0.7;
}
</style>

<script>
import axios from 'axios';
export default {
    data() {
      return {
        apiData: [],
      };
    },
    mounted() {
      axios.get('https://backend.abhishekverma.me/api/workshops/?format=json', {
        headers: {
          'Content-Type': 'application/json'
        },
      })
        .then(response => {
          this.apiData = response.data;
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    },
}
</script> -->

<template>
  <header class="h-screen bg-cover bg-center">
    <img class="comingSoon" src="../assets/dhanak_landing.webp" alt="dhanak landing">
    <div class="pt-20 text-6xl sm:text-4xl md:text-7xl lg:text-7xl xl:text-7xl flex justify-center items-center" style="font-family: Market_Deco; text-shadow: 2px 2px 10px #000000; color: #EAF4D4; font-weight: bolder;">
      Workshops
    </div>
    <section class="grid mb-0">
      <div class="text-6xl sm:text-6xl md:text-8xl lg:text-8xl xl:text-8xl mt-36 sm:mt-16 md:mt-28 lg:mt-28 xl:mt-36 text-white text-center font-normal" style="font-family: 'oddval'; color: white;" >
      Coming Soon.
    </div>
    <div class="text-7xl sm:text-6xl md:text-8xl lg:text-8xl xl:text-8xl mt-16 sm:mt-24 md:mt-20 lg:mt-20 xl:mt-16 text-white text-center font-normal" style="font-family: 'oddval'; color: white;" >
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
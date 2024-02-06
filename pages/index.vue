<template>
        <section class="grid h-full justify-center items-center bg-cover bg-top DhanakIntro">
            <h1 class="text-2xl sm:text-4xl md:text-4xl lg:text-6xl xl:text-7xl mt-8 sm:mt-14 md:mt-16 lg:mt-24 xl:mt-32" style=" font-family: 'Vintage'; text-align: center; color: #EAF4D4; ">Retro Revival</h1>
            <h2 class="text-3xl sm:text-4xl md:text-4xl lg:text-6xl xl:text-7xl mt-3 sm:mt-6 md:mt-8 lg:mt-14 xl:mt-16" style="font-family: 'Market_Deco'; text-align: center; text-shadow: 0px 0px 4px #000000; color: #EAF4D4;">
                March 15th to 18th
            </h2>
        </section>
   
    <section class="events">
        <div class="flex justify-center items-center">
            <h1 class="mt-8" style="font-family: Market_Deco; text-shadow: 2px 2px 10px #000000; color: #EAF4D4; font-weight: bolder; font-size: 64px;">
                Events
            </h1>
        </div>
        <div class=" flex items-center justify-center">
    <div class="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 mx-2 my-4">
      <!-- Event Cards -->
      <div v-for="item in apiData" :key="item.id" class="event-card  overflow-hidden mx-2 my-4">
        <div class="eventImage">
                <img :src="item.image" :alt="`Event ${index + 1}`" >
                <h1 class="event-name mt-6" >
                {{ item.name.split(":")[0] }}
                <!-- <br>
                
                {{ item.name.split(":")[1] }} -->
                </h1>
        </div>
      </div>
    </div>
  </div>
    </section>
</template>


<style scoped>
@font-face {
    font-family: blackrush;
    src: url(../assets/fonts/blackrush.blackrush.otf);
}
@font-face {
    font-family: Market_Deco;
    src: url(../assets/fonts/Market_Deco.ttf);
}
@font-face {
    font-family: Vintage;
    src: url(../assets/fonts/Vintage.ttf);
}

/* .banner-container {
      position: relative;
      max-width: 100vw; 
      height: auto;
      padding-bottom: 30%; 
      overflow: hidden;
    } */
    /* .banner-image {
        width: 100%;
      height: auto;
    } */

    .text-overlay {
        font-size: 58px;
      transform: translate(-50%, -50%);
      color: #EAF4D4;
      text-align: center;
      font-family: 'Vintage';
    } 
    .DhanakIntro{
        background-image: url(../assets/HomePagePattern.svg);

        /* background-image: repeating-radial-gradient(  #0c0a0a 80%,#338a7d 90%,#086454 90%);
        background-size: 65px 65px; */

        /* background-image: repeating-radial-gradient(  #DBDAD5 87%,#9e9d97 90%);
  background-size: 50px 50px; */

    }
    .events{
        background-image: repeating-radial-gradient(  #338a7d 87%,#086454 90%);
  background-size: 50px 50px;
    }
    .event-card{
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
    .eventImage{
  position: relative;
  width: 90%;
}
.event-name{
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
      // Make a GET request when the component is mounted
      axios.get('https://backend.abhishekverma.me/api/events/?format=json', {
        headers: {
          'Content-Type': 'application/json'
        },
      })
        .then(response => {
          // Handle the successful response
          this.apiData = response.data;
        })
        .catch(error => {
          // Handle any errors that occurred during the request
          console.error('Error fetching data:', error);
        });
    },
}
</script>
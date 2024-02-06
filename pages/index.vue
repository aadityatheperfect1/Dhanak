<template>
        <section class="grid w-full items-center justify-center bg-cover bg-center DhanakIntro">
                <div class="RetroRevival">
            <h2 style=" margin-top: 10px; font-family: 'Vintage'; text-align: center; color: #EAF4D4; font-size: 58px;">
                Retro Revival
            </h2>
        </div>
        <h2 style="margin-top: 1rem; font-family: 'Market_Deco'; text-align: center; text-shadow: 0px 0px 4px #000000; color: #EAF4D4; font-size: 48px;">
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

.RetroRevival{
    background-image: url(../assets/Banner.svg);
    background-size: cover;
    background-repeat: no-repeat;
    height: 100px;
    width: 650px;
    margin-top: 6.8rem;
}
    .DhanakIntro{
        background-image: url(../assets/HomePage.svg);

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
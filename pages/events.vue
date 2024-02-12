<template>
  <header style="background-color: black;">
    <div class="pt-20 pb-4 text-6xl sm:text-4xl md:text-7xl lg:text-7xl xl:text-7xl flex justify-center items-center" style="font-family: Market_Deco; text-shadow: 2px 2px 10px #000000; color: #EAF4D4; font-weight: bolder;">
      Events
    </div>
  </header>
  <div class="events">
    <div class=" flex items-center justify-center">
      <div class="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8 mx-2 my-4">
        <!-- Event Cards -->
          <div v-for="item in apiData" :key="item.id" class="event-card  overflow-hidden mx-2 my-4">
          <div class="eventImage">
            <!-- <NuxtLink :to="`/eventpage/${item.id}`"> -->
            <NuxtLink :to="`/eventpage`">
            <!-- <NuxtLink :to="{ name: 'eventpage-id', params: { someParam: item.id } }"> -->
                <img :src="item.image" :alt="`Event ${index + 1}`" >
            </NuxtLink>
            <NuxtLink :to="`/eventpage`">
            <!-- <NuxtLink :to="`/eventpage/${item.id}`"> -->
            <!-- <NuxtLink :to="{ name: 'eventpage-id', params: { someParam: item.id  } }"> -->
              <h1 class="event-name mt-6" >
              {{ item.name.split(":")[0] }}
              <!-- <br>
              {{ item.name.split(":")[1] }} -->
              </h1>
            </NuxtLink>
          </div>
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
/* color: #EAF4D4; */
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
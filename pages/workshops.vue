<template>
  <section class="workshops">
    <div class="flex justify-center items-center">
      <h1 class="mt-8" style="font-family: Market_Deco; text-shadow: 2px 2px 10px #000000; color: #EAF4D4; font-weight: bolder; font-size: 64px;">
          workshops
      </h1>
    </div>
    <div class=" flex items-center justify-center">
      <div class="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8 mx-2 my-4">
        <!-- workshop Cards -->
        <div v-for="item in apiData" :key="item.id" class="workshop-card  overflow-hidden mx-2 my-4">
          <div class="workshopImage">
            <img :src="item.image" :alt="`workshop ${index + 1}`" >
            <h1 class="workshop-name mt-6" >
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
  font-family: Market_Deco;
  src: url(../assets/fonts/Market_Deco.ttf);
}

.comingSoon{
background-image: repeating-radial-gradient(  #0c0a0a 80%,#338a7d 90%,#086454 90%);
background-size: 65px 65px;
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
      axios.get('https://backend.abhishekverma.me/api/workshops/?format=json', {
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
<template>
    <header class="DhanakIntro h-screen bg-cover bg-center" data-scroll-container="true">
      <img class="Dhanak_landing" src="../assets/dhanak_landing.jpg" alt="dhanak landing">
      <section class="grid mb-0">
          <div class=" mt-48 sm:mt-56 md:mt-56 lg:mt-32 xl:mt-40 grid justify-center items-center">
            <img class="max-w-sm sm:w-full md:max-w-2xl lg:max-w-2xl" src="../assets/Dhanak_text.png" alt="dhanak_text">
            <div class="flex text-center justify-center items-center text-4xl sm:text-4xl md:text-6xl lg:text-6xl xl:text-7xl mt-4 sm:mt-8 md:mt-12 lg:mt-4 xl:mt-4" style=" font-family: 'Vintage'; text-align: center; color: #FFF9C9; ">
              Retro Revival
            </div>
            <div style="font-family: 'oddval'; color: white;" class="text-4xl mt-20 sm:mt-16 md:mt-12 lg:mt-0 xl:mt-0 text-white md:text-[1/5rem] text-center font-normal">
              {{ countdownDays }} days to go !!
            </div>
            <div class="mt-24 sm:mt-28 md:mt-32 lg:mt-10 xl:mt-8">
              <h2 class="text-4xl sm:text-3xl md:text-[3.5rem] text-center" style="font-family: 'oddval'; font-weight: lighter; text-align: center; text-shadow: 0px 0px 4px #000000; color: white;">
                15th to 18th March
            </h2>
            </div>
          </div>
            <div class="flex grid-rows-1 justify-center md:grid md:grid-cols-3 xl:grid-cols-3 sm:grid-rows-1 mt-8 sm:mt-12 md:mt-20 lg:mt-16 xl:mt-12 items-center px-[4rem] w-screen">
              <div class="md:flex flex-row hidden sm:hidden md:inline-block lg:inline-block xl:inline-block text-[1.5rem]">
                <a class="justify-start hidden sm:hidden md:inline-block lg:inline-block xl:inline-block items-center" href="https://youtu.be/7-WTO92O6xQ?si=AQFtNp-32mbIeAQh">
                  <p style="font-family: 'oddval';" class="text-[1.5rem] text-white hover:text-[#EC941C] font-oddval">Dhanak '24: Theme</p>
                </a>
              </div>
              <div class="flex justify-center w-full">
                <NuxtLink to="/registration" style="font-family: 'oddval';" class="mx-[-0.5rem] md:my-[0.5rem] w-fit justify-center pointer-cursor-element rounded-lg text-[#0d0f04] text-center text-[1rem] md:text-[1.5rem] whitespace-nowrap font-[700] leading-[100%] bg-[#EC941C] p-4 px-6 __className_587f35 pointer-cursor-element">
                  Register
                </NuxtLink>
              </div>
              <div class="flex justify-center w-full md:hidden lg-hidden xl-hidden">
                <NuxtLink to="/events" style="font-family: 'oddval';" class="mx-[-0.5rem] md:my-[0.5rem] w-fit justify-center pointer-cursor-element rounded-lg text-[#0d0f04] text-center text-[1rem] md:text-[1.5rem] whitespace-nowrap font-[700] leading-[100%] bg-[#EC941C] p-4 px-6 __className_587f35 pointer-cursor-element">
                  Events
                </NuxtLink>
              </div>
              <div class="flex md:flex justify-end hidden md:block w-full gap-8">
                <a class="pointer-cursor-element hidden sm:hidden md:inline-block lg:inline-block xl:inline-block" href="https://www.youtube.com/@DhanakIIST">
                  <img src="../assets/youtube.svg" alt="youtube">
                </a>
                <a class="pointer-cursor-element hidden sm:hidden md:inline-block lg:inline-block xl:inline-block" href="https://www.youtube.com/@DhanakIIST">
                  <img src="../assets/instagram.svg" alt="instagram">
                </a>
                <a class="pointer-cursor-element hidden sm:hidden md:inline-block lg:inline-block xl:inline-block" href="https://www.youtube.com/@DhanakIIST">
                  <img src="../assets/facebook.svg" alt="facebook">
                </a>
                <a class="pointer-cursor-element hidden sm:hidden md:inline-block lg:inline-block xl:inline-block" href="https://www.youtube.com/@DhanakIIST">
                  <img src="../assets/linkedn.svg" alt="linkedin">
                </a>
              </div>
            </div>
        </section>
    </header>
   
    <section class="events">
        <div class="flex justify-center items-center">
            <h1 class="mt-8" style="font-family: Market_Deco; text-shadow: 2px 2px 10px #000000; color: #EAF4D4; font-weight: bolder; font-size: 64px;">
                Events
            </h1>
        </div>
        <div class=" flex items-center justify-center">
    <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mx-2 my-4">
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
@font-face {
    font-family: VarelaRound-Regular;
    src: url(../assets/fonts/VarelaRound-Regular.ttf);
}
@font-face {
    font-family: Ka1;
    src: url(../assets/fonts/ka1.ttf);
}
@font-face {
    font-family: Franchise;
    src: url(../assets/fonts/Franchise.ttf);
}
@font-face {
    font-family: oddval;
    src: url(../assets/fonts/Oddval-SemiBold.otf);
}

.Dhanak_landing{
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

    .text-overlay {
        font-size: 58px;
      transform: translate(-50%, -50%);
      color: #EAF4D4;
      text-align: center;
      font-family: 'Vintage';
    } 
    .DhanakIntro{
      
        /* background-image: url(../assets/HomePagePattern.svg); */

        /* background-image: repeating-radial-gradient(  #0c0a0a 80%,#338a7d 90%,#086454 90%);
        background-size: 65px 65px; */

        /* background-image: repeating-radial-gradient(  #DBDAD5 87%,#9e9d97 90%);
  background-size: 50px 50px; */
  /* background-image: url(../assets/dhanak_landing.jpg); */

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
        countdownDays: "",
        countdownHours: "",
        countdownMinutes: "",
        countdownSeconds: "",
        countDownDate: new Date("Mar 16, 2024 00:00:00").getTime(),
      };
    },
    mounted() {
      this.updateCountdown();
      setInterval(this.updateCountdown, 1000);
      // Make a GET request when the component is mounted
      this.fetchEventData();
    },
    methods: {
      fetchEventData() {
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
      updateCountdown() {
        const now = new Date().getTime();
        const distance = this.countDownDate - now;
  
        if (distance >= 0) {
          const days = Math.floor(distance / (1000 * 60 * 60 * 24));
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
          this.countdownDays = `${days}`;
          this.countdownHours = ` ${hours}`;
          this.countdownMinutes = `${minutes}`;
          this.countdownSeconds = `${seconds}`;
        } else {
          this.countdownText = "EXPIRED";
        }
      },
    },
}
</script>


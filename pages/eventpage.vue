<template>
    <div>
      <div class="mt-8 flex justify-center items-center">
        <NuxtLink to="/events">
        <button class="flex justify-center items-center gap-4 cursor-pointer duration-200 hover:scale-105 active:scale-100" title="Go Back">
        <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" class="stroke-blue-400">
            <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" d="M11 6L5 12M5 12L11 18M5 12H23"></path>
        </svg>
        <h1 class="text-4xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-6xl" style="font-family: Market_Deco; text-shadow: 2px 2px 10px #000000; color: #EAF4D4; font-weight: bolder;">
          Back to Events 
        </h1>
        </button>
      </NuxtLink>
      </div>
      <div class="container mx-auto mt-8">
        <div class="max-w-2xl mx-auto">
          <!-- <p style="color: white;">Received prop: {{ eventID }}</p> -->
          <p style="color: white;">Received prop: {{ $route.params.someParam }}</p>
          <img :src="apiData.image" alt="event.title" class="w-full h-64 object-cover rounded mb-4">
          <h2 style="color: white;" class="text-3xl font-semibold mb-2">{{ apiData.name }}</h2>
          <p style="color: white;" class="text-gray-600">{{ apiData.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  const eventID = 6;
  export default {
  // props: ['eventID'],
  data() {
      return {
        apiData: [],
      };
    },
    mounted() {
      axios.get(`'https://backend.abhishekverma.me/api/event/${eventID}?format=json'`, {
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
  };
  </script>
  
  <style scoped>
  /* Add any additional styles here */
  .back-title{
    font-size: 48px;
    font-family: 'Kamikaze3DGradient';
    color: rgb(219, 138, 17);
  }
  </style>
  
<template>
    <div>
      <header class="bg-gray-800 text-white p-4">
        <h1 class="text-2xl font-semibold">{{ pageTitle }}</h1>
      </header>
      <main class="container mx-auto mt-4">
        <div class="grid grid-cols-3 gap-4">
          <!-- Your grid items go here -->
          <slot></slot>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      pageTitle: {
        type: String,
        required: true,
        default: "Page Title",
      },
    },
  };
  </script>
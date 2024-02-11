<template>
  <div class="body">
    <AppHeader />
     <NuxtPage/>
    <AppFooter />
  </div>
</template>

<style>
.body{
  background-color: rgba(4, 4, 36);
}
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
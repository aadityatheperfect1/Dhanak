<!-- Name of this file is merchandise.vue -->
<template>
  <section>
    <div id="Main">
      <ThreeCanvas :currentModelURL="currentModelURL" @selectImage="updateModel" />
      <TshirtGallery />
    </div>
  </section>
</template>

<script>
import ThreeCanvas from '../components/ThreeCanvas.vue';
import TshirtGallery from '../components/TshirtGallery.vue';

export default {
  components: {
    ThreeCanvas,
    TshirtGallery,
  },
  data() {
    return {
      currentModelURL: '/models/Model2.glb', // Set the initial model URL
    };
  },
  methods: {
    updateModel(id) {
      console.log(currentModelURL),
      // Update the currentModelURL when an image is selected
      this.currentModelURL = `/models/Model_${id}.glb`;
    },
  },
};

</script>
<style scoped>
@font-face {
  font-family: Market_Deco;
  src: url(../assets/fonts/Market_Deco.ttf);
}

@media (max-width: 1023px) {
  #Main {
    background: linear-gradient(to bottom, #282444, #2824449d);
    flex-direction: column;
  }

  #tshirt {
    height: 70vh;
  }
}

@media (min-width: 1024px) {
  #Main {
    background: linear-gradient(to bottom, #282444, #2824449d);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.2rem;
    white-space: nowrap;
    scrollbar-color: transparent transparent;
  }

  #tshirt {
    overflow-y: hidden;
    width: 100%;
    height: 100vh;
    grid-column: 1;
    width: 100%;
  }

}
</style>
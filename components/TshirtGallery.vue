<!-- Name of this File is TshirtGallery.vue -->
<template>
    <div class="image-gallery">
        <div class="product-list lg:grid lg:grid-cols-2 2xl:grid-cols-3" ref="productList">
            <div v-for="id in modelIDs" :key="id" @click="selectImage(id)" class="card">
                <img :src="'/images/Finaldesigns/Frontend/' + id + '.png'" alt="T-shirt Image" />
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps(['show3DModel']);
const emit = defineEmits();

const modelIDs = ref(['Model1', 'Model2', 'Model3', 'Model4', 'Model5', 'Model6']);

const selectImage = (id) => {
    emit('selectImage', id);
    // Your logic to handle image selection...
    console.log(`Selected image with ID: ${id}`);
};
</script>
  
<style scoped>
@media (max-width: 1023px) {

    .image-gallery {
        overflow-x: auto;
        white-space: nowrap;
    }

    .product-list {
        display: flex;
        width: 100%;
        gap: 1.5vw;
        padding: 3vh;
        border-color: #04040C;
        /* background: linear-gradient(to bottom, #04040C, #7EC8E3); */
    }


    .card {
        flex: 0 0 auto;
        cursor: pointer;
        border: 0.2vh solid #2b6993;
        border-radius: 8vw;
        overflow: hidden;
        transition: transform 0.8s;
        background: linear-gradient(to bottom, #282444, #2824449d);
    }

    .card:hover {
        transform: scale(1.1);
    }

    .card img {
        /* max-width: 100%; */
        height: 36vh;
        /* depend on how long image  you want */
    }
}

/* For Big Screens */
@media (min-width: 1023px) {
    #tshirt {
        overflow-y: hidden;
    }

    .image-gallery {
        overflow-y: auto;
        white-space: nowrap;
    }

    .product-list {
        gap: 1vw;
        padding: 1vh;
        /* background: linear-gradient(to bottom, #04040C, #7EC8E3); */
    }

    .card {
        flex: 0 0 auto;
        cursor: pointer;
        border: 0.5vh solid transparent;
        border-radius: 2vw;
        overflow: hidden;
        transition: transform 0.8s;
    }

    .card:hover {
        transform: scale(1.05);
    }
}
</style>
  



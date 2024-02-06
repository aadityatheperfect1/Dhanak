<template>
    <div class="image-gallery">
        <div class="product-list" ref="productList">
            <div v-for="id in modelIDs" :key="id" :id="id" @click="selectImage(id)" class="card">
                <img :src="'/image/' + id + '.jpg'" alt="T-shirt Image" />
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';

const modelIDs = ref(['model1', 'model2', 'model3', 'model4', 'model5', 'model6']);

const selectImage = (id) => {
    // Your logic to handle image selection...
    console.log(`Selected image with ID: ${id}`);
};
</script>
  
<style scoped>
@media (max-width: 768px) { 
.image-gallery {
    overflow-x: auto;
    overflow-y: auto;
    white-space: nowrap;
    
}

.product-list {
    display: flex;
    width: 100%;
    gap: 1.5vw;
    padding: 1vh;
    background: linear-gradient(to bottom, #04040C, #7EC8E3);
}

.card {
    flex: 0 0 auto;
    cursor: pointer;
    border: 0vh solid #6a3030;
    border-radius: 2vw;
    overflow: hidden;
    transition: transform 0.2s;
}

.card:hover {
    transform: scale(1.1);
}

.card img {
    /* max-width: 100%; */
    height: 27vh;
}
}

/* For Big Screens */
@media (min-width: 769px) { 
.image-gallery {
    /* overflow-x: auto; */
    overflow-y: auto;
    white-space: nowrap;
    
}

.product-list {
    gap: 1vw;
    padding: 1vh;
    background: linear-gradient(to bottom, #04040C, #7EC8E3);
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

/* .card img { */
    /* max-width: 100%; */
    /* height: 27vh; */
/* } */
}
</style>
  



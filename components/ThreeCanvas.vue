<template>
    <div id="Main">
        <div id="tshirt" ref="canvasContainer"></div>
        <div class="product-list " ref="productList">
            <TshirtGallery :show3DModel="show3DModel" @selectImage="selectImage" />
        </div>
    </div>
</template>

<script>
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default {
    mounted() {
        this.initThree('tshirt', this.currentModelURL);
    },
    data() {
        return {
            currentModelURL: 'https://backend.abhishekverma.me/static/models/skyTshirt.glb',

            // COLORS
            colors: {
                Frontend: '#7EC8E3',
                Backend: '#7EC8E3',
                Left_Hand: '#04040C',
                Right_Hand: '#04040C',
                // Add more parts as needed
            },
            modelIDs: ['model1', 'model2', 'model3', 'model4', 'model5', 'model6', 'model6']
        };
    },

    methods: {
        selectImage(id) {
            const modelURL = `https://backend.abhishekverma.me/static/models/model_${id}.glb`;

            // Update the currentModelURL with the selected model's URL
            this.currentModelURL = modelURL;

            // Re-initialize the 3D scene with the new model URL
            this.initThree();
        },


        initThree() {
            const container = document.getElementById('tshirt');
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(55, 2, 0.1, 1000);
            // const camera = new THREE.PerspectiveCamera(45, window.width/window.innerHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer();
            renderer.setClearAlpha(0x000000, 0);

            renderer.setSize(container.clientWidth, container.clientHeight);
            container.appendChild(renderer.domElement);


            // Add AxesHelper to the scene
            const axesHelper = new THREE.AxesHelper(5);
            scene.add(axesHelper);

            // Set up gradient background
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.width = 256;
            canvas.height = 256;

            const gradient = context.createLinearGradient(0, 0, 0, canvas.width);
            gradient.addColorStop(0, '#7EC8E3'); // Start color
            gradient.addColorStop(1, '#04040C'); // End color

            context.fillStyle = gradient;
            context.fillRect(0, 0, canvas.height, canvas.width,);

            const gradientTexture = new THREE.CanvasTexture(canvas);
            console.log(gradientTexture)
            scene.background = gradientTexture;

            // Add OrbitControls to the scene
            const controls = new OrbitControls(camera, renderer.domElement);

            // Load the GLB model
            const loader = new GLTFLoader();
            loader.load(
                this.currentModelURL,
                (gltf) => {
                    this.gltf = gltf;
                    // Get bounding box dimensions of the loaded model
                    const boundingBox = new THREE.Box3().setFromObject(gltf.scene);
                    const modelSize = boundingBox.getSize(new THREE.Vector3());

                    // Adjust the camera aspect ratio based on model dimensions
                    const aspect = modelSize.x / modelSize.y;
                    camera.aspect = aspect;
                    camera.updateProjectionMatrix();

                    // Adjust the position, scale, or other properties of the loaded model
                    const scale = 4;
                    gltf.scene.position.set(0, 0, 0);
                    gltf.scene.scale.set(scale, scale, scale);

                    gltf.scene.traverse((child) => {
                        if (child.isMesh) {
                            const partName = child.name;
                            if (partName in this.colors) {
                                const material = new THREE.MeshStandardMaterial({
                                    side: THREE.DoubleSide,
                                    color: this.colors[partName],
                                    metalness: 0.2,
                                });
                                console.log(child.name);

                                child.material = material;
                            }
                        }
                    });

                    console.log('Loaded The model');
                    scene.add(gltf.scene);
                },
                undefined,
                (error) => {
                    console.error('Error loading GLB model', error);
                }
            );

            // Add a listener for container size changes
            const handleResize = () => {
                renderer.setSize(container.clientWidth, container.clientHeight);
                camera.aspect = container.clientWidth / container.clientHeight;
                camera.updateProjectionMatrix();
            };
            window.addEventListener('resize', handleResize);



            // Add ambient light
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Adjust intensity as needed
            scene.add(ambientLight);

            // Add directional light
            const directionalLightF = new THREE.DirectionalLight('#7EC8E3', 4); // Adjust intensity as needed
            directionalLightF.position.set(1, 1, 1).normalize();
            scene.add(directionalLightF);

            const directionalLightB = new THREE.DirectionalLight('#7EC8E3', 4); // Adjust intensity as needed
            directionalLightB.position.set(-1, 1, -1).normalize();
            scene.add(directionalLightB);

            const directionalLightC = new THREE.DirectionalLight('#7EC8E3', 0); // Adjust intensity as needed
            directionalLightC.position.set(0, -0.5, 0).normalize();
            scene.add(directionalLightC);

            camera.position.z = 5;

            const animate = () => {
                requestAnimationFrame(animate);

                if (this.gltf && this.gltf.scene) {
                    this.gltf.scene.rotation.y += 0.01;
                }

                controls.update(); // Update controls
                renderer.render(scene, camera);
            };

            animate();
        },
    },
};
</script>

  
<style scoped>
@media (max-width: 768px) {
    #Main {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }

    #tshirt {
        height: 70vh;
        width: 100%;
        background-color: rgb(30, 30, 30);
    }

    .product-list {
        height: 30vh;
        /* 30% of the viewport height */
        overflow-x: auto;
        /* Enable horizontal scrolling */
        white-space: nowrap;
        display: flex;
        color: rgb(48, 150, 194);

        /* scrollbar customization */
        scrollbar-color: transparent transparent;

        /* Chrome and Safari scrollbar */
        &::-webkit-scrollbar {
            width: 10px;
        }

        &::-webkit-scrollbar-thumb {
            background-color: transparent;
        }

    }

}

/* For Big Screens */
@media (min-width: 769px) {
    #Main {
        display: grid;
        grid-template-columns: 1fr 1fr;
        /* Two equal columns */
        gap: 1rem;
        /* Adjust the gap as needed */
    }

    #tshirt {
        height: 100vh;
        /* Add any additional styling for your T-shirt canvas */
    }

    .product-list {
        height: 100vh;
        overflow: auto;
        /* Add overflow property if needed */
        white-space: nowrap;
        /* Add white-space property if needed */
        scrollbar-color: transparent transparent;
        /* Add scrollbar styling if needed */
    }

    /* Optional: If you want to control the width of the columns individually */
    #tshirt {
        grid-column: 1;
    }

    .product-list {
        grid-column: 2;
    }

    /* Additional Styles for Improved Readability and Structure */
    .grid {
        display: grid;
    }

    .grid-cols-2 {
        grid-template-rows: repeat(2, minmax(0, 1fr));
    }

    .gap-4 {
        gap: 1rem;
    }

    /* You can customize the styling of other elements based on your design */


}</style>
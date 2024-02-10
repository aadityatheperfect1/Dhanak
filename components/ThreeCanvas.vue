<template>
    <div id="tshirt" ref="canvasContainer">
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
            currentModelURL: '/models/Model3.glb',
            // COLORS
            colors: {
                Frontend: '#7EC8E3',
                Backend: '#7EC8E3',
                Left_Hand: '#04040C',
                Right_Hand: '#04040C',
                // Add more parts as needed
            },
            modelIDs: ['Model1', 'Model2', 'Model3', 'Model4', 'Model5', 'Model6', 'Model6']
        };
    },

    methods: {
        selectImage(id) {
            const modelURL = `/models/Model${id}.glb`;
            // Update the currentModelURL with the selected model's URL
            this.currentModelURL = modelURL;
            // Re-initialize the 3D scene with the new model URL
            this.initThree();
        },


        initThree() {
            const container = document.getElementById('tshirt');
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(55, 2, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({
                alpha: true
            });
            renderer.setSize(container.clientWidth, container.clientHeight);
            container.appendChild(renderer.domElement);

            // Add AxesHelper to the scene
            // const axesHelper = new THREE.AxesHelper(5);
            // scene.add(axesHelper);

            // Set up gradient background
            const canvas = document.createElement('canvas');
            canvas.width = 256;
            canvas.height = 256;

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

            const directionalLightC = new THREE.DirectionalLight('#7EC8E3', 4); // Adjust intensity as needed
            directionalLightC.position.set(0, -0.5, 0).normalize();
            scene.add(directionalLightC);

            camera.position.z = 5;

            const animate = () => {
                requestAnimationFrame(animate);

                if (this.gltf && this.gltf.scene) {
                    this.gltf.scene.rotation.y -= 0.01;
                }

                controls.update(); // Update controls
                renderer.render(scene, camera);
            };

            animate();
        },
    },
};
</script>


<style>
/* . {} */
</style>
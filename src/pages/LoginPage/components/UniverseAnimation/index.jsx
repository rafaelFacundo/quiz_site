import React from "react";
import {
    MainContent,
    Canvas
} from "./style";

import { useEffect } from "react";
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
};



export default function UniverseAnimation() {
    useEffect(() => {
        const scene = new THREE.Scene();

        //create a sphere
        //3 is the radius
        //64 and 64 are the segments(faces)
        const geometry = new THREE.SphereGeometry(3, 64, 64);

        //geomtry its just shape
        const material = new THREE.MeshStandardMaterial({
        color: '#00ff83' 
        });

        //sizes
        const sizes = {
        width: window.innerWidth,
        height: window.innerHeight,

        }

        //geometry + material = mesh
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        //light
        const light = new THREE.PointLight(0xffffff,1,100)
        light.position.set(0,10,10)
        scene.add(light)

        //camera
        //angle, aspectRatio
        const camera = new THREE.PerspectiveCamera(45, sizes.width/sizes.height, 0.1,100);
        camera.position.z = 20;
        scene.add(camera);


        //renderer
        const canvas = document.querySelector('#THREEJSCANVA');
        const renderer = new THREE.WebGL1Renderer({canvas});
        //define how big and where render
        renderer.setSize(800, 600);
        renderer.setPixelRatio(2); 
        renderer.render(scene, camera);

        //controls
        const controls = new OrbitControls(camera, canvas)
        controls.enableDamping = true;
        controls.enablePan = false;
        controls.enableZoom = false;
        controls.autoRotate = true;
        controls.autoRotateSpeed = 5;

        //resize
        window.addEventListener('resize', () => {
        sizes.width = window.innerWidth;
        sizes.height = window.innerHeight;

        camera.aspect= sizes.width/sizes.height;
        camera.updateProjectionMatrix();
        renderer.setSize(sizes.width, sizes.height)
        })

        const loop = () => {
        controls.update();
        renderer.render(scene,camera);
        window.requestAnimationFrame(loop);
        }

        loop()
    
    }, []);
    
    return(
        <MainContent>
            <Canvas id="THREEJSCANVA"></Canvas>
        </MainContent>
    );
}
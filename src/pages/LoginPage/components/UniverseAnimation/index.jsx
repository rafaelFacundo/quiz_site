import React from "react";
import { useEffect } from "react";
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import sunTextureImage from "./textures/sun_texture.jpg";
import earthTextureImage from "./textures/earth_texture.jpg";
import mercuryTextureImage from "./textures/mercury_texture.jpeg";
import venusTextureImage from "./textures/venus_texture.jpg";
import marsTextureImage from "./textures/mars_texture.jpeg";
import jupiterTextureImage from "./textures/jupiter_texture.jpg";
import saturnTextureImage from "./textures/saturn_texture.jpg";
import uranusTextureImage from "./textures/uranus_texture.jpg";
import neptuneTextureImage from "./textures/neptune_texture.jpg";

import {
    MainContent,
    Canvas
} from "./style";



const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
};



export default function UniverseAnimation() {
    useEffect(() => {
        const textureLoader = new THREE.TextureLoader()
        const sizes = {
            width: 800,
            height: 600
        }
        const scene = new THREE.Scene();

        
        const earthTexture = textureLoader.load('https://media.istockphoto.com/id/182058785/photo/world-topographic-map.jpg?s=612x612&w=0&k=20&c=eWrcGjNB9o-KrzW4TC2yxUII7k5E26QIqlN3JEJu1e4=', (err) => {console.log(err)});
        const material = new THREE.MeshBasicMaterial({map: earthTexture});
        const SphereGeometry = new THREE.SphereGeometry(1.5,64,64)
        SphereGeometry.translate(0,0,-15)
        const SphereMaterial = new THREE.MeshStandardMaterial({
            color: '#00ff83'
        });
        const SphereMesh = new THREE.Mesh(SphereGeometry, material);
        
        scene.add(SphereMesh);

        const mercurySphere = new THREE.SphereGeometry(0.5, 64,64);
        mercurySphere.translate(0,0, -5);
        const mercuryTexture = textureLoader.load(mercuryTextureImage);
        const mercuryMaterial = new THREE.MeshBasicMaterial({map:mercuryTexture});
        const mercuryMesh = new THREE.Mesh(mercurySphere, mercuryMaterial);
        scene.add(mercuryMesh);

        const venusSphere = new THREE.SphereGeometry(1,64,64);
        venusSphere.translate(0,0,-10);
        const venusTexture = textureLoader.load(venusTextureImage);
        const venusMaterial = new THREE.MeshBasicMaterial({map: venusTexture})
        const venusMesh = new THREE.Mesh(venusSphere, venusMaterial);
        scene.add(venusMesh)

        const marsSphere = new THREE.SphereGeometry(1,64,64);
        marsSphere.translate(0,0,-20);
        const marsTexture = textureLoader.load(marsTextureImage);
        const marsMaterial = new THREE.MeshBasicMaterial({map: marsTexture})
        const marsMesh = new THREE.Mesh(marsSphere, marsMaterial);
        scene.add(marsMesh)

        const jupiterSphere = new THREE.SphereGeometry(2.5,64,64);
        jupiterSphere.translate(0,0,-25);
        const jupiterTexture = textureLoader.load(jupiterTextureImage);
        const jupiterMaterial = new THREE.MeshBasicMaterial({map: jupiterTexture});
        const jupiterMesh = new THREE.Mesh(jupiterSphere, jupiterMaterial);
        scene.add(jupiterMesh)

        const saturnSphere = new THREE.SphereGeometry(3,64,64);
        saturnSphere.translate(0,0,-35);
        const saturnTexture = textureLoader.load(saturnTextureImage);
        const saturnMaterial = new THREE.MeshBasicMaterial({map: saturnTexture});
        const saturnMesh = new THREE.Mesh(saturnSphere, saturnMaterial);
        scene.add(saturnMesh)

        const uranusSphere = new THREE.SphereGeometry(2,64,64);
        uranusSphere.translate(0,0,-44);
        const uranusTexture = textureLoader.load(uranusTextureImage);
        const uranusMaterial = new THREE.MeshBasicMaterial({map: uranusTexture});
        const uranusMesh = new THREE.Mesh(uranusSphere, uranusMaterial);
        scene.add(uranusMesh)

        const neptuneSphere = new THREE.SphereGeometry(2.3,64,64);
        neptuneSphere.translate(0,0,-50);
        const neptuneTexture = textureLoader.load(neptuneTextureImage);
        const neptuneMaterial = new THREE.MeshBasicMaterial({map: neptuneTexture})
        const neptuneMesh = new THREE.Mesh(neptuneSphere, neptuneMaterial);
        scene.add(neptuneMesh)

        const sunTexture = textureLoader.load(sunTextureImage);

        const SunSphere = new THREE.SphereGeometry(3,64,64);
        const SunMaterial = new THREE.MeshStandardMaterial({
            color: '#fdf909'
        });
        const sunTextureMaterial = new THREE.MeshBasicMaterial({map: sunTexture});
        const SunMesh = new THREE.Mesh(SunSphere, sunTextureMaterial);
        
        scene.add(SunMesh);
    

        

        const PointLight = new THREE.PointLight(0xffffff,1,100);
        PointLight.position.set(0,10,10);
        scene.add(PointLight);

        const camera = new THREE.PerspectiveCamera(45, sizes.width/sizes.height, 0.1, 100);
        camera.position.z = 80;
        camera.position.y = 20;
        scene.add(camera);

        const canvas = document.querySelector("#THREEJSCANVA");
        const renderer = new THREE.WebGL1Renderer({canvas})
        renderer.setSize(800,600);
        renderer.setPixelRatio(2);
        renderer.render(scene, camera);

        const controls = new OrbitControls(camera, canvas);
        controls.enableDamping = true;
        controls.enablePan = false;
        controls.enableZoom = false;
        controls.autoRotate = true;
        controls.autoRotateSpeed = 5;

        const loop = () => {
            controls.update();
            renderer.render(scene, camera);
            window.requestAnimationFrame(loop);
        }
        
        loop();

    
    }, []);
    
    return(
        <MainContent>
            <Canvas id="THREEJSCANVA"></Canvas>
        </MainContent>
    );
}
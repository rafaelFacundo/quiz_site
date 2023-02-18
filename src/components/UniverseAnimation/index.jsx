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
import universeTextureImage from "./textures/frame.png";

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
            height: window.innerHeight
        }
        const universeBackgroundTexture = textureLoader.load(universeTextureImage);
        const scene = new THREE.Scene();
        scene.background = universeBackgroundTexture;

        const general3DObject = new THREE.Object3D();
        general3DObject.translateX(-10);
        general3DObject.translateY(-5);
        general3DObject.translateZ(30);
        general3DObject.rotateX(0.5)
        scene.add(general3DObject);

        //earth
        const earthTexture = textureLoader.load(earthTextureImage, (err) => {console.log(err)});
        const earthMaterial = new THREE.MeshBasicMaterial({map: earthTexture});
        const SphereGeometry = new THREE.SphereGeometry(1.5,64,64)
        SphereGeometry.translate(0,0,-20)
        const SphereMesh = new THREE.Mesh(SphereGeometry, earthMaterial);
        const earthObject = new THREE.Object3D();
        earthObject.add(SphereMesh);
        general3DObject.add(earthObject);
        //scene.add(SphereMesh);

        //mercury
        const mercurySphere = new THREE.SphereGeometry(0.5, 64,64);
        mercurySphere.translate(0,0, -10);
        const mercuryTexture = textureLoader.load(mercuryTextureImage);
        const mercuryMaterial = new THREE.MeshBasicMaterial({map:mercuryTexture});
        const mercuryMesh = new THREE.Mesh(mercurySphere, mercuryMaterial);
        const mercuryObject = new THREE.Object3D();
        
        mercuryObject.add(mercuryMesh);
        general3DObject.add(mercuryObject);
        //scene.add(mercuryMesh);

        const venusSphere = new THREE.SphereGeometry(1,64,64);
        venusSphere.translate(0,0,-15);
        const venusTexture = textureLoader.load(venusTextureImage);
        const venusMaterial = new THREE.MeshBasicMaterial({map: venusTexture})
        const venusMesh = new THREE.Mesh(venusSphere, venusMaterial);
        const venusObject = new THREE.Object3D();
        venusObject.add(venusMesh);
        general3DObject.add(venusObject);

        const marsSphere = new THREE.SphereGeometry(1,64,64);
        marsSphere.translate(0,0,-25);
        const marsTexture = textureLoader.load(marsTextureImage);
        const marsMaterial = new THREE.MeshBasicMaterial({map: marsTexture})
        const marsMesh = new THREE.Mesh(marsSphere, marsMaterial);
        const marsObject = new THREE.Object3D();
        marsObject.add(marsMesh);
        general3DObject.add(marsObject);
        //scene.add(marsMesh)

        const jupiterSphere = new THREE.SphereGeometry(2.5,64,64);
        jupiterSphere.translate(0,0,-30);
        const jupiterTexture = textureLoader.load(jupiterTextureImage);
        const jupiterMaterial = new THREE.MeshBasicMaterial({map: jupiterTexture});
        const jupiterMesh = new THREE.Mesh(jupiterSphere, jupiterMaterial);
        const jupiterObject = new THREE.Object3D();
        jupiterObject.add(jupiterMesh);
        general3DObject.add(jupiterObject);
        //scene.add(jupiterMesh)

        const saturnSphere = new THREE.SphereGeometry(3,64,64);
        saturnSphere.translate(0,0,-40);
        const saturnTexture = textureLoader.load(saturnTextureImage);
        const saturnMaterial = new THREE.MeshBasicMaterial({map: saturnTexture});
        const saturnMesh = new THREE.Mesh(saturnSphere, saturnMaterial);
        const saturnObject = new THREE.Object3D();
        saturnObject.add(saturnMesh);
        //scene.add(saturnObject);
        //scene.add(saturnMesh)

        const uranusSphere = new THREE.SphereGeometry(2,64,64);
        uranusSphere.translate(0,0,-50);
        const uranusTexture = textureLoader.load(uranusTextureImage);
        const uranusMaterial = new THREE.MeshBasicMaterial({map: uranusTexture});
        const uranusMesh = new THREE.Mesh(uranusSphere, uranusMaterial);
        const uranusObject = new THREE.Object3D();
        uranusObject.add(uranusMesh);
        general3DObject.add(uranusObject);
        //scene.add(uranusMesh)

        const neptuneSphere = new THREE.SphereGeometry(2.3,64,64);
        neptuneSphere.translate(0,0,-55);
        const neptuneTexture = textureLoader.load(neptuneTextureImage);
        const neptuneMaterial = new THREE.MeshBasicMaterial({map: neptuneTexture})
        const neptuneMesh = new THREE.Mesh(neptuneSphere, neptuneMaterial);
        const neptuneObject = new THREE.Object3D();
        neptuneObject.add(neptuneMesh);
        general3DObject.add(neptuneObject);
        //scene.add(neptuneMesh)

        const sunTexture = textureLoader.load(sunTextureImage);
        const SunSphere = new THREE.SphereGeometry(7,64,64);
        const sunTextureMaterial = new THREE.MeshBasicMaterial({map: sunTexture});
        const SunMesh = new THREE.Mesh(SunSphere, sunTextureMaterial);
        general3DObject.add(SunMesh);
        

        const PointLight = new THREE.PointLight(0xffffff,1,1000);
        PointLight.position.set(0,0,0);
        scene.add(PointLight);

        const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height, 0.1, 1000);
        camera.position.z = 80;
        camera.position.y = -10;
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
        

        const loop = () => {
            mercuryObject.rotateY(0.03);
            venusObject.rotateY(0.02);
            earthObject.rotateY(0.015);
            marsObject.rotateY(0.009);
            jupiterObject.rotateY(0.008);
            saturnObject.rotateY(0.007);
            uranusObject.rotateY(0.006);
            neptuneObject.rotateY(0.005);
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
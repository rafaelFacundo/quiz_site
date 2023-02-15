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
        const textureLouder = new THREE.TextureLoader()
        const sizes = {
            width: 800,
            height: 600
        }
        const scene = new THREE.Scene();

        
        const earthTexture = textureLouder.load('https://media.istockphoto.com/id/182058785/photo/world-topographic-map.jpg?s=612x612&w=0&k=20&c=eWrcGjNB9o-KrzW4TC2yxUII7k5E26QIqlN3JEJu1e4=', (err) => {console.log(err)});
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
        const mercuryMaterial = new THREE.MeshStandardMaterial({
            color:'#424242'
        })
        const mercuryMesh = new THREE.Mesh(mercurySphere, mercuryMaterial);
        scene.add(mercuryMesh);

        const venusSphere = new THREE.SphereGeometry(1,64,64);
        venusSphere.translate(0,0,-10);
        const venusMaterial = new THREE.MeshStandardMaterial({
            color:'#cf4d02'
        })
        const venusMesh = new THREE.Mesh(venusSphere, venusMaterial);
        scene.add(venusMesh)

        const marsSphere = new THREE.SphereGeometry(1,64,64);
        marsSphere.translate(0,0,-20);
        const marsMaterial = new THREE.MeshStandardMaterial({
            color:'#ca0000'
        })
        const marsMesh = new THREE.Mesh(marsSphere, marsMaterial);
        scene.add(marsMesh)

        const jupiterSphere = new THREE.SphereGeometry(2.5,64,64);
        jupiterSphere.translate(0,0,-25);
        const jupiterMaterial = new THREE.MeshStandardMaterial({
            color:'#ffc811'
        })
        const jupiterMesh = new THREE.Mesh(jupiterSphere, jupiterMaterial);
        scene.add(jupiterMesh)

        const saturnSphere = new THREE.SphereGeometry(3,64,64);
        saturnSphere.translate(0,0,-35);
        const saturnMaterial = new THREE.MeshStandardMaterial({
            color:'#d1ce0c'
        })
        const saturnMesh = new THREE.Mesh(saturnSphere, saturnMaterial);
        scene.add(saturnMesh)

        const uranSphere = new THREE.SphereGeometry(2,64,64);
        uranSphere.translate(0,0,-44);
        const uranMaterial = new THREE.MeshStandardMaterial({
            color:'#0cd1b7'
        })
        const uranMesh = new THREE.Mesh(uranSphere, uranMaterial);
        scene.add(uranMesh)

        const neptuneSphere = new THREE.SphereGeometry(2.3,64,64);
        neptuneSphere.translate(0,0,-50);
        const neptuneMaterial = new THREE.MeshStandardMaterial({
            color:'#002fff'
        })
        const neptuneMesh = new THREE.Mesh(neptuneSphere, neptuneMaterial);
        scene.add(neptuneMesh)

        const sunTexture = textureLouder.load('https://images-repo-resized.s3-eu-west-1.amazonaws.com/2020/05/20/f48f469bd71cd046d3e9cb340fb608ce_large.png')

        const SunSphere = new THREE.SphereGeometry(3,64,64);
        const SunMaterial = new THREE.MeshStandardMaterial({
            color: '#fdf909'
        });
        const sunTextureMaterial = new THREE.MeshBasicMaterial({map: sunTexture});
        const SunMesh = new THREE.Mesh(SunSphere, SunMaterial);
        
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
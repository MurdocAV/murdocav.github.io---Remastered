import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import * as THREE from 'three';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  )
})

/* 

ThreeJs custom waves
Original script by ThreeJS : https://threejs.org/examples/canvas_particles_waves.html

*/

var SEPARATION = 100, AMOUNTX = 30, AMOUNTY = 30;

var container;
var camera, scene, renderer;

var particles, particle, count = 0;

function init() {

	container = document.createElement( 'div' );
	document.body.appendChild( container );
	if(container) {
    	container.className += container.className ? ' waves' : 'waves';
	}

	camera = new THREE.PerspectiveCamera( 120, window.innerWidth / window.innerHeight, 1, 10000 );
	camera.position.y = 180; //changes how far back you can see i.e the particles towards horizon
	camera.position.z = 20; //This is how close or far the particles are seen
	
	camera.rotation.x = 0.35;
	
	scene = new THREE.Scene();

	particles = new Array();

	var PI2 = Math.PI * 2;
	var material = new THREE.SpriteMaterial( {

		color: 0x7e1918, //changes color of particles
		program: function ( context ) {

			context.beginPath();
			context.arc( 0, 0, 0.5, 0, PI2, true );
			context.fill();

		}


	} );

	// var heartShape = new THREE.Shape();

	// heartShape.moveTo( 25, 25 );
	// heartShape.bezierCurveTo( 25, 25, 20, 0, 0, 0 );
	// heartShape.bezierCurveTo( 30, 0, 30, 35,30,35 );
	// heartShape.bezierCurveTo( 30, 55, 10, 77, 25, 95 );
	// heartShape.bezierCurveTo( 60, 77, 80, 55, 80, 35 );
	// heartShape.bezierCurveTo( 80, 35, 80, 0, 50, 0 );
	// heartShape.bezierCurveTo( 35, 0, 25, 25, 25, 25 );
	
	// var extrudeSettings = { amount: 8, bevelEnabled: true, bevelSegments: 2, steps: 2, bevelSize: 1, bevelThickness: 1 };
	
	// var geometry = new THREE.ExtrudeGeometry( heartShape, extrudeSettings );
	
	// var material = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial() );

	var i = 0;

	for ( var ix = 0; ix < AMOUNTX; ix ++ ) {

		for ( var iy = 0; iy < AMOUNTY; iy ++ ) {

			particle = particles[ i ++ ] = new THREE.Mesh(new THREE.SphereGeometry(0,0.0,0.1),
			new THREE.MeshBasicMaterial({color:0xff0000}) );

			particle.position.x = ix * SEPARATION - ( ( AMOUNTX * SEPARATION ) / 2 );
			particle.position.z = iy * SEPARATION - ( ( AMOUNTY * SEPARATION ) - 10 );
			scene.add( particle );

		}

	}

	renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.setClearColor( 0x3B3C40, 1);
	container.appendChild( renderer.domElement );

	window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {

	windowHalfX = window.innerWidth / 2;
	windowHalfY = window.innerHeight / 2;

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

}

function animate() {

	requestAnimationFrame( animate );

	render();

}

function render() {

	var i = 0;

	for ( var ix = 0; ix < AMOUNTX; ix ++ ) {

		for ( var iy = 0; iy < AMOUNTY; iy ++ ) {

			particle = particles[ i++ ];
			particle.position.y = ( Math.sin( ( ix + count ) * 0.5 ) * 15 ) + ( Math.sin( ( iy + count ) * 0.5 ) * 15 );
			particle.scale.x = particle.scale.y = ( Math.sin( ( ix + count ) * 0.5 ) + 2 ) * 4 + ( Math.sin( ( iy + count ) * 0.5 ) + 1 ) * 4;

		}

	}

	renderer.render( scene, camera );

	// This increases or decreases speed
	count += 0.065;

}

init();
animate();
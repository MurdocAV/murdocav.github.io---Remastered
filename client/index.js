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

const SEPARATION = 100, AMOUNTX = 60, AMOUNTY = 60;

let container;
let camera, scene, renderer;

let particles, particle, count = 0;

function init() {

	container = document.createElement( 'div' );
	document.body.appendChild( container );
	if(container) {
    	container.className += container.className ? ' waves' : 'waves';
	}

	camera = new THREE.PerspectiveCamera( 120, window.innerWidth / window.innerHeight, 1, 10000 );
	camera.position.y = 180; //changes how far back you can see i.e the particles towards horizon
	camera.position.z = 20; //This is how close or far the particles are seen
	
	camera.rotation.x = 0.2;
	
	scene = new THREE.Scene();

	particles = new Array();

	let PI2 = Math.PI * 2;

let x = 0, y = 0;

// let triangleShape = new THREE.Shape();
// triangleShape.moveTo( 20, 5 );
// triangleShape.lineTo( 8, 20 );
// triangleShape.lineTo( 25, 20 );
// triangleShape.lineTo( 20, 5 ); // close path

// let geometry = new THREE.ShapeGeometry( triangleShape );
// let material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// let mesh = new THREE.Mesh( geometry, material ) ;
// scene.add( mesh );

// let i = 0;


// let smileyShape = new THREE.Shape();
// smileyShape.moveTo( 80, 40 );
// smileyShape.absarc( 40, 40, 40, 0, Math.PI * 2, false );
// let smileyEye1Path = new THREE.Path();
// smileyEye1Path.moveTo( 35, 20 );
// smileyEye1Path.absellipse( 25, 20, 10, 10, 0, Math.PI * 2, true );
// smileyShape.holes.push( smileyEye1Path );
// let smileyEye2Path = new THREE.Path();
// smileyEye2Path.moveTo( 65, 20 );
// smileyEye2Path.absarc( 55, 20, 10, 0, Math.PI * 2, true );
// smileyShape.holes.push( smileyEye2Path );
// let smileyMouthPath = new THREE.Path();
// smileyMouthPath.moveTo( 20, 40 );
// smileyMouthPath.quadraticCurveTo( 40, 60, 60, 40 );
// smileyMouthPath.bezierCurveTo( 70, 45, 70, 50, 60, 60 );
// smileyMouthPath.quadraticCurveTo( 40, 80, 20, 60 );
// smileyMouthPath.quadraticCurveTo( 5, 50, 20, 40 );
// smileyShape.holes.push( smileyMouthPath );

// let geometry = new THREE.ShapeGeometry( smileyShape );
// let material = new THREE.MeshBasicMaterial( { color: 0xffffff} );
// geometry.scale(0.025,0.025,0.025)
// geometry.rotateZ(Math.PI)


// let fishShape = new THREE.Shape();
// fishShape.moveTo( x, y );
// fishShape.quadraticCurveTo( x + 50, y - 80, x + 90, y - 10 );
// fishShape.quadraticCurveTo( x + 100, y - 10, x + 115, y - 40 );
// fishShape.quadraticCurveTo( x + 115, y, x + 115, y + 40 );
// fishShape.quadraticCurveTo( x + 100, y + 10, x + 90, y + 10 );
// fishShape.quadraticCurveTo( x + 50, y + 80, x, y );

var circleRadius = 40;
var circleShape = new THREE.Shape();
circleShape.moveTo( 0, circleRadius );
circleShape.quadraticCurveTo( circleRadius, circleRadius, circleRadius, 0 );
circleShape.quadraticCurveTo( circleRadius, - circleRadius, 0, - circleRadius );
circleShape.quadraticCurveTo( - circleRadius, - circleRadius, - circleRadius, 0 );
circleShape.quadraticCurveTo( - circleRadius, circleRadius, 0, circleRadius );


let geometry = new THREE.ShapeGeometry( circleShape );
let material = new THREE.MeshBasicMaterial( { color: 0x260104} );

geometry.scale(0.025,0.025,0.025)
geometry.rotateZ(Math.PI)

let i = 0
let mesh = new THREE.Mesh( geometry, material ) ;

	for ( let ix = 0; ix < AMOUNTX; ix ++ ) {

		for ( let iy = 0; iy < AMOUNTY; iy ++ ) {

			particle = particles[ i ++ ] = new THREE.Mesh(geometry,
				material);

			particle.position.x = ix * SEPARATION - ( ( AMOUNTX * SEPARATION ) / 2 );
			particle.position.z = iy * SEPARATION - ( ( AMOUNTY * SEPARATION ) - 10 );
			scene.add( particle );

		}

	}

	renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.setClearColor( 0x0D0D0D, 1);
	container.appendChild( renderer.domElement );

	window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {
	
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize( window.innerWidth, window.innerHeight );
		init()
		animate()
}

function animate() {

	requestAnimationFrame( animate );

	render();

}

function render() {

	let i = 0;

	for ( let ix = 0; ix < AMOUNTX; ix ++ ) {

		for ( let iy = 0; iy < AMOUNTY; iy ++ ) {

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
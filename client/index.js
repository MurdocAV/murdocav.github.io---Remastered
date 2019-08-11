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

const SEPARATION = 2100, AMOUNTX = 20, AMOUNTY = 20;

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

var x = 0, y = 0;

var heartShape = new THREE.Shape();

heartShape.moveTo( x + 5, y + 5 );
heartShape.bezierCurveTo( x + 5, y + 5, x + 4, y, x, y );
heartShape.bezierCurveTo( x - 6, y, x - 6, y + 7,x - 6, y + 7 );
heartShape.bezierCurveTo( x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19 );
heartShape.bezierCurveTo( x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7 );
heartShape.bezierCurveTo( x + 16, y + 7, x + 16, y, x + 10, y );
heartShape.bezierCurveTo( x + 7, y, x + 5, y + 5, x + 5, y + 5 );

var geometry = new THREE.ShapeGeometry( heartShape );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var mesh = new THREE.Mesh( geometry, material ) ;
scene.add( mesh );



var triangleShape = new THREE.Shape();
triangleShape.moveTo( 20, 5 );
triangleShape.lineTo( 8, 20 );
triangleShape.lineTo( 25, 20 );
triangleShape.lineTo( 20, 5 ); // close path

var geometry = new THREE.ShapeGeometry( triangleShape );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var mesh = new THREE.Mesh( geometry, material ) ;
scene.add( mesh );

var i = 0;


var smileyShape = new THREE.Shape();
smileyShape.moveTo( 80, 40 );
smileyShape.absarc( 40, 40, 40, 0, Math.PI * 2, false );
var smileyEye1Path = new THREE.Path();
smileyEye1Path.moveTo( 35, 20 );
smileyEye1Path.absellipse( 25, 20, 10, 10, 0, Math.PI * 2, true );
smileyShape.holes.push( smileyEye1Path );
var smileyEye2Path = new THREE.Path();
smileyEye2Path.moveTo( 65, 20 );
smileyEye2Path.absarc( 55, 20, 10, 0, Math.PI * 2, true );
smileyShape.holes.push( smileyEye2Path );
var smileyMouthPath = new THREE.Path();
smileyMouthPath.moveTo( 20, 40 );
smileyMouthPath.quadraticCurveTo( 40, 60, 60, 40 );
smileyMouthPath.bezierCurveTo( 70, 45, 70, 50, 60, 60 );
smileyMouthPath.quadraticCurveTo( 40, 80, 20, 60 );
smileyMouthPath.quadraticCurveTo( 5, 50, 20, 40 );
smileyShape.holes.push( smileyMouthPath );

var geometry = new THREE.ShapeGeometry( smileyShape );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var xAxis = new THREE.Vector3(1,0,0);
rotateAroundWorldAxis(mesh, xAxis, Math.PI / 180);

var mesh = new THREE.Mesh( geometry, material ) ;

	for ( var ix = 0; ix < AMOUNTX; ix ++ ) {

		for ( var iy = 0; iy < AMOUNTY; iy ++ ) {

			particle = particles[ i ++ ] = new THREE.Mesh(geometry,
				material);

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
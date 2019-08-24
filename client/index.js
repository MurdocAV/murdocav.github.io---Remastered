import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import * as THREE from 'three'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import pageReducer from './reducer.js'

const store = createStore(pageReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  )
})

/* Code below is for ThreeJS animation & background */
/* TODO --> Set time out for reseting all three animations to remove lag from resizing window. */
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

	var circleRadius = 40;
	var circleShape = new THREE.Shape();
	circleShape.moveTo( 0, circleRadius );
	circleShape.quadraticCurveTo( circleRadius, circleRadius, circleRadius, 0 );
	circleShape.quadraticCurveTo( circleRadius, - circleRadius, 0, - circleRadius );
	circleShape.quadraticCurveTo( - circleRadius, - circleRadius, - circleRadius, 0 );
	circleShape.quadraticCurveTo( - circleRadius, circleRadius, 0, circleRadius );


	let geometry = new THREE.ShapeGeometry( circleShape );
	let material = new THREE.MeshBasicMaterial( { color: 0xde1738} );

	geometry.scale(0.025,0.025,0.025)
	geometry.rotateZ(Math.PI)

	let i = 0

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
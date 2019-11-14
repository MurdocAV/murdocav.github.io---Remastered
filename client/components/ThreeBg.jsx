import * as THREE from 'three'

function background (bgColor, shapeColor) { // Hex values only for params

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
    camera.position.y = 180; // Changes how far back you can see i.e the particles towards horizon
    camera.position.z = 20; // This is how close or far the particles are seen
    
    camera.rotation.x = 0.2;
    
    scene = new THREE.Scene();

    particles = new Array();

    // Sphere shape made of verticies inside a cube
    const verticesOfCube = [
    -1, -1, -1,    1, -1, -1,    1,  1, -1,    -1,  1, -1,
    -1, -1,  1,    1, -1,  1,    1,  1,  1,    -1,  1,  1,
    ];
  
    const indicesOfFaces = [
    2, 1, 0,    0, 3, 2,
    0, 4, 7,    7, 3, 0,
    0, 1, 5,    5, 4, 0,
    1, 2, 6,    6, 5, 1,
    2, 3, 7,    7, 6, 2,
    4, 5, 6,    6, 7, 4,
    ];

    const radius = 7;
    const detail = 2;
    const geometry = new THREE.PolyhedronBufferGeometry(verticesOfCube, indicesOfFaces, radius, detail);

    let material = new THREE.MeshBasicMaterial({color: shapeColor});

    geometry.scale(0.045,0.045,0.045)
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

    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize( window.innerWidth, window.innerHeight );
    container.appendChild( renderer.domElement );
    window.addEventListener( 'resize', onWindowResize, false );

  }

  function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize( window.innerWidth, window.innerHeight );
      animate()
      return
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
}

export default background
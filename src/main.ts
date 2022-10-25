import * as THREE from "three";
export default function init() {
  let scene = new THREE.Scene();

  let camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.1,
    100
  );

window.onresize = onResize
function onResize(){
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
}
const stargroup = new THREE.Group()
function starfield(){

    Array(200).fill(null).forEach(loop => {
        let [x,y,z] = Array(3).fill(null).map(el => Math.random() * 50 - 25)

        let star = new THREE.Mesh(new THREE.SphereGeometry(0.1), new THREE.MeshBasicMaterial({wireframe: true}))

        star.position.set(x,y,z)

    stargroup.add(star)
        


    })
    scene.add(stargroup)
}

  camera.position.set(0, 0, 8);

  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };
  let renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: document.getElementById("bg") as HTMLCanvasElement,
  });
  renderer.setSize(sizes.width, sizes.height);

  const shape = new THREE.Mesh(
    new THREE.TorusKnotGeometry(),
    new THREE.MeshBasicMaterial({ wireframe: true })
  );

  scene.add(shape);

  function tick() {
    stargroup.rotateY(-0.0005)
    shape.rotateY(0.01);
    requestAnimationFrame(tick);
    renderer.render(scene, camera);
  }
  starfield()
  tick();
}
// init();

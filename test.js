let wood;

function animate() {
  requestAnimationFrame(animate);

  if (wood) {
    wood.rotation.x += 0.01;
    wood.rotation.y += 0.02;
  }

  renderer.render(scene, camera);
}
const camera = new THREE.PerspectiveCamera(
  70,
  window.innerWidth / window.innerHeight,
  0.01,
  10
);

camera.position.z = 5;
//camera.position.z = 250;

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
const material = new THREE.MeshNormalMaterial();

const mesh = new THREE.Mesh(geometry, material);
//scene.add(mesh);

const ambientLight = new THREE.AmbientLight(0xcccccc, 0.9);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 0.8);
camera.add(pointLight);
scene.add(camera);

var manager = new THREE.LoadingManager();

var onProgress = function(xhr) {
  if (xhr.lengthComputable) {
    var percentComplete = (xhr.loaded / xhr.total) * 100;
    console.log(Math.round(percentComplete, 2) + "% downloaded");
  }
};

var onError = function() {};

new THREE.MTLLoader(manager)
  .setPath("")
  .load("WoodLog_Moss.mtl", function(materials) {
    materials.preload();

    new THREE.OBJLoader(manager)
      .setMaterials(materials)
      .setPath("")
      .load(
        "WoodLog_Moss.obj",
        function(object) {
          //object.position.y = -95;
          wood = object;
          scene.add(object);
        },
        onProgress,
        onError
      );
  });

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

animate();

// JavaScript Document
function main() {
    const canvas = document.querySelector("#three-js-cube");
    const renderer = new THREE.WebGLRenderer({canvas});
    
    const fov = 75;
    const aspect = 2;
    const near = 0.1;
    const far = 5;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far); 
    camera.position.z = 2;
    
    const scene = new THREE.Scene();
    
    {
        const color = 0xFFFFFF;
        const intensity = .8;
        const light = new THREE.DirectionalLight(color, intensity);
        
        light.position.set(-1, 2, 4);
        scene.add(light);
    }
    
    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    const geometry = new THREE.BoxGeometry(boxWidth, boxDepth, boxHeight);
    
    const material = new THREE.MeshPhongMaterial({color: 0x44aa88});
    
    const cube = new THREE.Mesh(geometry, material);
    
    scene.add(cube);
    
    function resizeRendererToDisplay(renderer) {
        const canvas = renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
            renderer.setSize(width, height, false);
        }
        return needResize;
    }
    
    function render(time) {
    time *= 0.001; //convert time to seconds
        
    if(resizeRendererToDisplay(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
    }
        
    cube.rotation.x = time;
    cube.rotation.y = time;
    
    renderer.render(scene, camera);
    
    requestAnimationFrame(render);
}
requestAnimationFrame(render);
}
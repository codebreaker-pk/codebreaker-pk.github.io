// three-animations.js - 3D animations using Three.js

document.addEventListener('DOMContentLoaded', function() {
    // Initialize hero animation if canvas exists
    if (document.getElementById('hero-canvas')) {
      initHeroAnimation();
    }
    
    // Initialize skills animation if canvas exists
    if (document.getElementById('skills-canvas')) {
      initSkillsAnimation();
    }
  });
  
  // Hero Section Animation
  function initHeroAnimation() {
    const canvas = document.getElementById('hero-canvas');
    
    // Create Scene
    const scene = new THREE.Scene();
    
    // Create Camera
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.z = 5;
    
    // Create Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true
    });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    
    // Create a Sphere Geometry
    const geometry = new THREE.SphereGeometry(2, 64, 64);
    
    // Create Material
    const material = new THREE.MeshBasicMaterial({
      color: 0x6C63FF,
      wireframe: true
    });
    
    // Create Mesh
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
    
    // Add Ambient Light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    // Animation Loop
    function animate() {
      requestAnimationFrame(animate);
      
      sphere.rotation.x += 0.005;
      sphere.rotation.y += 0.005;
      
      renderer.render(scene, camera);
    }
    
    // Handle Window Resize
    window.addEventListener('resize', function() {
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    });
    
    animate();
  }
  
  // Skills Section 3D Word Cloud
  function initSkillsAnimation() {
    const canvas = document.getElementById('skills-canvas');
    
    // Create Scene
    const scene = new THREE.Scene();
    
    // Create Camera
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.z = 15;
    
    // Create Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true
    });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    
    // Create a Group to hold all meshes
    const group = new THREE.Group();
    scene.add(group);
    
    // Array of skills
    const skills = [
      'Python', 'Java', 'JavaScript', 'HTML/CSS', 'React',
      'Solidity', 'SQL', 'Blockchain', 'Data Science',
      'Machine Learning', 'Web3.js', 'Git', 'TensorFlow'
    ];
    
    // Create spheres for each skill
    skills.forEach((skill, index) => {
      const geometry = new THREE.SphereGeometry(0.5, 32, 32);
      
      // Create a gradient color based on position
      const color = new THREE.Color(
        0.5 + Math.random() * 0.5,
        0.5 + Math.random() * 0.5,
        0.5 + Math.random() * 0.5
      );
      
      const material = new THREE.MeshBasicMaterial({ color: color });
      const mesh = new THREE.Mesh(geometry, material);
      
      // Position randomly in a spherical pattern
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      const radius = 8;
      
      mesh.position.x = radius * Math.sin(phi) * Math.cos(theta);
      mesh.position.y = radius * Math.sin(phi) * Math.sin(theta);
      mesh.position.z = radius * Math.cos(phi);
      
      // Add to group
      group.add(mesh);
    });
    
    // Animation Loop
    function animate() {
      requestAnimationFrame(animate);
      
      group.rotation.x += 0.003;
      group.rotation.y += 0.003;
      
      renderer.render(scene, camera);
    }
    
    // Handle Window Resize
    window.addEventListener('resize', function() {
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    });
    
    animate();
  }
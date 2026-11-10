import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import type { Flavor } from '../data/brandData';
import { RotateCw, Sparkles, Move3d } from 'lucide-react';
import { playCanOpenFizz } from '../utils/audio';

interface Can3DViewerProps {
  flavor: Flavor;
  className?: string;
  interactive?: boolean;
  height?: number | string;
  onCanClick?: () => void;
}

export const Can3DViewer: React.FC<Can3DViewerProps> = ({
  flavor,
  className = '',
  interactive = true,
  height = '620px',
  onCanClick
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [viewMode, setViewMode] = useState<'3d' | '2.5d'>('3d');
  const [isHovered, setIsHovered] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);
  const [isRotating, setIsRotating] = useState(true);

  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const canGroupRef = useRef<THREE.Group | null>(null);
  const bodyMeshRef = useRef<THREE.Mesh | null>(null);
  const rimLightRef = useRef<THREE.PointLight | null>(null);
  const keyLightRef = useRef<THREE.DirectionalLight | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, isDragging: false, prevX: 0, prevY: 0 });
  const reqIdRef = useRef<number | null>(null);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setHasWebGL(false);
    } catch {
      setHasWebGL(false);
    }
  }, []);

  useEffect(() => {
    if (!hasWebGL || viewMode !== '3d' || !mountRef.current) return;

    const container = mountRef.current;
    const width = container.clientWidth || 460;
    const heightPx = container.clientHeight || 620;

    // 1. SCENE
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // 2. CAMERA
    const camera = new THREE.PerspectiveCamera(36, width / heightPx, 0.1, 1000);
    camera.position.set(0, 0, 7.6);

    // 3. RENDERER
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
      precision: 'highp'
    });
    renderer.setSize(width, heightPx);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    rendererRef.current = renderer;

    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 4. MAIN CAN GROUP
    const canGroup = new THREE.Group();
    scene.add(canGroup);
    canGroupRef.current = canGroup;

    // 5. MATERIALS
    const brushedAluminum = new THREE.MeshStandardMaterial({
      color: 0xe8ecf0,
      metalness: 0.95,
      roughness: 0.18,
      envMapIntensity: 2.0
    });

    const innerLidMat = new THREE.MeshStandardMaterial({
      color: 0x8a9299,
      metalness: 0.9,
      roughness: 0.32
    });

    // 6. GEOMETRY
    const canRadius = 1.15;
    const canHeight = 3.75;

    // Cylinder Can Body
    const bodyGeometry = new THREE.CylinderGeometry(canRadius, canRadius, canHeight, 72, 1, true);

    const bodyMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(flavor.color.primary),
      metalness: 0.12,
      roughness: 0.18,
      clearcoat: 0.85,
      clearcoatRoughness: 0.1,
      reflectivity: 0.7
    });

    const bodyMesh = new THREE.Mesh(bodyGeometry, bodyMaterial);
    bodyMeshRef.current = bodyMesh;
    canGroup.add(bodyMesh);

    // Top Collar & Rim
    const topNeckGeo = new THREE.CylinderGeometry(0.98, canRadius, 0.24, 72);
    const topNeck = new THREE.Mesh(topNeckGeo, brushedAluminum);
    topNeck.position.y = canHeight / 2 + 0.12;
    canGroup.add(topNeck);

    const topRimGeo = new THREE.TorusGeometry(0.98, 0.05, 20, 72);
    const topRim = new THREE.Mesh(topRimGeo, brushedAluminum);
    topRim.rotation.x = Math.PI / 2;
    topRim.position.y = canHeight / 2 + 0.24;
    canGroup.add(topRim);

    // Recessed Lid
    const lidGeo = new THREE.CylinderGeometry(0.97, 0.97, 0.04, 54);
    const lid = new THREE.Mesh(lidGeo, innerLidMat);
    lid.position.y = canHeight / 2 + 0.22;
    canGroup.add(lid);

    // Pull Tab
    const tabGeo = new THREE.BoxGeometry(0.38, 0.03, 0.65);
    const tab = new THREE.Mesh(tabGeo, brushedAluminum);
    tab.position.set(0.14, canHeight / 2 + 0.25, 0.18);
    tab.rotation.y = 0.4;
    canGroup.add(tab);

    // Bottom Collar & Rim
    const bottomNeckGeo = new THREE.CylinderGeometry(canRadius, 0.98, 0.24, 72);
    const bottomNeck = new THREE.Mesh(bottomNeckGeo, brushedAluminum);
    bottomNeck.position.y = -canHeight / 2 - 0.12;
    canGroup.add(bottomNeck);

    const bottomRimGeo = new THREE.TorusGeometry(0.98, 0.05, 20, 72);
    const bottomRim = new THREE.Mesh(bottomRimGeo, brushedAluminum);
    bottomRim.rotation.x = Math.PI / 2;
    bottomRim.position.y = -canHeight / 2 - 0.24;
    canGroup.add(bottomRim);

    // Concave Bottom Dome
    const baseDomeGeo = new THREE.SphereGeometry(0.92, 36, 18, 0, Math.PI * 2, 0, Math.PI / 3);
    const baseDome = new THREE.Mesh(baseDomeGeo, innerLidMat);
    baseDome.rotation.x = Math.PI;
    baseDome.position.y = -canHeight / 2 - 0.14;
    canGroup.add(baseDome);

    // Floor Contact Shadow
    const shadowGeo = new THREE.PlaneGeometry(4.2, 4.2);
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 256;
    shadowCanvas.height = 256;
    const shadowCtx = shadowCanvas.getContext('2d');
    if (shadowCtx) {
      const grad = shadowCtx.createRadialGradient(128, 128, 15, 128, 128, 128);
      grad.addColorStop(0, 'rgba(0, 0, 0, 0.7)');
      grad.addColorStop(0.4, 'rgba(0, 0, 0, 0.35)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      shadowCtx.fillStyle = grad;
      shadowCtx.fillRect(0, 0, 256, 256);
    }
    const shadowTexture = new THREE.CanvasTexture(shadowCanvas);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTexture,
      transparent: true,
      depthWrite: false,
      opacity: 0.85
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.y = -canHeight / 2 - 0.52;
    scene.add(shadowMesh);

    // 7. LIGHTING
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.1);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.8);
    keyLight.position.set(5, 6, 6);
    scene.add(keyLight);
    keyLightRef.current = keyLight;

    const fillLight = new THREE.DirectionalLight(0xe5f0ff, 1.8);
    fillLight.position.set(-5, 2, 4);
    scene.add(fillLight);

    const topLight = new THREE.DirectionalLight(0xffffff, 1.6);
    topLight.position.set(0, 8, 0);
    scene.add(topLight);

    // Vibrant Rim Accent Spotlight
    const rimLight = new THREE.PointLight(new THREE.Color(flavor.color.accent), 6.5, 15);
    rimLight.position.set(-4, 1.5, -3);
    scene.add(rimLight);
    rimLightRef.current = rimLight;

    canGroup.rotation.x = 0.1;
    canGroup.rotation.z = -0.05;

    const handleResize = () => {
      if (!container || !renderer) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    let isMouseDown = false;
    let startX = 0;
    let startY = 0;

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      isMouseDown = true;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      startX = clientX;
      startY = clientY;
      mouseRef.current.isDragging = true;
    };

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      if (isMouseDown) {
        const deltaX = (clientX - startX) * 0.009;
        const deltaY = (clientY - startY) * 0.009;
        if (canGroupRef.current) {
          canGroupRef.current.rotation.y += deltaX;
          canGroupRef.current.rotation.x = THREE.MathUtils.clamp(
            canGroupRef.current.rotation.x + deltaY,
            -0.35,
            0.45
          );
        }
        startX = clientX;
        startY = clientY;
      } else {
        const rect = container.getBoundingClientRect();
        const normX = ((clientX - rect.left) / rect.width) * 2 - 1;
        const normY = -(((clientY - rect.top) / rect.height) * 2 - 1);
        mouseRef.current.targetX = normX * 0.45;
        mouseRef.current.targetY = normY * 0.25;
      }
    };

    const onPointerUp = () => {
      isMouseDown = false;
      mouseRef.current.isDragging = false;
    };

    if (interactive) {
      container.addEventListener('mousedown', onPointerDown);
      window.addEventListener('mousemove', onPointerMove);
      window.addEventListener('mouseup', onPointerUp);
      container.addEventListener('touchstart', onPointerDown, { passive: true });
      window.addEventListener('touchmove', onPointerMove, { passive: true });
      window.addEventListener('touchend', onPointerUp);
    }

    const clock = new THREE.Clock();

    const animate = () => {
      reqIdRef.current = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      if (canGroupRef.current) {
        canGroupRef.current.position.y = Math.sin(time * 1.5) * 0.12;

        if (isRotating && !mouseRef.current.isDragging) {
          canGroupRef.current.rotation.y += delta * 0.55;
        }

        mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
        mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

        canGroupRef.current.rotation.z = -mouseRef.current.x * 0.35 - 0.04;
        canGroupRef.current.rotation.x = THREE.MathUtils.clamp(
          canGroupRef.current.rotation.x + (0.1 - canGroupRef.current.rotation.x) * 0.03,
          -0.35,
          0.45
        );
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (reqIdRef.current) cancelAnimationFrame(reqIdRef.current);
      window.removeEventListener('resize', handleResize);
      if (interactive) {
        container.removeEventListener('mousedown', onPointerDown);
        window.removeEventListener('mousemove', onPointerMove);
        window.removeEventListener('mouseup', onPointerUp);
        container.removeEventListener('touchstart', onPointerDown);
        window.removeEventListener('touchmove', onPointerMove);
        window.removeEventListener('touchend', onPointerUp);
      }
      renderer.dispose();
      container.innerHTML = '';
    };
  }, [hasWebGL, viewMode, interactive]);

  // Texture loading & seamless UV wrapper
  useEffect(() => {
    if (!bodyMeshRef.current || !hasWebGL || viewMode !== '3d') return;

    if (rimLightRef.current) {
      rimLightRef.current.color.set(new THREE.Color(flavor.color.accent));
    }

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = flavor.canImage;

    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1200;
      canvas.height = 1200;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Fill base with exact brand color
      ctx.fillStyle = flavor.color.primary;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Aluminum cylindrical metallic reflection gradient
      const grad = ctx.createLinearGradient(0, 0, canvas.width, 0);
      grad.addColorStop(0, 'rgba(0,0,0,0.35)');
      grad.addColorStop(0.18, 'rgba(255,255,255,0.12)');
      grad.addColorStop(0.5, 'rgba(0,0,0,0)');
      grad.addColorStop(0.82, 'rgba(255,255,255,0.12)');
      grad.addColorStop(1, 'rgba(0,0,0,0.35)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw the authentic can graphic centered
      const aspect = img.width / img.height;
      const targetHeight = canvas.height * 0.95;
      const targetWidth = targetHeight * aspect;
      const posX = (canvas.width - targetWidth) / 2;
      const posY = (canvas.height - targetHeight) / 2;

      ctx.drawImage(img, posX, posY, targetWidth, targetHeight);

      const texture = new THREE.CanvasTexture(canvas);
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.ClampToEdgeWrapping;
      texture.generateMipmaps = true;
      texture.minFilter = THREE.LinearMipmapLinearFilter;
      texture.needsUpdate = true;

      if (bodyMeshRef.current) {
        const mat = new THREE.MeshPhysicalMaterial({
          map: texture,
          color: 0xffffff,
          metalness: 0.15,
          roughness: 0.18,
          clearcoat: 0.85,
          clearcoatRoughness: 0.1,
          reflectivity: 0.7
        });
        bodyMeshRef.current.material = mat;
      }
    };
  }, [flavor, hasWebGL, viewMode]);

  const handleContainerClick = () => {
    playCanOpenFizz();
    onCanClick?.();
  };

  return (
    <div
      className={`relative flex items-center justify-center select-none ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ minHeight: height }}
    >
      {/* Dynamic Dramatic Ambient Color Bloom */}
      <div
        className="absolute w-80 h-80 sm:w-[500px] sm:h-[500px] rounded-full blur-[100px] pointer-events-none transition-all duration-700 opacity-65"
        style={{
          background: `radial-gradient(circle, ${flavor.color.accent}88 0%, ${flavor.color.primary}44 45%, transparent 70%)`,
          transform: isHovered ? 'scale(1.2)' : 'scale(1.0)'
        }}
      />

      {/* 3D WebGL Canvas */}
      {viewMode === '3d' && hasWebGL ? (
        <div
          ref={mountRef}
          onClick={handleContainerClick}
          className="w-full h-full cursor-grab active:cursor-grabbing relative z-10 flex items-center justify-center"
          style={{ height }}
          title="Drag to rotate the 3D can in 360°"
        />
      ) : (
        /* High-Definition 2.5D Studio Layered Cutout */
        <div
          onClick={handleContainerClick}
          className="relative z-10 w-full flex flex-col items-center justify-center p-4 cursor-pointer transition-transform duration-500"
          style={{
            transform: isHovered ? 'translateY(-14px) rotate(-1.5deg) scale(1.04)' : 'translateY(0px) rotate(0deg)'
          }}
        >
          <img
            src={flavor.canImage}
            alt={`${flavor.name} can`}
            className="max-h-[520px] w-auto object-contain drop-shadow-[0_35px_50px_rgba(0,0,0,0.85)] pointer-events-none"
          />
          <div
            className="w-56 h-8 rounded-[100%] blur-md mt-[-15px] pointer-events-none opacity-85"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.85) 0%, transparent 70%)'
            }}
          />
        </div>
      )}

      {/* Interactive Controls Overlay */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-[#08100d]/90 backdrop-blur-md px-4 py-2 rounded-full border border-white/15 text-xs shadow-2xl">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsRotating(!isRotating);
          }}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-colors font-bold text-[11px] uppercase tracking-wider ${
            isRotating ? 'text-amber-300 bg-amber-400/20 border border-amber-400/30' : 'text-stone-400 hover:text-white'
          }`}
          title={isRotating ? 'Pause auto-spin' : 'Resume auto-spin'}
        >
          <RotateCw className={`w-3.5 h-3.5 ${isRotating ? 'animate-spin-slow' : ''}`} />
          <span>{isRotating ? 'Auto-Spin' : 'Paused'}</span>
        </button>

        <span className="w-px h-3.5 bg-white/20" />

        <button
          onClick={(e) => {
            e.stopPropagation();
            setViewMode(viewMode === '3d' ? '2.5d' : '3d');
          }}
          className="flex items-center gap-1.5 px-3 py-1 rounded-full text-stone-300 hover:text-white transition-colors font-bold text-[11px] uppercase tracking-wider"
          title="Switch view between Real 3D Can and 2.5D Studio"
        >
          {viewMode === '3d' ? (
            <>
              <Move3d className="w-3.5 h-3.5 text-emerald-400" />
              <span>3D WebGL</span>
            </>
          ) : (
            <>
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>2.5D Studio</span>
            </>
          )}
        </button>
      </div>

      {viewMode === '3d' && (
        <div className="absolute top-4 right-4 z-20 pointer-events-none text-[10px] font-extrabold tracking-widest uppercase text-stone-300 bg-black/60 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md">
          360° Drag Interactive
        </div>
      )}
    </div>
  );
};

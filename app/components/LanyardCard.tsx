"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import * as THREE from "three";
import { useApp } from "@/app/context/AppProviders";

export interface LanyardCardProps {
  photoSrc?: string;
  name?: string;
  role?: string;
  gravity?: number;
  /** Horizontal anchor ratio relative to half-frustum width on desktop (e.g. 0.44 places it on the right side). */
  desktopAnchorRatio?: number;
  className?: string;
}

function drawRoundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function createCardFrontTexture(
  photo: HTMLImageElement | null,
  name: string,
  role: string
): THREE.CanvasTexture {
  // High-resolution 2x Retina canvas for razor-sharp portrait & typography
  const w = 1200;
  const h = 1800;
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d")!;
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";

  // Clean obsidian-slate outer card body
  const bg = ctx.createLinearGradient(0, 0, w, h);
  bg.addColorStop(0, "#111827");
  bg.addColorStop(1, "#090d12");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, w, h);

  // Top emerald-teal gradient accent strip
  const topBar = ctx.createLinearGradient(0, 0, w, 0);
  topBar.addColorStop(0, "#059669");
  topBar.addColorStop(0.5, "#34d399");
  topBar.addColorStop(1, "#0ea5e9");
  ctx.fillStyle = topBar;
  ctx.fillRect(0, 0, w, 22);

  // Lanyard punch slot visual
  drawRoundedRect(ctx, w / 2 - 96, 56, 192, 36, 18);
  ctx.fillStyle = "#030712";
  ctx.fill();
  ctx.strokeStyle = "rgba(255,255,255,0.22)";
  ctx.lineWidth = 3;
  ctx.stroke();

  // Top meta bar
  ctx.fillStyle = "rgba(255,255,255,0.72)";
  ctx.font = "700 26px ui-monospace, SFMono-Regular, Menlo, monospace";
  ctx.textAlign = "left";
  ctx.fillText("ID · TB-2026-07", 68, 152);

  drawRoundedRect(ctx, w - 268, 118, 200, 48, 24);
  ctx.fillStyle = "rgba(16, 185, 129, 0.18)";
  ctx.fill();
  ctx.strokeStyle = "rgba(52, 211, 153, 0.55)";
  ctx.lineWidth = 2.5;
  ctx.stroke();
  ctx.fillStyle = "#34d399";
  ctx.beginPath();
  ctx.arc(w - 234, 142, 8, 0, Math.PI * 2);
  ctx.fill();
  ctx.font = "700 23px ui-monospace, SFMono-Regular, Menlo, monospace";
  ctx.fillText("VERIFIED", w - 212, 150);

  // Bright, crisp studio portrait box so face & outfit pop clearly!
  const frameX = 56;
  const frameY = 196;
  const frameW = w - 112;
  const frameH = 1040;

  ctx.save();
  drawRoundedRect(ctx, frameX, frameY, frameW, frameH, 40);

  // Luminous neutral-cool studio backdrop (high contrast against hair & olive shirt!)
  const studioBg = ctx.createRadialGradient(
    w / 2,
    frameY + 420,
    60,
    w / 2,
    frameY + 520,
    680
  );
  studioBg.addColorStop(0, "#ffffff");
  studioBg.addColorStop(0.55, "#f1f5f9");
  studioBg.addColorStop(1, "#cbd5e1");
  ctx.fillStyle = studioBg;
  ctx.fill();
  ctx.clip();

  // Soft studio emerald halo behind shoulders
  const halo = ctx.createRadialGradient(
    w / 2,
    frameY + 380,
    40,
    w / 2,
    frameY + 380,
    420
  );
  halo.addColorStop(0, "rgba(16, 185, 129, 0.22)");
  halo.addColorStop(1, "rgba(16, 185, 129, 0)");
  ctx.fillStyle = halo;
  ctx.fillRect(frameX, frameY, frameW, frameH);

  // Subtle geometric studio accent arcs
  ctx.strokeStyle = "rgba(15, 23, 42, 0.06)";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(w / 2, frameY + 440, 360, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(w / 2, frameY + 440, 470, 0, Math.PI * 2);
  ctx.stroke();

  if (photo && photo.naturalWidth > 0) {
    // Zoom nicely on head + upper torso so facial details are crystal clear
    const scale = Math.max(
      (frameW * 1.04) / photo.naturalWidth,
      (frameH * 1.04) / photo.naturalHeight
    );
    const drawW = photo.naturalWidth * scale;
    const drawH = photo.naturalHeight * scale;
    const drawX = (w - drawW) / 2;
    const drawY = frameY + 28; // Anchor near top so head & face sit prominently!
    ctx.drawImage(photo, drawX, drawY, drawW, drawH);
  }
  ctx.restore();

  // Clean crisp border around studio portrait frame
  drawRoundedRect(ctx, frameX, frameY, frameW, frameH, 40);
  ctx.strokeStyle = "rgba(255,255,255,0.22)";
  ctx.lineWidth = 3;
  ctx.stroke();

  // Name & Role
  ctx.textAlign = "left";
  ctx.fillStyle = "#ffffff";
  ctx.font = "800 72px ui-sans-serif, system-ui, -apple-system, sans-serif";
  ctx.fillText(name.toUpperCase(), 68, 1340);

  ctx.fillStyle = "#34d399";
  ctx.font = "700 32px ui-monospace, SFMono-Regular, Menlo, monospace";
  ctx.fillText(role.toUpperCase(), 68, 1400);

  // Domain pills
  const pills = ["IoT & ESP32", "NEXT.JS", "AI / ML", "IREX GOLD"];
  let px = 68;
  const py = 1448;
  ctx.font = "700 25px ui-monospace, SFMono-Regular, Menlo, monospace";
  for (const label of pills) {
    const tw = ctx.measureText(label).width;
    const pw = tw + 44;
    drawRoundedRect(ctx, px, py, pw, 54, 16);
    ctx.fillStyle = "rgba(255,255,255,0.09)";
    ctx.fill();
    ctx.strokeStyle = "rgba(255,255,255,0.18)";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = "#f4f4f5";
    ctx.fillText(label, px + 22, py + 35);
    px += pw + 18;
  }

  // Divider
  ctx.strokeStyle = "rgba(255,255,255,0.12)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(68, 1554);
  ctx.lineTo(w - 68, 1554);
  ctx.stroke();

  // Bottom location & barcode
  ctx.fillStyle = "rgba(255,255,255,0.52)";
  ctx.font = "600 24px ui-monospace, SFMono-Regular, Menlo, monospace";
  ctx.fillText("PEKANBARU, INDONESIA", 68, 1622);
  ctx.fillStyle = "#e4e4e7";
  ctx.font = "600 28px ui-monospace, SFMono-Regular, Menlo, monospace";
  ctx.fillText("github.com/Tugood7", 68, 1672);

  // Barcode right
  const bars = [4, 2, 6, 3, 2, 8, 3, 2, 5, 2, 4, 7, 2, 3, 6, 2, 4, 3, 7, 2, 5, 3, 4];
  let bx = w - 340;
  ctx.fillStyle = "rgba(244,244,245,0.9)";
  for (let i = 0; i < bars.length; i++) {
    const bw = bars[i] * 2.4;
    if (i % 2 === 0) {
      ctx.fillRect(bx, 1588, bw, 96);
    }
    bx += bw + 4.5;
  }

  // Outer card rim
  drawRoundedRect(ctx, 16, 16, w - 32, h - 32, 52);
  ctx.strokeStyle = "rgba(255,255,255,0.16)";
  ctx.lineWidth = 4;
  ctx.stroke();

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.anisotropy = 16;
  texture.needsUpdate = true;
  return texture;
}

function createCardBackTexture(name: string): THREE.CanvasTexture {
  const w = 1200;
  const h = 1800;
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d")!;

  const bg = ctx.createLinearGradient(0, 0, w, h);
  bg.addColorStop(0, "#0b0f14");
  bg.addColorStop(0.5, "#111827");
  bg.addColorStop(1, "#070a0e");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = "#10b981";
  ctx.fillRect(0, 0, w, 22);

  drawRoundedRect(ctx, w / 2 - 96, 56, 192, 36, 18);
  ctx.fillStyle = "#030712";
  ctx.fill();
  ctx.strokeStyle = "rgba(255,255,255,0.22)";
  ctx.lineWidth = 3;
  ctx.stroke();

  ctx.textAlign = "center";
  ctx.fillStyle = "#34d399";
  ctx.font = "700 32px ui-monospace, SFMono-Regular, Menlo, monospace";
  ctx.fillText("ENGINEER CREDENTIALS", w / 2, 210);

  ctx.fillStyle = "#ffffff";
  ctx.font = "800 58px ui-sans-serif, system-ui, sans-serif";
  ctx.fillText(name.toUpperCase(), w / 2, 290);

  const badges = [
    { title: "GOLD AWARD · IREX 2024", sub: "Universiti Teknologi Mara, Malaysia" },
    { title: "INTELLECTUAL PROPERTY (HKI)", sub: "Deep Learning Patient Anomaly Detection" },
    { title: "B.SC. COMPUTER SCIENCE", sub: "Universitas Islam Riau · GPA 3.79 / 4.00" },
    { title: "20+ SHIPPED PROJECTS", sub: "IoT · ESP32 · Full-Stack Web · AI/ML" },
  ];

  let y = 376;
  ctx.textAlign = "left";
  for (const item of badges) {
    drawRoundedRect(ctx, 88, y, w - 176, 158, 28);
    ctx.fillStyle = "rgba(255,255,255,0.06)";
    ctx.fill();
    ctx.strokeStyle = "rgba(52, 211, 153, 0.3)";
    ctx.lineWidth = 2.5;
    ctx.stroke();

    ctx.fillStyle = "#34d399";
    ctx.font = "700 29px ui-monospace, SFMono-Regular, Menlo, monospace";
    ctx.fillText(item.title, 128, y + 64);

    ctx.fillStyle = "#e4e4e7";
    ctx.font = "500 29px ui-sans-serif, system-ui, sans-serif";
    ctx.fillText(item.sub, 128, y + 114);
    y += 192;
  }

  const qrSize = 260;
  const qrX = w / 2 - qrSize / 2;
  const qrY = 1200;
  drawRoundedRect(ctx, qrX - 22, qrY - 22, qrSize + 44, qrSize + 44, 28);
  ctx.fillStyle = "#ffffff";
  ctx.fill();

  const cells = 11;
  const cell = qrSize / cells;
  ctx.fillStyle = "#090d12";
  for (let r = 0; r < cells; r++) {
    for (let c = 0; c < cells; c++) {
      const corner =
        (r < 3 && c < 3) || (r < 3 && c >= cells - 3) || (r >= cells - 3 && c < 3);
      const pattern = corner || (r * 7 + c * 13 + r * c) % 3 === 0;
      if (pattern) {
        ctx.fillRect(qrX + c * cell + 2, qrY + r * cell + 2, cell - 4, cell - 4);
      }
    }
  }

  ctx.textAlign = "center";
  ctx.fillStyle = "#f4f4f5";
  ctx.font = "600 30px ui-monospace, SFMono-Regular, Menlo, monospace";
  ctx.fillText("github.com/Tugood7", w / 2, 1568);
  ctx.fillStyle = "#34d399";
  ctx.font = "600 28px ui-monospace, SFMono-Regular, Menlo, monospace";
  ctx.fillText("tubagusdwifikri@gmail.com", w / 2, 1626);
  ctx.fillStyle = "rgba(255,255,255,0.55)";
  ctx.font = "500 26px ui-monospace, SFMono-Regular, Menlo, monospace";
  ctx.fillText("bumbuket.tugoodly.my.id", w / 2, 1682);

  drawRoundedRect(ctx, 16, 16, w - 32, h - 32, 52);
  ctx.strokeStyle = "rgba(255,255,255,0.16)";
  ctx.lineWidth = 4;
  ctx.stroke();

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 16;
  texture.needsUpdate = true;
  return texture;
}

function createStrapTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 128;
  const ctx = canvas.getContext("2d")!;

  ctx.fillStyle = "#18181b";
  ctx.fillRect(0, 0, 1024, 128);

  ctx.fillStyle = "#10b981";
  ctx.fillRect(0, 8, 1024, 6);
  ctx.fillRect(0, 114, 1024, 6);

  ctx.fillStyle = "#f4f4f5";
  ctx.font = "700 34px ui-monospace, SFMono-Regular, Menlo, monospace";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("TU BAGUS  ·  ENGINEER  ·  TU BAGUS  ·  ENGINEER  ·", 512, 66);

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.repeat.set(2.4, 1);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  return texture;
}

function createRoundedCardShape(width: number, height: number, radius: number) {
  const s = new THREE.Shape();
  const x = -width / 2;
  const y = -height / 2;
  s.moveTo(x + radius, y);
  s.lineTo(x + width - radius, y);
  s.quadraticCurveTo(x + width, y, x + width, y + radius);
  s.lineTo(x + width, y + height - radius);
  s.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  s.lineTo(x + radius, y + height);
  s.quadraticCurveTo(x, y + height, x, y + height - radius);
  s.lineTo(x, y + radius);
  s.quadraticCurveTo(x, y, x + radius, y);
  return s;
}

function createRoundedPlaneGeometry(width: number, height: number, radius: number) {
  const shape = createRoundedCardShape(width, height, radius);
  const geom = new THREE.ShapeGeometry(shape, 18);
  const pos = geom.attributes.position;
  const uvs = new Float32Array(pos.count * 2);
  for (let i = 0; i < pos.count; i++) {
    const px = pos.getX(i);
    const py = pos.getY(i);
    uvs[i * 2] = (px + width / 2) / width;
    uvs[i * 2 + 1] = (py + height / 2) / height;
  }
  geom.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));
  return geom;
}

export default function LanyardCard({
  photoSrc = "/profile-cutout.png",
  name = "Tu Bagus Dwi Fikri",
  role = "Software · IT · IoT Engineer",
  gravity = -22,
  desktopAnchorRatio = 0.54,
  className = "",
}: LanyardCardProps) {
  const { lang } = useApp();
  const containerRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(false);
  const [interacted, setInteracted] = useState(false);
  const [webglFailed, setWebglFailed] = useState(false);
  const flipTriggerRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
    } catch {
      const failId = requestAnimationFrame(() => setWebglFailed(true));
      return () => cancelAnimationFrame(failId);
    }

    const width = container.clientWidth || 960;
    const height = container.clientHeight || 580;

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    // Keep true photo colors sharp & vibrant without filmic washout
    renderer.toneMapping = THREE.NoToneMapping;
    renderer.domElement.style.display = "block";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.pointerEvents = "none";
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const FOV = 35;
    const CAM_Z = 10.6;
    const camera = new THREE.PerspectiveCamera(FOV, width / height, 0.1, 100);
    camera.position.set(0, 0.1, CAM_Z);

    // Compute visible world dimensions at z = 0
    const getFrustumBounds = (wPx: number, hPx: number) => {
      const vFovRad = THREE.MathUtils.degToRad(FOV);
      const visibleH = 2 * Math.tan(vFovRad / 2) * CAM_Z;
      const visibleW = visibleH * (wPx / Math.max(hPx, 1));
      return { visibleW, visibleH };
    };

    let { visibleW, visibleH } = getFrustumBounds(width, height);
    const computeAnchor = (wPx: number, hPx: number) => {
      const bounds = getFrustumBounds(wPx, hPx);
      const isDesktop = wPx >= 768;
      const ax = isDesktop ? (bounds.visibleW / 2) * desktopAnchorRatio : 0;
      const ay = bounds.visibleH / 2 + 0.35;
      return new THREE.Vector3(ax, ay, 0);
    };

    const anchor = computeAnchor(width, height);

    // Balanced studio lights — crisp without blowing out the portrait
    const ambient = new THREE.AmbientLight(0xffffff, 1.85);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.05);
    keyLight.position.set(3, 5, 9);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x34d399, 0.85);
    rimLight.position.set(-5, 2, 4);
    scene.add(rimLight);

    // Larger, sharper 3D ID card proportions
    const cardW = 2.55;
    const cardH = 3.82;
    const cardR = 0.19;
    const cardDepth = 0.055;

    const cardPivot = new THREE.Group();
    scene.add(cardPivot);

    const cardMeshGroup = new THREE.Group();
    cardMeshGroup.position.set(0, -(cardH / 2 + 0.25), 0);
    cardPivot.add(cardMeshGroup);

    // Extruded 3D body
    const bodyShape = createRoundedCardShape(cardW, cardH, cardR);
    const bodyGeo = new THREE.ExtrudeGeometry(bodyShape, {
      depth: cardDepth,
      bevelEnabled: true,
      bevelSegments: 4,
      steps: 1,
      bevelSize: 0.016,
      bevelThickness: 0.016,
    });
    bodyGeo.center();

    const bodyMat = new THREE.MeshPhysicalMaterial({
      color: 0x0f172a,
      metalness: 0.22,
      roughness: 0.32,
      clearcoat: 0.6,
      clearcoatRoughness: 0.2,
    });
    const bodyMesh = new THREE.Mesh(bodyGeo, bodyMat);
    cardMeshGroup.add(bodyMesh);

    // Front & Back Texture Faces (subtle satin sheen so portrait stays razor-clear!)
    const frontGeo = createRoundedPlaneGeometry(cardW - 0.03, cardH - 0.03, cardR - 0.01);
    const frontTexInitial = createCardFrontTexture(null, name, role);
    const frontMat = new THREE.MeshPhysicalMaterial({
      map: frontTexInitial,
      roughness: 0.44,
      metalness: 0.02,
      clearcoat: 0.28,
      clearcoatRoughness: 0.26,
    });
    const frontFace = new THREE.Mesh(frontGeo, frontMat);
    frontFace.position.z = cardDepth / 2 + 0.019;
    cardMeshGroup.add(frontFace);

    const backGeo = createRoundedPlaneGeometry(cardW - 0.03, cardH - 0.03, cardR - 0.01);
    const backTex = createCardBackTexture(name);
    const backMat = new THREE.MeshPhysicalMaterial({
      map: backTex,
      roughness: 0.42,
      metalness: 0.04,
      clearcoat: 0.3,
      clearcoatRoughness: 0.25,
    });
    const backFace = new THREE.Mesh(backGeo, backMat);
    backFace.rotation.y = Math.PI;
    backFace.position.z = -(cardDepth / 2 + 0.019);
    cardMeshGroup.add(backFace);

    // Metallic Clasp & Swivel Ring
    const metalMat = new THREE.MeshStandardMaterial({
      color: 0xe4e4e7,
      metalness: 0.85,
      roughness: 0.22,
    });

    const clipBar = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.28, 0.14), metalMat);
    clipBar.position.set(0, cardH / 2 + 0.02, 0);
    cardMeshGroup.add(clipBar);

    const swivelNeck = new THREE.Mesh(
      new THREE.CylinderGeometry(0.07, 0.08, 0.22, 16),
      metalMat
    );
    swivelNeck.position.set(0, cardH / 2 + 0.22, 0);
    cardMeshGroup.add(swivelNeck);

    const claspRing = new THREE.Mesh(
      new THREE.TorusGeometry(0.12, 0.028, 12, 24),
      metalMat
    );
    claspRing.position.set(0, cardH / 2 + 0.34, 0);
    cardMeshGroup.add(claspRing);

    // Load sharp cutout photo
    let currentFrontTex = frontTexInitial;
    const img = new window.Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const upgraded = createCardFrontTexture(img, name, role);
      frontMat.map = upgraded;
      frontMat.needsUpdate = true;
      currentFrontTex.dispose();
      currentFrontTex = upgraded;
    };
    img.src = photoSrc;

    // Flexible Verlet Rope Chain
    const NODE_COUNT = 10;
    const BASE_SEG_LEN = 0.24;

    interface RopeNode {
      pos: THREE.Vector3;
      old: THREE.Vector3;
    }

    const nodes: RopeNode[] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      const startX = anchor.x + i * 0.14;
      const startY = anchor.y - i * BASE_SEG_LEN * 0.72 + 1.0;
      const startZ = Math.sin(i * 0.35) * 0.12;
      nodes.push({
        pos: new THREE.Vector3(startX, startY, startZ),
        old: new THREE.Vector3(startX - 0.05, startY + 0.03, startZ),
      });
    }

    const RIBBON_SEGS = 34;
    const RIBBON_HALF_W = 0.155;
    const ribbonGeo = new THREE.BufferGeometry();
    const ribbonPositions = new Float32Array((RIBBON_SEGS + 1) * 2 * 3);
    const ribbonUVs = new Float32Array((RIBBON_SEGS + 1) * 2 * 2);
    const ribbonIndices: number[] = [];

    for (let i = 0; i <= RIBBON_SEGS; i++) {
      const t = i / RIBBON_SEGS;
      ribbonUVs[i * 4] = t;
      ribbonUVs[i * 4 + 1] = 0;
      ribbonUVs[i * 4 + 2] = t;
      ribbonUVs[i * 4 + 3] = 1;
      if (i < RIBBON_SEGS) {
        const a = i * 2;
        const b = a + 1;
        const c = a + 2;
        const d = a + 3;
        ribbonIndices.push(a, b, c, b, d, c);
      }
    }
    ribbonGeo.setAttribute("position", new THREE.BufferAttribute(ribbonPositions, 3));
    ribbonGeo.setAttribute("uv", new THREE.BufferAttribute(ribbonUVs, 2));
    ribbonGeo.setIndex(ribbonIndices);

    const strapTex = createStrapTexture();
    const ribbonMat = new THREE.MeshStandardMaterial({
      map: strapTex,
      roughness: 0.65,
      metalness: 0.06,
      side: THREE.DoubleSide,
    });
    const ribbonMesh = new THREE.Mesh(ribbonGeo, ribbonMat);
    scene.add(ribbonMesh);

    // Rigid-body angular state
    let rotX = 0.06;
    let rotY = -0.32;
    let rotZ = 0.14;
    let velRotX = 0;
    let velRotY = 2.0;
    let velRotZ = 0;
    let targetFaceY = 0;

    // Global window raycast & drag state (lets card travel freely across the full Hero!)
    const raycaster = new THREE.Raycaster();
    const pointerNdc = new THREE.Vector2();
    const dragPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    const dragHit = new THREE.Vector3();
    const grabOffset = new THREE.Vector3();
    const lastDragPos = new THREE.Vector3();
    const dragVelocity = new THREE.Vector3();

    let isDragging = false;
    let isHovered = false;
    let hoverNdcX = 0;
    let hoverNdcY = 0;
    let lastTapTime = 0;

    const updateNdc = (clientX: number, clientY: number): boolean => {
      const rect = renderer.domElement.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return false;
      pointerNdc.x = ((clientX - rect.left) / rect.width) * 2 - 1;
      pointerNdc.y = -((clientY - rect.top) / rect.height) * 2 + 1;
      return (
        clientX >= rect.left &&
        clientX <= rect.right &&
        clientY >= rect.top &&
        clientY <= rect.bottom
      );
    };

    const setCursorBodyState = (activeDrag: boolean, activeHover: boolean) => {
      if (activeDrag) {
        document.body.style.cursor = "grabbing";
        document.body.style.userSelect = "none";
      } else if (activeHover) {
        document.body.style.cursor = "grab";
        document.body.style.userSelect = "";
      } else {
        document.body.style.cursor = "";
        document.body.style.userSelect = "";
      }
    };

    const triggerFlip = () => {
      setInteracted(true);
      targetFaceY += Math.PI;
      velRotY += 8.8;
      nodes[NODE_COUNT - 1].old.y -= 0.1;
    };
    flipTriggerRef.current = triggerFlip;

    const onPointerDown = (e: PointerEvent) => {
      // Never hijack clicks on real interactive UI controls (links/buttons/inputs)
      const target = e.target as Element | null;
      if (target?.closest("a, button, input, textarea, select")) return;

      if (!updateNdc(e.clientX, e.clientY)) return;
      raycaster.setFromCamera(pointerNdc, camera);
      const hits = raycaster.intersectObject(cardPivot, true);
      if (hits.length > 0) {
        e.preventDefault();
        const now = performance.now();
        if (now - lastTapTime < 300) {
          triggerFlip();
          lastTapTime = 0;
          return;
        }
        lastTapTime = now;

        isDragging = true;
        setDragging(true);
        setInteracted(true);
        setCursorBodyState(true, true);

        raycaster.ray.intersectPlane(dragPlane, dragHit);
        const endNode = nodes[NODE_COUNT - 1].pos;
        grabOffset.copy(endNode).sub(dragHit);
        lastDragPos.copy(dragHit);
        dragVelocity.set(0, 0, 0);
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      const inside = updateNdc(e.clientX, e.clientY);
      hoverNdcX = pointerNdc.x;
      hoverNdcY = pointerNdc.y;

      if (isDragging) {
        e.preventDefault();
        raycaster.setFromCamera(pointerNdc, camera);
        if (raycaster.ray.intersectPlane(dragPlane, dragHit)) {
          dragVelocity.copy(dragHit).sub(lastDragPos);
          lastDragPos.copy(dragHit);
          velRotY += dragVelocity.x * 1.15;
          velRotX -= dragVelocity.y * 0.55;
        }
        return;
      }

      if (!inside) {
        if (isHovered) {
          isHovered = false;
          setHoveredCard(false);
          setCursorBodyState(false, false);
        }
        return;
      }

      const target = e.target as Element | null;
      if (target?.closest("a, button, input, textarea, select")) {
        if (isHovered) {
          isHovered = false;
          setHoveredCard(false);
          setCursorBodyState(false, false);
        }
        return;
      }

      raycaster.setFromCamera(pointerNdc, camera);
      const hit = raycaster.intersectObject(cardPivot, true).length > 0;
      if (hit !== isHovered) {
        isHovered = hit;
        setHoveredCard(hit);
        setCursorBodyState(false, hit);
      }
    };

    const releaseDrag = () => {
      if (!isDragging) return;
      isDragging = false;
      setDragging(false);
      setCursorBodyState(false, isHovered);

      // Authentic elastic sling/throw momentum on release!
      const tip = nodes[NODE_COUNT - 1];
      tip.old.copy(tip.pos).sub(dragVelocity.clone().multiplyScalar(0.95));
      velRotY += dragVelocity.x * 2.8;
      velRotZ -= dragVelocity.x * 1.25;
      targetFaceY = Math.round(rotY / Math.PI) * Math.PI;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (isDragging) {
        e.preventDefault();
      }
    };

    window.addEventListener("pointerdown", onPointerDown, { passive: false });
    window.addEventListener("pointermove", onPointerMove, { passive: false });
    window.addEventListener("pointerup", releaseDrag);
    window.addEventListener("pointercancel", releaseDrag);
    window.addEventListener("touchmove", onTouchMove, { passive: false });

    const handleResize = () => {
      if (!container) return;
      const w2 = container.clientWidth || 960;
      const h2 = container.clientHeight || 580;
      camera.aspect = w2 / h2;
      camera.updateProjectionMatrix();
      renderer.setSize(w2, h2);
      const bounds = getFrustumBounds(w2, h2);
      visibleW = bounds.visibleW;
      visibleH = bounds.visibleH;
      const newAnchor = computeAnchor(w2, h2);
      const dx = newAnchor.x - anchor.x;
      const dy = newAnchor.y - anchor.y;
      anchor.copy(newAnchor);
      for (const n of nodes) {
        n.pos.x += dx;
        n.pos.y += dy;
        n.old.x += dx;
        n.old.y += dy;
      }
    };
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    const curvePoints = nodes.map((n) => n.pos);
    const tangent = new THREE.Vector3();
    const side = new THREE.Vector3();
    const viewDir = new THREE.Vector3(0, 0, 1);
    const diff = new THREE.Vector3();
    const tipVel = new THREE.Vector3();

    let rafId = 0;
    let lastTime = performance.now();

    const animate = (now: number) => {
      rafId = requestAnimationFrame(animate);
      const dt = Math.min((now - lastTime) / 1000, 0.032);
      lastTime = now;
      const dtSq = dt * dt;

      // 1. Verlet Rope Integration
      const damping = 0.984;
      const idleWind = Math.sin(now * 0.0013) * 0.32;

      for (let i = 1; i < NODE_COUNT; i++) {
        const n = nodes[i];
        const vx = (n.pos.x - n.old.x) * damping;
        const vy = (n.pos.y - n.old.y) * damping;
        const vz = (n.pos.z - n.old.z) * damping;
        n.old.copy(n.pos);

        const weightScale = i === NODE_COUNT - 1 ? 1.4 : 1.0;
        n.pos.x += vx + idleWind * dtSq;
        n.pos.y += vy + gravity * weightScale * dtSq;
        n.pos.z += vz - n.pos.z * 2.0 * dtSq;
      }

      // Free, elastic dragging across the ENTIRE visible frustum!
      if (isDragging) {
        const tip = nodes[NODE_COUNT - 1];
        const maxX = visibleW / 2 - 0.5;
        const minY = -visibleH / 2 + 1.0;
        const maxY = visibleH / 2 + 0.1;
        const targetX = THREE.MathUtils.clamp(dragHit.x + grabOffset.x, -maxX, maxX);
        const targetY = THREE.MathUtils.clamp(dragHit.y + grabOffset.y, minY, maxY);

        tip.pos.x = THREE.MathUtils.lerp(tip.pos.x, targetX, 0.48);
        tip.pos.y = THREE.MathUtils.lerp(tip.pos.y, targetY, 0.48);
        tip.pos.z = THREE.MathUtils.lerp(tip.pos.z, 0.65, 0.25);
        tip.old.copy(tip.pos);
      }

      // 2. Elastic-Flexible Distance Constraints
      // When pulled far beyond rest length, allow smooth bungee stretch so it NEVER feels stuck!
      const tipDistFromAnchor = nodes[NODE_COUNT - 1].pos.distanceTo(anchor);
      const restTotal = BASE_SEG_LEN * (NODE_COUNT - 1);
      const stretchFactor =
        isDragging && tipDistFromAnchor > restTotal
          ? Math.min(tipDistFromAnchor / restTotal, 3.2)
          : 1.0;
      const activeSegLen = BASE_SEG_LEN * THREE.MathUtils.lerp(1.0, stretchFactor, 0.85);
      const iterations = isDragging ? 8 : 12;

      for (let iter = 0; iter < iterations; iter++) {
        nodes[0].pos.copy(anchor);
        for (let i = 0; i < NODE_COUNT - 1; i++) {
          const a = nodes[i].pos;
          const b = nodes[i + 1].pos;
          diff.subVectors(b, a);
          const dist = diff.length() || 0.0001;
          const error = (dist - activeSegLen) / dist;

          if (i === 0) {
            b.addScaledVector(diff, -error);
          } else if (isDragging && i + 1 === NODE_COUNT - 1) {
            // Let the user's hand pull freely while the rope follows elastically
            a.addScaledVector(diff, error * 0.94);
            b.addScaledVector(diff, -error * 0.06);
          } else {
            a.addScaledVector(diff, error * 0.5);
            b.addScaledVector(diff, -error * 0.5);
          }
        }
      }

      // 3. Card Orientation Physics
      const tip = nodes[NODE_COUNT - 1];
      const prev = nodes[NODE_COUNT - 2];
      tipVel.subVectors(tip.pos, tip.old);

      const ropeAngleZ = Math.atan2(tip.pos.x - prev.pos.x, prev.pos.y - tip.pos.y);
      const targetRotZ = ropeAngleZ * 0.82 - tipVel.x * 0.95;
      const hoverTiltX = !isDragging && isHovered ? hoverNdcY * 0.16 : 0;
      const hoverTiltY = !isDragging && isHovered ? hoverNdcX * 0.2 : 0;

      velRotZ += (targetRotZ - rotZ) * 24 * dt;
      velRotZ *= 0.88;
      rotZ += velRotZ * dt;

      const targetRotX = hoverTiltX + tipVel.y * 1.1;
      velRotX += (targetRotX - rotX) * 20 * dt;
      velRotX *= 0.88;
      rotX += velRotX * dt;

      if (!isDragging && Math.abs(velRotY) < 1.2) {
        targetFaceY = Math.round(rotY / Math.PI) * Math.PI;
        velRotY += (targetFaceY + hoverTiltY - rotY) * 7.5 * dt;
      }
      velRotY *= isDragging ? 0.92 : 0.945;
      rotY += velRotY * dt;

      cardPivot.position.copy(tip.pos);
      cardPivot.rotation.set(rotX, rotY, rotZ);

      // 4. Rebuild 3D Curved Ribbon Geometry
      const curve = new THREE.CatmullRomCurve3(curvePoints);
      const posAttr = ribbonGeo.attributes.position as THREE.BufferAttribute;

      for (let i = 0; i <= RIBBON_SEGS; i++) {
        const t = i / RIBBON_SEGS;
        const pt = curve.getPoint(t);
        curve.getTangent(t, tangent);
        side.crossVectors(tangent, viewDir);
        if (side.lengthSq() < 0.0001) {
          side.set(1, 0, 0);
        } else {
          side.normalize();
        }
        const twistAngle = Math.sin(rotY) * 0.35 * t;
        const cosT = Math.cos(twistAngle);
        const sinT = Math.sin(twistAngle);
        const sx = side.x * cosT * RIBBON_HALF_W;
        const sy = side.y * cosT * RIBBON_HALF_W;
        const sz = sinT * RIBBON_HALF_W;

        posAttr.setXYZ(i * 2, pt.x - sx, pt.y - sy, pt.z - sz);
        posAttr.setXYZ(i * 2 + 1, pt.x + sx, pt.y + sy, pt.z + sz);
      }
      posAttr.needsUpdate = true;
      ribbonGeo.computeVertexNormals();

      renderer.render(scene, camera);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      setCursorBodyState(false, false);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", releaseDrag);
      window.removeEventListener("pointercancel", releaseDrag);
      window.removeEventListener("touchmove", onTouchMove);

      bodyGeo.dispose();
      bodyMat.dispose();
      frontGeo.dispose();
      frontMat.dispose();
      currentFrontTex.dispose();
      backGeo.dispose();
      backMat.dispose();
      backTex.dispose();
      ribbonGeo.dispose();
      ribbonMat.dispose();
      strapTex.dispose();
      metalMat.dispose();
      renderer.dispose();
    };
  }, [photoSrc, name, role, gravity, desktopAnchorRatio]);

  if (webglFailed) {
    return (
      <div
        className={`pointer-events-auto relative flex items-center justify-center rounded-3xl border border-zinc-200 bg-zinc-900 p-6 dark:border-zinc-800 ${className}`}
      >
        <Image
          src={photoSrc}
          alt={name}
          width={240}
          height={288}
          className="h-72 w-auto object-contain drop-shadow-xl"
        />
      </div>
    );
  }

  return (
    <div
      className={`pointer-events-none relative select-none ${className}`}
      data-lanyard-state={dragging ? "grabbing" : hoveredCard ? "grab" : "idle"}
    >
      {/* Full-width 3D WebGL Canvas (clicks pass through empty space to Hero links!) */}
      <div
        ref={containerRef}
        className="h-[480px] w-full md:h-[580px]"
        aria-label={
          lang === "id"
            ? "Kartu ID 3D Lanyard interaktif — tarik bebas ke seluruh area, lempar, atau klik dua kali untuk memutar"
            : "Interactive 3D Lanyard ID Card — drag freely, throw, or double-click to flip"
        }
      />

      {/* Interactive Hint + Flip Button positioned under the lanyard column */}
      <div className="pointer-events-none absolute right-0 bottom-3 left-0 flex items-center justify-center gap-2 md:left-[56%] md:justify-center">
        <span
          className={`rounded-full border border-zinc-200/80 bg-white/85 px-3 py-1 font-mono text-[11px] text-zinc-600 backdrop-blur-sm transition-opacity duration-500 dark:border-zinc-800 dark:bg-zinc-900/85 dark:text-zinc-400 ${
            interacted ? "opacity-65" : "opacity-100"
          }`}
        >
          {lang === "id" ? "Tarik Bebas · Lempar · 3D" : "Drag Freely · Throw · 3D"}
        </span>
        <button
          type="button"
          onClick={() => flipTriggerRef.current?.()}
          className="pointer-events-auto rounded-full border border-emerald-200 bg-emerald-50/90 px-3 py-1 font-mono text-[11px] font-medium text-emerald-700 backdrop-blur-sm transition hover:bg-emerald-100 cursor-pointer dark:border-emerald-500/30 dark:bg-emerald-500/15 dark:text-emerald-300 dark:hover:bg-emerald-500/25"
        >
          {lang === "id" ? "Putar Kartu ↻" : "Flip Card ↻"}
        </button>
      </div>
    </div>
  );
}

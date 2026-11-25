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
  const w = 1024;
  const h = 1536;
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d")!;

  // Rich dark obsidian card gradient
  const bg = ctx.createLinearGradient(0, 0, w, h);
  bg.addColorStop(0, "#0b0f14");
  bg.addColorStop(0.55, "#111827");
  bg.addColorStop(1, "#090d12");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, w, h);

  // Subtle architectural dot grid
  ctx.fillStyle = "rgba(255,255,255,0.045)";
  for (let gx = 40; gx < w; gx += 44) {
    for (let gy = 40; gy < h; gy += 44) {
      ctx.beginPath();
      ctx.arc(gx, gy, 1.6, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Soft studio emerald glow behind portrait
  const glow = ctx.createRadialGradient(w / 2, 540, 40, w / 2, 540, 440);
  glow.addColorStop(0, "rgba(16, 185, 129, 0.34)");
  glow.addColorStop(0.55, "rgba(16, 185, 129, 0.10)");
  glow.addColorStop(1, "rgba(16, 185, 129, 0)");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, w, h);

  // Top emerald accent strip
  const topBar = ctx.createLinearGradient(0, 0, w, 0);
  topBar.addColorStop(0, "#059669");
  topBar.addColorStop(0.5, "#34d399");
  topBar.addColorStop(1, "#0ea5e9");
  ctx.fillStyle = topBar;
  ctx.fillRect(0, 0, w, 18);

  // Lanyard punch slot visual
  drawRoundedRect(ctx, w / 2 - 86, 56, 172, 34, 17);
  ctx.fillStyle = "#030712";
  ctx.fill();
  ctx.strokeStyle = "rgba(255,255,255,0.16)";
  ctx.lineWidth = 3;
  ctx.stroke();

  // Top brand header
  ctx.fillStyle = "rgba(255,255,255,0.55)";
  ctx.font = "600 24px ui-monospace, SFMono-Regular, Menlo, monospace";
  ctx.textAlign = "left";
  ctx.fillText("PORTFOLIO PASS", 64, 148);

  // Live dot + ACTIVE pill
  drawRoundedRect(ctx, w - 238, 118, 174, 44, 22);
  ctx.fillStyle = "rgba(16, 185, 129, 0.14)";
  ctx.fill();
  ctx.strokeStyle = "rgba(52, 211, 153, 0.45)";
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillStyle = "#34d399";
  ctx.beginPath();
  ctx.arc(w - 208, 140, 7, 0, Math.PI * 2);
  ctx.fill();
  ctx.font = "700 21px ui-monospace, SFMono-Regular, Menlo, monospace";
  ctx.fillText("VERIFIED", w - 190, 148);

  // Portrait frame container
  const frameX = 64;
  const frameY = 196;
  const frameW = w - 128;
  const frameH = 740;

  ctx.save();
  drawRoundedRect(ctx, frameX, frameY, frameW, frameH, 36);
  const frameBg = ctx.createLinearGradient(frameX, frameY, frameX, frameY + frameH);
  frameBg.addColorStop(0, "rgba(255,255,255,0.06)");
  frameBg.addColorStop(0.7, "rgba(16,185,129,0.10)");
  frameBg.addColorStop(1, "rgba(9,13,18,0.85)");
  ctx.fillStyle = frameBg;
  ctx.fill();
  ctx.clip();

  // Decorative studio rings inside portrait box
  ctx.strokeStyle = "rgba(52, 211, 153, 0.14)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(w / 2, frameY + 350, 260, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(w / 2, frameY + 350, 340, 0, Math.PI * 2);
  ctx.stroke();

  if (photo && photo.naturalWidth > 0) {
    // Draw portrait cutout crisp and centered, anchored to bottom of frame
    const scale = Math.min((frameW * 0.96) / photo.naturalWidth, (frameH * 0.97) / photo.naturalHeight);
    const drawW = photo.naturalWidth * scale;
    const drawH = photo.naturalHeight * scale;
    const drawX = (w - drawW) / 2;
    const drawY = frameY + frameH - drawH + 10;
    ctx.drawImage(photo, drawX, drawY, drawW, drawH);
  }

  // Soft bottom fade over portrait edge
  const fade = ctx.createLinearGradient(0, frameY + frameH - 130, 0, frameY + frameH);
  fade.addColorStop(0, "rgba(9, 13, 18, 0)");
  fade.addColorStop(1, "rgba(9, 13, 18, 0.92)");
  ctx.fillStyle = fade;
  ctx.fillRect(frameX, frameY + frameH - 130, frameW, 130);
  ctx.restore();

  // Portrait frame border
  drawRoundedRect(ctx, frameX, frameY, frameW, frameH, 36);
  ctx.strokeStyle = "rgba(255,255,255,0.12)";
  ctx.lineWidth = 2.5;
  ctx.stroke();

  // Name & Role
  ctx.textAlign = "left";
  ctx.fillStyle = "#ffffff";
  ctx.font = "800 62px ui-sans-serif, system-ui, -apple-system, sans-serif";
  ctx.fillText(name.toUpperCase(), 64, 1026);

  ctx.fillStyle = "#34d399";
  ctx.font = "600 28px ui-monospace, SFMono-Regular, Menlo, monospace";
  ctx.fillText(role.toUpperCase(), 64, 1078);

  // Domain pills
  const pills = ["IoT & ESP32", "NEXT.JS", "AI / ML", "IREX GOLD"];
  let px = 64;
  const py = 1126;
  ctx.font = "600 22px ui-monospace, SFMono-Regular, Menlo, monospace";
  for (const label of pills) {
    const tw = ctx.measureText(label).width;
    const pw = tw + 40;
    drawRoundedRect(ctx, px, py, pw, 48, 14);
    ctx.fillStyle = "rgba(255,255,255,0.07)";
    ctx.fill();
    ctx.strokeStyle = "rgba(255,255,255,0.13)";
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.fillStyle = "#e4e4e7";
    ctx.fillText(label, px + 20, py + 31);
    px += pw + 16;
  }

  // Divider
  ctx.strokeStyle = "rgba(255,255,255,0.1)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(64, 1230);
  ctx.lineTo(w - 64, 1230);
  ctx.stroke();

  // Footer info + crisp barcode
  ctx.fillStyle = "rgba(255,255,255,0.45)";
  ctx.font = "500 22px ui-monospace, SFMono-Regular, Menlo, monospace";
  ctx.fillText("LOCATION", 64, 1286);
  ctx.fillText("ID NUMBER", 64, 1384);

  ctx.fillStyle = "#f4f4f5";
  ctx.font = "600 28px ui-sans-serif, system-ui, sans-serif";
  ctx.fillText("Pekanbaru, Indonesia", 64, 1326);
  ctx.font = "600 28px ui-monospace, SFMono-Regular, Menlo, monospace";
  ctx.fillText("TB-2026-IOT-07", 64, 1424);

  // Stylized barcode right side
  const bars = [4, 2, 6, 3, 2, 8, 3, 2, 5, 2, 4, 7, 2, 3, 6, 2, 4, 3, 7, 2, 5, 3, 4];
  let bx = w - 310;
  ctx.fillStyle = "rgba(244,244,245,0.85)";
  for (let i = 0; i < bars.length; i++) {
    const bw = bars[i] * 2.2;
    if (i % 2 === 0) {
      ctx.fillRect(bx, 1272, bw, 118);
    }
    bx += bw + 4;
  }
  ctx.fillStyle = "rgba(255,255,255,0.45)";
  ctx.font = "500 20px ui-monospace, SFMono-Regular, Menlo, monospace";
  ctx.fillText("TUGOOD7 · 2026", w - 310, 1424);

  // Inner card border highlight
  drawRoundedRect(ctx, 16, 16, w - 32, h - 32, 46);
  ctx.strokeStyle = "rgba(255,255,255,0.12)";
  ctx.lineWidth = 3;
  ctx.stroke();

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  texture.needsUpdate = true;
  return texture;
}

function createCardBackTexture(name: string): THREE.CanvasTexture {
  const w = 1024;
  const h = 1536;
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d")!;

  const bg = ctx.createLinearGradient(0, 0, w, h);
  bg.addColorStop(0, "#090d12");
  bg.addColorStop(0.5, "#111827");
  bg.addColorStop(1, "#070a0e");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, w, h);

  // Subtle emerald accent stripe
  ctx.fillStyle = "#10b981";
  ctx.fillRect(0, 0, w, 18);

  // Lanyard slot
  drawRoundedRect(ctx, w / 2 - 86, 56, 172, 34, 17);
  ctx.fillStyle = "#030712";
  ctx.fill();
  ctx.strokeStyle = "rgba(255,255,255,0.16)";
  ctx.lineWidth = 3;
  ctx.stroke();

  // Header
  ctx.textAlign = "center";
  ctx.fillStyle = "#34d399";
  ctx.font = "700 28px ui-monospace, SFMono-Regular, Menlo, monospace";
  ctx.fillText("ENGINEER CREDENTIALS", w / 2, 188);

  ctx.fillStyle = "#ffffff";
  ctx.font = "800 50px ui-sans-serif, system-ui, sans-serif";
  ctx.fillText(name.toUpperCase(), w / 2, 256);

  // Highlights cards
  const badges = [
    { title: "GOLD AWARD · IREX 2024", sub: "Universiti Teknologi Mara, Malaysia" },
    { title: "INTELLECTUAL PROPERTY (HKI)", sub: "Deep Learning Patient Anomaly Detection" },
    { title: "B.SC. COMPUTER SCIENCE", sub: "Universitas Islam Riau · GPA 3.79 / 4.00" },
    { title: "20+ SHIPPED PROJECTS", sub: "IoT · ESP32 · Full-Stack Web · AI/ML" },
  ];

  let y = 330;
  ctx.textAlign = "left";
  for (const item of badges) {
    drawRoundedRect(ctx, 80, y, w - 160, 134, 24);
    ctx.fillStyle = "rgba(255,255,255,0.05)";
    ctx.fill();
    ctx.strokeStyle = "rgba(52, 211, 153, 0.25)";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = "#34d399";
    ctx.font = "700 25px ui-monospace, SFMono-Regular, Menlo, monospace";
    ctx.fillText(item.title, 116, y + 54);

    ctx.fillStyle = "#d4d4d8";
    ctx.font = "500 25px ui-sans-serif, system-ui, sans-serif";
    ctx.fillText(item.sub, 116, y + 98);
    y += 162;
  }

  // Stylized geometric QR badge at bottom
  const qrSize = 220;
  const qrX = w / 2 - qrSize / 2;
  const qrY = 1028;
  drawRoundedRect(ctx, qrX - 18, qrY - 18, qrSize + 36, qrSize + 36, 24);
  ctx.fillStyle = "#ffffff";
  ctx.fill();

  const cells = 11;
  const cell = qrSize / cells;
  ctx.fillStyle = "#090d12";
  for (let r = 0; r < cells; r++) {
    for (let c = 0; c < cells; c++) {
      const corner =
        (r < 3 && c < 3) || (r < 3 && c >= cells - 3) || (r >= cells - 3 && c < 3);
      const pattern = corner || ((r * 7 + c * 13 + r * c) % 3 === 0);
      if (pattern) {
        ctx.fillRect(qrX + c * cell + 2, qrY + r * cell + 2, cell - 4, cell - 4);
      }
    }
  }

  ctx.textAlign = "center";
  ctx.fillStyle = "#e4e4e7";
  ctx.font = "600 26px ui-monospace, SFMono-Regular, Menlo, monospace";
  ctx.fillText("github.com/Tugood7", w / 2, 1344);
  ctx.fillStyle = "#34d399";
  ctx.font = "500 24px ui-monospace, SFMono-Regular, Menlo, monospace";
  ctx.fillText("tubagusdwifikri@gmail.com", w / 2, 1392);
  ctx.fillStyle = "rgba(255,255,255,0.45)";
  ctx.font = "500 22px ui-monospace, SFMono-Regular, Menlo, monospace";
  ctx.fillText("bumbuket.tugoodly.my.id", w / 2, 1442);

  drawRoundedRect(ctx, 16, 16, w - 32, h - 32, 46);
  ctx.strokeStyle = "rgba(255,255,255,0.12)";
  ctx.lineWidth = 3;
  ctx.stroke();

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
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

  // Subtle woven stripes on edges
  ctx.fillStyle = "#10b981";
  ctx.fillRect(0, 8, 1024, 5);
  ctx.fillRect(0, 115, 1024, 5);

  ctx.fillStyle = "#e4e4e7";
  ctx.font = "700 34px ui-monospace, SFMono-Regular, Menlo, monospace";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("TU BAGUS  ·  ENGINEER  ·  TU BAGUS  ·  ENGINEER  ·", 512, 66);

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.repeat.set(2.2, 1);
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
  const geom = new THREE.ShapeGeometry(shape, 16);
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
  gravity = -24,
  className = "",
}: LanyardCardProps) {
  const { lang } = useApp();
  const containerRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
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

    const width = container.clientWidth || 360;
    const height = container.clientHeight || 480;

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, width / height, 0.1, 100);
    camera.position.set(0, 0.25, 9.6);

    // Studio lighting for crisp metallic clasp & glossy badge
    const ambient = new THREE.AmbientLight(0xffffff, 1.35);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(4, 6, 8);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x34d399, 1.8);
    rimLight.position.set(-5, 2, 4);
    scene.add(rimLight);

    const backLight = new THREE.DirectionalLight(0x38bdf8, 1.2);
    backLight.position.set(2, -3, -6);
    scene.add(backLight);

    // Card Dimensions (portrait 2:3 ID badge)
    const cardW = 2.25;
    const cardH = 3.35;
    const cardR = 0.17;
    const cardDepth = 0.05;

    const cardPivot = new THREE.Group();
    scene.add(cardPivot);

    // Offset so cardPivot origin is at the top clasp attachment point!
    const cardMeshGroup = new THREE.Group();
    cardMeshGroup.position.set(0, -(cardH / 2 + 0.24), 0);
    cardPivot.add(cardMeshGroup);

    // Extruded 3D body
    const bodyShape = createRoundedCardShape(cardW, cardH, cardR);
    const bodyGeo = new THREE.ExtrudeGeometry(bodyShape, {
      depth: cardDepth,
      bevelEnabled: true,
      bevelSegments: 4,
      steps: 1,
      bevelSize: 0.015,
      bevelThickness: 0.015,
    });
    bodyGeo.center();

    const bodyMat = new THREE.MeshPhysicalMaterial({
      color: 0x111827,
      metalness: 0.25,
      roughness: 0.28,
      clearcoat: 0.85,
      clearcoatRoughness: 0.15,
    });
    const bodyMesh = new THREE.Mesh(bodyGeo, bodyMat);
    cardMeshGroup.add(bodyMesh);

    // Front & Back Texture Faces
    const frontGeo = createRoundedPlaneGeometry(cardW - 0.03, cardH - 0.03, cardR - 0.01);
    const frontTexInitial = createCardFrontTexture(null, name, role);
    const frontMat = new THREE.MeshPhysicalMaterial({
      map: frontTexInitial,
      roughness: 0.22,
      metalness: 0.08,
      clearcoat: 0.9,
      clearcoatRoughness: 0.14,
    });
    const frontFace = new THREE.Mesh(frontGeo, frontMat);
    frontFace.position.z = cardDepth / 2 + 0.018;
    cardMeshGroup.add(frontFace);

    const backGeo = createRoundedPlaneGeometry(cardW - 0.03, cardH - 0.03, cardR - 0.01);
    const backTex = createCardBackTexture(name);
    const backMat = new THREE.MeshPhysicalMaterial({
      map: backTex,
      roughness: 0.28,
      metalness: 0.1,
      clearcoat: 0.75,
      clearcoatRoughness: 0.2,
    });
    const backFace = new THREE.Mesh(backGeo, backMat);
    backFace.rotation.y = Math.PI;
    backFace.position.z = -(cardDepth / 2 + 0.018);
    cardMeshGroup.add(backFace);

    // Metallic Clasp & Swivel Ring at top of card
    const metalMat = new THREE.MeshStandardMaterial({
      color: 0xd4d4d8,
      metalness: 0.88,
      roughness: 0.22,
    });

    const clipBar = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.26, 0.13), metalMat);
    clipBar.position.set(0, cardH / 2 + 0.02, 0);
    cardMeshGroup.add(clipBar);

    const swivelNeck = new THREE.Mesh(
      new THREE.CylinderGeometry(0.065, 0.075, 0.2, 16),
      metalMat
    );
    swivelNeck.position.set(0, cardH / 2 + 0.2, 0);
    cardMeshGroup.add(swivelNeck);

    const claspRing = new THREE.Mesh(
      new THREE.TorusGeometry(0.11, 0.026, 12, 24),
      metalMat
    );
    claspRing.position.set(0, cardH / 2 + 0.31, 0);
    cardMeshGroup.add(claspRing);

    // Load actual user cutout photo and repaint crisp front texture
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

    // 3D Lanyard Ribbon Strap driven by Verlet Rope Physics
    const NODE_COUNT = 8;
    const ANCHOR = new THREE.Vector3(0, 4.3, 0);
    const SEG_LEN = 0.36;

    interface RopeNode {
      pos: THREE.Vector3;
      old: THREE.Vector3;
    }

    // Start with a lively drop-in swing
    const nodes: RopeNode[] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      const startX = i * 0.16;
      const startY = ANCHOR.y - i * SEG_LEN * 0.72 + 1.1;
      const startZ = Math.sin(i * 0.4) * 0.15;
      nodes.push({
        pos: new THREE.Vector3(startX, startY, startZ),
        old: new THREE.Vector3(startX - 0.06, startY + 0.04, startZ),
      });
    }

    const RIBBON_SEGS = 28;
    const RIBBON_HALF_W = 0.145;
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
      metalness: 0.08,
      side: THREE.DoubleSide,
    });
    const ribbonMesh = new THREE.Mesh(ribbonGeo, ribbonMat);
    scene.add(ribbonMesh);

    // Rigid-body angular state for card spin/flip & tilt
    let rotX = 0.08;
    let rotY = -0.35;
    let rotZ = 0.18;
    let velRotX = 0;
    let velRotY = 2.4; // subtle entrance twist
    let velRotZ = 0;
    let targetFaceY = 0; // snaps cleanly to 0 (front) or Math.PI (back) when settled

    // Pointer interaction state
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

    const updateNdc = (clientX: number, clientY: number) => {
      const rect = renderer.domElement.getBoundingClientRect();
      pointerNdc.x = ((clientX - rect.left) / rect.width) * 2 - 1;
      pointerNdc.y = -((clientY - rect.top) / rect.height) * 2 + 1;
    };

    const onPointerDown = (e: PointerEvent) => {
      updateNdc(e.clientX, e.clientY);
      raycaster.setFromCamera(pointerNdc, camera);
      const hits = raycaster.intersectObject(cardPivot, true);
      if (hits.length > 0) {
        isDragging = true;
        setDragging(true);
        setInteracted(true);
        renderer.domElement.setPointerCapture(e.pointerId);
        raycaster.ray.intersectPlane(dragPlane, dragHit);
        const endNode = nodes[NODE_COUNT - 1].pos;
        grabOffset.copy(endNode).sub(dragHit);
        lastDragPos.copy(dragHit);
        dragVelocity.set(0, 0, 0);
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      updateNdc(e.clientX, e.clientY);
      hoverNdcX = pointerNdc.x;
      hoverNdcY = pointerNdc.y;

      if (isDragging) {
        raycaster.setFromCamera(pointerNdc, camera);
        if (raycaster.ray.intersectPlane(dragPlane, dragHit)) {
          dragVelocity.copy(dragHit).sub(lastDragPos);
          lastDragPos.copy(dragHit);
          // Impart spin when dragging sideways
          velRotY += dragVelocity.x * 1.45;
          velRotX -= dragVelocity.y * 0.65;
        }
      } else {
        raycaster.setFromCamera(pointerNdc, camera);
        isHovered = raycaster.intersectObject(cardPivot, true).length > 0;
      }
    };

    const releaseDrag = (e?: PointerEvent) => {
      if (!isDragging) return;
      isDragging = false;
      setDragging(false);
      if (e && renderer.domElement.hasPointerCapture(e.pointerId)) {
        renderer.domElement.releasePointerCapture(e.pointerId);
      }
      // Throw impulse!
      const tip = nodes[NODE_COUNT - 1];
      tip.old.copy(tip.pos).sub(dragVelocity.clone().multiplyScalar(0.85));
      velRotY += dragVelocity.x * 3.2;
      velRotZ -= dragVelocity.x * 1.4;
      // Snap target face to nearest 0 or PI multiple
      targetFaceY = Math.round(rotY / Math.PI) * Math.PI;
    };

    const triggerFlip = () => {
      setInteracted(true);
      targetFaceY += Math.PI;
      velRotY += 8.5;
      // Small upward pop on flip
      nodes[NODE_COUNT - 1].old.y -= 0.08;
    };
    flipTriggerRef.current = triggerFlip;

    const onDoubleClick = () => {
      triggerFlip();
    };

    renderer.domElement.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", releaseDrag);
    window.addEventListener("pointercancel", releaseDrag);
    renderer.domElement.addEventListener("dblclick", onDoubleClick);

    const handleResize = () => {
      if (!container) return;
      const w2 = container.clientWidth || 360;
      const h2 = container.clientHeight || 480;
      camera.aspect = w2 / h2;
      camera.updateProjectionMatrix();
      renderer.setSize(w2, h2);
    };
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Reusable vectors for animation loop
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
      const damping = 0.982;
      const idleWind = Math.sin(now * 0.0014) * 0.35;

      for (let i = 1; i < NODE_COUNT; i++) {
        const n = nodes[i];
        const vx = (n.pos.x - n.old.x) * damping;
        const vy = (n.pos.y - n.old.y) * damping;
        const vz = (n.pos.z - n.old.z) * damping;
        n.old.copy(n.pos);

        const weightScale = i === NODE_COUNT - 1 ? 1.45 : 1.0;
        n.pos.x += vx + idleWind * dtSq;
        n.pos.y += vy + gravity * weightScale * dtSq;
        n.pos.z += vz - n.pos.z * 1.8 * dtSq;
      }

      // If dragging, pull end node smoothly toward cursor
      if (isDragging) {
        const tip = nodes[NODE_COUNT - 1];
        const targetX = THREE.MathUtils.clamp(dragHit.x + grabOffset.x, -3.1, 3.1);
        const targetY = THREE.MathUtils.clamp(dragHit.y + grabOffset.y, -1.6, 3.4);
        tip.pos.x = THREE.MathUtils.lerp(tip.pos.x, targetX, 0.42);
        tip.pos.y = THREE.MathUtils.lerp(tip.pos.y, targetY, 0.42);
        tip.pos.z = THREE.MathUtils.lerp(tip.pos.z, 0.45, 0.25);
        tip.old.copy(tip.pos);
      }

      // 2. Distance Constraints (multiple iterations for crisp tension)
      for (let iter = 0; iter < 12; iter++) {
        nodes[0].pos.copy(ANCHOR);
        for (let i = 0; i < NODE_COUNT - 1; i++) {
          const a = nodes[i].pos;
          const b = nodes[i + 1].pos;
          diff.subVectors(b, a);
          const dist = diff.length() || 0.0001;
          const error = (dist - SEG_LEN) / dist;

          if (i === 0) {
            b.addScaledVector(diff, -error);
          } else if (isDragging && i + 1 === NODE_COUNT - 1) {
            a.addScaledVector(diff, error * 0.85);
            b.addScaledVector(diff, -error * 0.15);
          } else {
            a.addScaledVector(diff, error * 0.5);
            b.addScaledVector(diff, -error * 0.5);
          }
        }
      }

      // 3. Card orientation physics (pendulum tilt + interactive hover + flip spin)
      const tip = nodes[NODE_COUNT - 1];
      const prev = nodes[NODE_COUNT - 2];
      tipVel.subVectors(tip.pos, tip.old);

      const ropeAngleZ = Math.atan2(tip.pos.x - prev.pos.x, prev.pos.y - tip.pos.y);
      const targetRotZ = ropeAngleZ * 0.88 - tipVel.x * 1.1;
      const hoverTiltX = !isDragging && isHovered ? hoverNdcY * 0.22 : 0;
      const hoverTiltY = !isDragging && isHovered ? hoverNdcX * 0.26 : 0;

      velRotZ += (targetRotZ - rotZ) * 26 * dt;
      velRotZ *= 0.88;
      rotZ += velRotZ * dt;

      const targetRotX = hoverTiltX + tipVel.y * 1.3;
      velRotX += (targetRotX - rotX) * 20 * dt;
      velRotX *= 0.88;
      rotX += velRotX * dt;

      // Softly restore Y rotation to nearest clean front/back face when not spinning fast
      if (!isDragging) {
        if (Math.abs(velRotY) < 1.2) {
          targetFaceY = Math.round(rotY / Math.PI) * Math.PI;
          velRotY += (targetFaceY + hoverTiltY - rotY) * 7.5 * dt;
        }
      }
      velRotY *= isDragging ? 0.92 : 0.945;
      rotY += velRotY * dt;

      cardPivot.position.copy(tip.pos);
      cardPivot.rotation.set(rotX, rotY, rotZ);

      // 4. Rebuild 3D Curved Ribbon Geometry along Verlet chain
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
        // Subtle twist near the clasp so strap aligns naturally with card yaw
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
      renderer.domElement.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", releaseDrag);
      window.removeEventListener("pointercancel", releaseDrag);
      renderer.domElement.removeEventListener("dblclick", onDoubleClick);

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
  }, [photoSrc, name, role, gravity]);

  if (webglFailed) {
    return (
      <div
        className={`relative flex items-center justify-center rounded-3xl border border-zinc-200 bg-zinc-900 p-6 dark:border-zinc-800 ${className}`}
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
      className={`relative select-none ${className}`}
      data-cursor={dragging ? "grabbing" : "grab"}
    >
      {/* Subtle top anchor bracket visual */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 z-10 h-2.5 w-16 -translate-x-1/2 rounded-b-full bg-zinc-300/80 shadow-xs dark:bg-zinc-700/90"
      />

      {/* 3D WebGL Canvas */}
      <div
        ref={containerRef}
        className={`h-[430px] w-full sm:h-[470px] ${
          dragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        aria-label={
          lang === "id"
            ? "Kartu ID 3D Lanyard interaktif — tarik, lempar, atau klik dua kali untuk memutar"
            : "Interactive 3D Lanyard ID Card — drag, throw, or double-click to flip"
        }
      />

      {/* Subtle Interactive Hint + Flip Button */}
      <div className="pointer-events-none absolute right-0 bottom-1 left-0 flex items-center justify-center gap-2">
        <span
          className={`rounded-full border border-zinc-200/80 bg-white/80 px-3 py-1 font-mono text-[11px] text-zinc-500 backdrop-blur-sm transition-opacity duration-500 dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-400 ${
            interacted ? "opacity-60" : "opacity-100"
          }`}
        >
          {lang === "id" ? "Tarik · Lempar · 3D" : "Drag · Throw · 3D"}
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

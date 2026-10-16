/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
!(function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "d1978eb3-1c24-5d44-8bff-e45fa11287ad");
  } catch (e2) {
  }
})();
var CONFETTI_COLORS = ["#ff4d6d", "#ffb703", "#ffe66d", "#36d399", "#38bdf8", "#8b5cf6", "#f472b6"], PARTICLE_COUNT = 180, MAX_ACTIVE_CONFETTI_PARTICLES = PARTICLE_COUNT * 5, GRAVITY_PX_PER_SECOND_SQUARED = 500;
function randomBetween(t, e, s) {
  return e + t() * (s - e);
}
function centeredRandom(t) {
  return (t() + t() + t() - 1.5) / 1.5;
}
function createConfettiParticles({ width: t, height: e, count: s = PARTICLE_COUNT, random: i = Math.random }) {
  return Array.from({ length: s }, (h, n) => {
    const o = randomBetween(i, 0.72, 1.34), a = i(), r = randomBetween(i, 1350, 1550) / o ** 0.35, l = centeredRandom(i) * (Math.PI / 12), f = randomBetween(i, 5, 11);
    return { x: t / 2 + randomBetween(i, -10, 10), y: e + randomBetween(i, 5, 14), velocityX: Math.sin(l) * r + randomBetween(i, -35, 35), velocityY: -Math.cos(l) * r, rotation: randomBetween(i, 0, Math.PI * 2), angularVelocity: randomBetween(i, -20, 20), flipPhase: randomBetween(i, 0, Math.PI * 2), ageSeconds: -randomBetween(i, 0, 0.12), width: f, height: f * randomBetween(i, 0.45, 1.15), mass: o, ascentDrag: 0.95 + a * 0.58, terminalFallSpeed: 38 + o * 22 + (1 - a) * 20, horizontalDrag: randomBetween(i, 0.6, 1.3), windSpeed: randomBetween(i, -24, 24), flutterAcceleration: randomBetween(i, 95, 190) * (0.8 + a) / o, flutterFrequency: randomBetween(i, 5, 11), flutterPhase: randomBetween(i, 0, Math.PI * 2), angularDrag: randomBetween(i, 0.25, 0.7), flutterTorque: randomBetween(i, 25, 60), torqueFrequency: randomBetween(i, 4, 9), flipSpeed: randomBetween(i, 10, 24), cornerSkew: randomBetween(i, -0.22, 0.22), color: CONFETTI_COLORS[n % CONFETTI_COLORS.length], lifetimeSeconds: randomBetween(i, 9, 13) };
  });
}
function appendConfettiBurst(t, e) {
  const s = Math.max(0, MAX_ACTIVE_CONFETTI_PARTICLES - t.length), i = e.count ?? PARTICLE_COUNT, h = Math.min(i, s);
  return h === 0 ? 0 : (t.push(...createConfettiParticles({ ...e, count: h })), h);
}
function updateConfettiParticle(t, e, s) {
  if (t.ageSeconds += e, t.ageSeconds < 0) return true;
  const i = t.velocityY < 0 ? Math.max(0.82, Math.min(1.65, t.ascentDrag / t.mass)) : GRAVITY_PX_PER_SECOND_SQUARED / t.terminalFallSpeed, h = Math.max(0, 1 - Math.abs(t.velocityY) / 700), n = Math.sin(t.ageSeconds * t.flutterFrequency + t.flutterPhase) * t.flutterAcceleration * h;
  t.velocityX += (n - t.horizontalDrag * (t.velocityX - t.windSpeed)) * e, t.velocityY += (GRAVITY_PX_PER_SECOND_SQUARED - i * t.velocityY) * e, t.x += t.velocityX * e, t.y += t.velocityY * e;
  const o = Math.sin(t.ageSeconds * t.torqueFrequency + t.flutterPhase) * t.flutterTorque * (0.35 + h * 0.65);
  t.angularVelocity += (o - t.angularDrag * t.angularVelocity) * e, t.rotation += t.angularVelocity * e, t.flipPhase += t.flipSpeed * e;
  const a = t.x < -t.width * 2 || t.x > s.width + t.width * 2, r = t.velocityY > 0 && t.y > s.height + t.height * 2;
  return t.ageSeconds < t.lifetimeSeconds && !a && !r;
}
var MAX_FRAME_DELTA_SECONDS = 1 / 30, EffectsWorker = class {
  constructor() {
    this.context = null, this.particles = [], this.width = 0, this.height = 0;
  }
  handleMessage(t) {
    switch (t.type) {
      case "initialize":
        this.initialize(t.canvas, t.size);
        return;
      case "resize":
        this.resize(t.size);
        return;
      case "showConfetti":
        this.showConfetti();
        return;
    }
  }
  resetAnimation() {
    this.frameHandle !== void 0 && (globalThis.cancelAnimationFrame(this.frameHandle), this.frameHandle = void 0), this.particles.length = 0, this.context?.clearRect(0, 0, this.width, this.height);
  }
  initialize(t, e) {
    this.resetAnimation(), this.context = t.getContext("2d"), this.resize(e);
  }
  resize(t) {
    if (!this.context) return;
    const e = this.width > 0 ? t.width / this.width : 1, s = this.height > 0 ? t.height / this.height : 1;
    for (const h of this.particles) h.x *= e, h.y *= s;
    this.width = Math.max(1, t.width), this.height = Math.max(1, t.height);
    const i = t.devicePixelRatio;
    this.context.canvas.width = Math.round(this.width * i), this.context.canvas.height = Math.round(this.height * i), this.context.setTransform(i, 0, 0, i, 0, 0);
  }
  showConfetti() {
    this.context && (appendConfettiBurst(this.particles, { width: this.width, height: this.height }), this.frameHandle === void 0 && (this.lastFrameTime = void 0, this.scheduleAnimationFrame()));
  }
  renderAnimationFrame(t) {
    const e = this.context;
    if (!e) {
      this.frameHandle = void 0;
      return;
    }
    const s = this.lastFrameTime === void 0 ? 1 / 60 : Math.min(MAX_FRAME_DELTA_SECONDS, Math.max(0, (t - this.lastFrameTime) / 1e3));
    this.lastFrameTime = t, e.clearRect(0, 0, this.width, this.height);
    let i = 0;
    const h = { width: this.width, height: this.height };
    for (const n of this.particles) updateConfettiParticle(n, s, h) && (this.particles[i] = n, i++, this.drawConfettiParticle(e, n));
    if (this.particles.length = i, this.particles.length === 0) {
      this.frameHandle = void 0;
      return;
    }
    this.scheduleAnimationFrame();
  }
  scheduleAnimationFrame() {
    this.frameHandle = globalThis.requestAnimationFrame((t) => this.renderAnimationFrame(t));
  }
  drawConfettiParticle(t, e) {
    if (e.ageSeconds < 0) return;
    const s = e.lifetimeSeconds - 1.5, i = e.ageSeconds <= s ? 1 : Math.max(0, (e.lifetimeSeconds - e.ageSeconds) / 1.5), h = e.width / 2, n = e.height / 2, o = 0.16 + Math.abs(Math.cos(e.flipPhase)) * 0.84, a = e.cornerSkew * e.width;
    t.save(), t.globalAlpha = i, t.translate(e.x, e.y), t.rotate(e.rotation), t.scale(1, o), t.fillStyle = e.color, t.beginPath(), t.moveTo(-h + a, -n), t.lineTo(h, -n + a * 0.25), t.lineTo(h - a, n), t.lineTo(-h, n - a * 0.25), t.closePath(), t.fill(), t.restore();
  }
}, effectsWorker = new EffectsWorker();
globalThis.onmessage = (t) => {
  effectsWorker.handleMessage(t.data);
};

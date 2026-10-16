!(function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "ba96d3dc-f391-5ca9-9bce-7e8f11d98e7c");
  } catch (e2) {
  }
})();
const sw = self, VERSION = 6, maxActiveHostResourceResponseBodies = 32, resourceCacheName = `vscode-resource-cache-${VERSION}`, rootPath = sw.location.pathname.replace(/\/service-worker.js$/, ""), searchParams = new URL(location.toString()).searchParams, remoteAuthority = searchParams.get("remoteAuthority"), shouldLimitHostResourceResponseBodies = searchParams.get("platform") === "electron", ID = searchParams.get("id"), resourceBaseAuthority = searchParams.get("vscode-resource-base-authority"), resolveTimeout = 3e4;
class RequestStore {
  constructor() {
    this.map = /* @__PURE__ */ new Map(), this.requestPool = 0;
  }
  create() {
    const e = ++this.requestPool;
    let r;
    const s = new Promise((l) => r = l), n = { resolve: r, promise: s };
    this.map.set(e, n);
    const i = setTimeout(() => {
      clearTimeout(i);
      const l = this.map.get(e);
      if (l === n) {
        l.resolve({ status: "timeout" }), this.map.delete(e);
        return;
      }
    }, resolveTimeout);
    return { requestId: e, promise: s };
  }
  resolve(e, r) {
    const s = this.map.get(e);
    return s ? (s.resolve({ status: "ok", value: r }), this.map.delete(e), true) : false;
  }
}
class AsyncSemaphore {
  constructor(e) {
    this.maxConcurrency = e, this.activeCount = 0, this.waiters = [];
  }
  acquire() {
    return this.activeCount < this.maxConcurrency && this.waiters.length === 0 ? (this.activeCount++, Promise.resolve(this.createReleaser())) : new Promise((e) => this.waiters.push(e));
  }
  createReleaser() {
    let e = false;
    return () => {
      if (e) return;
      e = true;
      const r = this.waiters.shift();
      r ? r(this.createReleaser()) : this.activeCount--;
    };
  }
}
function createJoinedFinalizer(t, e) {
  let r = e, s = false;
  return () => {
    s || (r--, r === 0 && (s = true, t()));
  };
}
function trackReadableStreamLifetime(t, e) {
  const r = t.getReader();
  let s = false;
  const n = () => {
    s || (s = true, e());
  };
  return new ReadableStream({ async pull(u) {
    try {
      const { done: i, value: l } = await r.read();
      if (i) {
        n(), u.close();
        return;
      }
      u.enqueue(l);
    } catch (i) {
      throw n(), i;
    }
  }, cancel(u) {
    const i = r.cancel(u).catch(() => {
    });
    return shouldLimitHostResourceResponseBodies ? i.finally(n) : (n(), i);
  } });
}
const resourceRequestStore = new RequestStore(), hostResourceResponseBodySemaphore = new AsyncSemaphore(maxActiveHostResourceResponseBodies), safariResourceStreams = /* @__PURE__ */ new Map(), localhostRequestStore = new RequestStore(), unauthorized = () => new Response("Unauthorized", { status: 401 }), notFound = () => new Response("Not Found", { status: 404 }), methodNotAllowed = () => new Response("Method Not Allowed", { status: 405 }), requestTimeout = () => new Response("Request Timeout", { status: 408 });
sw.addEventListener("message", async (t) => {
  switch (t.data.channel) {
    case "version": {
      const e = t.source;
      sw.clients.get(e.id).then((r) => {
        r && r.postMessage({ channel: "version", version: VERSION });
      });
      return;
    }
    case "did-load-resource": {
      const e = t.data.data;
      if (e.status === 200 || e.status === 206) {
        let r;
        if (e.stream) r = e.stream;
        else {
          const s = new TransformStream(), n = s.writable.getWriter();
          safariResourceStreams.set(e.id, n), n.closed.then(() => safariResourceStreams.delete(e.id), () => safariResourceStreams.delete(e.id)), r = s.readable;
        }
        e.stream ? resourceRequestStore.resolve(e.id, { status: e.status, id: e.id, path: e.path, mime: e.mime, etag: e.etag, mtime: e.mtime, stream: r, range: e.range }) || t.waitUntil(r.cancel().catch(() => {
        })) : resourceRequestStore.resolve(e.id, { status: e.status, id: e.id, path: e.path, mime: e.mime, etag: e.etag, mtime: e.mtime, stream: r, range: e.range });
      } else resourceRequestStore.resolve(e.id, e) || console.log("Could not resolve unknown resource", e.path);
      return;
    }
    case "did-load-resource-chunk": {
      const e = t.data.data, r = safariResourceStreams.get(e.id);
      r && r.write(e.data).catch(() => {
        safariResourceStreams.delete(e.id);
      });
      return;
    }
    case "did-load-resource-end": {
      const e = t.data.data, r = safariResourceStreams.get(e.id);
      r && (e.error ? r.abort(new Error("Stream error")).catch(() => {
      }) : r.close().catch(() => {
      }), safariResourceStreams.delete(e.id));
      return;
    }
    case "did-load-localhost": {
      const e = t.data.data;
      localhostRequestStore.resolve(e.id, e.location) || console.log("Could not resolve unknown localhost", e.origin);
      return;
    }
    default: {
      console.log("Unknown message");
      return;
    }
  }
}), sw.addEventListener("fetch", (t) => {
  const e = new URL(t.request.url);
  if (typeof resourceBaseAuthority == "string" && e.protocol === "https:" && e.hostname.endsWith("." + resourceBaseAuthority)) switch (t.request.method) {
    case "GET":
    case "HEAD": {
      const r = e.hostname.slice(0, e.hostname.length - (resourceBaseAuthority.length + 1)), s = r.split("+", 1)[0], n = r.slice(s.length + 1);
      return t.respondWith(processResourceRequest(t, { scheme: s, authority: n, path: e.pathname, query: e.search.replace(/^\?/, "") }));
    }
    default:
      return t.respondWith(methodNotAllowed());
  }
  if (e.origin !== sw.origin && e.host === remoteAuthority) switch (t.request.method) {
    case "GET":
    case "HEAD":
      return t.respondWith(processResourceRequest(t, { path: e.pathname, scheme: e.protocol.slice(0, e.protocol.length - 1), authority: e.host, query: e.search.replace(/^\?/, "") }));
    default:
      return t.respondWith(methodNotAllowed());
  }
  if (e.origin !== sw.origin && e.host.match(/^(localhost|127.0.0.1|0.0.0.0):(\d+)$/)) return t.respondWith(processLocalhostRequest(t, e));
}), sw.addEventListener("install", (t) => {
  t.waitUntil(sw.skipWaiting());
}), sw.addEventListener("activate", (t) => {
  t.waitUntil(sw.clients.claim());
});
async function processResourceRequest(t, e) {
  const r = await sw.clients.get(t.clientId);
  let s;
  if (r) s = getWebviewIdForClient(r);
  else {
    const a = await getWorkerClientForId(t.clientId);
    if (a) s = getWebviewIdForClient(a);
    else return console.error("Could not find inner client for request"), notFound();
  }
  if (!s) return console.error("Could not resolve webview id"), notFound();
  const n = t.request.method === "GET" && !t.request.headers.get("range"), u = (a, m, h) => {
    if (a.status === "timeout") return h(), requestTimeout();
    const o = a.value;
    if (o.status === 304) {
      if (m) return h(), m.clone();
      throw new Error("No cache found");
    }
    if (o.status === 401) return h(), unauthorized();
    if (o.status !== 200 && o.status !== 206) return h(), notFound();
    const c = { ...{ "Access-Control-Allow-Origin": "*" }, "Content-Type": o.mime };
    o.etag && (c.ETag = o.etag, c["Cache-Control"] = "no-cache"), o.mtime && (c["Last-Modified"] = new Date(o.mtime).toUTCString());
    const w = new URL(t.request.url).searchParams.get("vscode-coi");
    if (w === "3" ? (c["Cross-Origin-Opener-Policy"] = "same-origin", c["Cross-Origin-Embedder-Policy"] = "require-corp") : w === "2" ? c["Cross-Origin-Embedder-Policy"] = "require-corp" : w === "1" && (c["Cross-Origin-Opener-Policy"] = "same-origin"), o.stream) {
      if (o.status === 206 && o.range) return c["Content-Range"] = o.range, c["Cache-Control"] = "no-store", new Response(trackReadableStreamLifetime(o.stream, h), { status: 206, headers: c });
      if (n && o.etag) {
        const [q, R] = o.stream.tee(), C = createJoinedFinalizer(h, 2), E = new Response(trackReadableStreamLifetime(q, C), { status: 200, headers: c }), k = new Response(R, { status: 200, headers: c });
        return caches.open(resourceCacheName).then((v) => v.put(t.request, k)).then(void 0, () => {
        }).finally(C), E;
      }
      return new Response(trackReadableStreamLifetime(o.stream, h), { status: 200, headers: c });
    }
    return h(), notFound();
  }, i = await getOuterIframeClient(s);
  if (!i.length) return console.log("Could not find parent client for request"), notFound();
  let l;
  n && (l = await (await caches.open(resourceCacheName)).match(t.request));
  let g;
  const d = t.request.headers.get("range");
  if (d) {
    const a = d.match(/^bytes\=(\d+)\-(\d+)?$/);
    if (a) g = { start: Number(a[1]), end: a[2] !== void 0 ? Number(a[2]) : void 0 };
    else return new Response(null, { status: 416, headers: { "Access-Control-Allow-Origin": "*", "Content-Range": "*/*" } });
  }
  const f = shouldLimitHostResourceResponseBodies ? await hostResourceResponseBodySemaphore.acquire() : () => {
  }, { requestId: p, promise: y } = resourceRequestStore.create();
  try {
    for (const m of i) m.postMessage({ channel: "load-resource", id: p, scheme: e.scheme, authority: e.authority, path: e.path, query: e.query, ifNoneMatch: l?.headers.get("ETag"), range: g });
    const a = await y;
    try {
      return u(a, l, f);
    } catch (m) {
      throw f(), m;
    }
  } catch (a) {
    throw f(), a;
  }
}
async function processLocalhostRequest(t, e) {
  const r = await sw.clients.get(t.clientId);
  if (!r) return fetch(t.request);
  const s = getWebviewIdForClient(r);
  if (!s) return console.error("Could not resolve webview id"), fetch(t.request);
  const n = e.origin, u = async (d) => {
    if (d.status !== "ok" || !d.value) return fetch(t.request);
    const f = d.value, p = t.request.url.replace(new RegExp(`^${e.origin}(/|$)`), `${f}$1`);
    return new Response(null, { status: 302, headers: { Location: p } });
  }, i = await getOuterIframeClient(s);
  if (!i.length) return console.log("Could not find parent client for request"), notFound();
  const { requestId: l, promise: g } = localhostRequestStore.create();
  for (const d of i) d.postMessage({ channel: "load-localhost", origin: n, id: l });
  return g.then(u);
}
function getWebviewIdForClient(t) {
  return t.type === "worker" || t.type === "sharedworker" ? ID : new URL(t.url).searchParams.get("id");
}
async function getOuterIframeClient(t) {
  return (await sw.clients.matchAll({ includeUncontrolled: true })).filter((r) => {
    const s = new URL(r.url);
    return (s.pathname === `${rootPath}/` || s.pathname === `${rootPath}/index.html` || s.pathname === `${rootPath}/index-no-csp.html`) && s.searchParams.get("id") === t;
  });
}
async function getWorkerClientForId(t) {
  const e = await sw.clients.matchAll({ type: "worker" }), r = await sw.clients.matchAll({ type: "sharedworker" });
  return [...e, ...r].find((n) => n.id === t);
}

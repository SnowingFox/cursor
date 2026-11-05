// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/index.js sha256:30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
// module: ./src/agent/filesystem/merge.ts range:264516..266195
// basis: webpack-key
// confidence: B
// method: split
// run: w1-sdk-core 2026-11-05T10:09:19.995Z
// @ts-nocheck -- body copied verbatim from the published artifact; typed public surface lives in src/api-types/**
// note: webpack wrapper converted to ESM; internal identifiers remain minified (no semantic edits)

async function*n(t,r){const{compare:e,unique:n=!1}=r,a=new o(((t,r)=>{const n=e(t.value,r.value);return 0!==n?n:t.source-r.source})),u=t.map(((t,r)=>({iterator:Symbol.asyncIterator in t?t[Symbol.asyncIterator]():async function*(){yield*t}(),sourceIndex:r})));for(await Promise.all(u.map((async({iterator:t,sourceIndex:r})=>{const e=await t.next();e.done||a.push({value:e.value,iterator:t,source:r})})));a.size>0;){const t=a.pop();if(void 0===t)return;yield t.value,n?await i(a,t,e):await s(a,t)}}async function s(t,r){const e=await r.iterator.next();e.done||t.push({value:e.value,iterator:r.iterator,source:r.source})}async function i(t,r,e){for(await s(t,r);t.size>0;){const n=t.peek();if(void 0===n||0!==e(n.value,r.value))return;const i=t.pop();if(void 0===i)return;await s(t,i)}}class o{constructor(t){this.compare=t,this.items=[]}get size(){return this.items.length}peek(){return this.items[0]}push(t){this.items.push(t),this.bubbleUp(this.items.length-1)}pop(){const t=this.items[0];if(void 0===t)return;const r=this.items.pop();return void 0===r||0===this.items.length||(this.items[0]=r,this.bubbleDown(0)),t}bubbleUp(t){let r=t;for(;r>0;){const t=Math.floor((r-1)/2),e=this.items[t],n=this.items[r];if(void 0===e||void 0===n||this.compare(n,e)>=0)return;this.items[t]=n,this.items[r]=e,r=t}}bubbleDown(t){let r=t;for(;;){const t=2*r+1,e=t+1;let n=r;const s=this.items[n],i=this.items[t];void 0!==i&&void 0!==s&&this.compare(i,s)<0&&(n=t);const o=this.items[n],a=this.items[e];if(void 0!==a&&void 0!==o&&this.compare(a,o)<0&&(n=e),n===r)return;const u=this.items[r],c=this.items[n];if(void 0===u||void 0===c)return;this.items[r]=c,this.items[n]=u,r=n}}}
export { n as C };

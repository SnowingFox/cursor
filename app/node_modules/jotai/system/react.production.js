'use client';
System.register(["react","jotai/vanilla","jotai/vanilla/internals"],(function(N){"use strict";var p,E,V,v,m,R,k,C,w,D,P,T;return{setters:[function(s){p=s.createContext,E=s.useContext,V=s.useRef,v=s.createElement,m=s.default,R=s.useReducer,k=s.useEffect,C=s.useDebugValue,w=s.useCallback},function(s){D=s.getDefaultStore,P=s.createStore},function(s){T=s.INTERNAL_getBuildingBlocksRev3}],execute:(function(){N({Provider:_,useAtom:L,useAtomValue:x,useSetAtom:B,useStore:b});const s=p(void 0);function b(t){const e=E(s);return(t==null?void 0:t.store)||e||D()}function _({children:t,store:e}){const o=V(null);return e?v(s.Provider,{value:e},t):(o.current===null&&(o.current=P()),v(s.Provider,{value:o.current},t))}const h=t=>typeof(t==null?void 0:t.then)=="function",y=t=>{t.status||(t.status="pending",t.then(e=>{t.status="fulfilled",t.value=e},e=>{t.status="rejected",t.reason=e}))},I=m.use||(t=>{if(t.status==="pending")throw t;if(t.status==="fulfilled")return t.value;throw t.status==="rejected"?t.reason:(y(t),t)}),A=new WeakMap,j=(t,e,o)=>{const a=T(t),u=a[26];let f=A.get(e);return f||(f=new Promise((g,d)=>{let i=e;const l=n=>S=>{i===n&&g(S)},r=n=>S=>{i===n&&d(S)},c=()=>{try{const n=o();h(n)?(A.set(n,f),i=n,n.then(l(n),r(n)),u(a,t,n,c)):g(n)}catch(n){d(n)}};e.then(l(e),r(e)),u(a,t,e,c)}),A.set(e,f)),f};function x(t,e){const{delay:o,unstable_promiseStatus:a=!m.use}=e||{},u=b(e),[[f,g,d],i]=R(r=>{const c=u.get(t);return Object.is(r[0],c)&&r[1]===u&&r[2]===t?r:[c,u,t]},void 0,()=>[u.get(t),u,t]);let l=f;if((g!==u||d!==t)&&(i(),l=u.get(t)),k(()=>{const r=u.sub(t,()=>{if(a)try{const c=u.get(t);h(c)&&y(j(u,c,()=>u.get(t)))}catch(c){}if(typeof o=="number"){console.warn(`[DEPRECATED] delay option is deprecated and will be removed in v3.

Migration guide:

Create a custom hook like the following.

function useAtomValueWithDelay<Value>(
  atom: Atom<Value>,
  options: { delay: number },
): Value {
  const { delay } = options
  const store = useStore(options)
  const [value, setValue] = useState(() => store.get(atom))
  useEffect(() => {
    const unsub = store.sub(atom, () => {
      setTimeout(() => setValue(store.get(atom)), delay)
    })
    return unsub
  }, [store, atom, delay])
  return value
}
`),setTimeout(i,o);return}i()});return i(),r},[u,t,o,a]),C(l),h(l)){const r=j(u,l,()=>u.get(t));return a&&y(r),I(r)}return l}function B(t,e){const o=b(e);return w((...a)=>o.set(t,...a),[o,t])}function L(t,e){return[x(t,e),B(t,e)]}})}}));

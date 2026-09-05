"use strict";var c=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var m=c(function(B,l){
var A=require('@stdlib/assert-is-almost-same-value/dist');function S(e,r,a,t,u,n){var s,o,i,v;for(s=t.data,o=t.accessors[0],i=n,v=0;v<e;v++){if(A(r,o(s,i),a))return v;i+=u}return-1}l.exports=S
});var f=c(function(C,q){
var V=require('@stdlib/array-base-arraylike2object/dist'),g=require('@stdlib/assert-is-almost-same-value/dist'),p=m();function O(e,r,a,t,u,n){var s,o,i;if(e<=0)return-1;if(o=V(t),o.accessorProtocol)return p(e,r,a,o,u,n);for(s=n,i=0;i<e;i++){if(g(r,t[s],a))return i;s+=u}return-1}q.exports=O
});var x=c(function(D,d){
var b=require('@stdlib/strided-base-stride2offset/dist'),j=f();function k(e,r,a,t,u){return j(e,r,a,t,u,b(e,u))}d.exports=k
});var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=x(),w=f();R(y,"ndarray",w);module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

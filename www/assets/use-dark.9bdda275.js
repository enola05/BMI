import{a as l}from"./index.3d0740aa.js";let e=[],n=[];function u(a){n=n.filter(t=>t!==a)}function s(a){u(a),n.push(a)}function r(a){u(a),n.length===0&&e.length!==0&&(e[e.length-1](),e=[])}function i(a){n.length===0?a():e.push(a)}function c(a){e=e.filter(t=>t!==a)}const d={dark:{type:Boolean,default:null}};function f(a,t){return l(()=>a.dark===null?t.dark.isActive:a.dark)}export{f as a,s as b,i as c,c as d,r,d as u};
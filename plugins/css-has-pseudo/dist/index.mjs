import e from"postcss-selector-parser";import t from"postcss-value-parser";import{selectorSpecificity as s}from"@csstools/selector-specificity";function encodeCSS(e){if(""===e)return"";let t,s="";for(let o=0;o<e.length;o++)t=e.charCodeAt(o).toString(36),s+=0===o?t:"-"+t;return"csstools-has-"+s}function isGuardedByAtSupportsFromAtRuleParams(e){if(!e.toLowerCase().includes(":has("))return!1;let s=!1;try{const o=new Set;t(e).walk((e=>{if("function"===e.type&&"selector"===e.value.toLowerCase())return o.add(t.stringify(e.nodes)),!1})),o.forEach((e=>{selectorContainsHasPseudo(e)&&(s=!0)}))}catch(e){}return s}function selectorContainsHasPseudo(t){if(!t.toLowerCase().includes(":has("))return!1;let s=!1;try{e().astSync(t).walk((e=>{if("pseudo"===e.type&&":has"===e.value.toLowerCase()&&e.nodes&&e.nodes.length>0)return s=!0,!1}))}catch(e){}return s}const creator=t=>{const o={preserve:!0,specificityMatchingName:"does-not-exist",...t||{}},r=":not(#"+o.specificityMatchingName+")",n=":not(."+o.specificityMatchingName+")",a=":not("+o.specificityMatchingName+")";return{postcssPlugin:"css-has-pseudo",prepare(){const t=new WeakSet;return{RuleExit:(c,{result:i})=>{if(t.has(c))return;if(!c.selector.toLowerCase().includes(":has(")||isWithinSupportCheck(c))return;const l=c.selectors.map((t=>{if(!t.toLowerCase().includes(":has("))return t;let l;try{l=e().astSync(t)}catch(e){return c.warn(i,`Failed to parse selector : "${t}" with message: "${e.message}"`),t}if(void 0===l)return t;l.walkPseudos((t=>{let s=t.parent,r=!1;for(;s;)e.isPseudoClass(s)&&":has"===s.value.toLowerCase()&&(r=!0),s=s.parent;r&&(":visited"===t.value.toLowerCase()&&t.replaceWith(e.className({value:o.specificityMatchingName})),":any-link"===t.value.toLowerCase()&&(t.value=":link"))})),l.walkPseudos((t=>{if(":has"!==t.value.toLowerCase()||!t.nodes)return;let o=t.parent??t;if(o!==t){let t=o.nodes.length;e:for(let s=0;s<o.nodes.length;s++){const r=o.nodes[s];if(e.isPseudoElement(r))for(let e=s-1;e>=0;e--)if("combinator"!==o.nodes[s].type&&"comment"!==o.nodes[s].type){t=e+1;break e}}if(t<o.nodes.length){const s=e.selector({value:"",nodes:[]});o.nodes.slice(0,t).forEach((e=>{delete e.parent,s.append(e)}));const r=e.selector({value:"",nodes:[]});o.nodes.slice(t).forEach((e=>{delete e.parent,r.append(e)}));const n=e.selector({value:"",nodes:[]});n.append(s),n.append(r),o.replaceWith(n),o=s}}const c="["+encodeCSS(o.toString())+"]",i=s(o);let l=c;for(let e=0;e<i.a;e++)l+=r;const u=Math.max(1,i.b)-1;for(let e=0;e<u;e++)l+=n;for(let e=0;e<i.c;e++)l+=a;const p=e().astSync(l);o.replaceWith(p.nodes[0])}));const u=l.toString();return u!==t?".js-has-pseudo "+u:t}));l.join(",")!==c.selectors.join(",")&&(t.add(c),c.cloneBefore({selectors:l}),o.preserve||c.remove())}}}}};function isWithinSupportCheck(e){let t=e.parent;for(;t;){if("atrule"===t.type&&isGuardedByAtSupportsFromAtRuleParams(t.params))return!0;t=t.parent}return!1}creator.postcss=!0;export{creator as default};

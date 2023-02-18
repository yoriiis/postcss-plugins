import e from"@csstools/postcss-progressive-custom-properties";import t from"postcss-value-parser";function hasFallback(e){const t=e.parent;if(!t)return!1;const r=e.prop.toLowerCase(),n=t.index(e);for(let e=0;e<n;e++){const n=t.nodes[e];if("decl"===n.type&&n.prop.toLowerCase()===r)return!0}return!1}function includesGradientsFunction(e){return e.includes("conic-gradient(")||e.includes("linear-gradient(")||e.includes("radial-gradient(")||e.includes("repeating-conic-gradient(")||e.includes("repeating-linear-gradient(")||e.includes("repeating-radial-gradient(")}function hasSupportsAtRuleAncestor(e){let t=e.parent;for(;t;)if("atrule"===t.type){if("supports"===t.name.toLowerCase()&&includesGradientsFunction(t.params.toLowerCase()))return!0;t=t.parent}else t=t.parent;return!1}const r=["at","bottom","center","circle","closest-corner","closest-side","ellipse","farthest-corner","farthest-side","from","in","left","right","to","top"],isPunctuationCommaNode=e=>"div"===e.type&&","===e.value;function isNumericNode(e){try{return!1!==t.unit(null==e?void 0:e.value)}catch(e){return!1}}const basePlugin=e=>({postcssPlugin:"postcss-double-position-gradients",Declaration(n,{result:s}){if(!includesGradientsFunction(n.value.toLowerCase()))return;if(hasFallback(n))return;if(hasSupportsAtRuleAncestor(n))return;let i;try{i=t(n.value)}catch(e){n.warn(s,`Failed to parse value '${n.value}' as a CSS gradient. Leaving the original value intact.`)}if(void 0===i)return;i.walk((e=>{if("function"!==e.type||"conic-gradient"!==(t=e.value.toLowerCase())&&"linear-gradient"!==t&&"radial-gradient"!==t&&"repeating-conic-gradient"!==t&&"repeating-linear-gradient"!==t&&"repeating-radial-gradient"!==t)return;var t;const n=e.nodes.filter((e=>"comment"!==e.type&&"space"!==e.type));let s=!1;n.forEach(((t,n,i)=>{if("word"===t.type&&r.includes(t.value.toLowerCase())&&(s=!0),"div"===t.type&&","===t.value&&(s=!1),s)return;const o=Object(i[n-1]),a=Object(i[n-2]),c=Object(i[n+1]);if(a.type&&isNumericNode(o)&&isNumericNode(t)){const r=a,n={type:"div",value:",",before:isPunctuationCommaNode(c)?c.before:"",after:isPunctuationCommaNode(c)?"":" ",sourceIndex:0,sourceEndIndex:0};e.nodes.splice(e.nodes.indexOf(t)-1,0,n,r)}}))}));const o=i.toString();o!==n.value&&(n.cloneBefore({value:o}),null!=e&&e.preserve||n.remove())}});basePlugin.postcss=!0;const postcssPlugin=t=>{const r=Object.assign({enableProgressiveCustomProperties:!0,preserve:!0},t);return r.enableProgressiveCustomProperties&&r.preserve?{postcssPlugin:"postcss-double-position-gradients",plugins:[e(),basePlugin(r)]}:basePlugin(r)};postcssPlugin.postcss=!0;export{postcssPlugin as default};

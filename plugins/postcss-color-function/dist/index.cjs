"use strict";var e=require("@csstools/postcss-progressive-custom-properties"),s=require("@csstools/css-tokenizer"),r=require("@csstools/css-color-parser"),t=require("@csstools/css-parser-algorithms");function hasFallback(e){const s=e.parent;if(!s)return!1;const r=e.prop.toLowerCase(),t=s.index(e);for(let e=0;e<t;e++){const t=s.nodes[e];if("decl"===t.type&&t.prop.toLowerCase()===r)return!0}return!1}function hasSupportsAtRuleAncestor(e){let s=e.parent;for(;s;)if("atrule"===s.type){if("supports"===s.name&&-1!==s.params.indexOf("color("))return!0;s=s.parent}else s=s.parent;return!1}const o=/(color)\(/i,n=/^(color)$/i,basePlugin=e=>({postcssPlugin:"postcss-color-function",Declaration:a=>{const c=a.value;if(!o.test(c))return;if(hasFallback(a))return;if(hasSupportsAtRuleAncestor(a))return;const i=s.tokenize({css:c}),l=t.replaceComponentValues(t.parseCommaSeparatedListOfComponentValues(i),(e=>{if(t.isFunctionNode(e)&&n.test(e.getName())){const s=r.color(e);if(!s)return;if(s.syntaxFlags.has(r.SyntaxFlag.HasNoneKeywords))return;if(s.syntaxFlags.has(r.SyntaxFlag.RelativeColorSyntax))return;return r.serializeRGB(s)}})),p=t.stringify(l);p!==c&&(a.cloneBefore({value:p}),null!=e&&e.preserve||a.remove())}});basePlugin.postcss=!0;const postcssPlugin=s=>{const r=Object.assign({preserve:!1,enableProgressiveCustomProperties:!0},s);return r.enableProgressiveCustomProperties&&r.preserve?{postcssPlugin:"postcss-color-function",plugins:[e(),basePlugin(r)]}:basePlugin(r)};postcssPlugin.postcss=!0,module.exports=postcssPlugin;

<template><div><h1 id="attributestoobject" tabindex="-1"><a class="header-anchor" href="#attributestoobject"><span>attributesToObject</span></a></h1>
<p>The <code v-pre>attributesToObject</code> utility function converts HTML element attributes to an object.</p>
<h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> attributesToObject <span class="token keyword">from</span> <span class="token string">'@/utils/attributesToObject'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'example'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> attributes <span class="token operator">=</span> <span class="token function">attributesToObject</span><span class="token punctuation">(</span>element<span class="token punctuation">.</span>attributes<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>attributes<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>



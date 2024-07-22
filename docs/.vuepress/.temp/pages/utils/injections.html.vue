<template><div><h1 id="injections-utility" tabindex="-1"><a class="header-anchor" href="#injections-utility"><span>Injections Utility</span></a></h1>
<p>This file contains a set of utility functions for handling injections of components and text into the DOM.</p>
<h2 id="functions" tabindex="-1"><a class="header-anchor" href="#functions"><span>Functions</span></a></h2>
<h3 id="getuniqueselectorattributes" tabindex="-1"><a class="header-anchor" href="#getuniqueselectorattributes"><span><code v-pre>getUniqueSelectorAttributes</code></span></a></h3>
<p>Returns an array of unique selector attributes from a list of text injections.</p>
<h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters"><span>Parameters</span></a></h4>
<ul>
<li><code v-pre>injections: ITextInjection[]</code> - The list of text injections.</li>
</ul>
<h4 id="returns" tabindex="-1"><a class="header-anchor" href="#returns"><span>Returns</span></a></h4>
<ul>
<li><code v-pre>string[]</code> - An array of unique selector attributes.</li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> getUniqueSelectorAttributes <span class="token operator">=</span> <span class="token punctuation">(</span>injections<span class="token operator">:</span> ITextInjection<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token operator">...</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>injections<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token operator">:</span> ITextInjection<span class="token punctuation">)</span> <span class="token operator">=></span> item<span class="token punctuation">.</span>selector<span class="token punctuation">.</span>attribute<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="findelementsbyattribute" tabindex="-1"><a class="header-anchor" href="#findelementsbyattribute"><span><code v-pre>findElementsByAttribute</code></span></a></h3>
<p>Finds and returns all elements that have the specified attribute.</p>
<h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1"><span>Parameters</span></a></h4>
<ul>
<li><code v-pre>attribute: string</code> - The attribute to search for.</li>
</ul>
<h4 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1"><span>Returns</span></a></h4>
<ul>
<li><code v-pre>HTMLElement[]</code> - An array of elements with the specified attribute.</li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> findElementsByAttribute <span class="token operator">=</span> <span class="token punctuation">(</span>attribute<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> HTMLElement<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span>\`<span class="token punctuation">[</span>\$<span class="token punctuation">{</span>attribute<span class="token punctuation">}</span><span class="token punctuation">]</span>\`<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="striphtmlandnormalize" tabindex="-1"><a class="header-anchor" href="#striphtmlandnormalize"><span><code v-pre>stripHtmlAndNormalize</code></span></a></h3>
<p>Strips HTML tags from a string and normalizes whitespace, removing any line breaks.</p>
<h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2"><span>Parameters</span></a></h4>
<ul>
<li><code v-pre>html: string</code> - The HTML string to be stripped and normalized.</li>
</ul>
<h4 id="returns-2" tabindex="-1"><a class="header-anchor" href="#returns-2"><span>Returns</span></a></h4>
<ul>
<li><code v-pre>string</code> - The resulting text string.</li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> stripHtmlAndNormalize <span class="token operator">=</span> <span class="token punctuation">(</span>html<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> tmp <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    tmp<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> html<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> textContent <span class="token operator">=</span> tmp<span class="token punctuation">.</span>textContent <span class="token operator">||</span> tmp<span class="token punctuation">.</span>innerText <span class="token operator">||</span> <span class="token string">''</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> textContent<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\s+</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">' '</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="findinjection" tabindex="-1"><a class="header-anchor" href="#findinjection"><span><code v-pre>findInjection</code></span></a></h3>
<p>Searches for a matching injection that has the specified attribute and original content.</p>
<h4 id="parameters-3" tabindex="-1"><a class="header-anchor" href="#parameters-3"><span>Parameters</span></a></h4>
<ul>
<li><code v-pre>el: HTMLElement</code> - The element to match.</li>
<li><code v-pre>attribute: string</code> - The attribute to match.</li>
<li><code v-pre>injectionsArray: ITextInjection[]</code> - The array of injections to search.</li>
</ul>
<h4 id="returns-3" tabindex="-1"><a class="header-anchor" href="#returns-3"><span>Returns</span></a></h4>
<ul>
<li><code v-pre>ITextInjection | undefined</code> - The matching injection, or <code v-pre>undefined</code> if no match is found.</li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> findInjection <span class="token operator">=</span> <span class="token punctuation">(</span></span>
<span class="line">    el<span class="token operator">:</span> HTMLElement<span class="token punctuation">,</span></span>
<span class="line">    attribute<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span></span>
<span class="line">    injectionsArray<span class="token operator">:</span> ITextInjection<span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token operator">:</span> ITextInjection <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> injectionsArray<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span></span>
<span class="line">        <span class="token punctuation">(</span>injection<span class="token punctuation">)</span> <span class="token operator">=></span></span>
<span class="line">            el<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span>attribute<span class="token punctuation">)</span> <span class="token operator">===</span> injection<span class="token punctuation">.</span>selector<span class="token punctuation">.</span>value <span class="token operator">&amp;&amp;</span></span>
<span class="line">            <span class="token function">stripHtmlAndNormalize</span><span class="token punctuation">(</span>el<span class="token punctuation">.</span>innerHTML<span class="token punctuation">)</span> <span class="token operator">===</span></span>
<span class="line">                <span class="token function">stripHtmlAndNormalize</span><span class="token punctuation">(</span>injection<span class="token punctuation">.</span>content<span class="token punctuation">.</span>original<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="injector" tabindex="-1"><a class="header-anchor" href="#injector"><span><code v-pre>injector</code></span></a></h3>
<p>Creates a Vue component and injects it into the targeted element with the specified props.</p>
<h4 id="parameters-4" tabindex="-1"><a class="header-anchor" href="#parameters-4"><span>Parameters</span></a></h4>
<ul>
<li><code v-pre>component: Component</code> - The Vue component to be injected.</li>
<li><code v-pre>props: IInjectorProps</code> - The props to be passed to the component.</li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> injector <span class="token operator">=</span> <span class="token punctuation">(</span>component<span class="token operator">:</span> Component<span class="token punctuation">,</span> props<span class="token operator">:</span> IInjectorProps<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>props<span class="token punctuation">.</span>el <span class="token keyword">instanceof</span> <span class="token class-name">HTMLElement</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>component<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token operator">...</span>props <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">const</span> newEl <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        props<span class="token punctuation">.</span>el<span class="token punctuation">.</span><span class="token function">replaceWith</span><span class="token punctuation">(</span>newEl<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span>newEl<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'Provided element is not an HTMLElement'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="buttoninjector" tabindex="-1"><a class="header-anchor" href="#buttoninjector"><span><code v-pre>buttonInjector</code></span></a></h3>
<p>Creates a Vue component and injects it into the DOM, specifically for buttons, with the specified props.</p>
<h4 id="parameters-5" tabindex="-1"><a class="header-anchor" href="#parameters-5"><span>Parameters</span></a></h4>
<ul>
<li><code v-pre>component: Component</code> - The Vue component to be injected.</li>
<li><code v-pre>props: IButtonInjectorProps</code> - The props to be passed to the component.</li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> buttonInjector <span class="token operator">=</span> <span class="token punctuation">(</span>component<span class="token operator">:</span> Component<span class="token punctuation">,</span> props<span class="token operator">:</span> IButtonInjectorProps<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> vBtnMountpoint <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#v-btn-mountpoint'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>vBtnMountpoint<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> newBtnMountpoint <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        newBtnMountpoint<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">'id'</span><span class="token punctuation">,</span> <span class="token string">'v-btn-mountpoint'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        vBtnMountpoint <span class="token operator">=</span> newBtnMountpoint<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>component<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token operator">...</span>props <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">const</span> newEl <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    vBtnMountpoint<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>newEl<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span>newEl<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exported-functions" tabindex="-1"><a class="header-anchor" href="#exported-functions"><span>Exported Functions</span></a></h2>
<p>The following functions are exported from this module:</p>
<ul>
<li><code v-pre>getUniqueSelectorAttributes</code></li>
<li><code v-pre>findElementsByAttribute</code></li>
<li><code v-pre>findInjection</code></li>
<li><code v-pre>injector</code></li>
<li><code v-pre>stripHtmlAndNormalize</code></li>
<li><code v-pre>buttonInjector</code></li>
</ul>
</div></template>



<template><div><h1 id="main-js-documentation" tabindex="-1"><a class="header-anchor" href="#main-js-documentation"><span>main.js Documentation</span></a></h1>
<p>This file contains the main logic to bootstrap the injection of content on the website. It imports various components and utilities, defines handler functions for different types of injections, and executes these handlers to modify the DOM.</p>
<h2 id="imports" tabindex="-1"><a class="header-anchor" href="#imports"><span>Imports</span></a></h2>
<p>The following components and utilities are imported:</p>
<ul>
<li>
<p><strong>Components</strong>:</p>
<ul>
<li><code v-pre>TextInjector</code> from <code v-pre>./components/TextInjector.vue</code></li>
<li><code v-pre>DateTimeInjector</code> from <code v-pre>./components/DateTimeInjector.vue</code></li>
<li><code v-pre>DynamicTextInjector</code> from <code v-pre>./components/DynamicTextInjector.vue</code></li>
</ul>
</li>
<li>
<p><strong>Utilities</strong>:</p>
<ul>
<li><code v-pre>getUniqueSelectorAttributes</code></li>
<li><code v-pre>findElementsByAttribute</code></li>
<li><code v-pre>findInjection</code></li>
<li><code v-pre>injector</code></li>
<li>From <code v-pre>./utils/injections</code></li>
</ul>
</li>
<li>
<p><strong>Content to Inject</strong>:</p>
<ul>
<li><code v-pre>textInjectionContent</code></li>
<li><code v-pre>buttonInjectionContent</code></li>
<li><code v-pre>dateTimeInjectionContent</code></li>
<li><code v-pre>availableItemsContent</code></li>
<li>From <code v-pre>./contentToInject</code></li>
</ul>
</li>
<li>
<p><strong>Types</strong>:</p>
<ul>
<li><code v-pre>IDynamicTextInjection</code></li>
<li><code v-pre>IInjectionBase</code></li>
<li><code v-pre>ITextInjection</code></li>
<li>From <code v-pre>./types</code></li>
</ul>
</li>
</ul>
<h2 id="functions" tabindex="-1"><a class="header-anchor" href="#functions"><span>Functions</span></a></h2>
<h3 id="handletextinjections" tabindex="-1"><a class="header-anchor" href="#handletextinjections"><span><code v-pre>handleTextInjections</code></span></a></h3>
<p>Handles the injection of text content into the DOM elements.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> <span class="token function-variable function">handleTextInjections</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">injections</span><span class="token operator">:</span> ITextInjection<span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// Get all unique selector attributes</span></span>
<span class="line">    <span class="token keyword">const</span> selectorAttributes <span class="token operator">=</span> <span class="token function">getUniqueSelectorAttributes</span><span class="token punctuation">(</span>injections<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// Iterate over each unique selector attribute</span></span>
<span class="line">    selectorAttributes<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">attribute</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// Find elements that have this attribute</span></span>
<span class="line">        <span class="token keyword">const</span> domElements <span class="token operator">=</span> <span class="token function">findElementsByAttribute</span><span class="token punctuation">(</span>attribute<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        domElements<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>el <span class="token keyword">instanceof</span> <span class="token class-name">HTMLElement</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">// Find the corresponding injection for this element</span></span>
<span class="line">                <span class="token keyword">const</span> matchingInjection <span class="token operator">=</span> <span class="token function">findInjection</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> attribute<span class="token punctuation">,</span> injections<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">                <span class="token keyword">if</span> <span class="token punctuation">(</span>matchingInjection<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token comment">// Inject component</span></span>
<span class="line">                    <span class="token function">injector</span><span class="token punctuation">(</span>TextInjector<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">                        <span class="token literal-property property">text</span><span class="token operator">:</span> matchingInjection<span class="token punctuation">.</span>content<span class="token punctuation">.</span>translation<span class="token punctuation">,</span></span>
<span class="line">                        <span class="token literal-property property">el</span><span class="token operator">:</span> el<span class="token punctuation">,</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="handlebuttoninjections" tabindex="-1"><a class="header-anchor" href="#handlebuttoninjections"><span><code v-pre>handleButtonInjections</code></span></a></h3>
<p>Handles the injection of button content and updates attributes.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> <span class="token function-variable function">handleButtonInjections</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">injections</span><span class="token operator">:</span> ITextInjection<span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// Get all unique selector attributes</span></span>
<span class="line">    <span class="token keyword">const</span> selectorAttributes <span class="token operator">=</span> <span class="token function">getUniqueSelectorAttributes</span><span class="token punctuation">(</span>injections<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// Iterate over each unique selector attribute</span></span>
<span class="line">    selectorAttributes<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">attribute</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// Find elements that have this attribute</span></span>
<span class="line">        <span class="token keyword">const</span> domElements <span class="token operator">=</span> <span class="token function">findElementsByAttribute</span><span class="token punctuation">(</span>attribute<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        domElements<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>el <span class="token keyword">instanceof</span> <span class="token class-name">HTMLElement</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">// Find the corresponding injection for this element</span></span>
<span class="line">                <span class="token keyword">const</span> matchingInjection <span class="token operator">=</span> <span class="token function">findInjection</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> attribute<span class="token punctuation">,</span> injections<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">                <span class="token keyword">if</span> <span class="token punctuation">(</span>matchingInjection<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token comment">// Inject component</span></span>
<span class="line">                    <span class="token function">injector</span><span class="token punctuation">(</span>TextInjector<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">                        <span class="token literal-property property">text</span><span class="token operator">:</span> matchingInjection<span class="token punctuation">.</span>content<span class="token punctuation">.</span>translation<span class="token punctuation">,</span></span>
<span class="line">                        <span class="token literal-property property">el</span><span class="token operator">:</span> el<span class="token punctuation">,</span></span>
<span class="line">                        <span class="token literal-property property">newAttributes</span><span class="token operator">:</span> matchingInjection<span class="token punctuation">.</span>newAttributes<span class="token punctuation">,</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="handledatetimeinjection" tabindex="-1"><a class="header-anchor" href="#handledatetimeinjection"><span><code v-pre>handleDateTimeInjection</code></span></a></h3>
<p>Handles the injection of the current date and time into a specific element.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> <span class="token function-variable function">handleDateTimeInjection</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">injection</span><span class="token operator">:</span> IInjectionBase</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> domElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">#</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>injection<span class="token punctuation">.</span>selector<span class="token punctuation">.</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>domElement <span class="token keyword">instanceof</span> <span class="token class-name">HTMLElement</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">injector</span><span class="token punctuation">(</span>DateTimeInjector<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">el</span><span class="token operator">:</span> domElement<span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="handlequantityinjection" tabindex="-1"><a class="header-anchor" href="#handlequantityinjection"><span><code v-pre>handleQuantityInjection</code></span></a></h3>
<p>Handles the injection of dynamic text based on the quantity input field.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> <span class="token function-variable function">handleQuantityInjection</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">injection</span><span class="token operator">:</span> IDynamicTextInjection</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> domElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">#</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>injection<span class="token punctuation">.</span>selector<span class="token punctuation">.</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>domElement <span class="token keyword">instanceof</span> <span class="token class-name">HTMLElement</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">injector</span><span class="token punctuation">(</span>DynamicTextInjector<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">el</span><span class="token operator">:</span> domElement<span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">text</span><span class="token operator">:</span> injection<span class="token punctuation">.</span>content<span class="token punctuation">.</span>translation<span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">linkedInput</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">selector</span><span class="token operator">:</span> injection<span class="token punctuation">.</span>linkedInput<span class="token punctuation">.</span>selector<span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">value</span><span class="token operator">:</span> injection<span class="token punctuation">.</span>linkedInput<span class="token punctuation">.</span>value<span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="fix-for-website-bug" tabindex="-1"><a class="header-anchor" href="#fix-for-website-bug"><span>Fix for Website Bug</span></a></h2>
<p>Sets the maximum count attribute of the quantity input field to 5.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'input[data-pf-type="QuantityField"]'</span><span class="token punctuation">)</span><span class="token operator">?.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">'max'</span><span class="token punctuation">,</span> <span class="token string">'5'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="execution" tabindex="-1"><a class="header-anchor" href="#execution"><span>Execution</span></a></h2>
<p>Executes the handler functions to inject content into the website.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token function">handleTextInjections</span><span class="token punctuation">(</span>textInjectionContent<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">handleButtonInjections</span><span class="token punctuation">(</span>buttonInjectionContent<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">handleDateTimeInjection</span><span class="token punctuation">(</span>dateTimeInjectionContent<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">handleQuantityInjection</span><span class="token punctuation">(</span>availableItemsContent<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="summary" tabindex="-1"><a class="header-anchor" href="#summary"><span>Summary</span></a></h2>
<p>This <code v-pre>main.js</code> file is responsible for injecting various types of content into the website's DOM. It uses utility functions to find and inject the appropriate components into the target elements, ensuring that the content is dynamically updated based on the specified logic.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> TextInjector <span class="token keyword">from</span> <span class="token string">'./components/TextInjector.vue'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> DateTimeInjector <span class="token keyword">from</span> <span class="token string">'./components/DateTimeInjector.vue'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span></span>
<span class="line">    getUniqueSelectorAttributes<span class="token punctuation">,</span></span>
<span class="line">    findElementsByAttribute<span class="token punctuation">,</span></span>
<span class="line">    findInjection<span class="token punctuation">,</span></span>
<span class="line">    injector<span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./utils/injections'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span></span>
<span class="line">    textInjectionContent<span class="token punctuation">,</span></span>
<span class="line">    buttonInjectionContent<span class="token punctuation">,</span></span>
<span class="line">    dateTimeInjectionContent<span class="token punctuation">,</span></span>
<span class="line">    availableItemsContent<span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./contentToInject'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> type <span class="token punctuation">{</span> IDynamicTextInjection<span class="token punctuation">,</span> IInjectionBase<span class="token punctuation">,</span> ITextInjection <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./types'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> DynamicTextInjector <span class="token keyword">from</span> <span class="token string">'./components/DynamicTextInjector.vue'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Function to handle text injections</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">handleTextInjections</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">injections</span><span class="token operator">:</span> ITextInjection<span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// Get all unique selector attributes</span></span>
<span class="line">    <span class="token keyword">const</span> selectorAttributes <span class="token operator">=</span> <span class="token function">getUniqueSelectorAttributes</span><span class="token punctuation">(</span>injections<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// Iterate over each unique selector attribute</span></span>
<span class="line">    selectorAttributes<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">attribute</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// Find elements that have this attribute</span></span>
<span class="line">        <span class="token keyword">const</span> domElements <span class="token operator">=</span> <span class="token function">findElementsByAttribute</span><span class="token punctuation">(</span>attribute<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        domElements<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>el <span class="token keyword">instanceof</span> <span class="token class-name">HTMLElement</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">// Find the corresponding injection for this element</span></span>
<span class="line">                <span class="token keyword">const</span> matchingInjection <span class="token operator">=</span> <span class="token function">findInjection</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> attribute<span class="token punctuation">,</span> injections<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">                <span class="token keyword">if</span> <span class="token punctuation">(</span>matchingInjection<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token comment">// Inject component</span></span>
<span class="line">                    <span class="token function">injector</span><span class="token punctuation">(</span>TextInjector<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">                        <span class="token literal-property property">text</span><span class="token operator">:</span> matchingInjection<span class="token punctuation">.</span>content<span class="token punctuation">.</span>translation<span class="token punctuation">,</span></span>
<span class="line">                        <span class="token literal-property property">el</span><span class="token operator">:</span> el<span class="token punctuation">,</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">handleButtonInjections</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">injections</span><span class="token operator">:</span> ITextInjection<span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// Get all unique selector attributes</span></span>
<span class="line">    <span class="token keyword">const</span> selectorAttributes <span class="token operator">=</span> <span class="token function">getUniqueSelectorAttributes</span><span class="token punctuation">(</span>injections<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// Iterate over each unique selector attribute</span></span>
<span class="line">    selectorAttributes<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">attribute</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// Find elements that have this attribute</span></span>
<span class="line">        <span class="token keyword">const</span> domElements <span class="token operator">=</span> <span class="token function">findElementsByAttribute</span><span class="token punctuation">(</span>attribute<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        domElements<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>el <span class="token keyword">instanceof</span> <span class="token class-name">HTMLElement</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">// Find the corresponding injection for this element</span></span>
<span class="line">                <span class="token keyword">const</span> matchingInjection <span class="token operator">=</span> <span class="token function">findInjection</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> attribute<span class="token punctuation">,</span> injections<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">                <span class="token keyword">if</span> <span class="token punctuation">(</span>matchingInjection<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token comment">// Inject component</span></span>
<span class="line">                    <span class="token function">injector</span><span class="token punctuation">(</span>TextInjector<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">                        <span class="token literal-property property">text</span><span class="token operator">:</span> matchingInjection<span class="token punctuation">.</span>content<span class="token punctuation">.</span>translation<span class="token punctuation">,</span></span>
<span class="line">                        <span class="token literal-property property">el</span><span class="token operator">:</span> el<span class="token punctuation">,</span></span>
<span class="line">                        <span class="token literal-property property">newAttributes</span><span class="token operator">:</span> matchingInjection<span class="token punctuation">.</span>newAttributes<span class="token punctuation">,</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">handleDateTimeInjection</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">injection</span><span class="token operator">:</span> IInjectionBase</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> domElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">#</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>injection<span class="token punctuation">.</span>selector<span class="token punctuation">.</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>domElement <span class="token keyword">instanceof</span> <span class="token class-name">HTMLElement</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">injector</span><span class="token punctuation">(</span>DateTimeInjector<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">el</span><span class="token operator">:</span> domElement<span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">handleQuantityInjection</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">injection</span><span class="token operator">:</span> IDynamicTextInjection</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> domElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">#</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>injection<span class="token punctuation">.</span>selector<span class="token punctuation">.</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>domElement <span class="token keyword">instanceof</span> <span class="token class-name">HTMLElement</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">injector</span><span class="token punctuation">(</span>DynamicTextInjector<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">el</span><span class="token operator">:</span> domElement<span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">text</span><span class="token operator">:</span> injection<span class="token punctuation">.</span>content<span class="token punctuation">.</span>translation<span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">linkedInput</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">selector</span><span class="token operator">:</span> injection<span class="token punctuation">.</span>linkedInput<span class="token punctuation">.</span>selector<span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">value</span><span class="token operator">:</span> injection<span class="token punctuation">.</span>linkedInput<span class="token punctuation">.</span>value<span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Fix website bug with wrong max count</span></span>
<span class="line">document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'input[data-pf-type="QuantityField"]'</span><span class="token punctuation">)</span><span class="token operator">?.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">'max'</span><span class="token punctuation">,</span> <span class="token string">'5'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">handleTextInjections</span><span class="token punctuation">(</span>textInjectionContent<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">handleButtonInjections</span><span class="token punctuation">(</span>buttonInjectionContent<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">handleDateTimeInjection</span><span class="token punctuation">(</span>dateTimeInjectionContent<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">handleQuantityInjection</span><span class="token punctuation">(</span>availableItemsContent<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>



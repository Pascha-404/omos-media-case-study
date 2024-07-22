<template><div><h1 id="main-js" tabindex="-1"><a class="header-anchor" href="#main-js"><span>Main.js</span></a></h1>
<p>This file is the entry point for handling various injections in the application. It imports necessary components, utility functions, and content to inject into the DOM.</p>
<h2 id="imported-components" tabindex="-1"><a class="header-anchor" href="#imported-components"><span>Imported Components</span></a></h2>
<ul>
<li><code v-pre>TextInjector</code> - Component for injecting text.</li>
<li><code v-pre>DateTimeInjector</code> - Component for injecting date and time.</li>
<li><code v-pre>ButtonInjecton</code> - Component for injecting button attributes and text.</li>
<li><code v-pre>DynamicTextInjector</code> - Component for injecting dynamic text linked with input fields.</li>
</ul>
<h2 id="imported-utilities" tabindex="-1"><a class="header-anchor" href="#imported-utilities"><span>Imported Utilities</span></a></h2>
<ul>
<li><code v-pre>getUniqueSelectorAttributes</code> - Retrieves unique selector attributes from injections.</li>
<li><code v-pre>findElementsByAttribute</code> - Finds DOM elements by attribute.</li>
<li><code v-pre>findInjection</code> - Finds a matching injection for a DOM element.</li>
<li><code v-pre>injector</code> - Utility to inject a Vue component into a DOM element.</li>
<li><code v-pre>buttonInjector</code> - Utility to inject a button Vue component into a DOM element.</li>
</ul>
<h2 id="imported-content" tabindex="-1"><a class="header-anchor" href="#imported-content"><span>Imported Content</span></a></h2>
<ul>
<li><code v-pre>textInjectionContent</code> - Content for text injections.</li>
<li><code v-pre>buttonInjectionContent</code> - Content for button injections.</li>
<li><code v-pre>dateTimeInjectionContent</code> - Content for date and time injections.</li>
<li><code v-pre>availableItemsContent</code> - Content for dynamic text injections linked with input fields.</li>
</ul>
<h2 id="functions" tabindex="-1"><a class="header-anchor" href="#functions"><span>Functions</span></a></h2>
<h3 id="handletextinjections" tabindex="-1"><a class="header-anchor" href="#handletextinjections"><span><code v-pre>handleTextInjections</code></span></a></h3>
<p>Handles injecting text into DOM elements based on provided text injections.</p>
<h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters"><span>Parameters</span></a></h4>
<ul>
<li><code v-pre>injections: ITextInjection[]</code> - List of text injections.</li>
</ul>
<h4 id="process" tabindex="-1"><a class="header-anchor" href="#process"><span>Process</span></a></h4>
<ol>
<li>Retrieves unique selector attributes from the injections.</li>
<li>Finds DOM elements matching each selector attribute.</li>
<li>For each DOM element, finds the matching injection and injects the <code v-pre>TextInjector</code> component with the appropriate text.</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> <span class="token function-variable function">handleTextInjections</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">injections</span><span class="token operator">:</span> ITextInjection<span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> selectorAttributes <span class="token operator">=</span> <span class="token function">getUniqueSelectorAttributes</span><span class="token punctuation">(</span>injections<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    selectorAttributes<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">attribute</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> domElements <span class="token operator">=</span> <span class="token function">findElementsByAttribute</span><span class="token punctuation">(</span>attribute<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        domElements<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>el <span class="token keyword">instanceof</span> <span class="token class-name">HTMLElement</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">const</span> matchingInjection <span class="token operator">=</span> <span class="token function">findInjection</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> attribute<span class="token punctuation">,</span> injections<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token keyword">if</span> <span class="token punctuation">(</span>matchingInjection<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="handlebuttoninjections" tabindex="-1"><a class="header-anchor" href="#handlebuttoninjections"><span><code v-pre>handleButtonInjections</code></span></a></h3>
<p>Handles injecting button components into the DOM.</p>
<h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1"><span>Parameters</span></a></h4>
<ul>
<li><code v-pre>injections: ITextInjection[]</code> - List of button injections.</li>
</ul>
<h4 id="process-1" tabindex="-1"><a class="header-anchor" href="#process-1"><span>Process</span></a></h4>
<ol>
<li>Iterates over each injection.</li>
<li>Uses <code v-pre>buttonInjector</code> to inject the <code v-pre>ButtonInjecton</code> component with the appropriate text and attributes.</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> handleButtonInjections <span class="token operator">=</span> <span class="token punctuation">(</span>injections<span class="token operator">:</span> ITextInjection<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter"><span class="token keyword">void</span></span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    injections<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">injection</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">buttonInjector</span><span class="token punctuation">(</span>ButtonInjecton<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">text</span><span class="token operator">:</span> injection<span class="token punctuation">.</span>content<span class="token punctuation">.</span>translation<span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">newAttributes</span><span class="token operator">:</span> injection<span class="token punctuation">.</span>newAttributes<span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">selector</span><span class="token operator">:</span> injection<span class="token punctuation">.</span>selector<span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="handledatetimeinjection" tabindex="-1"><a class="header-anchor" href="#handledatetimeinjection"><span><code v-pre>handleDateTimeInjection</code></span></a></h3>
<p>Handles injecting the date and time component into a DOM element.</p>
<h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2"><span>Parameters</span></a></h4>
<ul>
<li><code v-pre>injection: IInjectionBase</code> - Date and time injection object.</li>
</ul>
<h4 id="process-2" tabindex="-1"><a class="header-anchor" href="#process-2"><span>Process</span></a></h4>
<ol>
<li>Finds the DOM element by ID from the injection's selector value.</li>
<li>Uses <code v-pre>injector</code> to inject the <code v-pre>DateTimeInjector</code> component into the found element.</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> <span class="token function-variable function">handleDateTimeInjection</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">injection</span><span class="token operator">:</span> IInjectionBase</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> domElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>\`#\$<span class="token punctuation">{</span>injection<span class="token punctuation">.</span>selector<span class="token punctuation">.</span>value<span class="token punctuation">}</span>\`<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>domElement <span class="token keyword">instanceof</span> <span class="token class-name">HTMLElement</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">injector</span><span class="token punctuation">(</span>DateTimeInjector<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">el</span><span class="token operator">:</span> domElement<span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="handlequantityinjection" tabindex="-1"><a class="header-anchor" href="#handlequantityinjection"><span><code v-pre>handleQuantityInjection</code></span></a></h3>
<p>Handles injecting dynamic text linked with input fields into a DOM element.</p>
<h4 id="parameters-3" tabindex="-1"><a class="header-anchor" href="#parameters-3"><span>Parameters</span></a></h4>
<ul>
<li><code v-pre>injection: IDynamicTextInjection</code> - Dynamic text injection object.</li>
</ul>
<h4 id="process-3" tabindex="-1"><a class="header-anchor" href="#process-3"><span>Process</span></a></h4>
<ol>
<li>Finds the DOM element by ID from the injection's selector value.</li>
<li>Uses <code v-pre>injector</code> to inject the <code v-pre>DynamicTextInjector</code> component into the found element with linked input properties.</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> <span class="token function-variable function">handleQuantityInjection</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">injection</span><span class="token operator">:</span> IDynamicTextInjection</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> domElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>\`#\$<span class="token punctuation">{</span>injection<span class="token punctuation">.</span>selector<span class="token punctuation">.</span>value<span class="token punctuation">}</span>\`<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="bug-fix" tabindex="-1"><a class="header-anchor" href="#bug-fix"><span>Bug Fix</span></a></h2>
<p>Fixes a website bug by setting the max count attribute for quantity input fields.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'input[data-pf-type="QuantityField"]'</span><span class="token punctuation">)</span><span class="token operator">?.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">'max'</span><span class="token punctuation">,</span> <span class="token string">'5'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="invocation" tabindex="-1"><a class="header-anchor" href="#invocation"><span>Invocation</span></a></h2>
<p>Calls the functions to handle various injections.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token function">handleTextInjections</span><span class="token punctuation">(</span>textInjectionContent<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">handleButtonInjections</span><span class="token punctuation">(</span>buttonInjectionContent<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">handleDateTimeInjection</span><span class="token punctuation">(</span>dateTimeInjectionContent<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">handleQuantityInjection</span><span class="token punctuation">(</span>availableItemsContent<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>



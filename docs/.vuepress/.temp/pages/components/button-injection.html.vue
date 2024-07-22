<template><div><h1 id="buttoninjection" tabindex="-1"><a class="header-anchor" href="#buttoninjection"><span>ButtonInjection</span></a></h1>
<p>The <code v-pre>ButtonInjection</code> component is a Vue component designed to inject new attributes and text into a specified button element on the page.</p>
<h2 id="code" tabindex="-1"><a class="header-anchor" href="#code"><span>Code</span></a></h2>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">"ts"</span><span class="token operator">></span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> <span class="token keyword">type</span> <span class="token class-name">PropType</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> IAttributes<span class="token punctuation">,</span> ISelector <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/types'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> attributesToObject <span class="token keyword">from</span> <span class="token string">'@/utils/attributesToObject'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    props<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        selector<span class="token operator">:</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> Object <span class="token keyword">as</span> PropType<span class="token operator">&lt;</span>ISelector<span class="token operator">></span><span class="token punctuation">,</span> required<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        newAttributes<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            type<span class="token operator">:</span> Object <span class="token keyword">as</span> PropType<span class="token operator">&lt;</span>IAttributes<span class="token operator">></span><span class="token punctuation">,</span></span>
<span class="line">            required<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        text<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            type<span class="token operator">:</span> String <span class="token keyword">as</span> PropType<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">></span><span class="token punctuation">,</span></span>
<span class="line">            required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">            targetElement<span class="token operator">:</span> <span class="token keyword">null</span> <span class="token keyword">as</span> HTMLElement <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span></span>
<span class="line">            attributes<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">as</span> IAttributes<span class="token punctuation">,</span></span>
<span class="line">            mergedSelector<span class="token operator">:</span> button<span class="token punctuation">[</span>\$<span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>selector<span class="token punctuation">.</span>attribute<span class="token punctuation">}</span><span class="token operator">=</span><span class="token string">"\${this.selector.value}"</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    computed<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">mergedAttributes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> IAttributes <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">const</span> filteredAttributes <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>attributes<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span>acc<span class="token punctuation">,</span> key<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>Object<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>newAttributes<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                    acc<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>attributes<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">                <span class="token keyword">return</span> acc<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">as</span> IAttributes<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">            <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span>filteredAttributes<span class="token punctuation">,</span> <span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>newAttributes <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    methods<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">updateAttributes</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>targetElement<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>mergedAttributes<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token keyword">this</span><span class="token punctuation">.</span>targetElement<span class="token operator">!</span><span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>mergedAttributes<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token keyword">this</span><span class="token punctuation">.</span>targetElement<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>text<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>targetElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>mergedSelector<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>targetElement<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>attributes <span class="token operator">=</span> <span class="token function">attributesToObject</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>targetElement<span class="token punctuation">.</span>attributes<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">updateAttributes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h2>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Required</th>
<th>Default</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>selector</code></td>
<td><code v-pre>Object</code></td>
<td>Yes</td>
<td>-</td>
<td>The selector object used to find the target button element.</td>
</tr>
<tr>
<td><code v-pre>newAttributes</code></td>
<td><code v-pre>Object</code></td>
<td>No</td>
<td><code v-pre>{}</code></td>
<td>The new attributes to be added or overwritten on the target button element.</td>
</tr>
<tr>
<td><code v-pre>text</code></td>
<td><code v-pre>String</code></td>
<td>Yes</td>
<td>-</td>
<td>The new text content to be set inside the target button element.</td>
</tr>
</tbody>
</table>
<h2 id="data-properties" tabindex="-1"><a class="header-anchor" href="#data-properties"><span>Data Properties</span></a></h2>
<h3 id="targetelement" tabindex="-1"><a class="header-anchor" href="#targetelement"><span><code v-pre>targetElement</code></span></a></h3>
<ul>
<li><strong>Type:</strong> <code v-pre>HTMLElement | null</code></li>
<li><strong>Description:</strong> Holds the reference to the target button element that matches the given selector.</li>
</ul>
<h3 id="attributes" tabindex="-1"><a class="header-anchor" href="#attributes"><span><code v-pre>attributes</code></span></a></h3>
<ul>
<li><strong>Type:</strong> <code v-pre>Object</code></li>
<li><strong>Description:</strong> Stores the current attributes of the target button element.</li>
</ul>
<h3 id="mergedselector" tabindex="-1"><a class="header-anchor" href="#mergedselector"><span><code v-pre>mergedSelector</code></span></a></h3>
<ul>
<li><strong>Type:</strong> <code v-pre>String</code></li>
<li><strong>Description:</strong> Constructs the CSS selector string based on the provided <code v-pre>selector</code> prop to find the target button element.</li>
</ul>
<h2 id="computed-properties" tabindex="-1"><a class="header-anchor" href="#computed-properties"><span>Computed Properties</span></a></h2>
<h3 id="mergedattributes" tabindex="-1"><a class="header-anchor" href="#mergedattributes"><span><code v-pre>mergedAttributes</code></span></a></h3>
<ul>
<li><strong>Type:</strong> <code v-pre>Object</code></li>
<li><strong>Description:</strong> Merges the current attributes of the target button element with the new attributes provided via the <code v-pre>newAttributes</code> prop. Existing attributes that are not overwritten by <code v-pre>newAttributes</code> are retained.</li>
</ul>
<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods"><span>Methods</span></a></h2>
<h3 id="updateattributes" tabindex="-1"><a class="header-anchor" href="#updateattributes"><span><code v-pre>updateAttributes</code></span></a></h3>
<ul>
<li><strong>Description:</strong> Updates the attributes and text content of the target button element.</li>
<li><strong>Details:</strong>
<ul>
<li>Iterates over the <code v-pre>mergedAttributes</code> and sets each attribute on the <code v-pre>targetElement</code>.</li>
<li>Updates the innerHTML of the <code v-pre>targetElement</code> to the provided <code v-pre>text</code> prop.</li>
</ul>
</li>
</ul>
<h2 id="lifecycle-hooks" tabindex="-1"><a class="header-anchor" href="#lifecycle-hooks"><span>Lifecycle Hooks</span></a></h2>
<h3 id="mounted" tabindex="-1"><a class="header-anchor" href="#mounted"><span><code v-pre>mounted</code></span></a></h3>
<ul>
<li><strong>Description:</strong> Called when the component is mounted. Finds the target button element using the <code v-pre>mergedSelector</code>, retrieves its current attributes, and updates the button with the new attributes and text.</li>
<li><strong>Details:</strong>
<ul>
<li>Uses <code v-pre>document.querySelector</code> to find the target button element.</li>
<li>Converts the current attributes of the target button element into an object using <code v-pre>attributesToObject</code>.</li>
<li>Calls <code v-pre>updateAttributes</code> to apply the new attributes and text.</li>
</ul>
</li>
</ul>
</div></template>



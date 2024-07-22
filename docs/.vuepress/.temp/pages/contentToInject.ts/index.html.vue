<template><div><h1 id="contenttoinject-ts-overview" tabindex="-1"><a class="header-anchor" href="#contenttoinject-ts-overview"><span>contentToInject.ts Overview</span></a></h1>
<p>The <code v-pre>contentToInject.ts</code> file serves as a database for content that needs to be injected into the page. All handlers in the <code v-pre>main.js</code> file work with data from this file. To add or delete injections, simply change the data of the corresponding object.</p>
<h2 id="text-injection-content" tabindex="-1"><a class="header-anchor" href="#text-injection-content"><span>Text Injection Content</span></a></h2>
<p>This array contains objects that define text content to be injected into elements on the page.</p>
<table>
<thead>
<tr>
<th>Key</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>injectionType</td>
<td>string</td>
<td>Type of the injection, in this case, 'text'.</td>
</tr>
<tr>
<td>selector</td>
<td>object</td>
<td>Object defining the selector attribute and value.</td>
</tr>
<tr>
<td>content</td>
<td>object</td>
<td>Object containing original and translated text.</td>
</tr>
</tbody>
</table>
<h3 id="example-object" tabindex="-1"><a class="header-anchor" href="#example-object"><span>Example Object</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    injectionType<span class="token operator">:</span> <span class="token string">'text'</span><span class="token punctuation">,</span></span>
<span class="line">    selector<span class="token operator">:</span> <span class="token punctuation">{</span> attribute<span class="token operator">:</span> <span class="token string">'data-pf-type'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">'Paragraph3'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    content<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        original<span class="token operator">:</span> <span class="token string">'Did you know that honey never spoils? ...'</span><span class="token punctuation">,</span></span>
<span class="line">        translation<span class="token operator">:</span> <span class="token string">'Wusstest du, dass Honig niemals verdirbt? ...'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="button-injection-content" tabindex="-1"><a class="header-anchor" href="#button-injection-content"><span>Button Injection Content</span></a></h2>
<p>This array contains objects that define button content and attributes to be injected into button elements on the page.</p>
<table>
<thead>
<tr>
<th>Key</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>injectionType</td>
<td>string</td>
<td>Type of the injection, in this case, 'button'.</td>
</tr>
<tr>
<td>selector</td>
<td>object</td>
<td>Object defining the selector attribute and value.</td>
</tr>
<tr>
<td>content</td>
<td>object</td>
<td>Object containing original and translated text.</td>
</tr>
<tr>
<td>newAttributes</td>
<td>object</td>
<td>Object containing new attributes to be added.</td>
</tr>
</tbody>
</table>
<h3 id="example-object-1" tabindex="-1"><a class="header-anchor" href="#example-object-1"><span>Example Object</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    injectionType<span class="token operator">:</span> <span class="token string">'button'</span><span class="token punctuation">,</span></span>
<span class="line">    selector<span class="token operator">:</span> <span class="token punctuation">{</span> attribute<span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">'add'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    content<span class="token operator">:</span> <span class="token punctuation">{</span> original<span class="token operator">:</span> <span class="token string">'Add To Cart'</span><span class="token punctuation">,</span> translation<span class="token operator">:</span> <span class="token string">'In den Warenkorb'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    newAttributes<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token punctuation">[</span><span class="token string">'data-soldout'</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">'Ausverkauft'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">[</span><span class="token string">'data-adding'</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">'Füge hinzu...'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">[</span><span class="token string">'data-added'</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">'Dankeschön!'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="date-time-injection-content" tabindex="-1"><a class="header-anchor" href="#date-time-injection-content"><span>Date Time Injection Content</span></a></h2>
<p>This object defines the date and time content to be injected into an element on the page.</p>
<table>
<thead>
<tr>
<th>Key</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>injectionType</td>
<td>string</td>
<td>Type of the injection, in this case, 'dateTime'.</td>
</tr>
<tr>
<td>selector</td>
<td>object</td>
<td>Object defining the selector attribute and value.</td>
</tr>
</tbody>
</table>
<h3 id="example-object-2" tabindex="-1"><a class="header-anchor" href="#example-object-2"><span>Example Object</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    injectionType<span class="token operator">:</span> <span class="token string">'dateTime'</span><span class="token punctuation">,</span></span>
<span class="line">    selector<span class="token operator">:</span> <span class="token punctuation">{</span> attribute<span class="token operator">:</span> <span class="token string">'id'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">'current-date-time'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="available-items-content" tabindex="-1"><a class="header-anchor" href="#available-items-content"><span>Available Items Content</span></a></h2>
<p>This object defines dynamic text content to be injected into an element on the page, based on user input.</p>
<table>
<thead>
<tr>
<th>Key</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>injectionType</td>
<td>string</td>
<td>Type of the injection, in this case, 'dynamicText'.</td>
</tr>
<tr>
<td>selector</td>
<td>object</td>
<td>Object defining the selector attribute and value.</td>
</tr>
<tr>
<td>content</td>
<td>object</td>
<td>Object containing original and translated text.</td>
</tr>
<tr>
<td>linkedInput</td>
<td>object</td>
<td>Object defining the input element selector.</td>
</tr>
</tbody>
</table>
<h3 id="example-object-3" tabindex="-1"><a class="header-anchor" href="#example-object-3"><span>Example Object</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    injectionType<span class="token operator">:</span> <span class="token string">'dynamicText'</span><span class="token punctuation">,</span></span>
<span class="line">    selector<span class="token operator">:</span> <span class="token punctuation">{</span> attribute<span class="token operator">:</span> <span class="token string">'id'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">'available-items'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    content<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        original<span class="token operator">:</span> <span class="token string">'Please select between 1 and 5 products: Current total 4 more items'</span><span class="token punctuation">,</span></span>
<span class="line">        translation<span class="token operator">:</span> <span class="token string">'Bitte wählen Sie zwischen 1 und 5 Produkten: Aktuelle Gesamtmenge {count} weitere Artikel'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    linkedInput<span class="token operator">:</span> <span class="token punctuation">{</span> selector<span class="token operator">:</span> <span class="token string">'data-pf-type'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">'QuantityField'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2>
<p>All handlers in the <code v-pre>main.js</code> file interact with the data defined in <code v-pre>contentToInject.ts</code>. To modify the injected content, update the relevant object in this file.</p>
</div></template>



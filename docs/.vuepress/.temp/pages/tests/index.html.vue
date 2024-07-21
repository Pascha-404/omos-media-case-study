<template><div><h1 id="testing" tabindex="-1"><a class="header-anchor" href="#testing"><span>Testing</span></a></h1>
<p>This directory contains all the tests for the project, including both end-to-end (E2E) tests and unit tests.</p>
<h2 id="e2e-tests" tabindex="-1"><a class="header-anchor" href="#e2e-tests"><span>E2E Tests</span></a></h2>
<p>End-to-end tests are used to test the functionality of the entire application by simulating user interactions. These tests are written using Cypress.</p>
<h3 id="e2e-test-files" tabindex="-1"><a class="header-anchor" href="#e2e-test-files"><span>E2E Test Files</span></a></h3>
<ul>
<li><strong>buttonInjection_spec.cy.ts</strong>: Tests the functionality of button injections.</li>
<li><strong>dateTimeInjection_spec.cy.ts</strong>: Tests the functionality of the <code v-pre>DateTimeInjector</code> component.</li>
<li><strong>dynamicTextInjector.cy.ts</strong>: Tests the functionality of the <code v-pre>DynamicTextInjector</code> component.</li>
<li><strong>textInjection_spec.cy.ts</strong>: Tests the functionality of text injections.</li>
</ul>
<h3 id="running-e2e-tests" tabindex="-1"><a class="header-anchor" href="#running-e2e-tests"><span>Running E2E Tests</span></a></h3>
<p>To run the E2E tests, use the following command:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> run test:e2e</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>To run the E2E tests in development mode, use the following command:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> run test:e2e:dev</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="unit-tests" tabindex="-1"><a class="header-anchor" href="#unit-tests"><span>Unit Tests</span></a></h2>
<p>Unit tests are used to test individual components and utility functions in isolation. These tests are written using Jest and Vue Test Utils.</p>
<h3 id="unit-test-files" tabindex="-1"><a class="header-anchor" href="#unit-test-files"><span>Unit Test Files</span></a></h3>
<ul>
<li><strong>DateTimeInjector.spec.ts</strong>: Tests the <code v-pre>DateTimeInjector</code> component.</li>
<li><strong>DynamicTextInjector.spec.ts</strong>: Tests the <code v-pre>DynamicTextInjector</code> component.</li>
<li><strong>injectionsUtils.spec.ts</strong>: Tests the utility functions used for injections.</li>
<li><strong>TextInjector.spec.ts</strong>: Tests the <code v-pre>TextInjector</code> component.</li>
</ul>
<h3 id="running-unit-tests" tabindex="-1"><a class="header-anchor" href="#running-unit-tests"><span>Running Unit Tests</span></a></h3>
<p>To run the unit tests, use the following command:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> run test:unit</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="directory-structure" tabindex="-1"><a class="header-anchor" href="#directory-structure"><span>Directory Structure</span></a></h2>
<div class="language-plaintext line-numbers-mode" data-highlighter="prismjs" data-ext="plaintext" data-title="plaintext"><pre v-pre><code><span class="line">tests/</span>
<span class="line">├── e2e</span>
<span class="line">│   ├── buttonInjection_spec.cy.ts</span>
<span class="line">│   ├── dateTimeInjection_spec.cy.ts</span>
<span class="line">│   ├── dynamicTextInjector.cy.ts</span>
<span class="line">│   └── textInjection_spec.cy.ts</span>
<span class="line">└── unit</span>
<span class="line">    ├── DateTimeInjector.spec.ts</span>
<span class="line">    ├── DynamicTextInjector.spec.ts</span>
<span class="line">    ├── injectionsUtils.spec.ts</span>
<span class="line">    └── TextInjector.spec.ts</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="writing-tests" tabindex="-1"><a class="header-anchor" href="#writing-tests"><span>Writing Tests</span></a></h2>
<h3 id="e2e-tests-1" tabindex="-1"><a class="header-anchor" href="#e2e-tests-1"><span>E2E Tests</span></a></h3>
<p>E2E tests are written using Cypress. Each test file in the <code v-pre>e2e</code> directory corresponds to a specific feature or component of the application. These tests simulate user interactions and verify the application's behavior.</p>
<h3 id="unit-tests-1" tabindex="-1"><a class="header-anchor" href="#unit-tests-1"><span>Unit Tests</span></a></h3>
<p>Unit tests are written using Jest and Vue Test Utils. Each test file in the <code v-pre>unit</code> directory corresponds to a specific component or utility function. These tests verify the functionality of individual units of code in isolation.</p>
<h2 id="example-test" tabindex="-1"><a class="header-anchor" href="#example-test"><span>Example Test</span></a></h2>
<h3 id="e2e-test" tabindex="-1"><a class="header-anchor" href="#e2e-test"><span>E2E Test</span></a></h3>
<p><strong>dynamicTextInjector.cy.ts</strong></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">'DynamicTextInjector Component'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">'should update the text based on input value'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    cy<span class="token punctuation">.</span><span class="token function">visit</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Replace with the actual URL or path to your app</span></span>
<span class="line">    cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'input[data-pf-type="QuantityField"]'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token string">'2'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'p'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">should</span><span class="token punctuation">(</span><span class="token string">'contain.text'</span><span class="token punctuation">,</span> <span class="token string">'Current total 3 more items'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="unit-test" tabindex="-1"><a class="header-anchor" href="#unit-test"><span>Unit Test</span></a></h3>
<p><strong>DynamicTextInjector.spec.ts</strong></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> shallowMount <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue/test-utils'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> DynamicTextInjector <span class="token keyword">from</span> <span class="token string">'@/components/DynamicTextInjector.vue'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">'DynamicTextInjector.vue'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">'renders props.initialText when passed'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> initialText <span class="token operator">=</span> <span class="token string">'Please select between 1 and 5 products: Current total {count} more items'</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> wrapper <span class="token operator">=</span> <span class="token function">shallowMount</span><span class="token punctuation">(</span>DynamicTextInjector<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">      props<span class="token operator">:</span> <span class="token punctuation">{</span> initialText<span class="token punctuation">,</span> linkedInputSelector<span class="token operator">:</span> <span class="token string">'data-pf-type'</span><span class="token punctuation">,</span> linkedInputSelectorValue<span class="token operator">:</span> <span class="token string">'QuantityField'</span> <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">expect</span><span class="token punctuation">(</span>wrapper<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toMatch</span><span class="token punctuation">(</span><span class="token string">'Current total 4 more items'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="conclusion" tabindex="-1"><a class="header-anchor" href="#conclusion"><span>Conclusion</span></a></h2>
<p>This documentation provides an overview of the tests included in this project, along with instructions for running and writing tests. By maintaining a comprehensive suite of tests, we can ensure the reliability and correctness of our application.</p>
</div></template>



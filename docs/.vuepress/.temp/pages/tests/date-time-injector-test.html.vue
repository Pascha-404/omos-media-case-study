<template><div><h1 id="datetimeinjector-tests" tabindex="-1"><a class="header-anchor" href="#datetimeinjector-tests"><span>DateTimeInjector Tests</span></a></h1>
<p>This document provides an overview of the unit and end-to-end (E2E) tests for the <code v-pre>DateTimeInjector</code> component. The <code v-pre>DateTimeInjector</code> component displays and constantly updates the current date and time.</p>
<h2 id="unit-tests" tabindex="-1"><a class="header-anchor" href="#unit-tests"><span>Unit Tests</span></a></h2>
<p>Unit tests are written using Vue Test Utils and Vitest. They verify the functionality of the <code v-pre>DateTimeInjector</code> component in isolation.</p>
<h3 id="test-file" tabindex="-1"><a class="header-anchor" href="#test-file"><span>Test File</span></a></h3>
<p><strong>Location</strong>: <code v-pre>src/components/__tests__/DateTimeInjector.spec.ts</code></p>
<h3 id="test-description" tabindex="-1"><a class="header-anchor" href="#test-description"><span>Test Description</span></a></h3>
<h4 id="test-renders-date-and-time-in-the-correct-format" tabindex="-1"><a class="header-anchor" href="#test-renders-date-and-time-in-the-correct-format"><span>Test: Renders date and time in the correct format</span></a></h4>
<ul>
<li><strong>Description</strong>: This test checks if the <code v-pre>DateTimeInjector</code> component renders the date and time in the correct format.</li>
<li><strong>Test Code</strong>:</li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> mount <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vue/test-utils'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> DateTimeInjector <span class="token keyword">from</span> <span class="token string">'../DateTimeInjector.vue'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">'DateTimeInjector.vue'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">'Renders date and time in the correct format'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> mockDate <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2024</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        vi<span class="token punctuation">.</span><span class="token function">setSystemTime</span><span class="token punctuation">(</span>mockDate<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">const</span> wrapper <span class="token operator">=</span> <span class="token function">mount</span><span class="token punctuation">(</span>DateTimeInjector<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token function">expect</span><span class="token punctuation">(</span>wrapper<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token string">'01.01.2024, 00:00:00'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        vi<span class="token punctuation">.</span><span class="token function">useRealTimers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="e2e-tests" tabindex="-1"><a class="header-anchor" href="#e2e-tests"><span>E2E Tests</span></a></h2>
<p>E2E tests are written using Cypress. They verify the functionality of the <code v-pre>DateTimeInjector</code> component in a real browser environment by simulating user interactions.</p>
<h3 id="test-file-1" tabindex="-1"><a class="header-anchor" href="#test-file-1"><span>Test File</span></a></h3>
<p><strong>Location</strong>: <code v-pre>cypress/e2e/dateTimeInjection_spec.cy.ts</code></p>
<h3 id="test-description-1" tabindex="-1"><a class="header-anchor" href="#test-description-1"><span>Test Description</span></a></h3>
<h4 id="test-injects-the-current-date-and-time-into-the-element" tabindex="-1"><a class="header-anchor" href="#test-injects-the-current-date-and-time-into-the-element"><span>Test: Injects the current date and time into the element</span></a></h4>
<ul>
<li><strong>Description</strong>: This test checks if the <code v-pre>DateTimeInjector</code> component correctly injects the current date and time into the element.</li>
<li><strong>Test Code</strong>:</li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">'DateTime Injection'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        cy<span class="token punctuation">.</span><span class="token function">visit</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">'should inject the current date and time into the element'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> dateTimeRegex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\d{2}\.\d{2}\.\d{4}, \d{2}:\d{2}:\d{2}$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// Check that the element exists</span></span>
<span class="line">        cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'#current-date-time-updated'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">should</span><span class="token punctuation">(</span><span class="token string">'exist'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// Check that the element contains a valid date and time</span></span>
<span class="line">        cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'#current-date-time-updated'</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span><span class="token string">'text'</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">.</span><span class="token function">should</span><span class="token punctuation">(</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token function">expect</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>dateTimeRegex<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="running-the-tests" tabindex="-1"><a class="header-anchor" href="#running-the-tests"><span>Running the Tests</span></a></h2>
<h3 id="running-unit-tests" tabindex="-1"><a class="header-anchor" href="#running-unit-tests"><span>Running Unit Tests</span></a></h3>
<p>To run the unit tests, use the following command:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> run test:unit</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="running-e2e-tests" tabindex="-1"><a class="header-anchor" href="#running-e2e-tests"><span>Running E2E Tests</span></a></h3>
<p>To run the E2E tests, use the following command:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> run test:e2e</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>To run the E2E tests in development mode, use the following command:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> run test:e2e:dev</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>By maintaining a comprehensive suite of tests, we can ensure the reliability and correctness of the <code v-pre>DateTimeInjector</code> component.</p>
</div></template>



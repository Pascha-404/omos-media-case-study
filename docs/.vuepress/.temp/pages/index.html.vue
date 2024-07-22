<template><div><h1 id="omos-media-case-study" tabindex="-1"><a class="header-anchor" href="#omos-media-case-study"><span>Omos Media Case Study</span></a></h1>
<p>This project addresses the task of ensuring proper translations and formatting for date, time, and currency on a Shopify site using the StayAI app. The provided functionality includes injecting HTML, CSS, and JavaScript to fix translation and formatting issues.</p>
<h2 id="task-summary" tabindex="-1"><a class="header-anchor" href="#task-summary"><span>Task Summary</span></a></h2>
<p>We are using the Shopify app StayAI, but its user interface for customers is in English. Although custom translations can be added in the app settings, some translations are missing, and the formats for date and currency are sometimes incorrect. Neither support nor documentation provides assistance, and installing another app is not an option. In the settings, you find three text areas where HTML, CSS, and JavaScript can be added.</p>
<h3 id="requirements" tabindex="-1"><a class="header-anchor" href="#requirements"><span>Requirements:</span></a></h3>
<ul>
<li>Ensure that all translations are in German and that the formats for date, time, and currency are displayed correctly.</li>
</ul>
<h2 id="project-usage-instructions" tabindex="-1"><a class="header-anchor" href="#project-usage-instructions"><span>Project Usage Instructions</span></a></h2>
<p>This document provides instructions on how to set up, use, and build the project. It also covers how to add injection data and implement the built JavaScript file into the desired website.</p>
<h3 id="setup-the-project" tabindex="-1"><a class="header-anchor" href="#setup-the-project"><span>Setup the Project</span></a></h3>
<ol>
<li>
<p><strong>Clone the repository</strong>:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">git</span> clone https://github.com/Pascha-404/omos-media-case-study</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p><strong>Navigate to the project directory</strong>:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token builtin class-name">cd</span> omos-media-case-study</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p><strong>Install dependencies</strong>:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ol>
<h3 id="add-injection-data" tabindex="-1"><a class="header-anchor" href="#add-injection-data"><span>Add Injection Data</span></a></h3>
<ol>
<li>
<p><strong>Open the <code v-pre>contentToInject.ts</code> file</strong>:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">src/contentToInject.ts</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p><strong>Add or modify injection data</strong>:</p>
<ul>
<li>To add new text injection data, append an object to the <code v-pre>textInjectionContent</code> array.</li>
<li>To add new button injection data, append an object to the <code v-pre>buttonInjectionContent</code> array.</li>
<li>To add new date-time injection data, modify the <code v-pre>dateTimeInjectionContent</code> object.</li>
<li>To add new available items injection data, modify the <code v-pre>availableItemsContent</code> object.</li>
</ul>
<p>Example of adding a new text injection:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    injectionType<span class="token operator">:</span> <span class="token string">'text'</span><span class="token punctuation">,</span></span>
<span class="line">    selector<span class="token operator">:</span> <span class="token punctuation">{</span> attribute<span class="token operator">:</span> <span class="token string">'data-custom-type'</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">'CustomText'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    content<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        original<span class="token operator">:</span> <span class="token string">'Original text content.'</span><span class="token punctuation">,</span></span>
<span class="line">        translation<span class="token operator">:</span> <span class="token string">'Translated text content.'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="build-the-application" tabindex="-1"><a class="header-anchor" href="#build-the-application"><span>Build the Application</span></a></h3>
<ol>
<li>
<p><strong>Build the project</strong>:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> run build</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p><strong>The built files will be in the <code v-pre>dist</code> directory</strong>.</p>
</li>
</ol>
<h3 id="implement-the-built-js-file-into-the-desired-website" tabindex="-1"><a class="header-anchor" href="#implement-the-built-js-file-into-the-desired-website"><span>Implement the Built JS File into the Desired Website</span></a></h3>
<ol>
<li>
<p><strong>Locate the built JavaScript file</strong>:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">dist/main.js</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p><strong>Copy the <code v-pre>main.js</code> file to your website's directory</strong>.</p>
</li>
<li>
<p><strong>Include the <code v-pre>main.js</code> file in your HTML</strong>:</p>
<p>Add the following script tag to your HTML file, preferably before the closing <code v-pre>&lt;/body&gt;</code> tag:</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>path/to/main.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Replace <code v-pre>path/to/main.js</code> with the actual path where you copied the <code v-pre>main.js</code> file.</p>
</li>
<li>
<p><strong>Deploy your website</strong>.</p>
</li>
</ol>
<p>By following these instructions, you can set up the project, add or modify injection data, build the application, and implement the built JavaScript file into your desired website.</p>
<h3 id="run-the-documentation-server" tabindex="-1"><a class="header-anchor" href="#run-the-documentation-server"><span>Run the Documentation Server</span></a></h3>
<p>To serve the documentation locally, use:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> run docs:dev</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="running-unit-tests" tabindex="-1"><a class="header-anchor" href="#running-unit-tests"><span>Running Unit Tests</span></a></h3>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="project-structure" tabindex="-1"><a class="header-anchor" href="#project-structure"><span>Project Structure</span></a></h2>
<div class="language-plaintext line-numbers-mode" data-highlighter="prismjs" data-ext="plaintext" data-title="plaintext"><pre v-pre><code><span class="line">omos-media-case-study/</span>
<span class="line">├── cypress</span>
<span class="line">│   ├── e2e</span>
<span class="line">│   │   ├── buttonInjection_spec.cy.ts</span>
<span class="line">│   │   ├── dateTimeInjection_spec.cy.ts</span>
<span class="line">│   │   ├── dynamicTextInjector.cy.ts</span>
<span class="line">│   │   └── textInjection_spec.cy.ts</span>
<span class="line">│   └── screenshots</span>
<span class="line">├── docs</span>
<span class="line">│   ├── components</span>
<span class="line">│   │   ├── button-injection.md</span>
<span class="line">│   │   ├── date-time-injector.md</span>
<span class="line">│   │   ├── dynamic-text-injector.md</span>
<span class="line">│   │   ├── README.md</span>
<span class="line">│   │   └── text-injector.md</span>
<span class="line">│   ├── contentToInject.ts</span>
<span class="line">│   │   └── README.md</span>
<span class="line">│   ├── main.js</span>
<span class="line">│   │   └── README.md</span>
<span class="line">│   ├── README.md</span>
<span class="line">│   ├── tests</span>
<span class="line">│   │   ├── button-injector-test.md</span>
<span class="line">│   │   ├── date-time-injector-test.md</span>
<span class="line">│   │   ├── dynamic-text-injector-test.md</span>
<span class="line">│   │   ├── README.md</span>
<span class="line">│   │   └── text-injector-test.md</span>
<span class="line">│   └── utils</span>
<span class="line">│       ├── attributes-to-object.md</span>
<span class="line">│       ├── injections.md</span>
<span class="line">│       └── README.md</span>
<span class="line">├── index.html</span>
<span class="line">├── package.json</span>
<span class="line">├── public</span>
<span class="line">├── README.md</span>
<span class="line">└── src</span>
<span class="line">    ├── components</span>
<span class="line">    │   ├── ButtonInjecton.vue</span>
<span class="line">    │   ├── DateTimeInjector.vue</span>
<span class="line">    │   ├── DynamicTextInjector.vue</span>
<span class="line">    │   ├── __tests__</span>
<span class="line">    │   │   ├── ButtonInjection.spec.ts</span>
<span class="line">    │   │   ├── DateTimeInjector.spec.ts</span>
<span class="line">    │   │   ├── DynamicTextInjector.spec.ts</span>
<span class="line">    │   │   ├── injectionsUtils.spec.ts</span>
<span class="line">    │   │   └── TextInjector.spec.ts</span>
<span class="line">    │   └── TextInjector.vue</span>
<span class="line">    ├── contentToInject.ts</span>
<span class="line">    ├── main.ts</span>
<span class="line">    ├── types.ts</span>
<span class="line">    └── utils</span>
<span class="line">        ├── attributesToObject.ts</span>
<span class="line">        ├── index.ts</span>
<span class="line">        └── injections.ts</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="documentation" tabindex="-1"><a class="header-anchor" href="#documentation"><span>Documentation</span></a></h2>
<p>The documentation for this project is built using VuePress. The configuration can be found in the <code v-pre>docs/.vuepress/config.js</code> file.</p>
<h2 id="license" tabindex="-1"><a class="header-anchor" href="#license"><span>License</span></a></h2>
<p>This project is licensed under the MIT License.</p>
</div></template>



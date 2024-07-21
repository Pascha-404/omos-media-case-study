<template><div><h1 id="omos-media-case-study" tabindex="-1"><a class="header-anchor" href="#omos-media-case-study"><span>Omos Media Case Study</span></a></h1>
<p>This project addresses the task of ensuring proper translations and formatting for date, time, and currency on a Shopify site using the StayAI app. The provided functionality includes injecting HTML, CSS, and JavaScript to fix translation and formatting issues.</p>
<h2 id="task-summary" tabindex="-1"><a class="header-anchor" href="#task-summary"><span>Task Summary</span></a></h2>
<p>We are using the Shopify app StayAI, but its user interface for customers is in English. Although custom translations can be added in the app settings, some translations are missing, and the formats for date and currency are sometimes incorrect. Neither support nor documentation provides assistance, and installing another app is not an option. In the settings, you find three text areas where HTML, CSS, and JavaScript can be added.</p>
<h3 id="requirements" tabindex="-1"><a class="header-anchor" href="#requirements"><span>Requirements:</span></a></h3>
<ul>
<li>Ensure that all translations are in German and that the formats for date, time, and currency are displayed correctly.</li>
</ul>
<h2 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started"><span>Getting Started</span></a></h2>
<p>To get started with this project, follow these steps:</p>
<h3 id="install-dependencies" tabindex="-1"><a class="header-anchor" href="#install-dependencies"><span>Install Dependencies</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="run-the-development-server" tabindex="-1"><a class="header-anchor" href="#run-the-development-server"><span>Run the Development Server</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> run dev</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="build-the-application" tabindex="-1"><a class="header-anchor" href="#build-the-application"><span>Build the Application</span></a></h3>
<p>To build the application for production, use:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> run build</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="run-the-documentation-server" tabindex="-1"><a class="header-anchor" href="#run-the-documentation-server"><span>Run the Documentation Server</span></a></h3>
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
<span class="line">│   └── e2e</span>
<span class="line">│       ├── buttonInjection_spec.cy.ts</span>
<span class="line">│       ├── dateTimeInjection_spec.cy.ts</span>
<span class="line">│       ├── dynamicTextInjector.cy.ts</span>
<span class="line">│       └── textInjection_spec.cy.ts</span>
<span class="line">├── docs</span>
<span class="line">│   └── README.md</span>
<span class="line">├── index.html</span>
<span class="line">├── package.json</span>
<span class="line">├── public</span>
<span class="line">├── README.md</span>
<span class="line">└── src</span>
<span class="line">    ├── components</span>
<span class="line">    │   ├── DateTimeInjector.vue</span>
<span class="line">    │   ├── DynamicTextInjector.vue</span>
<span class="line">    │   ├── __tests__</span>
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
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="documentation" tabindex="-1"><a class="header-anchor" href="#documentation"><span>Documentation</span></a></h2>
<p>The documentation for this project is built using VuePress. The configuration can be found in the <code v-pre>docs/.vuepress/config.js</code> file.</p>
<h2 id="license" tabindex="-1"><a class="header-anchor" href="#license"><span>License</span></a></h2>
<p>This project is licensed under the MIT License.</p>
</div></template>



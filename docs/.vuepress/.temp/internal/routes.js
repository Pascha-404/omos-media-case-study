export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/patrick/Coding/projects/omos-media-case-study/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Omos Media Case Study"} }],
  ["/components/", { loader: () => import(/* webpackChunkName: "components_index.html" */"/home/patrick/Coding/projects/omos-media-case-study/docs/.vuepress/.temp/pages/components/index.html.js"), meta: {"title":"Components"} }],
  ["/components/button-injection.html", { loader: () => import(/* webpackChunkName: "components_button-injection.html" */"/home/patrick/Coding/projects/omos-media-case-study/docs/.vuepress/.temp/pages/components/button-injection.html.js"), meta: {"title":"ButtonInjection"} }],
  ["/components/date-time-injector.html", { loader: () => import(/* webpackChunkName: "components_date-time-injector.html" */"/home/patrick/Coding/projects/omos-media-case-study/docs/.vuepress/.temp/pages/components/date-time-injector.html.js"), meta: {"title":"DateTimeInjector"} }],
  ["/components/dynamic-text-injector.html", { loader: () => import(/* webpackChunkName: "components_dynamic-text-injector.html" */"/home/patrick/Coding/projects/omos-media-case-study/docs/.vuepress/.temp/pages/components/dynamic-text-injector.html.js"), meta: {"title":"DynamicTextInjector"} }],
  ["/components/text-injector.html", { loader: () => import(/* webpackChunkName: "components_text-injector.html" */"/home/patrick/Coding/projects/omos-media-case-study/docs/.vuepress/.temp/pages/components/text-injector.html.js"), meta: {"title":"TextInjector"} }],
  ["/contentToInject.ts/", { loader: () => import(/* webpackChunkName: "contentToInject.ts_index.html" */"/home/patrick/Coding/projects/omos-media-case-study/docs/.vuepress/.temp/pages/contentToInject.ts/index.html.js"), meta: {"title":"contentToInject.ts Overview"} }],
  ["/main.js/", { loader: () => import(/* webpackChunkName: "main.js_index.html" */"/home/patrick/Coding/projects/omos-media-case-study/docs/.vuepress/.temp/pages/main.js/index.html.js"), meta: {"title":"Main.js"} }],
  ["/tests/", { loader: () => import(/* webpackChunkName: "tests_index.html" */"/home/patrick/Coding/projects/omos-media-case-study/docs/.vuepress/.temp/pages/tests/index.html.js"), meta: {"title":"Testing"} }],
  ["/tests/button-injector-test.html", { loader: () => import(/* webpackChunkName: "tests_button-injector-test.html" */"/home/patrick/Coding/projects/omos-media-case-study/docs/.vuepress/.temp/pages/tests/button-injector-test.html.js"), meta: {"title":"ButtonInjection Tests"} }],
  ["/tests/date-time-injector-test.html", { loader: () => import(/* webpackChunkName: "tests_date-time-injector-test.html" */"/home/patrick/Coding/projects/omos-media-case-study/docs/.vuepress/.temp/pages/tests/date-time-injector-test.html.js"), meta: {"title":"DateTimeInjector Tests"} }],
  ["/tests/dynamic-text-injector-test.html", { loader: () => import(/* webpackChunkName: "tests_dynamic-text-injector-test.html" */"/home/patrick/Coding/projects/omos-media-case-study/docs/.vuepress/.temp/pages/tests/dynamic-text-injector-test.html.js"), meta: {"title":"DynamicTextInjector Tests"} }],
  ["/tests/text-injector-test.html", { loader: () => import(/* webpackChunkName: "tests_text-injector-test.html" */"/home/patrick/Coding/projects/omos-media-case-study/docs/.vuepress/.temp/pages/tests/text-injector-test.html.js"), meta: {"title":"TextInjector Tests"} }],
  ["/utils/", { loader: () => import(/* webpackChunkName: "utils_index.html" */"/home/patrick/Coding/projects/omos-media-case-study/docs/.vuepress/.temp/pages/utils/index.html.js"), meta: {"title":"Utilities"} }],
  ["/utils/attributes-to-object.html", { loader: () => import(/* webpackChunkName: "utils_attributes-to-object.html" */"/home/patrick/Coding/projects/omos-media-case-study/docs/.vuepress/.temp/pages/utils/attributes-to-object.html.js"), meta: {"title":"attributesToObject"} }],
  ["/utils/injections.html", { loader: () => import(/* webpackChunkName: "utils_injections.html" */"/home/patrick/Coding/projects/omos-media-case-study/docs/.vuepress/.temp/pages/utils/injections.html.js"), meta: {"title":"Injections Utility"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/patrick/Coding/projects/omos-media-case-study/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}

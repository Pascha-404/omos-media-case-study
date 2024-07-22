import comp from "/home/patrick/Coding/projects/omos-media-case-study/docs/.vuepress/.temp/pages/tests/button-injector-test.html.vue"
const data = JSON.parse("{\"path\":\"/tests/button-injector-test.html\",\"title\":\"ButtonInjection Tests\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Unit Test\",\"slug\":\"unit-test\",\"link\":\"#unit-test\",\"children\":[]},{\"level\":2,\"title\":\"E2E Test\",\"slug\":\"e2e-test\",\"link\":\"#e2e-test\",\"children\":[]}],\"git\":{\"updatedTime\":1721643240000,\"contributors\":[{\"name\":\"Patrick Pavliuchik\",\"email\":\"73493957+Pascha-404@users.noreply.github.com\",\"commits\":2}]},\"filePathRelative\":\"tests/button-injector-test.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

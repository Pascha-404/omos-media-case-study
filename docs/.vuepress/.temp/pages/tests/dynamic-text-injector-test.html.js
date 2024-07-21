import comp from "/home/patrick/Coding/projects/omos-media-case-study/docs/.vuepress/.temp/pages/tests/dynamic-text-injector-test.html.vue"
const data = JSON.parse("{\"path\":\"/tests/dynamic-text-injector-test.html\",\"title\":\"DynamicTextInjector Tests\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Unit Tests\",\"slug\":\"unit-tests\",\"link\":\"#unit-tests\",\"children\":[{\"level\":3,\"title\":\"Test File\",\"slug\":\"test-file\",\"link\":\"#test-file\",\"children\":[]},{\"level\":3,\"title\":\"Test Description\",\"slug\":\"test-description\",\"link\":\"#test-description\",\"children\":[]}]},{\"level\":2,\"title\":\"E2E Tests\",\"slug\":\"e2e-tests\",\"link\":\"#e2e-tests\",\"children\":[{\"level\":3,\"title\":\"Test File\",\"slug\":\"test-file-1\",\"link\":\"#test-file-1\",\"children\":[]},{\"level\":3,\"title\":\"Test Description\",\"slug\":\"test-description-1\",\"link\":\"#test-description-1\",\"children\":[]}]},{\"level\":2,\"title\":\"Running the Tests\",\"slug\":\"running-the-tests\",\"link\":\"#running-the-tests\",\"children\":[{\"level\":3,\"title\":\"Running Unit Tests\",\"slug\":\"running-unit-tests\",\"link\":\"#running-unit-tests\",\"children\":[]},{\"level\":3,\"title\":\"Running E2E Tests\",\"slug\":\"running-e2e-tests\",\"link\":\"#running-e2e-tests\",\"children\":[]}]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"tests/dynamic-text-injector-test.md\"}")
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

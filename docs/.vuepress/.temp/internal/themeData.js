export const themeData = JSON.parse("{\"sidebar\":[{\"text\":\"Introduction\",\"link\":\"/\",\"collapsible\":false,\"children\":[\"/\"]},{\"text\":\"Main.js\",\"link\":\"/main.js/\",\"collapsible\":false},{\"text\":\"ContentToInject.ts\",\"link\":\"/contentToInject.ts/\",\"collapsible\":false},{\"text\":\"Components\",\"link\":\"/components/\",\"collapsible\":false,\"children\":[\"/components/date-time-injector.md\",\"/components/dynamic-text-injector.md\",\"/components/text-injector.md\",\"/components/button-injection.md\"]},{\"text\":\"Utils\",\"link\":\"/utils/\",\"collapsible\":false,\"children\":[\"/utils/attributes-to-object.md\",\"/utils/injections.md\"]},{\"text\":\"Testing\",\"link\":\"/tests/\",\"collapsible\":false,\"children\":[\"/tests/text-injector-test.md\",\"/tests/dynamic-text-injector-test.md\",\"/tests/date-time-injector-test.md\",\"/tests/button-injector-test.md\"]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"navbar\":[],\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}

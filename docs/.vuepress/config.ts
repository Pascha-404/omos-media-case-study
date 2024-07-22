import { viteBundler } from '@vuepress/bundler-vite';
import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';

export default defineUserConfig({
    bundler: viteBundler(),
    theme: defaultTheme({
        sidebar: [
            {
                text: 'Introduction',
                link: '/',
                collapsible: false,
                children: ['/'],
            },
            { text: 'Main.js', link: '/main.js/', collapsible: false },
            {
                text: 'ContentToInject.ts',
                link: '/contentToInject.ts/',
                collapsible: false,
            },
            {
                text: 'Components',
                link: '/components/',
                collapsible: false,
                children: [
                    '/components/date-time-injector.md',
                    '/components/dynamic-text-injector.md',
                    '/components/text-injector.md',
                    '/components/button-injection.md',
                ],
            },
            {
                text: 'Utils',
                link: '/utils/',
                collapsible: false,
                children: ['/utils/attributes-to-object.md', '/utils/injections.md'],
            },
            {
                text: 'Testing',
                link: '/tests/',
                collapsible: false,
                children: [
                    '/tests/text-injector-test.md',
                    '/tests/dynamic-text-injector-test.md',
                    '/tests/date-time-injector-test.md',
                    '/tests/button-injector-test.md',
                ],
            },
        ],
    }),
});

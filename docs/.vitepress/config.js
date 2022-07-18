

const ogDescription = 'Next Generation Frontend Tooling'
const ogImage = 'https://vitejs.dev/og-image.png'
const ogTitle = 'PIG'
const ogUrl = 'https://pigcloud.net'

export default {
    title: 'PIG 官方中文文档',
    description: '下一代前端工具链',
    lang: 'zh-CN',

    head: [
        ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:title', content: ogTitle }],
        ['meta', { property: 'og:image', content: ogImage }],
        ['meta', { property: 'og:url', content: ogUrl }],
        ['meta', { property: 'og:description', content: ogDescription }],
        ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
        ['meta', { name: 'twitter:site', content: '@vite_js' }]
    ],

    themeConfig: {
        logo: '/logo.svg',

        // editLink: {
        //     text: '为此页提供修改建议',
        //     pattern: 'https://gitee.com/pigcloudx/pig-docs/edit/master/:path',
        // },

        // editLink: {
        //     text: '为此页提供修改建议',
        //     pattern: 'https://github.com/vitejs/docs-cn/edit/main/docs/:path',
        // },

        socialLinks: [
            { icon: 'twitter', link: 'https://twitter.com/vite_js' },
            { icon: 'discord', link: 'https://chat.vitejs.dev' },
            { icon: 'github', link: 'https://gitee.com/pigcloudx/pig-docs' }
        ],

        // algolia: {
        //     appId: 'BH4D9OD16A',
        //     apiKey: 'b573aa848fd57fb47d693b531297403c',
        //     indexName: 'vitejs',
        //     searchParameters: {
        //         facetFilters: ['tags:cn']
        //     }
        // },

        // carbonAds: {
        //     code: 'CEBIEK3N',
        //     placement: 'vitejsdev'
        // },

        localeLinks: {
            text: '简体中文',
            items: [
                // { text: 'English', link: 'https://vitejs.dev' },
            ]
        },

        footer: {
            message: '根据 MIT 许可证发布。',
            copyright: 'Copyright © 2022 PigCloud, Inc.'
        },

        nav: [
            { text: '指引', link: '/guide/', activeMatch: '/guide/' },
            { text: '配置', link: '/config/', activeMatch: '/config/' },
            { text: '插件', link: '/plugins/', activeMatch: '/plugins/' },
            {
                text: '相关链接',
                items: [
                    { text: 'Team', link: '/team' },
                    {
                        text: 'Twitter',
                        link: 'https://twitter.com/vite_js'
                    },
                    {
                        text: 'Discord Chat',
                        link: 'https://chat.vitejs.dev'
                    },
                    {
                        text: 'Awesome Vite',
                        link: 'https://github.com/vitejs/awesome-vite'
                    },
                    {
                        text: 'Dev.to 社区',
                        link: 'https://dev.to/t/vite'
                    },
                    {
                        text: 'Rollup 插件兼容',
                        link: 'https://vite-rollup-plugins.patak.dev/'
                    },
                    {
                        text: '更新日志',
                        link: 'https://github.com/vitejs/vite/blob/main/packages/vite/CHANGELOG.md'
                    }
                ]
            },
            {
                text: 'Version',
                items: [
                    {
                        text: 'Vite v2 文档',
                        link: 'https://v2.vitejs.dev'
                    }
                ]
            }
        ],

        sidebar: {
            '/guide/': [
                {
                    text: '指引',
                    items: [
                        {
                            text: '为什么选 Vite',
                            link: '/guide/why'
                        },
                        {
                            text: '开始',
                            link: '/guide/'
                        },
                        {
                            text: '功能',
                            link: '/guide/features'
                        },
                        {
                            text: '使用插件',
                            link: '/guide/using-plugins'
                        },
                        {
                            text: '依赖预构建',
                            link: '/guide/dep-pre-bundling'
                        },
                        {
                            text: '静态资源处理',
                            link: '/guide/assets'
                        },
                        {
                            text: '构建生产版本',
                            link: '/guide/build'
                        },
                        {
                            text: '部署静态站点',
                            link: '/guide/static-deploy'
                        },
                        {
                            text: '环境变量与模式',
                            link: '/guide/env-and-mode'
                        },
                        {
                            text: '服务端渲染（SSR）',
                            link: '/guide/ssr'
                        },
                        {
                            text: '后端集成',
                            link: '/guide/backend-integration'
                        },
                        {
                            text: '比较',
                            link: '/guide/comparisons'
                        },
                        {
                            text: '从 v2 迁移',
                            link: '/guide/migration'
                        }
                    ]
                },
                {
                    text: 'API',
                    items: [
                        {
                            text: '插件 API',
                            link: '/guide/api-plugin'
                        },
                        {
                            text: 'HMR API',
                            link: '/guide/api-hmr'
                        },
                        {
                            text: 'JavaScript API',
                            link: '/guide/api-javascript'
                        },
                        {
                            text: '配置参考',
                            link: '/config/'
                        }
                    ]
                }
            ],
        }

    }
}

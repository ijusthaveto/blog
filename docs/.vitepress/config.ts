export default {
    base: '/blog/',
    themeConfig: {
        nav: [
            { text: 'Guide', link: '/guide/' },
        ],
        sidebar: {
            '/guide': [
                {
                    text: 'Guide',
                    items: [
                        { text: 'Index', link: '/guide/index' },
                        { text: 'One', link: '/guide/one' },
                        { text: 'Two', link: '/guide/two' },
                        { text: 'Three', link: '/guide/three' }
                    ]
                }
            ]
        }
    },
    
};
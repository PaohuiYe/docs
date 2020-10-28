module.exports = {
    base: "/docs/",
    markdown: {
        lineNumbers: true
    },


    themeConfig: {


        logo: '/img/head.jpg',

        nav: [
            { text: 'Home', link: '/' },
            { text: 'Support', link: 'https://vuepress.vuejs.org/zh/' },
            {
                text: "Language",
                items: [
                    { text: 'Chinese', link: '/language/chinese/' },                    
                ]
            }


        ],
        sidebar: [
            {
                title: 'Algorithm',   // 必要的
                path: '/Algorithm/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 2,    // 可选的, 默认值是 1
                children: [
                    
                    ['/Algorithm/1~20' , '剑指Offer-1~20'],
                    ['/Algorithm/21~40', '剑指Offer-21~40'],
                    ['/Algorithm/41~60', '剑指Offer-41~60'],
                    ['/Algorithm/61~67', '剑指Offer-61~67'],
                    ['/Algorithm/Sort' , '排序'],
                ]
            },
            {
                title: 'DataStruct',   // 必要的
                path: '/DataStruct/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 2,    // 可选的, 默认值是 1
                children: [
                    ['/DataStruct/BinaryTreeSearch', '单链表插入删除'],
                    ['/DataStruct/SingleList', '单链表插入删除']
                ]
            },

        ]





    }
}
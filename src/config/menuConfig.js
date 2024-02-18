const menuItems =  [
    {
        id: '1',
        title: "网站前台配置",
        icon: "xxx",
        route: "/web_config",
        children: [
            {
                id: '2',
                title: "网站首页配置",
                route: "/web_config/home",
                icon: "icon-histogram"
            },
            {
                id: '3',
                title: "用户统计",
                route: "/web_config/line",
                icon: "icon-61"
            },
            {
                id: '4',
                title: "评论统计",
                route: "/web_config/pie",
                icon: "icon-bingzhuangtu"
            }
        ]
    },
    {
        id: '5',
        title: "第二个",
        icon: "xxx2",
        route: "/xxxx",
    }
]
export default menuItems
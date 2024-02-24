const menuItems =  [
    {
        id: '1',
        title: "网站前台配置",
        icon: "xxx",
        route: "/manage/web_config",
        crumbsJump: '/manage/web_config/home',
        children: [
            {
                id: '2',
                title: "前台首页配置",
                route: "/manage/web_config/home",
                icon: "icon-histogram",
                crumbsJump: '/manage/web_config/home'
            }
        ]
    },

    {
        id: '3',
        title: "没有children的例子",
        icon: "xxx",
        route: "/xxx"
    }
]
export default menuItems
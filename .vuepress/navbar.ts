import {NavItem} from "vuepress/config";

export default [
    { text: '首页', link: '/' },
    { text: '后端',items: [
            { text: 'Java', link: '/java/' },
            { text: 'Python', link: '/python/' },
        ]},
    { text: "前端",link: '/前端/'},
    { text: "大数据",link: '/大数据/'},
/*    { text: "运维",link: '/运维/'},
    { text: "测试",link: '/测试/'},
    { text: "网络",link: '/网络/'},*/
    // { text: "学习路线",link: '/学习路线/'},
    { text: "开源项目",link: '/开源项目/'},
    { text: '程序猿代码之路',items: [
            { text: 'CSDN', link: 'https://blog.csdn.net/qq_45764938?type=blog' },
            { text: '掘金', link: 'https://juejin.cn/user/1192311069635703/posts' },
            { text: 'Gitee', link: 'https://gitee.com/Heng-Xiao' },
            { text: 'Github', link: 'https://github.com/Heng-Xiao' },
        ]},
] as NavItem[];

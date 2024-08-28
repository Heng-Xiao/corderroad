import {SidebarConfig4Multiple} from "vuepress/config";

import roadmapSideBar from "./sidebars/roadmapSideBar";
import JavaSideBar from "./sidebars/JavaSideBar";
import prejectSideBar from "./sidebars/prejectSideBar";
import qianduanSideBar from "./sidebars/qianduanSideBar";
// @ts-ignore
export default {
    "/学习路线/": roadmapSideBar,
    "/java/": JavaSideBar,
    "/开源项目/": prejectSideBar,
    "/前端/": qianduanSideBar,
    // 降级，默认根据文章标题渲染侧边栏
    "/": "auto",
} as SidebarConfig4Multiple;

import { defineConfig } from "vuepress/config";
import navbar from "./navbar";
import sidebar from "./sidebar";
import footer from "./footer";
import extraSideBar from "./extraSideBar";

const author = "程序猿代码之路";
const domain = "https://coderroad.cn";
const tags = ["程序员", "编程", "计算机"];

export default defineConfig({
  title: "程序猿代码之路",
  description: "程序猿最详细的面试突击",
  lang: 'zh-CN',
  colorModeSwitch:true,
  colorMode:'dark',
  head: [
    // 站点图标
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "meta",
      {
        name:"referrer",
        content:"no-referrer"
      }
    ],
    // SEO
    [
      "meta",
      {
        name: "keywords",
        content:
          "程序猿代码之路, Python, 大数据, 编程知识百科, Java, 编程导航, 前端, 开发, 编程分享, 项目, IT, 求职, 面经, 程序猿代码之路",
      },
    ],
    // 百度统计
    [
      "script",
      {},
      `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?fdd145f80ad0cec1396b107a1d8f0856";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
      `,
    ],
  ],
  permalink: "/:slug",

  // 监听文件变化，热更新
  extraWatchFiles: [".vuepress/*.ts", ".vuepress/sidebars/*.ts"],
  markdown: {
    // 开启代码块的行号
    lineNumbers: true,
    // 支持 4 级以上的标题渲染
    extractHeaders: ["h2", "h3", "h4", "h5", "h6"],
  },
  // @ts-ignorevuepress-plugin-comment
  plugins: [
    ["@vuepress/back-to-top"],
    // Google 分析
    [
      "@vuepress/google-analytics",
      {
        ga: "GTM-WVS9HM6W", // 补充自己的谷歌分析 ID，比如 UA-00000000-0
      },
    ],
    ["@vuepress/medium-zoom"],
    // https://github.com/lorisleiva/vuepress-plugin-seo
    [
      "seo",
      {
        siteTitle: (_, $site) => $site.title,
        title: ($page) => $page.title,
        description: ($page) =>
          $page.frontmatter.description || $page.description,
        author: (_, $site) => $site.themeConfig.author || author,
        tags: ($page) => $page.frontmatter.tags || tags,
        type: ($page) => "article",
        url: (_, $site, path) =>
          ($site.themeConfig.domain || domain || "") + path,
        image: ($page, $site) =>
          $page.frontmatter.image &&
          (($site.themeConfig.domain &&
            !$page.frontmatter.image.startsWith("https")) ||
            "") + $page.frontmatter.image,
        publishedAt: ($page) =>
          $page.frontmatter.date && new Date($page.frontmatter.date),
        modifiedAt: ($page) => $page.lastUpdated && new Date($page.lastUpdated),
      },
    ],
    // https://github.com/ekoeryanto/vuepress-plugin-sitemap
    [
      "sitemap",
      {
        hostname: domain,
      },
    ],
    // https://github.com/IOriens/vuepress-plugin-baidu-autopush
    ["vuepress-plugin-baidu-autopush"],
    // https://github.com/zq99299/vuepress-plugin/tree/master/vuepress-plugin-tags
    // ["vuepress-plugin-tags"],
    ["vuepress-plugin-tags", {
      type: 'rainbow',
      selector: '.page .content__default h1',
      rainbows: [ // 将你要随机的标签样式组在这里定义
        {
          color: '#00bfff',  // 标签字体颜色
          border: '1px solid #00bfff', // 标签边框颜色
          backgroundColor: '#ecf4fa', // 标签背景颜色
        },
        {
          color: '#00bfff',  // 标签字体颜色
          border: '1px solid #00bfff', // 标签边框颜色
          backgroundColor: '#ecf4fa', // 标签背景颜色
        }
      ]
    }],
    // https://github.com/znicholasbrown/vuepress-plugin-code-copy
    [
      "vuepress-plugin-code-copy",
      {
        successText: "代码已复制",
      },
    ],
    // https://github.com/webmasterish/vuepress-plugin-feed
    [
      "feed",
      {
        canonical_base: domain,
        count: 10000,
        // 需要自动推送的文档目录
        posts_directories: [],
      },
    ],
    // https://github.com/tolking/vuepress-plugin-img-lazy
    ["img-lazy"],
  ],
  // 主题配置
  themeConfig: {
    logo: "/logo.png",
    sidebarDepth: 0,
    nav: navbar,
    sidebar,
    lastUpdated: "最近更新",
    smoothScroll: true,

    // GitHub 仓库位置
/*    repo: "liyupi/codefather",
    docsBranch: "master",*/

    // 编辑链接
/*    editLinks: true,
    editLinkText: "完善页面",*/

    // @ts-ignore
    // 底部版权信息
    footer,
    // 额外右侧边栏
    extraSideBar,
  },
});

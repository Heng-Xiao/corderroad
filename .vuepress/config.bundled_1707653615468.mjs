// .vuepress/config.ts
import { defineConfig } from "vuepress/config";

// .vuepress/navbar.ts
var navbar_default = [
  { text: "\u9996\u9875", link: "/" },
  { text: "Java", link: "/Java/" },
  { text: "Python", link: "/Python/" },
  { text: "\u5927\u6570\u636E", link: "/\u5927\u6570\u636E/" },
  { text: "\u524D\u7AEF", link: "/\u524D\u7AEF/" },
  { text: "\u5B66\u4E60\u8DEF\u7EBF", link: "/\u5B66\u4E60\u8DEF\u7EBF/" },
  { text: "\u5F00\u6E90\u9879\u76EE", link: "/\u9879\u76EE\u8FD0\u884C\u6587\u6863/" },
  { text: "\u7A0B\u5E8F\u733F\u4EE3\u7801\u4E4B\u8DEF", items: [
    { text: "Github", link: "https://github.com/mqyqingfeng" },
    { text: "\u6398\u91D1", link: "https://juejin.cn/user/712139234359182/posts" }
  ] }
];

// .vuepress/sidebars/roadmapSideBar.ts
var roadmapSideBar_default = [
  "",
  {
    title: "\u5B66\u4E60\u8DEF\u7EBF",
    collapsable: false,
    children: [
      "Java\u5B66\u4E60\u8DEF\u7EBF by \u7A0B\u5E8F\u5458\u9C7C\u76AE.md",
      "\u524D\u7AEF\u5B66\u4E60\u8DEF\u7EBF by \u7A0B\u5E8F\u5458\u9C7C\u76AE.md",
      "C++\u5B66\u4E60\u8DEF\u7EBF by \u7A0B\u5E8F\u5458\u9C7C\u76AE.md",
      "Python\u5B66\u4E60\u8DEF\u7EBF by \u7A0B\u5E8F\u5458\u9C7C\u76AE.md",
      "\u6570\u636E\u7ED3\u6784\u548C\u7B97\u6CD5\u5B66\u4E60\u8DEF\u7EBF by \u7A0B\u5E8F\u5458\u9C7C\u76AE.md",
      "SQL\u514D\u8D39\u5B9E\u6218\u81EA\u5B66\u7F51\u7AD9 by \u7A0B\u5E8F\u5458\u9C7C\u76AE.md",
      "\u8BA1\u7B97\u673A\u57FA\u7840\u5B66\u4E60\u8DEF\u7EBF by \u7A0B\u5E8F\u5458\u9C7C\u76AE.md",
      "Git&GitHub\u5B66\u4E60\u8DEF\u7EBF by \u7A0B\u5E8F\u5458\u9C7C\u76AE.md",
      "\u8BBE\u8BA1\u6A21\u5F0F\u5B66\u4E60\u8DEF\u7EBF by \u7A0B\u5E8F\u5458\u9C7C\u76AE.md",
      "Linux\u5B66\u4E60\u8DEF\u7EBF by \u7A0B\u5E8F\u5458\u9C7C\u76AE.md"
    ]
  }
];

// .vuepress/sidebars/JavaSideBar.ts
var JavaSideBar_default = [
  "",
  {
    title: "Java",
    collapsable: false,
    children: [
      "Java\u5B66\u4E60\u8DEF\u7EBF by \u7A0B\u5E8F\u5458\u9C7C\u76AE.md",
      "\u524D\u7AEF\u5B66\u4E60\u8DEF\u7EBF by \u7A0B\u5E8F\u5458\u9C7C\u76AE.md",
      "C++\u5B66\u4E60\u8DEF\u7EBF by \u7A0B\u5E8F\u5458\u9C7C\u76AE.md",
      "Python\u5B66\u4E60\u8DEF\u7EBF by \u7A0B\u5E8F\u5458\u9C7C\u76AE.md",
      "\u6570\u636E\u7ED3\u6784\u548C\u7B97\u6CD5\u5B66\u4E60\u8DEF\u7EBF by \u7A0B\u5E8F\u5458\u9C7C\u76AE.md",
      "SQL\u514D\u8D39\u5B9E\u6218\u81EA\u5B66\u7F51\u7AD9 by \u7A0B\u5E8F\u5458\u9C7C\u76AE.md",
      "\u8BA1\u7B97\u673A\u57FA\u7840\u5B66\u4E60\u8DEF\u7EBF by \u7A0B\u5E8F\u5458\u9C7C\u76AE.md",
      "Git&GitHub\u5B66\u4E60\u8DEF\u7EBF by \u7A0B\u5E8F\u5458\u9C7C\u76AE.md",
      "\u8BBE\u8BA1\u6A21\u5F0F\u5B66\u4E60\u8DEF\u7EBF by \u7A0B\u5E8F\u5458\u9C7C\u76AE.md",
      "Linux\u5B66\u4E60\u8DEF\u7EBF by \u7A0B\u5E8F\u5458\u9C7C\u76AE.md"
    ]
  }
];

// .vuepress/sidebars/prejectSideBar.ts
var prejectSideBar_default = [
  "",
  {
    title: "\u5F00\u53D1\u5DE5\u5177\u7BC7",
    collapsable: true,
    children: [
      "\u5F00\u53D1\u5DE5\u5177\u7BC7.md"
    ]
  },
  {
    title: "Java\u9879\u76EE",
    collapsable: true,
    children: [
      { title: "SSM", collapsable: true, children: ["SSM\u533B\u9662\u9884\u7EA6\u6302\u53F7\u7CFB\u7EDF.md", "SSM\u56FE\u4E66\u7BA1\u7406\u7CFB\u7EDF.md", "SSM\u9152\u5E97\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF.md"] },
      { title: "SpringBoot", collapsable: true, children: ["SSM\u533B\u9662\u9884\u7EA6\u6302\u53F7\u7CFB\u7EDF.md", "SSM\u56FE\u4E66\u7BA1\u7406\u7CFB\u7EDF.md"] }
    ]
  },
  {
    title: "Python\u9879\u76EE",
    collapsable: true,
    children: [
      { title: "Django", collapsable: true, children: ["Django\u533B\u9662\u9884\u7EA6\u6302\u53F7\u7CFB\u7EDF.md", "Django\u56FE\u4E66\u7BA1\u7406\u7CFB\u7EDF.md"] },
      { title: "Flask", collapsable: true, children: ["Flask\u533B\u9662\u9884\u7EA6\u6302\u53F7\u7CFB\u7EDF.md", "Flask\u56FE\u4E66\u7BA1\u7406\u7CFB\u7EDF.md"] }
    ]
  },
  {
    title: "\u5927\u6570\u636E\u9879\u76EE",
    collapsable: true,
    children: [
      { title: "Django", collapsable: true, children: ["Django\u533B\u9662\u9884\u7EA6\u6302\u53F7\u7CFB\u7EDF.md", "Django\u56FE\u4E66\u7BA1\u7406\u7CFB\u7EDF.md"] },
      { title: "Flask", collapsable: true, children: ["Flask\u533B\u9662\u9884\u7EA6\u6302\u53F7\u7CFB\u7EDF.md", "Flask\u56FE\u4E66\u7BA1\u7406\u7CFB\u7EDF.md"] }
    ]
  },
  {
    title: "\u524D\u7AEF\u9879\u76EE",
    collapsable: true,
    children: [
      { title: "Django", collapsable: true, children: ["Django\u533B\u9662\u9884\u7EA6\u6302\u53F7\u7CFB\u7EDF.md", "Django\u56FE\u4E66\u7BA1\u7406\u7CFB\u7EDF.md"] },
      { title: "Flask", collapsable: true, children: ["Flask\u533B\u9662\u9884\u7EA6\u6302\u53F7\u7CFB\u7EDF.md", "Flask\u56FE\u4E66\u7BA1\u7406\u7CFB\u7EDF.md"] }
    ]
  }
];

// .vuepress/sidebar.ts
var sidebar_default = {
  "/\u5B66\u4E60\u8DEF\u7EBF/": roadmapSideBar_default,
  "/Java/": JavaSideBar_default,
  "/\u9879\u76EE\u8FD0\u884C\u6587\u6863/": prejectSideBar_default,
  "/": "auto"
};

// .vuepress/footer.ts
var footer_default = {
  copyright: {
    href: "https://beian.miit.gov.cn/",
    name: "\u6CAAICP\u590719026706\u53F7-6"
  }
};

// .vuepress/extraSideBar.ts
var extraSideBar_default = [
  {
    title: "\u516C\u4F17\u53F7",
    icon: "/icon/wxgzhlogo.png",
    popoverTitle: '<span style="font-size:0.8rem;font-weight:bold;">\u626B\u7801\u5173\u6CE8\u7AD9\u957F\u516C\u4F17\u53F7\uFF0C\u63A8\u8350\u5173\u6CE8\uFF01\u53E6\u5916\uFF0C\u516C\u4F17\u53F7\u4E0A\u6709\u5F88\u591A\u5E72\u8D27\u4E0D\u4F1A\u540C\u6B65\u5728\u7EBF\u9605\u8BFB\u7F51\u7AD9\u3002</span>',
    popoverUrl: "/weixgzhh.png",
    popoverDesc: "\u516C\u4F17\u53F7: \u7A0B\u5E8F\u733F\u4EE3\u7801\u4E4B\u8DEF"
  }
];

// .vuepress/config.ts
var author = "\u7A0B\u5E8F\u733F\u4EE3\u7801\u4E4B\u8DEF";
var domain = "https://codefather.cn";
var tags = ["\u7A0B\u5E8F\u5458", "\u7F16\u7A0B", "\u8BA1\u7B97\u673A"];
var config_default = defineConfig({
  title: "\u7A0B\u5E8F\u733F\u9762\u8BD5\u7A81\u51FB",
  description: "\u7A0B\u5E8F\u733F\u6700\u8BE6\u7EC6\u7684\u9762\u8BD5\u7A81\u51FB",
  colorModeSwitch: true,
  colorMode: "dark",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "meta",
      {
        name: "keywords",
        content: "\u7A0B\u5E8F\u733F\u4EE3\u7801\u4E4B\u8DEF, \u7F16\u7A0B\u5B66\u4E60\u8DEF\u7EBF, \u7F16\u7A0B\u77E5\u8BC6\u767E\u79D1, Java, \u7F16\u7A0B\u5BFC\u822A, \u524D\u7AEF, \u5F00\u53D1, \u7F16\u7A0B\u5206\u4EAB, \u9879\u76EE, IT, \u6C42\u804C, \u9762\u7ECF"
      }
    ],
    [
      "script",
      {},
      `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?2675818a983a3131404cee835018f016";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
      `
    ]
  ],
  permalink: "/:slug",
  extraWatchFiles: [".vuepress/*.ts", ".vuepress/sidebars/*.ts"],
  markdown: {
    lineNumbers: true,
    extractHeaders: ["h2", "h3", "h4", "h5", "h6"]
  },
  plugins: [
    ["@vuepress/back-to-top"],
    [
      "@vuepress/google-analytics",
      {
        ga: "GTM-WVS9HM6W"
      }
    ],
    ["@vuepress/medium-zoom"],
    [
      "seo",
      {
        siteTitle: (_, $site) => $site.title,
        title: ($page) => $page.title,
        description: ($page) => $page.frontmatter.description || $page.description,
        author: (_, $site) => $site.themeConfig.author || author,
        tags: ($page) => $page.frontmatter.tags || tags,
        type: ($page) => "article",
        url: (_, $site, path) => ($site.themeConfig.domain || domain || "") + path,
        image: ($page, $site) => $page.frontmatter.image && ($site.themeConfig.domain && !$page.frontmatter.image.startsWith("https") || "") + $page.frontmatter.image,
        publishedAt: ($page) => $page.frontmatter.date && new Date($page.frontmatter.date),
        modifiedAt: ($page) => $page.lastUpdated && new Date($page.lastUpdated)
      }
    ],
    [
      "sitemap",
      {
        hostname: domain
      }
    ],
    ["vuepress-plugin-baidu-autopush"],
    ["vuepress-plugin-tags"],
    [
      "vuepress-plugin-code-copy",
      {
        successText: "\u4EE3\u7801\u5DF2\u590D\u5236"
      }
    ],
    [
      "feed",
      {
        canonical_base: domain,
        count: 1e4,
        posts_directories: []
      }
    ],
    ["img-lazy"]
  ],
  themeConfig: {
    logo: "/logo.png",
    nav: navbar_default,
    sidebar: sidebar_default,
    lastUpdated: "\u6700\u8FD1\u66F4\u65B0",
    footer: footer_default,
    extraSideBar: extraSideBar_default
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLnZ1ZXByZXNzL2NvbmZpZy50cyIsICIudnVlcHJlc3MvbmF2YmFyLnRzIiwgIi52dWVwcmVzcy9zaWRlYmFycy9yb2FkbWFwU2lkZUJhci50cyIsICIudnVlcHJlc3Mvc2lkZWJhcnMvSmF2YVNpZGVCYXIudHMiLCAiLnZ1ZXByZXNzL3NpZGViYXJzL3ByZWplY3RTaWRlQmFyLnRzIiwgIi52dWVwcmVzcy9zaWRlYmFyLnRzIiwgIi52dWVwcmVzcy9mb290ZXIudHMiLCAiLnZ1ZXByZXNzL2V4dHJhU2lkZUJhci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZ1ZXByZXNzL2NvbmZpZ1wiO1xuaW1wb3J0IG5hdmJhciBmcm9tIFwiLi9uYXZiYXJcIjtcbmltcG9ydCBzaWRlYmFyIGZyb20gXCIuL3NpZGViYXJcIjtcbmltcG9ydCBmb290ZXIgZnJvbSBcIi4vZm9vdGVyXCI7XG5pbXBvcnQgZXh0cmFTaWRlQmFyIGZyb20gXCIuL2V4dHJhU2lkZUJhclwiO1xuXG5jb25zdCBhdXRob3IgPSBcIlx1N0EwQlx1NUU4Rlx1NzMzRlx1NEVFM1x1NzgwMVx1NEU0Qlx1OERFRlwiO1xuY29uc3QgZG9tYWluID0gXCJodHRwczovL2NvZGVmYXRoZXIuY25cIjtcbmNvbnN0IHRhZ3MgPSBbXCJcdTdBMEJcdTVFOEZcdTU0NThcIiwgXCJcdTdGMTZcdTdBMEJcIiwgXCJcdThCQTFcdTdCOTdcdTY3M0FcIl07XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHRpdGxlOiBcIlx1N0EwQlx1NUU4Rlx1NzMzRlx1OTc2Mlx1OEJENVx1N0E4MVx1NTFGQlwiLFxuICBkZXNjcmlwdGlvbjogXCJcdTdBMEJcdTVFOEZcdTczM0ZcdTY3MDBcdThCRTZcdTdFQzZcdTc2ODRcdTk3NjJcdThCRDVcdTdBODFcdTUxRkJcIixcblxuICBjb2xvck1vZGVTd2l0Y2g6dHJ1ZSxcbiAgY29sb3JNb2RlOidkYXJrJyxcbiAgaGVhZDogW1xuICAgIC8vIFx1N0FEOVx1NzBCOVx1NTZGRVx1NjgwN1xuICAgIFtcImxpbmtcIiwgeyByZWw6IFwiaWNvblwiLCBocmVmOiBcIi9mYXZpY29uLmljb1wiIH1dLFxuICAgIC8vIFNFT1xuICAgIFtcbiAgICAgIFwibWV0YVwiLFxuICAgICAge1xuICAgICAgICBuYW1lOiBcImtleXdvcmRzXCIsXG4gICAgICAgIGNvbnRlbnQ6XG4gICAgICAgICAgXCJcdTdBMEJcdTVFOEZcdTczM0ZcdTRFRTNcdTc4MDFcdTRFNEJcdThERUYsIFx1N0YxNlx1N0EwQlx1NUI2Nlx1NEU2MFx1OERFRlx1N0VCRiwgXHU3RjE2XHU3QTBCXHU3N0U1XHU4QkM2XHU3NjdFXHU3OUQxLCBKYXZhLCBcdTdGMTZcdTdBMEJcdTVCRkNcdTgyMkEsIFx1NTI0RFx1N0FFRiwgXHU1RjAwXHU1M0QxLCBcdTdGMTZcdTdBMEJcdTUyMDZcdTRFQUIsIFx1OTg3OVx1NzZFRSwgSVQsIFx1NkM0Mlx1ODA0QywgXHU5NzYyXHU3RUNGXCIsXG4gICAgICB9LFxuICAgIF0sXG4gICAgLy8gXHU3NjdFXHU1RUE2XHU3RURGXHU4QkExXG4gICAgW1xuICAgICAgXCJzY3JpcHRcIixcbiAgICAgIHt9LFxuICAgICAgYFxuICAgICAgICB2YXIgX2htdCA9IF9obXQgfHwgW107XG4gICAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgaG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICAgIGhtLnNyYyA9IFwiaHR0cHM6Ly9obS5iYWlkdS5jb20vaG0uanM/MjY3NTgxOGE5ODNhMzEzMTQwNGNlZTgzNTAxOGYwMTZcIjtcbiAgICAgICAgICB2YXIgcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpWzBdOyBcbiAgICAgICAgICBzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGhtLCBzKTtcbiAgICAgICAgfSkoKTtcbiAgICAgIGAsXG4gICAgXSxcbiAgXSxcbiAgcGVybWFsaW5rOiBcIi86c2x1Z1wiLFxuXG4gIC8vIFx1NzZEMVx1NTQyQ1x1NjU4N1x1NEVGNlx1NTNEOFx1NTMxNlx1RkYwQ1x1NzBFRFx1NjZGNFx1NjVCMFxuICBleHRyYVdhdGNoRmlsZXM6IFtcIi52dWVwcmVzcy8qLnRzXCIsIFwiLnZ1ZXByZXNzL3NpZGViYXJzLyoudHNcIl0sXG4gIG1hcmtkb3duOiB7XG4gICAgLy8gXHU1RjAwXHU1NDJGXHU0RUUzXHU3ODAxXHU1NzU3XHU3Njg0XHU4ODRDXHU1M0Y3XG4gICAgbGluZU51bWJlcnM6IHRydWUsXG4gICAgLy8gXHU2NTJGXHU2MzAxIDQgXHU3RUE3XHU0RUU1XHU0RTBBXHU3Njg0XHU2ODA3XHU5ODk4XHU2RTMyXHU2N0QzXG4gICAgZXh0cmFjdEhlYWRlcnM6IFtcImgyXCIsIFwiaDNcIiwgXCJoNFwiLCBcImg1XCIsIFwiaDZcIl0sXG4gIH0sXG4gIC8vIEB0cy1pZ25vcmVcbiAgcGx1Z2luczogW1xuICAgIFtcIkB2dWVwcmVzcy9iYWNrLXRvLXRvcFwiXSxcbiAgICAvLyBHb29nbGUgXHU1MjA2XHU2NzkwXG4gICAgW1xuICAgICAgXCJAdnVlcHJlc3MvZ29vZ2xlLWFuYWx5dGljc1wiLFxuICAgICAge1xuICAgICAgICBnYTogXCJHVE0tV1ZTOUhNNldcIiwgLy8gXHU4ODY1XHU1MTQ1XHU4MUVBXHU1REYxXHU3Njg0XHU4QzM3XHU2QjRDXHU1MjA2XHU2NzkwIElEXHVGRjBDXHU2QkQ0XHU1OTgyIFVBLTAwMDAwMDAwLTBcbiAgICAgIH0sXG4gICAgXSxcbiAgICBbXCJAdnVlcHJlc3MvbWVkaXVtLXpvb21cIl0sXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2xvcmlzbGVpdmEvdnVlcHJlc3MtcGx1Z2luLXNlb1xuICAgIFtcbiAgICAgIFwic2VvXCIsXG4gICAgICB7XG4gICAgICAgIHNpdGVUaXRsZTogKF8sICRzaXRlKSA9PiAkc2l0ZS50aXRsZSxcbiAgICAgICAgdGl0bGU6ICgkcGFnZSkgPT4gJHBhZ2UudGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAoJHBhZ2UpID0+XG4gICAgICAgICAgJHBhZ2UuZnJvbnRtYXR0ZXIuZGVzY3JpcHRpb24gfHwgJHBhZ2UuZGVzY3JpcHRpb24sXG4gICAgICAgIGF1dGhvcjogKF8sICRzaXRlKSA9PiAkc2l0ZS50aGVtZUNvbmZpZy5hdXRob3IgfHwgYXV0aG9yLFxuICAgICAgICB0YWdzOiAoJHBhZ2UpID0+ICRwYWdlLmZyb250bWF0dGVyLnRhZ3MgfHwgdGFncyxcbiAgICAgICAgdHlwZTogKCRwYWdlKSA9PiBcImFydGljbGVcIixcbiAgICAgICAgdXJsOiAoXywgJHNpdGUsIHBhdGgpID0+XG4gICAgICAgICAgKCRzaXRlLnRoZW1lQ29uZmlnLmRvbWFpbiB8fCBkb21haW4gfHwgXCJcIikgKyBwYXRoLFxuICAgICAgICBpbWFnZTogKCRwYWdlLCAkc2l0ZSkgPT5cbiAgICAgICAgICAkcGFnZS5mcm9udG1hdHRlci5pbWFnZSAmJlxuICAgICAgICAgICgoJHNpdGUudGhlbWVDb25maWcuZG9tYWluICYmXG4gICAgICAgICAgICAhJHBhZ2UuZnJvbnRtYXR0ZXIuaW1hZ2Uuc3RhcnRzV2l0aChcImh0dHBzXCIpKSB8fFxuICAgICAgICAgICAgXCJcIikgKyAkcGFnZS5mcm9udG1hdHRlci5pbWFnZSxcbiAgICAgICAgcHVibGlzaGVkQXQ6ICgkcGFnZSkgPT5cbiAgICAgICAgICAkcGFnZS5mcm9udG1hdHRlci5kYXRlICYmIG5ldyBEYXRlKCRwYWdlLmZyb250bWF0dGVyLmRhdGUpLFxuICAgICAgICBtb2RpZmllZEF0OiAoJHBhZ2UpID0+ICRwYWdlLmxhc3RVcGRhdGVkICYmIG5ldyBEYXRlKCRwYWdlLmxhc3RVcGRhdGVkKSxcbiAgICAgIH0sXG4gICAgXSxcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZWtvZXJ5YW50by92dWVwcmVzcy1wbHVnaW4tc2l0ZW1hcFxuICAgIFtcbiAgICAgIFwic2l0ZW1hcFwiLFxuICAgICAge1xuICAgICAgICBob3N0bmFtZTogZG9tYWluLFxuICAgICAgfSxcbiAgICBdLFxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9JT3JpZW5zL3Z1ZXByZXNzLXBsdWdpbi1iYWlkdS1hdXRvcHVzaFxuICAgIFtcInZ1ZXByZXNzLXBsdWdpbi1iYWlkdS1hdXRvcHVzaFwiXSxcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20venE5OTI5OS92dWVwcmVzcy1wbHVnaW4vdHJlZS9tYXN0ZXIvdnVlcHJlc3MtcGx1Z2luLXRhZ3NcbiAgICBbXCJ2dWVwcmVzcy1wbHVnaW4tdGFnc1wiXSxcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vem5pY2hvbGFzYnJvd24vdnVlcHJlc3MtcGx1Z2luLWNvZGUtY29weVxuICAgIFtcbiAgICAgIFwidnVlcHJlc3MtcGx1Z2luLWNvZGUtY29weVwiLFxuICAgICAge1xuICAgICAgICBzdWNjZXNzVGV4dDogXCJcdTRFRTNcdTc4MDFcdTVERjJcdTU5MERcdTUyMzZcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vd2VibWFzdGVyaXNoL3Z1ZXByZXNzLXBsdWdpbi1mZWVkXG4gICAgW1xuICAgICAgXCJmZWVkXCIsXG4gICAgICB7XG4gICAgICAgIGNhbm9uaWNhbF9iYXNlOiBkb21haW4sXG4gICAgICAgIGNvdW50OiAxMDAwMCxcbiAgICAgICAgLy8gXHU5NzAwXHU4OTgxXHU4MUVBXHU1MkE4XHU2M0E4XHU5MDAxXHU3Njg0XHU2NTg3XHU2ODYzXHU3NkVFXHU1RjU1XG4gICAgICAgIHBvc3RzX2RpcmVjdG9yaWVzOiBbXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdG9sa2luZy92dWVwcmVzcy1wbHVnaW4taW1nLWxhenlcbiAgICBbXCJpbWctbGF6eVwiXSxcbiAgXSxcbiAgLy8gXHU0RTNCXHU5ODk4XHU5MTREXHU3RjZFXG4gIHRoZW1lQ29uZmlnOiB7XG4gICAgbG9nbzogXCIvbG9nby5wbmdcIixcbiAgICBuYXY6IG5hdmJhcixcbiAgICBzaWRlYmFyLFxuICAgIGxhc3RVcGRhdGVkOiBcIlx1NjcwMFx1OEZEMVx1NjZGNFx1NjVCMFwiLFxuXG4gICAgLy8gR2l0SHViIFx1NEVEM1x1NUU5M1x1NEY0RFx1N0Y2RVxuLyogICAgcmVwbzogXCJsaXl1cGkvY29kZWZhdGhlclwiLFxuICAgIGRvY3NCcmFuY2g6IFwibWFzdGVyXCIsKi9cblxuICAgIC8vIFx1N0YxNlx1OEY5MVx1OTRGRVx1NjNBNVxuLyogICAgZWRpdExpbmtzOiB0cnVlLFxuICAgIGVkaXRMaW5rVGV4dDogXCJcdTVCOENcdTU1ODRcdTk4NzVcdTk3NjJcIiwqL1xuXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIC8vIFx1NUU5NVx1OTBFOFx1NzI0OFx1Njc0M1x1NEZFMVx1NjA2RlxuICAgIGZvb3RlcixcbiAgICAvLyBcdTk4OURcdTU5MTZcdTUzRjNcdTRGQTdcdThGQjlcdTY4MEZcbiAgICBleHRyYVNpZGVCYXIsXG4gIH0sXG59KTtcbiIsICJpbXBvcnQge05hdkl0ZW19IGZyb20gXCJ2dWVwcmVzcy9jb25maWdcIjtcblxuZXhwb3J0IGRlZmF1bHQgW1xuICAgIHsgdGV4dDogJ1x1OTk5Nlx1OTg3NScsIGxpbms6ICcvJyB9LFxuICAgIHsgdGV4dDogXCJKYXZhXCIsbGluazogJy9KYXZhLyd9LFxuICAgIHsgdGV4dDogXCJQeXRob25cIixsaW5rOiAnL1B5dGhvbi8nfSxcbiAgICB7IHRleHQ6IFwiXHU1OTI3XHU2NTcwXHU2MzZFXCIsbGluazogJy9cdTU5MjdcdTY1NzBcdTYzNkUvJ30sXG4gICAgeyB0ZXh0OiBcIlx1NTI0RFx1N0FFRlwiLGxpbms6ICcvXHU1MjREXHU3QUVGLyd9LFxuICAgIHsgdGV4dDogXCJcdTVCNjZcdTRFNjBcdThERUZcdTdFQkZcIixsaW5rOiAnL1x1NUI2Nlx1NEU2MFx1OERFRlx1N0VCRi8nfSxcbiAgICB7IHRleHQ6IFwiXHU1RjAwXHU2RTkwXHU5ODc5XHU3NkVFXCIsbGluazogJy9cdTk4NzlcdTc2RUVcdThGRDBcdTg4NENcdTY1ODdcdTY4NjMvJ30sXG4gICAgeyB0ZXh0OiAnXHU3QTBCXHU1RThGXHU3MzNGXHU0RUUzXHU3ODAxXHU0RTRCXHU4REVGJyxpdGVtczogW1xuICAgICAgICAgICAgeyB0ZXh0OiAnR2l0aHViJywgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9tcXlxaW5nZmVuZycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1NjM5OFx1OTFEMScsIGxpbms6ICdodHRwczovL2p1ZWppbi5jbi91c2VyLzcxMjEzOTIzNDM1OTE4Mi9wb3N0cycgfVxuICAgICAgICBdfSxcbl0gYXMgTmF2SXRlbVtdO1xuIiwgImV4cG9ydCBkZWZhdWx0IFtcbiAgXCJcIixcbiAge1xuICAgIHRpdGxlOiBcIlx1NUI2Nlx1NEU2MFx1OERFRlx1N0VCRlwiLFxuICAgIGNvbGxhcHNhYmxlOiBmYWxzZSxcbiAgICBjaGlsZHJlbjogW1xuICAgICAgXCJKYXZhXHU1QjY2XHU0RTYwXHU4REVGXHU3RUJGIGJ5IFx1N0EwQlx1NUU4Rlx1NTQ1OFx1OUM3Q1x1NzZBRS5tZFwiLFxuICAgICAgXCJcdTUyNERcdTdBRUZcdTVCNjZcdTRFNjBcdThERUZcdTdFQkYgYnkgXHU3QTBCXHU1RThGXHU1NDU4XHU5QzdDXHU3NkFFLm1kXCIsXG4gICAgICBcIkMrK1x1NUI2Nlx1NEU2MFx1OERFRlx1N0VCRiBieSBcdTdBMEJcdTVFOEZcdTU0NThcdTlDN0NcdTc2QUUubWRcIixcbiAgICAgIFwiUHl0aG9uXHU1QjY2XHU0RTYwXHU4REVGXHU3RUJGIGJ5IFx1N0EwQlx1NUU4Rlx1NTQ1OFx1OUM3Q1x1NzZBRS5tZFwiLFxuICAgICAgXCJcdTY1NzBcdTYzNkVcdTdFRDNcdTY3ODRcdTU0OENcdTdCOTdcdTZDRDVcdTVCNjZcdTRFNjBcdThERUZcdTdFQkYgYnkgXHU3QTBCXHU1RThGXHU1NDU4XHU5QzdDXHU3NkFFLm1kXCIsXG4gICAgICBcIlNRTFx1NTE0RFx1OEQzOVx1NUI5RVx1NjIxOFx1ODFFQVx1NUI2Nlx1N0Y1MVx1N0FEOSBieSBcdTdBMEJcdTVFOEZcdTU0NThcdTlDN0NcdTc2QUUubWRcIixcbiAgICAgIFwiXHU4QkExXHU3Qjk3XHU2NzNBXHU1N0ZBXHU3ODQwXHU1QjY2XHU0RTYwXHU4REVGXHU3RUJGIGJ5IFx1N0EwQlx1NUU4Rlx1NTQ1OFx1OUM3Q1x1NzZBRS5tZFwiLFxuICAgICAgXCJHaXQmR2l0SHViXHU1QjY2XHU0RTYwXHU4REVGXHU3RUJGIGJ5IFx1N0EwQlx1NUU4Rlx1NTQ1OFx1OUM3Q1x1NzZBRS5tZFwiLFxuICAgICAgXCJcdThCQkVcdThCQTFcdTZBMjFcdTVGMEZcdTVCNjZcdTRFNjBcdThERUZcdTdFQkYgYnkgXHU3QTBCXHU1RThGXHU1NDU4XHU5QzdDXHU3NkFFLm1kXCIsXG4gICAgICBcIkxpbnV4XHU1QjY2XHU0RTYwXHU4REVGXHU3RUJGIGJ5IFx1N0EwQlx1NUU4Rlx1NTQ1OFx1OUM3Q1x1NzZBRS5tZFwiLFxuICAgIF0sXG4gIH0sXG5dO1xuIiwgImV4cG9ydCBkZWZhdWx0IFtcclxuICAgIFwiXCIsXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiSmF2YVwiLFxyXG4gICAgICAgIGNvbGxhcHNhYmxlOiBmYWxzZSxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICBcIkphdmFcdTVCNjZcdTRFNjBcdThERUZcdTdFQkYgYnkgXHU3QTBCXHU1RThGXHU1NDU4XHU5QzdDXHU3NkFFLm1kXCIsXHJcbiAgICAgICAgICAgIFwiXHU1MjREXHU3QUVGXHU1QjY2XHU0RTYwXHU4REVGXHU3RUJGIGJ5IFx1N0EwQlx1NUU4Rlx1NTQ1OFx1OUM3Q1x1NzZBRS5tZFwiLFxyXG4gICAgICAgICAgICBcIkMrK1x1NUI2Nlx1NEU2MFx1OERFRlx1N0VCRiBieSBcdTdBMEJcdTVFOEZcdTU0NThcdTlDN0NcdTc2QUUubWRcIixcclxuICAgICAgICAgICAgXCJQeXRob25cdTVCNjZcdTRFNjBcdThERUZcdTdFQkYgYnkgXHU3QTBCXHU1RThGXHU1NDU4XHU5QzdDXHU3NkFFLm1kXCIsXHJcbiAgICAgICAgICAgIFwiXHU2NTcwXHU2MzZFXHU3RUQzXHU2Nzg0XHU1NDhDXHU3Qjk3XHU2Q0Q1XHU1QjY2XHU0RTYwXHU4REVGXHU3RUJGIGJ5IFx1N0EwQlx1NUU4Rlx1NTQ1OFx1OUM3Q1x1NzZBRS5tZFwiLFxyXG4gICAgICAgICAgICBcIlNRTFx1NTE0RFx1OEQzOVx1NUI5RVx1NjIxOFx1ODFFQVx1NUI2Nlx1N0Y1MVx1N0FEOSBieSBcdTdBMEJcdTVFOEZcdTU0NThcdTlDN0NcdTc2QUUubWRcIixcclxuICAgICAgICAgICAgXCJcdThCQTFcdTdCOTdcdTY3M0FcdTU3RkFcdTc4NDBcdTVCNjZcdTRFNjBcdThERUZcdTdFQkYgYnkgXHU3QTBCXHU1RThGXHU1NDU4XHU5QzdDXHU3NkFFLm1kXCIsXHJcbiAgICAgICAgICAgIFwiR2l0JkdpdEh1Ylx1NUI2Nlx1NEU2MFx1OERFRlx1N0VCRiBieSBcdTdBMEJcdTVFOEZcdTU0NThcdTlDN0NcdTc2QUUubWRcIixcclxuICAgICAgICAgICAgXCJcdThCQkVcdThCQTFcdTZBMjFcdTVGMEZcdTVCNjZcdTRFNjBcdThERUZcdTdFQkYgYnkgXHU3QTBCXHU1RThGXHU1NDU4XHU5QzdDXHU3NkFFLm1kXCIsXHJcbiAgICAgICAgICAgIFwiTGludXhcdTVCNjZcdTRFNjBcdThERUZcdTdFQkYgYnkgXHU3QTBCXHU1RThGXHU1NDU4XHU5QzdDXHU3NkFFLm1kXCIsXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbl07XHJcbiIsICJleHBvcnQgZGVmYXVsdCBbXHJcbiAgICBcIlwiLFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIlx1NUYwMFx1NTNEMVx1NURFNVx1NTE3N1x1N0JDN1wiLFxyXG4gICAgICAgIGNvbGxhcHNhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIFwiXHU1RjAwXHU1M0QxXHU1REU1XHU1MTc3XHU3QkM3Lm1kXCIsXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiSmF2YVx1OTg3OVx1NzZFRVwiLFxyXG4gICAgICAgIGNvbGxhcHNhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIHt0aXRsZTogXCJTU01cIixjb2xsYXBzYWJsZTogdHJ1ZSxjaGlsZHJlbjpbXCJTU01cdTUzM0JcdTk2NjJcdTk4ODRcdTdFQTZcdTYzMDJcdTUzRjdcdTdDRkJcdTdFREYubWRcIixcIlNTTVx1NTZGRVx1NEU2Nlx1N0JBMVx1NzQwNlx1N0NGQlx1N0VERi5tZFwiLFwiU1NNXHU5MTUyXHU1RTk3XHU1NDBFXHU1M0YwXHU3QkExXHU3NDA2XHU3Q0ZCXHU3RURGLm1kXCJdfSxcclxuICAgICAgICAgICAge3RpdGxlOiBcIlNwcmluZ0Jvb3RcIixjb2xsYXBzYWJsZTogdHJ1ZSxjaGlsZHJlbjpbXCJTU01cdTUzM0JcdTk2NjJcdTk4ODRcdTdFQTZcdTYzMDJcdTUzRjdcdTdDRkJcdTdFREYubWRcIixcIlNTTVx1NTZGRVx1NEU2Nlx1N0JBMVx1NzQwNlx1N0NGQlx1N0VERi5tZFwiLF19LFxyXG4gICAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIlB5dGhvblx1OTg3OVx1NzZFRVwiLFxyXG4gICAgICAgIGNvbGxhcHNhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIHt0aXRsZTogXCJEamFuZ29cIixjb2xsYXBzYWJsZTogdHJ1ZSxjaGlsZHJlbjpbXCJEamFuZ29cdTUzM0JcdTk2NjJcdTk4ODRcdTdFQTZcdTYzMDJcdTUzRjdcdTdDRkJcdTdFREYubWRcIixcIkRqYW5nb1x1NTZGRVx1NEU2Nlx1N0JBMVx1NzQwNlx1N0NGQlx1N0VERi5tZFwiLF19LFxyXG4gICAgICAgICAgICB7dGl0bGU6IFwiRmxhc2tcIixjb2xsYXBzYWJsZTogdHJ1ZSxjaGlsZHJlbjpbXCJGbGFza1x1NTMzQlx1OTY2Mlx1OTg4NFx1N0VBNlx1NjMwMlx1NTNGN1x1N0NGQlx1N0VERi5tZFwiLFwiRmxhc2tcdTU2RkVcdTRFNjZcdTdCQTFcdTc0MDZcdTdDRkJcdTdFREYubWRcIixdfSxcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJcdTU5MjdcdTY1NzBcdTYzNkVcdTk4NzlcdTc2RUVcIixcclxuICAgICAgICBjb2xsYXBzYWJsZTogdHJ1ZSxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICB7dGl0bGU6IFwiRGphbmdvXCIsY29sbGFwc2FibGU6IHRydWUsY2hpbGRyZW46W1wiRGphbmdvXHU1MzNCXHU5NjYyXHU5ODg0XHU3RUE2XHU2MzAyXHU1M0Y3XHU3Q0ZCXHU3RURGLm1kXCIsXCJEamFuZ29cdTU2RkVcdTRFNjZcdTdCQTFcdTc0MDZcdTdDRkJcdTdFREYubWRcIixdfSxcclxuICAgICAgICAgICAge3RpdGxlOiBcIkZsYXNrXCIsY29sbGFwc2FibGU6IHRydWUsY2hpbGRyZW46W1wiRmxhc2tcdTUzM0JcdTk2NjJcdTk4ODRcdTdFQTZcdTYzMDJcdTUzRjdcdTdDRkJcdTdFREYubWRcIixcIkZsYXNrXHU1NkZFXHU0RTY2XHU3QkExXHU3NDA2XHU3Q0ZCXHU3RURGLm1kXCIsXX0sXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiXHU1MjREXHU3QUVGXHU5ODc5XHU3NkVFXCIsXHJcbiAgICAgICAgY29sbGFwc2FibGU6IHRydWUsXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAge3RpdGxlOiBcIkRqYW5nb1wiLGNvbGxhcHNhYmxlOiB0cnVlLGNoaWxkcmVuOltcIkRqYW5nb1x1NTMzQlx1OTY2Mlx1OTg4NFx1N0VBNlx1NjMwMlx1NTNGN1x1N0NGQlx1N0VERi5tZFwiLFwiRGphbmdvXHU1NkZFXHU0RTY2XHU3QkExXHU3NDA2XHU3Q0ZCXHU3RURGLm1kXCIsXX0sXHJcbiAgICAgICAgICAgIHt0aXRsZTogXCJGbGFza1wiLGNvbGxhcHNhYmxlOiB0cnVlLGNoaWxkcmVuOltcIkZsYXNrXHU1MzNCXHU5NjYyXHU5ODg0XHU3RUE2XHU2MzAyXHU1M0Y3XHU3Q0ZCXHU3RURGLm1kXCIsXCJGbGFza1x1NTZGRVx1NEU2Nlx1N0JBMVx1NzQwNlx1N0NGQlx1N0VERi5tZFwiLF19LFxyXG4gICAgICAgIF0sXHJcbiAgICB9LFxyXG5dO1xyXG4iLCAiaW1wb3J0IHtTaWRlYmFyQ29uZmlnNE11bHRpcGxlfSBmcm9tIFwidnVlcHJlc3MvY29uZmlnXCI7XG5cbmltcG9ydCByb2FkbWFwU2lkZUJhciBmcm9tIFwiLi9zaWRlYmFycy9yb2FkbWFwU2lkZUJhclwiO1xuaW1wb3J0IEphdmFTaWRlQmFyIGZyb20gXCIuL3NpZGViYXJzL0phdmFTaWRlQmFyXCI7XG5pbXBvcnQgcHJlamVjdFNpZGVCYXIgZnJvbSBcIi4vc2lkZWJhcnMvcHJlamVjdFNpZGVCYXJcIjtcbi8vIEB0cy1pZ25vcmVcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBcIi9cdTVCNjZcdTRFNjBcdThERUZcdTdFQkYvXCI6IHJvYWRtYXBTaWRlQmFyLFxuICAgIFwiL0phdmEvXCI6IEphdmFTaWRlQmFyLFxuICAgIFwiL1x1OTg3OVx1NzZFRVx1OEZEMFx1ODg0Q1x1NjU4N1x1Njg2My9cIjogcHJlamVjdFNpZGVCYXIsXG4gICAgLy8gXHU5NjREXHU3RUE3XHVGRjBDXHU5RUQ4XHU4QkE0XHU2ODM5XHU2MzZFXHU2NTg3XHU3QUUwXHU2ODA3XHU5ODk4XHU2RTMyXHU2N0QzXHU0RkE3XHU4RkI5XHU2ODBGXG4gICAgXCIvXCI6IFwiYXV0b1wiLFxufSBhcyBTaWRlYmFyQ29uZmlnNE11bHRpcGxlO1xuIiwgIi8qKlxuICogXHU1RTk1XHU5MEU4XHU3MjQ4XHU2NzQzXHU0RkUxXHU2MDZGXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLypmcmllbmRMaW5rczogW1xuICAgIC8hKntcbiAgICAgIGxhYmVsOiBcIlx1N0FEOVx1OTU3RiAtIFx1N0EwQlx1NUU4Rlx1NTQ1OFx1OUM3Q1x1NzZBRVwiLFxuICAgICAgLy8gaWNvbjogXCIvaWNvbi91c2VyLnN2Z1wiLFxuICAgICAgaHJlZjogXCJodHRwczovL3l1eXVhbndlYi5mZWlzaHUuY24vd2lraS9BYmxkdzVXa2ppZHlTeGtLeFUyY1FkQXRuYWhcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIlx1OUM3Q1x1OUUyMlx1N0Y1MVx1N0VEQ1wiLFxuICAgICAgaHJlZjogXCJodHRwczovL3l1eXVhbndlYi5jb20vXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogXCJcdTgwMDFcdTlDN0NcdTdCODBcdTUzODZcIixcbiAgICAgIGhyZWY6IFwiaHR0cHM6Ly93d3cubGFveXVqaWFubGkuY29tL1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IFwiXHU5QzdDXHU4MDZBXHU2NjBFIEFJXCIsXG4gICAgICBocmVmOiBcImh0dHBzOi8vd3d3Lnl1Y29uZ21pbmcuY29tL1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IFwiXHU3RjE2XHU3QTBCXHU1QjY2XHU0RTYwXHU1NzA4XCIsXG4gICAgICBocmVmOiBcImh0dHBzOi8veXV5dWFud2ViLmZlaXNodS5jbi93aWtpL1ZDMXF3bVg5ZGlDQksza2lkeWVjNzR2Rm5kZVwiLFxuICAgIH0sKiEvXG4gIF0sKi9cbiAgY29weXJpZ2h0OiB7XG4gICAgaHJlZjogXCJodHRwczovL2JlaWFuLm1paXQuZ292LmNuL1wiLFxuICAgIG5hbWU6IFwiXHU2Q0FBSUNQXHU1OTA3MTkwMjY3MDZcdTUzRjctNlwiLFxuICB9LFxufTtcbiIsICIvKipcbiAqIFx1OTg5RFx1NTkxNlx1NTNGM1x1NEZBN1x1OEZCOVx1NjgwRlxuICovXG5leHBvcnQgZGVmYXVsdCBbXG4gICAge1xuICAgICAgICB0aXRsZTogXCJcdTUxNkNcdTRGMTdcdTUzRjdcIixcbiAgICAgICAgaWNvbjogXCIvaWNvbi93eGd6aGxvZ28ucG5nXCIsXG4gICAgICAgIHBvcG92ZXJUaXRsZTpcbiAgICAgICAgICAgICc8c3BhbiBzdHlsZT1cImZvbnQtc2l6ZTowLjhyZW07Zm9udC13ZWlnaHQ6Ym9sZDtcIj5cdTYyNkJcdTc4MDFcdTUxNzNcdTZDRThcdTdBRDlcdTk1N0ZcdTUxNkNcdTRGMTdcdTUzRjdcdUZGMENcdTYzQThcdTgzNTBcdTUxNzNcdTZDRThcdUZGMDFcdTUzRTZcdTU5MTZcdUZGMENcdTUxNkNcdTRGMTdcdTUzRjdcdTRFMEFcdTY3MDlcdTVGODhcdTU5MUFcdTVFNzJcdThEMjdcdTRFMERcdTRGMUFcdTU0MENcdTZCNjVcdTU3MjhcdTdFQkZcdTk2MDVcdThCRkJcdTdGNTFcdTdBRDlcdTMwMDI8L3NwYW4+JyxcbiAgICAgICAgcG9wb3ZlclVybDpcbiAgICAgICAgICAgIFwiL3dlaXhnemhoLnBuZ1wiLFxuICAgICAgICBwb3BvdmVyRGVzYzogXCJcdTUxNkNcdTRGMTdcdTUzRjc6IFx1N0EwQlx1NUU4Rlx1NzMzRlx1NEVFM1x1NzgwMVx1NEU0Qlx1OERFRlwiLFxuICAgIH0sXG4gIC8qe1xuICAgIHRpdGxlOiBcIlx1NjI0Qlx1NjczQVx1NzcwQlwiLFxuICAgIGljb246IFwiL2ljb24vbW9iaWxlLnBuZ1wiLFxuICAgIHBvcG92ZXJUaXRsZTogXCJcdTVGQUVcdTRGRTFcdTYyNkJcdTRFMDBcdTYyNkJcIixcbiAgICBwb3BvdmVyVXJsOlxuICAgICAgXCIvcXJjb2RlLWNvZGVmYXRoZXIucG5nXCIsXG4gICAgcG9wb3ZlckRlc2M6IFwiXHU1M0VGXHU0RUU1XHU2MjRCXHU2NzNBXHU3NzBCXHU2MjE2XHU1MjA2XHU0RUFCXHU4MUYzXHU2NzBCXHU1M0NCXHU1NzA4XCIsXG4gIH0sXG5cbiAge1xuICAgIHRpdGxlOiBcIlx1NEVBNFx1NkQ0MVx1N0ZBNFwiLFxuICAgIGljb246IFwiL2ljb24vd2VpeGluLnBuZ1wiLFxuICAgIHBvcG92ZXJUaXRsZTpcbiAgICAgICc8c3BhbiBzdHlsZT1cImZvbnQtc2l6ZTowLjhyZW07Zm9udC13ZWlnaHQ6Ym9sZDtcIj5cdTYyNkJcdTc4MDFcdTZERkJcdTUyQTAgPHNwYW4gc3R5bGU9XCJjb2xvcjpyZWQ7XCI+XHU3RjE2XHU3QTBCXHU1QkZDXHU4MjJBXHU1QzBGXHU1MkE5XHU2MjRCXHU1RkFFXHU0RkUxPC9zcGFuPlx1RkYwQ1x1NjJDOVx1NEY2MFx1OEZEQlx1NEUxM1x1NUM1RVx1N0YxNlx1N0EwQlx1NUI2Nlx1NEU2MFx1NEVBNFx1NkQ0MVx1N0ZBNDwvc3Bhbj4nLFxuICAgIHBvcG92ZXJVcmw6XG4gICAgICBcIi9xcmNvZGUtY29kZW5hdmhlbHBlci5wbmdcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlx1NEUwQlx1OEQ0NFx1NjU5OVwiLFxuICAgIGljb246IFwiL2ljb24veGlhemFpLnBuZ1wiLFxuICAgIHBvcG92ZXJUaXRsZTpcbiAgICAgICc8c3BhbiBzdHlsZT1cImZvbnQtc2l6ZTowLjhyZW07Zm9udC13ZWlnaHQ6Ym9sZDtcIj5cdTYyNkJcdTc4MDFcdTUxNzNcdTZDRThcdTdBRDlcdTk1N0ZcdTUxNkNcdTRGMTdcdTUzRjdcdUZGMENcdTU2REVcdTU5MEQgPHNwYW4gc3R5bGU9XCJjb2xvcjpyZWQ7XCI+XHU1QjY2XHU0RTYwPC9zcGFuPiBcdTgzQjdcdTUzRDZcdTZENzdcdTkxQ0ZcdTdGMTZcdTdBMEJcdTVCNjZcdTRFNjBcdThENDRcdTZFOTBcdTMwMENcdTY1RTBcdTRFRkJcdTRGNTVcdTU5NTdcdThERUZcdTMwMEQ8L3NwYW4+JyxcbiAgICBwb3BvdmVyVXJsOlxuICAgICAgXCIvcXJjb2RlLW1wY29kZXJfeXVwaS5qcGdcIixcbiAgICBwb3BvdmVyRGVzYzogXCJcdTUxNkNcdTRGMTdcdTUzRjc6IFx1N0EwQlx1NUU4Rlx1NzMzRlx1NEVFM1x1NzgwMVx1NEU0Qlx1OERFRlwiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiXHU2NTJGXHU2MzAxXHU2MjExXCIsXG4gICAgaWNvbjogXCIvaWNvbi9kaWFuemFuLnBuZ1wiLFxuICAgIHBvcG92ZXJUaXRsZTpcbiAgICAgICcgPHNwYW4gc3R5bGU9XCJmb250LXNpemU6MC44cmVtO2ZvbnQtd2VpZ2h0OmJvbGQ7XCI+XHU5RjEzXHU1MkIxXHU1NDhDXHU4RDVFXHU4RDRGXHU2MjExPC9zcGFuPicsXG4gICAgcG9wb3ZlclVybDpcbiAgICAgIFwiL3FyY29kZS10aHVtYi5qcGdcIixcbiAgICBwb3BvdmVyRGVzYzpcbiAgICAgIFwiXHU2MTFGXHU4QzIyXHU2MEE4XHU3Njg0XHU2NTJGXHU2MzAxXHVGRjBDXHU0RjVDXHU4MDA1XHU1OTM0XHU1M0QxKytcIixcbiAgfSwqL1xuXTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBQTs7O0FDRUEsSUFBTyxpQkFBUTtBQUFBLEVBQ1gsRUFBRSxNQUFNLGdCQUFNLE1BQU07QUFBQSxFQUNwQixFQUFFLE1BQU0sUUFBTyxNQUFNO0FBQUEsRUFDckIsRUFBRSxNQUFNLFVBQVMsTUFBTTtBQUFBLEVBQ3ZCLEVBQUUsTUFBTSxzQkFBTSxNQUFNO0FBQUEsRUFDcEIsRUFBRSxNQUFNLGdCQUFLLE1BQU07QUFBQSxFQUNuQixFQUFFLE1BQU0sNEJBQU8sTUFBTTtBQUFBLEVBQ3JCLEVBQUUsTUFBTSw0QkFBTyxNQUFNO0FBQUEsRUFDckIsRUFBRSxNQUFNLDhDQUFVLE9BQU87QUFBQSxJQUNqQixFQUFFLE1BQU0sVUFBVSxNQUFNO0FBQUEsSUFDeEIsRUFBRSxNQUFNLGdCQUFNLE1BQU07QUFBQTtBQUFBOzs7QUNaaEMsSUFBTyx5QkFBUTtBQUFBLEVBQ2I7QUFBQSxFQUNBO0FBQUEsSUFDRSxPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsSUFDYixVQUFVO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBO0FBQUE7QUFBQTs7O0FDZk4sSUFBTyxzQkFBUTtBQUFBLEVBQ1g7QUFBQSxFQUNB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

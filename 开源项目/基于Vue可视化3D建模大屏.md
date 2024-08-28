# 基于Vue可视化3D建模大屏

源码获取请关注右侧微信公众号【<span style="font-weight: bold;text-align:left;font-size: 18px;color:#00bfff">程序猿代码之路</span>】后台回复【<span style="font-weight: bold;text-align:left;font-size: 18px;color:#00bfff">3D建模大屏</span>】即可获取！


## 一、项目介绍
![](https://cdn.nlark.com/yuque/0/2024/webp/12522758/1711368412311-6434ea7c-37be-4f53-8507-d3ef10f2f592.webp#averageHue=%230c2752&clientId=ufeda5b87-2bd6-4&from=paste&id=y0UPk&originHeight=543&originWidth=1080&originalType=url&ratio=1.25&rotation=0&showTitle=false&status=done&style=none&taskId=u8949f08d-79e2-4ecd-9550-0c861f29ee4&title=)
这是一个伪3d可视化图形的组件图，里面有着非常多种类的图形（仪表盘、金字塔动画、金字塔趋势、彩虹轨道图、环形饼图、环形气泡图、旋转多彩图、扫描半径图、滚动弧形线、新闻无缝滚动、水球图、水波图、酷屏首页统计图、3D立体柱状图、多彩雷达等等就不一一介绍啦），当然图形只是看起来像是3d+动态，不过也还是不错的啦（用来学习也是可以的）。另外，还有这炫酷的登录界面（如下）。
[炫酷的登录界面.mp4](https://www.yuque.com/attachments/yuque/0/2024/mp4/12522758/1711368542914-58fc2c35-fb96-4c17-bf72-d3d89a4b691b.mp4)
功能模块：登录界面抖动、粒子动效、背景图轮播、自定义全局模态框、自定义消息提示框、酷屏首页组件库、各种酷炫小部件、炫酷展示公司品牌
## **二、相关技术栈**
1. **Vue2.6**：Vue 是一个用于构建用户界面的渐进式框架。它易学易用，性能出色，适用场景丰富。
2. **ECharts4.7**：ECharts 是一个使用 JavaScript 实现的开源可视化库，它可以运行在浏览器和移动设备上，适用于数据的可视化需求。
3. **Axios**：Axios 是一个基于 Promise 的 HTTP 客户端，可以用于浏览器和 Node.js 环境，用于发送 AJAX 请求。
4. **Webpack**：Webpack 是一个模块打包工具，它可以将许多分散的模块按照一定的规则组织起来，生成优化后的静态资源。
5. **ES6**：ECMAScript 2015（简称 ES6）是 JavaScript 语言的下一代标准，包含了许多新的语言特性，如类、箭头函数、模块化等。
6. **SCSS**：SCSS（Sass）是一种 CSS 预处理器，提供了许多便利的写法来简化 CSS 的开发，如变量、嵌套、混合等。
7. **CSS3**：CSS3 是 CSS 的最新版本，增加了许多新的样式属性和效果，如圆角、阴影、动画等。
8. **jQuery**：jQuery 是一个快速、简洁的 JavaScript 库，简化了 HTML 文档遍历、事件处理、动画设计和 Ajax 交互等 Web 开发常见任务。
9. **Iconfont**：Iconfont 是阿里巴巴推出的一款图标库，提供丰富的矢量图标，支持在线调整图标样式，可以轻松地将图标引入到项目中。
## **三、运行步骤**
解压之后导入IDEA中。
![](https://cdn.nlark.com/yuque/0/2024/webp/12522758/1711368412265-a2ab6ccd-5900-474f-8691-83aa441fef55.webp#averageHue=%23edeef2&clientId=ufeda5b87-2bd6-4&from=paste&id=u0dd8a29c&originHeight=538&originWidth=1080&originalType=url&ratio=1.25&rotation=0&showTitle=false&status=done&style=none&taskId=u316a0517-f314-4233-a55b-4c1010c6407&title=)
打开终端输入以下代码（**注：最好按照Node版本为13的版本，不然可能会报错**）：
```
npm install
```
![](https://cdn.nlark.com/yuque/0/2024/webp/12522758/1711368412231-901d6e34-d667-42c3-8661-c0cc0e4e85dd.webp#averageHue=%23cce2d1&clientId=ufeda5b87-2bd6-4&from=paste&id=u0f47995a&originHeight=561&originWidth=1080&originalType=url&ratio=1.25&rotation=0&showTitle=false&status=done&style=none&taskId=u4a4e3c94-1b9e-4ccd-b85f-f36b734b1cc&title=)
再在终端输入以下命令启动运行即可
```
npm run serve
```
运行之后，访问地址：**http://localhost:8081**
## **四、项目演示**
![](https://cdn.nlark.com/yuque/0/2024/webp/12522758/1711368412326-ae56d84b-2ada-4c09-95ca-fa0cf22d1434.webp#averageHue=%230b2847&clientId=ufeda5b87-2bd6-4&from=paste&id=u15bd2684&originHeight=544&originWidth=1080&originalType=url&ratio=1.25&rotation=0&showTitle=false&status=done&style=none&taskId=u27a2efa5-2a0e-4ac4-9910-0d46912dac8&title=)
![](https://cdn.nlark.com/yuque/0/2024/webp/12522758/1711368412311-6434ea7c-37be-4f53-8507-d3ef10f2f592.webp#averageHue=%230c2752&clientId=ufeda5b87-2bd6-4&from=paste&id=ufe1c3f8e&originHeight=543&originWidth=1080&originalType=url&ratio=1.25&rotation=0&showTitle=false&status=done&style=none&taskId=u8949f08d-79e2-4ecd-9550-0c861f29ee4&title=)
![](https://cdn.nlark.com/yuque/0/2024/webp/12522758/1711368412309-98ae42e6-6e00-4ab4-8201-e386c133f497.webp#averageHue=%23072654&clientId=ufeda5b87-2bd6-4&from=paste&id=u16d530b6&originHeight=429&originWidth=1080&originalType=url&ratio=1.25&rotation=0&showTitle=false&status=done&style=none&taskId=uf16a90ed-2263-4e7e-85d8-e64397a16ca&title=)
![](https://cdn.nlark.com/yuque/0/2024/webp/12522758/1711368412655-ca223c12-6779-4df5-b7bc-165f28935bec.webp#averageHue=%23062653&clientId=ufeda5b87-2bd6-4&from=paste&id=u5a8140bf&originHeight=445&originWidth=1080&originalType=url&ratio=1.25&rotation=0&showTitle=false&status=done&style=none&taskId=uf9952b15-0388-4a9e-909c-640bff6b435&title=)
![](https://cdn.nlark.com/yuque/0/2024/webp/12522758/1711368412630-3b87e5a2-92fa-4c6e-97ea-d312b19b6eef.webp#averageHue=%23092c5b&clientId=ufeda5b87-2bd6-4&from=paste&id=u747b2a10&originHeight=451&originWidth=1080&originalType=url&ratio=1.25&rotation=0&showTitle=false&status=done&style=none&taskId=u1c7335be-de45-4156-80c2-d66dc49920a&title=)
以上所有的图形都是动态的，图片可能看得不是很详细，大家可以访问如下地址查看：
**https://jackchen0120.github.io/vueDataV**
源码大家可以关注我，回复【**3D建模大屏**】获取源码或者去gitee或者github上面自行下载即可！
## **五、总结**
本次分享的这个项目更多的亮点可能就是动态的可视化图形，对于3d来说可能还是处于伪3d的情况，如若大家想了解更多关于3d可视化方面的内容，可以关注我，后续会持续更新3d可视化相关知识和分享一些项目。

 

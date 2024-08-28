# Flask通用的可视化大屏

源码获取请关注右侧微信公众号【<span style="font-weight: bold;text-align:left;font-size: 18px;color:#00bfff">程序猿代码之路</span>】后台回复【<span style="font-weight: bold;text-align:left;font-size: 18px;color:#00bfff">可视化大屏通用模板</span>】即可获取！

## 一、项目介绍

![](https://cdn.nlark.com/yuque/0/2024/webp/12522758/1711368006384-a69668e8-f73c-4241-ab40-6a5369a06580.webp#averageHue=%23142872&clientId=u30f853de-5f1f-4&from=paste&id=ElnME&originHeight=580&originWidth=1080&originalType=url&ratio=1.25&rotation=0&showTitle=false&status=done&style=none&taskId=u9ed327b1-e1d9-45d1-879c-c58806e4bb3&title=)

一个精心构建的**通用可视化大屏模板**，旨在为用户提供极致的便利性和高效的使用体验。这个模板以其简洁而直观的结构设计脱颖而出，它不仅能够快速适配不同的数据类型和展示需求，而且用户友好性极高，即便是**非技术人员也能轻松上手**。为了实现即插即用的便捷性，该模板采用了模块化设计理念，将复杂的数据处理、图表生成和动态效果等技术难点封装在后台，用户**无需编写任何代码**，**只需通过简单操作上传或输入自己的数据**，即可**自动映射**到大屏上，以丰富的图形和动态效果进行展示。

对于从事数据领域的小伙伴来说，当需要阐述自己观点、展示项目成果时，我们需要在最短时间内让别人知道你的想法。我相信单调乏味的语言很难让别人快速理解。最直接有效的方式就是将数据写入进行可视化展现。数据完全可以自己按照规定的格式准备即可，数据来源可以是自己爬取的，也可以是手工输入的，反正一个大屏对应必须准备一个json数据。

## **二、相关技术栈**

1. **Flask**：Flask是一个轻量级的Python Web框架，以简单、灵活和可扩展著称。它适用于快速开发中小型网站或服务，支持MVC模式，易于分工合作。用户可以根据需求定制功能，利用丰富的插件库来扩展应用。
2. **ECharts**：ECharts 是一个使用 JavaScript 实现的开源可视化库，它可以运行在浏览器和移动设备上，适用于数据的可视化需求。
3. **jQuery**：jQuery 是一个快速、简洁的 JavaScript 库，简化了 HTML 文档遍历、事件处理、动画设计和 Ajax 交互等 Web 开发常见任务。

## **三、运行步骤**

解压之后导入Pycharm中，如下。

![](https://cdn.nlark.com/yuque/0/2024/webp/12522758/1711368005890-d3164c5c-59bb-479c-b27e-555c66fd91ae.webp#averageHue=%23fafaf9&clientId=u30f853de-5f1f-4&from=paste&id=u30179b79&originHeight=458&originWidth=1080&originalType=url&ratio=1.25&rotation=0&showTitle=false&status=done&style=none&taskId=ua87bd96e-ae08-4084-b369-d52d3dd6c93&title=)

打开终端输入以下代码进行安装flask：
```
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple flask
```

![](https://cdn.nlark.com/yuque/0/2024/webp/12522758/1711368005922-aa98fade-cd40-4476-a543-97866d9b5464.webp#averageHue=%23faf9f9&clientId=u30f853de-5f1f-4&from=paste&id=ud14613fe&originHeight=551&originWidth=1080&originalType=url&ratio=1.25&rotation=0&showTitle=false&status=done&style=none&taskId=ub29f26fb-087a-4c91-b6a8-6b22ccb75ce&title=)

再在终端输入以下命令启动运行即可

```
python app.py
```

运行成功之后，访问如下地址

- 大数据可视化展板通用模板 **http://127.0.0.1:5000/**
- 企业数据大屏可视化 **http://127.0.0.1:5000/corp**
- 招聘数据大屏可视化 **http://127.0.0.1:5000/job**

## **四、如何将自己的数据进行展示**

其数据的展示原理主要是将其目录下的json文件中的数据进行展示出来，数据格式都是规定好了的，大家只要照着填就行了。如下图两个json文件一样，分别是招聘数据和企业数据。

![](https://cdn.nlark.com/yuque/0/2024/webp/12522758/1711368005898-75951d70-b5d4-439c-ade0-519172df1026.webp#averageHue=%23f9f8f8&clientId=u30f853de-5f1f-4&from=paste&id=uf3fec3b8&originHeight=295&originWidth=1080&originalType=url&ratio=1.25&rotation=0&showTitle=false&status=done&style=none&taskId=ue46ac6e7-f254-4527-ad43-6bef9da2b65&title=)

若想要将自己的数据展示出来同样可以参考这两个文件即可。（以下只是格式化之后仅展示一般分）

![](https://cdn.nlark.com/yuque/0/2024/webp/12522758/1711368005883-133c92a9-4bc9-43ea-b7d6-a60ee1aa7bf9.webp#averageHue=%23fdfdfd&clientId=u30f853de-5f1f-4&from=paste&id=u738907e3&originHeight=504&originWidth=1080&originalType=url&ratio=1.25&rotation=0&showTitle=false&status=done&style=none&taskId=ud58bc9e3-9d4e-422e-a7ad-f0bd8653cb8&title=)

然后在app.py文件中新增一个路由即可。

![](https://cdn.nlark.com/yuque/0/2024/webp/12522758/1711368005858-3b5fb558-6aa9-4dbd-9da6-0527c1ce1c5c.webp#averageHue=%23faf9f8&clientId=u30f853de-5f1f-4&from=paste&id=ua21cf3cd&originHeight=572&originWidth=1080&originalType=url&ratio=1.25&rotation=0&showTitle=false&status=done&style=none&taskId=uaf698a40-7ad0-40d8-98df-a89e066bfdb&title=)

然后在data.py文件中新增获取数据的class即可，如下图所示。

![](https://cdn.nlark.com/yuque/0/2024/webp/12522758/1711368006431-8fbaf3a3-dcd0-434d-86fc-0b1002bdb99e.webp#averageHue=%23f9f7f6&clientId=u30f853de-5f1f-4&from=paste&id=u8fd4ac68&originHeight=397&originWidth=1080&originalType=url&ratio=1.25&rotation=0&showTitle=false&status=done&style=none&taskId=u0107fa32-fcd7-4bbd-8af8-4175422a40a&title=)

当然，如果不想写代码则直接原数据文件中改数据同样可以，这样就不用写代码了

## **五、项目演示**

- 大数据可视化展板通用模板 **http://127.0.0.1:5000/**

![](https://cdn.nlark.com/yuque/0/2024/webp/12522758/1711368006384-a69668e8-f73c-4241-ab40-6a5369a06580.webp#averageHue=%23142872&clientId=u30f853de-5f1f-4&from=paste&id=uce63081a&originHeight=580&originWidth=1080&originalType=url&ratio=1.25&rotation=0&showTitle=false&status=done&style=none&taskId=u9ed327b1-e1d9-45d1-879c-c58806e4bb3&title=)

- 企业数据大屏可视化 **http://127.0.0.1:5000/corp**

![](https://cdn.nlark.com/yuque/0/2024/webp/12522758/1711368006366-33112d7f-0a98-433e-a2d3-d0274dc9d638.webp#averageHue=%23132671&clientId=u30f853de-5f1f-4&from=paste&id=ud10dead8&originHeight=577&originWidth=1080&originalType=url&ratio=1.25&rotation=0&showTitle=false&status=done&style=none&taskId=u3e73bea5-6b8a-4764-b71d-c8d4b80a3ad&title=)

- 招聘数据大屏可视化 **http://127.0.0.1:5000/job**

![](https://cdn.nlark.com/yuque/0/2024/webp/12522758/1711368006378-894c1e9a-8d18-483b-9f89-87fe27dbcafa.webp#averageHue=%23142771&clientId=u30f853de-5f1f-4&from=paste&id=u726f1eb8&originHeight=581&originWidth=1080&originalType=url&ratio=1.25&rotation=0&showTitle=false&status=done&style=none&taskId=u5c20299f-9fff-45d3-ba80-8f60a045e25&title=)

源码大家可以关注我，回复【**可视化大屏通用模板**】即可获取源码或者去gitee或者github上面自行下载即可！

## **六、总结**

本次分享的这个项目更多的亮点可能就是能够通用进行可视化大屏的展示，不过样式过于单一，但是对于一些只是想要汇报工作并且将数据展示出来的人来说是可以进行满足要求了的。同样也非常适用于初学者，对于想要学习可视化大屏的初学者来说这个项目完全可以下载学习的。如若大家想了解更多关于可视化大屏方面的内容，可以关注我，后续会持续更新可视化大屏相关知识和分享一些项目。

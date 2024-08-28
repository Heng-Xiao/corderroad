---
tags:
- SpringBoot
- Java
- Swagger
---


# SpringBoot在线商城系统

源码获取请关注右侧微信公众号【<span style="font-weight: bold;text-align:left;font-size: 18px;color:#00bfff">程序猿代码之路</span>】后台回复【<span style="font-weight: bold;text-align:left;font-size: 18px;color:#00bfff">商城boot</span>】即可获取！


>💡 大家好，这里是**程序猿代码之路**！
> 
><strong>💐背景 : </strong>随着电子商务的蓬勃发展，线上购物已成为现代生活的一部分。为了提供一个高效、便捷、多功能的购物体验，今天给大家介绍一个**基于Spring Boot的商城系统**。该系统不仅支持基本的浏览、购物、支付流程，还集成了Word和Excel模板操作、邮件通知、Swagger接口预览以及货物自提功能。这些功能的整合，旨在打造一个全面、便捷的购物平台。

## 一、项目介绍

在当今数字化、网络化的时代背景下，电子商务已经成为现代商业的重要组成部分。消费者越来越倾向于通过在线平台进行购物，以节省时间并享受更多的便利性。为此，今天给大家介绍一个基于**Spring Boot的商城系统**，旨在为用户提供一个功能丰富、操作便捷、安全可靠的购物环境。

该系统涵盖了从商品浏览到下单支付，再到订单管理的全流程电商服务，并提供了Word和Excel模板操作、邮件通知、Swagger接口预览以及货物自提等附加功能，以满足不同用户的需求。

### 前台功能

- **首页展示**：展示商城的轮播图、热门商品推荐、促销活动等，吸引用户眼球。
- **商品浏览**：用户可以查看商品的详细信息，包括价格、规格、库存、用户评价等。
- **搜索与筛选**：提供搜索框，支持关键词搜索，同时可对商品进行分类筛选。
- **购物车管理**：用户可以将商品添加至购物车，修改商品数量，或移除商品。
- **订单处理**：用户填写收货信息，选择支付方式，并在支付后追踪订单状态。

### 后台功能

- **登录认证**：管理员通过专属入口登录后台管理系统。
- **仪表盘**：展示销售概览、热门商品、新注册用户等关键信息。
- **商品管理**：添加、编辑或删除商品信息，包括价格、库存、描述等。
- **订单管理**：查看所有订单状态，处理发货、退款等操作。

当然，以上只是写了少部分，还有更多功能等待你的挖掘！！

## 二、项目技术栈

- **前端**：使用HTML5、CSS3和JavaScript构建用户界面，利用Vue.js框架实现响应式交互。
- **后端**：以Spring Boot作为基础框架，利用其自动配置、内嵌Web服务器等特性简化开发。
- **数据库**：选择MySQL作为存储介质，通过MyBatis进行数据持久化操作。
- **其他技术**：集成Apache POI处理Excel文件、JavaMail实现邮件发送、Swagger2提供API文档。

## 三、项目运行步骤

拿到资料解压后得到如下源码，因为这个项目ssm框架和springboot框架的源码都有的，但是在这我就按照springboot框架的来演示了，对ssm框架有兴趣的也可以自己去试试看！

![](https://files.mdnice.com/user/64619/342cd344-5841-465f-894b-dec21de37b09.png)

在数据库中新建`db_shopmaster`数据库，然后导入`db_springbootshopmaster.sql`文件。得到如下表：

![](https://files.mdnice.com/user/64619/693efbe4-f467-4639-9b09-987167082eb6.png)

将`SpringbootSchoolShop`文件夹导入`Idea`中如下：

![](https://files.mdnice.com/user/64619/99827540-31bb-4eb7-b457-5783b3975e99.png)

打开`src/main/resources/application.yml`文件修改数据库配置相关：

![](https://files.mdnice.com/user/64619/3d8077fa-1563-4c94-ab0d-fc4332dc0370.png)

接下来咱们进入设置`settings`配置`maven`。如下

![](https://files.mdnice.com/user/64619/ca6a3c89-709b-4ccc-b730-e2a9a75037be.png)

配置好了大家可以重新刷新一下maven即可,然后等待加载即可，如下所示：

![](https://files.mdnice.com/user/64619/d0db2256-cb36-400c-ae02-c96547e9474f.png)

接下来启动项目即可

![](https://files.mdnice.com/user/64619/8c22abfd-33fd-422a-828a-06c7f5106d89.png)

如下，启动成功！无报错！


![](https://files.mdnice.com/user/64619/b2d1bbd0-b30d-4544-a0b8-deb0126a4700.png)


1. API接口访问
   **http://127.0.0.1:8081/shop/swagger-ui.html**

2. 管理员访问
   **http://127.0.0.1:8081/shop/admin/login**

3. 普通用户访问
   **http://127.0.0.1:8081/shop/**

- 管理员帐号/密码：  **admin** / **12345678**

- 用户帐号   **root codingzx  admin**  密码均为  **12345678**

- 图片保存路径：  可以全局搜索后替换
    - windows:  D:/upload
    - linux:  /usr/upload
    - mac：需要修改代码，见下面已知问题记录. 或者代码全局搜索

## 四、项目演示

### 前台演示


![](https://files.mdnice.com/user/64619/83ef616f-a316-45e5-b7d6-dd1fcf7641f6.jpg)


![](https://files.mdnice.com/user/64619/0c397ff1-660f-4ab3-b2dd-4f2774beee14.jpg)


![](https://files.mdnice.com/user/64619/f0189325-0503-4563-aec6-f45dc25d73b3.jpg)


![](https://files.mdnice.com/user/64619/9d1ed93b-cc12-4050-89a5-c63de436574c.jpg)


![](https://files.mdnice.com/user/64619/4fa32538-f842-4e5e-b6ba-50ac9a1e8e23.jpg)


![](https://files.mdnice.com/user/64619/20e188e1-0c8a-4944-8b2e-ba26e113ad78.jpg)

![](https://files.mdnice.com/user/64619/4b37d1d9-ac15-4d59-93ee-378dda6db5c8.jpg)

![](https://files.mdnice.com/user/64619/ced54df8-1f30-4885-8eee-dd86c404b031.jpg)



### 后台演示


![](https://files.mdnice.com/user/64619/0475ad08-8e26-4f60-8e0e-a9469ba3f7b9.jpg)


![](https://files.mdnice.com/user/64619/8291acba-19b6-4f14-abf4-9f0d2e224ab9.jpg)

![](https://files.mdnice.com/user/64619/c8126ce4-8685-4447-9879-712599cda5ad.jpg)

![](https://files.mdnice.com/user/64619/b467487b-e317-41eb-abcd-7621119b52ca.jpg)

![](https://files.mdnice.com/user/64619/f454ef4e-e218-4c49-9516-d9c178303fe1.jpg)

![](https://files.mdnice.com/user/64619/7e088d7a-3d4e-48f1-a57b-8bc4dc65ec35.jpg)

![](https://files.mdnice.com/user/64619/c57c7c3c-82dd-479f-9241-d42e6bd86291.jpg)

其它的就不展示了，大家有兴趣的话可以自己去下载源码来运行看看。源码获取请关注公众号并后台回复【**商城boot**】即可获取！
## 总结

**基于Spring Boot的商城系统**，不仅提供了丰富的功能，如模板操作、邮件通知、Swagger接口预览和货物自提，还注重系统的安全性和性能。通过整合当下流行的技术，该系统为商家和顾客提供了一个稳定、高效、易用的电子商务平台。

如若大家想了解更多相关知识，请**关注我**，一名有故事的程序猿！！创作不易，都是自己一步一步去找并且总结的项目，麻烦大家给个**关注**和**赞**，最后感谢您的阅读，希望本文对您有所帮助！如有任何疑问或建议，请随时**留言交流**。

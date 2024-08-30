---
tags:
  - SpringBoot
  - Redis
  - Vue
  - 前后端分离
  - MySQL
---



# SpringBoot竞赛报名系统

源码获取请关注右侧微信公众号【<span style="font-weight: bold;text-align:left;font-size: 18px;color:#00bfff">程序猿代码之路</span>】

关注之后点击如下图【<span style="font-weight: bold;text-align:left;font-size: 18px;color:#00bfff">全部资料</span>】中可进入小程序中点击**开源项目**—>**Java**中编号【**24-SpringBoot竞赛报名系统**】长按即可复制链接获取。还有更多项目源码等待你的发现！！

<p align = "center">    
<img  src="https://files.mdnice.com/user/64619/fc3a72d4-6b57-4886-9085-1f216b3dd7d0.png" width="500" />
</p>





>🔥大家好，这里是**程序猿代码之路**！
> 
><strong>💐背景 : </strong>在现代教育和技术竞赛中，一个高效、稳定的报名系统对于赛事的组织和管理至关重要。
> 
><strong>🤟简介 : </strong>今天就给大家介绍基于**SpringBoot**、**Vue**、**MySQL**和**Redis**等技术栈开发的一个竞赛报名系统。**源码获取附后**。

## 一、项目简介

**竞赛报名系统**旨在为各类赛事提供一个在线报名、信息管理、数据统计的平台。通过这个系统，参赛者可以轻松报名，而主办方可以高效地管理赛事信息和参赛者数据。系统分为**用户**和**管理员**两个角色。系统的特点如下：

- **用户友好**：界面简洁，操作直观，便于用户快速上手。
- **数据安全**：采用现代的数据保护技术，确保用户数据的隐私和安全。
- **高并发处理**：利用Redis缓存技术，支持高并发场景下的快速响应。

## 二、技术选型

- **前端**：Vue.js + Element UI，提供响应式界面和良好的用户体验。
- **后端**：SpringBoot，简化配置，提高开发效率。
- **数据库**：MySQL + Redis，MySQL用于持久化存储，Redis用于缓存和短时数据存储

## 三、运行步骤

`本项目运行前提，后端安装所需基础环境和工具比如：jdk、Idea、Maven、MySQL、Redis等等。并且由于本项目是前后端分离的，前端使用Vue，大家还需安装前端的基础环境：如Node、npm等等。大家可先行检查是否全部安装完毕再进行运行！`

好了，话不多说，直接上运行步骤！

大家拿到源码之后是这样的！


![](https://files.mdnice.com/user/64619/8fb42251-ad60-40d6-b9bf-0866ce698844.png)


### 1. 后端启动

接下来教大家如何启动后端代码，启动之前需要将数据导入到数据库中。在数据库中新建`db_competitionapply`数据库，然后导入后端代码`competition_apply_system-master`文件夹下的`competition.sql`文件。得到如下表：

![](https://files.mdnice.com/user/64619/10daa045-6aa8-4328-bca8-e84ee9f702b2.png)



接下来就是将后端代码文件夹`competition_apply_system-master`导入`Idea`中如下：


![](https://files.mdnice.com/user/64619/ad40b7ff-43b0-412b-9b63-9d2e205da17f.png)


打开`src/main/resources/application.properties`文件修改`mysql`和`redis`数据库配置相关：


![](https://files.mdnice.com/user/64619/e645f43a-1970-424f-8647-eda50bfa3648.png)


![](https://files.mdnice.com/user/64619/7c6f5209-101b-4d65-9634-356295d2cdb3.png)


接下来咱们进入设置`settings`配置`maven`。如下

![](https://files.mdnice.com/user/64619/ca6a3c89-709b-4ccc-b730-e2a9a75037be.png)

配置好了大家可以重新刷新一下maven即可,然后等待加载即可，如下所示：


![](https://files.mdnice.com/user/64619/a63ce889-48f1-40fc-87a7-2a377ab61cdd.png)



接下来启动`redis`


![](https://files.mdnice.com/user/64619/3f52d56e-9424-410b-9498-8b757dfc152e.png)



`redis`启动成功，然后启动后端项目即可


![](https://files.mdnice.com/user/64619/d3264e32-5037-4f6f-b878-26cbb5607aef.png)


如下，启动成功！无报错！


![](https://files.mdnice.com/user/64619/3a313732-7959-49d5-8861-0927b6e92826.png)



### 2. 前端启动

接下来启动前端项目，将前端文件夹`competitionapply-web-master`用`Idea`打开如下所示：


![](https://files.mdnice.com/user/64619/6bc8ba94-eecd-4643-a3b1-27172e80a2d1.png)


然后打开终端输入如下代码安装依赖：

```
npm install
```


![](https://files.mdnice.com/user/64619/46ef23b1-4e24-40af-908c-6aafce1af245.png)


然后运行如下代码进行启动前端项目
```
npm run serve
```




![](https://files.mdnice.com/user/64619/215db2e1-d26c-4dd7-829f-1095614a6140.jpg)

哦嚯，报错了，还让不让人运行了啊！


![](https://files.mdnice.com/user/64619/5f6ef73b-2526-4f64-a687-180f11ac9c7d.png)

这个报错要解决非常简单，你只需要`package.json`文件中`serve`添加`set NODE_OPTIONS=--openssl-legacy-provider && `如下所示


![](https://files.mdnice.com/user/64619/4e8228d5-1e38-4ea8-a195-d334fe671ff0.png)


接下来重新运行`npm run serve`命令启动即可，如下所示，启动成功。



![](https://files.mdnice.com/user/64619/5c19dc77-5e7c-49a1-a947-4430f15ddf40.png)

- 项目地址：

[http://localhost:8080/](http://localhost:8080/)

- 用户密码

`所有用户密码加密方式见realm包下UserRealm.java的func()方法，将用户名和密码放入，生成加密密码修改数据库的密码即可`

## 四、项目演示

### 登录页


![](https://files.mdnice.com/user/64619/21c91813-e755-4973-80fb-5daf69e787d5.png)


### 管理员登录


![](https://files.mdnice.com/user/64619/94e4fd65-aa10-43b1-98a9-c3cec781d927.png)


![](https://files.mdnice.com/user/64619/2d8ee8c4-9d31-4fcb-af9a-549481e504ed.png)


![](https://files.mdnice.com/user/64619/e54e7be2-ffa8-47b0-8f30-b257d6d022ee.png)


![](https://files.mdnice.com/user/64619/bf7982c3-5b9f-4feb-aadf-657ffce77c4b.png)


![](https://files.mdnice.com/user/64619/a931b091-50fc-444f-8e6b-ae9bccf33ce9.png)


![](https://files.mdnice.com/user/64619/7e1d5903-9dfc-4c0d-b4b6-ce37f17678d9.png)


### 学生登录


![](https://files.mdnice.com/user/64619/bce628d2-b95d-43cd-bf03-ea5ea59bae64.png)

![](https://files.mdnice.com/user/64619/a6d05ec8-76f3-459b-9962-354661c323b6.png)

![](https://files.mdnice.com/user/64619/93821af0-524f-4741-91a5-aedbd0d1be3f.png)

![](https://files.mdnice.com/user/64619/ee4fea27-f917-4e49-903c-4fc082ac96ac.png)

![](https://files.mdnice.com/user/64619/cef05343-489d-40e5-9f0e-e193b843ccab.png)

![](https://files.mdnice.com/user/64619/a4ab1612-d100-4910-b8a5-6601d7131784.png)


### 源码获取方式

其它的就不展示了，大家有兴趣的话可以自己去下载源码来运行看看。

![](https://files.mdnice.com/user/64619/fc3a72d4-6b57-4886-9085-1f216b3dd7d0.png)

关注公众号之后点击**全部资料**可进入小程序中点击**开源项目**—>**Java**中编号【**24-SpringBoot竞赛报名系统**】长按即可复制链接获取。还有更多项目源码等待你的发现！！


## 总结

**竞赛报名系统**的开发是一个综合性强、涉及面广的项目。通过SpringBoot、Vue、MySQL和Redis技术栈的结合，我们构建了一个功能全面、用户友好的系统。


如若大家想了解更多相关知识，请**关注我**，一名有故事的程序猿！！创作不易，都是自己一步一步去找并且总结的项目，麻烦大家给个**关注**和**赞**，最后感谢您的阅读，希望本文对您有所帮助！如有任何疑问或建议，请随时**留言交流**。

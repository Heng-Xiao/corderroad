---
tags:
  - SpringBoot
  - Java
  - Thymeleaf
  - MyBatis
---



# SpringBoot在线考试系统非前后端分离

源码获取请关注右侧微信公众号【<span style="font-weight: bold;text-align:left;font-size: 18px;color:#00bfff">程序猿代码之路</span>】

关注之后点击如下图【<span style="font-weight: bold;text-align:left;font-size: 18px;color:#00bfff">全部资料</span>】中可进入小程序中点击**开源项目**—>**Java**中编号【**26-SpringBoot在线考试系统**】长按即可复制链接获取。还有更多项目源码等待你的发现！！

<p align = "center">    
<img  src="https://files.mdnice.com/user/64619/fc3a72d4-6b57-4886-9085-1f216b3dd7d0.png" width="500" />
</p>





>🔥大家好，这里是**程序猿代码之路**！
> 
><strong>💐背景 : </strong>在数字化时代，教育行业也在不断地探索如何利用技术来提高教学质量和效率。
> 
><strong>🤟简介 : </strong>在线考试系统作为这一努力的一部分，为学生提供了一个灵活、便捷的考试平台。今天就给大家介绍一款**基于SpringBoot的在线考试系统**。

## 一、系统概要

**在线考试系统**旨在为学生提供一个在线考试的平台，学生可以在这里进行网上在线考试，浏览题库中心下的各个课程的题库，并在讨论区发表自己的想法，参与留言评论。

## 二、功能实现

### 1. 在线考试模块

- **考试倒计时**：确保考试的公平性，提醒考生注意时间。
- **考试安排表**：展示所有考试的时间表，方便考生安排复习。
- **答题卡**：清晰展示考试题目，方便考生作答。
- **作答区**：提供答题界面，支持多种题型作答。
- **成绩查询**：考生可以查看自己的考试成绩和参考答案。

### 2. 题库系统模块

- **课程分类**：便于考生根据课程筛选题目。
- **题目列表**：展示各个课程的题目，包括题目难度。
- **题目详情**：提供题目描述、参考答案等信息。
- **题目标签**：方便考生根据知识点筛选题目。
- **在线编程**：支持在线编程题目的提交和评判。

### 3. 论坛系统模块

- **帖子发布**：用户可以发布帖子，分享知识或提问。
- **回帖评论**：用户可以回复帖子，进行互动交流。
- **浏览帖子**：用户可以浏览帖子，获取信息。
- **传送门窗口**：快速导航到相关帖子或页面。
- **点赞统计**：对帖子的受欢迎程度进行统计。
- **帖子管理**：允许用户编辑或删除自己的帖子。

### 4. 个人中心模块

- **信息更新**：用户可以更新个人信息，上传头像。
- **考试记录**：记录用户的考试历史，便于回顾。
- **发帖记录**：展示用户发表过的帖子，方便管理。
- **考试统计分析**：对用户的考试情况进行统计分析。

### 5. 后台管理模块

- **用户管理**：管理系统用户，包括学生和教师。
- **考试管理**：创建、修改和删除考试信息。
- **题目管理**：管理题库中的题目，包括题目的添加、修改和删除。
- **课程管理**：管理课程信息，与题库关联。
- **成绩管理**：管理考生的成绩，支持数据导出。
- **帖子管理**：监督论坛帖子，确保内容健康。
- **评论管理**：管理用户评论，维护论坛秩序。

## 三、技术选型

### 后台技术选型

- **SpringBoot**：整合了Spring和SpringMVC，简化配置，提高开发效率。
- **MyBatis**：作为数据访问层框架，提供灵活的数据操作。
- **Thymeleaf**：作为模板引擎，实现前端页面的动态渲染。

### 前端技术选型

- **Semantic UI**：提供语义化的前端框架，使页面更加清晰和响应式。
- **Bootstrap**：加快前端开发速度，适应多种设备屏幕。
- **jQuery**：简化JavaScript操作，实现动态交互效果。


## 四、运行步骤

`本项目运行前提，后端安装所需基础环境和工具比如：jdk、Idea、Maven、MySQL、Redis等等。大家可先行检查是否全部安装完毕再进行运行！`

好了，话不多说，直接上运行步骤！

大家拿到源码之后是这样的！


![](https://files.mdnice.com/user/72278/2bc82a5f-2a26-41cb-9be3-f864b0ae1855.png)


### 1. 项目启动

接下来教大家如何启动后端代码，启动之前需要将数据导入到数据库中。在数据库中新建`db_qexz_penguin`数据库，然后导入数据库文件`db_qexz_penguin`文件。得到如下表：



![](https://files.mdnice.com/user/72278/93c922ca-6d7b-4212-a047-6b2bc33e36a6.png)




接下来就是将文件夹`springboot-penguin-master`导入`Idea`中如下：




![](https://files.mdnice.com/user/72278/51b6b414-e5b3-4336-91ac-46ec0e3fdedc.png)




打开`src/main/resources/application-dev.properties`文件修改`mysql`数据库配置相关：


![](https://files.mdnice.com/user/72278/493535cc-b361-45d9-bc84-e704032a9522.png)


打开`src/main/resources/application.properties`文件将环境指向`dev`环境，添加如下`spring.profiles.active=dev`：


![](https://files.mdnice.com/user/72278/1ebab9ea-f8be-4d85-bd04-8c2d26faed84.png)



打开`src/main/java/com/qexz/common/QexzConst.java`文件将资源映射到自己的资源路径,不然会找不到一些图片资源。

![](https://files.mdnice.com/user/72278/5d1dc646-6c01-4014-9552-ba71cf1df8a8.png)

接下来启动`Redis`，`Redis`的安装包同样已经放在里面啦！！


![](https://files.mdnice.com/user/72278/2d392e88-62e2-4e5f-9009-de7d6e1fdd81.png)


启动 `Redis` 成功 ！

![](https://files.mdnice.com/user/72278/c6d4256f-5614-4ffa-8be5-841f3bb949e6.png)






接下来咱们进入设置`settings`配置`maven`。如下

![](https://files.mdnice.com/user/64619/ca6a3c89-709b-4ccc-b730-e2a9a75037be.png)

配置好了大家可以重新刷新一下maven即可,然后等待加载即可，如下所示：



![](https://files.mdnice.com/user/72278/3883e136-a1b8-4133-97ea-1e3afa5999ff.png)




然后启动项目即可


![](https://files.mdnice.com/user/72278/a7e195ff-8bb5-425b-bc54-ff4d2176a3af.png)






如下，启动成功！无报错！



![](https://files.mdnice.com/user/72278/435d21e4-14c3-4b3b-9f35-c2b675d44b7c.png)





- 前台项目地址：

[http://127.0.0.1:8080/](http://127.0.0.1:8080/)

- 后台管理地址：

[http://127.0.0.1:8080/manage/login](http://127.0.0.1:8080/manage/login)

- 管理员用户密码

**admin / 123456**

- 普通用户密码

**14251104201 / 123456**


## 五、项目演示

### 前台页面

![](https://files.mdnice.com/user/72278/e31f7e48-63bd-45b0-9644-a5e8465ec86f.jpg)

![](https://files.mdnice.com/user/72278/86dc6eab-2580-4da4-88f8-ca0e65975ca0.png)

![](https://files.mdnice.com/user/72278/bf65cf2a-86ee-481d-a144-2eefa79dfe04.png)

![](https://files.mdnice.com/user/72278/1bd76b66-f8e7-496d-adcc-3d90e6ba82aa.png)

![](https://files.mdnice.com/user/72278/dfb11809-58dc-45a4-a273-7efcfe0049a5.png)

### 后台管理页面

![](https://files.mdnice.com/user/72278/db4c29ec-a783-46fd-96d0-4d0226e56472.png)

![](https://files.mdnice.com/user/72278/a389fcad-e644-496f-8514-aa10f14a2da0.png)

![](https://files.mdnice.com/user/72278/4bd451c4-c017-4603-bf3c-88279b3c2d07.png)

![](https://files.mdnice.com/user/72278/e805531e-b9b1-45c2-8f0a-ddaf3c0aac36.png)

![](https://files.mdnice.com/user/72278/3fd8a2e9-ab2d-4e87-9290-31816b78ac55.png)

![](https://files.mdnice.com/user/72278/40146ae1-7f40-434a-b2db-97196fb691ee.png)

![](https://files.mdnice.com/user/72278/b64d92ce-7883-4b46-936e-12b37db16db6.png)


![](https://files.mdnice.com/user/72278/f863cc51-23de-4664-8f31-e6fa3b0b64aa.png)

### 源码获取方式

其它的就不展示了，大家有兴趣的话可以自己去下载源码来运行看看。

![](https://files.mdnice.com/user/64619/fc3a72d4-6b57-4886-9085-1f216b3dd7d0.png)

关注公众号之后点击**全部资料**可进入小程序中点击**开源项目**—>**Java**中编号【**26-SpringBoot在线考试系统**】长按即可复制链接获取。还有更多项目源码等待你的发现！！




## 六、总结与展望

开发一个功能完善的**在线考试系统**是一个复杂但充满挑战的任务。随着技术的不断进步，我们相信在线考试系统将在提升教育质量和效率方面发挥更大的作用。


如若大家想了解更多相关知识，请**关注我**，一名有故事的程序猿！！创作不易，都是自己一步一步去找并且总结的项目，麻烦大家给个**关注**和**赞**，最后感谢您的阅读，希望本文对您有所帮助！如有任何疑问或建议，请随时**留言交流**。


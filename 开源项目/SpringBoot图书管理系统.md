---
tags:
  - SpringBoot
  - Java
  - Vue
  - 前后端分离
  - Redis
---



# SpringBoot图书管理系统

源码获取请关注右侧微信公众号【<span style="font-weight: bold;text-align:left;font-size: 18px;color:#00bfff">程序猿代码之路</span>】

关注之后点击如下图【<span style="font-weight: bold;text-align:left;font-size: 18px;color:#00bfff">全部资料</span>】中可进入小程序中点击**开源项目**—>**Java**中编号【**27-SpringBoot图书管理系统**】长按即可复制链接获取。还有更多项目源码等待你的发现！！

<p align = "center">    
<img  src="https://files.mdnice.com/user/64619/fc3a72d4-6b57-4886-9085-1f216b3dd7d0.png" width="500" />
</p>





>🔥大家好，这里是**程序猿代码之路**！
> 
><strong>💐背景 : </strong>随着信息技术的不断发展，图书馆的管理方式也在逐渐现代化。
> 
><strong>🤟简介 : </strong>为了提高图书管理的效率和用户体验，本次就给大家介绍一款**SpringBoot**、**Vue**和**Redis**技术栈开发的**图书管理系统**。

## 一、项目介绍

**图书管理系统**旨在为图书馆提供一个高效、便捷的管理平台，包括图书信息管理、图书类型管理、图书借阅管理和用户管理等功能。分为**用户**和**管理员**两个角色登录！

### 1. 图书信息管理

- **图书录入**：管理员可以录入新图书的信息，如书名、作者、ISBN等。
- **图书编辑**：对已有图书的信息进行修改。
- **图书查询**：根据条件搜索图书，如书名、作者等。
- **图书删除**：从系统中删除图书记录。

### 2. 图书类型管理

- **类型添加**：添加新的图书分类。
- **类型编辑**：修改图书分类的名称。
- **类型查询**：查看所有图书分类。
- **类型删除**：删除图书分类。

### 3. 图书借阅管理

- **借书操作**：用户选择图书进行借阅。
- **还书操作**：用户归还图书。
- **借阅记录**：查看用户的借阅历史。
- **逾期处理**：对逾期未还的图书进行处理。

### 4. 用户管理

- **用户注册**：新用户注册账号。
- **用户登录**：用户登录系统。
- **信息修改**：用户可以修改个人信息。
- **借阅权限**：根据用户类型限制借阅权限。

## 二、技术选型

### 后端技术选型

- **SpringBoot**：简化配置，提高开发效率，作为后端框架。
- **MyBatis**：作为数据访问层框架，实现数据持久化。
- **Redis**：用于缓存数据，提高系统性能。

### 前端技术选型

- **Vue.js**：构建用户界面，实现响应式交互。
- **Element UI**：基于Vue的组件库，快速开发前端页面。
- **Axios**：实现前后端数据的交互。

## 三、运行步骤


拿到资料解压后得到如下源码。

![](https://files.mdnice.com/user/72278/92e3a590-72af-4f3c-8a13-b919200833d1.png)

### 后端启动
在数据库中新建`book_manager`数据库，然后将后端文件夹`BookManager2-master`中的`book_manager.sql`文件导入数据库中。得到如下表：



![](https://files.mdnice.com/user/72278/7113406f-9293-4882-8d7a-cdf222f6d9b8.png)



将文件夹`BookManager2-master`导入`Idea`中如下：



![](https://files.mdnice.com/user/72278/a57e9b49-fb1b-4b80-8b04-9b97c6be2da0.png)



打开`src/main/resources/application.properties`文件修改数据库配置相关改成自己的：



![](https://files.mdnice.com/user/72278/0822ee8d-f171-4029-a200-d3e4030af03b.png)



接下来咱们进入设置`settings`配置`maven`。如下

![](https://files.mdnice.com/user/64619/ca6a3c89-709b-4ccc-b730-e2a9a75037be.png)

配置好了大家可以重新刷新一下maven即可,然后等待加载即可，如下所示：



![](https://files.mdnice.com/user/72278/84a177b3-fe35-44d6-81c8-87b7ee44a6fa.png)


接下来启动`Redis`，`Redis`的安装包同样已经放在里面啦！！


![](https://files.mdnice.com/user/72278/2d392e88-62e2-4e5f-9009-de7d6e1fdd81.png)


启动 `Redis` 成功 ！

![](https://files.mdnice.com/user/72278/c6d4256f-5614-4ffa-8be5-841f3bb949e6.png)


接下来启动项目即可


![](https://files.mdnice.com/user/72278/383e2613-8e2b-4692-a22d-48eb546d1752.png)


如下，启动成功！无报错！

![](https://files.mdnice.com/user/72278/8a523241-017c-4522-8288-b0698efd3057.png)


### 前端启动

接下来教大家如何运行前端，`我接下来的步骤的前提都是建立在前端环境已经搭好的前提下，如已经安装node啥的这些.`我就懒得换编译工具了，同样也用Idea来进行运行了，当然了，大家可以用**VSCode**或者**HbuilderX**同样可以运行Vue项目的

将前端代码文件夹`BookManagerVue-permission-control`导入`idea`，并且打开终端即可。


![](https://files.mdnice.com/user/72278/9193e1fc-2e5f-4283-bcb9-b55f60d0f3e8.png)



然后输入以下代码进行安装依赖：

```
npm install
```

安装依赖成功之后就可以启动项目了
```
npm run dev
```

启动成功


![](https://files.mdnice.com/user/72278/98928a76-dee9-4275-8b0f-026e51ecb607.png)


- 地址如下：

- **http://localhost:9528/BookManager**

- 用户

  - 账号：**wangpeng**

  - 密码: **123456**

- 管理员

  - 账号：**admin**

  - 密码: **admin**



## 四、项目演示


![](https://files.mdnice.com/user/72278/a4a4618a-2eee-4bd9-a95f-f6f6ddf5d74d.jpg)


![](https://files.mdnice.com/user/72278/a43efc04-1c50-47f7-a98c-6b6fa7d63441.jpg)


![](https://files.mdnice.com/user/72278/cf87775e-c049-4ca2-ae52-9246cd5e1a78.jpg)


![](https://files.mdnice.com/user/72278/7debbb64-e571-4f91-be61-cb341089e51e.jpg)


![](https://files.mdnice.com/user/72278/595b6624-2d49-4fe7-b4f2-7cabe83d8f6b.jpg)


![](https://files.mdnice.com/user/72278/f1a6eac5-1ef6-436c-b753-fc31ec24920a.jpg)


![](https://files.mdnice.com/user/72278/290fe504-47b3-47fa-bb03-480d763251f8.jpg)


![](https://files.mdnice.com/user/72278/8d36f133-572c-4dd8-84fe-2be10f1fe3ab.jpg)

### 源码获取方式

其它的就不展示了，大家有兴趣的话可以自己去下载源码来运行看看。

![](https://files.mdnice.com/user/64619/fc3a72d4-6b57-4886-9085-1f216b3dd7d0.png)

关注公众号之后点击**全部资料**可进入小程序中点击**开源项目**—>**Java**中编号【**27-SpringBoot图书管理系统**】长按即可复制链接获取。还有更多项目源码等待你的发现！！

## 五、总结与展望

开发一个功能完善的图书管理系统是一个系统工程，需要多技术的支持和良好的设计。随着技术的不断进步，我们相信图书管理系统将在提高图书馆服务质量和效率方面发挥更大的作用。


如若大家想了解更多相关知识，请**关注我**，一名有故事的程序猿！！创作不易，都是自己一步一步去找并且总结的项目，麻烦大家给个**关注**和**赞**，最后感谢您的阅读，希望本文对您有所帮助！如有任何疑问或建议，请随时**留言交流**。

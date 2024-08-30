---
tags:
  - SpringBoot
  - Java
  - Vue
  - 前后端分离
---



# SpringBoot医药销售管理系统

源码获取请关注右侧微信公众号【<span style="font-weight: bold;text-align:left;font-size: 18px;color:#00bfff">程序猿代码之路</span>】

关注之后点击如下图【<span style="font-weight: bold;text-align:left;font-size: 18px;color:#00bfff">全部资料</span>】中可进入小程序中点击**开源项目**—>**Java**中编号【**21-SpringBoot医药销售系统**】长按即可复制链接获取。还有更多项目源码等待你的发现！！

<p align = "center">    
<img  src="https://files.mdnice.com/user/64619/fc3a72d4-6b57-4886-9085-1f216b3dd7d0.png" width="500" />
</p>





>🔥大家好，这里是**程序猿代码之路**！
> 
><strong>💐背景 : </strong>在当今信息化快速发展的时代，传统的医药销售管理方式已难以满足企业的需求。
> 
><strong>🤟简介 : </strong>为了提高管理效率、减少人为错误并提升客户满意度，今天就给大家介绍一套**基于SpringBoot和Vue3技术前后端分离的医药销售管理系统**。


## 一、项目简介

该系统旨在为医药销售行业提供一个全面的解决方案，涵盖药品采购、库存管理、销售跟踪以及客户关系管理等核心业务。通过整合最新的Web技术，致力于打造一个响应迅速、操作简便、安全可靠的管理平台。

根据不同用户角色的权限和需求，系统分为管理员端和销售员端两大模块。

### 管理员端功能
- **药品信息管理**：添加、编辑或删除药品信息，包括名称、生产厂家、批准文号等。
- **库存管理**：监控药品库存量，设置库存预警，自动提示采购需求。
- **数据统计与分析**：利用图表展示销售数据，帮助管理层进行市场分析和决策。
### 销售员端功能
- **销售记录管理**：录入销售订单，查看历史销售记录，打印销售小票。
- **客户关系管理**：维护客户资料，跟踪客户购买历史，推送优惠信息。

`注意：以上可能有些功能没有！`


## 二、项目技术栈

### Spring Boot
- **简化配置**：Spring Boot提供多种自动配置的功能，减少了传统Spring应用的繁琐配置。
- **依赖管理**：Starter POMs简化了项目依赖的管理，自动引入相关依赖库。
### Redis
- **适用场景**：一款高性能的开源键值对存储系统，主要用于缓存、消息队列和会话存储等场景。
### Vue3
- **响应式系统**：Vue3采用了更高效的响应式系统，提高了应用的性能。
- **组合式API**：Composition API提供了更灵活的逻辑复用和代码组织方式。
### 其他技术
- **Axios**：处理HTTP请求，与后端API交互。
- **Vuex**：管理全局状态，实现组件间的数据共享。
- **Element Plus**：一套适用于Vue3的高质量UI组件库，提升界面美观度。

## 三、项目运行

`本项目运行前提，后端安装所需基础环境和工具比如：jdk、Idea、Maven、MySQL、Redis等等。并且由于本项目是前后端分离的，前端使用Vue，大家还需安装前端的基础环境：如Node、npm等等。大家可先行检查是否全部安装完毕再进行运行！`


拿到资料解压后得到如下源码。

![](https://files.mdnice.com/user/64619/c631c553-c902-497d-89aa-ef6ff605ce62.png)

### 后端启动

接下来教大家如何启动后端代码，启动之前需要将数据导入到数据库中。在数据库中新建`medicine_sale`数据库，然后导入数据库文件夹下的`medicine_sale.sql`文件。得到如下表：

![](https://files.mdnice.com/user/64619/d16c8619-45d0-4693-aa53-f6f539f68162.png)

`需要注意的是：生成转储文件的数据库版本为8.0,但我的数据库版本为5.7,因此高版本导入到低版本就会报如下错误`

```
[ERR] 1273 - Unknown collation: 'utf8mb4_0900_ai_ci'
```
**解决方法**：
打开sql文件，将文件中的所有
`utf8mb4_0900_ai_ci`替换为`utf8_general_ci`，`utf8mb4`替换为`utf8`保存后再次运行sql文件，运行成功。


接下来就是将文件夹导入`Idea`中如下：


![](https://files.mdnice.com/user/64619/bc222ffb-667f-4859-9870-69ce2b850705.png)



打开`src/main/resources/application.properties`文件修改数据库配置相关：


![](https://files.mdnice.com/user/64619/35d5f5a7-2953-493f-ac15-4c18d78a0407.png)


接下来咱们进入设置`settings`配置`maven`。如下

![](https://files.mdnice.com/user/64619/ca6a3c89-709b-4ccc-b730-e2a9a75037be.png)

配置好了大家可以重新刷新一下maven即可,然后等待加载即可，如下所示：

![](https://files.mdnice.com/user/64619/959f8cb9-d5a1-4c98-973e-9561e733f4c8.png)

接下来启动`redis`

![](https://files.mdnice.com/user/64619/b8506961-0f8e-4138-a2d2-eed6823219eb.png)


`redis`启动成功，然后启动后端项目即可


![](https://files.mdnice.com/user/64619/83b4f63f-77ae-422d-8606-33812e9adbff.png)



如下，启动成功！无报错！


![](https://files.mdnice.com/user/64619/37cb5ed0-a871-4545-b942-35cdd811c082.png)

### 前端启动

接下来启动前端项目，打开终端，切换到前端源代码目录文件夹`front`如下所示：

![](https://files.mdnice.com/user/64619/2bd5b718-fecf-4dc9-b3ad-f809346cda3f.png)

然后输入如下代码安装依赖：

```
npm install
```

哦嚯！结果就给我报错了`request to https://registry.nlark.com/(.*?).tgz failed, reason: getaddrinfo ENOTFOUND registry.`

**解决方法**：将 `package-lock.json` 文件中的`https://registry.nlark.com/`全部替换成`https://registry.npmmirror.com/`之后重新安装依赖即可！！

然后运行如下代码进行启动前端项目
```
npm run serve
```

![](https://files.mdnice.com/user/64619/215db2e1-d26c-4dd7-829f-1095614a6140.jpg)

哦嚯，结果又有如下报错了，还让不让人运行了啊！


![](https://files.mdnice.com/user/64619/2adb0088-f1ad-49f6-8c14-655f895e06d0.png)


这个报错要解决非常简单，你只需要`front/package.json`文件中`serve`添加`set NODE_OPTIONS=--openssl-legacy-provider && `如下所示

![](https://files.mdnice.com/user/64619/78d08625-8255-43fb-89dc-a4dbee57548d.png)

接下来重新运行`npm run serve`命令启动即可，如下所示，启动成功。


![](https://files.mdnice.com/user/64619/d13f93fe-ffb0-49e1-8092-a25ccd282d6c.png)


- 项目地址：

[http://localhost:8080/](http://localhost:8080/)

## 四、项目演示

### 首页


![](https://files.mdnice.com/user/64619/8f013976-f882-4ce3-b660-883b7b97d610.jpg)


### 操作员登录


![](https://files.mdnice.com/user/64619/e307a004-c672-4c49-8f3d-282e72cf2bea.png)

![](https://files.mdnice.com/user/64619/0180e7b8-1371-4832-a4f1-99f002779a6c.png)

![](https://files.mdnice.com/user/64619/9867b4dd-d484-47c2-b8b6-01e1f4a02f28.png)

![](https://files.mdnice.com/user/64619/29b9743d-7e71-4a75-a180-8e26a2bd606b.png)

![](https://files.mdnice.com/user/64619/b69ba303-89e4-421c-8b7b-afdfcce12d8f.png)

![](https://files.mdnice.com/user/64619/1ce2ebde-1323-4cbe-83e0-f0adc4937bb2.png)

![](https://files.mdnice.com/user/64619/ee9e0091-e08f-44cd-8c30-cf06d4796a63.png)


### 顾客登录


![](https://files.mdnice.com/user/64619/e1ff7c22-6e2e-416a-8c49-4aa54c2f6fe6.png)

![](https://files.mdnice.com/user/64619/09f9aa05-f847-49a0-a103-0c9f3b8153ca.png)

![](https://files.mdnice.com/user/64619/54cc5da7-627c-4dec-aef0-dbd7b31680aa.png)


### 源码获取方式

其它的就不展示了，大家有兴趣的话可以自己去下载源码来运行看看。

![](https://files.mdnice.com/user/64619/fc3a72d4-6b57-4886-9085-1f216b3dd7d0.png)

关注公众号之后点击**全部资料**可进入小程序中点击**开源项目**—>**Java**中编号【**21-SpringBoot医药销售系统**】长按即可复制链接获取。还有更多项目源码等待你的发现！！


## 总结

**基于Spring Boot和Vue3开发的医药销售管理系统**，通过整合当下前沿的Web技术，不仅提高了医药销售的管理效率，还提升了数据的准确性和安全性。希望在未来能够继续关注技术发展趋势，引入更多智能化元素，如大数据分析、AI预测等，以进一步提升系统的智能化水平和用户体验。

如若大家想了解更多相关知识，请**关注我**，一名有故事的程序猿！！创作不易，都是自己一步一步去找并且总结的项目，麻烦大家给个**关注**和**赞**，最后感谢您的阅读，希望本文对您有所帮助！如有任何疑问或建议，请随时**留言交流**。

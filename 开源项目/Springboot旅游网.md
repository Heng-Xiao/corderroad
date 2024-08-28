---
tags:
- SpringBoot
- Java
- LayUi
---


# Springboot旅游网

源码获取请关注右侧微信公众号【<span style="font-weight: bold;text-align:left;font-size: 18px;color:#00bfff">程序猿代码之路</span>】后台回复【<span style="font-weight: bold;text-align:left;font-size: 18px;color:#00bfff">Springboot旅游网</span>】即可获取！


## 系统简介

在当今快节奏的生活中，旅游已经成为了人们放松身心、拓宽视野的一种重要方式。随着互联网技术的不断发展，传统的旅游服务方式已经无法满足现代人的需求。因此，我们开发了基于Springboot和layui的旅游网项目，目的是通过这一平台，将旅游资源整合，为用户提供更加便捷、高效、个性化的旅游服务。

Springboot作为当前流行的微服务框架，使得后端开发更加快捷和简便，同时它的众多起步依赖（starters）让项目能够快速启动和运行。Layui作为一个轻量级的前端框架，拥有丰富的组件和简洁的外观，使得用户界面美观且易于使用。结合这两个强大的工具，我们能够构建一个功能强大、用户体验极佳的旅游网站。

我们相信，随着旅游网项目的发展和完善，它将成为连接旅游者和旅游服务提供商的桥梁，促进旅游行业的发展，为用户带来难忘的旅游体验。

**旅游网前台**：用户注册与登录、旅游产品搜索、筛选和详情展示、旅游套餐预订和支付流程、旅游攻略和游记分享、用户评论和评分系统

**旅游网后台**：用户管理、商家管理、旅游分类管理、活动管理、订单管理、图片管理页面、景点管理、广告管理

## 系统涉及

涉及技术 ：Springboot+MyBatis+Layui+Jquery

涉及环境 ：Jdk 1.8+Windows 10+MySql 5.7+Maven 3.5.2

涉及工具 : Navicat Premium 12 + idea 2020.0.3

## 系统运行

拿到源码解压之后得到如下

![image.png](https://cdn.nlark.com/yuque/0/2024/png/12522758/1709209595029-49235227-9cb7-4598-be9f-0a00003d4809.png#averageHue=%23fbf7f6&clientId=u43a5029a-e5c0-4&from=paste&height=317&id=ua53acb9c&originHeight=396&originWidth=891&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=51397&status=done&style=none&taskId=ubc12cc8c-851d-438a-890d-d152636cc70&title=&width=712.8)

将代码导入到idea中是这个样子的

![image.png](https://cdn.nlark.com/yuque/0/2024/png/12522758/1709209685392-c9c0454a-1421-4af0-bf69-ba8cd7372a6e.png#averageHue=%23e7ebf0&clientId=u7aa5b3c6-a608-4&from=paste&height=426&id=u72e63ee8&originHeight=532&originWidth=1451&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=99147&status=done&style=none&taskId=u741cc713-4d50-4c11-b54f-235b8033874&title=&width=1160.8)

来到这个路径下面修改数据库ip和端口、用户名和密码

![image.png](https://cdn.nlark.com/yuque/0/2024/png/12522758/1709209756924-063f4db3-dbc5-4dbd-b2af-4e50b599f2d3.png#averageHue=%23eaedf2&clientId=u7aa5b3c6-a608-4&from=paste&height=702&id=uf122b360&originHeight=877&originWidth=1912&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=190352&status=done&style=none&taskId=ud4b6c1aa-7850-4afd-8264-85a033004b3&title=&width=1529.6)

配置启动运行，参考我这个配置即可
![image.png](https://cdn.nlark.com/yuque/0/2024/png/12522758/1709209844004-26437824-1bec-47b9-bc7d-40655def18c3.png#averageHue=%23e3e7ec&clientId=u7aa5b3c6-a608-4&from=paste&height=802&id=u0d72b42a&originHeight=1003&originWidth=1920&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=196675&status=done&style=none&taskId=uad157bd1-ba72-4839-9ee7-c4627915c9e&title=&width=1536)

MySQL中新建数据库db_tubaba，将sql文件导入db_tubaba数据库中。如下：

![1709209949516.png](https://cdn.nlark.com/yuque/0/2024/png/12522758/1709209952963-4e7145bb-21ec-4f50-8789-c52651e3c2dc.png#averageHue=%23faf9f9&clientId=u7aa5b3c6-a608-4&from=paste&height=774&id=u120a7830&originHeight=967&originWidth=1659&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=76376&status=done&style=none&taskId=uab68e244-b9ea-494d-a512-82bd88cb738&title=&width=1327.2)

刷新maven

![image.png](https://cdn.nlark.com/yuque/0/2024/png/12522758/1709210042894-d17a7fa7-99b2-41ff-ad88-b0e3f9f2ab0b.png#averageHue=%23e6eaf0&clientId=u7aa5b3c6-a608-4&from=paste&height=754&id=uf355cc85&originHeight=942&originWidth=1920&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=261610&status=done&style=none&taskId=u59caa255-e360-4d61-a32a-ad2aa4d6882&title=&width=1536)

接下来运行项目即可：

![image.png](https://cdn.nlark.com/yuque/0/2024/png/12522758/1709210122666-374f976a-1bf9-4d8a-accc-9d547e67ca2e.png#averageHue=%23ebedf2&clientId=u7aa5b3c6-a608-4&from=paste&height=590&id=ueac68b63&originHeight=737&originWidth=1920&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=166629&status=done&style=none&taskId=u2bf37771-5da8-4f2f-944a-7ddce8303ea&title=&width=1536)

无报错，端口为1001

![image.png](https://cdn.nlark.com/yuque/0/2024/png/12522758/1709210177811-f078710d-f1f0-420d-be3e-b4c423d11a4b.png#averageHue=%2385cd9e&clientId=u7aa5b3c6-a608-4&from=paste&height=786&id=ue407eea9&originHeight=983&originWidth=1920&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=346343&status=done&style=none&taskId=u992c049e-4eca-4e68-877c-765e956b521&title=&width=1536)

启动成功，接下来咱们就来演示一下项目吧！！

后台：[http://localhost:1001/admin_login.jsp](http://localhost:1001/admin_login.jsp)

前台：[http://localhost:1001/login](http://localhost:1001/login)
## 系统演示

### 后台界面

![image.png](https://cdn.nlark.com/yuque/0/2024/png/12522758/1709210323225-6e6c6b7a-1fc1-4c50-848e-7eb1fba48c6d.png#averageHue=%235e96b1&clientId=u3656b108-2370-4&from=paste&height=769&id=u38ed007d&originHeight=961&originWidth=1920&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=509183&status=done&style=none&taskId=u4be2e731-9cd0-4771-910e-619d6cf9c34&title=&width=1536)

![image.png](https://cdn.nlark.com/yuque/0/2024/png/12522758/1709210352734-d4e44dad-4a5a-4f87-8ff1-0c8f1fac53de.png#averageHue=%23e1bf8e&clientId=u3656b108-2370-4&from=paste&height=519&id=u8e00a4a5&originHeight=649&originWidth=1920&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=86204&status=done&style=none&taskId=u60e5781a-ae7d-4bd4-bc17-3d0b2117092&title=&width=1536)

![image.png](https://cdn.nlark.com/yuque/0/2024/png/12522758/1709210366925-ca5e496c-4f99-4c79-bee4-8be193e23e2a.png#averageHue=%23e2c691&clientId=u3656b108-2370-4&from=paste&height=568&id=uc28de344&originHeight=710&originWidth=1920&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=85630&status=done&style=none&taskId=u29fbc166-6908-4d9b-8f77-6f62fb1fbea&title=&width=1536)

![image.png](https://cdn.nlark.com/yuque/0/2024/png/12522758/1709210379631-07eb92a4-e852-4d46-a564-b3802bb21df9.png#averageHue=%23e2e2e1&clientId=u3656b108-2370-4&from=paste&height=475&id=ud975d5b9&originHeight=594&originWidth=1920&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=71375&status=done&style=none&taskId=u533494c6-a082-4b2d-9846-de678566ca1&title=&width=1536)

![image.png](https://cdn.nlark.com/yuque/0/2024/png/12522758/1709210390674-f5fe634e-9b47-489b-9549-491aa9d6210c.png#averageHue=%23dfc392&clientId=u3656b108-2370-4&from=paste&height=446&id=u98017174&originHeight=557&originWidth=1920&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=63614&status=done&style=none&taskId=ucaac2a4b-f322-45b4-996d-799bdf4ea57&title=&width=1536)

![image.png](https://cdn.nlark.com/yuque/0/2024/png/12522758/1709210403445-d5061e38-b4e1-45ec-8493-1b7054f8ee49.png#averageHue=%23e2c38f&clientId=u3656b108-2370-4&from=paste&height=580&id=ue24a8052&originHeight=725&originWidth=1920&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=92873&status=done&style=none&taskId=ue5ac6e8b-e796-4028-a21a-cc2e26e48f9&title=&width=1536)

![image.png](https://cdn.nlark.com/yuque/0/2024/png/12522758/1709210413026-70f9c4be-bf0c-4310-bc13-92b26d117452.png#averageHue=%23b2d8a4&clientId=u3656b108-2370-4&from=paste&height=551&id=ua8560a87&originHeight=689&originWidth=1920&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=72677&status=done&style=none&taskId=u3d52e094-b712-48db-a883-478bcb057b6&title=&width=1536)

![image.png](https://cdn.nlark.com/yuque/0/2024/png/12522758/1709210422109-a1a108dd-2e9d-4d8b-90a1-e57b89931d39.png#averageHue=%23ddbe8d&clientId=u3656b108-2370-4&from=paste&height=558&id=u08cd09bd&originHeight=697&originWidth=1920&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=77618&status=done&style=none&taskId=u1a5d6a8a-825e-451f-b7b5-4fb8cb62332&title=&width=1536)

![image.png](https://cdn.nlark.com/yuque/0/2024/png/12522758/1709210436893-d20a4b13-4525-4d81-af39-782a8c1cb23b.png#averageHue=%23e4e3e3&clientId=u3656b108-2370-4&from=paste&height=460&id=u91f97c54&originHeight=575&originWidth=1920&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=63215&status=done&style=none&taskId=u2fccb61e-cca3-414a-9310-df66db29bd6&title=&width=1536)

![image.png](https://cdn.nlark.com/yuque/0/2024/png/12522758/1709210517865-808649c6-eb1a-41b7-bbac-fb5a82e0e056.png#averageHue=%23e3e2e1&clientId=u3656b108-2370-4&from=paste&height=522&id=u1095c6aa&originHeight=652&originWidth=1920&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=88292&status=done&style=none&taskId=u4668183c-7c60-4db2-bc03-c5f3727a0bf&title=&width=1536)

![image.png](https://cdn.nlark.com/yuque/0/2024/png/12522758/1709210548499-4488a7e2-8253-41ad-bd9e-321f5f1804bf.png#averageHue=%239b805f&clientId=u3656b108-2370-4&from=paste&height=681&id=ub7d19d36&originHeight=851&originWidth=1920&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=413629&status=done&style=none&taskId=ufb580af4-4a04-4a92-93c5-92281407cec&title=&width=1536)

![image.png](https://cdn.nlark.com/yuque/0/2024/png/12522758/1709210561538-ba624b98-bd2d-41a7-8fdc-a4e5df5c4605.png#averageHue=%238b8367&clientId=u3656b108-2370-4&from=paste&height=629&id=uac39dfdc&originHeight=786&originWidth=1920&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=485352&status=done&style=none&taskId=u71c792a6-ba7e-4507-884c-6f4baf202be&title=&width=1536)

![image.png](https://cdn.nlark.com/yuque/0/2024/png/12522758/1709210577946-6a8fbb68-470b-4487-a269-8c109aa20110.png#averageHue=%23e7e5e4&clientId=u3656b108-2370-4&from=paste&height=600&id=u8861b0b0&originHeight=750&originWidth=1896&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=187332&status=done&style=none&taskId=u30094960-1407-488d-8bdd-15872b4f245&title=&width=1516.8)

![image.png](https://cdn.nlark.com/yuque/0/2024/png/12522758/1709210594438-901423b0-c66b-4cbe-b947-6339fd8eb7c5.png#averageHue=%23e2c998&clientId=u3656b108-2370-4&from=paste&height=586&id=u2d0ff4d9&originHeight=732&originWidth=1912&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=71019&status=done&style=none&taskId=u4dfebbf5-4233-4fd6-9eca-c237f5c9f5f&title=&width=1529.6)

### 前台界面

![image.png](https://cdn.nlark.com/yuque/0/2024/png/12522758/1709210763804-da5198bf-1dcc-49eb-901b-7858ffa9a07a.png#averageHue=%23e4e7e4&clientId=u3656b108-2370-4&from=paste&height=658&id=u7bcc82de&originHeight=823&originWidth=1920&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=1050485&status=done&style=none&taskId=uf51ad452-f747-4a6a-ab6b-8c79be5e0a0&title=&width=1536)![image.png](https://cdn.nlark.com/yuque/0/2024/png/12522758/1709211226864-5a33c76f-2b31-4bdd-b192-c050d81beb65.png#averageHue=%239fb9a6&clientId=uf67a58d7-5fbb-4&from=paste&height=624&id=u4ac2cf2e&originHeight=780&originWidth=1905&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=1446840&status=done&style=none&taskId=uf1d16a79-aebf-4016-af77-c3b1465b99a&title=&width=1524)

![image.png](https://cdn.nlark.com/yuque/0/2024/png/12522758/1709210942511-3c612164-c1f9-40c6-8325-f57158c09fbd.png#averageHue=%23efbe76&clientId=u3656b108-2370-4&from=paste&height=681&id=ueb149f3f&originHeight=851&originWidth=1884&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=674209&status=done&style=none&taskId=u177b78af-55d7-4ece-89d0-b7224f96672&title=&width=1507.2)

![image.png](https://cdn.nlark.com/yuque/0/2024/png/12522758/1709211108528-e3ba55fd-6ed5-49b2-9434-42ce8893bcdc.png#averageHue=%23f5f4f4&clientId=uf67a58d7-5fbb-4&from=paste&height=580&id=uea4457b7&originHeight=725&originWidth=1920&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=114798&status=done&style=none&taskId=u392c9621-e794-4c54-808c-6a190ac125f&title=&width=1536)

![image.png](https://cdn.nlark.com/yuque/0/2024/png/12522758/1709211128385-8feb7e88-9dbf-464d-9d0f-1cfdd81e5889.png#averageHue=%23f7f6f5&clientId=uf67a58d7-5fbb-4&from=paste&height=663&id=u980814c4&originHeight=829&originWidth=1824&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=112788&status=done&style=none&taskId=uf63bb69e-e5a3-495a-b04d-3e88ce841f2&title=&width=1459.2)

![image.png](https://cdn.nlark.com/yuque/0/2024/png/12522758/1709211145564-ea0d34f1-0319-4cc5-ba58-9f416891cd7d.png#averageHue=%23f9f8f8&clientId=uf67a58d7-5fbb-4&from=paste&height=606&id=u766ae28f&originHeight=757&originWidth=1859&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=89211&status=done&style=none&taskId=uc34e7ac4-0e1c-4726-8473-05e31e33846&title=&width=1487.2)

![image.png](https://cdn.nlark.com/yuque/0/2024/png/12522758/1709211162258-6b6f6ae2-fa21-47e3-ae1f-3d9c12a0fcda.png#averageHue=%23f8f7f6&clientId=uf67a58d7-5fbb-4&from=paste&height=522&id=u8082f91d&originHeight=652&originWidth=1878&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=133268&status=done&style=none&taskId=u36ac42e9-3369-4cd9-a267-85344fec385&title=&width=1502.4)

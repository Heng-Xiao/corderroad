# Flask的旅游系统


源码获取请关注右侧微信公众号【<span style="font-weight: bold;text-align:left;font-size: 18px;color:#00bfff">程序猿代码之路</span>】后台回复【<span style="font-weight: bold;text-align:left;font-size: 18px;color:#00bfff">Falsk旅游系统</span>】即可获取！


## 系统简介
在数字化时代，旅游行业正迅速转向线上服务，为用户提供更加便捷的信息获取、旅行规划和服务预订体验。随着互联网技术的不断进步，基于Web的旅游网站已经成为人们规划和预定旅游的重要工具。一个功能齐全、界面友好、响应迅速的旅游网站能够吸引大量用户，提供丰富的旅游资源，帮助用户高效地计划他们的行程。在此背景下，开发一个基于Flask框架和Bootstrap前端框架的旅游网系统具有重要的实际意义。

本项目旨在开发一款基于Flask和Bootstrap的旅游网系统，它集成了前台用户界面和后台管理平台，以支持各种旅游相关的活动和服务。利用Flask这一轻量级的Python web框架，可以快速构建高效且易于维护的Web应用程序。结合Bootstrap这一流行的前端开发框架，不仅使得网站界面美观、现代，还能保证其在不同设备上的响应式显示。

前台系统为用户提供了一个直观的平台，用于浏览旅游目的地、查看景点图片和描述、搜索旅游信息、预约等。用户可以注册和登录，保存他们的偏好设置，创建和管理个人行程，收藏他们的旅行景点等等。

后台系统为管理员提供了一个强大的内容管理系统（CMS），用于添加、编辑和删除地区、景区、会员、游记和其他相关服务。

整体而言，该旅游网系统【**e起去旅行**】致力于提供一站式的在线旅游服务，满足不同用户的多样化需求，同时为旅游企业提供一个有效的客户获取和服务渠道。

## 系统涉及

涉及技术 ：Flask+PyMySQL+Bootstrap+Jquery

涉及环境 ：Python 3.7.6+Windows 10+MySql 5.7

涉及工具 :  Navicat Premium 12 + PyCharm 2021.1.2

## 系统运行

解压源码之后得到以下文件夹

![image.png](https://cdn.nlark.com/yuque/0/2024/png/12522758/1709555176634-0de16370-3b5c-4e3c-b567-eba267a4c8c4.png#averageHue=%23fbf8f7&clientId=u8ff0f7af-c3f5-4&from=paste&height=353&id=u8c5a6073&originHeight=441&originWidth=791&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=51719&status=done&style=none&taskId=ufffaa63f-f942-4212-b18e-112d046377e&title=&width=632.8)

项目最好是使用python-3.7.6启动，别的版本可能会报错！！！包以及放在此目录下，可以直接双击进行安装

![image.png](https://cdn.nlark.com/yuque/0/2024/png/12522758/1709555789736-26729812-7ad3-4264-8c25-ec6928329466.png#averageHue=%23fbfafa&clientId=u8ff0f7af-c3f5-4&from=paste&height=259&id=u2243fc8f&originHeight=324&originWidth=1070&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=34103&status=done&style=none&taskId=u90b06299-224c-451c-b65c-6005c0e3bd2&title=&width=856)

然后新建数据库travel并且将【travel.sql】文件导入数据库中如下：

![image.png](https://cdn.nlark.com/yuque/0/2024/png/12522758/1709555254882-37482fe0-d305-409d-bcaa-89c16309cf51.png#averageHue=%23f9f8f7&clientId=u8ff0f7af-c3f5-4&from=paste&height=698&id=u0df4299a&originHeight=872&originWidth=1454&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=91617&status=done&style=none&taskId=ua5204a53-2d8f-45f9-8f6b-67e1f196cdf&title=&width=1163.2)

在e-travel-master\config.py文件中修改数据库相关信息ip、端口、用户名以及密码等等

![image.png](https://cdn.nlark.com/yuque/0/2024/png/12522758/1709555437533-d50b1317-d45d-4f09-9049-8a0d91a7af1f.png#averageHue=%23faf6f6&clientId=u8ff0f7af-c3f5-4&from=paste&height=569&id=u3e909fdd&originHeight=711&originWidth=1758&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=154828&status=done&style=none&taskId=u275a43eb-1c97-4511-8935-5e6f22e3f27&title=&width=1406.4)

打开终端窗口输入以下命令

![image.png](https://cdn.nlark.com/yuque/0/2024/png/12522758/1709555548464-4b0e9014-edf0-48b6-b983-898a4e0f12c5.png#averageHue=%23faf9f9&clientId=u8ff0f7af-c3f5-4&from=paste&height=810&id=u715dd5b4&originHeight=1012&originWidth=1920&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=145959&status=done&style=none&taskId=u348dc223-15f3-4508-a7dc-a1283cec21e&title=&width=1536)

将以下命令逐个输入终端即可

```basic
$生成虚拟环境
python -m venv venv

$启动虚拟环境
venv\Scripts\activate

$安装依赖
pip install -i https://pypi.douban.com/simple/ --trusted-host pypi.douban.com -r requirements.txt

$初始化数据库
python manage.py db init 
$数据库迁移 报错alembic.util.exc.CommandError: Can't locate revision identified by '423caff1b936'参考：https://blog.csdn.net/m0_37605642/article/details/90638195
$由于版本号不同的问题，需删除travel中的alembic_version表
python manage.py db migrate
python manage.py db upgrade

$--treaded  非阻塞启动   0.0.0.0    监听全网，若部署到服务器上
python manage.py runserver --threaded --host 0.0.0.0
```

当然也可以不要用虚拟环境直接安装依赖然后点启动即可

```basic
pip install -i https://pypi.douban.com/simple/ --trusted-host pypi.douban.com -r requirements.txt
```

点击启动无报错并且启动成功

![image.png](https://cdn.nlark.com/yuque/0/2024/png/12522758/1709555870310-8fdb8bfa-db6b-4248-a682-73a3dc9afdb8.png#averageHue=%23f9f8f7&clientId=u8ff0f7af-c3f5-4&from=paste&height=618&id=ufe995509&originHeight=773&originWidth=1399&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=115755&status=done&style=none&taskId=ua5be736a-e57b-4af3-903b-737e7e84775&title=&width=1119.2)

前台地址：[http://127.0.0.1:5000/](http://127.0.0.1:5000/)

- 前台可注册登录并且浏览景区

后台地址：[http://127.0.0.1:5000/admin](http://127.0.0.1:5000/admin)

- 用户名：mr
- 密码：mrsoft
## 系统演示

### 前台页面

![image.png](https://cdn.nlark.com/yuque/0/2024/png/12522758/1709472780077-b1395e17-041f-49dc-93e0-1887d1abda87.png#averageHue=%23cedcce&clientId=u8051e1df-33f3-4&from=paste&height=703&id=u52ac4991&originHeight=879&originWidth=1899&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=2368621&status=done&style=none&taskId=u4b1b246b-ae66-473d-8c93-84509e20876&title=&width=1519.2)

![image.png](https://cdn.nlark.com/yuque/0/2024/png/12522758/1709472802573-3a499ad8-fac7-4590-982b-e08debb18338.png#averageHue=%23b6aa8c&clientId=u8051e1df-33f3-4&from=paste&height=699&id=ue7f3c1f9&originHeight=874&originWidth=1899&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=1257965&status=done&style=none&taskId=u0aaf39ac-07c3-4398-a224-9dda749a225&title=&width=1519.2)

![image.png](https://cdn.nlark.com/yuque/0/2024/png/12522758/1709556157808-c22da045-ec6e-4720-bd37-d05e1e69a5a5.png#averageHue=%23dfd5c1&clientId=u8ff0f7af-c3f5-4&from=paste&height=694&id=u24dc07fe&originHeight=868&originWidth=1898&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=1515110&status=done&style=none&taskId=u268ceb25-86dc-4862-9dbf-ba5d69f8945&title=&width=1518.4)

![image.png](https://cdn.nlark.com/yuque/0/2024/png/12522758/1709472818090-ad2f6995-680d-4343-865e-9ceb6d5c5c89.png#averageHue=%23eeedeb&clientId=u8051e1df-33f3-4&from=paste&height=694&id=ub4eb2c04&originHeight=867&originWidth=1904&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=743981&status=done&style=none&taskId=u322fb87f-3c3c-478f-b0f2-6a5057c1c1e&title=&width=1523.2)

![image.png](https://cdn.nlark.com/yuque/0/2024/png/12522758/1709472841102-613461d1-8f87-42c9-8c6a-da5ee517ae88.png#averageHue=%23f4f3f1&clientId=u8051e1df-33f3-4&from=paste&height=693&id=u65e78dae&originHeight=866&originWidth=1899&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=645486&status=done&style=none&taskId=uceed1d57-1397-43e0-bca1-d4a2e5a4fc5&title=&width=1519.2)

![image.png](https://cdn.nlark.com/yuque/0/2024/png/12522758/1709472853706-37fa65ef-68fc-4fd6-a030-709c2ae50bd4.png#averageHue=%23fcfbfb&clientId=u8051e1df-33f3-4&from=paste&height=670&id=uf7e2abdf&originHeight=838&originWidth=1899&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=98844&status=done&style=none&taskId=u67ca7285-2dfc-4f72-b3b8-83ac286d437&title=&width=1519.2)

![image.png](https://cdn.nlark.com/yuque/0/2024/png/12522758/1709472864606-c08f8bae-f388-49a1-ab32-835e26af6330.png#averageHue=%23fefefd&clientId=u8051e1df-33f3-4&from=paste&height=654&id=uf0beb6d9&originHeight=817&originWidth=1920&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=42088&status=done&style=none&taskId=ue2539a03-0b73-4cd5-8262-0a83be9c1bf&title=&width=1536)

![image.png](https://cdn.nlark.com/yuque/0/2024/png/12522758/1709472876481-9844ceca-f1a2-4213-999a-b8b5dec6387d.png#averageHue=%23fefefe&clientId=u8051e1df-33f3-4&from=paste&height=522&id=u8d830080&originHeight=652&originWidth=1919&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=28271&status=done&style=none&taskId=u4bc542e8-2e5b-49b6-bf0d-fa373a231f0&title=&width=1535.2)
### 后台页面

![image.png](https://cdn.nlark.com/yuque/0/2024/png/12522758/1709472910263-c8355a38-8aa7-4417-8083-7aac59357e5d.png#averageHue=%23d1d5dd&clientId=u8051e1df-33f3-4&from=paste&height=581&id=uaf5021ac&originHeight=726&originWidth=1920&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=18066&status=done&style=none&taskId=u884bac62-f03f-4ede-aade-9a7fefd67ff&title=&width=1536)

![image.png](https://cdn.nlark.com/yuque/0/2024/png/12522758/1709472925991-793052fe-999f-492f-936d-13855d23662c.png#averageHue=%23bfcad3&clientId=u8051e1df-33f3-4&from=paste&height=701&id=u727c2adc&originHeight=876&originWidth=1920&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=63129&status=done&style=none&taskId=u21fef61e-6b92-4e2b-8a3e-9781844af89&title=&width=1536)

![image.png](https://cdn.nlark.com/yuque/0/2024/png/12522758/1709472937501-b1862e0c-eadf-4229-bc77-3d4c45d886aa.png#averageHue=%2380c4a2&clientId=u8051e1df-33f3-4&from=paste&height=704&id=uf2b06a3b&originHeight=880&originWidth=1920&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=109718&status=done&style=none&taskId=u81f994dd-40a0-434d-9a40-4c10eace87d&title=&width=1536)

![image.png](https://cdn.nlark.com/yuque/0/2024/png/12522758/1709472948350-00002c02-2e8a-4829-bd97-03b626d8b380.png#averageHue=%239cb7a0&clientId=u8051e1df-33f3-4&from=paste&height=702&id=u27c60eb8&originHeight=878&originWidth=1920&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=88827&status=done&style=none&taskId=ufa005a28-b467-46ef-a930-5f5b93c40fa&title=&width=1536)

![image.png](https://cdn.nlark.com/yuque/0/2024/png/12522758/1709472959227-b988aebf-350f-4229-9724-04ff4c30783f.png#averageHue=%23d1d6c9&clientId=u8051e1df-33f3-4&from=paste&height=700&id=u61c9a019&originHeight=875&originWidth=1917&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=63637&status=done&style=none&taskId=u6076256e-fbee-4488-b765-e0c4608895c&title=&width=1533.6)

![image.png](https://cdn.nlark.com/yuque/0/2024/png/12522758/1709472971306-eb97add4-870a-4d34-bb32-f27e8f359f33.png#averageHue=%2362bd9d&clientId=u8051e1df-33f3-4&from=paste&height=700&id=u59682a03&originHeight=875&originWidth=1920&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=74807&status=done&style=none&taskId=ucfb30b48-6410-47ca-bbca-1ac669159a4&title=&width=1536)

![image.png](https://cdn.nlark.com/yuque/0/2024/png/12522758/1709472984211-306b503c-d82c-4738-a953-10ae254e49f7.png#averageHue=%23d4bb8e&clientId=u8051e1df-33f3-4&from=paste&height=696&id=u48710805&originHeight=870&originWidth=1897&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=73506&status=done&style=none&taskId=uca7ea44a-4901-4325-8b21-dc9ceecdb48&title=&width=1517.6)

![image.png](https://cdn.nlark.com/yuque/0/2024/png/12522758/1709472994762-c6d15774-c7b0-4b88-8f41-4c6b5795e807.png#averageHue=%239c9270&clientId=u8051e1df-33f3-4&from=paste&height=700&id=u1a95a7b9&originHeight=875&originWidth=1900&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=191011&status=done&style=none&taskId=u1b4dce43-86a2-40b2-9a22-a2efa73ac26&title=&width=1520)

![image.png](https://cdn.nlark.com/yuque/0/2024/png/12522758/1709473007577-db97bf21-d0dd-46ab-888f-22f8f94e3e13.png#averageHue=%2379c4b7&clientId=u8051e1df-33f3-4&from=paste&height=698&id=u44096a82&originHeight=873&originWidth=1907&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=75064&status=done&style=none&taskId=u56eef90b-109d-4102-aa93-3c10844c837&title=&width=1525.6)

![image.png](https://cdn.nlark.com/yuque/0/2024/png/12522758/1709473020647-c7424ca0-2a8d-4815-9dc4-e911059d1719.png#averageHue=%23e1dcb4&clientId=u8051e1df-33f3-4&from=paste&height=699&id=u307bb4b5&originHeight=874&originWidth=1919&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=100379&status=done&style=none&taskId=u856fa753-786e-4352-b7a7-ebc1329ad74&title=&width=1535.2)

![image.png](https://cdn.nlark.com/yuque/0/2024/png/12522758/1709473033411-72a0819f-ef5f-42f3-a484-1dbd270c24f5.png#averageHue=%23c8d2ca&clientId=u8051e1df-33f3-4&from=paste&height=698&id=ud9ada6c2&originHeight=872&originWidth=1909&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=76346&status=done&style=none&taskId=u9894bc27-4885-45c7-ac23-d381642d611&title=&width=1527.2)

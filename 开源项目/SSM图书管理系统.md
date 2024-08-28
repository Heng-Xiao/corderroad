# SSM图书管理信息系统

源码获取请关注右侧微信公众号【<span style="font-weight: bold;text-align:left;font-size: 18px;color:#00bfff">程序猿代码之路</span>】后台回复【<span style="font-weight: bold;text-align:left;font-size: 18px;color:#00bfff">图书管理SSM</span>】即可获取！

## 系统简介
以往的图书馆管理事务处理主要使用的是传统的人工管理方式，这种管理方式存在着管理效率低、操作流程繁琐、保密性差等缺点，长期的人工管理模式会产生大量的文本借书与文本数据，这对事务的查询、更新以及维护带来不少困难。随着互联网时代的到来，现如今网络的覆盖率已近非常的全面，现在人们对网络的需求也越来越高，为了减轻管理人员的工作负担，提高管理人员的工作效率，因此通过网络平台创建一个便捷高效的图书馆管理来优化管理业务。通过本网站，用户可以在线查看相关信息可以说图书馆管理是偏向实际应用的网站。该网站采用目前JSP中最流行的SSM框架和Idea编辑器、MySQL数据库设计并实现的。

网站功能包含系统用户管理、图书管理、用户管理、借阅管理、公告管理、读者管理、统计分析等模块。
## 系统涉及

涉及技术 ：Spring+Spring MVC+MyBatis+JSP+Jquery+layUi
涉及环境 ：Jdk 1.8+Windows 10+MySql 5.7+Maven 3.5.2+Tomcat 9.0.5
涉及工具 : Navicat Premium 12 + idea 2020.0.3

## 系统运行

大家拿到的源码是如下这个样子的
![image.png](/javapreject/books1.png)
然后咱们进行解压得到如下：分别得到一个数据库文件和一个源代码文件夹。
![image.png](/javapreject/books2.png)
接下来咱们直接在idea里面打开library-system文件夹，注意：只到library-system文件夹，选择的时候会提示看到一个黑的框框如下所示：直接点击ok就行了。
![image.png](/javapreject/books3.png)

打开之后就会来到这了，大家第一次打开可能会很慢，他maven是在自动下载依赖的，所以就会特别慢。
![image.png](/javapreject/books4.png)
接下来咱们进入设置settings配置maven。如下
![image.png](/javapreject/books5.png)
配置好了大家可以重新刷新一下maven即可,如下所示：
![image.png](/javapreject/books6.png)
然后等待下载完依赖即可。咱们可以趁着这个时候新建数据库library，因为他的数据库配置文件里面写的是这个数据库名称，因此咱们新建一个与他的配置一样的数据库即可。打开Navicat Premium 12，新建数据库
![image.png](/javapreject/books7.png)
然后按照以下进行，点击确定即可。
![image.png](/javapreject/books8.png)
接下来运行sql脚本，也就是咱们解压之后的library.sql文件
![image.png](/javapreject/books9.png)
选中文件，然后点击开始。
![image.png](/javapreject/books10.png)
然后右键刷新一下表，双击打开表都是有数据的，如下：
![image.png](/javapreject/books11.png)
接下来咱进入idea打开db.properties配置一下数据库信息：
![image.png](/javapreject/books12.png)
接下来咱们配置Tomcat，按照如下顺序点击即可：
![image.png](/javapreject/books13.png)
配置tomcat，选择自己的tomcat目录，点击ok。
![image.png](/javapreject/books14.png)
点击配置用war包启动。
![image.png](/javapreject/books15.png)
![image.png](/javapreject/books16.png)
![image.png](/javapreject/books17.png)
以上呢，咱们就配置好tomcat了，有不明白的 大家回去看看【开发工具篇】里面的idea集成tomcat，里面都有解释的。接下来点击启动即可
![image.png](/javapreject/books18.png)
![image.png](/javapreject/books19.png)
启动成功，接下来咱们就来演示一下项目吧！！[http://localhost:8888/LibraryProject_war/login](http://localhost:8888/LibraryProject_war/login)
## 系统演示
![image.png](/javapreject/books20.png)
![image.png](/javapreject/books21.png)
![image.png](/javapreject/books22.png)
![image.png](/javapreject/books23.png)
![image.png](/javapreject/books24.png)
![image.png](/javapreject/books25.png)
![image.png](/javapreject/books26.png)
![image.png](/javapreject/books27.png)
![image.png](/javapreject/books28.png)
![image.png](/javapreject/books29.png)
![image.png](/javapreject/books30.png)

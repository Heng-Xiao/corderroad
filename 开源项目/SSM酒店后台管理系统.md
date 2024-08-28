# SSM酒店后台管理系统

源码获取请关注右侧微信公众号【<span style="font-weight: bold;text-align:left;font-size: 18px;color:#00bfff">程序猿代码之路</span>】后台回复【<span style="font-weight: bold;text-align:left;font-size: 18px;color:#00bfff">酒店后台管理SSM</span>】即可获取！


## 系统简介
信息化社会内需要与之针对性的信息获取途径，但是途径的扩展基本上为人们所努力的方向，由于站在的角度存在偏差，人们经常能够获得不同类型信息，这也是技术最为难以攻克的课题。针对酒店信息管理等问题，对酒店信息管理进行研究分析，然后开发设计出酒店管理系统以解决问题。

基于Spring+SpringMVC+MyBatis+LayUI的酒店后台管理系统，该系统的主要功能模块包括对住客，房间和会员信息管理，同时可以下载房间和会员信息的数据等模块，基本功能都已经达到目标，能够完整的实现一个酒店后台管理系统的功能。关注微信公众号后台回复获取源码：**酒店后台管理SSM**   下载下来之后就可以直接运行。
## 系统涉及

涉及技术 ：Spring+Spring MVC+MyBatis+JSP+Jquery+layUi
涉及环境 ：Jdk 1.8+Windows 10+MySql 5.7+Maven 3.5.2+Tomcat 9.0.5
涉及工具 : Navicat Premium 12 + idea 2020.0.3

## 系统运行
大家拿到的源码是如下这个样子的
![image.png](/javapreject/hotel1.png)
然后咱们进行解压得到如下：分别得到一个数据库文件和一个源代码文件夹。
![image.png](/javapreject/hotel2.png)
接下来咱们直接在idea里面打开/javapreject/hotel_Manage-master文件夹，注意：只到/javapreject/hotel_Manage-master文件夹，选择的时候会提示看到一个黑的框框如下所示：直接点击ok就行了。
![image.png](/javapreject/hotel3.png)
打开之后就会来到这了，大家第一次打开可能会很慢，他maven是在自动下载依赖的，所以就会特别慢。
![image.png](/javapreject/hotel4.png)
接下来咱们进入设置settings配置maven。如下
![image.png](/javapreject/hotel5.png)
配置好了大家可以重新刷新一下maven即可,如下所示：
![image.png](/javapreject/hotel6.png)
然后等待下载完依赖即可。咱们可以趁着这个时候新建数据库/javapreject/hotel，因为他的数据库配置文件里面写的是这个数据库名称，因此咱们新建一个与他的配置一样的数据库即可。打开Navicat Premium 12，新建数据库
![image.png](/javapreject/hotel7.png)
然后按照以下进行，点击确定即可。
![image.png](/javapreject/hotel8.png)
接下来运行sql脚本，也就是咱们解压之后的/javapreject/hotel.sql文件
![image.png](/javapreject/hotel9.png)
选中文件，然后点击开始。
![image.png](/javapreject/hotel10.png)
然后右键刷新一下表，双击打开表都是有数据的，如下：
![image.png](/javapreject/hotel11.png)
接下来咱进入idea打开jdbc.properties配置一下数据库信息：
![image.png](/javapreject/hotel12.png)
接下来咱们配置Tomcat，按照如下顺序点击即可：
![image.png](/javapreject/hotel13.png)
配置tomcat，选择自己的tomcat目录，点击ok。
![image.png](/javapreject/hotel14.png)
点击配置用war包启动。
![image.png](/javapreject/hotel15.png)
![image.png](/javapreject/hotel16.png)
![image.png](/javapreject/hotel17.png)
以上呢，咱们就配置好tomcat了，有不明白的大家回去看看【开发工具篇】里面的idea集成tomcat，里面都有解释的。接下来点击启动即可
![image.png](/javapreject/hotel18.png)
![image.png](/javapreject/hotel19.png)
启动成功，接下来咱们就来演示一下项目吧！！[http://localhost:8888/](http://localhost:8888/)
## 系统演示
![image.png](/javapreject/hotel20.png)
![image.png](/javapreject/hotel21.png)
![image.png](/javapreject/hotel22.png)
![image.png](/javapreject/hotel23.png)
![image.png](/javapreject/hotel24.png)
![image.png](/javapreject/hotel25.png)
![image.png](/javapreject/hotel26.png)
![image.png](/javapreject/hotel27.png)
![image.png](/javapreject/hotel28.png)
![image.png](/javapreject/hotel29.png)

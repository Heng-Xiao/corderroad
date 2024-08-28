# SSM医院预约挂号系统

源码获取请关注右侧微信公众号【<span style="font-weight: bold;text-align:left;font-size: 18px;color:#00bfff">程序猿代码之路</span>】后台回复【<span style="font-weight: bold;text-align:left;font-size: 18px;color:#00bfff">SSM医院预约挂号系统</span>】即可获取！

## 系统简介

随着医疗水平的提高，以及人们对于健康的观念越来越重视，出入医院成了一种常见的现象。而随着看病人数增多，经常出现挂号难的现象。一部分原因时号源有限，挂号人数多；另一方面是绝大多数人都选择线下取号。这就导致了医院当中排队的人数过多。本系统则是基于SSM技术开发的Web应用程序。通过Idea进行编程开发。之后通过MySQL构建数据库表。由Tomcat运行访问。传统的就诊方式则是纸质病历单，这难以保存，且文字显示不方便。而线上则可以快速查看数据，且永久保存在MySQL。线上预约就诊在很大程度上方便了人们看病。

医院预约挂号系统主要是为了提高工作人员的工作效率和更方便快捷的满足用户，更好存储所有数据信息及快速方便的检索功能，对系统的各个模块是通过许多今天的发达系统做出合理的分析来确定考虑用户的可操作性，遵循开发的系统优化的原则，经过全面的调查和研究。

系统所要实现的功能分析，对于现在网络方便的管理，系统要实现用户可以直接在平台上进行查看所有数据信息，根据需求可以进行在线添加，删除或修改医院预约挂号系统信息，这样既能节省时间，不用再像传统的方式耽误时间，真的很难去满足用户的各种需求。所以医院预约挂号系统的开发不仅能满足用户的需求，还能减少原有不必要的工作量，大大提高了管理员的工作效率。

功能模块：登录注册、医院挂号、科室挂号、医生挂号、意见反馈、最新公告、联系我们等等。

## 系统涉及
涉及技术 ：Spring+Spring MVC+MyBatis+JSP+Jquery
涉及环境 ：Jdk 1.8+Windows 10+MySql 5.7+Maven 3.5.2+Tomcat 9.0.5
涉及工具 : Navicat Premium 12 + idea 2020.0.3
## 系统运行
大家拿到的源码是如下这个样子的
![image.png](/javapreject/guahao2.png)
然后咱们进行解压得到如下：分别得到一个数据库文件和一个源代码文件夹。
![image.png](/javapreject/guahao3.png)
接下来咱们直接在idea里面打开ssm_pro文件夹，注意：只到ssm_pro文件夹，选择的时候会提示看到一个黑的框框如下所示：直接点击ok就行了。
![image.png](/javapreject/guahao4.png)
打开之后就会来到这了，大家第一次打开可能会很慢，他maven是在自动下载依赖的，所以就会特别慢。
![image.png](/javapreject/guahao5.png)
接下来咱们进入设置settings配置maven。如下
![](/javapreject/guahao6.png)
配置好了大家可以重新刷新一下maven即可,如下所示：
![image.png](/javapreject/guahao7.png)
然后等待下载完依赖即可。咱们可以趁着这个时候新建数据库hosdb，因为他的数据库配置文件里面写的是这个数据库名称，因此咱们新建一个与他的配置一样的数据库即可。打开Navicat Premium 12，新建数据库
![image.png](/javapreject/guahao8.png)
然后按照以下进行，点击确定即可。
![image.png](/javapreject/guahao9.png)
接下来运行sql脚本，也就是咱们解压之后的hospitaldb.sql文件
![image.png](/javapreject/guahao10.png)
选中文件，然后点击开始。
![image.png](/javapreject/guahao11.png)
然后刷新一下表，双击打开表都是有数据的，如下：
![image.png](/javapreject/guahao12.png)
接下来咱进入idea打开jdbc.properties配置一下数据库信息：
![image.png](/javapreject/guahao13.png)
接下来咱们配置Tomcat，按照如下顺序点击即可：
![image.png](/javapreject/guahao14.png)
配置tomcat，选择自己的tomcat目录，点击ok。
![image.png](/javapreject/guahao15.png)
点击配置用war包启动。
![image.png](/javapreject/guahao16.png)
![image.png](/javapreject/guahao17.png)
![image.png](/javapreject/guahao18.png)
以上呢，咱们就配置号tomcat了，有不明白的大家回去看看【开发工具篇】里面的idea集成tomcat，里面都有解释的。接下来点击启动即可
![image.png](/javapreject/guahao19.png)
![image.png](/javapreject/guahao20.png)
启动成功，接下来咱们就来演示一下项目吧！！
## 系统演示
![image.png](/javapreject/guahao21.png)
![image.png](/javapreject/guahao22.png)
![image.png](/javapreject/guahao23.png)
![image.png](/javapreject/guahao24.png)
![image.png](/javapreject/guahao25.png)
![image.png](/javapreject/guahao26.png)
![image.png](/javapreject/guahao27.png)
![image.png](/javapreject/guahao28.png)
![image.png](/javapreject/guahao29.png)
![image.png](/javapreject/guahao30.png)
![image.png](/javapreject/guahao31.png)
![image.png](/javapreject/guahao32.png)
![image.png](/javapreject/guahao33.png)
![image.png](/javapreject/guahao34.png)
![image.png](/javapreject/guahao35.png)

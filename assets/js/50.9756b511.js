(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{345:function(t,v,_){"use strict";_.r(v);var a=_(14),p=Object(a.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"网络爬虫之网络基础"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#网络爬虫之网络基础"}},[t._v("#")]),t._v(" 网络爬虫之网络基础")]),t._v(" "),v("p",[t._v("1、学会 python 的基础语法")]),t._v(" "),v("p",[t._v("2、学习python爬虫常用到的几个重要的内置库Requests，用于请求网页")]),t._v(" "),v("p",[t._v("3、学习正则表达 re 、Xpath(lxml)等网页解析工具")]),t._v(" "),v("p",[t._v("4、开始一些简单的网站爬取，了解爬取数据过程")]),t._v(" "),v("p",[t._v("5、了解爬虫的一些反爬机制，header,robot,代理ip,验证码等")]),t._v(" "),v("p",[t._v("6、了解爬虫与数据库的结合，如何将爬取数据进行存储")]),t._v(" "),v("p",[t._v("7、学习应用 python 的多线程，多进程进行爬取，提高爬虫效率。")]),t._v(" "),v("p",[t._v("8、学习爬虫的框架 Scrapy")]),t._v(" "),v("h1",{attrs:{id:"网络传输协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#网络传输协议"}},[t._v("#")]),t._v(" 网络传输协议")]),t._v(" "),v("p",[t._v("网络通信协议 tcp/ip")]),t._v(" "),v("h2",{attrs:{id:"osi七层参考模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#osi七层参考模型"}},[t._v("#")]),t._v(" OSI七层参考模型")]),t._v(" "),v("p",[t._v("高层：负责主机之间的数据传输（7,6,5）\n底层：负责网络数据传输（3,2,1）")]),t._v(" "),v("p",[t._v("7、应用层（提供应用程序间通信）\n6、表示层（处理数据格式、数据加密）\n5、会话层（建立、维护和管理会话）\n4、传输层（建立主机端到端连接，电脑里面的应用）\n3、网络层（寻址和路由选择）\n2、数据链路层（提供介质访问，链路管理等，网卡）\n1、物理层（比特流传输，网线）")]),t._v(" "),v("h2",{attrs:{id:"tcp-ip-协议栈"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp-ip-协议栈"}},[t._v("#")]),t._v(" TCP/IP 协议栈")]),t._v(" "),v("p",[t._v("应用层（提供应用程序网络接口）\n传输层（建立端到端的连接）\n网络层（寻址和路由选择）\n数据链路层（物理介质访问）\n物理层（二进制数据流传输）")]),t._v(" "),v("p",[t._v("各层实现的协议：")]),t._v(" "),v("p",[t._v("应用层：\nHTTP:超文本传输协议，基于TCP,使用端口80\nSMTP:简单邮件传输协议，基于TCP,使用25端口\nFTP:文件传输协议，基于TCP,数据端口20，控制端口21\nTELNET:远程登陆协议，基于TCP,使用23端口\nDNS:域名解析，基于UDP,使用53号端口\nSSH:安全外壳协议，基于TCP,使用22端口")]),t._v(" "),v("p",[t._v("传输层：\nTCP:传输控制协议，一种面向连接的，可靠的，基于字节流的传输层通信协议。\nUDP:用户数据报协议，一种面向无连接的通讯协议，不可靠的，基于报文的传输层通信协议。\nSCTP:流量传输控制协议，一种面向连接的传输协议\nMPTCP:多路径传输控制协议")]),t._v(" "),v("p",[t._v("网络层：\nIP:internet协议。\nICMP:internet控制报文协议。用于在主机、路由器之间传递控制消息，检测网络痛不痛，主机是否可达、路由是否可用等网络本身的消息。\nARP:地址解析协议，通过目标设备的IP地址，查询目标设备的MAC地址，以保证通信的顺序进行。\nRARP:反向地址解析协议。")]),t._v(" "),v("h3",{attrs:{id:"http请求格式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http请求格式"}},[t._v("#")]),t._v(" HTTP请求格式")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("请求行：请求方法，请求URI,http-version,CRLF(换行)")])]),t._v(" "),v("li",[v("p",[t._v("消息报头: 包含一系列的键值对")])]),t._v(" "),v("li",[v("p",[t._v("请求正文（正文）：注意喝消息报头之间有一个空行")])])]),t._v(" "),v("h3",{attrs:{id:"请求方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#请求方法"}},[t._v("#")]),t._v(" 请求方法")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("get")])]),t._v(" "),v("li",[v("p",[t._v("post")])]),t._v(" "),v("li",[v("p",[t._v("put")])]),t._v(" "),v("li",[v("p",[t._v("delete")])]),t._v(" "),v("li",[v("p",[t._v("head")])]),t._v(" "),v("li",[v("p",[t._v("options")])])]),t._v(" "),v("h3",{attrs:{id:"http响应格式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http响应格式"}},[t._v("#")]),t._v(" HTTP响应格式")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("状态行：http版本，状态码，状态描述，以空格分隔")])]),t._v(" "),v("li",[v("p",[t._v("响应头：消息报头，包含一系列的键值对")])]),t._v(" "),v("li",[v("p",[t._v("响应正文：返回内容，注意和响应头之间有一个空行")])])]),t._v(" "),v("h3",{attrs:{id:"http状态码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http状态码"}},[t._v("#")]),t._v(" HTTP状态码")]),t._v(" "),v("p",[t._v("1xx 请求已被服务接手，继续处理")]),t._v(" "),v("p",[t._v("2xx 请求已成功被服务器接收，理解、并接受")]),t._v(" "),v("p",[t._v("3xx 重定向")]),t._v(" "),v("p",[t._v("4xx 请求错误")]),t._v(" "),v("p",[t._v("5xx 服务器错误")]),t._v(" "),v("h3",{attrs:{id:"宏观解析http数据流的传输过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#宏观解析http数据流的传输过程"}},[t._v("#")]),t._v(" 宏观解析HTTP数据流的传输过程")]),t._v(" "),v("p",[t._v("1、打开浏览器，输入网址")]),t._v(" "),v("p",[t._v("2、浏览器先尝试从 host 文件中获取的刚输入的网址对应的IP地址，如果能取到则直接使用 hosts 文件的解析结果。")]),t._v(" "),v("p",[t._v("3、如果不能，就是用DNS协议来获取IP地址，在DNS协议中，PC会想你的本地DNS服务器求助，请求DNS服务器之后，得到IP地址。")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("ipconfig /all\n")])])]),v("p",[t._v("4、浏览器会请求获得的IP地址对应的服务器，web服务器收到请求并做响应处理，将请求的内容返回给客户端浏览器。")]),t._v(" "),v("p",[t._v("5、浏览器收到回复，是以html形式的文本，并渲染出来。")]),t._v(" "),v("h3",{attrs:{id:"微观解析-http数据流的传输过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#微观解析-http数据流的传输过程"}},[t._v("#")]),t._v(" 微观解析 HTTP数据流的传输过程")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("域名解析")])]),t._v(" "),v("li",[v("p",[t._v("建立连接（TCP三次握手）")])])]),t._v(" "),v("p",[t._v("客户端发送数据包，问服务器我可以和你建立连接吗？\n服务端收到数据包，回答可以啊\n客户端就与服务器建立连接")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("发送http请求")])]),t._v(" "),v("li",[v("p",[t._v("断开连接（TCP的四次挥手）")])])]),t._v(" "),v("p",[t._v("客户端发送数据包告诉服务器：我没什么要请求的了，但我还可以接收你的回复，如果没什么回复的话，可以断开连接吗？")]),t._v(" "),v("p",[t._v("服务端收到数据包说：我没什么回复了，可以关闭连接了，但我还没准备好，等一下我告诉你吧")]),t._v(" "),v("p",[t._v("服务端向客服端发送数据包：我准备好关闭连接了。")]),t._v(" "),v("p",[t._v("客户端发送关闭连接的数据包。")])])}),[],!1,null,null,null);v.default=p.exports}}]);
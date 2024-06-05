(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{313:function(e,a,t){"use strict";t.r(a);var s=t(14),c=Object(s.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"memcached-简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#memcached-简介"}},[e._v("#")]),e._v(" Memcached 简介")]),e._v(" "),a("p",[e._v("Memcached 是一个自由开源，高性能，分布式内存对象缓存系统。它是一种基于内存的 key-value 存储。")]),e._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[e._v("#")]),e._v(" 安装")]),e._v(" "),a("h3",{attrs:{id:"自动安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动安装"}},[e._v("#")]),e._v(" 自动安装")]),e._v(" "),a("p",[e._v("ubuntu 系统")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo apt-get install memcached\n")])])]),a("p",[e._v("centos 系统")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("yum install memcached\n")])])]),a("p",[e._v("安装完之后可以使用 whereis 查看命令的途径")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# 发现安装位置在 /usr/bin/memcached\nwhereis memcached\n")])])]),a("h3",{attrs:{id:"源码安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#源码安装"}},[e._v("#")]),e._v(" 源码安装")]),e._v(" "),a("p",[e._v("从其官方网站 "),a("a",{attrs:{href:"http://memcached.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://memcached.org"),a("OutboundLink")],1),e._v(" 下载 memcached 最新版本。")]),e._v(" "),a("div",{staticClass:"language-ssh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\n# 下载最新版本\nwget http://memcached.org/latest\n\n# 解压\ntar -zxvf memcached-1.x.x.tar.gz\n\n# 进入目录\ncd memcached-1.x.x\n\n# 配置\n./configure --prefix=/usr/local/memcached\n\n# 编译\nmake && make test \n\n# 安装\nsudo make install\n\n")])])]),a("p",[e._v("注意：memcached 的配置文件位于 "),a("code",[e._v("/etc/memcached.conf")])]),e._v(" "),a("h2",{attrs:{id:"运行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行"}},[e._v("#")]),e._v(" 运行")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# 命令帮助\n/usr/bin/memcached -h\n")])])]),a("p",[e._v("启动选项：")]),e._v(" "),a("p",[e._v("-d 是启动一个守护进程")]),e._v(" "),a("p",[e._v("-m 是分配给 Memcache 使用的内存数量，单位是MB")]),e._v(" "),a("p",[e._v("-u 是运行 Memcache 的用户")]),e._v(" "),a("p",[e._v("-l 是监听的服务器IP地址，可以有多个地址")]),e._v(" "),a("p",[e._v("-p 是设置 Memcache 监听的端口，最好是1024以上的端口")]),e._v(" "),a("p",[e._v("-c 是最大运行的并发连接数，默认是1024")]),e._v(" "),a("p",[e._v("-P 是设置保存 Memcache 的 pid 文件")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# 后台运行\n/usr/bin/memcached -p 11211 -m 64m -d\n\n# 查看运行状态\nsudo service memcached status\nsudo systemctl status memcached\n\n# 查看 memcached 进程\nps -ef | grep memcached\n\n")])])]),a("h2",{attrs:{id:"可视化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可视化"}},[e._v("#")]),e._v(" 可视化")]),e._v(" "),a("p",[a("a",{attrs:{href:"http://www.treesoft.cn/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("treeNMS"),a("OutboundLink")],1),e._v(" 是一个国产的采用 JAVA 开发，基于 WEB 方式对 Memcached 进行管理的可视化工具。")])])}),[],!1,null,null,null);a.default=c.exports}}]);
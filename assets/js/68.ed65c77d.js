(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{350:function(e,s,t){"use strict";t.r(s);var r=t(14),a=Object(r.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"redis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis"}},[e._v("#")]),e._v(" Redis")]),e._v(" "),s("p",[e._v("Redis是一个跨平台高性能的键值对非关系型数据库，常用于缓存、消息队列、会话存储等应用场景。它拥有不限于以下特点：")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("丰富的数据类型：不仅支持简单的key-value,还有string,hash,list,set,zset,json等数据结构")])]),e._v(" "),s("li",[s("p",[e._v("高性能的读写能力：读的速度是 110000次/s，写的速度是 81000次/s")])]),e._v(" "),s("li",[s("p",[e._v("原子性操作")])]),e._v(" "),s("li",[s("p",[e._v("持久化机制")])])]),e._v(" "),s("h2",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[e._v("#")]),e._v(" 安装")]),e._v(" "),s("p",[e._v("官方提供的安装步骤："),s("a",{attrs:{href:"https://redis.io/docs/latest/get-started/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://redis.io/docs/latest/get-started/"),s("OutboundLink")],1),e._v("。")]),e._v(" "),s("h3",{attrs:{id:"源码安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#源码安装"}},[e._v("#")]),e._v(" 源码安装")]),e._v(" "),s("p",[e._v("如果需要安装指定版本的话，需要在 "),s("a",{attrs:{href:"https://github.com/redis/redis-hashes",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/redis/redis-hashes"),s("OutboundLink")],1),e._v(" 获取指定版本的源码地址。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("# 下载最新稳定的源码 \nwget https://download.redis.io/redis-stable.tar.gz\n\n# 解压\ntar -xzvf redis-stable.tar.gz\n\n# 进入目录\ncd redis-stable\n\n# 编译\nmake\n\n# 安装\nsudo make install\n\n")])])]),s("p",[e._v("需要注意的是在编译之后，会在源码的 src 目录下包含两个文件: redis 服务程序 "),s("code",[e._v("redis-server")]),e._v(" 和客户端命令行程序 "),s("code",[e._v("redis-cli")]),e._v("。")]),e._v(" "),s("p",[e._v("还有就是为了安装这些二进制文件到 /usr/local/bin 目录下执行的编译安装命令 "),s("code",[e._v("sudo make install")]),e._v("。")]),e._v(" "),s("p",[e._v("redis.conf 是一个默认的配置文件。我们可以根据需要使用自己的配置文件。")]),e._v(" "),s("h3",{attrs:{id:"在-ubuntu-上安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在-ubuntu-上安装"}},[e._v("#")]),e._v(" 在 ubuntu 上安装")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('# 安装相关的依赖包\nsudo apt install lsb-release curl gpg\n\n\n# 更新仓库索引\ncurl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg\n\necho "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list\n\nsudo apt-get update\n\n# 安装 redis\nsudo apt-get install redis\n\n')])])]),s("h2",{attrs:{id:"可视化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#可视化"}},[e._v("#")]),e._v(" 可视化")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/RedisInsight/RedisDesktopManager/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("RedisDesktopManager"),s("OutboundLink")],1),e._v(" 是一个 Redis 的可视化管理工具")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/qishibo/AnotherRedisDesktopManager/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("Another Redis Desktop Manager"),s("OutboundLink")],1),e._v("，如果出现连接错误，可根据报错信息，自行百度解决。")])])}),[],!1,null,null,null);s.default=a.exports}}]);
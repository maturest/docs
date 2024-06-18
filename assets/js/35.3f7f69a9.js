(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{309:function(o,t,n){"use strict";n.r(t);var a=n(14),v=Object(a.a)({},(function(){var o=this,t=o._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[t("h1",{attrs:{id:"mongodb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mongodb"}},[o._v("#")]),o._v(" Mongodb")]),o._v(" "),t("p",[o._v("Mongodb 是一个流行的开源文档型数据库，它使用类似 JSON 的文档模型存储数据，这使得数据存储变得非常灵活。非常适合处理大量的半结构化或非结构化数据。")]),o._v(" "),t("h2",{attrs:{id:"mongodb-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-安装"}},[o._v("#")]),o._v(" Mongodb 安装")]),o._v(" "),t("p",[o._v("针对不同的系统和不同的版本，可以在官网进行选择下载："),t("a",{attrs:{href:"https://www.mongodb.com/try/download/community",target:"_blank",rel:"noopener noreferrer"}},[o._v("https://www.mongodb.com/try/download/community"),t("OutboundLink")],1)]),o._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[o._v("# 下载\nwget https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-ubuntu1604-4.2.8.tgz   \n\n# 解压\ntar -zxvf mongodb-linux-x86_64-ubuntu1604-4.2.8.tgz                                    \n\n# 将解压包拷贝到指定目录\nmv mongodb-src-r4.2.8  /usr/local/mongodb4    \n\n# MongoDB 的可执行文件位于 bin 目录下，可以将其添加到 PATH 路径中\nexport PATH=/usr/local/mongodb4/bin:$PATH\n\n")])])]),t("p",[o._v("默认情况下 MongoDB 启动后会初始化以下两个目录：")]),o._v(" "),t("ul",[t("li",[t("p",[o._v("数据存储目录：/var/lib/mongodb")])]),o._v(" "),t("li",[t("p",[o._v("日志文件目录：/var/log/mongodb")])])]),o._v(" "),t("p",[o._v("我们在启动前可以先创建这两个目录并设置当前用户有读写权限：")]),o._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[o._v("# 创建目录\nsudo mkdir -p /var/lib/mongodb\nsudo mkdir -p /var/log/mongodb\n\n# 设置权限\nsudo chown `whoami` /var/lib/mongodb   \nsudo chown `whoami` /var/log/mongodb   \n")])])]),t("p",[o._v("启动服务：")]),o._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[o._v("mongod --dbpath /var/lib/mongodb --logpath /var/log/mongodb/mongod.log --fork\n")])])]),t("p",[o._v("关闭服务：")]),o._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[o._v("mongod --dbpath /var/lib/mongo --logpath /var/log/mongodb/mongod.log --shutdown\n")])])]),t("p",[o._v("对比一下关系型数据库，更容易理解概念：")]),o._v(" "),t("table",[t("thead",[t("tr",[t("th",[o._v("sql")]),o._v(" "),t("th",[o._v("mongodb")]),o._v(" "),t("th",[o._v("说明")])])]),o._v(" "),t("tbody",[t("tr",[t("td",[o._v("database")]),o._v(" "),t("td",[o._v("database")]),o._v(" "),t("td",[o._v("数据库")])]),o._v(" "),t("tr",[t("td",[o._v("table")]),o._v(" "),t("td",[o._v("collection")]),o._v(" "),t("td",[o._v("数据表/集合")])]),o._v(" "),t("tr",[t("td",[o._v("row")]),o._v(" "),t("td",[o._v("document")]),o._v(" "),t("td",[o._v("行/文档")])]),o._v(" "),t("tr",[t("td",[o._v("column")]),o._v(" "),t("td",[o._v("field")]),o._v(" "),t("td",[o._v("数据字段/域")])]),o._v(" "),t("tr",[t("td",[o._v("index")]),o._v(" "),t("td",[o._v("index")]),o._v(" "),t("td",[o._v("索引")])]),o._v(" "),t("tr",[t("td",[o._v("tables joins")]),o._v(" "),t("td"),o._v(" "),t("td",[o._v("表连接，mongodb不支持")])]),o._v(" "),t("tr",[t("td",[o._v("primary key")]),o._v(" "),t("td",[o._v("primary key")]),o._v(" "),t("td",[o._v("主键，mongodb自动将_id字段设为主键")])])])]),o._v(" "),t("h2",{attrs:{id:"可视化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#可视化"}},[o._v("#")]),o._v(" 可视化")]),o._v(" "),t("p",[o._v("NoSQLBooster："),t("a",{attrs:{href:"https://nosqlbooster.com/home",target:"_blank",rel:"noopener noreferrer"}},[o._v("NoSQLBooster"),t("OutboundLink")],1),o._v(" 是一款跨平台的MongoDB管理工具，支持Windows、Linux和Mac OS X。它提供了丰富的功能，如智能查询、数据导入导出、数据迁移等。")]),o._v(" "),t("p",[o._v("需要注意的是连接的IP地址是：192.168.56.57（本地开发环境的IP地址），端口为 27017，另外 homestead 的开发环境默认的用户名为 "),t("code",[o._v("homestead")]),o._v("，密码为 "),t("code",[o._v("secret")]),o._v("。")])])}),[],!1,null,null,null);t.default=v.exports}}]);
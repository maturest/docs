(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{314:function(t,a,n){"use strict";n.r(a);var e=n(14),s=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"php-mongoddb-扩展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#php-mongoddb-扩展"}},[t._v("#")]),t._v(" PHP MongodDB 扩展")]),t._v(" "),a("h2",{attrs:{id:"安装扩展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装扩展"}},[t._v("#")]),t._v(" 安装扩展")]),t._v(" "),a("p",[t._v("安装扩展的方式有很多种，具体请参考官方提供的方式进行安装 "),a("a",{attrs:{href:"https://www.php.net/manual/zh/set.mongodb.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.php.net/manual/zh/set.mongodb.php"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"在终端上安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在终端上安装"}},[t._v("#")]),t._v(" 在终端上安装")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 安装扩展\nsudo pecl install mongodb\n")])])]),a("p",[a("strong",[t._v("注意：使用php的pecl安装命令必须保证网络连接可用以及root权限。")])]),t._v(" "),a("h3",{attrs:{id:"通过源码编译安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过源码编译安装"}},[t._v("#")]),t._v(" 通过源码编译安装")]),t._v(" "),a("p",[t._v("可以在 PHP 官网上下载 MongoDB PHP 驱动包,下载地址："),a("a",{attrs:{href:"http://pecl.php.net/package/mongodb",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://pecl.php.net/package/mongodb"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[t._v("以下步骤假设是编译在 /usr/local/php 目录中：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 下载源码\nwget http://pecl.php.net/get/mongodb-1.5.2.tgz\n\n# 解压\ntar -zxvf mongodb-1.5.2.tgz\n\n# 进入目录\ncd mongodb-1.5.2\n\n# 准备编译环境以及构建和安装PHP扩展\n/usr/local/php/bin/phpize\n\n# 配置\n./configure --with-php-config=/usr/local/php/bin/php-config\n\n# 编译安装\nmake && make install\n\n")])])]),a("p",[t._v("安装成功后会显示你的 mongodb.so 扩展的位置，比如我的：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Installing shared extensions:      /usr/lib/php/extensions/debug-non-zts-20240530/\n")])])]),a("p",[t._v("需要修改 php.ini 文件，在 php.ini 文件中添加 mongodb 配置，配置如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("extension_dir=/usr/lib/php/extensions/debug-non-zts-20240530/\nextension=mongodb.so\n")])])]),a("p",[t._v("重新启动 php")]),t._v(" "),a("div",{staticClass:"language-ssh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sudo systemctl restart php-fpm\n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);
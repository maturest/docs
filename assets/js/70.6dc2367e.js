(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{355:function(e,s,t){"use strict";t.r(s);var r=t(14),p=Object(r.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"php-redis-扩展"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#php-redis-扩展"}},[e._v("#")]),e._v(" PHP Redis 扩展")]),e._v(" "),s("p",[e._v("在 php 中使用 redis 前，需要确保已经安装了 redis 服务和 redis 驱动。")]),e._v(" "),s("h2",{attrs:{id:"安装驱动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装驱动"}},[e._v("#")]),e._v(" 安装驱动")]),e._v(" "),s("p",[e._v("安装 phpredis 驱动下载地址为:"),s("a",{attrs:{href:"https://github.com/phpredis/phpredis/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/phpredis/phpredis/releases"),s("OutboundLink")],1),e._v("。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("# 下载源码\nwget https://github.com/phpredis/phpredis/archive/3.1.4.tar.gz\n\n# 解压\ntar zxvf 3.1.4.tar.gz   \n\n# 进入 phpredis 目录               \ncd phpredis-3.1.4          \n\n# php安装后的路径            \n/usr/local/php/bin/phpize   \n\n# 配置\n./configure --with-php-config=/usr/local/php/bin/php-config\n\n# 安装\nmake && make install\n\n")])])]),s("p",[e._v("安装成功后将扩展添加到 php.ini 配置文件当中，之后再重启 php-fpm，查看是否成功安装 phpredis 扩展。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('extension_dir = "/usr/local/php/lib/php/extensions/no-debug-zts-20090626"\n\nextension=redis.so\n\n')])])]),s("p",[e._v("在 PHP 项目中，怎么使用呢，可以参考官方文档进行操作："),s("a",{attrs:{href:"https://phpredis.github.io/phpredis/Redis.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://phpredis.github.io/phpredis/Redis.html"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=p.exports}}]);
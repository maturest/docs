(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{306:function(t,a,s){"use strict";s.r(a);var e=s(14),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"php-使用-memcached-服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#php-使用-memcached-服务"}},[t._v("#")]),t._v(" PHP 使用 Memcached 服务")]),t._v(" "),a("h2",{attrs:{id:"安装-php-memcache-扩展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-php-memcache-扩展"}},[t._v("#")]),t._v(" 安装 PHP Memcache 扩展")]),t._v(" "),a("h3",{attrs:{id:"安装扩展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装扩展"}},[t._v("#")]),t._v(" 安装扩展")]),t._v(" "),a("p",[t._v("搜索扩展包并安装，下载地址："),a("a",{attrs:{href:"http://pecl.php.net/package/memcache",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://pecl.php.net/package/memcache"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-ssh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\n# 下载安装包\nwget http://pecl.php.net/get/memcache-2.2.7.tgz \n\n# 解压\ntar -zxvf memcache-2.2.7.tgz \n\n# 进入目录\ncd memcache-2.2.7\n\n# 准备编译环境以及构建和安装PHP扩展\n/usr/local/php/bin/phpize\n\n# 配置\n./configure --with-php-config=/usr/local/php/bin/php-config\n\n# 编译安装\nmake && make install\n\n")])])]),a("p",[a("strong",[t._v("注意：/usr/local/php/ 为php的安装路径，需要根据你安装的实际目录调整。")])]),t._v(" "),a("p",[t._v("安装成功后会显示你的 memcache.so 扩展的位置，比如我的：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Installing shared extensions:     /usr/local/php/lib/php/extensions/no-debug-non-zts-20090626/\n")])])]),a("h3",{attrs:{id:"添加扩展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加扩展"}},[t._v("#")]),t._v(" 添加扩展")]),t._v(" "),a("p",[t._v("打开 php.ini 文件，在最后添加以下内容")]),t._v(" "),a("div",{staticClass:"language-ssh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('\n[Memcache]\nextension_dir = "/usr/local/php/lib/php/extensions/no-debug-non-zts-20090626/"\nextension = memcache.so\n\n')])])]),a("p",[t._v("重新启动 php")]),t._v(" "),a("div",{staticClass:"language-ssh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sudo systemctl restart php-fpm\n")])])]),a("p",[t._v("打印 "),a("code",[t._v("phpinfo()")]),t._v(" 查看 memcache 扩展")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://pic.imgdb.cn/item/66505106d9c307b7e962a01f.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"连接-memached"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#连接-memached"}},[t._v("#")]),t._v(" 连接 Memached")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$memcache")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Memcache")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("             "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//创建一个memcache对象")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$memcache")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("connect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'localhost'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11211")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("or")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("die")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"Could not connect"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//连接Memcached服务器")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$memcache")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'key'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'test'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置一个变量到内存中，名称是key 值是test")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$get_value")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$memcache")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'key'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//从内存中取出key的值")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$get_value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{291:function(s,t,a){"use strict";a.r(t);var o=a(14),e=Object(o.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"更换项目依赖的镜像源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更换项目依赖的镜像源"}},[s._v("#")]),s._v(" 更换项目依赖的镜像源")]),s._v(" "),t("p",[s._v("composer 在安装时会在 "),t("code",[s._v("composer.lock")]),s._v(" 文件中写入扩展包的下载地址。")]),s._v(" "),t("h2",{attrs:{id:"如何更换-composer-lock-文件里的下载地址为新的镜像源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何更换-composer-lock-文件里的下载地址为新的镜像源"}},[s._v("#")]),s._v(" 如何更换 "),t("code",[s._v("composer.lock")]),s._v(" 文件里的下载地址为新的镜像源？")]),s._v(" "),t("ol",[t("li",[s._v("配置新的镜像")])]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("刷新 composer.lock 文件")])]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("composer update --lock\n")])])]),t("blockquote",[t("p",[s._v("--lock：只升级 lock 文件的哈希以消除 lock 文件过期的警告。")])]),s._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[s._v("测试一下")])]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("rm -rf vendor\ncomposer clear-cache\ncomposer install -vvv\n")])])]),t("p",[s._v("注意：线上环境不需要删除 vendor 文件夹，重新下载。只是更新了下载链接，代码包连哈希都是一样，无需重新下载。")])])}),[],!1,null,null,null);t.default=e.exports}}]);
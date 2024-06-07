(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{290:function(a,s,t){"use strict";t.r(s);var r=t(14),e=Object(r.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"composer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#composer"}},[a._v("#")]),a._v(" Composer")]),a._v(" "),s("h2",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),s("ol",[s("li",[a._v("下载 composer")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("curl -sS https://getcomposer.org/installer | php\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[a._v("将 composer.phar 移动到 /usr/local/bin 目录，以便全局使用 composer 命令")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("mv composer.phar /usr/local/bin/composer\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[a._v("切换国内镜像源")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/\n")])])]),s("ol",{attrs:{start:"4"}},[s("li",[a._v("验证安装")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("composer -V\n")])])]),s("ol",{attrs:{start:"5"}},[s("li",[a._v("composer 多线程下载加速（全局安装）")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("composer global require hirak/prestissimo\n")])])]),s("h2",{attrs:{id:"升级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#升级"}},[a._v("#")]),a._v(" 升级")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("composer")]),a._v(" self-update\n")])])]),s("h2",{attrs:{id:"镜像源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#镜像源"}},[a._v("#")]),a._v(" 镜像源")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("平台")]),a._v(" "),s("th",[a._v("镜像")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("阿里云")]),a._v(" "),s("td",[a._v("https://mirrors.aliyun.com/composer/")])]),a._v(" "),s("tr",[s("td",[a._v("腾讯")]),a._v(" "),s("td",[a._v("https://mirrors.cloud.tencent.com/composer/")])]),a._v(" "),s("tr",[s("td",[a._v("华为")]),a._v(" "),s("td",[a._v("https://mirrors.huaweicloud.com/repository/php/")])])])]),a._v(" "),s("h3",{attrs:{id:"镜像源配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#镜像源配置"}},[a._v("#")]),a._v(" 镜像源配置")]),a._v(" "),s("h4",{attrs:{id:"全局配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局配置"}},[a._v("#")]),a._v(" 全局配置")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("// 所有项目使用镜像\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("composer")]),a._v(" config "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-g")]),a._v(" repo.packagist "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("composer")]),a._v(" https://mirrors.aliyun.com/composer/\n\n// 取消配置\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("composer")]),a._v(" config "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-g")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--unset")]),a._v(" repos.packagist\n")])])]),s("h4",{attrs:{id:"项目配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目配置"}},[a._v("#")]),a._v(" 项目配置")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("// 修改当前项目配置\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("composer")]),a._v(" config repo.packagist "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("composer")]),a._v(" https://mirrors.aliyun.com/composer/\n\n// 取消配置\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("composer")]),a._v(" config "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--unset")]),a._v(" repos.packagist\n\n")])])]),s("h4",{attrs:{id:"切换镜像源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#切换镜像源"}},[a._v("#")]),a._v(" 切换镜像源")]),a._v(" "),s("p",[a._v("清除缓存")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("composer")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("clear")]),a._v("\n")])])]),s("p",[a._v("若项目之前已通过其他源安装，则需要更新 composer.lock 文件，执行命令：")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("composer")]),a._v(" update "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--lock")]),a._v("\n")])])]),s("h2",{attrs:{id:"使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[a._v("#")]),a._v(" 使用")]),a._v(" "),s("h3",{attrs:{id:"安装依赖包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖包"}},[a._v("#")]),a._v(" 安装依赖包")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("composer")]),a._v(" require "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("packages"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\n// 安装指定版本软件包，参数 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--dev")]),a._v(" 是指定此扩展包只在开发环境中使用。\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("composer")]),a._v(" require laravel/ui:3.4.5 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--dev")]),a._v("\n\n// 安装 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3.6")]),a._v(" 并且 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4.0")]),a._v(" 的版本\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("composer")]),a._v(" require maturest/trigram:~3.6\n\n// "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("composer")]),a._v(" 安装时 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--dev")]),a._v(" 参数指明只在开发环境中使用，如果在生产环境中可以使用以下命令排除这些扩展包的安装\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("composer")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" --no-dev\n\n")])])]),s("h3",{attrs:{id:"切换以-path-的方式加载私有包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#切换以-path-的方式加载私有包"}},[a._v("#")]),a._v(" 切换以 PATH 的方式加载私有包")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("composer config repositories.trigram path ../trigram\ncomposer require maturest/trigram\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);
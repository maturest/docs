(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{297:function(a,t,e){"use strict";e.r(t);var s=e(14),r=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"homestead-的使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#homestead-的使用"}},[a._v("#")]),a._v(" Homestead 的使用")]),a._v(" "),t("h2",{attrs:{id:"安装-homestead"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-homestead"}},[a._v("#")]),a._v(" 安装 Homestead")]),a._v(" "),t("p",[a._v("参考官方文档 "),t("a",{attrs:{href:"https://learnku.com/docs/laravel-development-environment/9.x/development-environment-windows/12323",target:"_blank",rel:"noopener noreferrer"}},[a._v("Homestead"),t("OutboundLink")],1)]),a._v(" "),t("h2",{attrs:{id:"使用技巧"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用技巧"}},[a._v("#")]),a._v(" 使用技巧")]),a._v(" "),t("h3",{attrs:{id:"windows-免密登录虚拟机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows-免密登录虚拟机"}},[a._v("#")]),a._v(" windows 免密登录虚拟机")]),a._v(" "),t("p",[a._v("1、安装 Git For Windows")]),a._v(" "),t("p",[a._v("2、主机生成 SSH Key")]),a._v(" "),t("p",[a._v("3、配置信息")]),a._v(" "),t("p",[a._v("在 homestead.yaml 文件中更改配置信息，authorize 填写主机公钥文件路径，虚拟机初始化时，会被复制到虚拟机的 /home/vagrant/.ssh/authorized_keys 文件中，从而实现 SSH 免密码登录。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("authorize: ~/.ssh/id_rsa.pub\n")])])]),t("h3",{attrs:{id:"删除-homestead-box"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除-homestead-box"}},[a._v("#")]),a._v(" 删除 Homestead Box")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("vagrant box list\n\n# 删除指定版本的盒子\nvagrant box remove laravel/homestead --box-version 6.0.0\n")])])]),t("h3",{attrs:{id:"使用密码登录虚拟机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用密码登录虚拟机"}},[a._v("#")]),a._v(" 使用密码登录虚拟机")]),a._v(" "),t("p",[a._v("Homestead 中默认创建了用户 "),t("code",[a._v("vagrant")]),a._v(" ,密码是 "),t("code",[a._v("vagrant")]),a._v(" 。")]),a._v(" "),t("p",[a._v("使用 "),t("code",[a._v("sudo passwd root")]),a._v(" ,生成 root 密码: "),t("code",[a._v("vagrant")]),a._v(" 。")]),a._v(" "),t("p",[a._v("如果使用 Public Key 认证登录，可使用如下命令：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("ssh vagrant@127.0.0.1 -p 2222 -o PubkeyAuthentication=no -vvv \n")])])]),t("h3",{attrs:{id:"设置-cron-计划任务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置-cron-计划任务"}},[a._v("#")]),a._v(" 设置 Cron 计划任务")]),a._v(" "),t("p",[a._v("在 homestead.yaml 文件中更改配置信息")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("sites:\n    - map: homestead.test\n      to: /home/vagrant/project1/public\n      schedule: true\n")])])]),t("p",[t("strong",[a._v("站点的 Cron 作业将被定义在虚拟机的 /etc/cron.d 目录中。")])]),a._v(" "),t("h3",{attrs:{id:"切换php版本-cli命令行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#切换php版本-cli命令行"}},[a._v("#")]),a._v(" 切换PHP版本（Cli命令行）")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("sudo update-alternatives --config php\n")])])]),t("h3",{attrs:{id:"切换php版本-php-fpm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#切换php版本-php-fpm"}},[a._v("#")]),a._v(" 切换PHP版本（PHP-FPM）")]),a._v(" "),t("p",[a._v("在 homestead.yaml 文件中更改配置信息")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("sites:\n    - map: homestead.test\n      to: /home/vagrant/project1/public\n      php: '7.3'\n")])])]),t("p",[t("strong",[a._v("站点的 nginx 配置文件在 /etc/nginx/sites-available/ 目录中")])])])}),[],!1,null,null,null);t.default=r.exports}}]);
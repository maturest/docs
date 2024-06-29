(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{345:function(a,t,s){"use strict";s.r(t);var n=s(14),e=Object(n.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"liunx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#liunx"}},[a._v("#")]),a._v(" Liunx")]),a._v(" "),t("p",[a._v("Linux 是一个通用的操作系统，操作系统通常由内核（运行其他程序，管理像磁盘、打印机等硬件设备的核心程序）和系统程序（设备驱动，底层库，shell，服务程序等）两部分组成。")]),a._v(" "),t("h3",{attrs:{id:"基础命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基础命令"}},[a._v("#")]),a._v(" 基础命令")]),a._v(" "),t("p",[a._v("linux系统的命令通常都是如下所示的格式：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("命令名称 [命令参数] [命令对象]\n")])])]),t("p",[a._v("1、获取登录信息- w / who / last / lastb")]),a._v(" "),t("p",[a._v("2、查看自己使用的shell- ps")]),a._v(" "),t("p",[a._v("3、查看命令的说明和位置- whatis / which / whereis")]),a._v(" "),t("p",[a._v("另外还有查看命令的位置，例如：command -v php\n如果是符号链接，查看指向哪里，例如：ls -l /usr/bin/php")]),a._v(" "),t("p",[a._v("4、清除屏幕上线上的内容- clear")]),a._v(" "),t("p",[a._v("5、查看帮助文档- man / info / --help / apropos")]),a._v(" "),t("p",[a._v("6、查看系统和主机名- uname / hostname")]),a._v(" "),t("p",[a._v("另外还有查看操作系统详细信息：cat /etc/os-release")]),a._v(" "),t("p",[a._v("7、时间和日期- date / cal")]),a._v(" "),t("p",[a._v("8、重启和关机- reboot / shutdown")]),a._v(" "),t("p",[a._v("9、退出登录- exit / logout")]),a._v(" "),t("p",[a._v("10、查看历史命令- history")]),a._v(" "),t("h3",{attrs:{id:"实用程序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实用程序"}},[a._v("#")]),a._v(" 实用程序")]),a._v(" "),t("h4",{attrs:{id:"文件和文件夹操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件和文件夹操作"}},[a._v("#")]),a._v(" 文件和文件夹操作")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('# 创建/删除空目录\nmkdir -p abc/xyz\n\nrmdir -p zbc/xyz\n\n# 创建/删除文件\ntouch a.txt\n\nrm a.txt\n\nrm -rf xyz\n\n# 切换和查看当前工作目录\n\ncd abc\n\ncd -\n\npwd\n\n# 查看目录内容\n\nls\n\n# 查看文件内容\n\ncat a.txt\n\ntac a.txt\n\nhead -10 a.txt\n\ntail -20 a.txt\n\nmore a.txt\n\nless a.txt\n\nrev a.txt\n\nod a.txt\n\n# 拷贝和移动文件\n\ncp abc xyz/\n\nmv a.txt xyz/\n\n# 查找文件和查找内容\n\nfind . -name *.txt\n\ngrep "<script>" sohu.html -n\n\n# 创建链接和查看链接，链接分为硬链接和软连接\nln source_file link_name # 硬链接，硬链接是指向同一文件索引的不同文件名\n\nln -s source_file link_name # 软链接，软链接是一个特殊的文件，它包含一个指向另一个文件的路径\n\nls -li filename # 查看链接\n\n# 压缩与解压缩\n\ntar -czvf archive.tar.gz directory_or_file # 打包\n\ntar -xzvf archive.tar.gz # 解压\n\n')])])]),t("h4",{attrs:{id:"管道和重定向"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#管道和重定向"}},[a._v("#")]),a._v(" 管道和重定向")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('# ps -ef 列出所有进程，然后通过 grep "process_name" 过滤出包含特定进程名的行，最后 wc -l 计算这些行的数量\nps -ef | grep "process_name" | wc -l\n\n')])])]),t("blockquote",[t("p",[a._v("在Linux中，重定向是一种强大的功能，它允许用户将命令的输出或输入从一个位置转移到另一个位置，而不是使用默认的屏幕或键盘。重定向主要分为输出重定向和输入重定向两种。")])]),a._v(" "),t("blockquote",[t("p",[a._v("输出重定向是将命令的标准输出（stdout）或标准错误（stderr）重新定向到文件或其他命令中")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("# 标准输出重定向（覆盖）：使用 > 符号\ncommand > file.txt\n\n# 标准输出重定向（追加）：使用 >> 符号\ncommand >> file.txt\n\n# 标准错误重定向：使用 2> 符号。它将命令的标准错误重定向到指定的文件中，而标准输出仍然显示在屏幕上\ncommand 2> err.txt\n\n# 标准错误重定向（追加）：使用 2>> 符号\ncommand 2>> error.txt\n\n# 同时重定向标准输出和标准错误\ncommand &> output.txt\ncommand > output.txt 2>&1\n\n# 输入重定向，是将命令的标准输入（stdin）从文件或其他命令中读取，而不是从键盘读取\ncommand < file.txt\n\n")])])]),t("h4",{attrs:{id:"别名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#别名"}},[a._v("#")]),a._v(" 别名")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("# 别名的定义\nalias 别名='命令或命令序列'\n\nalias cls=\"clear\"\n\nalias my_sequence='cd /path/to/directory && ls -l'\n")])])]),t("p",[a._v("默认情况下，通过alias命令定义的别名仅在当前会话中有效。如果你希望别名在每次登录时都能自动生效，可以将别名定义添加到适当的配置文件中。常用的配置文件包括：")]),a._v(" "),t("ul",[t("li",[t("p",[t("code",[a._v("~/.bashrc")]),a._v("：用于个人用户的Bash配置")])]),a._v(" "),t("li",[t("p",[t("code",[a._v("~/.bash_profile")]),a._v("：用于个人用户的Bash登录配置")])]),a._v(" "),t("li",[t("p",[t("code",[a._v("/etc/bash.bashrc")]),a._v("：用于全局Bash配置")])]),a._v(" "),t("li",[t("p",[t("code",[a._v("/etc/profile")]),a._v("：用于全局登录配置")])])]),a._v(" "),t("p",[a._v("为了使更改立即生效，可以使用 "),t("code",[a._v("source")]),a._v(" 命令。")]),a._v(" "),t("h4",{attrs:{id:"用户管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用户管理"}},[a._v("#")]),a._v(" 用户管理")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("# 添加用户并创建家目录\nuseradd -m username\n\n# 删除用户\nuserdel -r username\n\n# 修改用户密码\npasswd username\n\n# 修改用户信息\nusermod\n\n# 切换用户身份\nsu username\n\n# 列出所有用户信息\n\ncat /etc/passwd\n\n# 创建用户组\ngroupadd \n\n# 删除用户组\ngroupdel \n\n# 以管理员身份执行命令\nsudo \n\n# 查看sudoers文件\ncat /etc/sudoers\n\n# 显示用户与用户组的信息\nid \nid username\n\n")])])]),t("h4",{attrs:{id:"访问权限"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#访问权限"}},[a._v("#")]),a._v(" 访问权限")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("# 改变权限\nchmod 777 file\n\n# 改变文件的所有者\nchown username file\n\n# 更改文件的所属组\nchgrp groupname file\n\n")])])]),t("h3",{attrs:{id:"软件的安装和配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#软件的安装和配置"}},[a._v("#")]),a._v(" 软件的安装和配置")]),a._v(" "),t("h4",{attrs:{id:"使用包管理工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用包管理工具"}},[a._v("#")]),a._v(" 使用包管理工具")]),a._v(" "),t("h5",{attrs:{id:"yum"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yum"}},[a._v("#")]),a._v(" yum")]),a._v(" "),t("blockquote",[t("p",[a._v("yum使用软件仓库来检索和安装软件包。用户可以通过编辑/etc/yum.repos.d/目录下的.repo文件来添加、修改或删除软件仓库。")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("# 搜索软件包\nyum search nginx\n\n# 列出已经安装的软件包\nyum list installed\n\n# 安装软件包\nyum install nginx\n\n# 删除软件包\nyum remove nginx\n\n# 更新软件包\nyum update # 更新所有软件包\nyum update tar # 只会更新 tar\n\n# 检查那些可以更新的软件包\nyum check-update\n\n# 显示软件包的信息\nyum info nginx\n\n")])])]),t("h5",{attrs:{id:"rpm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rpm"}},[a._v("#")]),a._v(" rpm")]),a._v(" "),t("p",[a._v("rpm 允许用户直接以二进制方式安装软件包，并自动处理依赖关系")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("# 安装软件包\nrpm -ivh <packagename>.rpm\n\n# 移除软件包\nrpm -e <packagename>\n\n# 查询指定软件包是否已经安装\nrpm -q package_name\n\n# 列出系统上所有已安装的软件包\nrpm -qa\n\n")])])]),t("h5",{attrs:{id:"apt"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#apt"}},[a._v("#")]),a._v(" apt")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("# 更新本地的软件包列表\nsudo apt update\n\n# 安装软件包\nsudo apt install git\n\n# 卸载软件包\nsudo apt remove git\n\n# 注意，apt remove只会删除软件包本身，而不会删除其配置文件。如果你还想删除配置文件，可以使用apt purge命令\nsudo apt pruge git\n\n# 搜索软件包\nsudo apt search git\n\n")])])]),t("h4",{attrs:{id:"源代码安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#源代码安装"}},[a._v("#")]),a._v(" 源代码安装")]),a._v(" "),t("h3",{attrs:{id:"配置服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置服务"}},[a._v("#")]),a._v(" 配置服务")]),a._v(" "),t("p",[a._v("Linux下的大多数服务都被设置为守护进程，所以我们安装的服务通常名字后面都有一个字母"),t("code",[a._v("d")]),a._v("，它是英文单词"),t("code",[a._v("daemon")]),a._v("的缩写。比如防火墙服务firewalld，mysql服务mysqld，Apache服务httpd等。在安装好服务之后，可以使用"),t("code",[a._v("systemctl")]),a._v("命令或"),t("code",[a._v("servcie")]),a._v("命令来完成对服务的启动，停止等操作。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("# 启动防火墙服务\nsystemctl start firewalld\n\n# 终止防火墙服务\nsystemctl stop firewalld\n\n# 重启防火墙服务\nsystemctl restart firewalld\n\n# 查看防火墙服务状态\nsystemctl status firewalld\n\n# 设置防火墙服务开机自启\nsystemctl enable firewalld\n\n")])])]),t("p",[a._v("在linux中，如何设置服务开机自启？")]),a._v(" "),t("ul",[t("li",[a._v("使用systemctl")])]),a._v(" "),t("p",[a._v("创建一个新的服务单元文件，例如"),t("code",[a._v("/etc/systemd/system/myservice.service")]),a._v("。")]),a._v(" "),t("p",[a._v("编辑文件并定义你的服务。例如：")]),a._v(" "),t("div",{staticClass:"language-ini extra-class"},[t("pre",{pre:!0,attrs:{class:"language-ini"}},[t("code",[t("span",{pre:!0,attrs:{class:"token section"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token section-name selector"}},[a._v("Unit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")])]),a._v("  \n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("Description")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("My Custom Service")]),a._v("  \n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("After")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("network.target")]),a._v("  \n  \n"),t("span",{pre:!0,attrs:{class:"token section"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token section-name selector"}},[a._v("Service")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")])]),a._v("  \n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("ExecStart")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("/path/to/your/service")]),a._v("  \n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("Restart")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("on-failure")]),a._v("  \n  \n"),t("span",{pre:!0,attrs:{class:"token section"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token section-name selector"}},[a._v("Install")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")])]),a._v("  \n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("WantedBy")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("multi-user.target")]),a._v("  \n")])])]),t("p",[a._v("保存文件后，重新加载systemd配置："),t("code",[a._v("sudo systemctl daemon-reload")])]),a._v(" "),t("p",[a._v("启用服务以使其在开机时启动："),t("code",[a._v("sudo systemctl enable myservice")])]),a._v(" "),t("p",[a._v("现在你可以使用"),t("code",[a._v("sudo systemctl start/stop/restart myservice")]),a._v("来手动控制服务。")]),a._v(" "),t("ul",[t("li",[a._v("使用SysVinit脚本")])]),a._v(" "),t("p",[a._v("可以将启动脚本放在/etc/init.d/目录中，并使用update-rc.d或chkconfig（取决于你的发行版）来链接到适当的运行级别。")]),a._v(" "),t("h3",{attrs:{id:"网络访问和管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网络访问和管理"}},[a._v("#")]),a._v(" 网络访问和管理")]),a._v(" "),t("ul",[t("li",[a._v("安全连接 ssh")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("ssh root@192.168.2.56\n")])])]),t("ul",[t("li",[t("p",[a._v("通过网络获取资源 wget")])]),a._v(" "),t("li",[t("p",[a._v("发送和接收邮件 mail")])]),a._v(" "),t("li",[t("p",[a._v("网络配置工具 ifconfig 或者 ip address")])]),a._v(" "),t("li",[t("p",[a._v("网络可达性检查 ping")])]),a._v(" "),t("li",[t("p",[a._v("显示网络服务和端口 netstat 或者 ss")])]),a._v(" "),t("li",[t("p",[a._v("网络监听抓包 tcpdump")])]),a._v(" "),t("li",[t("p",[a._v("文件同步工具 rsync")])]),a._v(" "),t("li",[t("p",[a._v("安全文件传输 sftp")])])]),a._v(" "),t("h3",{attrs:{id:"进程管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进程管理"}},[a._v("#")]),a._v(" 进程管理")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("查看进程 ps")])]),a._v(" "),t("li",[t("p",[a._v("显示进程树 pstree")])]),a._v(" "),t("li",[t("p",[a._v("查找与指定条件匹配的进程 pgrep")])]),a._v(" "),t("li",[t("p",[a._v("通过进程号终止进程 kill")])]),a._v(" "),t("li",[t("p",[a._v("通过进程名终止进程 pkill / killall")])]),a._v(" "),t("li",[t("p",[a._v("将进程置于后台运行 "),t("code",[a._v("Ctrl + Z")]),a._v(" 快捷键用于停止进程并置于后台，"),t("code",[a._v("&")]),a._v(" 将进程置于后台运行。")])]),a._v(" "),t("li",[t("p",[a._v("查询后台进程 jobs")])]),a._v(" "),t("li",[t("p",[a._v("用户登出后进程继续工作 nohup")])])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("nohup ping www.baidu.com > result.txt &\n")])])]),t("ul",[t("li",[t("p",[a._v("跟踪进程系统调用情况 strace")])]),a._v(" "),t("li",[t("p",[a._v("实时监控进程占用资源状况 top")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);
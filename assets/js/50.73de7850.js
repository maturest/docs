(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{322:function(a,n,t){"use strict";t.r(n);var e=t(14),s=Object(e.a)({},(function(){var a=this,n=a._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h2",{attrs:{id:"python-环境准备"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#python-环境准备"}},[a._v("#")]),a._v(" Python 环境准备")]),a._v(" "),n("h3",{attrs:{id:"anaconda"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#anaconda"}},[a._v("#")]),a._v(" Anaconda")]),a._v(" "),n("p",[a._v("平常我们经常会遇到这种情况：一台电脑（服务器）要跑 "),n("code",[a._v("python")]),a._v(" 的多个项目，但项目依赖的 "),n("code",[a._v("python")]),a._v(" 的版本不一致，就像前端 "),n("code",[a._v("node")]),a._v(" 那样，那么有没有像 "),n("code",[a._v("nvm")]),a._v(" 那样管理 "),n("code",[a._v("node")]),a._v(" 版本的管理器呢，答案是有的，他就是 "),n("code",[a._v("anaconda")]),a._v(" ，俗称大蟒蛇，"),n("a",{attrs:{href:"https://mirrors.tuna.tsinghua.edu.cn/",target:"_blank",rel:"noopener noreferrer"}},[a._v("清华大学开源软件镜像站"),n("OutboundLink")],1),a._v("可以加速下载，它包含了包管理器、环境管理器和 Python 发行版，包含众多开源包。")]),a._v(" "),n("h4",{attrs:{id:"conda"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#conda"}},[a._v("#")]),a._v(" "),n("a",{attrs:{href:"https://docs.conda.io/projects/conda/en/stable/index.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("conda"),n("OutboundLink")],1)]),a._v(" "),n("blockquote",[n("p",[a._v("Conda provides package, dependency, and environment management for any language.")])]),a._v(" "),n("p",[a._v("conda 是包及其依赖项和环境的管理工具。如果你需要的包要求不同版本的Python，你无需切换到不同的环境，因为conda同样是一个环境管理器。仅需要几条命令，你可以创建一个完全独立的环境来运行不同的Python版本，同时继续在你常规的环境中使用你常用的Python版本。")]),a._v(" "),n("h4",{attrs:{id:"pip"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pip"}},[a._v("#")]),a._v(" pip")]),a._v(" "),n("p",[a._v("pip是用于安装和管理软件包的包管理器。")]),a._v(" "),n("h4",{attrs:{id:"virtualenv"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#virtualenv"}},[a._v("#")]),a._v(" virtualenv")]),a._v(" "),n("p",[a._v("virtualenv是用于创建一个独立的Python环境的工具。virtualenv将会为它自己的安装目录创建一个环境，这并不与其他virtualenv环境共享库；同时也可以选择性地不连接已安装的全局库。")]),a._v(" "),n("p",[a._v("它解决一下问题：")]),a._v(" "),n("ul",[n("li",[n("p",[a._v("当一个程序需要使用Python 2.7版本，而另一个程序需要使用Python 3.6版本，如何同时使用这两个程序？如果将所有程序都安装在系统下的默认路径，如：/usr/lib/python2.7/site-packages，当不小心升级了本不该升级的程序时，将会对其他的程序造成影响。")])]),a._v(" "),n("li",[n("p",[a._v("如果想要安装程序并在程序运行时对其库或库的版本进行修改，都会导致程序的中断。")])]),a._v(" "),n("li",[n("p",[a._v("在共享主机时，无法在全局 site-packages 目录中安装包。")])])]),a._v(" "),n("h4",{attrs:{id:"conda-与-pip-的区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#conda-与-pip-的区别"}},[a._v("#")]),a._v(" conda 与 pip 的区别")]),a._v(" "),n("p",[a._v("pip:")]),a._v(" "),n("ul",[n("li",[n("p",[a._v("不一定会展示所需其他依赖包。")])]),a._v(" "),n("li",[n("p",[a._v("安装包时或许会直接忽略依赖项而安装，仅在结果中提示错误。")])])]),a._v(" "),n("p",[a._v("conda:")]),a._v(" "),n("ul",[n("li",[n("p",[a._v("列出所需其他依赖包。")])]),a._v(" "),n("li",[n("p",[a._v("安装包时自动安装其依赖项。")])]),a._v(" "),n("li",[n("p",[a._v("可以便捷地在包的不同版本中自由切换。")])]),a._v(" "),n("li",[n("p",[a._v("conda结合了pip和virtualenv的功能。")])]),a._v(" "),n("li",[n("p",[a._v("pip仅适用于python, conda适用于Python, R, Ruby, Lua, Scala, Java, JavaScript, C/C++, FORTRAN。")])])]),a._v(" "),n("h4",{attrs:{id:"安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),n("p",[a._v("很简单，点击下载 exe 文件，然后进行一步一步安装即可。不过安装之后，需要更换一下镜像源，这样会加快包的下载安装速度。在用户目录下，编辑 "),n("code",[a._v(".condarc")]),a._v("文件，替换为以下内容。（Windows 用户无法直接创建名为 .condarc 的文件，可先执行 conda config --set show_channel_urls yes 生成该文件之后再修改。）")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("channels:\n  - defaults\nshow_channel_urls: true\ndefault_channels:\n  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main\n  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/r\n  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/msys2\ncustom_channels:\n  conda-forge: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud\n  msys2: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud\n  bioconda: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud\n  menpo: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud\n  pytorch: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud\n  pytorch-lts: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud\n  simpleitk: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud\n  deepmodeling: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/\n")])])]),n("p",[a._v("替换完以上内容之后，运行 "),n("code",[a._v("conda clean -i")]),a._v(" 清除索引缓存，保证用的是镜像站提供的索引。")]),a._v(" "),n("h4",{attrs:{id:"conda-环境管理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#conda-环境管理"}},[a._v("#")]),a._v(" "),n("a",{attrs:{href:"https://docs.conda.io/projects/conda/en/stable/commands/index.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("conda 环境管理"),n("OutboundLink")],1)]),a._v(" "),n("p",[a._v("检测 conda 版本")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("conda --version\n")])])]),n("p",[a._v("查看 conda 帮助信息")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("conda -h\n")])])]),n("p",[a._v("创建新环境")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("conda create -n <env_name> <package_names>\n\n//如果要安装指定的版本号，则只需要在包名后面以 = 和版本号的形式执行,创建多个包，则直接以空格隔开\nconda create -n python3 python=3.5 numpy pandas \n")])])]),n("p",[a._v("切换环境")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("// 激活环境\nconda activate <env_name>\n\n// 退出当前环境\nconda deactivate\n")])])]),n("p",[a._v("显示已创建环境")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("conda env list\n\nconda info -e\n")])])]),n("p",[a._v("删除环境")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("conda remove -n <env_name> --all\n")])])]),n("h4",{attrs:{id:"conda-包管理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#conda-包管理"}},[a._v("#")]),a._v(" "),n("a",{attrs:{href:"https://docs.conda.io/projects/conda/en/stable/commands/index.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("conda 包管理"),n("OutboundLink")],1)]),a._v(" "),n("p",[a._v("查询包")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("conda search\n")])])]),n("p",[a._v("获取当前环境中已安装的包信息")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("conda list\n")])])]),n("p",[a._v("在当前环境安装包")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("conda install <package_name>\n")])])]),n("p",[a._v("制定环境安装包")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("conda install -n myenv numpy\n")])])]),n("p",[a._v("当使用 conda install 无法进行安装时，可以使用pip进行安装。")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("pip install\n")])])]),n("p",[a._v("从当前环境删除包")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v(" conda remove <package_name>\n")])])]),n("p",[a._v("从指定环境删除包，多个包使用空格")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("conda remove -n myenv <package_name>\n")])])]),n("p",[a._v("删除所有包he环境自己")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v(" conda remove -n myenv --all\n")])])]),n("p",[a._v("软件包更新")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("conda update -n myenv <package_name>\n")])])]),n("p",[a._v("python 安装的内容：")]),a._v(" "),n("p",[a._v("1、python 解释器")]),a._v(" "),n("p",[a._v("2、pip 包管理器，管理一些扩展包（安装目录为 lib/site-packages）")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("// 注意切换镜像源\n\npip install name\n\npip uninstall name\n")])])]),n("p",[a._v("3、python 标准库，Lib 文件夹")])])}),[],!1,null,null,null);n.default=s.exports}}]);
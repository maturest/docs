(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{298:function(t,a,s){"use strict";s.r(a);var e=s(14),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"开源项目-fast-gpt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开源项目-fast-gpt"}},[t._v("#")]),t._v(" 开源项目 FAST-GPT")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"docker-compose-快速部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-快速部署"}},[t._v("#")]),t._v(" Docker Compose 快速部署")]),t._v(" "),a("h4",{attrs:{id:"注意-前置依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意-前置依赖"}},[t._v("#")]),t._v(" 注意：前置依赖")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://git-scm.com/",title:"Git",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://www.docker.com/",title:"Docker（构建镜像）",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker（构建镜像）"),a("OutboundLink")],1),a("a",{attrs:{href:"https://nodejs.org/en",title:"Node.js v18.x (不推荐最新的，可能有兼容问题)",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js v18.x (不推荐最新的，可能有兼容问题)"),a("OutboundLink")],1),t._v("（"),a("a",{attrs:{href:"https://blog.csdn.net/miaoye520/article/details/122969113?ops_request_misc=&request_id=&biz_id=102&utm_term=windows11%20%E5%AE%89%E8%A3%85docker%20desktop&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduweb~default-0-122969113.142%5Ev99%5Epc_search_result_base9&spm=1018.2226.3001.4187",title:"小心有坑如果你的电脑系统家庭版",target:"_blank",rel:"noopener noreferrer"}},[t._v("小心有坑如果你的电脑系统是家庭版"),a("OutboundLink")],1),t._v("）\n"),a("a",{attrs:{href:"https://nodejs.org/en",title:"Node.js v18.x (不推荐最新的，可能有兼容问题)",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js v18.x (不推荐最新的，可能有兼容问题)"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://pnpm.io/",title:"pnpm",target:"_blank",rel:"noopener noreferrer"}},[t._v("pnpm"),a("OutboundLink")],1),t._v(" 版本 8.x.x\n"),a("a",{attrs:{href:"https://blog.csdn.net/weixin_48826306/article/details/131345572?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522171082892916800192271623%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=171082892916800192271623&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduend~default-1-131345572-null-null.142%5Ev99%5Epc_search_result_base9&utm_term=pnmp%E5%AE%89%E8%A3%85&spm=1018.2226.3001.4187",title:"（安装完node也有npm，也可以通过npm安装 pnpm ,npm install pnpm -g）",target:"_blank",rel:"noopener noreferrer"}},[t._v("（安装完node也有npm，也可以通过npm安装 pnpm ,npm install pnpm -g）"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"推荐配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#推荐配置"}},[t._v("#")]),t._v(" 推荐配置")]),t._v(" "),a("p",[a("img",{attrs:{src:"/uploads/ai_bot/images/m_f98984469aab8cdc9c201e75cd270df4_r.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"部署架构图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署架构图"}},[t._v("#")]),t._v(" 部署架构图")]),t._v(" "),a("p",[a("img",{attrs:{src:"/uploads/ai_bot/images/m_7444c8c59540f02ba5d73f68fd2ea97b_r.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"_1-准备好代理环境-国外服务器可忽略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-准备好代理环境-国外服务器可忽略"}},[t._v("#")]),t._v(" 1. 准备好代理环境（国外服务器可忽略）")]),t._v(" "),a("p",[t._v("确保可以访问 OpenAI，具体方案可以参考："),a("RouterLink",{attrs:{to:"/docs/development/proxy/"}},[t._v("代理方案")]),t._v("。或直接在 Sealos 上 "),a("a",{attrs:{href:"/docs/development/one-api"}},[t._v("部署 OneAPI")]),t._v("，既解决代理问题也能实现多 Key 轮询、接入其他大模型。")],1),t._v(" "),a("h3",{attrs:{id:"_2-多模型支持"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-多模型支持"}},[t._v("#")]),t._v(" 2. 多模型支持")]),t._v(" "),a("p",[t._v("FastGPT 使用了 one-api 项目来管理模型池，其可以兼容 OpenAI 、Azure 、国内主流模型和本地模型等。")]),t._v(" "),a("p",[t._v("可选择 "),a("a",{attrs:{href:"/docs/development/one-api"}},[t._v("Sealos 快速部署 OneAPI")]),t._v("，更多部署方法可参考该项目的 "),a("a",{attrs:{href:"https://github.com/songquanpeng/one-api",target:"_blank",rel:"noopener noreferrer"}},[t._v("README"),a("OutboundLink")],1),t._v("，也可以直接通过以下按钮一键部署：")]),t._v(" "),a("h2",{attrs:{id:"一、安装-docker-和-docker-compose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、安装-docker-和-docker-compose"}},[t._v("#")]),t._v(" 一、安装 Docker 和 docker-compose")]),t._v(" "),a("p",[t._v("Linux")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装 Docker")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-fsSL")]),t._v(" https://get.docker.com "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-s")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--mirror")]),t._v(" Aliyun\nsystemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--now")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装 docker-compose")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-L")]),t._v(" https://github.com/docker/compose/releases/download/v2.20.3/docker-compose-"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("uname")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-s")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("-"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("uname")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-o")]),t._v(" /usr/local/bin/docker-compose\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" +x /usr/local/bin/docker-compose\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 验证安装")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-v")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker-compose")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-v")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如失效，自行百度~")]),t._v("\n")])])]),a("p",[t._v("MacOS\n推荐直接使用 "),a("a",{attrs:{href:"https://orbstack.dev/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Orbstack"),a("OutboundLink")],1),t._v("。可直接通过 Homebrew 来安装：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("brew "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" orbstack\n")])])]),a("p",[t._v("或者直接"),a("a",{attrs:{href:"https://orbstack.dev/download",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载安装包"),a("OutboundLink")],1),t._v("进行安装。")]),t._v(" "),a("p",[t._v("Windows\n我们建议将源代码和其他数据绑定到 Linux 容器中时，将其存储在 Linux 文件系统中，而不是 Windows 文件系统中。")]),t._v(" "),a("p",[t._v("可以选择直接"),a("a",{attrs:{href:"https://docs.docker.com/desktop/wsl/",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用 WSL 2 后端在 Windows 中安装 Docker Desktop"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[t._v("也可以直接"),a("a",{attrs:{href:"https://nickjanetakis.com/blog/install-docker-in-wsl-2-without-docker-desktop",target:"_blank",rel:"noopener noreferrer"}},[t._v("在 WSL 2 中安装命令行版本的 Docker"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"二、创建目录并下载-docker-compose-yml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、创建目录并下载-docker-compose-yml"}},[t._v("#")]),t._v(" 二、创建目录并下载 docker-compose.yml")]),t._v(" "),a("p",[t._v("依次执行下面命令，创建 FastGPT 文件并拉取"),a("code",[t._v("docker-compose.yml")]),t._v("和"),a("code",[t._v("config.json")]),t._v("，执行完后目录下会有 2 个文件。\n"),a("strong",[t._v("(下载不来建议去clone github代码，从里面复制出来)")])]),t._v(" "),a("p",[t._v("非 Linux 环境或无法访问外网环境，可手动创建一个目录，并下载下面2个链接的文件: "),a("a",{attrs:{href:"https://github.com/labring/FastGPT/blob/main/files/deploy/fastgpt/docker-compose.yml",target:"_blank",rel:"noopener noreferrer"}},[t._v("docker-compose.yml"),a("OutboundLink")],1),t._v(","),a("a",{attrs:{href:"https://github.com/labring/FastGPT/blob/main/projects/app/data/config.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("config.json"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("strong",[t._v("注意: "),a("code",[t._v("docker-compose.yml")]),t._v(" 配置文件中 Mongo 为 5.x，部分服务器不支持，需手动更改其镜像版本为 4.4.24")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" fastgpt\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" fastgpt\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-O")]),t._v(" https://raw.githubusercontent.com/labring/FastGPT/main/files/deploy/fastgpt/docker-compose.yml\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-O")]),t._v(" https://raw.githubusercontent.com/labring/FastGPT/main/projects/app/data/config.json\n")])])]),a("h2",{attrs:{id:"三、修改-docker-compose-yml-的环境变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、修改-docker-compose-yml-的环境变量"}},[t._v("#")]),t._v(" 三、修改 docker-compose.yml 的环境变量")]),t._v(" "),a("p",[t._v("修改"),a("code",[t._v("docker-compose.yml")]),t._v("中的"),a("code",[t._v("OPENAI_BASE_URL")]),t._v("（API 接口的地址，需要加/v1）和"),a("code",[t._v("CHAT_API_KEY")]),t._v("（API 接口的凭证）。")]),t._v(" "),a("p",[t._v("使用 OneAPI 的话，OPENAI_BASE_URL=OneAPI访问地址/v1；CHAT_API_KEY=令牌")]),t._v(" "),a("h2",{attrs:{id:"四、启动容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、启动容器"}},[t._v("#")]),t._v(" 四、启动容器")]),t._v(" "),a("p",[t._v("在 docker-compose.yml 同级目录下执行\n"),a("strong",[t._v("注意：docker会根据yml后缀的文件配置创建docker运行文件，所以需要同级目录")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入项目目录")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" 项目目录\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 启动容器")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#docker compose [OPTIONS] COMMAND")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#docker 常用命令格式")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker-compose")]),t._v(" pull\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker-compose")]),t._v(" up "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v("\n")])])]),a("p",[t._v("命令解释：\n"),a("strong",[t._v("docker-compose pull")]),t._v("\n拉取服务依赖的镜像。\ndocker compose pull [OPTIONS] [SERVICE...]")]),t._v(" "),a("p",[a("strong",[t._v("docker-compose up -d")]),t._v("\n用于启动使用 Docker Compose 编排的多个容器。它会根据指定的配置文件（默认为 docker-compose.yml）创建并运行多个容器，使它们协同工作。\ndocker_compose up [OPTIONS] [SERVICE...]\n具体请看：\n"),a("a",{attrs:{href:"https://blog.csdn.net/m0_51913750/article/details/131743170",title:"docker-compose 常用命令（附 docker-compose 的安装教程）",target:"_blank",rel:"noopener noreferrer"}},[t._v("docker-compose 常用命令（附 docker-compose 的安装教程）"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"五、初始化-mongo-副本集-4-6-8以前可忽略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、初始化-mongo-副本集-4-6-8以前可忽略"}},[t._v("#")]),t._v(" 五、初始化 Mongo 副本集(4.6.8以前可忽略)")]),t._v(" "),a("p",[t._v("FastGPT 4.6.8 后使用了 MongoDB 的事务，需要运行在副本集上。副本集没法自动化初始化，需手动操作。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看 mongo 容器是否正常运行")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入容器")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-it")]),t._v(" mongo "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 连接数据库（这里要填Mongo的用户名和密码）")]),t._v("\nmongo "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-u")]),t._v(" myusername "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" mypassword "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--authenticationDatabase")]),t._v(" admin\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 初始化副本集。如果需要外网访问，mongo:27017 可以改成 ip:27017。但是需要同时修改 FastGPT 连接的参数（MONGODB_URI=mongodb://myname:mypassword@mongo:27017/fastgpt?authSource=admin => MONGODB_URI=mongodb://myname:mypassword@ip:27017/fastgpt?authSource=admin）")]),t._v("\nrs.initiate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  _id: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rs0"')]),t._v(",\n  members: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" _id: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(", host: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mongo:27017"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 检查状态。如果提示 rs0 状态，则代表运行成功")]),t._v("\nrs.status"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("strong",[t._v('关于 host: "mongo:27017" 说明')]),t._v("\n（这里很重要ip替换成公网ip，可以通过ipconfig来看）")]),t._v(" "),a("ol",[a("li",[t._v("mongo:27017 代表指向同一个 docker 网络的 mongo 容器的 27017 服务。因此，如果使用该参数，"),a("strong",[t._v("外网是无法访问到数据库的")]),t._v("。（登录失败的原因之一）")]),t._v(" "),a("li",[t._v("ip:27017 （ip替换成公网IP）：代表通过你的公网IP进行访问。如果用该方法，同时需要"),a("strong",[t._v("修改 docker-compose 中 mongo 的连接参数")]),t._v("，因为默认是用 "),a("code",[t._v("mongo:27017")]),t._v(" 进行连接。")])]),t._v(" "),a("h2",{attrs:{id:"五、访问-fastgpt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、访问-fastgpt"}},[t._v("#")]),t._v(" 五、访问 FastGPT")]),t._v(" "),a("p",[t._v("目前可以通过 "),a("code",[t._v("ip:3000")]),t._v(" 直接访问(注意防火墙)。登录用户名为 "),a("code",[t._v("root")]),t._v("，密码为"),a("code",[t._v("docker-compose.yml")]),t._v("环境变量里设置的 "),a("code",[t._v("DEFAULT_ROOT_PSW")]),t._v("。")]),t._v(" "),a("p",[t._v("如果需要域名访问，请自行安装并配置 Nginx。")]),t._v(" "),a("h2",{attrs:{id:"faq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[t._v("#")]),t._v(" FAQ")]),t._v(" "),a("h3",{attrs:{id:"mongo-启动失败"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mongo-启动失败"}},[t._v("#")]),t._v(" Mongo 启动失败")]),t._v(" "),a("p",[t._v("docker-compose 示例优化 Mongo 副本集参数，不需要手动创建再挂载。如果无法启动，可以尝试更换下面的脚本：")]),t._v(" "),a("ol",[a("li",[t._v("终端中执行：")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("openssl rand "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-base64")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("756")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ./mongodb.key\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("600")]),t._v(" ./mongodb.key\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chown")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("999")]),t._v(":root ./mongodb.key\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("修改 docker-compose.yml：")])]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mongo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  image: mongo:5.0.18")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# image: registry.cn-hangzhou.aliyuncs.com/fastgpt/mongo:5.0.18 # 阿里云")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("container_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mongo\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 27017"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("27017")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("networks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" fastgpt\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("command")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mongod "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("keyFile /data/mongodb.key "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("replSet rs0\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 默认的用户名和密码，只有首次允许有效")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" MONGO_INITDB_ROOT_USERNAME=myusername\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" MONGO_INITDB_ROOT_PASSWORD=mypassword\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./mongo/data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/data/db\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./mongodb.key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/data/mongodb.key\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("重启服务")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker-compose")]),t._v(" down\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker-compose")]),t._v(" up "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v("\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("进入容器执行副本集合初始化（看上方）")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://doc.fastai.site/docs/",title:"官方原始文档地址",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方原始文档地址"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);
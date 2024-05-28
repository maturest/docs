(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{305:function(t,a,s){"use strict";s.r(a);var e=s(14),v=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"开发规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发规范"}},[t._v("#")]),t._v(" 开发规范")]),t._v(" "),a("h2",{attrs:{id:"项目规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目规范"}},[t._v("#")]),t._v(" 项目规范")]),t._v(" "),a("h3",{attrs:{id:"开发和线上环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发和线上环境"}},[t._v("#")]),t._v(" 开发和线上环境")]),t._v(" "),a("p",[t._v("一般情况下，一个项目应该有三个基本的项目环境：")]),t._v(" "),a("ul",[a("li",[t._v("Local - 开发环境")])]),t._v(" "),a("p",[t._v("统一使用域名 "),a("code",[t._v(".test")]),t._v(" 作为后缀。")]),t._v(" "),a("ul",[a("li",[t._v("Staging - 线上测试环境")])]),t._v(" "),a("p",[t._v("统一使用域名 "),a("code",[t._v(".stage.xxx")]),t._v(" 作为后缀。")]),t._v(" "),a("p",[t._v("除了域名等其他独立应用配置以外，环境必须跟 Production 保持高度一致性，可以的话应该与 Production 使用同一台机器。")]),t._v(" "),a("ul",[a("li",[t._v("Production - 线上生产环境")])]),t._v(" "),a("p",[t._v("出于安全考虑，线上环境 必须 只开放以下端口：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("- 80 HTTP\n\n- 443 HTTPS\n\n- 22 SSH\n")])])]),a("h3",{attrs:{id:"工具统一"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工具统一"}},[t._v("#")]),t._v(" 工具统一")]),t._v(" "),a("p",[t._v("工具统一，为了方便工作流的统一，还有工具使用经验的传承。")]),t._v(" "),a("ul",[a("li",[t._v("硬件系统")]),t._v(" "),a("li",[t._v("编辑器")]),t._v(" "),a("li",[t._v("编辑器代码格式化 "),a("a",{attrs:{href:"https://editorconfig.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("EditorConfig"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("PHP 代码风格矫正器 "),a("a",{attrs:{href:"https://github.com/PHP-CS-Fixer/PHP-CS-Fixer",target:"_blank",rel:"noopener noreferrer"}},[t._v("PHP-CS-Fixer"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("命令行工具 例如：xshell 、git for windows")]),t._v(" "),a("li",[t._v("浏览器")]),t._v(" "),a("li",[t._v("虚拟机")]),t._v(" "),a("li",[t._v("Mysql 数据库查询工具")]),t._v(" "),a("li",[t._v("Redis 管理工具")]),t._v(" "),a("li",[t._v("MongoDB 管理工具")]),t._v(" "),a("li",[t._v("设计工具")]),t._v(" "),a("li",[t._v("视频播放")]),t._v(" "),a("li",[t._v("zsh 的配置信息统一，Alias 等信息")])]),t._v(" "),a("h3",{attrs:{id:"项目文档编写规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目文档编写规范"}},[t._v("#")]),t._v(" 项目文档编写规范")]),t._v(" "),a("p",[t._v("每一个项目必须包含一个 README.md 文件，主要简单介绍该项目，作用主要有两个：一是团队新成员可以从此文件快速获悉项目大致情况，另一个是部署项目时可以做为参考。")]),t._v(" "),a("p",[a("code",[t._v("readme.md")]),t._v(" 文件应该包含以下内容：")]),t._v(" "),a("ul",[a("li",[t._v("项目概述：介绍说明项目的一些情况，例如产品说明，功能描述，相关链接等等")]),t._v(" "),a("li",[t._v("运行环境：运行环境说明，系统要求等信息")]),t._v(" "),a("li",[t._v("开发环境部署：一步步引导说明，保证新成员能最快速的，没有歧义的部署好开发环境")]),t._v(" "),a("li",[t._v("服务器架构说明：最好能有服务器架构图，包含前端和后端运行环境等")]),t._v(" "),a("li",[t._v("代码上线：介绍代码上线流程，需要执行那些步骤")]),t._v(" "),a("li",[t._v("扩展包说明：表格列出所有使用的扩展包，以及标注那些业务使用了相关扩展包")]),t._v(" "),a("li",[t._v("自定义 Artisan 命令列表：以表格的形式罗列出所有自定义的命令，说明用途和使用场景")]),t._v(" "),a("li",[t._v("队列列表：以表格的形式罗列出所有的队列接口，说明用途，指出使用场景")]),t._v(" "),a("li",[t._v("常见问题：如果遇到了什么问题，如何解决的问题")])]),t._v(" "),a("h3",{attrs:{id:"composer-使用须知"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#composer-使用须知"}},[t._v("#")]),t._v(" Composer 使用须知")]),t._v(" "),a("p",[t._v("一些扩展包的注册会对应用造成消耗，有一些扩展包事开发环境中专用，生产环境中并不会使用到，为了避免无用的负载，必须严格控制其安装和加载。")]),t._v(" "),a("p",[t._v("安装开发专用扩展包时，必须使用 "),a("code",[t._v("--dev")]),t._v(" 参数")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("composer")]),t._v(" require ext-name "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--dev")]),t._v("\n")])])]),a("p",[t._v("在 Production 和 Staging 环境，必须使用以下命令来安装")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("composer")]),t._v(" require --no-dev\n")])])]),a("h3",{attrs:{id:"静态资源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态资源"}},[t._v("#")]),t._v(" 静态资源")]),t._v(" "),a("p",[t._v("一般我们将 css,js,font,image 等称为静态资源，这些静态资源使用 cdn 加载，用户上传的静态资源应该酌情处理。")]),t._v(" "),a("p",[t._v("如果项目中使用了第三方前端类库中的 css/js/fonts/image 等静态资源，绝不使用第三方链接进行加载，必须下载下来并纳入代码版本管理器中。")]),t._v(" "),a("p",[t._v("css,js 文件应该使用独立的文件进行加载，不应该直接写在页面中，并且控制数量为 2~3 个文件。")]),t._v(" "),a("h2",{attrs:{id:"开发规范-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发规范-2"}},[t._v("#")]),t._v(" 开发规范")]),t._v(" "),a("h3",{attrs:{id:"配置信息与环境变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置信息与环境变量"}},[t._v("#")]),t._v(" 配置信息与环境变量")]),t._v(" "),a("p",[t._v("由于 "),a("code",[t._v(".env")]),t._v(" 不会被纳入版本控制器中，所以本地 "),a("code",[t._v(".env")]),t._v(" 里添加变量时必须同步到 "),a("code",[t._v(".env.example")]),t._v(" 中，以免影响其他项目成员。\n所有程序配置信息，必须通过 "),a("code",[t._v("config()")]),t._v(" 来读取，所有的 "),a("code",[t._v(".env")]),t._v(" 配置信息必须通过 "),a("code",[t._v("env()")]),t._v(" 来读取，绝不在配置文件以外的范围使用 "),a("code",[t._v("env()")]),t._v(" 。这样做有以下优势：\n1、定义分明，"),a("code",[t._v("config()")]),t._v(" 是配置信息，"),a("code",[t._v("env()")]),t._v(" 是环境变量\n2、统一放置于 "),a("code",[t._v("config()")]),t._v(" ,可以使用配置信息缓存功能来提高运行效率\n3、代码健壮性，"),a("code",[t._v("config()")]),t._v(" 是在 "),a("code",[t._v("env()")]),t._v(" 之上多出来一个抽象层，会使代码更加健壮和灵活")]),t._v(" "),a("h3",{attrs:{id:"控制器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#控制器"}},[t._v("#")]),t._v(" 控制器")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("控制器必须优先使用 Restful 资源控制器")])]),t._v(" "),a("li",[a("p",[t._v("必须使用复数形式")])]),t._v(" "),a("li",[a("p",[t._v("控制器里应该只存放路由动作方法")])]),t._v(" "),a("li",[a("p",[t._v("保持短小精悍，必须保持控制其文件代码行数最小化，还有可读性，一般来讲，一个方法不应该超过20行代码，业务逻辑比较多，请封装到一个 Service 类里。")])]),t._v(" "),a("li",[a("p",[t._v("绝不在控制器里遗留死方法（没有用的方法）")])]),t._v(" "),a("li",[a("p",[t._v("不应该在控制器中书写私有方法，多余的业务逻辑，请封装到 Service 类中")])]),t._v(" "),a("li",[a("p",[t._v("方法注释，每个方法都需要有详细的注释说明（要求方法取名合理，不需要过多解释），包括参数和返回值。但要为一些复杂的逻辑代码块书写注释，结合上下文，解释为什么这么做。")]),t._v(" "),a("p",[t._v("请注意，@param 属性后跟两个空格、参数类型、两个空格，最后是变量名称：")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n* 注册一个绑定到容器。\n*\n* @param  string|array  $abstract\n* @param  \\Closure|string|null  $concrete\n* @param  bool  $shared\n* @return void\n*/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("bind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$abstract")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$concrete")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$shared")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("绝不在控制器里批量注释掉代码，没有用直接删掉，反正有 Git 来做版本控制")])])]),t._v(" "),a("h3",{attrs:{id:"路由器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由器"}},[t._v("#")]),t._v(" 路由器")]),t._v(" "),a("ul",[a("li",[t._v("绝不在路由配置文件中写闭包路由或者其他业务逻辑代码，这样无法使用路由缓存。")]),t._v(" "),a("li",[t._v("必须优先使用 restful 路由。")]),t._v(" "),a("li",[t._v("使用资源路由时，如果仅使用到部分路由，必须使用 only 列出所有可用路由。")]),t._v(" "),a("li",[t._v("获取 URL 必须 遵循以下优先级：\n"),a("ul",[a("li",[t._v("$model->link()")]),t._v(" "),a("li",[t._v("route 方法")]),t._v(" "),a("li",[t._v("url 方法")])])])]),t._v(" "),a("h3",{attrs:{id:"视图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#视图"}},[t._v("#")]),t._v(" 视图")]),t._v(" "),a("p",[t._v("避免在 "),a("code",[t._v("resources/views")]),t._v(" 目录下直接放置视图文件")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("统一布局，相似的页面，局部视图，必须使用 layouts 文件来统一页面头部与尾部")])]),t._v(" "),a("li",[a("p",[t._v("优先使用 "),a("code",[t._v("blade")]),t._v(" 模板引擎")])]),t._v(" "),a("li",[a("p",[t._v("保持目录清晰，蛇形小写复数命名形式")]),t._v(" "),a("ul",[a("li",[t._v("layouts 存放布局文件")]),t._v(" "),a("li",[t._v("common 存放页面通用元素")]),t._v(" "),a("li",[t._v("components 存放组件")]),t._v(" "),a("li",[t._v("pages 存放简单的页面")]),t._v(" "),a("li",[t._v("partials 存放部分模板片段")]),t._v(" "),a("li",[t._v("resources 对应资源路由名称")])])]),t._v(" "),a("li",[a("p",[t._v("局部视图文件必须使用 "),a("code",[t._v("_")]),t._v(" 前缀来命名")])]),t._v(" "),a("li",[a("p",[t._v("视图命名要释义,例如 index create show edit")])]),t._v(" "),a("li",[a("p",[t._v("共用 "),a("code",[t._v("_form.blade.php")]),t._v(" 视图，在很多情况下，创建和编辑视图页面结构相似，应该避免重复代码")])])]),t._v(" "),a("h3",{attrs:{id:"模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模型"}},[t._v("#")]),t._v(" 模型")]),t._v(" "),a("h4",{attrs:{id:"命名规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命名规范"}},[t._v("#")]),t._v(" 命名规范")]),t._v(" "),a("p",[t._v("数据模型相关的命名规范：")]),t._v(" "),a("ul",[a("li",[t._v("数据模型类名 必须 为「单数」, 如：App\\Models\\Photo")]),t._v(" "),a("li",[t._v("类文件名 必须 为「单数」，如：app/Models/Photo.php")]),t._v(" "),a("li",[t._v("数据库表名字 必须 为「复数」，多个单词情况下使用「Snake Case」 如：photos, my_photos")]),t._v(" "),a("li",[t._v("数据库表迁移名字 必须 为「复数」，如：2014_08_08_234417_create_photos_table.php")]),t._v(" "),a("li",[t._v("数据填充文件名 必须 为「复数」，如：PhotosTableSeeder.php")]),t._v(" "),a("li",[t._v("数据库字段名 必须 为「Snake Case」，如：view_count, is_vip")]),t._v(" "),a("li",[t._v("数据库表主键 必须 为「id」")]),t._v(" "),a("li",[t._v("数据库表外键 必须 为「resource_id」，如：user_id, post_id")]),t._v(" "),a("li",[t._v("数据模型变量 必须 为「resource_id」，如：$user_id, $post_id")])]),t._v(" "),a("p",[t._v("总的来讲，就是只有表名和数据填充文件是复数，其他情况都是单数。")]),t._v(" "),a("h4",{attrs:{id:"利用-trait-来扩展数据模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#利用-trait-来扩展数据模型"}},[t._v("#")]),t._v(" 利用 trait 来扩展数据模型")]),t._v(" "),a("p",[t._v("模型之间，相同的模型逻辑，应该 利用 Trait 来实现逻辑代码。所有模型 Traits 必须存放于 app/Models/Traits 目录下。业务逻辑请使用 ModelService 模式来组织代码。")]),t._v(" "),a("h4",{attrs:{id:"关于-sql-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于-sql-文件"}},[t._v("#")]),t._v(" 关于 sql 文件")]),t._v(" "),a("p",[t._v("强烈建议使用数据迁移，比如创建数据库表，更改字段，创建索引，测试数据等行为。")]),t._v(" "),a("h4",{attrs:{id:"数据层无状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据层无状态"}},[t._v("#")]),t._v(" 数据层无状态")]),t._v(" "),a("p",[t._v("数据层，也就是模型层，不能跟用户的登录状态挂钩")]),t._v(" "),a("h4",{attrs:{id:"目录分层"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录分层"}},[t._v("#")]),t._v(" 目录分层")]),t._v(" "),a("p",[t._v("如果是一个长期维护的项目，必须为模型文件按业务逻辑分层")]),t._v(" "),a("h4",{attrs:{id:"模型事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模型事件"}},[t._v("#")]),t._v(" 模型事件")]),t._v(" "),a("p",[t._v("应该尽量避免使用 laravel 的模型事件，使用模型事件的问题在于，其职能很难界定，所有的业务逻辑都能写到模型事件中。模型事件另一个缺点就是，模型操作，附带太多逻辑，有太多的 Side Effect，并且是隐性的。")]),t._v(" "),a("h3",{attrs:{id:"service模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#service模式"}},[t._v("#")]),t._v(" Service模式")]),t._v(" "),a("p",[t._v("项目中的大部分业务逻辑，都应该封装到 "),a("code",[t._v("Service")]),t._v(" 层，这不仅能更好的组织代码。还方便单元测试。"),a("strong",[t._v("控制器方法只处理请求逻辑，模型只处理模型定义，以及数据关联逻辑。业务逻辑必须封装到对应的 "),a("code",[t._v("ModelService")]),t._v(" 类中")])]),t._v(" "),a("ul",[a("li",[t._v("ModelService 的方法命名参照模型的方法")]),t._v(" "),a("li",[t._v("其他类型的类，都应该使用 Service 来封装，例如：请求第三方接口的类，图片处理的工具类，包含业务逻辑的类")]),t._v(" "),a("li",[t._v("所有的 Service 类必须放在 "),a("code",[t._v("app\\Services")]),t._v(" 目录中，可以根据业务逻辑将其目录分层")]),t._v(" "),a("li",[t._v("Service 方法无状态，这就意味着无论在控制器方法，命令行，测试代码中，都可以调用")])]),t._v(" "),a("h3",{attrs:{id:"表单验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表单验证"}},[t._v("#")]),t._v(" 表单验证")]),t._v(" "),a("p",[t._v("必须使用表单请求类来处理控制器里的表单验证")]),t._v(" "),a("p",[t._v("绝不使用 "),a("code",[t._v("authorize()")]),t._v(" 方法来做用户授权，用户授权单独使用授权策略来实现")]),t._v(" "),a("p",[t._v("所有 FormRequest 表验证类必须继承 app/Http/Requests/Request.php 基类。")]),t._v(" "),a("p",[t._v("FormRequest 表验证类命名必须按照控制器方法来命名，且必须添加模型的前缀，类名称的 Request 后缀也是必须的。")]),t._v(" "),a("h3",{attrs:{id:"中间件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#中间件"}},[t._v("#")]),t._v(" 中间件")]),t._v(" "),a("p",[t._v("Auth 中间件必须写在控制器的 "),a("code",[t._v("__construct")]),t._v(" 方法中，并且必须使用 except 黑名单进行过滤，这样当你新增控制器方法时，默认是安全的。")]),t._v(" "),a("h3",{attrs:{id:"授权策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#授权策略"}},[t._v("#")]),t._v(" 授权策略")]),t._v(" "),a("ul",[a("li",[t._v("授权相关逻辑，必须使用授权策略类来实现。")]),t._v(" "),a("li",[t._v("授权策略类命名必须以 Policy 结尾，遵循资源路由单数形式进行命名。")]),t._v(" "),a("li",[t._v("应该使用自动发现授权策略方法")]),t._v(" "),a("li",[t._v("所有的授权策略类必须继承 "),a("code",[t._v("App\\Policies\\Policy")]),t._v(" 基类。")])]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Policies")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Illuminate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Auth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Access"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("HandlesAuthorization")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[t._v("Policy")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("HandlesAuthorization")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("__construct")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("before")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$user")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$ability")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$user")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isAdmin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])]),a("h3",{attrs:{id:"数据填充"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据填充"}},[t._v("#")]),t._v(" 数据填充")]),t._v(" "),a("ul",[a("li",[t._v("文件名需要按照驼峰式来命名，并且严格遵守大小写规范，例如 "),a("code",[t._v("UsersTableSeeder")])]),t._v(" "),a("li",[t._v("必须使用 "),a("code",[t._v("factory")]),t._v(" 方法来做数据填充，")]),t._v(" "),a("li",[t._v("另外需要注意的是运行效率，keep it lighting speed.")])]),t._v(" "),a("p",[t._v("所有的假数据入库操作，都必须使用批量操作。")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$users")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("User")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("factory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("times")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("User")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("insert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$users")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toArray")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=v.exports}}]);
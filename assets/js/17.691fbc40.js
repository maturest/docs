(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{289:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"数据迁移"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据迁移"}},[t._v("#")]),t._v(" 数据迁移")]),t._v(" "),s("p",[t._v("数据迁移有以下好处：多人并行开发、代码版本管理、数据库版本控制、兼容多种数据库、部署方便。")]),t._v(" "),s("h2",{attrs:{id:"生成迁移"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成迁移"}},[t._v("#")]),t._v(" 生成迁移")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("php artisan make"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("migration create_users_table "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("database"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("migrations"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("users\n")])])]),s("h3",{attrs:{id:"整合迁移"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#整合迁移"}},[t._v("#")]),t._v(" 整合迁移")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("php artisan schema"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("dump\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 转储当前数据库架构并删除所有现有迁移")]),t._v("\nphp artisan schema"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("dump "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("prune\n")])])]),s("h3",{attrs:{id:"设置数据连接和表选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置数据连接和表选项"}},[t._v("#")]),t._v(" 设置数据连接和表选项")]),t._v(" "),s("p",[t._v("下面只是罗列平常用到的，如弱深究，可以查看源码")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 添加连接属性")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$connection")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'other_connection'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 除了上面设置的属性，还可以使用以下方式")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Schema")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("connection")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'sqlite'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'users'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[t._v("Blueprint")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$table")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// engine 属性指定表的存储引擎")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$table")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("engine")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'InnoDB'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定字符集")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$table")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("charset")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'utf8mb4'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定排序规则 ")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$table")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("collation")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'utf8mb4_unicode_ci'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 添加标注释")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$table")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("comment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Business calculations'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$table")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 外检约束")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$table")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foreign")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'user_id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("references")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'users'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onDelete")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'cascade'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Laravel 默认会自动将数据表名称、索引的字段名及索引类型简单地连接在一起作为名称。")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 删除 'geo_state_index' 索引")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$table")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dropIndex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'geo_state_index'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$table")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dropIndex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'state'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$table")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dropForeign")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'posts_user_id_foreign'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$table")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dropForeign")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'user_id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("h3",{attrs:{id:"执行迁移"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行迁移"}},[t._v("#")]),t._v(" 执行迁移")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("\nphp artisan migrate\n\nphp artisan migrate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("status\n\nphp artisan migrate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("rollback\n\nphp artisan migrate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("rollback "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("step"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n\nphp artisan migrate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("reset\n\nphp artisan migrate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("refresh\n\nphp artisan migrate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("refresh "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("seed\n\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);
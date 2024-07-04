(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{340:function(t,n,a){"use strict";a.r(n);var s=a(14),e=Object(s.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"脚本结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#脚本结构"}},[t._v("#")]),t._v(" 脚本结构")]),t._v(" "),n("blockquote",[n("p",[t._v("Python中没有用花括号来构造代码块而是使用了缩进的方式来表示代码的层次结构。")])]),t._v(" "),n("p",[t._v("脚本结构一般分为脚本头，引用部分，业务部分。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("# coding:utf-8\n\n# 一个空行\n\n# 引用部分\n\n# 两个空行\n\n# 业务部分\n\n")])])]),n("h3",{attrs:{id:"脚本的执行"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#脚本的执行"}},[t._v("#")]),t._v(" 脚本的执行")]),t._v(" "),n("p",[t._v("终端执行")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("python hello.py\n")])])]),n("p",[t._v("编辑器执行")]),t._v(" "),n("h3",{attrs:{id:"头部注释"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#头部注释"}},[t._v("#")]),t._v(" 头部注释")]),t._v(" "),n("p",[t._v("头注释并不是为代码服务，而是更多的被系统或解释器所调用，比如 指明 python 的解释器在哪，脚本编码格式是啥。")]),t._v(" "),n("p",[t._v("常见的头部注释：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("# coding:utf-8\n\n#!/usr/bin/env 指定目录下的命令解释器\n")])])]),n("h3",{attrs:{id:"导入位置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#导入位置"}},[t._v("#")]),t._v(" 导入位置")]),t._v(" "),n("p",[t._v("1、导入的是什么：")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("导入是将 python的一些功能函数放到当前脚本中使用")])]),t._v(" "),n("li",[n("p",[t._v("不导入的功能无法直接在当前脚本使用（除了内置函数）")])])]),t._v(" "),n("p",[t._v("2、为什么要导入：")]),t._v(" "),n("p",[t._v("节省开发的时间成本，有太多的工程师为其添砖加瓦")]),t._v(" "),n("p",[t._v("3、为什么是在头注释下面：")]),t._v(" "),n("p",[t._v("代码由上至下执行")]),t._v(" "),n("p",[t._v("4、导入的语法：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("import os\n")])])]),n("h3",{attrs:{id:"代码注释"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码注释"}},[t._v("#")]),t._v(" 代码注释")]),t._v(" "),n("p",[t._v("为什么要注释？")]),t._v(" "),n("p",[t._v("注释的三种用法：")]),t._v(" "),n("ul",[n("li",[t._v("#/")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("# 这是一段测试代码\n")])])]),n("ul",[n("li",[t._v("三引号")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('"""\n\t 这是三引号的注释，注意注释的内容为最后一个引号的尾巴\n"""\n')])])]),n("ul",[n("li",[t._v("三单引号")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("'''\n\t这是三单引号的注释，注意注释的内容为最后一个引号的尾巴\n'''\n")])])]),n("h3",{attrs:{id:"执行入口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#执行入口"}},[t._v("#")]),t._v(" 执行入口")]),t._v(" "),n("p",[t._v("什么是脚本入口？一般我们称代码的执行入口叫做主函数 "),n("code",[t._v("main")])]),t._v(" "),n("p",[t._v("入口的写法：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("__name__ == '__main__'\n")])])]),n("p",[t._v("缩进")]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# coding:utf-8")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" os\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" __name__ "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'__main__'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("os"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getcwd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),n("p",[t._v("是否一定需要脚本入口：并不是")]),t._v(" "),n("h3",{attrs:{id:"练习"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#练习"}},[t._v("#")]),t._v(" 练习")]),t._v(" "),n("p",[t._v("打印 Python 之禅，并尝试翻译它：")]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" this\n\n"),n("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v("'''\nBeautiful is better than ugly.\n代码应该尽可能美观，避免冗余和混乱。\n\nExplicit is better than implicit.\n代码应该尽可能明确，避免隐式或模糊的行为。\n\nSimple is better than complex.\n简单的解决方案通常比复杂的解决方案更好。\n\nComplex is better than complicated.\n复杂性是不可避免的，但要尽量使其易于理解和管理，避免过于复杂的结构或逻辑。\n\nFlat is better than nested.\n避免过深的嵌套结构，使代码更加扁平化。\n\nSparse is better than dense.\n代码应该尽可能稀疏，避免拥挤和难以阅读。\n\nReadability counts.\n可读性非常重要，应该优先考虑代码的易读性。\n\nSpecial cases aren't special enough to break the rules.\n即使特殊情况，也不应该打破上述规则。\n\nAlthough practicality beats purity.\n虽然追求完美是好的，但实用性通常更重要。\n\nErrors should never pass silently.\n错误不应该被静默地忽略，应该给出明确的错误信息。\n\nUnless explicitly silenced.\n除非明确地禁止了错误信息，否则不应该忽略它。\n\nIn the face of ambiguity, refuse the temptation to guess.\n当遇到不明确的情况时，不要试图猜测，而是应该寻找明确的信息或解决方案。\n\nThere should be one-- and preferably only one --obvious way to do it.\n对于每一个问题，都应该有一个（最好是唯一的）显而易见的解决方案。\n\nAlthough that way may not be obvious at first unless you're Dutch.\n这是一个玩笑，暗示Python的设计哲学可能对于某些文化或背景的人来说更加直观。\n\nNow is better than never.\n现在行动总比永远不行动要好。\n\nAlthough never is often better than right now.\n但是，有时候不立即行动（即“永远不”）可能比现在立即行动要好。这强调了不要急于求成，而是应该仔细考虑和计划。\n\nIf the implementation is hard to explain, it's a bad idea.\n如果实现难以解释，那么这可能不是一个好主意。\n\nIf the implementation is easy to explain, it may be a good idea.\n如果实现易于解释，那么这可能是一个好主意。\n\nNamespaces are one honking great idea -- let's do more of those!\n命名空间是一个非常好的想法，我们应该更多地使用它们来组织代码。这有助于避免命名冲突和提高代码的可读性。\n'''")]),t._v("\n\n")])])]),n("p",[t._v("画个图试试：")]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v("'''\n   使用小乌龟进行画图\n'''")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" turtle\n\nturtle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("forward"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nturtle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("90")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nturtle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("forward"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nturtle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("90")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nturtle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("forward"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nturtle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("90")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nturtle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("forward"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nturtle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("circle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\nturtle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("goto"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置画笔的颜色")]),t._v("\nturtle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pencolor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'white'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nturtle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("goto"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 画圆")]),t._v("\nturtle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pencolor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'black'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nturtle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("circle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\nturtle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pencolor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'white'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nturtle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("goto"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("150")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("150")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nturtle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("circle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("180")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nturtle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pencolor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'black'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nturtle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("circle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("180")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nturtle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mainloop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])])])}),[],!1,null,null,null);n.default=e.exports}}]);
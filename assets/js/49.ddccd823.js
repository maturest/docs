(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{322:function(t,s,n){"use strict";n.r(s);var a=n(14),e=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"文件和异常"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件和异常"}},[t._v("#")]),t._v(" 文件和异常")]),t._v(" "),s("h3",{attrs:{id:"读写文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#读写文件"}},[t._v("#")]),t._v(" 读写文件")]),t._v(" "),s("blockquote",[s("p",[t._v("在处理文件对象时，最好使用 with 关键字。优点是，子句体结束后，文件会正确关闭，即便触发异常也可以。而且，使用 with 相比等效的 try-finally 代码块要简短得多，如果没有使用 with 关键字，则应调用 f.close() 关闭文件，即可释放文件占用的系统资源。")])]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 读取每行的数据")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a.txt'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'r+'")]),t._v(" encoding"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"utf-8"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" line "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("line"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" end"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将 json 与列表进行相互转换")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" json  \n  \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 假设你有一个 list  ")]),t._v("\nmy_list "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'apple'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'banana'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cherry'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  \n  \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用 json.dumps() 将其转换为 JSON 字符串  ")]),t._v("\njson_string "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" json"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dumps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("my_list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用 json.loads() 将其转换回 list")]),t._v("\nmy_list "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" json"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loads"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("json_string"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    \n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("json_string"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("json_string"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# 输出: \'["apple", "banana", "cherry"]\'')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("my_list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("my_list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("p",[t._v("json模块主要有四个比较重要的函数，分别是：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("dump - 将Python对象按照JSON格式序列化到文件中")])]),t._v(" "),s("li",[s("p",[t._v("dumps - 将Python对象处理成JSON格式的字符串")])]),t._v(" "),s("li",[s("p",[t._v("load - 将文件中的JSON数据反序列化成对象")])]),t._v(" "),s("li",[s("p",[t._v("loads - 将字符串的内容反序列化成Python对象")])])]),t._v(" "),s("h3",{attrs:{id:"异常"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#异常"}},[t._v("#")]),t._v(" 异常")]),t._v(" "),s("p",[t._v("使用关键字触发异常"),s("code",[t._v("raise")]),t._v(",使用 "),s("code",[t._v("try except")]),t._v(" 捕获异常。")]),t._v(" "),s("p",[t._v("一个 except 子句中的类匹配的异常将是该类本身的实例或其所派生的类的实例（但反过来则不可以 --- 列出派生类的 except 子句 不会匹配其基类的实例）。 例如，下面的代码将依次打印 B, C, D:")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("B")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Exception"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pass")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("C")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("B"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pass")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("D")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("C"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pass")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" cls "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("B"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" C"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" D"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("raise")]),t._v(" cls"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),t._v(" D"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"D"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),t._v(" C"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"C"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),t._v(" B"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"B"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("请注意如果颠倒 except 子句 的顺序（把 except B 放在最前），则会输出 B, B, B --- 即触发了第一个匹配的 except 子句。")]),t._v(" "),s("p",[s("code",[t._v("try ... except")]),t._v(" 语句具有可选的 else 子句，该子句如果存在，它必须放在所有 except 子句 之后。 它适用于 try 子句 没有引发异常但又必须要执行的代码。")]),t._v(" "),s("p",[t._v("如果存在 finally 子句，则 finally 子句是 try 语句结束前执行的最后一项任务。不论 try 语句是否触发异常，都会执行 finally 子句。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("如果执行 try 子句期间触发了某个异常，则某个 except 子句应处理该异常。如果该异常没有 except 子句处理，在 finally 子句执行后会被重新触发。")])]),t._v(" "),s("li",[s("p",[t._v("except 或 else 子句执行期间也会触发异常。 同样，该异常会在 finally 子句执行之后被重新触发。")])]),t._v(" "),s("li",[s("p",[t._v("如果 finally 子句中包含 break、continue 或 return 等语句，异常将不会被重新引发。")])]),t._v(" "),s("li",[s("p",[t._v("如果执行 try 语句时遇到 break,、continue 或 return 语句，则 finally 子句在执行 break、continue 或 return 语句之前执行。")])]),t._v(" "),s("li",[s("p",[t._v("如果 finally 子句中包含 return 语句，则返回值来自 finally 子句的某个 return 语句的返回值，而不是来自 try 子句的 return 语句的返回值。")])])]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("divide")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" y\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),t._v(" ZeroDivisionError"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"division by zero!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"result is"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("finally")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"executing finally clause"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\ndivide"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# result is 2.0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# executing finally clause")]),t._v("\n\n\ndivide"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# division by zero!")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# executing finally clause")]),t._v("\n\ndivide"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# executing finally clause")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Traceback (most recent call last):")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);
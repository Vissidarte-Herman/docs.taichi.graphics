(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{512:function(t,s,a){"use strict";a.r(s);var n=a(20),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"类型系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型系统"}},[t._v("#")]),t._v(" 类型系统")]),t._v(" "),a("p",[t._v("Taichi supports common numerical data types. Each type is denoted as a\ncharacter indicating its "),a("em",[t._v("category")]),t._v(" and a number of "),a("em",[t._v("precision bits")]),t._v(",\ne.g., "),a("code",[t._v("i32")]),t._v(" and "),a("code",[t._v("f64")]),t._v(".")]),t._v(" "),a("p",[t._v("The "),a("em",[t._v("category")]),t._v(" can be one of:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("i")]),t._v(" for signed integers, e.g. 233, -666")]),t._v(" "),a("li",[a("code",[t._v("u")]),t._v(" for unsigned integers, e.g. 233, 666")]),t._v(" "),a("li",[a("code",[t._v("f")]),t._v(" for floating point numbers, e.g. 2.33, 1e-4")])]),t._v(" "),a("p",[t._v("The "),a("em",[t._v("digital number")]),t._v(" can be one of:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("8")])]),t._v(" "),a("li",[a("code",[t._v("16")])]),t._v(" "),a("li",[a("code",[t._v("32")])]),t._v(" "),a("li",[a("code",[t._v("64")])])]),t._v(" "),a("p",[t._v("It represents how many "),a("strong",[t._v("bits")]),t._v(" are used in storing the data. The larger\nthe bit number, the higher the precision is.")]),t._v(" "),a("p",[t._v("For example, the two most commonly used types:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("i32")]),t._v(" represents a 32-bit signed integer.")]),t._v(" "),a("li",[a("code",[t._v("f32")]),t._v(" represents a 32-bit floating pointer number.")])]),t._v(" "),a("h2",{attrs:{id:"supported-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#supported-types"}},[t._v("#")]),t._v(" Supported types")]),t._v(" "),a("p",[t._v("Currently, supported basic types in Taichi are")]),t._v(" "),a("ul",[a("li",[t._v("int8 "),a("code",[t._v("ti.i8")])]),t._v(" "),a("li",[t._v("int16 "),a("code",[t._v("ti.i16")])]),t._v(" "),a("li",[t._v("int32 "),a("code",[t._v("ti.i32")])]),t._v(" "),a("li",[t._v("int64 "),a("code",[t._v("ti.i64")])]),t._v(" "),a("li",[t._v("uint8 "),a("code",[t._v("ti.u8")])]),t._v(" "),a("li",[t._v("uint16 "),a("code",[t._v("ti.u16")])]),t._v(" "),a("li",[t._v("uint32 "),a("code",[t._v("ti.u32")])]),t._v(" "),a("li",[t._v("uint64 "),a("code",[t._v("ti.u64")])]),t._v(" "),a("li",[t._v("float32 "),a("code",[t._v("ti.f32")])]),t._v(" "),a("li",[t._v("float64 "),a("code",[t._v("ti.f64")])])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("Supported types on each backend:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("type")]),t._v(" "),a("th",[t._v("CPU/CUDA")]),t._v(" "),a("th",[t._v("OpenGL")]),t._v(" "),a("th",[t._v("Metal")]),t._v(" "),a("th",[t._v("C source")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("i8")]),t._v(" "),a("td",[t._v("> OK")]),t._v(" "),a("td",[t._v("> N/A")]),t._v(" "),a("td",[t._v("> OK")]),t._v(" "),a("td",[t._v("> OK")])]),t._v(" "),a("tr",[a("td",[t._v("i16")]),t._v(" "),a("td",[t._v("> OK")]),t._v(" "),a("td",[t._v("> N/A")]),t._v(" "),a("td",[t._v("> OK")]),t._v(" "),a("td",[t._v("> OK")])]),t._v(" "),a("tr",[a("td",[t._v("i32")]),t._v(" "),a("td",[t._v("> OK")]),t._v(" "),a("td",[t._v("> OK")]),t._v(" "),a("td",[t._v("> OK")]),t._v(" "),a("td",[t._v("> OK")])]),t._v(" "),a("tr",[a("td",[t._v("i64")]),t._v(" "),a("td",[t._v("> OK")]),t._v(" "),a("td",[t._v("> EXT")]),t._v(" "),a("td",[t._v("> N/A")]),t._v(" "),a("td",[t._v("> OK")])]),t._v(" "),a("tr",[a("td",[t._v("u8")]),t._v(" "),a("td",[t._v("> OK")]),t._v(" "),a("td",[t._v("> N/A")]),t._v(" "),a("td",[t._v("> OK")]),t._v(" "),a("td",[t._v("> OK")])]),t._v(" "),a("tr",[a("td",[t._v("u16")]),t._v(" "),a("td",[t._v("> OK")]),t._v(" "),a("td",[t._v("> N/A")]),t._v(" "),a("td",[t._v("> OK")]),t._v(" "),a("td",[t._v("> OK")])]),t._v(" "),a("tr",[a("td",[t._v("u32")]),t._v(" "),a("td",[t._v("> OK")]),t._v(" "),a("td",[t._v("> N/A")]),t._v(" "),a("td",[t._v("> OK")]),t._v(" "),a("td",[t._v("> OK")])]),t._v(" "),a("tr",[a("td",[t._v("u64")]),t._v(" "),a("td",[t._v("> OK")]),t._v(" "),a("td",[t._v("> N/A")]),t._v(" "),a("td",[t._v("> N/A")]),t._v(" "),a("td",[t._v("> OK")])]),t._v(" "),a("tr",[a("td",[t._v("f32")]),t._v(" "),a("td",[t._v("> OK")]),t._v(" "),a("td",[t._v("> OK")]),t._v(" "),a("td",[t._v("> OK")]),t._v(" "),a("td",[t._v("> OK")])]),t._v(" "),a("tr",[a("td",[t._v("f64")]),t._v(" "),a("td",[t._v("> OK")]),t._v(" "),a("td",[t._v("> OK")]),t._v(" "),a("td",[t._v("> N/A")]),t._v(" "),a("td",[t._v("> OK")])])])]),t._v(" "),a("p",[t._v("(OK: supported, EXT: require extension, N/A: not available)")])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("Boolean types are represented using "),a("code",[t._v("ti.i32")]),t._v(".")])]),t._v(" "),a("h2",{attrs:{id:"type-promotion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type-promotion"}},[t._v("#")]),t._v(" Type promotion")]),t._v(" "),a("p",[t._v("Binary operations on different types will give you a promoted type,\nfollowing the C programming language convention, e.g.:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("i32 + f32 = f32")]),t._v(" (integer + float = float)")]),t._v(" "),a("li",[a("code",[t._v("i32 + i64 = i64")]),t._v(" (less-bits + more-bits = more-bits)")])]),t._v(" "),a("p",[t._v("Basically it will try to choose the more precise type to contain the\nresult value.")]),t._v(" "),a("h2",{attrs:{id:"default-precisions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#default-precisions"}},[t._v("#")]),t._v(" Default precisions")]),t._v(" "),a("p",[t._v("By default, all numerical literals have 32-bit precisions. For example,\n"),a("code",[t._v("42")]),t._v(" has type "),a("code",[t._v("ti.i32")]),t._v(" and "),a("code",[t._v("3.14")]),t._v(" has type "),a("code",[t._v("ti.f32")]),t._v(".")]),t._v(" "),a("p",[t._v("Default integer and float-point precisions ("),a("code",[t._v("default_ip")]),t._v(" and\n"),a("code",[t._v("default_fp")]),t._v(") can be specified when initializing Taichi:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("init"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default_fp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("f32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("init"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default_fp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("f64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("init"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default_ip"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("i32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("init"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default_ip"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("i64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Also note that you may use "),a("code",[t._v("float")]),t._v(" or "),a("code",[t._v("int")]),t._v(" in type definitions as\naliases for default precisions, e.g.:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("init"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default_ip"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("i64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" default_fp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("f32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("field"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("float")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ny "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("field"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# is equivalent to:")]),t._v("\nx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("field"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("f32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ny "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("field"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("i64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("float")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# is equivalent to:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("f32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("i64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])]),a("h2",{attrs:{id:"type-casts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type-casts"}},[t._v("#")]),t._v(" Type casts")]),t._v(" "),a("h3",{attrs:{id:"implicit-casts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implicit-casts"}},[t._v("#")]),t._v(" Implicit casts")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("The type of a variable is "),a("strong",[t._v("determinated on it's initialization")]),t._v(".")])]),t._v(" "),a("p",[t._v("When a "),a("em",[t._v("low-precision")]),t._v(" variable is assigned to a "),a("em",[t._v("high-precision")]),t._v("\nvariable, it will be implicitly promoted to the "),a("em",[t._v("high-precision")]),t._v(" type\nand no warning will be raised:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.7")]),t._v("\na "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1.0")]),t._v("\n")])])]),a("p",[t._v("When a "),a("em",[t._v("high-precision")]),t._v(" variable is assigned to a "),a("em",[t._v("low-precision")]),t._v(" type,\nit will be implicitly down-cast into the "),a("em",[t._v("low-precision")]),t._v(" type and Taichi\nwill raise a warning:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\na "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.7")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1")]),t._v("\n")])])]),a("h3",{attrs:{id:"explicit-casts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#explicit-casts"}},[t._v("#")]),t._v(" Explicit casts")]),t._v(" "),a("p",[t._v("You may use "),a("code",[t._v("ti.cast")]),t._v(" to explicitly cast scalar values between different\ntypes:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.7")]),t._v("\nb "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("i32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1")]),t._v("\nc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("f32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1.0")]),t._v("\n")])])]),a("p",[t._v("Equivalently, use "),a("code",[t._v("int()")]),t._v(" and "),a("code",[t._v("float()")]),t._v(" to convert values to float-point\nor integer types of default precisions:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.7")]),t._v("\nb "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1")]),t._v("\nc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("float")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1.0")]),t._v("\n")])])]),a("h3",{attrs:{id:"casting-vectors-and-matrices"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#casting-vectors-and-matrices"}},[t._v("#")]),t._v(" Casting vectors and matrices")]),t._v(" "),a("p",[t._v("Type casts applied to vectors/matrices are element-wise:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("u "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Vector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nv "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("u"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("              "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ti.Vector([2, 4])")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# If you are using ti.i32 as default_ip, this is equivalent to:")]),t._v("\nv "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("u"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("i32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ti.Vector([2, 4])")]),t._v("\n")])])]),a("h3",{attrs:{id:"bit-casting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bit-casting"}},[t._v("#")]),t._v(" Bit casting")]),t._v(" "),a("p",[t._v("Use "),a("code",[t._v("ti.bit_cast")]),t._v(" to bit-cast a value into another data type. The\nunderlying bits will be preserved in this cast. The new type must have\nthe same width as the the old type. For example, bit-casting "),a("code",[t._v("i32")]),t._v(" to\n"),a("code",[t._v("f64")]),t._v(" is not allowed. Use this operation with caution.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("For people from C++, "),a("code",[t._v("ti.bit_cast")]),t._v(" is equivalent to "),a("code",[t._v("reinterpret_cast")]),t._v(".")])])])}),[],!1,null,null,null);s.default=e.exports}}]);
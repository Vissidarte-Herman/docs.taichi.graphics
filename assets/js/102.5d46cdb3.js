(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{513:function(t,a,e){"use strict";e.r(a);var i=e(20),n=Object(i.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"安装-legacy-taichi-库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-legacy-taichi-库"}},[t._v("#")]),t._v(" 安装 legacy Taichi 库")]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),e("p",[t._v("This is NOT for installing the Taichi programming language. Unless you\nare building a legacy project based on the "),e("a",{attrs:{href:"https://github.com/yuanming-hu/taichi/tree/legacy",target:"_blank",rel:"noopener noreferrer"}},[t._v("legacy Taichi\nlibrary"),e("OutboundLink")],1),t._v(" (e.g.\n"),e("a",{attrs:{href:"https://github.com/yuanming-hu/taichi_mpm",target:"_blank",rel:"noopener noreferrer"}},[t._v("taichi_mpm"),e("OutboundLink")],1),t._v(" and\n"),e("a",{attrs:{href:"https://github.com/yuanming-hu/spgrid_topo_opt",target:"_blank",rel:"noopener noreferrer"}},[t._v("spgrid_topo_opt"),e("OutboundLink")],1),t._v(") you\nshould always install Taichi using "),e("code",[t._v("pip")]),t._v(".")]),t._v(" "),e("p",[t._v("If you are working on the Taichi compiler and need to build from source,\nsee "),e("RouterLink",{attrs:{to:"/zh/docs/develop/contribution/dev_install.html"}},[t._v("Developer installation section of the Contribution Guide")]),t._v(".")],1)]),t._v(" "),e("p",[t._v("Supported platforms:")]),t._v(" "),e("ul",[e("li",[t._v("Ubuntu (gcc 5+)")]),t._v(" "),e("li",[t._v("Mac OS X (gcc 5+, clang 4.0+)")]),t._v(" "),e("li",[t._v("Windows (Microsoft Visual Studio 2017)")])]),t._v(" "),e("p",[t._v("Make sure you have "),e("code",[t._v("python 3.5+")]),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"ubuntu-arch-linux-and-mac-os-x"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-arch-linux-and-mac-os-x"}},[t._v("#")]),t._v(" Ubuntu, Arch Linux, and Mac OS X")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://raw.githubusercontent.com/yuanming-hu/taichi/legacy/install.py\npython3 install.py\n")])])]),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),e("p",[t._v("Note, if Python complains that a package is missing, simply rerun\n"),e("code",[t._v("install.py")]),t._v(" and the package should be loaded.")])]),t._v(" "),e("h2",{attrs:{id:"windows"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[t._v("#")]),t._v(" Windows")]),t._v(" "),e("p",[t._v("Download and execute "),e("a",{attrs:{href:"https://raw.githubusercontent.com/yuanming-hu/taichi/legacy/install.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("this\nscript"),e("OutboundLink")],1),t._v(" with Python3.")]),t._v(" "),e("p",[t._v("Additional environment variables (assuming taichi is installed in\n"),e("code",[t._v("DIR/taichi")]),t._v("):")]),t._v(" "),e("ul",[e("li",[t._v("Set "),e("code",[t._v("TAICHI_REPO_DIR")]),t._v(" as "),e("code",[t._v("DIR/taichi")]),t._v(" (e.g.\n"),e("code",[t._v("E:/repos/taichi")]),t._v(").")]),t._v(" "),e("li",[t._v("Add "),e("code",[t._v("%TAICHI_REPO_DIR%/python")]),t._v(" to "),e("code",[t._v("PYTHONPATH")]),t._v(",\n"),e("code",[t._v("DIR/taichi/bin")]),t._v(" (e.g. "),e("code",[t._v("E:/repos/taichi/bin")]),t._v(") to "),e("code",[t._v("PATH")]),t._v(".")]),t._v(" "),e("li",[t._v("Restart cmd or PowerShell, and you should be able to run command "),e("code",[t._v("ti")]),t._v(".")])]),t._v(" "),e("h2",{attrs:{id:"build-with-double-precision-64-bit-float-point"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#build-with-double-precision-64-bit-float-point"}},[t._v("#")]),t._v(" Build with Double Precision (64 bit) Float Point")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("TC_USE_DOUBLE")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nti build\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);
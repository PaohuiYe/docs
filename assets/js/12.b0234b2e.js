(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{364:function(t,s,a){"use strict";a.r(s);var n=a(42),i=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("[TOC]")]),t._v(" "),a("h1",{attrs:{id:"插入排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插入排序"}},[t._v("#")]),t._v(" 插入排序")]),t._v(" "),a("h2",{attrs:{id:"直接插入排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#直接插入排序"}},[t._v("#")]),t._v(" 直接插入排序")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("思想")])]),t._v(" "),a("p",[t._v("每次将一个待排序的元素插入到前面已经有序的子序列中。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("算法")])]),t._v(" "),a("p",[t._v("第一个元素已经形成有序子序列，从第二个元素开始：")]),t._v(" "),a("ol",[a("li",[t._v("在有序子序列中查找合适的位置"),a("code",[t._v("i")]),t._v("，同时将经过的元素后移一位；")]),t._v(" "),a("li",[t._v("将当前元素写入位置"),a("code",[t._v("i")]),t._v(";")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("实现")])]),t._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("template<typename T>\nvoid insertSort(T &data) {\n\t//依次将元素插入其到前面的有序序列中\n\tfor (int i = 1; i < data.size(); i++) {\n\t\tint curr = data.at(i);//记录当前元素\n\t\tint j = i - 1;\n\t\t//当前元素依次与前面元素比较，并将大于当前元素的元素后移一位\n\t\tfor (; j >= 0 && curr < data.at(j); j--)\n\t\t\tdata.at(j + 1) = data.at(j);//后移\t\t\t\n\t\tdata.at(j + 1) = curr;//空位填入当前元素\n\t}\n}\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("性能")])]),t._v(" "),a("ul",[a("li",[t._v("时间复杂度：平均O(n^2^)，最优O(n)")]),t._v(" "),a("li",[t._v("空间复杂度：O(1)")]),t._v(" "),a("li",[t._v("稳定性：稳定")]),t._v(" "),a("li",[t._v("适用于：原序列基本有序，规模较小，这样移动次数少")])])])]),t._v(" "),a("h2",{attrs:{id:"折半插入排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#折半插入排序"}},[t._v("#")]),t._v(" 折半插入排序")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("思想")])]),t._v(" "),a("p",[t._v("类似于直接插入排序，不过将查找与移动操作分离，查找使用折半查找。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("算法")])]),t._v(" "),a("p",[t._v("第一个元素已经形成有序子序列，从第二个元素开始：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("在有序子序列中折半查找合适的位置"),a("code",[t._v("i")]),t._v("；")])]),t._v(" "),a("li",[a("p",[t._v("将"),a("code",[t._v("i")]),t._v("开始往后的元素后移一位；")])]),t._v(" "),a("li",[a("p",[t._v("将当前元素写入位置"),a("code",[t._v("i")]),t._v(";")])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("实现")])]),t._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("template<typename T>\nvoid binaryInsertSort(T &data) {\n\tfor (int i = 1; i < data.size(); i++) {\n\t\tint curr = data.at(i);\n         //折半查找\n\t\tint low = 0, high = i - 1;\t\t\n\t\twhile (low <= high)\n\t\t{\n\t\t\tint mid = (low + high) / 2;\n\t\t\tif (data.at(mid) < curr) low = mid + 1;\n\t\t\telse high = mid - 1;\n\t\t}\n\t\t//high  * curr   mid\n\t\tfor (int j = i; j > high + 1; j--) {\n\t\t\tdata.at(j) = data.at(j - 1);\n\t\t}\n\t\tdata.at(high + 1) = curr;\n\t}\n}\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("分析")])]),t._v(" "),a("p",[t._v("结论：折半查找结束总有位置关系"),a("code",[t._v("high")]),t._v(" <= "),a("code",[t._v("KEY")]),t._v(" <=  "),a("code",[t._v("low")]),t._v("，且"),a("code",[t._v("high + 1 = low")]),t._v("。")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("情况1：")])]),t._v(" "),a("p",[a("img",{attrs:{src:"D:%5CNotebook%5Cimg%5C1585582199177.png",alt:"1585582199177"}})]),t._v(" "),a("p",[t._v("KEY始终小于mid值，high不断减一，直到high小于low。")]),t._v(" "),a("p",[t._v("最终"),a("code",[t._v("high = low - 1 = -1")]),t._v("。low是第一个比KEY大的。"),a("code",[t._v("high(null)")]),t._v(" "),a("code",[t._v("KEY")]),t._v("  <  "),a("code",[t._v("low")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("情况2：")])]),t._v(" "),a("p",[a("img",{attrs:{src:"D:%5CNotebook%5Cimg%5C1585582540166.png",alt:"1585582540166"}})]),t._v(" "),a("p",[t._v("KEY等于low值，mid一开始位于low、high之间，high不断减一，直到high= low时，high仍会减一次一。")]),t._v(" "),a("p",[t._v("最终"),a("code",[t._v("high = low - 1 = -1")]),t._v("。low值等于KEY。"),a("code",[t._v("high(null)")]),t._v(" "),a("code",[t._v("KEY")]),t._v("  =  "),a("code",[t._v("low")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("情况3")])]),t._v(" "),a("p",[a("img",{attrs:{src:"D:%5CNotebook%5Cimg%5C1585583278406.png",alt:"1585583278406"}})]),t._v(" "),a("p",[t._v("KEY等于high值，mid一开始位于low、high之间，low不断加一，直到low = high时，high仍会减一次一。")]),t._v(" "),a("p",[t._v("最终"),a("code",[t._v("high = low - 1")]),t._v("。high值等于KEY。"),a("code",[t._v("high")]),t._v(" < "),a("code",[t._v("KEY")]),t._v("  =  "),a("code",[t._v("low")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("情况4")])]),t._v(" "),a("p",[a("img",{attrs:{src:"D:%5CNotebook%5Cimg%5C1585583575580.png",alt:"1585583575580"}})]),t._v(" "),a("p",[t._v("KEY始终大于high值，low不断加一，直到low大于high。")]),t._v(" "),a("p",[t._v("最终"),a("code",[t._v("low = high + 1")]),t._v("。high是第一个比KEY小的。"),a("code",[t._v("high")]),t._v(" < "),a("code",[t._v("KEY")]),t._v(" "),a("code",[t._v("low(null)")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("情况5：")])]),t._v(" "),a("p",[a("img",{attrs:{src:"D:%5CNotebook%5Cimg%5C1585582901145.png",alt:"1585582901145"}})]),t._v(" "),a("p",[t._v("当mid值始终不等于KEY时，可能low加一，可能high减一，但总会有low或high跳过KEY，此时转变为情况1或情况4；")]),t._v(" "),a("p",[t._v("当某次mid值等于KEY时，high仍会减一，转变为情况4；")]),t._v(" "),a("p",[t._v("==最终KEY值在high、low之间。==")])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("性能")])]),t._v(" "),a("p",[t._v("时空复杂度与直接插入排序相近，因为只减少了比较操作，移动操作未变。")]),t._v(" "),a("ul",[a("li",[t._v("稳定性：稳定")])])])]),t._v(" "),a("h2",{attrs:{id:"希尔排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#希尔排序"}},[t._v("#")]),t._v(" 希尔排序")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("思想")])]),t._v(" "),a("p",[t._v("针对直接插入排序适用于基本有序序列的特点，创造这个条件，然后使用直插。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("算法")])]),t._v(" "),a("ol",[a("li",[t._v("取增量di = d1将记录分成di组，同组内进行直接插入排序；")]),t._v(" "),a("li",[t._v("取增量di = d2（d2<d1），重复1；")]),t._v(" "),a("li",[t._v("直到取增量di = 1，对整个序列进行一次直接插入排序；")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("实现")])]),t._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("template<typename T>\nvoid shellSort(T &data) {\n\tint di = data.size() / 2;\n\tfor (; di >= 1; di /= 2)\n\t\tfor (int i = di; i < data.size(); i++) {//交替对每组进行直接插入排序\n\t\t\tint curr = data.at(i);\n\t\t\tint j = i - di;\n\t\t\tfor (; j >= 0 && curr < data.at(j); j -= di)\n\t\t\t\tdata.at(j + di) = data.at(j);\n\t\t\tdata.at(j + di) = curr;\n\t\t}\n}\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("分析")])]),t._v(" "),a("p",[t._v("一般取d1 = size/2，d~i+1~ = d~i~/2。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("性能")])]),t._v(" "),a("ul",[a("li",[t._v("时间复杂度：O(n^2^)")]),t._v(" "),a("li",[t._v("空间复杂度：O(1)")]),t._v(" "),a("li",[t._v("稳定性：不稳定（跳跃时相同元素分到不同组）")]),t._v(" "),a("li",[t._v("适用于：原序列无序，规模较大（相对直插）")])])])]),t._v(" "),a("hr"),t._v(" "),a("h1",{attrs:{id:"交换排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#交换排序"}},[t._v("#")]),t._v(" 交换排序")]),t._v(" "),a("h2",{attrs:{id:"冒泡排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#冒泡排序"}},[t._v("#")]),t._v(" 冒泡排序")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("思想")])]),t._v(" "),a("p",[t._v("从后往前将较小的元素交换到序列首位。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("算法")])]),t._v(" "),a("ol",[a("li",[t._v("从序列尾开始将最小的元素通过交换移动到当前序列首位；")]),t._v(" "),a("li",[t._v("去除首位元素重复1；")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("实现")])]),t._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("template<typename T>\nvoid BubbleSort(T &data) {\n\tfor (int i = 0; i < (int)data.size() - 1; i++) {//size-1次\n\t\tbool finished = true;//表示这趟冒泡是否因未发生交换从而可以直接结束\n\t\tfor (int j = (int)data.size() - 1; j > i; j--)//从队尾到i \n\t\t\tif (data.at(j) < data.at(j - 1)) {\n\t\t\t\tswap(data.at(j), data.at(j - 1));\n\t\t\t\tfinished = false;\n\t\t\t}\n\t\tif (finished) return;\n\t}\n}\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("性能")])]),t._v(" "),a("ul",[a("li",[t._v("时间复杂度：平均O(n^2^)，最优O(n)，最差O(n^2^)")]),t._v(" "),a("li",[t._v("空间复杂度：O(1)")]),t._v(" "),a("li",[t._v("稳定性：稳定")]),t._v(" "),a("li",[t._v("适用于：规模较大，无序时不宜采用")])])])]),t._v(" "),a("h2",{attrs:{id:"快速排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速排序"}},[t._v("#")]),t._v(" 快速排序")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("思想")])]),t._v(" "),a("p",[t._v("每次趟排序选取序列第一个元素作为基准，将所有小于该元素的元素移动到其左边，大于该元素的元素移动到其右边。对左边，右边进行递归。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("算法")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("选取"),a("code",[t._v("base")]),t._v("为序列首元素，左索引"),a("code",[t._v("l")]),t._v("指向序列首，右索引"),a("code",[t._v("r")]),t._v("指向序列尾；")])]),t._v(" "),a("li",[a("p",[t._v("根据索引遍历所有元素，小于"),a("code",[t._v("base")]),t._v("的移动到左边，大于"),a("code",[t._v("base")]),t._v("的移动到右边：")]),t._v(" "),a("p",[a("code",[t._v("r")]),t._v("递减过程中，当碰到小于"),a("code",[t._v("base")]),t._v("的元素，将其与"),a("code",[t._v("l")]),t._v("位置元素交换；")]),t._v(" "),a("p",[a("code",[t._v("l")]),t._v("递增过程中，当碰到大于"),a("code",[t._v("base")]),t._v("的元素，将其与"),a("code",[t._v("r")]),t._v("位置元素交换；")])]),t._v(" "),a("li",[a("p",[t._v("对"),a("code",[t._v("base")]),t._v("左右的序列递归；")])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("实现")])]),t._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("template<typename T>\nvoid quickSort(T &data, int start, int end) {\n\tif (start >= end) return;\n\tint base = data.at(start);\n\tint l = start, r = end;\n\twhile (l < r) {\n\t\twhile (l < r && data.at(r) >= base) r--;\n\t\tdata.at(l) = data.at(r);\n\t\twhile (l < r && data.at(l) <= base) l++;\n\t\tdata.at(r) = data.at(l);\n\t}\n\t//结束时 l 等于 r\n\tdata.at(l) = base;\n\tquickSort(data, start, l - 1);\n\tquickSort(data, l + 1, end);\n}\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("分析")])]),t._v(" "),a("p",[a("img",{attrs:{src:"D:%5CNotebook%5Cimg%5C1585631771875.png",alt:"1585631771875"}})])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("性能")])]),t._v(" "),a("ul",[a("li",[t._v("时间复杂度：平均O(nlog~2~n)，最差O(n^2^)，最优O(nlog~2~n)")]),t._v(" "),a("li",[t._v("空间复杂度：平均O(log~2~n)，最差O(n)")]),t._v(" "),a("li",[t._v("稳定性：不稳定")]),t._v(" "),a("li",[t._v("适用于：规模较大，无序")])])])]),t._v(" "),a("h1",{attrs:{id:"选择排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选择排序"}},[t._v("#")]),t._v(" 选择排序")]),t._v(" "),a("h2",{attrs:{id:"简单选择排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简单选择排序"}},[t._v("#")]),t._v(" 简单选择排序")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("思想")])]),t._v(" "),a("p",[t._v("第"),a("code",[t._v("i")]),t._v("趟排序，从第"),a("code",[t._v("i")]),t._v("个元素开始到序列尾中找到最小元素，替换第"),a("code",[t._v("i")]),t._v("个元素。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("算法")])]),t._v(" "),a("p",[t._v("遍历每个元素")]),t._v(" "),a("ol",[a("li",[t._v("从当前元素开始查找最小元素；")]),t._v(" "),a("li",[t._v("替换当前元素")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("实现")])]),t._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("template<typename T>\nvoid selectSort(T &data) {\t\n\tfor (int i = 0; i < (int)data.size() - 1; i++) {\n\t\tint minLoc = i;\n\t\tfor (int j = i + 1; j < data.size(); j++)\n\t\t\tif (data.at(j) < data.at(minLoc)) minLoc = j;\n\t\tif (minLoc != i) swap(data.at(i), data.at(minLoc));\n\t}\n}\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("性能")])]),t._v(" "),a("ul",[a("li",[t._v("时间复杂度：O(n^2^)")]),t._v(" "),a("li",[t._v("空间复杂度：O(1)")]),t._v(" "),a("li",[t._v("稳定性：不稳定")])])])]),t._v(" "),a("h2",{attrs:{id:"树型选择排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#树型选择排序"}},[t._v("#")]),t._v(" 树型选择排序")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("思想")])]),t._v(" "),a("p",[t._v("树形选择排序过程可用一棵有n个叶子结点的完全二叉树表示。")]),t._v(" "),a("p",[t._v("找出最小：首先对n个记录的关键字进行两两比较，然后在n/2个较小者之间再进行两两比较，如此重复，直至选出最小的记录为止。")]),t._v(" "),a("p",[t._v("找出次小：将最底层最小值叶子节点替换为∞，从该叶子结点开始向上与其左或右兄弟比较，修改从叶子结点到根的路径上各结点的值，则根结点的数值即为最小值。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("性能")])]),t._v(" "),a("ul",[a("li",[t._v("时间复杂度：由于含有n个子结点的完全二叉树的深度为log~2~n+1，则在树形选择排序中，除了最小值之外，每选择一个次小值仅需要进行log~2~n次比较，因此，它的时间复杂度为O(nlog~2~n)")]),t._v(" "),a("li",[t._v("空间复杂度：O(n)")])])])]),t._v(" "),a("h2",{attrs:{id:"堆排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#堆排序"}},[t._v("#")]),t._v(" 堆排序")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("思想")])]),t._v(" "),a("p",[t._v("树型选择排序方法有辅助存储空间较多、“最大值”进行多余比较等缺点，由此提出了堆排序。")]),t._v(" "),a("p",[t._v("堆是一个近似完全二叉树的结构，并同时满足堆积的性质："),a("strong",[t._v("子结点的值总是小于（或者大于）它的父节点。")])]),t._v(" "),a("p",[t._v("完全二叉树使用顺序结构存储。")]),t._v(" "),a("p",[t._v("大根堆：根结点值大于左右子节点值。左右子树也是大根堆。")]),t._v(" "),a("p",[t._v("小根堆：根结点值小于左右子节点值。左右子 树也是小根堆。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("算法（大根堆）")])]),t._v(" "),a("p",[t._v("堆排序步骤")]),t._v(" "),a("ol",[a("li",[t._v("建初堆：将序列s[0,n~1]调整为大根堆；")]),t._v(" "),a("li",[t._v("交换s[0]与s[n-1]，即将堆顶元素（最大/最小）与序列尾元素交换")]),t._v(" "),a("li",[t._v("调整堆：从堆顶开始调整堆，使交换到堆顶的元素下降到合适的位置；")]),t._v(" "),a("li",[t._v("令s = s[0,n-2]，重复1、2、3；")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("实现")])]),t._v(" "),a("p",[a("strong",[t._v("调整堆")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("向下调整堆：")]),t._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("/*\n除去序列首元素已经满足堆的条件，将序列首元素下调到合适的位置\n调整以start为根结点的堆，令最大值到达堆顶\nend表示序列尾的索引\n*/\ntemplate<typename T>\nvoid adjustDown(T &data, int start, int end) {\n\tif (data.size() == 0) return;\n\tint copy = data.at(start);\n\tfor (int i = 2 * start + 1; i <= end; i = 2 * i + 1) {\n\t\t//令i指向左右子节点中较大者\n\t\tif (i < end && data.at(i) < data.at(i + 1)) i++;\n\t\tif (copy >= data.at(i))//根结点不小于较大者，不需要调整\n\t\t\tbreak;\n\t\telse {\n\t\t\tdata.at(start) = data.at(i);//令根结点等于子节点\n\t\t\tstart = i;//调整以该子节点为根结点的堆\n\t\t}\n\t}\n\tdata.at(start) = copy;\n}\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("向上调整堆：")]),t._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("/*\n除去序列尾元素已经满足堆的条件，将序列尾元素上调到合适的位置\n*/\ntemplate<typename T>\nvoid adjustUp(T &data) {\n\tif (data.size() <= 1) return;\n\tint k = (int)data.size() - 1;//k指向序列最后一个元素\n\tint copy = data.at(k);//备份插入的元素\n\tint i = (k - 1) / 2;//i指向新插入元素的父元素\n\twhile (data.at(i) < copy) {//父元素插入的元素\n\t\tdata.at(k) = data.at(i);//当前元素位置替换为父元素\n\t\tk = i;//当前元素变为父元素\n\t\tif (i <= 0) break;\n\t\ti = (k - 1) / 2;\n\t}\n\tdata.at(k) = copy;\n}\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br")])])])]),t._v(" "),a("p",[a("strong",[t._v("建初堆")])]),t._v(" "),a("p",[t._v("由于存在两种调整堆的方式，因此也有两种建初堆的方式")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("对整个非堆序列从最后一个非叶节点开始向下调整堆")]),t._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("/*使所有根结点值都大于其左右子节点值*/\ntemplate<typename T>\nvoid buildMaxHeap1(T &data) {\n\tif (data.size() == 0) return;\n\t//从完全二叉树最后一个非叶节点（索引为n/2 - 1）开始向前依次向下调整\n\tfor (int i = (data.size() / 2) - 1; i >= 0; i--) {\n\t\tadjustDown(data, i, (int)data.size() - 1);\n\t}\n}\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("通过向堆序列插入元素，向上调整堆")]),t._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("/*向堆序列插入元素*/\ntemplate<typename T>\nvoid heapInsert(T &data, int val) {\n\tdata.push_back(val);\n\tadjustUp(data);\n}\n\ntemplate<typename T>\nvoid buildMaxHeap2(T &data) {\n\tif (data.size() == 0) return;\n\tT dataCopy = { data.at(0) };\n\tfor (int i = 1; i < data.size(); i++) {\n\t\theapInsert(dataCopy, data.at(i));\n\t}\n\tdata.assign(dataCopy.begin(), dataCopy.end());\n}\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br")])])])]),t._v(" "),a("p",[a("strong",[t._v("排序")])]),t._v(" "),a("p",[t._v("使用大根堆进行堆排序，得到非递减序列")]),t._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("template<typename T>\nvoid heapSort(T &data) {\n    if (data.size() == 0) return;\n    buildMaxHeap2(data);\n    for (int i = (int)data.size() - 1; i > 0; i--) {\n        swap(data.at(0), data.at(i));\n        adjustDown(data, 0, i - 1);\n    }\n}\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("性能")])]),t._v(" "),a("ul",[a("li",[t._v("时间复杂度：O(nlog~2~n)")]),t._v(" "),a("li",[t._v("空间复杂度：O(1)")]),t._v(" "),a("li",[t._v("稳定性：不稳定")])])])]),t._v(" "),a("h1",{attrs:{id:"归并排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#归并排序"}},[t._v("#")]),t._v(" 归并排序")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("思想")])]),t._v(" "),a("p",[t._v("归并指将多个有序序列合并为一个新的有序序列，排序开始时，认为有n个长度为1的有序序列。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("算法")])]),t._v(" "),a("p",[t._v("采用分治法，通过递归减半序列长度，对左右两边进行合并操作")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("实现")])]),t._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("template<typename T>\nvoid merge(T &v, int low, int mid, int high) {\n\tT copy(v.begin() + low, v.begin() + high + 1);//辅助空间\n\tint leftNum = mid - low + 1;\n\tint allNum = high - low + 1;\n\tint i = 0, j = leftNum, k = low;\n\twhile (i < leftNum && j < allNum) \n\t\tif (copy.at(i) <= copy.at(j)) \n\t\t\tv.at(k++) = copy.at(i++);\t\t\n\t\telse \n\t\t\tv.at(k++) = copy.at(j++);\t\t\t\n\twhile (i < leftNum) v.at(k++) = copy.at(i++);\n\twhile (j < allNum) v.at(k++) = copy.at(j++);\n}\ntemplate<typename T>\nvoid mergeSort(T &data, int low, int high) {\n\tif (low < high) {\n\t\tint mid = (low + high) / 2;\n\t\tmergeSort(data, low, mid);\n\t\tmergeSort(data, mid + 1, high);\n\t\tmerge(data, low, mid, high);\n\t}\n}\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("性能")])]),t._v(" "),a("ul",[a("li",[t._v("时间复杂度：O(nlog~2~n)")]),t._v(" "),a("li",[t._v("空间复杂度：O(n)")]),t._v(" "),a("li",[t._v("稳定性：稳定")])])])]),t._v(" "),a("h1",{attrs:{id:"其他"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),a("p",[t._v("==注意==")]),t._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("vector<int>.size()返回值是unsigned int,如果为0要减一减一要强制转换为int\ncout << typeid(d1.size()).name();//unsigned int\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("稳定性：大小相同的元素，排序前后其相对位置不变，则排序是稳定的。")]),t._v(" "),a("p",[t._v("① 稳定性排序：冒泡排序，插入排序、归并排序、基数排序")]),t._v(" "),a("p",[t._v("② 不稳定性排序：选择排序、快速排序、希尔排序、堆排序")]),t._v(" "),a("h2",{attrs:{id:"测试代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试代码"}},[t._v("#")]),t._v(" 测试代码")]),t._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('////将函数模板显示实例化以使用函数指针\ntemplate void mergeSort<vector<int> &>(vector<int> &, int, int);\ntemplate void quickSort<vector<int> &>(vector<int> &, int, int);\ntemplate void insertSort<vector<int> &>(vector<int> &);\ntemplate void binaryInsertSort<vector<int> &>(vector<int> &);\ntemplate void shellSort<vector<int> &>(vector<int> &);\ntemplate void BubbleSort<vector<int> &>(vector<int> &);\ntemplate void selectSort<vector<int> &>(vector<int> &);\ntemplate void heapSort<vector<int> &>(vector<int> &);\n\n\nint main() {\t\n\tvector<string> names = { "insertSort","binaryInsertSort","shellSort","BubbleSort","selectSort","heapSort" };\n\tvoid(*sortFunctions[])(vector<int> &) = {insertSort, binaryInsertSort ,shellSort,BubbleSort,selectSort,heapSort };\n\tfor (int i = 0; i < names.size(); i++) {\n\t\tvector<int> d1 = { 17,78,45,65,53,32,87,9 };\n\t\tvector<int> d2 = { 0 };\n\t\tvector<int> d3 = {};\n\t\t(*(sortFunctions + i))(d1);\n\t\t(*(sortFunctions + i))(d2);\n\t\t(*(sortFunctions + i))(d3);\n\t\tcout << "d1：";\n\t\tfor (auto x : d1)cout << x << " ";\n\t\tcout << "   d2：";\n\t\tfor (auto x : d2)cout << x << " ";\n\t\tcout << "   d3：";\n\t\tfor (auto x : d3)cout << x << " ";\n\t\tcout << "     |" << names.at(i) << endl;\n\n\t}\n\t{\n\t\tvector<int> d1 = { 17,78,45,65,53,32,87,9 };\n\t\tvector<int> d2 = { 0 };\n\t\tvector<int> d3 = {};\n\t\tquickSort(d1, 0, (int)d1.size() - 1);\n\t\tcout << "d1：";\n\t\tfor (auto x : d1)cout << x << " ";\n\t\tcout << "   d2：";\n\t\tfor (auto x : d2)cout << x << " ";\n\t\tcout << "   d3：";\n\t\tfor (auto x : d3)cout << x << " ";\n\t\tcout << "     |" << "quickSort" << endl;\n\t}\n\tvector<int> d1 = { 17,78,45,65,53,32,87,9 };\n\tvector<int> d2 = { 0 };\n\tvector<int> d3 = {};\n\tmergeSort(d1, 0, (int)d1.size() - 1);\n\tcout << "d1：";\n\tfor (auto x : d1)cout << x << " ";\n\tcout << "   d2：";\n\tfor (auto x : d2)cout << x << " ";\n\tcout << "   d3：";\n\tfor (auto x : d3)cout << x << " ";\n\tcout << "     |" << "mergeSort" << endl;\n\treturn 0;\n}\n/*输出\nd1：17 78 45 65 53 32 87 9    d2：0    d3：     |测试数据\nd1：9 17 32 45 53 65 78 87    d2：0    d3：     |mergeSort\nd1：9 17 32 45 53 65 78 87    d2：0    d3：     |quickSort\nd1：9 17 32 45 53 65 78 87    d2：0    d3：     |insertSort\nd1：9 17 32 45 53 65 78 87    d2：0    d3：     |binaryInsertSort\nd1：9 17 32 45 53 65 78 87    d2：0    d3：     |shellSort\nd1：9 17 32 45 53 65 78 87    d2：0    d3：     |BubbleSort\nd1：9 17 32 45 53 65 78 87    d2：0    d3：     |selectSort\nd1：9 17 32 45 53 65 78 87    d2：0    d3：     |heapSort\n*/\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br"),a("span",{staticClass:"line-number"},[t._v("38")]),a("br"),a("span",{staticClass:"line-number"},[t._v("39")]),a("br"),a("span",{staticClass:"line-number"},[t._v("40")]),a("br"),a("span",{staticClass:"line-number"},[t._v("41")]),a("br"),a("span",{staticClass:"line-number"},[t._v("42")]),a("br"),a("span",{staticClass:"line-number"},[t._v("43")]),a("br"),a("span",{staticClass:"line-number"},[t._v("44")]),a("br"),a("span",{staticClass:"line-number"},[t._v("45")]),a("br"),a("span",{staticClass:"line-number"},[t._v("46")]),a("br"),a("span",{staticClass:"line-number"},[t._v("47")]),a("br"),a("span",{staticClass:"line-number"},[t._v("48")]),a("br"),a("span",{staticClass:"line-number"},[t._v("49")]),a("br"),a("span",{staticClass:"line-number"},[t._v("50")]),a("br"),a("span",{staticClass:"line-number"},[t._v("51")]),a("br"),a("span",{staticClass:"line-number"},[t._v("52")]),a("br"),a("span",{staticClass:"line-number"},[t._v("53")]),a("br"),a("span",{staticClass:"line-number"},[t._v("54")]),a("br"),a("span",{staticClass:"line-number"},[t._v("55")]),a("br"),a("span",{staticClass:"line-number"},[t._v("56")]),a("br"),a("span",{staticClass:"line-number"},[t._v("57")]),a("br"),a("span",{staticClass:"line-number"},[t._v("58")]),a("br"),a("span",{staticClass:"line-number"},[t._v("59")]),a("br"),a("span",{staticClass:"line-number"},[t._v("60")]),a("br"),a("span",{staticClass:"line-number"},[t._v("61")]),a("br"),a("span",{staticClass:"line-number"},[t._v("62")]),a("br"),a("span",{staticClass:"line-number"},[t._v("63")]),a("br"),a("span",{staticClass:"line-number"},[t._v("64")]),a("br"),a("span",{staticClass:"line-number"},[t._v("65")]),a("br"),a("span",{staticClass:"line-number"},[t._v("66")]),a("br"),a("span",{staticClass:"line-number"},[t._v("67")]),a("br")])])])}),[],!1,null,null,null);s.default=i.exports}}]);
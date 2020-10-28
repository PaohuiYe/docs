[TOC]

# 插入排序

## 直接插入排序

- **思想**

  每次将一个待排序的元素插入到前面已经有序的子序列中。

- **算法**

  第一个元素已经形成有序子序列，从第二个元素开始：

  1. 在有序子序列中查找合适的位置`i`，同时将经过的元素后移一位；
  2. 将当前元素写入位置`i`;

- **实现**

  ```c++
  template<typename T>
  void insertSort(T &data) {
  	//依次将元素插入其到前面的有序序列中
  	for (int i = 1; i < data.size(); i++) {
  		int curr = data.at(i);//记录当前元素
  		int j = i - 1;
  		//当前元素依次与前面元素比较，并将大于当前元素的元素后移一位
  		for (; j >= 0 && curr < data.at(j); j--)
  			data.at(j + 1) = data.at(j);//后移			
  		data.at(j + 1) = curr;//空位填入当前元素
  	}
  }
  ```

- **性能**

  - 时间复杂度：平均O(n^2^)，最优O(n)
  - 空间复杂度：O(1)
  - 稳定性：稳定
  - 适用于：原序列基本有序，规模较小，这样移动次数少

## 折半插入排序

- **思想**

  类似于直接插入排序，不过将查找与移动操作分离，查找使用折半查找。

- **算法**

  第一个元素已经形成有序子序列，从第二个元素开始：

  1. 在有序子序列中折半查找合适的位置`i`；

  2. 将`i`开始往后的元素后移一位；

  3. 将当前元素写入位置`i`;

- **实现**

  ```c++
  template<typename T>
  void binaryInsertSort(T &data) {
  	for (int i = 1; i < data.size(); i++) {
  		int curr = data.at(i);
           //折半查找
  		int low = 0, high = i - 1;		
  		while (low <= high)
  		{
  			int mid = (low + high) / 2;
  			if (data.at(mid) < curr) low = mid + 1;
  			else high = mid - 1;
  		}
  		//high  * curr   mid
  		for (int j = i; j > high + 1; j--) {
  			data.at(j) = data.at(j - 1);
  		}
  		data.at(high + 1) = curr;
  	}
  }
  ```

- **分析**

  结论：折半查找结束总有位置关系`high` <= `KEY` <=  `low`，且`high + 1 = low`。

  - **情况1：**

    ![1585582199177](D:\Notebook\img\1585582199177.png)

    KEY始终小于mid值，high不断减一，直到high小于low。

    最终`high = low - 1 = -1`。low是第一个比KEY大的。`high(null)`  `KEY`  <  `low`

    

  - **情况2：**

    ![1585582540166](D:\Notebook\img\1585582540166.png)

    KEY等于low值，mid一开始位于low、high之间，high不断减一，直到high= low时，high仍会减一次一。

    最终`high = low - 1 = -1`。low值等于KEY。`high(null)`  `KEY`  =  `low`

  

  - **情况3**

    ![1585583278406](D:\Notebook\img\1585583278406.png)

    KEY等于high值，mid一开始位于low、high之间，low不断加一，直到low = high时，high仍会减一次一。

    最终`high = low - 1`。high值等于KEY。`high` < `KEY`  =  `low`

  - **情况4**

    ![1585583575580](D:\Notebook\img\1585583575580.png)

    KEY始终大于high值，low不断加一，直到low大于high。

    最终`low = high + 1`。high是第一个比KEY小的。`high` < `KEY`    `low(null)`

  - **情况5：**

    ![1585582901145](D:\Notebook\img\1585582901145.png)

    当mid值始终不等于KEY时，可能low加一，可能high减一，但总会有low或high跳过KEY，此时转变为情况1或情况4；

    当某次mid值等于KEY时，high仍会减一，转变为情况4；

    ==最终KEY值在high、low之间。==

- **性能**

  时空复杂度与直接插入排序相近，因为只减少了比较操作，移动操作未变。

  - 稳定性：稳定

## 希尔排序

- **思想**

  针对直接插入排序适用于基本有序序列的特点，创造这个条件，然后使用直插。

- **算法**

  1. 取增量di = d1将记录分成di组，同组内进行直接插入排序；
  2. 取增量di = d2（d2<d1），重复1；
  3. 直到取增量di = 1，对整个序列进行一次直接插入排序；

- **实现**

  ```c++
  template<typename T>
  void shellSort(T &data) {
  	int di = data.size() / 2;
  	for (; di >= 1; di /= 2)
  		for (int i = di; i < data.size(); i++) {//交替对每组进行直接插入排序
  			int curr = data.at(i);
  			int j = i - di;
  			for (; j >= 0 && curr < data.at(j); j -= di)
  				data.at(j + di) = data.at(j);
  			data.at(j + di) = curr;
  		}
  }
  ```

- **分析**

  一般取d1 = size/2，d~i+1~ = d~i~/2。

- **性能**

  - 时间复杂度：O(n^2^)
  - 空间复杂度：O(1)
  - 稳定性：不稳定（跳跃时相同元素分到不同组）
  - 适用于：原序列无序，规模较大（相对直插）

---

# 交换排序

## 冒泡排序

- **思想**

  从后往前将较小的元素交换到序列首位。

- **算法**

  1. 从序列尾开始将最小的元素通过交换移动到当前序列首位；
  2. 去除首位元素重复1；

- **实现**

  ```c++
  template<typename T>
  void BubbleSort(T &data) {
  	for (int i = 0; i < (int)data.size() - 1; i++) {//size-1次
  		bool finished = true;//表示这趟冒泡是否因未发生交换从而可以直接结束
  		for (int j = (int)data.size() - 1; j > i; j--)//从队尾到i 
  			if (data.at(j) < data.at(j - 1)) {
  				swap(data.at(j), data.at(j - 1));
  				finished = false;
  			}
  		if (finished) return;
  	}
  }
  ```

- **性能**

  - 时间复杂度：平均O(n^2^)，最优O(n)，最差O(n^2^)
  - 空间复杂度：O(1)
  - 稳定性：稳定
  - 适用于：规模较大，无序时不宜采用

## 快速排序

- **思想**

  每次趟排序选取序列第一个元素作为基准，将所有小于该元素的元素移动到其左边，大于该元素的元素移动到其右边。对左边，右边进行递归。

- **算法**

  1. 选取`base`为序列首元素，左索引`l`指向序列首，右索引`r`指向序列尾；

  2. 根据索引遍历所有元素，小于`base`的移动到左边，大于`base`的移动到右边：

     `r`递减过程中，当碰到小于`base`的元素，将其与`l`位置元素交换；

     `l`递增过程中，当碰到大于`base`的元素，将其与`r`位置元素交换；

  3. 对`base`左右的序列递归；

- **实现**

  ```c++
  template<typename T>
  void quickSort(T &data, int start, int end) {
  	if (start >= end) return;
  	int base = data.at(start);
  	int l = start, r = end;
  	while (l < r) {
  		while (l < r && data.at(r) >= base) r--;
  		data.at(l) = data.at(r);
  		while (l < r && data.at(l) <= base) l++;
  		data.at(r) = data.at(l);
  	}
  	//结束时 l 等于 r
  	data.at(l) = base;
  	quickSort(data, start, l - 1);
  	quickSort(data, l + 1, end);
  }
  ```

- **分析**

  ![1585631771875](D:\Notebook\img\1585631771875.png)

- **性能**

  - 时间复杂度：平均O(nlog~2~n)，最差O(n^2^)，最优O(nlog~2~n)
  - 空间复杂度：平均O(log~2~n)，最差O(n)
  - 稳定性：不稳定
  - 适用于：规模较大，无序

# 选择排序

## 简单选择排序

- **思想**

  第`i`趟排序，从第`i`个元素开始到序列尾中找到最小元素，替换第`i`个元素。

- **算法**

  遍历每个元素

  1. 从当前元素开始查找最小元素；
  2. 替换当前元素

- **实现**

  ```c++
  template<typename T>
  void selectSort(T &data) {	
  	for (int i = 0; i < (int)data.size() - 1; i++) {
  		int minLoc = i;
  		for (int j = i + 1; j < data.size(); j++)
  			if (data.at(j) < data.at(minLoc)) minLoc = j;
  		if (minLoc != i) swap(data.at(i), data.at(minLoc));
  	}
  }
  ```

- **性能**

  - 时间复杂度：O(n^2^)
  - 空间复杂度：O(1)
  - 稳定性：不稳定

## 树型选择排序

- **思想**

  树形选择排序过程可用一棵有n个叶子结点的完全二叉树表示。

  找出最小：首先对n个记录的关键字进行两两比较，然后在n/2个较小者之间再进行两两比较，如此重复，直至选出最小的记录为止。

  找出次小：将最底层最小值叶子节点替换为∞，从该叶子结点开始向上与其左或右兄弟比较，修改从叶子结点到根的路径上各结点的值，则根结点的数值即为最小值。

- **性能**
  - 时间复杂度：由于含有n个子结点的完全二叉树的深度为log~2~n+1，则在树形选择排序中，除了最小值之外，每选择一个次小值仅需要进行log~2~n次比较，因此，它的时间复杂度为O(nlog~2~n)
  - 空间复杂度：O(n)

## 堆排序

- **思想**

  树型选择排序方法有辅助存储空间较多、“最大值”进行多余比较等缺点，由此提出了堆排序。

  堆是一个近似完全二叉树的结构，并同时满足堆积的性质：**子结点的值总是小于（或者大于）它的父节点。**

  完全二叉树使用顺序结构存储。

  大根堆：根结点值大于左右子节点值。左右子树也是大根堆。

  小根堆：根结点值小于左右子节点值。左右子 树也是小根堆。

- **算法（大根堆）**

  堆排序步骤

  1. 建初堆：将序列s[0,n~1]调整为大根堆；
  2. 交换s[0]与s[n-1]，即将堆顶元素（最大/最小）与序列尾元素交换
  3. 调整堆：从堆顶开始调整堆，使交换到堆顶的元素下降到合适的位置；
  4. 令s = s[0,n-2]，重复1、2、3；

- **实现**

  **调整堆**

  1. 向下调整堆：

     ```c++
     /*
     除去序列首元素已经满足堆的条件，将序列首元素下调到合适的位置
     调整以start为根结点的堆，令最大值到达堆顶
     end表示序列尾的索引
     */
     template<typename T>
     void adjustDown(T &data, int start, int end) {
     	if (data.size() == 0) return;
     	int copy = data.at(start);
     	for (int i = 2 * start + 1; i <= end; i = 2 * i + 1) {
     		//令i指向左右子节点中较大者
     		if (i < end && data.at(i) < data.at(i + 1)) i++;
     		if (copy >= data.at(i))//根结点不小于较大者，不需要调整
     			break;
     		else {
     			data.at(start) = data.at(i);//令根结点等于子节点
     			start = i;//调整以该子节点为根结点的堆
     		}
     	}
     	data.at(start) = copy;
     }
     ```

  2. 向上调整堆：

     ```c++
     /*
     除去序列尾元素已经满足堆的条件，将序列尾元素上调到合适的位置
     */
     template<typename T>
     void adjustUp(T &data) {
     	if (data.size() <= 1) return;
     	int k = (int)data.size() - 1;//k指向序列最后一个元素
     	int copy = data.at(k);//备份插入的元素
     	int i = (k - 1) / 2;//i指向新插入元素的父元素
     	while (data.at(i) < copy) {//父元素插入的元素
     		data.at(k) = data.at(i);//当前元素位置替换为父元素
     		k = i;//当前元素变为父元素
     		if (i <= 0) break;
     		i = (k - 1) / 2;
     	}
     	data.at(k) = copy;
     }
     ```

  **建初堆**

  由于存在两种调整堆的方式，因此也有两种建初堆的方式

  1. 对整个非堆序列从最后一个非叶节点开始向下调整堆

     ```c++
     /*使所有根结点值都大于其左右子节点值*/
     template<typename T>
     void buildMaxHeap1(T &data) {
     	if (data.size() == 0) return;
     	//从完全二叉树最后一个非叶节点（索引为n/2 - 1）开始向前依次向下调整
     	for (int i = (data.size() / 2) - 1; i >= 0; i--) {
     		adjustDown(data, i, (int)data.size() - 1);
     	}
     }
     ```

  2. 通过向堆序列插入元素，向上调整堆

     ```c++
     /*向堆序列插入元素*/
     template<typename T>
     void heapInsert(T &data, int val) {
     	data.push_back(val);
     	adjustUp(data);
     }
     
     template<typename T>
     void buildMaxHeap2(T &data) {
     	if (data.size() == 0) return;
     	T dataCopy = { data.at(0) };
     	for (int i = 1; i < data.size(); i++) {
     		heapInsert(dataCopy, data.at(i));
     	}
     	data.assign(dataCopy.begin(), dataCopy.end());
     }
     ```


  **排序**

  使用大根堆进行堆排序，得到非递减序列

  ```c++
  template<typename T>
  void heapSort(T &data) {
      if (data.size() == 0) return;
      buildMaxHeap2(data);
      for (int i = (int)data.size() - 1; i > 0; i--) {
          swap(data.at(0), data.at(i));
          adjustDown(data, 0, i - 1);
      }
  }
  ```

- **性能**
  - 时间复杂度：O(nlog~2~n)
  - 空间复杂度：O(1)
  - 稳定性：不稳定

# 归并排序

- **思想**

  归并指将多个有序序列合并为一个新的有序序列，排序开始时，认为有n个长度为1的有序序列。

- **算法**

  采用分治法，通过递归减半序列长度，对左右两边进行合并操作

- **实现**

  ```c++
  template<typename T>
  void merge(T &v, int low, int mid, int high) {
  	T copy(v.begin() + low, v.begin() + high + 1);//辅助空间
  	int leftNum = mid - low + 1;
  	int allNum = high - low + 1;
  	int i = 0, j = leftNum, k = low;
  	while (i < leftNum && j < allNum) 
  		if (copy.at(i) <= copy.at(j)) 
  			v.at(k++) = copy.at(i++);		
  		else 
  			v.at(k++) = copy.at(j++);			
  	while (i < leftNum) v.at(k++) = copy.at(i++);
  	while (j < allNum) v.at(k++) = copy.at(j++);
  }
  template<typename T>
  void mergeSort(T &data, int low, int high) {
  	if (low < high) {
  		int mid = (low + high) / 2;
  		mergeSort(data, low, mid);
  		mergeSort(data, mid + 1, high);
  		merge(data, low, mid, high);
  	}
  }
  ```

- **性能**

  - 时间复杂度：O(nlog~2~n)
  - 空间复杂度：O(n)
  - 稳定性：稳定

# 其他

==注意==

```c++
vector<int>.size()返回值是unsigned int,如果为0要减一减一要强制转换为int
cout << typeid(d1.size()).name();//unsigned int
```

稳定性：大小相同的元素，排序前后其相对位置不变，则排序是稳定的。

① 稳定性排序：冒泡排序，插入排序、归并排序、基数排序

② 不稳定性排序：选择排序、快速排序、希尔排序、堆排序

## 测试代码

```c++
////将函数模板显示实例化以使用函数指针
template void mergeSort<vector<int> &>(vector<int> &, int, int);
template void quickSort<vector<int> &>(vector<int> &, int, int);
template void insertSort<vector<int> &>(vector<int> &);
template void binaryInsertSort<vector<int> &>(vector<int> &);
template void shellSort<vector<int> &>(vector<int> &);
template void BubbleSort<vector<int> &>(vector<int> &);
template void selectSort<vector<int> &>(vector<int> &);
template void heapSort<vector<int> &>(vector<int> &);


int main() {	
	vector<string> names = { "insertSort","binaryInsertSort","shellSort","BubbleSort","selectSort","heapSort" };
	void(*sortFunctions[])(vector<int> &) = {insertSort, binaryInsertSort ,shellSort,BubbleSort,selectSort,heapSort };
	for (int i = 0; i < names.size(); i++) {
		vector<int> d1 = { 17,78,45,65,53,32,87,9 };
		vector<int> d2 = { 0 };
		vector<int> d3 = {};
		(*(sortFunctions + i))(d1);
		(*(sortFunctions + i))(d2);
		(*(sortFunctions + i))(d3);
		cout << "d1：";
		for (auto x : d1)cout << x << " ";
		cout << "   d2：";
		for (auto x : d2)cout << x << " ";
		cout << "   d3：";
		for (auto x : d3)cout << x << " ";
		cout << "     |" << names.at(i) << endl;

	}
	{
		vector<int> d1 = { 17,78,45,65,53,32,87,9 };
		vector<int> d2 = { 0 };
		vector<int> d3 = {};
		quickSort(d1, 0, (int)d1.size() - 1);
		cout << "d1：";
		for (auto x : d1)cout << x << " ";
		cout << "   d2：";
		for (auto x : d2)cout << x << " ";
		cout << "   d3：";
		for (auto x : d3)cout << x << " ";
		cout << "     |" << "quickSort" << endl;
	}
	vector<int> d1 = { 17,78,45,65,53,32,87,9 };
	vector<int> d2 = { 0 };
	vector<int> d3 = {};
	mergeSort(d1, 0, (int)d1.size() - 1);
	cout << "d1：";
	for (auto x : d1)cout << x << " ";
	cout << "   d2：";
	for (auto x : d2)cout << x << " ";
	cout << "   d3：";
	for (auto x : d3)cout << x << " ";
	cout << "     |" << "mergeSort" << endl;
	return 0;
}
/*输出
d1：17 78 45 65 53 32 87 9    d2：0    d3：     |测试数据
d1：9 17 32 45 53 65 78 87    d2：0    d3：     |mergeSort
d1：9 17 32 45 53 65 78 87    d2：0    d3：     |quickSort
d1：9 17 32 45 53 65 78 87    d2：0    d3：     |insertSort
d1：9 17 32 45 53 65 78 87    d2：0    d3：     |binaryInsertSort
d1：9 17 32 45 53 65 78 87    d2：0    d3：     |shellSort
d1：9 17 32 45 53 65 78 87    d2：0    d3：     |BubbleSort
d1：9 17 32 45 53 65 78 87    d2：0    d3：     |selectSort
d1：9 17 32 45 53 65 78 87    d2：0    d3：     |heapSort
*/
```


## 单链表的插入删除

- 使用数组构造单链表；
- 链表的插入、删除；
- 打印链表；

### 不设置虚头节点

```c++
template<typename T>
class SingleList {
private:
	struct ListNode {
		T val;
		struct ListNode *next;
		ListNode(T x) :
			val(x), next(nullptr) {
		}
	};
	ListNode *head_;
	int size_;
public:
	SingleList() {
		head_ = nullptr;
		size_ = 0;
	}
	/*使用数组创建单链表*/
	SingleList(vector<T> data) {
		head_ = new ListNode(data.at(0));
		ListNode *tail = head_;
		for (int i = 1; i < data.size(); i++)
		{
			tail->next = new ListNode(data.at(i));
			tail = tail->next;
		}
		size_ = data.size();
	}
	/*向指定位置插入节点*/
	bool insert(int index, T val) {
		assert(index >= 0 && index <= size_);
		if (!head_) {//向空链表中插入一个节点
			head_ = new ListNode(val);
			return true;
		}
		else if (index == 0) {//向链表头插入一个节点
			ListNode *n = new ListNode(val);
			n->next = head_;
			head_ = n;
		}
		else {//向其他位置插入一个节点
			//移动到index位置节点前驱节点
			ListNode *prev = head_;
			for (int i = 0; i < index - 1; i++) {
				prev = prev->next;
			}
			ListNode *n = new ListNode(val);
			n->next = prev->next;
			prev->next = n;
		}
		size_++;
		return true;
	}
	/*删除指定位置的节点*/
	bool erase(int index) {
		assert(index >= 0 && index < size_);
		if (index == 0) {//删除头节点
			ListNode *del = head_;;
			head_ = head_->next;
			del->next = nullptr;
			delete del;
			del = nullptr;
		}
		else {//删除其他位置节点
			ListNode *prev = head_;
			//移动到index位置节点前一个节点
			for (int i = 0; i < index - 1; i++) {
				prev = prev->next;
			}
			ListNode *del = prev->next;
			prev->next = prev->next->next;
			del->next = nullptr;
			delete del;
			del = nullptr;
		}
		size_--;
		return true;
	}
	/*打印单链表*/
	void toString() {
		ListNode *p = head_;
		while (p) {
			cout << p->val << " ";
			p = p->next;
		}
		cout << endl;
	}
};
```

### 设置虚头节点

没有引入虚头节点的链表，插入、删除节点的操作，对于第一个节点与其他节点是不同的，因为在头部插入没有前驱 `prev`。

引入虚头节点方便在任何位置采取相同的操作。

```c++
template<typename T>
class SingleList {
private:
	struct ListNode {
		T val;
		struct ListNode *next;
		ListNode(T x) :
			val(x), next(nullptr) {
		}
	};
	ListNode *virtualHead_;
	int size_;
public:
	SingleList() {
		virtualHead_ = new ListNode(-1);
		size_ = 0;
	}
	/*使用数组创建单链表*/
	SingleList(vector<T> data) {
		virtualHead_ = new ListNode(-1);
		ListNode *tail = virtualHead_;
		for (T x : data)
		{
			tail->next = new ListNode(x);
			tail = tail->next;
		}
		size_ = data.size();
	}
	/*向指定位置插入节点*/
	bool insert(int index, T val) {
		assert(index >= 0 && index <= size_);
		//移动到index位置节点前驱节点
		ListNode *prev = virtualHead_;
		for (int i = 0; i < index; i++) {
			prev = prev->next;
		}
		ListNode *n = new ListNode(val);
		n->next = prev->next;
		prev->next = n;
		size_++;
		return true;
	}
	/*删除指定位置的节点*/
	bool erase(int index) {
		assert(index >= 0 && index < size_);
		ListNode *prev = virtualHead_;
		//移动到index位置节点前一个节点
		for (int i = 0; i < index; i++) {
			prev = prev->next;
		}
		ListNode *del = prev->next;
		prev->next = prev->next->next;
		del->next = nullptr;
		delete del;
		del = nullptr;
		size_--;
		return true;
	}
    int at(int loc) {
		assert(loc < size_);
		ListNode *p = virtualHead_->next;
		while (loc--)
		{
			p = p->next;
		}
		return p->val;
	}
	/*打印单链表*/
	void toString() {
		ListNode *p = virtualHead_->next;
		while (p) {
			cout << p->val << " ";
			p = p->next;
		}
		cout << endl;
	}
};
```

### 测试

```c++
int main() {
	vector<int> data = { 1,2,3,4};
	SingleList<int> lst(data);
	lst.toString();//1 2 3 4

	lst.insert(0, 0);
	lst.insert(5, 5);	
	lst.toString();//0 1 2 3 4 5

	lst.erase(0);
	lst.erase(4);
	lst.toString();// 1 2 3 4	
	return 0;
}
```


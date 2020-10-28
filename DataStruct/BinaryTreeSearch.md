# 二叉树的遍历

- 将数组形式（BFS顺序）二叉树转为链形式；
- 三种DFS的递归、迭代是实现；
- BFS迭代实现；

### class BinaryTree

```c++
template<typename T>
class BinaryTree {
private:
	struct TreeNode {
		T val;
		struct TreeNode *left;
		struct TreeNode *right;
		TreeNode(T x) :
			val(x), left(nullptr), right(nullptr) {
		}
	};
	TreeNode *root_;
	TreeNode * buildTree(vector<int> &data, int rootLoc) {
		if (rootLoc >= data.size()) return nullptr;
		if (data.at(rootLoc) == -1) return nullptr;//空位
		TreeNode *root = new TreeNode(data.at(rootLoc));
		root->left = buildTree(data, 2 * rootLoc + 1);
		root->right = buildTree(data, 2 * rootLoc + 2);
		return root;
	}
	TreeNode* Deserialize(char *str) {// "0,1,2,3,#,#,4,#,5,#,6,";
		string s(str);
		int pre = 0;
		vector<int> v;
		for (int i = 0; i < s.size(); i++) {
			if (s.at(i) == ',') {
				int val = atoi(s.substr(pre, i - pre).c_str());//i-pre+1-1
				v.push_back(val);
				pre = i + 1;
			}
			else if (s.at(i) == '#') {
				v.push_back(-1);//-1代表#
				pre += 2;
				i++;
			}
		}		
		for (int i = 0; i < v.size(); i++) 
			if (v.at(i) == -1 && 2 * i + 1 < v.size()) 
				v.insert(v.begin() + 2 * i + 1, 2, -1);									
		return buildTree(v, 0);
	}
public:
	/*用数组构建树 空位用-1表示*/
	BinaryTree() {
		root_ = nullptr;
	}
	BinaryTree(string data) {
		root_ = Deserialize((char*)data.c_str());
	}
    TreeNode* get(){
        return root_;
    }
	/*先序遍历 迭代*/
	void preOrderDFS1() {
		if (!root_) return;
		stack<TreeNode *> s;
		s.push(root_);
		while (!s.empty()) {
			TreeNode *curr = s.top();
			s.pop();
			cout << curr->val;
			if (curr->right) s.push(curr->right);
			if (curr->left) s.push(curr->left);
		}
	}
	/*先序遍历 递归*/
	void preOrderDFS2() {
		preOrderDFS2(root_);
	}
	void preOrderDFS2(TreeNode* root) {
		if (root) {
			cout << root->val;
			preOrderDFS2(root->left);
			preOrderDFS2(root->right);
		}
	}
	/*中序遍历 迭代*/
	/*
	第一次到根节点不访问，只有回溯（从左子树回到根节点）才访问。
	设置一个标志位记录当前是否是回溯。
	*/
	void inOrderDFS1() {
		if (!root_) return;
		stack<TreeNode *> s;
		//中序遍历根节点
		s.push(root_);//line：1
		bool isTraceBack = false;//line：2
		while (!s.empty()) {
			TreeNode *curr = s.top();
			//1、有左节点 且 不是回溯 中序遍历左子树
			if (curr->left && !isTraceBack) s.push(curr->left);
			else {//无左节点 或 是回溯到当前节点的
				//2、输出当前节点并在栈中删除该节点
				cout << curr->val;
				s.pop();
				//3、如果存在右节点，中序遍历右子树
				if (curr->right) {
					s.push(curr->right);//对应line：1
					isTraceBack = false;//对应line：2
				}
				else isTraceBack = true;//4、回溯 
			}
		}
	}
	/*中序遍历 递归*/
	void inOrderDFS2() {
		inOrderDFS2(root_);
	}
	void inOrderDFS2(TreeNode* root) {
		if (root) {
			inOrderDFS2(root->left);
			cout << root->val;
			inOrderDFS2(root->right);
		}
	}
	/*后续遍历 迭代*/
	/*
	根节点只有第二次出现在栈顶时，才能访问。
	设置一个变量标识该结点是否是第一次出现在栈顶。
	*/
	void postOrderDFS1() {
		if (!root_) return;
		typedef pair<TreeNode *, bool> mpair;
		stack<mpair> s;
		s.push(mpair(root_, true));
		while (!s.empty()) {
			mpair curr = s.top();
			s.pop();
			if (curr.second) {//是第一次在栈顶被读取
				curr.second = false;
				/*交换line1 line2 line3的位置分别是三种顺序的遍历*/
				s.push(curr);//line1
				if (curr.first->right) s.push(mpair(curr.first->right, true));//line2
				if (curr.first->left) s.push(mpair(curr.first->left, true));//line3
			}
			else {//不是第一次在栈顶被读取				
				cout << curr.first->val;
			}
		}
	}
	/*后续遍历 递归*/
	void postOrderDFS2() {
		postOrderDFS2(root_);
	}
	void postOrderDFS2(TreeNode* root) {
		if (root) {
			postOrderDFS2(root->left);			
			postOrderDFS2(root->right);
			cout << root->val;
		}
	}
	/*广度优先搜索*/
	void BFS() {
		if (!root_) return;
		queue<TreeNode *> q;
		q.push(root_);
		while (!q.empty()) {
			TreeNode *curr = q.front();
			q.pop();
			cout << curr->val;
			if (curr->left) q.push(curr->left);
			if (curr->right) q.push(curr->right);
		}
	}
    /*打印二叉树*/
    int sum(vector<int> &v) {
		int sum = 0;
		for (auto x : v) sum += x;
		return sum;
	}

	void toString(TreeNode* pRoot)
	{
		if (!pRoot) return;		
		queue<TreeNode*> q;
		q.push(pRoot);
		vector<int> cnt1;//当前层每个节点的子节点数
		vector<int> cnt2;//下一层每个节点的子节点数
		cnt1.push_back(1);//第一层节点数是1
		while (!q.empty()) {
			TreeNode *curr = q.front();
			q.pop();
			cout << curr->val;
			for (int i = 0; i < cnt1.size(); i++) {//输出一个节点，当前层总结点数减一
				if (cnt1.at(i) != 0) {
					if (--cnt1.at(i) == 0)
						cout << "  |  ";//一个节点的所有子节点输出完，打印分隔符
					break;
				}
			}
			int childNum = (int)(curr->left != NULL) + (int)(curr->right != NULL);
			cnt2.push_back(childNum);//增添当前节点的子节点数
			if (sum(cnt1) == 0) {//这一层总节点数==0 换行 到下一层
				cnt1 = cnt2;
				cnt2.clear();
				cout << endl;				
			}
			if (curr->left) q.push(curr->left);
			if (curr->right) q.push(curr->right);

		}	
	}
};
```

### 测试

```c++
int main(void) {
	string data = "0,1,2,3,#,#,4,#,5,#,6,";
	/*
			 0
		1          2
	  3   #      #   4
     # 5            # 6
	*/
	BinaryTree<int> tree(data);

	cout << "先序 迭代："; tree.preOrderDFS1();//0135246
	cout << endl;
	cout << "先序 递归："; tree.preOrderDFS2();//0135246
	cout << endl;

	cout << "中序 迭代："; tree.inOrderDFS1();//3510246
	cout << endl;
	cout << "中序 递归："; tree.inOrderDFS2();//3510246
	cout << endl;

	cout << "后序 迭代："; tree.postOrderDFS1();//5316420
	cout << endl;
	cout << "后序 递归："; tree.postOrderDFS2();//5316420
	cout << endl;

	cout << "广度优先 迭代："; tree.BFS();//0123456
	cout << endl;
	return 0;
}
```


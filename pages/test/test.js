// pages/test/test.js
import {
  Base64
} from '../../miniprogram_npm/js-base64/index' //比较喜欢这种写法
console.log(Base64);
Page({
  /**
   * 页面的初始数据
   */
  data: {


  },
  countBinarySubstrings: function(s) {
    if (s.length <= 1) return 0;
    let pre = 0;
    let cur = 1;
    let count = 0;
    for (let i = 1; i < s.length; i++) {
      if (s[i] === s[i - 1]) ++cur;
      else {
        pre = cur;
        cur = 1;
      }
      if (pre >= cur) ++count;
    }
    return count;

  },
  numJewelsInStones: function(J, S) {

    const map = new Map()
    let count = 0
    for (let j in J) {
      map.set(J[j], 1)
    }
    console.log(map)
    for (let s in S) {
      map.has(S[s]) && ++count
    }
    return count
  },
  pivotIndex: function(nums) {
    let length = nums.length
    let res = -1
    if (length <= 2) {
      return res
    }

    for (let index = 0; index < length; index++) {
      if (res != -1) {
        break
      }
      let leftCount = 0
      let rightCount = 0
      if (index > 0) {
        leftCount = nums.slice(0, index).reduce(function(x, y) {
          return x + y;
        }, 0);
        rightCount = nums.slice(index + 1, length).reduce(function(x, y) {
          return x + y;
        }, 0);
        if (leftCount == rightCount) {
          res = index
        }
      }
    }
    return res
  },

  findFrequentTreeSum: function(root) {
    var res = [],
      max = 0,
      map = {};
    var findMax = function(root) {
      let left, right;
      if (!root) return 0;
      left = findMax(root.left);
      right = findMax(root.right);
      sum = left + right + root.val;
      map[sum] = (map[sum] || 0) + 1;
      max = Math.max(map[sum], max);
      return sum;
    };
    findMax(root);
    for (var key in map) {
      if (map[key] === max) {
        res.push(parseInt(key));
      };
    };
    return res;


  },
  validateStackSequences: function(pushed, popped) {
    var checkArray = [];
    var j = 0;
    for (let i = 0; i < pushed.length; i++) {
      const element = pushed[i];
      checkArray.push(element);
      while (checkArray.length != 0 && checkArray[checkArray.length - 1] == popped[j]) {
        checkArray.pop();
        j++;
      }
    }
    return j == popped.length;
  },
  reverseWords: function(s) {
    return s.split(" ").map(str => {
      return str.split("").reverse().join("")
    }).join(" ")
  },
  findMedianSortedArrays: function(nums1, nums2) {
    let nums = nums1.concat(nums2).sort((x, y) => x - y)
    let midIndx = Math.floor(nums.length / 2)
    return nums.length % 2 == 0 ? (nums[midIndx] + nums[midIndx - 1]) / 2 : nums[midIndx]
  },
  levelOrder: function(root) {
    let res = []
    let stack = []
    let level = 0
    if (!root) {
      return res
    }
    getRes(root, res, level)
    return res

    function getRes(node, res, level) {
      if (!node) return
      if (res.length < level + 1) {
        res.push([])
      }
      getRes(node.left, res, level + 1)
      getRes(node.right, res, level + 1)
      res[level].push(node.val)
    }
  },
  reverseInteger: function(num) {
    let max = 2147483647;
    let min = -2147483648;
    let res = 0;
    while (num != 0) {
      let pop = num % 10;
      num = num > 0 ? Math.floor(num / 10) : Math.ceil(num / 10);
      if (res > Math.floor(max / 10) || (res == Math.floor(max / 10) && pop > 7)) return 0;
      if (res < Math.ceil(min / 10) || (res == Math.ceil(min / 10) && pop < -8)) return 0;
      res = res * 10 + pop
    }
    return res

  },
  networkDelayTime: function(times, N, K) {
    // function Node(val) {
    //     this.val = val;
    //     this.next = [];
    //     this.time = Infinity;
    // }
    var makeGraph = function(nodeNum, edges) {
      let nodes = {}
      for (let index = 1; index <= nodeNum; index++) {
        nodes[index] = {
          val: index,
          next: [],
          time: Infinity
        }
      }
      edges.forEach(([u, v, w]) => {
        nodes[u].next.push([nodes[v], w]);
      });
      return nodes;
    }
    var popSmallOne = function(list) {
      list.sort((a, b) => a.time - b.time);
      return list.shift();
    }
    let graphs = makeGraph(N, times);
    let unvist = Object.values(graphs)
    graphs[K].time = 0;
    let maxTime = 0;
    while (unvist.length) {
      let node = popSmallOne(unvist);
      maxTime = node.time;
      node.next.forEach(([next, weight]) => {
        if ((node.time + weight) < next.time) {
          next.time = node.time + weight;
        }
      })

    }
    return maxTime === Infinity ? -1 : maxTime;


  },
  swapPairs: function(head) {
    if (head == null || head.next == null) {
      return head
    }
    let n = head.next
    head.next = swapPairs(head.next.next)
    n.next = head
    return n
  },
  orderlyQueue: function(S, K) {
    if (K > 1) return S.split("").sort().join("");
    else {
      let res = S;
      for (let index = 0; index < S.length; index++) {
        let element = S[index];
        let NS = S.slice(index) + S.slice(0, index)
        if (NS < res) res = NS
      }
      return res;
    }
  },
  findMaximumXOR: function(nums) {
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
      const a = nums[i];
      for (let j = i + 1; j < nums.length; j++) {
        const b = nums[j];
        let temp = a ^ b
        if (temp > res) {
          res = temp
        }
      }
    }
    return res;
  },
  preorderTraversal: function() {
    function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
    }
    let root = new TreeNode(3);
    root.left = new TreeNode(1)
    root.right = new TreeNode(2);
    let stack = new Array();
    let out = new Array();
    if (!root) {
      return out;
    }
    stack.push(root);
    while (stack.length > 0) {
      let node = stack.pop()
      if (node.right != null) {
        stack.push(node.right);
      }
      if (node.left != null) {
        stack.push(node.left);
      }
      out.push(node.val);
    }
    return out;
  },
  text3: function() {
    var a = [2, 4, 1, 56, 55]
    this.test2(a, 0, 4)
    console.log(a)
    var foo = function() {
      console.log('msg')
      var x = 0
      foo = function() {
        x++
        console.log(x)
        console.log('foo')
      }
    }
    foo()
    foo()
    foo()
  },
  test2: function(arr, start, end) {
    var quickSort = function(arr, start, end) {
      if (start >= end) {
        return
      }
      let mid = arr[start]
      let low = start
      let high = end
      while (low < high) {
        while (low < high && arr[high] >= mid) {
          high--
        }
        arr[low] = arr[high]
        while (low < high && arr[low] < mid) {
          low++
        }
        arr[high] = arr[low]
      }
      quickSort(arr, start, low - 1)
      quickSort(arr, low + 1, end)

    }
  },
  test1: function(e) {
    // 闭包可作为私有变量的作用
    function count() {
      var arr = [];
      for (var i = 1; i <= 3; i++) {
        arr.push((function(n) {
          return function() {
            return n * n;
          }
        })(i));
      }
      return arr;
    }

    var res = count();
    var r1 = res[2];
    console.log('arry=' + r1());

    // 定义数字0:
    var zero = function(f) {
      return function(x) {
        return x;
      }
    };

    // 定义数字1:
    var one = function(f) {
      return function(x) {
        return f(x);
      }
    };

    // 定义加法:
    function add(n, m) {
      return function(f) {
        return function(x) {
          return m(f)(n(f)(x));
        }
      }
    }

    var two = add(one, one);
    (two(function() {
      console.log(123);
    }))()
    // 箭头函数
    var x = [1, 2, 3, 56, 2]
    x.sort((x, y) => {
      if (x == y) {
        return 0;
      }
      if (x > y) {
        return 1;
      } else {
        return -1;
      }
    });
    console.log(x);
    var obj = {
      birth: 1990,
      getAge: function() {
        var b = this.birth; // 1990
        var fn = () => new Date().getFullYear() - this.birth; // this指向window或undefined
        return fn();
      }
    };
    console.log(obj.getAge());
  },
  canvasIdErrorCallback: function(e) {
    console.error(e.detail.errMsg)
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    // 使用 wx.createContext 获取绘图上下文 context
    var context = wx.createCanvasContext('firstCanvas')
    context.setStrokeStyle("#00ff00")
    context.setLineWidth(5)
    context.rect(0, 0, 200, 200)
    context.stroke()
    context.setStrokeStyle("#ff0000")
    context.setLineWidth(2)
    context.moveTo(160, 100)
    context.arc(100, 100, 60, 0, 2 * Math.PI, true)
    context.moveTo(140, 100)
    context.arc(100, 100, 40, 0, Math.PI, false)
    context.moveTo(85, 80)
    context.arc(80, 80, 5, 0, 2 * Math.PI, true)
    context.moveTo(125, 80)
    context.arc(120, 80, 5, 0, 2 * Math.PI, true)
    context.stroke()
    context.draw()

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var m = new Map([
      [1, 'x'],
      [2, 'y'],
      [3, 'z']
    ]);
    m.forEach(function(value, key, map) {
      console.log(value);
    });
    console.log(this.reverseWords("you are terry"))
    console.log(this.findMedianSortedArrays([1, 3], [2]))
    console.log(Math.ceil(-1.5))
    console.log("a" < "10")
    console.log(this.networkDelayTime([
      [2, 1, 1],
      [2, 3, 1],
      [3, 4, 1]
    ], 4, 2))
    console.log(this.orderlyQueue("cba", 1))
    console.log(5 ^ 5);
    console.log(this.preorderTraversal());
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})
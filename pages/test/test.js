// pages/test/test.js
import initCalendar from '../../template/calendar/index.js';

Page({
    /**
     * 页面的初始数据
     */
    data: {
        struggleNum:3,
        drugStage:6,
        drugTimeList:["10:00-12:00","10:00-12:00","10:00-12:00"]
    },
    text3:function(){
        var a=[2,4,1,56,55]
        this.test2(a,0,4)
        console.log(a)
        var foo=function(){
            console.log('msg')
            var x=0
            foo=function(){
                x++
                console.log(x)
                console.log('foo')
            }
        }
        foo()
        foo()
        foo()
    },
    test2: function (arr,start,end) {
        var quickSort=function (arr,start,end){
            if(start>=end){
                return
            }
            let mid=arr[start]
            let low=start
            let high=end
            while(low<high){
                while(low<high&&arr[high]>=mid){
                    high--
                }
                arr[low]=arr[high]
                while(low<high&&arr[low]<mid){
                    low++
                }
                arr[high]=arr[low]
            }
            quickSort(arr,start,low-1)
            quickSort(arr,low+1,end)

        }
    },
    test1: function (e) {
        // 闭包可作为私有变量的作用
        function count() {
            var arr = [];
            for (var i = 1; i <= 3; i++) {
                arr.push((function (n) {
                    return function () {
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
        var zero = function (f) {
            return function (x) {
                return x;
            }
        };

        // 定义数字1:
        var one = function (f) {
            return function (x) {
                return f(x);
            }
        };

        // 定义加法:
        function add(n, m) {
            return function (f) {
                return function (x) {
                    return m(f)(n(f)(x));
                }
            }
        }

        var two = add(one, one);
        (two(function () {
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
            getAge: function () {
                var b = this.birth; // 1990
                var fn = () => new Date().getFullYear() - this.birth; // this指向window或undefined
                return fn();
            }
        };
        console.log(obj.getAge());
    },
    canvasIdErrorCallback: function (e) {
        console.error(e.detail.errMsg)
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
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
    onShow: function () {
        initCalendar(); // 使用默认配置初始化日历
   
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})
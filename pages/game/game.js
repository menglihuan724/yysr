// pages/test/test.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        curSqe: 0,
        questions: [
            {
                question: "老张肝脏移植术后13年，一直按照医嘱服用普乐可复作为唯一抗排斥药物；老张媳妇说都13年了排斥控得很好，可以试试每次剂量减半，老张应该____",
                answerList: [
                    {
                        seq: 1,
                        content: "尝试剂量减半",

                    },
                    {
                        seq: 2,
                        content: "不能擅自改药的剂量"
                    },
                    {
                        seq: 3,
                        content: "先尝试剂量减半再停药"
                    }
                ],
                power: 10,
                mlb: 10,
                seq: 1

            },
            {
                question: "老张肝脏移植术后14年，一直按照医嘱服用普乐可复作为唯一抗排斥药物；老张媳妇说都13年了排斥控得很好，可以试试每次剂量减半，老张应该____",
                answerList: [
                    {
                        seq: 1,
                        content: "尝试剂量减半"
                    },
                    {
                        seq: 2,
                        content: "不能擅自改药的剂量"
                    },
                    {
                        seq: 3,
                        content: "先尝试剂量减半再停药"
                    }
                ],
                power: 20,
                mlb: 20,
                seq: 2

            },
            {
                question: "老张肝脏移植术后15年，一直按照医嘱服用普乐可复作为唯一抗排斥药物；老张媳妇说都13年了排斥控得很好，可以试试每次剂量减半，老张应该____",
                answerList: [
                    {
                        seq: 1,
                        content: "尝试剂量减半"
                    },
                    {
                        seq: 2,
                        content: "不能擅自改药的剂量"
                    },
                    {
                        seq: 3,
                        content: "先尝试剂量减半再停药"
                    }
                ],
                power: 30,
                mlb: 30,
                seq: 3

            },
        ],
        show: false
    },
    onNext() {
        let index = this.data.curSqe + 1
        if (index == 3) {
            wx.showToast({
                title: '成功',
                icon: 'success',
                duration: 2000
            })
            wx.startPullDownRefresh()
            this.onClose()
        }
        this.setData({ curSqe: index })
    },
    onOpen() {
        this.setData({ show: true });
    },
    onClose() {
        this.setData({ show: false });
    },
    canvasIdErrorCallback: function (e) {
        console.error(e.detail.errMsg)
    },

    sendMsg() {
        // let text=new ArrayBuffer(10)
        let req=JSON.stringify({userName:'menglihuan',password:'12321',version:1,command:1})
        wx.sendSocketMessage({
            data: req,
            fail: function () {
                console.log("发送消息失败")
            },
            success: function () {
                console.log("发送消息成功")
                wx.closeSocket({
                    code:1000,
                    success:function(){
                        console.log("close成功")
                    },
                    fail:function(){
                        console.log("close失败")
                    }
                });
            }
        })
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
    },

    connectSocket(){
        wx.connectSocket({
            url: 'wss://192.168.0.104:8000/ws',
            data: {
                userName: 'menglihuan',
                password: '123456'
            },
            header: {
                'content-type': 'application/json'
            },
            fail: function () {
                console.log("服务器返回握手失败消息")
            },
            success: function () {
                console.log("服务器返回握手成功消息")
            }
            // protocols: ['protocol1'],
            //method: "GET"
        });
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        let _this=this;
        _this.connectSocket();
        wx.onSocketError(function (data) {
            console.log("socket链接已经异常:"+JSON.stringify(data))
        });
        wx.onSocketClose(function (header) {
          
            console.log("socket链接已经关闭")
            //_this.connectSocket();
        });
        wx.onSocketOpen(function (header) {
            console.log("socket链接成功")
        });
        wx.onSocketMessage(function (data) {
            debugger;
            console.log("服务器返回数据:" + JSON.stringify(data))
        });
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
// pages/test/test.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        questions: [
            {
                question: "老张肝脏移植术后13年，一直按照医嘱服用普乐可复作为唯一抗排斥药物；老张媳妇说都13年了排斥控得很好，可以试试每次剂量减半，老张应该____",
                answerList: [
                    {
                        seq: 1,
                        content:"尝试剂量减半",
        
                    },
                    {
                        seq: 2,
                        content:"不能擅自改药的剂量"
                    },
                    { 
                        seq: 3 ,
                        content:"先尝试剂量减半再停药"
                    }
                ],
                power:10,
                mlb:10,
                seq:1

            },
            {
                question: "老张肝脏移植术后13年，一直按照医嘱服用普乐可复作为唯一抗排斥药物；老张媳妇说都13年了排斥控得很好，可以试试每次剂量减半，老张应该____",
                answer: [
                    {
                        seq: 1,
                        content:"尝试剂量减半"
                    },
                    {
                        seq: 2,
                        content:"不能擅自改药的剂量"
                    },
                    { 
                        seq: 3 ,
                        content:"先尝试剂量减半再停药"
                    }
                ],
                power:10,
                mlb:10,
                seq:2

            },
            {
                question: "老张肝脏移植术后13年，一直按照医嘱服用普乐可复作为唯一抗排斥药物；老张媳妇说都13年了排斥控得很好，可以试试每次剂量减半，老张应该____",
                answer: [
                    {
                        seq: 1,
                        content:"尝试剂量减半"
                    },
                    {
                        seq: 2,
                        content:"不能擅自改药的剂量"
                    },
                    { 
                        seq: 3 ,
                        content:"先尝试剂量减半再停药"
                    }
                ],
                power:10,
                mlb:10,
                seq:3

            },
        ],
        show: false
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


    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
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
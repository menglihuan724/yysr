// pages/test/test.js
import initCalendar from '../../template/calendar/index';
import { setTodoLabels,enableArea, enableDays } from '../../template/calendar/index';
Page({
    /**
     * 页面的初始数据
     */
    data: {

        // 0关闭,1打开
        drugStageStatus: 0,
        drugStageDetail: {
            "id": 1,
            "stage": 6,
            "time": "2018-05-10 至 2018-06-10",
            "drugTimeList": ["10:00-12:00", "10:00-12:00", "10:00-12:00"],
            "drugNum": 3,
            "choosedStage": true
        },
        drugStage: [{
            "id": 1,
            "stage": 6,
            "time": "2018-05-10 至 2018-06-10",
            "drugNum": 3,
            "drugTimeList": ["10:00-12:00", "10:00-12:00", "10:00-12:00"],
            "choosedStage": true
        },
        {
            "id": 2,
            "stage": 7,
            "time": "2018-05-10 至 2018-06-10",
            "drugNum": 3,
            "drugTimeList": ["10:00-12:00", "10:00-12:00", "10:00-12:00"],
            "choosedStage": false
        },
        ],
        totalDays: 80,
        continuousDays: 7,
        remainingDays: 7,
        drugAdherence: '72%',
        drugName: '阿斯品林',
    },
    clickStage: function (e) {
        let id = e.currentTarget.id;
        if (this.data.drugStageStatus == 0) {
            this.openStage(id);
        } else {
            this.closeStage(id);
        }
    },
    openStage: function (id) {
        this.data.drugStage.filter(x =>
            x.id != id
        ).map(x =>
            x.choosedStage = true
            );
        this.setData({
            drugStageStatus: 1,
            drugStage: this.data.drugStage
        })
    },
    closeStage: function (id) {
        this.data.drugStage.filter(x =>
            x.id != id
        ).map(x =>
            x.choosedStage = false
            );
        this.setData({
            drugStageStatus: 0,
            drugStage: this.data.drugStage
        })
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
        // 指定可选时间区域
        // enableArea(['2018-11-1', '2018-11-30']);
        // 指定特定可选日期
        enableDays([]);
        setTodoLabels({
            pos: 'bottom',
            dotColor: '#000',
            days: [{
                year: 2018,
                month: 11,
                day: 1,
                type:1
            }, {
                year: 2018,
                month: 11,
                day: 10,
                type:0
            }],
        });
        console.log(this.data.calendar.days);
        console.log(this.data.calendar.todoLabels);

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
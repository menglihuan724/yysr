Page({
  data: {
    imgUrls: [
      '../../image/sy1.jpg',
      '../../image/sy2.jpg',
      '../../image/sy3.jpg'
    ],
    indicatorDots: false,
    circular:true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    disabled: false,
    plain: false,
    loading: false

  },
  buy:function(e){
    console.log('开始购买');
    wx.requestPayment({
      'timeStamp': '',
      'nonceStr': '',
      'package': '',
      'signType': 'MD5',
      'paySign': '',
      'success': function (res) {
      },
      'fail': function (res) {
      }
    })
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  }
})
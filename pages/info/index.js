// pages/info/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: '',
    name: '',
    info: [],
    tips: [],
    date: '',
    isShowLoading: true,
    isContentLoading: false,
    active: 0,
    tabItem:[
      {
        txt: '今日运势',
        date: ''
      },
      {
        txt: '明日运势',
        date: ''
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var date = new Date();
    this.setData({
      type: options.type,
      name: options.name,
      url: options.url,
      date: {
        m: date.getMonth() + 1,
        d: date.getDate()
      }
    }, function() {
      this.fetchData(options.type);
    });
  },
  countStar(value) {
    return Math.floor(+(value.substring(0, value.length - 1)) / 20);
  },
  fetchData(type, index) {
    const _this = this;
    wx.request({
      url: `https://10.45.215.130:443/api/getMainMesg`,
      data: {
        type,
        index
      },
      success(res) {
        let tips = res.data.tips;
        tips[0]['star'] = _this.countStar(tips[0].value);
        tips[1]['star'] = _this.countStar(tips[1].value);
        _this.setData({
          info: res.data.info,
          tips
        }, () => {
          _this.setData({
            isShowLoading: false,
            isContentLoading: false
          })
        })
      }
    })
  },
  handlerTap(e) {
    const index = e.currentTarget.dataset['index'];
    this.setData({
      active: index,
      isContentLoading: true
    })
    this.fetchData(this.data.type, index);
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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
  onShareAppMessage: function (res) {
    return {
      title: "遇见最美的自己",
      path: "/pages/yunshi/index",
      imageUrl: "/images/logo.jpg"
    };
  }
})
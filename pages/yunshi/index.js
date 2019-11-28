// pages/main/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowLoading: true,
    icons: [{
      name: '天蝎座',
      url: '../../images/tianxie.png',
      type: 'scorpio'
    }, {
      name: '双鱼座',
      url: '../../images/shuangyu.png',
      type: 'pisces'
    }, {
      name: '水瓶座',
      url: '../../images/shuiping.png',
      type: 'aquarius'
    }, {
      name: '处女座',
      url: '../../images/chunv.png',
      type: 'virgo'
    }, {
      name: '天秤座',
      url: '../../images/tiancheng.png',
      type: 'libra'
    }, {
      name: '摩羯座',
      url: '../../images/mojie.png',
      type: 'capricorn'
    }, {
      name: '巨蟹座',
      url: '../../images/juxie.png',
      type: 'cancer'
    }, {
      name: '金牛座',
      url: '../../images/jinniu.png',
      type: 'taurus'
    }, {
      name: '双子座',
      url: '../../images/shuangzi.png',
      type: 'gemini'
    }, {
      name: '狮子座',
      url: '../../images/shizi.png',
      type: 'leo'
    }, {
      name: '白羊座',
      url: '../../images/baiyang.png',
      type: 'aries'
    }, {
      name: '射手座',
      url: '../../images/sheshou.png',
      type: 'sagittarius'
    }],
    happyTimeListData: [],
    sentence: '',
    date: '',
    astro: '请选择出生日期!'
  },
  bindDateChange(e) {
    var date = e.detail.value;
    var dateSplit = date.split('-');
    var astro = `${this.getAstro(+dateSplit[1], +dateSplit[2])}座`;
    this.setData({
      date: e.detail.value,
      astro
    })
  },
  getAstro(m, d){
    return "魔羯水瓶双鱼牡羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯".substr(m * 2 - (d < "102223444433".charAt(m - 1) - -19) * 2, 2);
  },
  goMainPage: function (e) {
    var type = e.currentTarget.dataset['type'];
    var name = e.currentTarget.dataset['name'];
    var src = e.currentTarget.dataset['src']
    wx.navigateTo({
      url: `../info/index?type=${type}&name=${name}&url=${src}`
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  
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
  onShareAppMessage: function () {
    return {
      title: "遇见最美的自己",
      path: "/pages/yunshi/index",
      imageUrl: "/images/logo.jpg"
    };
  }
})
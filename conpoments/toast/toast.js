// conpoments/toast.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    isShow: false,
    showMesg: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showToast(mesg) {
      this.setData({
        isShow: true,
        showMesg: mesg
      });
      setTimeout(() => {
        this.setData({
          isShow: false,
          showMesg: ''
        });
      },2000)
    }
  }
})

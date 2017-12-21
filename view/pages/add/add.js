// pages/add/add.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '2016-09-01',
    time: '00:00',
    time2: '24:00',
    addNewTime:false,
    showDeleteBtn:false,
    showMinusBtn:false,
    selected:false,
  },
  //添加时间段
  addNewTime:function(){
    this.setData({
      addNewTime:true
    })
  },
  //发布
  bindViewTap: function () {
    wx.navigateTo({
      url: '../add/preview'
    })
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },
  bindTimeChange2: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time2: e.detail.value
    })
  },
  //长按参会人头像图片显示删除按钮
  showDeleteBtn:function(){
    this.setData({
      showDeleteBtn: true,
      showMinusBtn: true
    })
  },
  //选择参会人头像遮罩层的选择符勾选
  selectPersonToDelete:function(){
    this.setData({
      selected: true
    })
  },
  //点击删除按钮事件
  deleteSelected:function(){
    this.setData({
      selected: false,
      showDeleteBtn: false,
      showMinusBtn: false,
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
  
  }
})
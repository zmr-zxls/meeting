// pages/vote/vote.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModal: false,
    showCancel: false,
    showTixing: false,
    title: "邀请的人员"
  },
   /**
   * 弹出框蒙层截断touchmove事件
   */
  preventTouchMove: function () {
  },
  /**  
     * 隐藏模态对话框  
     */
  hideModal: function () {
    this.setData({
      showModal: false,
      showTixing: false,
    });
  },
  /**
   * 对话框确认按钮点击事件
   */
  onConfirm: function () {
    this.hideModal();
  },
  /**
   * 对话框取消按钮点击事件
   */
  onCancel: function () {
    this.hideModal();
  },
  /**
   * 查看邀请的全部用户 
   */
  showYaoQingModal: function () {
    this.setData({
      showModal: true,
      title: "邀请的人员"
    })
  },
  /**
   * 查看未投票的全部用户
   */
  showYiTouModal: function () {
    this.setData({
      showModal: true,
      showTixing: true,
      title: "未投票的人员"
    })
  },
  /**
     * 查看没空参会的全部用户
     */
  showMeiKongModal: function () {
    this.setData({
      showModal: true,
      title: "没空参会的人员"
    })
  },
  /**
     * 提醒没投票的人
     */
  onTixing: function () {
    wx.showToast({
      title: '提醒成功',
      icon: 'success',
      duration: 2000
    });
    this.hideModal();
  },
  //没空参加方法
  bindNoTap: function () {
    wx.showModal({
      title: '提示',
      content: '确认所选时间没空参加',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定');
          wx.showToast({
            title: '投票成功',
            icon: 'success',
            duration:1500,
            success: function () {
              setTimeout(function () {
                wx.reLaunch({
                  url: '../index/index'
                });
              }, 1600);
              
            }
          });
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  //有空参加方法
  bindYesTap: function () {
    wx.showModal({
      title: '提示',
      content: '确认所选时间参加',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定');
          wx.showToast({
            title: '投票成功',
            icon: 'success',
            duration: 1500,
            success:function(){
              setTimeout(function () {
                wx.reLaunch({
                  url: '../index/index'
                });
              }, 1600);
            }
          });
          
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
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
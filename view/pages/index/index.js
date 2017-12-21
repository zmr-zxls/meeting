//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    noHistoryText: '暂无历史纪录',
    historyText: '历史邀请记录',  
    isDeleted:false,
    showItem:true,
  },
  //发布投票入口
  bindAddTap: function () {
    wx.navigateTo({
      url: '../add/add'
    })
  },
  //进入投票
  bindVoteTap: function () {
    wx.navigateTo({
      url: '../vote/vote'
    })
  },
  //长按历史记录删除
  showActionSheet:function(){
    var _this = this;
    wx.showActionSheet({
      itemList: ['删除'],
      itemColor:"#E64340",
      success: function (res) {
        console.log(res.tapIndex);
        _this.setData({
          isDeleted: true,
        });
        setTimeout(function () {         
          _this.setData({
            isDeleted: false,
            showItem:false,
          })
        }, 500);
        if (res.tapIndex == 0){
          wx.showToast({
            title: '删除成功',
            icon: 'success',
            duration: 2000
          });
        }
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },
  onLoad: function () {
 
  }
})

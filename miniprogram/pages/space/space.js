const app = getApp();
const regeneratorRuntime = require('../../utils/runtime.js');

function getRandomColor() {
  let rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}

Page({
  onReady: function(res) {
    this.videoContext = wx.createVideoContext('myVideo');
  },
  inputValue: '',
  data: {
    src: '',
    userInfo: [],
    danmuList: [{
        text: '博主os：米卡最帅！',
        color: '#ff0000',
        time: 1
      },
      {
        text: '迷妹们：博主说得对！',
        color: '#ff00ff',
        time: 3
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function(options) {
    let that = this;
    app.checkUserInfo(function(userInfo, isLogin) {
      if (!isLogin) {
        that.setData({
          showLogin: true
        })
      } else {
        that.setData({
          userInfo: userInfo
        });
      }
    });
  },

  bindInputBlur: function(e) {
    this.inputValue = e.detail.value
  },

  bindButtonTap: function() { //视频下载
    var that = this
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: ['front', 'back'],
      success: function(res) {
        that.setData({
          src: res.tempFilePath
        })
      }
    })
  },
  bindSendDanmu: function() {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
  },
  videoErrorCallback: function(e) {
    console.log('视频错误信息:');
    console.log(e.detail.errMsg);
  },
})
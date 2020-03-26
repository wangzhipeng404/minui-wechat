import utils from '../utils/util'

export default function request(obj) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: utils.server + obj.url,
      data: obj.data,
      header: {
        'content-type': 'application/json',
        'Accept': 'application/json',
        'Cookie': obj.cookie,
      },
      method: obj.method || 'GET',
      success(res) {
        if (res.statusCode === 200) {
          resolve(res)
        } else {
          wx.showToast({
            title: res.data.error || res.data,
            icon: 'none',
            duration: 2000
          })
          reject(res)
        }
      },
      fail(e) {
        reject(e)
      }
    })
  })
}

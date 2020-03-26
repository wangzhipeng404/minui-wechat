const rp = require("request-promise");

// 云函数入口函数

exports.main = async (event, context) => {
  const { text } = event;
  var res = await rp({
    uri: "http://api.qingyunke.com/api.php",
    qs: {
      key: 'free',
      appid: 0,
      msg: text,
    },
    method: "get",
    json: true
  }).then(body => {
    return ({
      type: 'text',
      value: body.content,
      from: {
        nickName: 'groop',
        _id: 'groop',
        avatarUrl: 'cloud://groop-b2n3f.6772-groop-b2n3f-1301541600/icon/groop_logo.png'
      }
    })
  })
  .catch(err => {
    return err;
  });
  return res;
};

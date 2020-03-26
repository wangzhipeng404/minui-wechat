const rp = require("request-promise");

// 云函数入口函数

exports.main = async (event, context) => {
  const { msg } = event;
  var res = await rp({
    uri: "http://openapi.tuling123.com/openapi/api/v2",
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: {
      reqType: 0,
      perception: {
        inputText: {
          text: msg
        }
      },
      userInfo: {
        apiKey: "f506a899e543447da4c1a765f4adee8e",
        userId: "777229674890924032"
      }
    },
    json: true
  }).then(body => {
    const data = body.results[0]
    return ({
      type: 'text',
      value: data.values.text,
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

import wepy from 'wepy';
// let token = '';
const wxRequest = async(params = {}, url) => {
  let data = params.query || {};
  let res = await wepy.request({
    url: url,
    method: params.method || 'GET',
    data: data,
    header: {
      'content-type': 'application/json',
    },
  });
  console.log(res,'ee');
  return res.data;
};


module.exports = {
  wxRequest
}

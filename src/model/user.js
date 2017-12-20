/**
 * Created by Administrator on 2017/12/16.
 */
const https = require('https');
const queryString = require('querystring');
module.exports = class extends think.Model{
    // 根据授权code获取微信用户openid
    getOpenid(code){
        const df = think.defer();
        const data = {
            appid: think.config('setup.appid'), 　　//小程序唯一标识
            secret: think.config('setup.secret'), //小程序的 app secret
            grant_type: 'authorization_code',
            js_code: code
        };
        const qs = queryString.stringify(data);
        https.get(think.config('setup.openidApiUrl')+qs, (res) => {
            let responseText = '';
            res.setEncoding('utf-8');
            res.on('data', (data) => {
               responseText += data;
            });
            res.on('end', () => {
                // console.log(responseText);
                let json = JSON.parse(responseText);
                df.resolve(json.openid||-1);
            });
        }).on('error', (e) => {
            df.reject(-1);
            think.logger.error(e);
        });
        return df.promise;
    }
}
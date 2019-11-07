/**
 * Created by RioSton on 03/11/19.
 * author: Zhao Bin
 * QQ:  57509007
 */

/*
POST /urls?site=www.58.com&token=edk7ychrEZP9pDQD HTTP/1.1
User-Agent: curl/7.12.1
Host: data.zz.baidu.com
Content-Length: 83
http://www.example.com/1.html
http://www.example.com/2.html
 */

(function (Plugin) {
    'use strict';

    var nconf = require.main.require('nconf');
    var request = require('request');
    var http = require('http');


    function AutoPush (tid) {

        var baseUrl = nconf.get('url');

        var baiduKey = nconf.get("baidukey");

        var URL = "/urls?site=www.rioston.com&token=" + baiduKey;

        var contentURL = baseUrl + "/topic/" + tid + "/post";

        var options = {
            host: "data.zz.baidu.com",
            path: URL,//接口的调用地址
            method: "post",
            "User-Agent": "curl/7.12.1",
            headers: {
                "Content-Type": "text/plain",
                "Content-Length": contentURL.length
            }
        };

        httprequest(options, contentURL);
        console.log("contentURL: " + contentURL);

    }


    function httprequest(options, content)
    {
        var req = http.request(options, function (res)
        {
            res.setEncoding("utf8");
            res.on("data", function (data) {
                // console.log("data:", data); //返回的数据
            });
        });
        req.write(content);
        req.end;

    }

    //NodeBB list of Hooks: https://github.com/NodeBB/NodeBB/wiki/Hooks
    Plugin.hooks = {
        action: {
            topicSave: function (topicData, callback)
            {

                 AutoPush(topicData.topic.tid);

            }
        }
    };

})(module.exports);

/**
 * Created by RioSton on 03/11/19.
 * author: Zhao Bin
 * QQ:  57509007
 */

(function (Plugin) {
    'use strict';

    function AutoPush () {

        console.log("完成一次推送任务");
        (function(){
            var bp = document.createElement('script');
            var curProtocol = window.location.protocol.split(':')[0];
            if (curProtocol === 'https') {
                bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
            }
            else {
                bp.src = 'http://push.zhanzhang.baidu.com/push.js';
            }
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(bp, s);
        })();
    }

    //NodeBB list of Hooks: https://github.com/NodeBB/NodeBB/wiki/Hooks
    Plugin.hooks = {
        filters: {
            topicsGet: function (topicsData, callback) {
                AutoPush();
                callback(null, topicsData);
            }
        }
    };

})(module.exports);

const setWechatTitle = function(title) {
    document.title = title;
    let mobile = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(mobile)) {
        let iframe = document.createElement('iframe');
        iframe.style.visibility = 'hidden';
        // 替换成站标favicon路径或者任意存在的较小的图片即可
        iframe.setAttribute('src', '//m.baidu.com/favicon.ico');
        let iframeCallback = function() {
            setTimeout(function() {
                iframe.removeEventListener('load', iframeCallback)
                document.body.removeChild(iframe)
            }, 10)
        };
        iframe.addEventListener('load', iframeCallback)
        document.body.appendChild(iframe)
    }
};

let setTitleHack = function (t) {
    document.title = t;
    let iframe = document.createElement('iframe');
    iframe.style.visibility = 'hidden';
    iframe.style.width = '1px';
    iframe.style.height = '1px';
    iframe.src = '//m.baidu.com/favicon.ico';
    iframe.onload = function () {
        setTimeout(function () {
            iframe.remove();
        }, 10);
    };
    document.body.appendChild(iframe);
};


const shareJs = function(jssdk, options) {
    wx.config({
        debug: false,
        appId: jssdk.appId,
        timestamp: parseInt(jssdk.timestamp),
        nonceStr: jssdk.nonceStr,
        signature: jssdk.signature,
        jsApiList: [
            "onMenuShareTimeline",
            "onMenuShareAppMessage"
        ]
    });
    var defaults = {
        title: "分享的标题",
        desc: "分享的描述",
        link: location.href, //分享页面地址,不能为空
        imgUrl: 'https://tup.iheima.com/sport.png', //分享是封面图片，不能为空
        success: function() {}, //分享成功触发
        cancel: function() {} //分享取消触发，需要时可以调用
    };
    options = Object.assign({}, defaults, options);
    wx.ready(function() {
        var thatopts = options;
        wx.onMenuShareTimeline({
            title: thatopts.title, // 分享标题
            desc: thatopts.desc, // 分享描述
            link: thatopts.link, // 分享链接
            imgUrl: thatopts.imgUrl, // 分享图标
            success: function() {
                // alert("成功");
            },
            cancel: function() {
                // alert("失败")
            }
        });
        wx.onMenuShareAppMessage({
            title: thatopts.title, // 分享标题
            desc: thatopts.desc, // 分享描述
            link: thatopts.link, // 分享链接
            imgUrl: thatopts.imgUrl, // 分享图标
            success: function() {
                // alert("成功");
            },
            cancel: function() {
                // alert("失败")
            }
        });
    });
}


module.exports = {
    setWechatTitle,
    setTitleHack,
    shareJs
};

function getStyle(node, cssStr) {
    return node.currentStyle ? node.currentStyle[cssStr] : getComputedStyle(node)[cssStr];
}

function startMove(node, cssObj, complete) {
    clearInterval(node.timer);
    node.timer = setInterval(function() {
            var isEnd = true; //假设所有动画到达目的值
            for (var attr in cssObj) {
                var iTarget = cssObj[attr];

                //计算速度
                //判断是否为透明度形式
                var iCur = null;
                if (attr == "opacity") {
                    iCur = parseInt(parseFloat(getStyle(node, "opacity")) * 100);
                } else {
                    iCur = parseInt(getStyle(node, attr));
                }
                var speed = (iTarget - iCur) / 8;
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

                if (attr == "opacity") {
                    iCur += speed;
                    node.style[attr] = iCur / 100;
                    node.style[attr] = "alpha(opacity=" + iCur + ")";
                } else {
                    node.style[attr] = iCur + speed + "px";
                }
                //判断是否所有的当前值都等于目的值
                if (iCur != iTarget) {
                    isEnd = false;

                }
            }
            if (isEnd) {
                clearInterval(node.timer);
                //判断是否有回调函数
                if (complete) {
                    complete.call(node);
                }
            }
        }, 30)
        // complete();
}
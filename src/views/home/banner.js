var oDiv1 = document.getElementById("div1");
var timer = null;
var oUl1 = document.getElementById("ul1");
oUl1.style.width = parseInt(350 * 4) + 'px';
timer = setInterval(() => {
    startMove(oUl1, {
        left: oUl1.offsetLeft - 320
    }, function() {
        // console.log(oUl1.offsetWidth);
        if (oUl1.offsetLeft <= -oUl1.offsetWidth / 4 * 3) {
            oUl1.style.left = "0px";
        }
    });
}, 2000);
oDiv1.onmouseover = function() {
    clearInterval(timer);
}

oDiv1.onmouseout = function() {
    timer = setInterval(function() {
        startMove(oUl1, {
            left: parseInt(oUl1.offsetLeft - 320)
        }, function() {
            if (oUl1.offsetLeft <= -oUl1.offsetWidth / 4 * 3) {
                oUl1.style.left = "0px";
            }
        });
    }, 2000);

}
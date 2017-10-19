;(function($){
  $.fn.bucketList = function (options) {
    var defaults = [{"sq":"5000","sp":3000},
                    {"flz":1500,"yfl":1000,"wc":"66.66"},
                    {"tjz":600,"tjl":180,"wc":"4"},
                    {"cgz":900,"ycg":342,"wc":"38"},
                    {"fl":"50","tj":"40","cg":"10"}];
    //options合并到defaults上,defaults继承了options上的各种属性和方法,将所有的赋值给endOptions
    var opts = $.extend({},defaults,options);

    //获取内容区盒子宽度
    var contentWidth = this.width() -15,contentHeight = this.height() - 70 - 30;

    var flW = contentWidth * opts[4].fl / 100 - 15;
    var tjW = contentWidth * opts[4].tj / 100 - 15;
    var cgW = contentWidth * opts[4].cg / 100 - 15;

    var flsl = opts[1].flz;
    var tjsl = opts[2].tjz;
    var cgsl = opts[3].cgz;

    var flwcH = contentHeight * opts[1].wc / 100;
    var flwc = opts[1].wc + "%";
    var tjwcH = contentHeight * opts[2].wc / 100;
    var tjwc = opts[2].wc + "%";
    var cgwcH = contentHeight * opts[3].wc / 100;
    var cgwc = opts[3].wc + "px";

    var flbl = opts[4].fl + "%";
    var tjbl = opts[4].tj + "%";
    var cgbl = opts[4].cg + "%";

    var flFinishPercentPosi,tjFinishPercentPosi,cgFinishPercentPosi;
    opts[1].wc <= 5 ? flFinishPercentPosi == "-15" : flFinishPercentPosi == "0";
    opts[2].wc <= 5 ? tjFinishPercentPosi == "-15" : tjFinishPercentPosi == "0";
    opts[3].wc <= 5 ? cgFinishPercentPosi == "-15" : cgFinishPercentPosi == "0";

    var html = '<div class="bucketHeader">申请器材数量'+opts[0].sq+'审批器材数量'+opts[0].sp+'</div>' +
              '<div class="bucketContent">' +
                '<div class="listBox" style="width:'+flW+'px">' +
                  '<p class="bucketFaliaoTotal" title="发料器材数量'+flsl+'">发料器材数量<span>'+flsl+'</span></p>' +
                  '<div class="bucketFaliao">' +
                    '<div class="bucketFaliaoFinish" title="已完成' + flwc + '" style="width:'+flW+'px;height:'+flwcH+'px">' +
                      '<p class="bucketFaliaoFinishPercent" style="top:'+flFinishPercentPosi+'px">已完成<span>'+flwc+'%</span></p>' +
                    '</div>' +
                  '</div>' +
                  '<p class="bucketFaliaoPercent" title="发料占审批数量'+flbl+'">发料占审批数量'+flbl+'</p>' +
                '</div>' +
                '<div class="listBox" style="width:'+tjW+'px;">' +
                  '<p class="bucketTiaojiTotal" title="调剂器材数量'+tjsl+'">调剂器材数量<span>'+tjsl+'</span></p>' +
                  '<div class="bucketTiaoji">' +
                    '<div class="bucketTiaojiFinish" title="已完成' +tjwc+ '" style="width:'+tjW+'px; height:' +tjwcH+ 'px">' +
                      '<p class="bucketTiaojiFinishPercent" style="top:'+tjFinishPercentPosi+'px">已完成<span>'+tjwc+'</span></p>' +
                      '</div>' +
                    '</div>' +
                    '<p class="bucketTiaojiPercent" title="调剂占审批数量'+tjbl+'">调剂占审批数量'+tjbl+'</p>' +
                  '</div>' +
                '<div class="listBox" style="width:'+cgW+'px;">' +
                  '<p class="bucketCaigouTotal" title="采购器材数量'+cgsl+'">采购器材数量<span>'+cgsl+'</span></p>' +
                  '<div class="bucketCaigou">' +
                    '<div class="bucketCaigouFinish" title="已完成' +cgwc+'" style="width:'+cgW+'px; height:'+cgwcH+'px">' +
                      '<p class="bucketCaigouFinishPercent" style="top:'+cgFinishPercentPosi+'px">已完成<span>'+cgwc+'</span></p>' +
                      '</div>' +
                    '</div>' +
                    '<p class="bucketCaigouPercent" title="采购占审批数量'+cgbl+'">采购占审批数量'+cgbl+'</p>' +
                  '</div>' +
                '</div>' +
              '</div>';

    this.append(html)
    return this;
  }
})(jQuery);
;(function ($) {
  $.fn.bucketList = function (options) {
    var defaults = [{"sq": 5000, "sp": 4550},
      {"flz": 1500, "yfl": 1000, "wc": "66.66"},
      {"tjz": 600, "tjl": 180, "wc": "4"},
      {"cgz": 900, "ycg": 342, "wc": "38"},
      {"fl": 30, "tj": 30, "cg": 10}];
    //options合并到defaults上,defaults继承了options上的各种属性和方法,将所有的赋值给endOptions
    var opts = $.extend({}, defaults, options);

    //取值
    var _selfW = this.width(),_selfH = this.height();
    var approvedH = opts[0].sp / opts[0].sq  * _selfH;
    var sqqc = opts[0].sq;                   //申请器材总量
    var flsl = opts[1].flz;
    var tjsl = opts[2].tjz;
    var cgsl = opts[3].cgz;
    var skbox = approvedH - 40 - 40;         //色块盒子【除去器材总数量和占审批数量】
    var flwcH = skbox * opts[1].wc / 100;    //已完成色块
    var flwc = opts[1].wc + "%";
    var tjwcH = skbox * opts[2].wc / 100;
    var tjwc = opts[2].wc + "%";
    var cgwcH = skbox * opts[3].wc / 100;
    var cgwc = opts[3].wc + "%";
    var flbl = opts[4].fl + "%";
    var tjbl = opts[4].tj + "%";
    var cgbl = opts[4].cg + "%";
    var sqsl,flFinishPercentPosi,tjFinishPercentPosi,cgFinishPercentPosi;
    opts[1].wc <= 5 ? flFinishPercentPosi = "-15" : flFinishPercentPosi = "0";//发料已完成色块文字位置
    opts[2].wc <= 5 ? tjFinishPercentPosi = "-15" : tjFinishPercentPosi = "0";//调剂已完成色块文字位置
    opts[3].wc <= 5 ? cgFinishPercentPosi = "-15" : cgFinishPercentPosi = "0";//采购已完成色块文字位置

    approvedH >= (_selfH-30) ? sqsl = "none" : sqsl = "block";//申请器材数量的显示隐藏

    //判定当发料、调剂、采购比例大于100%时进行判定
    var flW,tjW,cgW;
    var fl = Number(opts[4].fl),tj = Number(opts[4].tj), cg = Number(opts[4].cg);
    var allJSON = fl + tj + cg;
    if(allJSON > 100 || allJSON < 100 ){
      var cutSelf = _selfW - 45;
      flW = Math.floor(fl / allJSON * cutSelf);//发料色块宽度
      tjW = Math.floor(tj / allJSON * cutSelf);//调剂色块宽度
      cgW = Math.floor(cg / allJSON * cutSelf);//采购色块宽度
    }

    //添加面板内容区
    var bucketContent =
      '<p class="boxTitle" title="申请器材数量'+sqqc+'" style="width: '+_selfW+'px;display:'+sqsl+'">申请器材数量'+sqqc+'</p>' +
      '<div class="boxApproved" style="height: '+approvedH+'px;">' +
        '<div class="listBox" style="width:'+flW+'px;">' +
          '<p class="flTotal" title="发料器材数量'+flsl+'">发料器材数量'+flsl+'</p>' +
          '<div class="fl" style="height:'+skbox+'px">' +
            '<div class="flFinish" title="已完成' + flwc + '" style="width:'+flW+'px;height:'+flwcH+'px">' +
              '<p class="flFinishPercent"style="top:'+flFinishPercentPosi+'px">已完成'+flwc+'%</p>' +
            '</div>' +
          '</div>' +
          '<p class="flPercent" title="发料占审批数量'+flbl+'">发料占审批数量'+flbl+'</p>' +
        '</div>' +
      '<div class="listBox" style="width:'+tjW+'px;">' +
        '<p class="tjTotal" title="调剂器材数量'+tjsl+'">调剂器材数量'+tjsl+'</p>' +
        '<div class="tj" style="height:'+skbox+'px">' +
          '<div class="tjFinish" title="已完成'+tjwc+'" style="width:'+tjW+'px;height:'+tjwcH+'px">' +
            '<p class="tjFinishPercent" style="top:'+tjFinishPercentPosi+'px">已完成'+tjwc+'</p>' +
          '</div>' +
        '</div>' +
        '<p class="tjPercent" title="调剂占审批数量'+tjbl+'">调剂占审批数量'+tjbl+'</p>' +
      '</div>' +
      '<div class="listBox" style="width:'+cgW+'px;">' +
        '<p class="cgTotal" title="采购器材数量'+cgsl+'">采购器材数量'+cgsl+'</p>' +
          '<div class="cg" style="height:'+skbox+'px">' +
            '<div class="cgFinish" title="已完成'+cgwc+'" style="width:'+cgW+'px; height:'+cgwcH+'px">' +
              '<p class="cgFinishPercent" style="top:'+cgFinishPercentPosi+'px">已完成'+cgwc+'</p>' +
            '</div>' +
          '</div>' +
        '<p class="cgPercent" title="采购占审批数量'+cgbl+'">采购占审批数量'+cgbl+'</p>' +
      '</div>'
    ;

    //把html添加到盒子内
    this.html(bucketContent);

    return this;
  }
})(jQuery);
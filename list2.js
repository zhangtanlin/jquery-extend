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
    var _selfW,_selfH;                         //获取当前元素最小宽度和高度
    _selfW = this.width();
    _selfH = this.height();

    var spH;                                   //设置审批器材可以使用的最大有效高度
    spH = this.height() - 30;

    var approvedH;                             //审批器材色块高度
    opts[0].sp / opts[0].sq  * spH < 125 ? approvedH = 125 : approvedH = opts[0].sp / opts[0].sq  * spH;

    var sqqc = opts[0].sq;                     //申请器材总量
    var spqc = opts[0].sp;                     //审批器材总量
    var flsl = opts[1].flz;
    var tjsl = opts[2].tjz;
    var cgsl = opts[3].cgz;

    var skboxH;                                //发料、调剂、采购色块盒子
    approvedH - 40 - 40 - 30 < 15 ? skboxH = 15 : skboxH = approvedH - 40 - 40 - 30;

    var flwc,tjwc,cgwc;                        //发料、调剂、采购已完成的值
    flwc = opts[1].wc;
    tjwc = opts[2].wc;
    cgwc = opts[3].wc;

    var flwcH,tjwcH,cgwcH;                     //发料、调剂、采购已完成色块高度
    skboxH * flwc / 100 < 15 ? flwcH = 15 : flwcH = skboxH * flwc / 100;
    skboxH * tjwc / 100 < 15 ? tjwcH = 15 : tjwcH = skboxH * tjwc / 100;
    skboxH * cgwc / 100 < 15 ? cgwcH = 15 : cgwcH = skboxH * cgwc / 100;


    var flbl,tjbl,cgbl;                        //获取发料、调剂、采购占审批数量的比例值
    flbl = opts[4].fl;
    tjbl = opts[4].tj;
    cgbl = opts[4].cg;

    //判定当发料、调剂、采购比例大于100%时进行判定
    var flW,tjW,cgW;                           //发料、调剂、采购色块宽度
    var fl = Number(opts[4].fl),tj = Number(opts[4].tj), cg = Number(opts[4].cg);
    var allJSON = fl + tj + cg;
    if(allJSON > 100 || allJSON < 100 ){
      var cutSelf = _selfW - 60;
      flW = Math.floor(fl / allJSON * cutSelf);
      tjW = Math.floor(tj / allJSON * cutSelf);
      cgW = Math.floor(cg / allJSON * cutSelf);
    }

    //添加面板内容区
    var bucketContent =
      '<p class="boxTitle" title="申请器材数量'+sqqc+'" style="width: '+_selfW+'px;">申请器材数量'+sqqc+'</p>' +
      '<div class="boxApproved" style="height: '+approvedH+'px;">' +
      '<p class="approvedTitle">审批器材数量'+spqc+'</p>' +
        '<div class="listBox" style="width:'+flW+'px;">' +
          '<p class="flTotal" title="发料器材数量'+flsl+'">发料器材数量'+flsl+'</p>' +
          '<div class="fl" style="height:'+skboxH+'px">' +
            '<div class="flFinish" title="已完成' + flwc + '%" style="width:'+flW+'px;height:'+flwcH+'px">' +
              '<p class="flFinishPercent">已完成'+flwc+'%</p>' +
            '</div>' +
          '</div>' +
          '<p class="flPercent" title="发料占审批数量'+flbl+'%">发料占审批数量'+flbl+'%</p>' +
        '</div>' +
      '<div class="listBox" style="width:'+tjW+'px;">' +
        '<p class="tjTotal" title="调剂器材数量'+tjsl+'">调剂器材数量'+tjsl+'</p>' +
        '<div class="tj" style="height:'+skboxH+'px">' +
          '<div class="tjFinish" title="已完成'+tjwc+'%" style="width:'+tjW+'px;height:'+tjwcH+'px">' +
            '<p class="tjFinishPercent">已完成'+tjwc+'%</p>' +
          '</div>' +
        '</div>' +
        '<p class="tjPercent" title="调剂占审批数量'+tjbl+'%">调剂占审批数量'+tjbl+'%</p>' +
      '</div>' +
      '<div class="listBox" style="width:'+cgW+'px;">' +
        '<p class="cgTotal" title="采购器材数量'+cgsl+'">采购器材数量'+cgsl+'</p>' +
          '<div class="cg" style="height:'+skboxH+'px">' +
            '<div class="cgFinish" title="已完成'+cgwc+'%" style="width:'+cgW+'px; height:'+cgwcH+'px">' +
              '<p class="cgFinishPercent">已完成'+cgwc+'%</p>' +
            '</div>' +
          '</div>' +
        '<p class="cgPercent" title="采购占审批数量'+cgbl+'%">采购占审批数量'+cgbl+'%</p>' +
      '</div>'
    ;

    //把html添加到盒子内
    this.html(bucketContent);

    return this;
  }
})(jQuery);
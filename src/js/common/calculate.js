
var Calculate={
  calHeight:function(){

    var ht = $(document).height();
    // 头部高度 76 表格上部 输入框 高度 38 ，底部高度 30
    var h = ht-76-38-30+"px";
    $(".dataDivStyle").css({height:h})
  },
}

var tabsToggle = $('#horizontal-tab__title li');
var contentsToggle = $('#horizontal-tab__content li');

tabsToggle.bind('click',function(){
  contentsToggle.hide();
  tabsToggle.removeClass('open');
  $(contentsToggle[$(this).index()]).show();
  $(this).addClass('open');
});

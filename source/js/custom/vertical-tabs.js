var tabs = $('#vertical-tab__title  li');
var contents = $('#vertical-tab__content li');

tabs.bind('click',function(){
  contents.hide();
  tabs.removeClass('current');
  $(contents[$(this).index()]).show();
  $(this).addClass('current');
});

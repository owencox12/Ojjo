(function($) {
    $(function() {
      
      $('ul.services__tabs').on('click', 'li:not(.services_tab_active)', function() {
        $(this)
          .addClass('services_tab_active').siblings().removeClass('services_tab_active')
          .closest('div.container').find('div.services__content').removeClass('services__content_active').eq($(this).index()).addClass('services__content_active');
      });
    });
  });
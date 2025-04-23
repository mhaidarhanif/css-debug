import Vue from 'vue';
import $ from 'jquery';

class HoverCards {
  constructor() {
    $(document).ready(() => {
      const components = $('.hover-cards.component');

      if (!components.length) return;

      components.each((index, el) => {
        this.init($(el));
      });

      this.initDesktopHover();
    });
  }

  
  init(el) {
    const headers = el.find('.accordion-header');
    const items = el.find('.accordion-item');

    headers.on('click', function () {

      const header = $(this);
      const item = header.next('.accordion-item');

      items.removeClass('open');
      headers.parent().removeClass('expand');

      item.addClass('open');
      header.parent().addClass('expand');
    });

    const firstHeader = headers.first();
    const firstItem = firstHeader.next('.accordion-item');
  
    firstItem.addClass('open');
    firstHeader.parent().addClass('expand');
  }

  initDesktopHover() {
    const cards = $('.on-desktop-block .hover-card');

    if (!cards.length) return;

    cards.first().addClass('active');

    cards.on('mouseenter', function () {
      cards.removeClass('active');
      $(this).addClass('active');
    });
  }
}

export default new HoverCards();


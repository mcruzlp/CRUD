(function ($) {
  "use strict"; //Start of use strict

  $(document).ready(function () {
    $('#pacientes').DataTable();
  });

  $(document).ready(function () {
    editor = new $.fn.dataTable.Editor({
      ajax: "../vendor/datatables/ajax.js",
      table: "#pacientes",
      fields: [{
        label: "First name:",
        name: "first_name"
      }, {
        label: "Last name:",
        name: "last_name"
      }, {
        label: "Position:",
        name: "position"
      }, {
        label: "Office:",
        name: "office"
      }, {
        label: "Extension:",
        name: "extn"
      }, {
        label: "Start date:",
        name: "start_date",
        type: "datetime"
      }, {
        label: "Salary:",
        name: "salary"
      }
      ]
    });

    // Activate the bubble editor on click of a table cell
    $('#pacientes').on('click', 'tbody td:not(:first-child)', function (e) {
      editor.bubble(this);
    });

    $('#pacientes').DataTable({
      dom: "Bfrtip",
      scrollY: 300,
      paging: false,
      ajax: "../vendor/datatables/ajax.js",
      columns: [
        {
          data: null,
          defaultContent: '',
          className: 'select-checkbox',
          orderable: false
        },
        { data: "first_name" },
        { data: "last_name" },
        { data: "position" },
        { data: "office" },
        { data: "start_date" },
        { data: "salary", render: $.fn.dataTable.render.number(',', '.', 0, '$') }
      ],
      order: [1, 'asc'],
      select: {
        style: 'os',
        selector: 'td:first-child'
      },
      buttons: [
        { extend: "create", editor: editor },
        { extend: "edit", editor: editor },
        { extend: "remove", editor: editor }
      ]
    });
  });

  // Toggle the side navigation
  $("#sidebarToggle, #sidebarToggleTop").on('click', function (e) {
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
    if ($(".sidebar").hasClass("toggled")) {
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Close any open menu accordions when window is resized below 768px
  $(window).resize(function () {
    if ($(window).width() < 768) {
      $('.sidebar .collapse').collapse('hide');
    };

    // Toggle the side navigation when window is resized below 480px
    if ($(window).width() < 480 && !$(".sidebar").hasClass("toggled")) {
      $("body").addClass("sidebar-toggled");
      $(".sidebar").addClass("toggled");
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function (e) {
    if ($(window).width() > 768) {
      var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;
      this.scrollTop += (delta < 0 ? 1 : -1) * 30;
      e.preventDefault();
    }
  });

  // Scroll to top button appear
  $(document).on('scroll', function () {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Smooth scrolling using jQuery easing
  $(document).on('click', 'a.scroll-to-top', function (e) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top)
    }, 1000, 'easeInOutExpo');
    e.preventDefault();
  });/**/

})(jQuery); // End of use strict
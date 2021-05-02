(function ($) {
  "use strict"; // Start of use strict

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
  });

})(jQuery); // End of use strict

var editor; // use a global for the submit and return data rendering in the examples

$(document).ready(function () {
  $('#myTable').DataTable();

  editor = new $.fn.dataTable.Editor({
    ajax: "../others/staff.php",
    table: "#myTable",
    fields: [{
      label: "Nombre:",
      name: "first_name"
    }, {
      label: "Apellidos:",
      name: "last_name"
    }, {
      label: "Edad:",
      name: "position"
    }, {
      label: "Teléfono:",
      name: "office"
    }, {
      label: "Email:",
      name: "extn"
    }, {
      label: "Fecha de alta:",
      name: "start_date",
      type: "datetime"
    }, {
      label: "Tarifa:",
      name: "salary"
    }
    ]
  });
  var table = $('#myTable').DataTable({
    lengthChange: false,
    ajax: "../others/staff.php",
    columns: [
      {
        data: null, render: function (data, type, row) {
          // Combine the first and last names into a single table field
          return data.first_name + ' ' + data.last_name;
        }
      },
      { data: "position" },
      { data: "office" },
      { data: "extn" },
      { data: "start_date" },
      { data: "salary", render: $.fn.dataTable.render.number(',', '.', 0, '$') }
    ],
    select: true
  });

  new $.fn.dataTable.Buttons(table, [
    { extend: "create", editor: editor },
    { extend: "edit", editor: editor },
    { extend: "remove", editor: editor }
  ]);

  table.buttons().container().appendTo($('.col-sm-6:eq(0)', table.table().container()));

});
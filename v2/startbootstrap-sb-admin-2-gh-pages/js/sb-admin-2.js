var editor; // use a global for the submit and return data rendering in the examples

$(document).ready(function () {
  $('#myTable').DataTable();

  editor = new $.fn.dataTable.Editor({
    ajax: "../staff.php",
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
    ajax: "../staff.php",
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
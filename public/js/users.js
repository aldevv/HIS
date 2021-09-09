$(document).ready(function () {
  // update specific user
  $("#editModal").on("show.bs.modal", function (event) {
    var button = $(event.relatedTarget);
    var user_id = button.data("id");
    $("#formEdit").submit((event) => {
      var $inputs = $("#formEdit :input");
      var values = {};
      $inputs.each(function () {
        if (this.name) {
          values[this.name] = $(this).val();
        }
      });

      $.ajax({
        url: `/user/${user_id}/update`,
        type: "patch",
        data: values,
        dataType: "application/json",
        complete: function() {
          $('#editModal').modal('hide')
          location.reload()
          return false
        }
      });
    });
  });
  // Activate tooltip
  $('[data-toggle="tooltip"]').tooltip();

  // Select/Deselect checkboxes
  var checkbox = $('table tbody input[type="checkbox"]');
  $("#selectAll").click(function () {
    if (this.checked) {
      checkbox.each(function () {
        this.checked = true;
      });
    } else {
      checkbox.each(function () {
        this.checked = false;
      });
    }
  });
  checkbox.click(function () {
    if (!this.checked) {
      $("#selectAll").prop("checked", false);
    }
  });

  //- delete specific or multiple users
  $('#deleteModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('id') // Extract info from data-* attributes
    $('a').click(function (event) {
      var result = $("tr:has(:checked)")
      if (result.length > 0) {
        var table = result.map(function () {
          return [$(this).children().slice(1).map(function () {
            return $(this).text().trim()
          }).get()]
        }).get()
        var users = []
        if (table[0][0] == "ID") {
          var conTable = 1
          var tableLength = table.length - 1
        }
        else {
          var conTable = 0
          var tableLength = table.length
        }
        for (var x = 0; x < tableLength; x++) {
          users[x] = table[conTable++][0]
        }
        users = JSON.stringify(users)
        $.ajax({
          url: '/user/delete-multiple-users',
          type: 'delete',
          dataType: 'application/json',
          data: {
            users
          },
          complete: function () {
            $('#deleteModal').modal('hide')
            location.reload()
            return false
          }
        });
      }
      else {
        $.ajax({
          url: '/user/' + recipient + '/delete',
          type: 'delete',
          dataType: 'application/json',
          complete: function () {
            $('#deleteModal').modal('hide')
            location.reload()
            return false
          }
        });
      }
    })
  })
});


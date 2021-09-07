$("#editUserModal").on("show.bs.modal", function (event) {
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
    });
  });
});

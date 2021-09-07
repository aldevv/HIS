console.log("sin evento");
$("#editUserModal").on("show.bs.modal", function (event) {
  console.log("primero");
  var button = $(event.relatedTarget);
  var user_id = button.data("id");
  console.log("segundo");
  $("#formEdit").submit((event) => {
    console.log("tercero");
    // var data = $("#formEdit").serialize();
    var $inputs = $("#formEdit :input");
    var values = {};
    $inputs.each(function () {
      values[this.name] = $(this).val();
    });

    $.ajax({
      url: `/user/${user_id}/update`,
      type: "patch",
      data: values,
      dataType: "application/json",
    });
  });
});

console.log("sin evento");
$("#editUserModal").on("show.bs.modal", function (event) {
  console.log("primero");
  var button = $(event.relatedTarget);
  var user_id = button.data("id");
  console.log("segundo");
  $(".btn-info").on("click", (event) => {
    console.log("tercero");
    console.log($("#formEdit").serialize());

    $.ajax({
      url: `/user/${user_id}/update`,
      type: "patch",
      data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
      },
      dataType: "application/json",
    });
  });
});

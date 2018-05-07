const stuff = [
  {
    app: "Hangman",
    image: "../images/hangman.png",
    details: "A Hangman app"
  }
];

$(document).on("click", ".app-image", () => {
  console.log($(this).data("image"));
  $("#hangmanModal").modal("show");
});

// for (let item of stuff) {
//   const newDiv = $("<div>").addClass("col-md-4 image-col");
//   const image = "<img>";
//   image.attr("src", item.image);
//   newDiv.append(image);
//   $("#image-row").append(newDiv);
// }

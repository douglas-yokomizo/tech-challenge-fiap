document.getElementById("groupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  var names = [
    document.getElementById("name1").value,
    document.getElementById("name2").value,
    document.getElementById("name3").value,
    document.getElementById("name4").value,
  ];

  var story = document.getElementById("story").value;

  var data = {
    names: names,
    message: story,
  };

  fetch("https://fsdt-contact-acf4ab9867a7.herokuapp.com/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => {
      console.error("Error:", error);
    });
});

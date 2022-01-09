console.log("This is new project - Project 2");
// Creation of element DIV

let divElem = document.createElement("div");

// Seting inner text of DIV
let val = localStorage.getItem("text");
let text;
if (val == null) {
  text = document.createTextNode(
    "This is an editable div element, click to edit text"
  );
} else {
  text = document.createTextNode(val);
}
divElem.appendChild(text);

// Setting attributes of DIV

divElem.setAttribute("id", "elem");
divElem.setAttribute(
  "style",
  "border:4px solid black; width:400px; height:150px; margin:40px; padding:30px;"
);
let container = document.querySelector(".container");
let first = document.getElementById("ok");

// Insertion of DIV element

container.insertBefore(divElem, first);

console.log(divElem, container, first);

// Giving click event to DIV element

divElem.addEventListener("click", function () {
  let noTa = document.getElementsByClassName("textarea").length;
  if (noTa == 0) {
    let html = this.innerHTML;
    divElem.innerHTML = `<textarea class="textarea form-control"  width:300px; height:100px; id="textarea" rows="3" placeholder="Write your note here"> ${html} </textarea>`;
  }

  let textArea = document.getElementById("textarea");
  textArea.addEventListener("blur", function () {
    Element.innerHTML = textArea.value;
    localStorage.setItem("text", textArea.value);
  });
});

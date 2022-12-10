// console.log(document.getElementsByTagName("li"));
// console.log(document.getElementsByClassName("card"));
// console.log(document.getElementsByName("nombre"));

// console.log(document.getElementById("menu"));
// console.log(document.querySelector("#menu"));
// console.log(document.querySelector("a"));
// console.log(document.querySelectorAll("a"));
// console.log(document.querySelectorAll("a").length);
// document.querySelectorAll("a").forEach((el)=>console.log(el));
// console.log(document.querySelectorAll(".card"));
// console.log(document.querySelectorAll(".card")[2]);

// console.log(document.documentElement.lang);
// console.log(document.documentElement.getAttribute("lang"));
// console.log(document.documentElement.querySelector(".link-dom").href);
// console.log(document.documentElement.querySelector(".link-dom").getAttribute("href"));

// document.documentElement.lang="ES-PE";
// console.log(document.documentElement.lang);
// document.documentElement.setAttribute("lang","ES-AR");

const $linkDOM = document.querySelector(".link-dom");

  // $linkDOM.setAttribute("target","_blank");
  // $linkDOM.setAttribute("rel","noopener");
  // $linkDOM.setAttribute("href","https://youtube.com");
  // console.log($linkDOM.hasAttribute("rel"));
  // $linkDOM.removeAttribute("rel")
  // console.log($linkDOM.hasAttribute("rel"));

  //Data-Atributtes
  // console.log($linkDOM.getAttribute("data-description"));
  // console.log($linkDOM.dataset);
  // console.log($linkDOM.style);
  // $linkDOM.style.padding="10px";
  // $linkDOM.style.backgroundColor="#f728a3";
  // $linkDOM.style.fontSize="1.5em";
  // console.log($linkDOM.getAttribute("style"));
  // console.log($linkDOM.style.backgroundColor);
  // console.log($linkDOM.style.color);
  // console.log(getComputedStyle($linkDOM).getPropertyValue("background-color"));

  // $linkDOM.style.setProperty("text-decoration","none")
  // $linkDOM.style.setProperty("display","block")
  // $linkDOM.style.setProperty("text-align","center")
  // $linkDOM.style.width="50%";
  // $linkDOM.style.margin="auto";
  // $linkDOM.style.padding="1rem";
  // $linkDOM.style.borderRadius=".5rem";
  // console.log($linkDOM.style);
  // console.log($linkDOM.getAttribute("style"));


  //! Variables CSS - Custom Properties CSS

  // const $html = document.documentElement,
  //       $body = document.body;

  // let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");      
  // let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");      

  // console.log(varDarkColor,varYellowColor);

  // $body.style.backgroundColor = varDarkColor;
  // $body.style.color = varYellowColor;

  // $html.style.setProperty("--dark-color","#000");
  // varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
  // $body.style.setProperty("background-color",varDarkColor);

  //!
document.addEventListener("DOMContentLoaded", () => {
  let btn_complete = document.querySelectorAll(".btn-complete");
  btn_complete.forEach( btn => {
    btn.addEventListener("click", () => {
      let parent = document.getElementById(btn.parentElement.id);
      let children = parent.children;
      console.log(children[0]);
      children[0].style.textDecoration = "line-through";
    })
  })
})
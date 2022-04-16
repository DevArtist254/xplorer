const cardPic = document.querySelectorAll(".card-full")
const body = document.querySelector("body")

cardPic.forEach((el, i) => {
  el.children[0].style.backgroundImage = `linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.3)
  ),
  url(./../images/img-${i + 1}.jpg)`

  //   el.addEventListener("mouseover", (e) => {
  //     //Then place its background on the body
  //     e.path[3].style.backgroundImage = `linear-gradient(
  //         to bottom,
  //         rgba(0, 0, 0, 0.3),
  //         rgba(0, 0, 0, 0.3)
  //       ),
  //       url(./../images/img-${i + 1}.jpg)`

  //     e.path[3].style.backgroundSize = `cover`
  //     e.path[3].style.transition = "backgroundImage 1s ease-in-out 1s"
  //   })
})

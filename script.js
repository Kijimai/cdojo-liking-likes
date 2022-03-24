//layout 1 scripts

function increaseLike() {
  const likeCountSpan = document.querySelector("#like-count").children[0].children[0]
  let likeCount = Number(
    document.querySelector("#like-count").children[0].children[0].innerText
  )
  likeCount++
  likeCountSpan.innerText = likeCount
}

//layout 1 scripts

function increaseLike() {
  const likeCountSpan =
    document.querySelector("#like-count").children[0].children[0]
  let likeCount = Number(
    document.querySelector("#like-count").children[0].children[0].innerText
  )
  likeCount++
  likeCountSpan.innerText = likeCount
}

// layout2 scripts

const user1 = {
  posterName: "Neil M",
  likeCount: 9,
  post: `I just set up this new discord bot, let me know what you all think. <a href="#">link</a>`,
  increaseLike: function (like) {
    this.likeCount = like + 1
    return generateFeed()
  },
}

const user2 = {
  posterName: "Nichole K",
  likeCount: 12,
  post: `Just finished my next comic, check it out. <a href="#">link</a>`,
  increaseLike: function (like) {
    this.likeCount = like + 1
    return generateFeed()
  },
}

const user3 = {
  posterName: "Jim R",
  likeCount: 9,
  post: `I can't stop listening to the <a href="#">new album</a>. Who else is liking it?`,
  increaseLike: function (like) {
    this.likeCount = like + 1
    return generateFeed()
  },
}

const feedArray = [user1, user2, user3]

function generateFeed() {
  let output = ""

  for (let i = 0; i < feedArray.length; i++) {
    output += `<article class="feed-item flex">
  <div class="upper flex">
    <span class="username">${feedArray[i].posterName}</span>
    <div class="like-container flex">
      <div id="like-count">
        <p><span>${feedArray[i].likeCount}</span> like(s)</p>
      </div>
      <button onclick="increaseLike(${feedArray[i].likeCount})" class="btn yellow">Like</button>
    </div>
  </div>
  <div class="lower">
    <p>
      ${feedArray[i].post}
    </p>
  </div>
</article>`
    document.getElementById("user-feed").innerHTML = output
  }
}

generateFeed()

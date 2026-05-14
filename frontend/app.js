async function loadPosts() {
  const res = await fetch("https://terrace-tube.onrender.com/api/posts");
  const posts = await res.json();

  const feed = document.getElementById("feed");

  posts.forEach(post => {
    feed.innerHTML += `
      <div class="post">
        <h2>${post.username}</h2>
        <img src="https://terrace-tube.onrender.com/${post.image}">
        <p>${post.caption}</p>
      </div>
    `;
  });
}

loadPosts();

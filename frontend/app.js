async function loadPosts() {
  const res = await fetch("http://localhost:5000/api/posts");
  const posts = await res.json();

  const feed = document.getElementById("feed");

  posts.forEach(post => {
    feed.innerHTML += `
      <div class="post">
        <h2>${post.username}</h2>
        <img src="http://localhost:5000/${post.image}">
        <p>${post.caption}</p>
      </div>
    `;
  });
}

loadPosts();

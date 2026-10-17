
    function displayPosts(posts) {
    const ul = document.getElementById("post-list");
    posts.forEach(post=> {
      const li=document.createElement("li");
      const h1=document.createElement("h1");
      h1.textContent= post.title;
      const P= document.createElement("p");
      P.textContent= post.body;
      li.appendChild(h1);
      li.appendChild(P);
      ul.appendChild(li);
    
        });
    }
     async function fetchPosts() {
     try{
     const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
     if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
     }
     const posts = await response.json();
     displayPosts(posts);
    
    } catch (error) {
     console.error("Error fetching posts:",error);
    }
}
fetchPosts();

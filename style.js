var postTitle = document.getElementById("postTitleInput");
var postDescription = document.getElementById("postDescriptionInput");
var submitButton = document.getElementById("submitButton");
var updateButton = document.getElementById("updateButton");

function fetchPosts() {
  var posts = JSON.parse(localStorage.getItem("posts"));
  var postsList = document.getElementById("postsList");

  postsList.innerHTML = "";

  for (var i = 0; i < posts.length; i++) {
    var id = posts[i].id;
    var title = posts[i].title;
    var desc = posts[i].description;


    postsList.innerHTML += '<div class="well">' +
      '<h6>Post ID: ' + id + '</h6>' +
      '<p><span class="label label-info">' + title + '</span></p>' +
      '<h3>' + desc + '</h3>' +
      '<a class="btn btn-warning" onclick="updatePost(\'' + id + '\')">Update</a> ' +
      '<a class="btn btn-danger" onclick="deletePost(\'' + id + '\')">Delete</a>' +
      '</div>';
  }
}

document.getElementById("postInputForm").addEventListener("submit", savePost);

function deletePost(id) {
  var posts = JSON.parse(localStorage.getItem("posts"));
  for (var i = 0; i < posts.length; i++) {
    if (posts[i].id == id) {
      posts.splice(i, 1);
    }
  }

  localStorage.setItem("posts", JSON.stringify(posts));
  fetchPosts();
}

function updatePost(id) {
  var posts = JSON.parse(localStorage.getItem("posts"));
  for (var i = 0; i < posts.length; i++) {
    if (posts[i].id === id) {
      postTitle.value = posts[i].title;
      postDescription.value = posts[i].description;
      submitButton.value = "Update";
    }
  }
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    posts.forEach(post => {

      if (post.id === id) {
        console.log(post)
        post.title = postTitle.value;
        post.description = postDescription.value;
      }
      document.getElementById("postInputForm").reset();
      submitButton.value = "Add";

    });

    localStorage.setItem("posts", JSON.stringify(posts));
    fetchPosts();
  });

}


function savePost(e) {
  e.preventDefault();
  var postId = chance.guid();
  var post = {
    id: postId,
    title: postTitle.value,
    description: postDescription.value
  };

  if (submitButton.value == "Add") {
    if (localStorage.getItem("posts") === null) {
      var posts = [];
      posts.push(post);
      localStorage.setItem("posts", JSON.stringify(posts));
    } else {
      var posts = JSON.parse(localStorage.getItem("posts"));
      posts.push(post);
      localStorage.setItem("posts", JSON.stringify(posts));
    }
  }
  document.getElementById("postInputForm").reset();

  fetchPosts();


}
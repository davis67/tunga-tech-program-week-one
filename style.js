let title = document.querySelector("#title");
let description = document.querySelector("#description");
let save = document.querySelector("#save");
let titlevalue = document.querySelector("#titlevalue");
let descriptionvalue = document.querySelector("#descriptionvalue");
let data = [];
let post = {
  title: "",
  description: ""
};


const getTitle = () => {
  // let customTitle;
  // title.addEventListener("change", (e) => {
  //   let titleValue = e.target.value;
  //   customTitle = titleValue
  //   titlevalue.innerHTML = `<p>Title: ${titleValue}</p>`;

  // });
  // console.log("customTitle", customTitle)
  // return customTitle;
  return title.value;

}

const getDescription = () => {
  let descriptionValue;
  // description.addEventListener("change", e => {
  //   descriptionValue = e.target.value;
  //   descriptionvalue.innerHTML = `<p>Description: ${descriptionValue}</p>`;
  // });
  return description.value;
}


const onSubmit = () => {
  let posts;
  if ((window.localStorage.getItem('posts'))) {
    posts = JSON.parse(window.localStorage.getItem('posts'));
  } else {
    posts = [];
  }
  save.addEventListener("click", (e) => {
    e.preventDefault();
    let title = getTitle();
    let description = getDescription();
    post.title = title;
    post.description = description;
    posts.push(post);
    window.localStorage.setItem("posts", JSON.stringify(posts));


  })
}

console.log(getTitle());
getDescription();
onSubmit();
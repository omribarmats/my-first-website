//Fetch HP image and title from github

const GITHUB_URL = "https://api.github.com/users/omribarmats";

const promise = fetch(GITHUB_URL);
const profileImage = document.querySelector(".profile-image");

promise
  .then(function (response) {
    const processingPromise = response.json();
    return processingPromise;
  })
  .then(function (processedResponse) {

    const img = document.createElement("img");
    img.src = processedResponse.avatar_url;
    img.alt = "Omri Barmats Image";
    profileImage.appendChild(img);

    document.getElementById("git-profile-name").innerHTML = processedResponse.login;

  });

//mouseover animation
const paddingAnimation2 = document.getElementById("fieldset");

paddingAnimation2.addEventListener('mouseover', event => {
  paddingAnimation2.classList.add("color-animation");
});


//click anumation

const paddingAnimation = document.getElementById("fieldset");

paddingAnimation.addEventListener('click', event => {
  paddingAnimation.classList.add("padding-animation");
  paddingAnimation.classList.remove("color-animation")
});




/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/EricW87')
  .then((response) => 
  {
    //console.log(response.data);
    let githubData =  createCard(response.data);
    let childElement = document.querySelector(".cards");
    childElement.appendChild(githubData);
    addFollowers(followersArray);
  })
  .catch((err) =>
  {
    console.log("Error:", err);
  });
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [  'tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];
function addFollowers(array)
{
  array.forEach( (follower) =>
  {
    axios.get(`https://api.github.com/users/${follower}`)
      .then((response) => 
      {
        //let githubData =  createCard(response.data);
        let childElement = document.querySelector(".cards");
        childElement.appendChild(new createCard(response.data));
      })
      .catch((err) =>
      {
        console.log("Error:", err);
      })

  });
}
/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/
function createCard(data)
{
  let cardDiv = document.createElement('div');
  cardDiv.classList.add('card');

  let imgElement = document.createElement('img');
  imgElement.setAttribute('src', data.avatar_url);
  cardDiv.appendChild(imgElement);

  let cardInfoDiv = document.createElement('div');
  cardInfoDiv.classList.add("card-info");
  cardDiv.appendChild(cardInfoDiv);

  let h3Element = document.createElement('h3');
  h3Element.classList.add("name");
  h3Element.textContent = data.name;
  cardInfoDiv.appendChild(h3Element);

  let usernameElement = document.createElement('p');
  usernameElement.classList.add("username");
  usernameElement.textContent = data.login;
  cardInfoDiv.appendChild(usernameElement);

  let p1Element = document.createElement('p');
  p1Element.textContent = "Location: " + data.location;
  cardInfoDiv.appendChild(p1Element);

  let p2Element = document.createElement('p');
  p2Element.textContent = "Profile: ";
  let aElement = document.createElement('a');
  aElement.setAttribute('href', data.url);
  aElement.textContent = data.url;
  p2Element.appendChild(aElement);
  cardInfoDiv.appendChild(p2Element);

  let p3Element = document.createElement('p');
  p3Element.textContent = "Followers: " + data.followers;
  cardInfoDiv.appendChild(p3Element);

  let p4Element = document.createElement('p');
  p4Element.textContent = "Following: " + data.following;
  cardInfoDiv.appendChild(p4Element);

  let p5Element = document.createElement('p');
  p5Element.textContent = "Bio: " + data.bio;
  cardInfoDiv.appendChild(p5Element);

  return cardDiv;

}



/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

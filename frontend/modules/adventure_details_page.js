import config from "../conf/index.js";

//Implementation to extract adventure ID from query params
function getAdventureIdFromURL(search) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Get the Adventure Id from the URL
  console.log("search", search);
  // Place holder for functionality to work in the Stubs
  let urlParams = new URLSearchParams(search);
  let params = urlParams.get("adventure");
  //console.log(params);
  return params;
}
//Implementation of fetch call with a paramterized input based on adventure ID
async function fetchAdventureDetails(adventureId) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Fetch the details of the adventure by making an API call
  //console.log("fetch", adventureId);
  ///adventures/detail?adventure=
  //console.log(    config.backendEndpoint + "/adventures/detail?adventure=" + adventureId  );
  try {
    var details = await fetch(
      config.backendEndpoint + "/adventures/detail?adventure=" + adventureId
    );
    var data = await details.json();
    //console.log(data);
    // Place holder for functionality to work in the Stubs
    return data;
  } catch (err) {
    return null;
  }
}

//Implementation of DOM manipulation to add adventure details to DOM
function addAdventureDetailsToDOM(adventure) {
  // TODO: MODULE_ADVENTURE_DETAILS
  /*
<div>
  <h1 id="adventure-name"></h1>
  <p style="font-size: 20px; color: #999" id="adventure-subtitle"></p>
</div>
 <div class="row mb-3" id="photo-gallery"></div>

<hr />
<h5>About the Experience</h5>
<div id="adventure-content"></div>
*/
  //console.log(adventure);
  // 1. Add the details of the adventure to the HTML DOM

  var advenName = document.getElementById("adventure-name");
  advenName.innerHTML = adventure.name;

  var advenSubtitle = document.getElementById("adventure-subtitle");
  advenSubtitle.innerHTML = adventure.subtitle;

  var photoGal = document.getElementById("photo-gallery");
  for (let i = 0; i < adventure.images.length; i++) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("src", adventure.images[i]);
    img.setAttribute("class", "activity-card-image");
    div.append(img);
    photoGal.append(div);
  }
  var advenContent = document.getElementById("adventure-content");
  var p = document.createElement("p");
  p.innerHTML = adventure.content;
  advenContent.append(p);

  // const name = adventure.name;
  // const subtitle = adventure.subtitle;
  // const images = adventure.images;
  // const content = adventure.content;

  // //Assigning h1
  // const h1 = document.getElementById('adventure-name');
  // h1.innerHTML = name;

  // //subtitle
  // const sub = document.getElementById('adventure-subtitle');
  // sub.innerHTML = subtitle;

  // //PhotoGallery
  // const imgs = document.getElementById('photo-gallery');

  // for(let i = 0; i < images.length; i++){
  //   let imgTag = document.createElement('img');
  //   imgTag.setAttribute('src', images[i]);//`${images[i]}`);
  //   imgTag.setAttribute('class', `activity-card-image`);
  //   imgs.appendChild(imgTag);

  // }
  // //Adventure Content
  // const advContent = document.getElementById("adventure-content");
  // advContent.innerHTML = content;
}

//Implementation of bootstrap gallery component
function addBootstrapPhotoGallery(images) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Add the bootstrap carousel to show the Adventure images

  /*
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  */

  document.getElementById("photo-gallery").innerHTML = `
  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators" id="carouselIndicator">
    <!--
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    -->
  </div>
  <div class="carousel-inner" id="carouselInner">
    <!--
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    -->
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  `;
  let indicator = document.getElementById("carouselIndicator");
  // <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
  // <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
  // <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  for (let i = 0; i < images.length; i++) {
    let button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("data-bs-target", "#carouselExampleIndicators");
    button.setAttribute("data-bs-slide-to", i);
    if (i == 0) {
      button.setAttribute("class", "active");
      button.setAttribute("aria-current", "true");
    }
    button.setAttribute("aria-label", "Slide " + i);
    indicator.append(button);
  }

  //=========image
  let imagediv = document.getElementById("carouselInner");

  for (let i = 0; i < images.length; i++) {
    let div = document.createElement("div");
    if (i === 0) {
      div.setAttribute("class", "carousel-item active");
    } else {
      div.setAttribute("class", "carousel-item");
    }
    let imageTag = document.createElement("img");
    imageTag.setAttribute("src", images[i]);
    imageTag.setAttribute("class", "activity-card-image"); //d-block w-100 h-100");
    div.append(imageTag);
    imagediv.append(div);
  }
}

//Implementation of conditional rendering of DOM based on availability
function conditionalRenderingOfReservationPanel(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If the adventure is already reserved, display the sold-out message.
  let soldOutPanel = document.getElementById("reservation-panel-sold-out");
  let reservationPanel = document.getElementById("reservation-panel-available");
  let costPerHeadDiv = document.getElementById("reservation-person-cost");
  if (adventure.available) {
    soldOutPanel.style.display = "none";
    reservationPanel.style.display = "block";
    costPerHeadDiv.innerHTML = adventure.costPerHead;
  } else {
    soldOutPanel.style.display = "block";
    reservationPanel.style.display = "none";
  }
}

//Implementation of reservation cost calculation based on persons
function calculateReservationCostAndUpdateDOM(adventure, persons) {
  // TODO: MODULE_RESERVATIONS
  // 1. Calculate the cost based on number of persons and update the reservation-cost field
  let reservationCost = document.getElementById("reservation-cost");
  reservationCost.innerHTML = adventure.costPerHead * persons;
}

//Implementation of reservation form submission
function captureFormSubmit(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. Capture the query details and make a POST API call using fetch() to make the reservation
  // 2. If the reservation is successful, show an alert with "Success!" and refresh the page. If the reservation fails, just show an alert with "Failed!".
  console.log("capture", adventure);
  //let name = document.getElementsByClassName("myForm ");
  const formContent = document.getElementById("myForm");
  let form = document.getElementById("myForm");
  //console.log(form);
  form.addEventListener("submit" , (event) => {
    let name = document.getElementsByTagName("input")[0].value;
    let date = document.getElementsByTagName("input")[1].value;
    let person = document.getElementsByTagName("input")[2].value;
    let postApiData = fetch(config.backendEndpoint+"/reservations/new",
     {
        method:"POST",
        headers : {
          "Content-type" : "application/json"
        },
        body : JSON.stringify( {
            "name":name,
            "date":date,
            "person":person,
            "adventure":adventure.id
        }) 
     });// fetch
     confirm("Sucess");
  })
}

//Implementation of success banner after reservation
function showBannerIfAlreadyReserved(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If user has already reserved this adventure, show the reserved-banner, else don't
  const banner_tag = document.getElementById("reserved-banner");
  if(adventure.reserved == true){
    banner_tag.setAttribute("style","display:block")
  }else{
    banner_tag.setAttribute("style","display:none");
  }

}

export {
  getAdventureIdFromURL,
  fetchAdventureDetails,
  addAdventureDetailsToDOM,
  addBootstrapPhotoGallery,
  conditionalRenderingOfReservationPanel,
  captureFormSubmit,
  calculateReservationCostAndUpdateDOM,
  showBannerIfAlreadyReserved,
};

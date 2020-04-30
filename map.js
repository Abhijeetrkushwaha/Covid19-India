let url = "https://api.rootnet.in/covid19-in/stats/latest";
let svg = document.querySelectorAll(".svg");
let h1 = document.querySelector("h1");
let confirmedNo = document.querySelector(".confirmed-no");
let recoveredNo = document.querySelector(".Recovered-no");
let deceasedNo = document.querySelector(".Deceased-no");
let stateName = document.querySelector(".state-name");
async function getData() {
  // const response = await fetch("corona.json");
  const response = await fetch(url);
  const data = await response.json();
  let regional = data.data.regional;
  
  for(var i=0;i<svg.length;i++){
      svg[i].addEventListener("click", (e) => {
        let target = e.target.classList.value;
        for (var i = 0; i < regional.length; i++) {
          if (target == regional[i].loc) {
            main1 = regional.find((item) => {
              return item.loc == target;
            });
            confirmedNo.innerHTML = main1.totalConfirmed;
            recoveredNo.innerHTML = main1.discharged;
            deceasedNo.innerHTML = main1.deaths;
            stateName.innerHTML = main1.loc;
          }
        }
        console.log();
      });
  }
}
getData();

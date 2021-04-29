// select elements
var subTypeElement = document.querySelector("#subscription");
var subDurationElement = document.querySelector("#months");
var result = document.querySelector(".result");
var subType = "basic";
var subDuration = 1;

//Create change events listeners
subTypeElement.addEventListener("change", function (e) {
  subType = e.target.value;
  //console.log(subType);
  updateSubscriptionDiv(); //Call Your Function to Update the DOM
});

subDurationElement.addEventListener("change", function (e) {
  subDuration = Number(e.target.value);
  //console.log(subDuration);
  updateSubscriptionDiv(); //Call Your Function to Update the DOM
});

//Use a Function to Calculate the Cost
var updateSubscriptionDiv = function () {
  var monthlyCost = 5; //monthly cost for basic subscription
  if (subType === "standard") {
    monthlyCost = 7;
  } else if (subType === "premium") {
    monthlyCost = 10;
  }
  var total = subDuration * monthlyCost;
  result.innerText = `You have chosen a ${subDuration} month ${subType} plan for $${total}.`;
};

//basic
var basicIncome = 1000;
var workMultiplier = 1;
var userMoney = 0;
//advertisement
var numAd = 0;
var adIncome = 1000;
var adCost = 10000;
//worker
var numWorker = 0;
var workerIncome = 10000;
var workerCost = 100000;
//machine
var numMachine = 0;
var machineIncome = 100000;
var machineCost = 1000000;
//factory
var numFactory = 0;
var factoryIncome = 1000000;
var factoryCost = 10000000;
//robofactory
var numRobofactory = 0;
var robofactoryIncome = 10000000;
var robofactoryCost = 50000000;
//beltfactory
var numBeltfactory = 0;
var beltfactoryIncome = 100000000;
var beltfactoryCost = 100000000;
//work
function work() {
 userMoney = userMoney + basicIncome *
  workMultiplier;
 document.getElementById("userMoney")
  .innerHTML = userMoney;
 if (userMoney == 5) {
  document.getElementById(
   "instructions").innerHTML = "";
 }
}
//worker and factories
//advertisement
function ad() {
 userMoney = userMoney + adIncome *
  numAd;
 document.getElementById("userMoney")
  .innerHTML = userMoney;
}

function buyAd() {
 if (userMoney < adCost) {
  alert(
   "You don't have enough subs! You have only" +
   userMoney +
   "subs! You must have" + adCost +
   "subs.");
  
  return;
 }
 numAd = numAd + 1;
 userMoney = userMoney - adCost;
 adCost = Math.round((adCost * 1.50));
 adIncome = Math.round((adIncome *
  1.10))
 document.getElementById("adCost")
  .innerHTML = adCost;
 document.getElementById("userMoney")
  .innerHTML = userMoney;
 document.getElementById("adProduction")
  .innerHTML = numAd * adIncome;
 document.getElementById("numAd")
  .innerHTML = numAd;
 totalProduction();
}
//worker
function worker() {
 userMoney = userMoney + workerIncome *
  numWorker;
 document.getElementById("userMoney")
  .innerHTML = userMoney;
}

function buyWorker() {
 if (userMoney < workerCost) {
  alert(
   "You don't have enough subs! You have only" +
   userMoney +
   "subs! You must have" +
   workerCost + "subs.");;
  
  return;
 }
 numWorker = numWorker + 1;
 userMoney = userMoney - workerCost;
 workerCost = Math.round((workerCost *
  1.25));
 document.getElementById("workerCost")
  .innerHTML = workerCost;
 document.getElementById("userMoney")
  .innerHTML = userMoney;
 document.getElementById(
   "workerProduction").innerHTML =
  numWorker * workerIncome;
 document.getElementById("numWorker")
  .innerHTML = numWorker;
 totalProduction();
}
//machine
function machine() {
 userMoney = userMoney + machineIncome *
  numMachine;
 document.getElementById("userMoney")
  .innerHTML = userMoney;
}

function buyMachine() {
 if (userMoney < machineCost) {
  alert(
   "You don't have enough subs! You have only" +
   userMoney +
   "subs! You must have" +
   machineCost + "subs.");;
  
  return;
 }
 numMachine = numMachine + 1;
 userMoney = userMoney - machineCost;
 machineCost = Math.round((machineCost *
  1.25));
 document.getElementById("machineCost")
  .innerHTML = machineCost;
 document.getElementById("userMoney")
  .innerHTML = userMoney;
 document.getElementById(
   "machineProduction").innerHTML =
  numMachine * machineIncome;
 document.getElementById("numMachine")
  .innerHTML = numMachine;
 totalProduction();
}
//factory
function factory() {
 userMoney = userMoney + factoryIncome *
  numFactory;
 document.getElementById("userMoney")
  .innerHTML = userMoney;
}

function buyFactory() {
 if (userMoney < factoryCost) {
  alert(
   "You don't have enough subs! You have only" +
   userMoney +
   "subs! You must have" +
   factoryCost + "subs.");;
  
  return;
 }
 numFactory = numFactory + 1;
 userMoney = userMoney - factoryCost;
 factoryCost = Math.round((factoryCost *
  1.25));
 document.getElementById("factoryCost")
  .innerHTML = factoryCost;
 document.getElementById("userMoney")
  .innerHTML = userMoney;
 document.getElementById(
   "factoryProduction").innerHTML =
  numFactory * factoryIncome;
 document.getElementById("numFactory")
  .innerHTML = numFactory;
 totalProduction();
}
//robofactory
function robofactory() {
 userMoney = userMoney +
  robofactoryIncome * numRobofactory;
 document.getElementById("userMoney")
  .innerHTML = userMoney;
}

function buyRobofactory() {
 if (userMoney < robofactoryCost) {
  alert(
   "You don't have enough subs! You have only" +
   userMoney +
   "subs! You must have" +
   robofactoryCost + "subs.");;
  
  return;
 }
 numRobofactory = numRobofactory + 1;
 userMoney = userMoney -
  robofactoryCost;
 robofactoryCost = Math.round((
  robofactoryCost * 1.25));
 document.getElementById(
   "robofactoryCost").innerHTML =
  robofactoryCost;
 document.getElementById("userMoney")
  .innerHTML = userMoney;
 document.getElementById(
   "robofactoryProduction").innerHTML =
  numRobofactory * robofactoryIncome;
 document.getElementById(
   "numRobofactory").innerHTML =
  numRobofactory;
 totalProduction();
}
//beltfactory
function beltfactory() {
 userMoney = userMoney +
  beltfactoryIncome * numBeltfactory;
 document.getElementById("userMoney")
  .innerHTML = userMoney;
}

function buyBeltfactory() {
 if (userMoney < beltfactoryCost) {
  alert(
   "You don't have enough subs! You have only" +
   userMoney +
   "subs! You must have" +
   beltfactoryCost + "subs.");;
  
  return;
 }
 numBeltfactory = numBeltfactory + 1;
 userMoney = userMoney -
  beltfactoryCost;
 beltfactoryCost = Math.round((
  beltfactoryCost * 1.25));
 document.getElementById(
   "beltfactoryCost").innerHTML =
  beltfactoryCost;
 document.getElementById("userMoney")
  .innerHTML = userMoney;
 document.getElementById(
   "beltfactoryProduction").innerHTML =
  numBeltfactory * beltfactoryIncome;
 document.getElementById(
   "numBeltfactory").innerHTML =
  numBeltfactory;
 totalProduction();
}
//calculate total production
function totalProduction() {
 var adProduction = parseInt(document
  .getElementById("adProduction")
  .innerHTML);
 var workerProduction = parseInt(
  document.getElementById(
   "workerProduction").innerHTML);
 var machineProduction = parseInt(
  document.getElementById(
   "machineProduction").innerHTML);
 var factoryProduction = parseInt(
  document.getElementById(
   "factoryProduction").innerHTML);
 var robofactoryProduction = parseInt(
  document.getElementById(
   "robofactoryProduction").innerHTML);
 var beltfactoryProduction = parseInt(
  document.getElementById(
   "beltfactoryProduction").innerHTML);
 document.getElementById(
   "totalProduction").innerHTML =
  adProduction + workerProduction +
  machineProduction +
  factoryProduction +
  robofactoryProduction +
  beltfactoryProduction;
}
//interval functions
window.setInterval(function() {
 ad();
 worker();
 machine();
 factory();
 robofactory();
 beltfactory();
}, 1000);

function save() {
  localStorage.setItem('userMoney', JSON.stringify(userMoney));
  localStorage.setItem('totalProduction', JSON.stringify(totalProduction));
  localStorage.setItem('numAd', JSON.stringify(numAd));
  localStorage.setItem('numWorker', JSON.stringify(numWorker));
  localStorage.setItem('numMachine', JSON.stringify(numMachine));
  localStorage.setItem('numFactory', JSON.stringify(numFactory));
  localStorage.setItem('numRobofactory', JSON.stringify(numRobofactory));
  localStorage.setItem('numBeltfactory', JSON.stringify(numBeltfactory));
}

function load() {
  userMoney = JSON.parse(localStorage.getItem('userMoney'));
  totalProduction = JSON.parse(localStorage.getItem('totalProduction'));
  numAd = JSON.parse(localStorage.getItem('numAd'))
  numWorker = JSON.parse(localStorage.getItem('numWorker'))
  numMachine = JSON.parse(localStorage.getItem('numMachine'))
  numFactory = JSON.parse(localStorage.getItem('numFactory'))
  numRobofactory = JSON.parse(localStorage.getItem('numRobofactory'))
  numBeltfactory = JSON.parse(localStorage.getItem('numBeltfactory'))
}
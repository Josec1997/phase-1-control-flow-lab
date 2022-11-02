
function scuberGreetingForFeet(distanceOfRide){
 const freeSample = 'This one is on me!'

  if(distanceOfRide <= 400) {
  return freeSample
}
    else if (distanceOfRide>400 && distanceOfRide <2000){
return "That will be twenty bucks." }
      else if (distanceOfRide>2000 && distanceOfRide <= 2500){
        return "I will gladly take your thirty bucks."
      } 
      else {
        return "No can do."
      }
    }
  
function ternaryCheckCity(city){
return city === 'NYC' ? "Ok, sounds good." : 'No go.' 

}

function switchOnCharmFromTip(tip){
switch (tip) {
  case 'generous': return 'Thank you so much.'
    break;
case 'not as generous': return 'Thank you.'
  break
    default: return 'Bye.'
}
}
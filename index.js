function scuberGreetingForFeet(feetDistance){
  if (feetDistance <= 400){
    return ('This one is on me!')
  } else if(feetDistance >400 && feetDistance <= 2000){
      return ('That will be twenty bucks.')
  } 
    else if(feetDistance >2000 && feetDistance <= 2500){
      return ('I will gladly take your thirty bucks.')
  }
    else if(feetDistance >2500){
      return ('No can do.')
  }
}

function ternaryCheckCity(cityName){
  if (cityName === 'NYC'){
    return ('Ok, sounds good.')
  } else{
    return ('No go.')
  }
  
}

function switchOnCharmFromTip(tip){
  if(tip === 'generous'){
    return ("Thank you so much.")
  }
  else if(tip === 'not as generous'){
    return ('Thank you.')
  } else{
    return ('Bye.')
  }
}

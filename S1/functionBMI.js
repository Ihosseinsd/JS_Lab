function bmi (weight,height){
    const devided = (weight/height**2);
    if(devided > 25.0){
        return "you are over weight :("
    }
    if(devided >= 18.5 && devided <= 24.9){
        return "you are normal :)"
    }
    if(devided < 18.5){
        return "you are under weight :/"
    }
}
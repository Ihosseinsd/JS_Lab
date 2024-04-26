function animals (arr){
    let a = 0
    if(arr[arr.length-1]=="wolf"){
        console.log("Pls go away and stop eating my sheep");
}   else{
        for (i=0; i < arr.length;i++){
        if(arr[i]=="wolf"){
            a = arr.indexOf('wolf')+1
        }
    }
    return ("oi sheep" + a + " " + "You are about to be eaten by a wolf!")}
}

function scores (arr){
let a = 0
for(i=0;i<arr.length;i++){
    if(arr[i][0]>arr[i][2]){
        a+=3
    }
    if(arr[i][0]==arr[i][2]){
        a+=1
    }
}
return a}
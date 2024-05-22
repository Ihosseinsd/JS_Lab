
a = [1,2,3,4,5]
b = [3,4,5,6,7]
c = []
d = []
// function handleEshterak
const strArr = a.map(function(item){return item.toString()});
const strArr2 = b.map(function(item){return item.toString()});
for(i=0;i<a.length;i++){
    if(strArr.includes(strArr2[i])){
        c.push(strArr2[i])
    }
}



// function handleEjtema
c = a.concat(b)
c.sort()
for(i=0;i<c.length;i=+2){
    if(c[i]!=c[i+1]){
        d.push(c[i],c[i+1]);
    }else d.push(c[i]);
}






// function handleNoone(){

const newArr = a.map(function(item){return item.toString()});
const newArr2 = b.map(function(item){return item.toString()});
for(i=0;i<a.length;i++){
    if(!newArr2.includes(newArr[i])){
        c.push(newArr[i])
    }
}

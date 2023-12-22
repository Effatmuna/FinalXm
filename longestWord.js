function LongestWord(sen) {
    var arr3=[];
    var arr=[];
    var arr2=[];
    var count=0;
  var bool=true;

  for(let i=0;i<sen.length;i++){
      var spt=sen[i].split('');
   
for (let j = 0; j < spt.length; j++) {
 if((spt[j].charCodeAt(j)>=97 && spt[j].charCodeAt(j)<=122) || (spt[j].charCodeAt(j)>=65 && spt[j].charCodeAt(j)<=90) ){
     arr.push(sen[i].length);
     arr2.push(sen[i]);
     }
    }
             
}
for(let i=0;i<arr.length;i++){
    
    var max=arr[0];
    var maxstr=arr2[0];
    if(max<arr[i] ){
        max=arr[i];
    }
    if(maxstr.length<arr2[i].length ){
        maxstr=arr2[i];
    }
    else if(maxstr.length==arr2[i].length){
        maxstr=arr2[i];
        }
    else if(max==arr[i]){
        max=arr[i];
        }
        
        
    }
     
   return (maxstr + " "+ max);
}

const str=prompt('Enter a string: ');
const splt=str.split(" ");
console.log(LongestWord(splt));
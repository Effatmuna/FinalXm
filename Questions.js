function QuestionsMarks(str){
    var arr=[];
    var arr2=[];
    var bool=true;
    var splt=str.split('');
    var count=0;
   splt.forEach(element=>{
         if(element=='?'){
             
             arr.push(element);
             }else{
                 arr.push(Number(element));
                 
                 }        
   })
   for(let i=0;i<arr.length;i++){
       if((arr[i]>=0 && arr[i]<=9) && (arr[i+1]=='?' && arr[i+2]=='?' && arr[i+3]=='?') && (arr[i+4]>=0 && arr[i+4]<=9) && (arr[i]+arr[i+4])==10){
            arr2.push(arr[i+4],arr[i]); 
           }
       
       }
  if(arr2.length!=0){
      bool;
      
      }else{
          bool=false;
          
          }
          return bool;
  
  
  }
  
  const str=prompt("Enter a string: ");
  console.log(QuestionsMarks(str));
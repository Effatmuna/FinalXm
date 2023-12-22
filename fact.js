
        var fact=1;
        function FirstFactorial(num){
            for(let i=2;i<=num;i++){
                fact=fact*i;
            }
            return fact;
        }
     const num=Number(prompt("Enter a number: "));
     console.log(FirstFactorial(num));

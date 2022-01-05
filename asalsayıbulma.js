let findPrime = function(...dizi){
    for (let i = 0; i < dizi.length; i++) {
         let j=dizi[i]-1
        

         for (;  1 < j; j--) {
             if(dizi[i]%j==0){
                 console.log(dizi[i]+"asal değil")
                 
                 j=0
             }
             
             
         }
         
         if(j==1){console.log(dizi[i]+"asal sayı")}
        
         

    }
}

findPrime(2,33,22,61,80)
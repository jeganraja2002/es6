
                //amstrong..........................................................

{
                    var x=parseInt((prompt("")))
                    var y=x
                    var z=y
                    var sum=0
                    var count=0

                    function amstrong() {
                        
                            while (x!=0) {
                                let rem=x%10;
                                x=(x-rem)/10
                                count++  
                            }
                            
                            while (y!=0) {
                                let rem=y%10;
                                y=(y-rem)/10
                                sum+=rem**count 
                            }
                            console.log(sum);


                        return new Promise((resolve, reject) => {
                            
                                if (z==sum) {
                                    resolve(sum)
                                } 
                                else {
                                    reject(sum)                
                                }
                          
                            
                        })
                              
                    }

                    amstrong().then((jegan)=>{
                                console.log(`${jegan} This Number Amstrong`)
                                })
                            
                                .catch((raja)=>{
                                console.log(`${raja} This Number not Amstrong`)
                                })


}


{

                                var n=parseInt(prompt("pallindrome"))
                                function check(){

                                  return new Promise((resolve, rejected) => {
                                    let sum=0;
                                    let m=n
                                    while(n!=0){
                                  let rem= n % 10;
                                        n= (n-rem)/10;
                                      sum=(sum*10)+rem
                                }
                                if(sum===m){
                                  resolve(m)
                                }
                                else{
                                  rejected(m)
                                }
                                  })
                                }

                                check().then((x)=>{
                                  console.log(`${x} is Palindrome Number`)
                                })

                                .catch((y)=>{
                                  console.log(`${y} is Not a Palindrome Number`)
                                })

}
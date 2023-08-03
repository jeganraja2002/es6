    let c=new Promise((resolve, reject) => {
          resolve("success")
          reject("fail")  
        })
        c.then(console.log)
        .catch(console.log)



        function one() {
            return new Promise((a, b) => {
                setTimeout(() => {
                    a("1")
                },5000);
            })
        }


        function two(x) {
            return new Promise((c, d) => {
                setTimeout(() => {
                    c("2",x)
                },1000);
            })
        }


        function three(y) {
            return new Promise((e, f) => {
                setTimeout(() => {
                    e("3",y)
                },1000);
            })
        }

        one().then((x)=>{
                console.log(x)
            return two(x).then((y)=>{
                console.log(y)
            return three(y).then(console.log)  
            })
        })

        .catch(console.log)
        


let a=4
let b=""

for (i = 0; i<a ;i++) {
    
    for (j= 0; j<i ;j++) {
        b+=" * "
        console.log(b)
    }
        // b="\n"
}

        
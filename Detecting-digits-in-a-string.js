function func3(ch){
            var a= ch.split('')
            var x= 0
            for(let i=0;i<a.length;i++){
                if(a[i]>=0 && a[i]<=9){
                    x=x+1
                }
            }
            if (x==0){
                document.write(false);
            }
            else{
                document.write(true);
            }
        }
        ch="mariem"
        func3(ch)

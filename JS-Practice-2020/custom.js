
var obj = {
    count : 10,
    doSomethingLater : function (){
        setTimeout(() => { 
            this.count++;
            console.log(this.count);
        }, 300);
    }
}

obj.doSomethingLater();
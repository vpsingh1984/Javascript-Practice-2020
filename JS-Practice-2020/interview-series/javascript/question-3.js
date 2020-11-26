
// What will be the output of below function?
// Company : Anonymous

var obj = {
    count : 10,
    doSomethingLater : function (){
        setTimeout(function(){ // the function executes on the window scope
            this.count++;
            console.log(this.count);
        }, 300);
    }
}

obj.doSomethingLater();
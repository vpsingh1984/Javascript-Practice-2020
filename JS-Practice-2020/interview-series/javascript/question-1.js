
// Q-1 : what all console will print?
// Company : Anonymous

var user = {
    name: "Vijay",
    logName: function() {
      console.log(this.name);

      const changeName = function(newName) {
        this.name = newName;
        console.log(this.name)
      };
      changeName("Mike");

      console.log(this.name)
    }
}
user.logName();
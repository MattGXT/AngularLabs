class User{
    constructor(username, birthdate, age, email, password, valid){
        this.username = username;
        this.birthdate = birthdate;
        this.age = age;
        this.email = email;
        this.password = password;
        this.valid = valid;
    }

    check = function(email,password){
        const a = new User('Matt1','1995','24','1@gmail.com','123',true);
        const b = new User('Matt2','1996','23','2@gmail.com','123',true);
        const c = new User('Matt3','1997','22','3@gmail.com','123',true);
        var array = [a,b,c];
        var result = new Object();
        result.valid = false;
        for(let i = 0; i<array.length;i++){
            if(email == array[i].email && password == array[i].password){
                result.username = array[i].username;
                result.birthdate = array[i].birthdate;
                result.age = array[i].age;
                result.email = array[i].email;
                result.valid = array[i].valid;
            }
        }
        return result;
    }
}

module.exports = User;
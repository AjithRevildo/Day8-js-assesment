class person{
    constructor(firstname,lastname,email,phoneno,state,country){
        this.firstname=firstname;
        this.lastname=lastname;
        this.email=email;
        this.phoneno=phoneno;
        this.state=state;
        this.country=country;
        this.output=function(){
            console.log(
                `Firstname: ${this.firstname}
                 Lastname: ${this.lastname}
                 E-mail: ${this.email}
                 Phoneno:${this.phoneno}
                 State:${this.state}
                 Country:${this.country}`
                
            );

        }
    }
}
var person1=new person("Ajith","Revildo","ajithrevildo1999@gmail.com",0101010101,"Tamilnadu","India");
var person2=new person("Kavitha","Revildo","kavirevi0804@gmail.com",0202020202,"Tamilnadu","India");
person1.output();
person2.output();
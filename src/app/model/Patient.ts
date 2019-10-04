export class Patient{
    id: string; 
    name: string; 
    lastName: string; 
    tel: string; 
    address: string; 
    job: string; 
    constructor(id:string,name:string, lastName: string,
                 tel: string, address: string, job: string){
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.tel = tel;
    this.address = address;
    this.job = job;
    }
}
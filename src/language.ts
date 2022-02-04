class Language {
    public Id : number;
    public Name : string;
    public Rating : number;

    constructor(id : number, name : string, rating : number){
        this.Id = id;
        this.Name = name;
        this.Rating = rating;
    }
}
module.exports = { Language }

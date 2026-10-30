class Card{
    constructor(value,suit){
        this.value=value;
        this.suit=suit;
        this.img= this.value+this.suit+".jpg";
    }
    getImages(){
        return `<img width="100px" src="images/${this.img}">`;
        
    }
    getValue(){
        if(this.value=="A"){
            return 1;
        }
        return +this.value;
    }
}
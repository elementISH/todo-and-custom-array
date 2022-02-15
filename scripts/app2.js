class CArray{
    constructor(){
        this.size = 0;
        this.items = "items:\n";
        // this.arr = Array.prototype.push.call(this, "")
    }

    add(elements){
        if(!elements) return console.log("specify a word or multiple");
        // Array.prototype.push.call(this.arr, elements)
        console.log(`added ${elements}`)
        if(Array.isArray(elements)){
            elements.forEach(element => {
                this.size++;
                this.items += "- " + element + "\n";
            });
        }else{
            this.size++;
            this.items += "- " + elements + "\n";
        }
    }

    clear(){
        this.size = 0;
        this.items = "items:\n";
    }
    
    list(){
        console.log(this.items)
    }

    search(word){
        if(!word) return console.log("specify a word");
        let i = this.items.replace("items: ", "").search(word) 
        if(i >= 0){
            console.warn("word found at position: " + i)
        }else{
            console.error("word not found")
        }
    }

    remove(word){
        if(!word) return console.log("specify a word");
        let i = this.items.search(word); 
        this.items = this.items.replace("- " + word + "\n", "")
        let j = this.items.search(word); 
        
        if(i >= 0){
            console.warn("word found at position: " + i + " and removed")
            this.size--;
        }else if(j < 0){
            console.error("error: couldn't remove word (probably doesn't exist)")
        }
    }
}

let customArray = new CArray();

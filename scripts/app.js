class ToDo{
    constructor(){
        this.id = 1;
        this.notes = [];
        this.isDone = [];
    }

    checkId(id){
        let n = this.notes.length;
        if(id > n || id <= 0) return true;
    }
    
    updateIds(){
        this.id = 1;
        for (let i = 0; i < this.notes.length; i++) {
            this.notes[i] = this.id + "- "+ this.notes[i].substring(3);
            this.id++;
        }
    }
    editToDo(id, newNote){
        if(this.checkId(id)) return console.warn("invalid id");
        this.notes[id-1] = id + "- "+ newNote;
        this.isDone.splice(id-1, 1);
    }

    addToDo(note){
        this.notes.push(this.id + "- " + note);
        this.id++;        
    }

    deleteToDo(id){
        if(this.checkId(id)) return console.warn("invalid id");
        this.notes.splice(id-1, 1);
        this.updateIds();
    }

    setDone(id){
        for (let i = 0; i < this.isDone.length; i++) {
            if(id == this.isDone[i]){
                return console.warn("note is already set as done");
            }
        }
        if(this.checkId(id)) return console.warn("invalid id");
        this.notes[id-1] = this.notes[id-1] + " ✔️";
        this.isDone.push(id)
    }

    listToDo(){
        for (let i = 0; i < this.notes.length; i++) {
            console.log(this.notes[i] + "\n")
        }
    }
}
let todo = new ToDo(); 
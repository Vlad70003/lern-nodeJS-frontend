import {makeAutoObservable} from "mobx";

class List {

    data = null;
    constructor() {
        makeAutoObservable(this)
    }

    setList(data) {
        this.data = data;
        console.log(this.data)
    }

    getList() {
        return this.data;
    }
}

export default new List();
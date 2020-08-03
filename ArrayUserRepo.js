
export default class ArrayUserRepo extends UserRepo {

    constructor () {
        super();
        this.usersArr = [];
    }

    async create(obj) {
        this.usersArr.push(obj);
    }

    async read(ID) {
        let user = this.usersArr.find(item => item.id == ID);
        console.log(user);
        return user;
    }

    async update(ID, prop, value) {
        let user = this.read(ID);
        user[prop] = value;
    }

    async delete(ID) {
        let user = this.read(ID);
        let index = this.usersArr.indexOf(user);
        this.usersArr.splice(index, 1);
    }
}




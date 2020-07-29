
class UserRepo {

    constructor () {
        this.userArr = [];
    }

    create(obj) {
        this.usersArr.push(obj);
    }

    read(ID) {
        let user = this.usersArr.find(item => item.id == ID);
        return user;
    }

    update(ID, prop, value) {
        let user = this.read(ID);
        user[prop] = value;
    }

    delete(ID) {
        let user = this.read(ID);
        index = this.userArr.findIndex(user);
        this.userArr.splice(index, 1);
    }

}
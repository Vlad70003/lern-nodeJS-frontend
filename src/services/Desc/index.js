export class DescServices {
    getList () {
        return fetch(`http://localhost:5000/desc/getList`, {
            method: "GET",
            headers: {"Content-Type": "application/json; charset=utf-8", "Authorization": `Bearer ${localStorage.getItem('token')}`},
        })
    }

    addToList (values) {
        return fetch(`http://localhost:5000/desc/addToList`, {
            method: "POST",
            headers: {"Content-Type": "application/json; charset=utf-8", "Authorization": `Bearer ${localStorage.getItem('token')}`},
            body: JSON.stringify(values),
        })
    }
    delete (id) {
        return fetch(`http://localhost:5000/desc/delete/${id}`, {
            method: "DELETE",
            headers: {"Content-Type": "application/json; charset=utf-8", "Authorization": `Bearer ${localStorage.getItem('token')}`},
        })
    }


}

export const descServices = new DescServices();
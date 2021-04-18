export default class RestoService {
    _apiBase = `http://localhost:3000`;

    async getResourse(url){
        const request = await fetch(`${this._apiBase}${url}`)

        if (!request.ok) {
            throw new Error(`I cant fetch. Status: ${request.status}`)
        }

        return await request.json();
    }

    async getMenuItems(){
        return await this.getResourse(`/menu/`)
    }
    async getMenuItem(id){
        return await this.getResourse(`/menu/${id}`)
    }
}
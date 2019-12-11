import {server} from './index'

class RandomService {
    static getRandom(payload){
        const {category} = payload
        return server.get(`/random?category=${category}`)
    }

    static getCategories(){
        return server.get('/categories')
    }
}

export default RandomService;
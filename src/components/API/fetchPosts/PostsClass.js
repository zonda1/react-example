import axios from 'axios';

class PostsClass {
    static async getAll(limit,page) {
        const res=await axios.get('https://jsonplaceholder.typicode.com/posts',{
            params:{
                _limit:limit,
                _page:page
            }
        });
        return res;
    }
}

export default PostsClass;
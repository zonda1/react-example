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
    static async getPostById(id) {
        const res=await axios.get('https://jsonplaceholder.typicode.com/posts/'+id);
        return res;
    }
    static async getCommentsById(id) {
        const res=await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
        return res;
    }
}

export default PostsClass;
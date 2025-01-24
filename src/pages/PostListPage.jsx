import { useState, useEffect } from 'react'
import axios from 'axios';

const baseApiUrl = 'http://localhost:3000';

const PostList = () => {

    const [post, setPost] = useState(null)

    const fetchPost = () => {
        axios.get(`${baseApiUrl}/posts`)
            .then(res => {
                setPost(res.data)
            })
            .catch(error => {
                console.error('Errore:', error)
            })
    }

    useEffect(() => {
        fetchPost()
    }, [])

    return (
        <div>
            <ul className="list-group my-5 mx-auto col-6">
                {post?.map(item => (
                    <li key={item.id} className="list-group-item">{item.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default PostList
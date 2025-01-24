import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const baseApiUrl = 'http://localhost:3000';



const PostDeatailsPage = () => {

    const { id } = useParams();
    const [post, setPost] = useState(null)

    const fetchPost = () => {
        axios.get(`${baseApiUrl}/posts/${id}`)
            .then(res => {
                setPost(res.data)
            })
    }

    useEffect(() => {
        fetchPost()
    }, [])

    return (
        <div>
            <div className="card col-6 mx-auto my-5">
                <div className="card-body">
                    <h5 className="card-title">{post?.title}</h5>
                    <img src={post?.image} className="card-img-top" alt={post?.title}></img>
                    <p className="card-text">{post?.content}</p>
                    <div className='mt-2'>
                        <h6>Tags:</h6>
                        <p>{post?.tags.join(', ')}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostDeatailsPage
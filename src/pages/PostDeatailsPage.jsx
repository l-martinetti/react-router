import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';

const baseApiUrl = 'http://localhost:3000';



const PostDeatailsPage = () => {

    const navigate = useNavigate()
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

    const handlePrev = () => {
        axios.get(`${baseApiUrl}/posts/${post.id - 1}`)
            .then(res => {
                navigate(`/lista-post/${post.id - 1}`);
                setPost(res.data)
            })
            .catch(error => {
                console.error('Errore :', error);
            })
    }

    const handleNext = () => {
        axios.get(`${baseApiUrl}/posts/${post.id + 1}`)
            .then(res => {
                navigate(`/lista-post/${post.id + 1}`);
                setPost(res.data)
            })
            .catch(error => {
                console.error('Errore :', error);
            })
    }

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
            <div className='mx-auto d-flex justify-content-center mb-4'>
                <button
                    className='btn btn-light me-2'
                    onClick={handlePrev}
                >Prev
                </button>
                <button
                    className='btn btn-light ms-2'
                    onClick={handleNext}
                >Next
                </button>
            </div>
        </div>
    )
}

export default PostDeatailsPage
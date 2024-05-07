// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Dashboard() {
//     const [images, setImages] = useState([]);
//     const [file, setFile] = useState(null);

//     useEffect(() => {
//         fetchImages();
//     }, []);

//     const fetchImages = async () => {
//         const { data } = await axios.get('http://localhost:5001/api/user/getImages');
//         setImages(data);
//     };

//     const handleFileChange = (e) => {
//         setFile(e.target.files[0]);
//     };

//     const handleUpload = async () => {
//         const formData = new FormData();
//         formData.append('file', file);
//         formData.append('patientId', '661f1c830c9e0aaacf0b5bce');

//         try {
//             await axios.post('http://localhost:5001/api/user/upload', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data'
//                 }
//             });
//             fetchImages(); // Refresh the list after upload
//         } catch (error) {
//             console.error('Error uploading the image:', error.response);
//         }
//     };

//     const handleCommentSubmit = async (imageId, comment) => {
//         try {
//             await axios.post(`http://localhost:5001/api/user/images/${imageId}/comments`, { text: comment, userId: '661f1c830c9e0aaacf0b5bce'});
//             fetchImages(); // Refresh the comments
//         } catch (error) {
//             console.error('Error posting comment:', error.response);
//         }
//     };

//     return (
//         <div>
//             <h1>Dashboard</h1>
//             <input type="file" onChange={handleFileChange} id="image" name='image' />
//             <button onClick={handleUpload}>Upload Image</button>

//             {images.map((image) => (
//                 <div key={image._id}>
//                     <img src={image.base64Image} alt="Uploaded B64" />
//                     {image.comments.map((comment) => (
//                         <p key={comment._id}>{comment.body}</p>
//                     ))}
//                     <CommentForm imageId={image._id} onCommentSubmit={handleCommentSubmit} />
//                 </div>
//             ))}
//         </div>
//     );
// }

// function CommentForm({ imageId, onCommentSubmit }) {
//     const [comment, setComment] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         onCommentSubmit(imageId, comment);
//         setComment('');
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} />
//             <button type="submit">Add Comment</button>
//         </form>
//     );
// }

// export default Dashboard;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Dashboard() {
//     const [images, setImages] = useState([]);
//     const [file, setFile] = useState(null);
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState('');

//     useEffect(() => {
//         fetchImages();
//     }, []);

//     const fetchImages = async () => {
//         setIsLoading(true);
//         try {
//             const { data } = await axios.get('http://localhost:5001/api/user/getImages');
//             setImages(data);
//             setError('');
//         } catch (error) {
//             setError('Failed to fetch images');
//             console.error('Fetch images error:', error.response);
//         }
//         setIsLoading(false);
//     };

//     const handleFileChange = (e) => {
//         setFile(e.target.files[0]);
//     };

//     const handleUpload = async () => {
//         const formData = new FormData();
//         formData.append('file', file);
//         formData.append('patientId', '661f1c830c9e0aaacf0b5bce');

//         setIsLoading(true);
//         try {
//             await axios.post('http://localhost:5001/api/user/upload', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data'
//                 }
//             });
//             // await axios.post('http://localhost:5000/', formData, {
//             //     headers: {
//             //         'Content-Type': 'multipart/form-data'
//             //     }
//             // });
//             formData.append('image', file);
        
//             fetch('http://127.0.0.1:5000/predict', {  // Ensure this URL matches your Flask server's URL
//                 method: 'POST',
//                 body: formData  // Sending the image as FormData
//             })
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok: ' + response.statusText);
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 if (data.error) {
//                     throw new Error('Error from server: ' + data.error);
//                 }
//                 console.log('Prediction: ' + data.prediction);
//             })
//             .catch((error) => {
//                 console.error('Error:', error);
//                 console.log('Error: Could not retrieve prediction. ' + error.message);
//             });
//             fetchImages();
//             setError('');
//         } catch (error) {
//             setError('Error uploading the image');
//             console.error('Upload image error:', error.response);
//         }
//         setIsLoading(false);
//     };

//     const handleCommentSubmit = async (imageId, comment) => {
//         setIsLoading(true);
//         try {
//             await axios.post(`http://localhost:5001/api/user/images/${imageId}/comments`, { text: comment, userId: '661f1c830c9e0aaacf0b5bce'});
//             fetchImages();
//             setError('');
//         } catch (error) {
//             setError('Error posting comment');
//             console.error('Post comment error:', error.response);
//         }
//         setIsLoading(false);
//     };

//     if (isLoading) return <p>Loading...</p>;
//     if (error) return <p>{error}</p>;

//     return (
//         <div style={{ margin: '20px' }}>
//             <h1 style={{ textAlign: 'center' }}>Dashboard</h1>
//             <input type="file" onChange={handleFileChange} id="image" name='image' />
//             <button onClick={handleUpload} style={{ margin: '10px' }}>Upload Image</button>

//             {images.map((image) => (
//                 <div key={image._id} style={{ border: '1px solid #ccc', padding: '20px', marginBottom: '10px' }}>
//                     <img src={image.base64Image} alt="Uploaded" style={{ maxWidth: '100%', marginBottom: '10px' }} />
//                     <div>
//                         <h3>Comments</h3>
//                         {image.comments.map((comment) => (
//                             <p key={comment._id} style={{ backgroundColor: '#f8f8f8', padding: '8px', borderRadius: '5px', margin: '5px 0' }}>
//                                 {comment.body}
//                             </p>
//                         ))}
//                         <CommentForm imageId={image._id} onCommentSubmit={handleCommentSubmit} />
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// }

// function CommentForm({ imageId, onCommentSubmit }) {
//     const [comment, setComment] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         onCommentSubmit(imageId, comment);
//         setComment('');
//     };

//     return (
//         <form onSubmit={handleSubmit} style={{ display: 'flex', marginTop: '10px' }}>
//             <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Add a comment..." style={{ flexGrow: 1, marginRight: '5px' }} />
//             <button type="submit">Post</button>
//         </form>
//     );
// }

// export default Dashboard;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../Layout/Layout';
import './Dashboard.css';

function Dashboard() {
    const [images, setImages] = useState([]);
    const [file, setFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState('');

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = async () => {
        setIsLoading(true);
        try {
            const { data } = await axios.get('http://localhost:5001/api/user/getImages');
            setImages(data);
            // setError('');
        } catch (error) {
            // setError('Failed to fetch images');
            console.error('Fetch images error:', error.response);
        }
        setIsLoading(false);
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('patientId', '661f1c830c9e0aaacf0b5bce');

        // setIsLoading(true);
        try {
            await axios.post('http://localhost:5001/api/user/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            formData.append('image', file);
        
            fetch('http://127.0.0.1:5000/predict', {  // Ensure this URL matches your Flask server's URL
                method: 'POST',
                body: formData  // Sending the image as FormData
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok: ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                if (data.error) {
                    throw new Error('Error from server: ' + data.error);
                }
                // console.log('Prediction: ' + data.prediction);
                // alert(`Predicted: ${data.prediction}`);

            })
            .catch((error) => {
                console.error('Error:', error);
                console.log('Error: Could not retrieve prediction. ' + error.message);
            });
            fetchImages();
            // setError('');
        } catch (error) {
            // setError('Error uploading the image');
            console.error('Upload image error:', error.response);
        }
        // setIsLoading(false);
    };

    const handleAnalyze = async (image) => {
        if (!image.base64Image) {
            alert('Please select a file and convert it to base64 first!');
            return;
        }

        try {
            const response = await fetch('http://127.0.0.1:5000/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ image: image.base64Image }),
            });

            const result = await response.json();
            // console.log(result);
            alert(`Predicted: ${result.prediction}`);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleCommentSubmit = async (imageId, comment) => {
        // setIsLoading(true);
        try {
            await axios.post(`http://localhost:5001/api/user/images/${imageId}/comments`, { text: comment, userId: '661f1c830c9e0aaacf0b5bce'});
            fetchImages();
            // setError('');
        } catch (error) {
            // setError('Error posting comment');
            console.error('Post comment error:', error.response);
        }
        // setIsLoading(false);
    };

    // if (isLoading) return <p>Loading...</p>;
    // if (error) return <p>{error}</p>;

    return (
        <Layout>
        <div className="lay">
            <h1 className='dashboard' style={{ textAlign: 'center' }}>Dashboard</h1>
            <input type="file" onChange={handleFileChange} id="image" name='image' className="input-file" />
            <button onClick={handleUpload} className="btn-upload">Upload Image</button>
            {isLoading && <p>Loading...</p>}
            {images.map((image) => (
                <div key={image._id} className="card">
                    <img src={image.base64Image} alt="Uploaded" className="img-responsive" />
                    <button onClick={() => handleAnalyze(image)} className="analyze" style={{ margin: '10px' }}>Analyze Image</button>
                    <div className="comments-section">
                        <h3>Comments</h3>
                        {image.comments.map((comment) => (
                            <p key={comment._id} className="comment">
                                {comment.body}
                            </p>
                        ))}
                        <CommentForm imageId={image._id} onCommentSubmit={handleCommentSubmit} />
                    </div>
                </div>
            ))}
        </div>
        </Layout>
    );
}

function CommentForm({ imageId, onCommentSubmit }) {
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onCommentSubmit(imageId, comment);
        setComment('');
    };

    return (
        <div>
        <form className='comment' onSubmit={handleSubmit} style={{ display: 'flex', marginTop: '10px'}}>
            <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Add a comment..." style={{ flexGrow: 1, marginRight: '5px',maxLength:'100' }} />
            <button type="submit">Post</button>
        </form>
        </div>
    );
}

export default Dashboard;
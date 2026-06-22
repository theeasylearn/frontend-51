import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

function APIDemo() {
    const [posts, setPosts] = useState([]);
    const [userid, setUserid] = useState('');
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    useEffect(() => {
        if (posts.length === 0) {
            fetch("https://jsonplaceholder.typicode.com/posts")
                .then((res) => res.json())
                .then((data) => setPosts(data))
                .catch((err) => console.error(err));
        }
    }, []); // Added dependency array

    const deletePost = (postid) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postid}`, {
            method: 'DELETE'
        })
            .then((response) => {
                if (response.status === 200) {
                    setPosts(posts.filter((item) => item.id !== postid));
                }
            })
            .catch((err) => console.error(err));
    };

    const insertPost = (event) => {
        event.preventDefault();

        const newPost = {
            userId: Number(userid),     // ← Fixed: userId (correct key)
            id: Number(id),
            title: title,
            body: body,
        };

        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: 'POST',
            body: JSON.stringify(newPost),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Post created successfully:", data);
                // Add new post at the beginning
                setPosts([data, ...posts]);
            })
            .catch((error) => console.error(error));

        // Clear form
        setUserid('');
        setId('');
        setTitle('');
        setBody('');
    };

    return (
        <>
            <div className='container-fluid bg-light p-3 shadow'>
                <div className="row">
                    <div className="col-12">
                        <form 
                            className="d-flex flex-wrap align-items-end gap-3" 
                            onSubmit={insertPost}
                        >
                            <div className="flex-grow-1" style={{ minWidth: "140px" }}>
                                <label htmlFor="userid" className="form-label mb-1">User ID</label>
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    id="userid" 
                                    placeholder="User ID" 
                                    required
                                    value={userid} 
                                    onChange={(e) => setUserid(e.target.value)} 
                                />
                            </div>

                            <div className="flex-grow-1" style={{ minWidth: "120px" }}>
                                <label htmlFor="id" className="form-label mb-1">ID</label>
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    id="id" 
                                    placeholder="ID" 
                                    required
                                    value={id} 
                                    onChange={(e) => setId(e.target.value)} 
                                />
                            </div>

                            <div className="flex-grow-1" style={{ minWidth: "200px" }}>
                                <label htmlFor="title" className="form-label mb-1">Title</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="title" 
                                    placeholder="Enter title" 
                                    required
                                    value={title} 
                                    onChange={(e) => setTitle(e.target.value)} 
                                />
                            </div>

                            <div className="flex-grow-1" style={{ minWidth: "250px" }}>
                                <label htmlFor="body" className="form-label mb-1">Body</label>
                                <textarea 
                                    className="form-control" 
                                    id="body" 
                                    rows={2} 
                                    placeholder="Enter body content..." 
                                    required
                                    value={body}
                                    onChange={(e) => setBody(e.target.value)}
                                />
                            </div>

                            <div>
                                <button type="submit" className="btn btn-primary px-4">
                                    <i className="bi bi-send" /> Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="container py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="table-responsive">
                            <table className="table table-hover table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th width={80}>User ID</th>
                                        <th width={80}>ID</th>
                                        <th width={280}>Title</th>
                                        <th>Body</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {posts.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.userId}</td>
                                            <td>{item.id}</td>
                                            <td>{item.title}</td>
                                            <td>{item.body}</td>
                                            <td>
                                                <button 
                                                    type='button' 
                                                    className='btn btn-danger'
                                                    onClick={() => deletePost(item.id)}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<APIDemo />);
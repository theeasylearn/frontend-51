import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
function APIDemo() {
    //create state array 
    let [posts, setPost] = useState([]); //empty array 
    //create state variable for all input

    let [userid, setUserid] = useState('');
    let [id, setId] = useState('');
    let [title, setTitle] = useState('');
    let [body, setBody] = useState('');

    useEffect(() => {
        if (posts.length === 0) {
            //it is used to call api (fetch data from server)
            let apiAddress = "https://jsonplaceholder.typicode.com/posts";
            fetch(apiAddress).then((data) => data.json()).then((response) => {
                console.log(response);
                //data store state array 
                setPost(response);
            }).catch((error) => {
                console.log(error);
            })
        }
    });

    let deletePost = function (postid) {
        let apiAddress = `https://jsonplaceholder.typicode.com/posts/${postid}`;
        //alert(apiAddress);
        fetch(apiAddress, {
            method: 'DELETE'
        }).then((response) => {
            console.log(response);
            if (response.status === 200) {
                //delete post whose id of the post match with postid 
                let temp = posts.filter((item) => {
                    if (item.id !== postid)
                        return item;
                });
                setPost(temp);
            }
        });

    }
    const insertPost = (event) => {
        event.preventDefault();
    }
    return (<>
        <div className='container-fluid bg-light p-3 shadow'>
            <div className="row">
                <div className="col-12">
                    <form id="postForm" className="d-flex flex-wrap align-items-end gap-3" onsubmit={insertPost}>
                        {/* User ID */}
                        <div className="flex-grow-1" style={{ "min-width": "140px" }}>
                            <label htmlFor="userid" className="form-label mb-1">User ID</label>
                            <input type="number" className="form-control" id="userid" name="userid" placeholder="User ID" required
                                value={userid} onChange={(e) => setUserid(e.target.value)} />
                        </div>
                        {/* ID */}
                        <div className="flex-grow-1" style={{ "min-width": "120px" }}>
                            <label htmlFor="id" className="form-label mb-1">ID</label>
                            <input type="number" className="form-control" id="id" name="id" placeholder="ID" required
                                value={id} onChange={(e) => setId(e.target.value)} />
                        </div>
                        {/* Title */}
                        <div className="flex-grow-1" style={{ "min-width": "200px" }}>
                            <label htmlFor="title" className="form-label mb-1">Title</label>
                            <input type="text" className="form-control" id="title" name="title" placeholder="Enter title" required
                                value={title} onChange={(e) => setTitle(e.target.value)} />

                        </div>
                        {/* Body */}
                        <div className="flex-grow-1" style={{ "min-width": "250px" }}>
                            <label htmlFor="body" className="form-label mb-1">Body</label>
                            <textarea className="form-control" id="body" name="body" rows={2} placeholder="Enter body content..." onChange={(e) => setBody(e.target.value)} required>
                                {body}
                            </textarea>
                        </div>
                        {/* Submit Button */}
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
                    <div className="table-container">
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
                                <tbody id="tableBody">
                                    {posts.map((item) => {
                                        return (<tr>
                                            <td>{item.userId}</td>
                                            <td>{item.id}</td>
                                            <td>{item.title}</td>
                                            <td>{item.body}</td>
                                            <td><button type='button' className='btn btn-danger' onClick={() => deletePost(item.id)}>Delete</button></td>
                                        </tr>)
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<APIDemo />)
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
function APIDemo() {
    //create state array 
    let [posts, setPost] = useState([]); //empty array 
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
    return (<div className="container py-5">
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
                                        <td><button type='button' className='btn btn-danger'>Delete</button></td>
                                    </tr>)
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<APIDemo />)
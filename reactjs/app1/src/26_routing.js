import ReactDOM from 'react-dom/client';
import Aboutus  from './components/aboutus';
import Home from './components/home';
import Career from './components/career';
import Course from './components/course';
import Contactus from './components/contactus';
import Pagenotfound from './components/page_not_found';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function MyRouter()
{
    return (
        <BrowserRouter>
            <Routes>
                {/* localhost:3000 */}
                <Route path='/' element={<Home/>} index />
                
                <Route path='/aboutus' element={<Aboutus />} />
                <Route path='/career' element={<Career />} />
                <Route path='/course' element={<Course />} />
                <Route path='/contactus' element={<Contactus />} />

                {/* create route for 404 request(page not found) */}
                <Route path='*' element={<Pagenotfound />} />
            </Routes>
        </BrowserRouter>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyRouter />)
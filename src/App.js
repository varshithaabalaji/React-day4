import React from 'react';
import BookList from './component/BookList';
import BookDetails from './component/BookDetails';


const App = () =>{
    return(
        <div className="container">
            Welcome
            <div className="row">
            <div className="col">
            <BookList/>
            </div>
            {/* <div className="col">
               <BookDelete/> 
            </div> */}
            <div className="col">
            <BookDetails/>
            </div>
            </div>
        </div>
    );
}

export default App;
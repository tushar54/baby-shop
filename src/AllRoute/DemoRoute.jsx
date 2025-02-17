import { Link, useLocation } from "react-router-dom";


const DemoRoute = () => {
    const location =useLocation()
    console.log(location)
    return (
        <div className="min-h-screen flex justify-center items-center *:text-slate-600 text-2xl">
           <p className="text-slate-600 p-10"> This route is under development </p>   
            <Link to={'/'}><button className="btn">Go Back</button></Link>        
        </div>
    );
};

export default DemoRoute;
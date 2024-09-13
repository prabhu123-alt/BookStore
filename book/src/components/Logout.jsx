import React from 'react'
import { useAuth } from '../context/authprovider'
import toast from 'react-hot-toast';

function Logout() {
    const [authUser,setAuthUser]=useAuth();
    const handleUser = () => {
        try {
            setAuthUser({
                ...authUser,
                user: null
            });
            localStorage.removeItem("user");
            toast.success("Logout successfully 🙁");
            setTimeout(()=>{
                window.location.reload();
            },1000)
           
        } catch (error) {
            toast.error("Error: " + error.message);
        }
    };    

  return (
    <div>
        <button className="btn btn-warning"
        onClick={handleUser}>Logout</button>
    </div>
  )
}

export default Logout
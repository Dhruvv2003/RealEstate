import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import  {signInFailure } from '../redux/user/userSlice.js';
import { signInStart } from '../redux/user/userSlice.js';
import { signInSuccess } from '../redux/user/userSlice.js';
import OAuth from '../components/OAuth.jsx';
export default function SignIn() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', 
      {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false){
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate('/');
    }
    catch(error){
      dispatch(signInFailure(error.message));
    }
    
  };
  return (
    <div className="max-w-lg mx-auto p-3">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="email" placeholder="Email" className="border p-3 rounded-lg" id="email" onChange={handleChange}/>
        <input type="password" placeholder="Password" className="border p-3 rounded-lg" id="password" onChange={handleChange}/>
        <button disabled={loading} className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-75">
          {loading ? 'Loading...' : 'SIGN IN!'}
          </button>
          <OAuth/>
      </form>
      <div className="flex gap-2 mt-3">
        <p>Dont have an Account?</p>
        <Link to='/sign-up'><span className="text-blue-700">Sign Up</span></Link>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  )
}

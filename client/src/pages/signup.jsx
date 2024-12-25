import { Link } from "react-router-dom"
export default function SignUp() {
  return (
    <div className="max-w-lg mx-auto p-3">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Username" className="border p-3 rounded-lg" id="username"/>
        <input type="email" placeholder="Email" className="border p-3 rounded-lg" id="email"/>
        <input type="password" placeholder="Password" className="border p-3 rounded-lg" id="password"/>
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-75">SIGN UP!</button>
      </form>
      <div className="flex gap-2 mt-3">
        <p>Have an Account?</p>
        <Link to='/sign-in'><span className="text-blue-700">Sign In</span></Link>
      </div>
    </div>
  )
}

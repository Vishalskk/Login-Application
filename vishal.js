// import React, { useState } from "react";
// import {Link, Navigate } from "react-router-dom";

// const Createnewacc=()=>{
//     const[emailid,setemail]=useState('')
//     const[password,setpassword]=useState('')
//     const signupclick=(f)=>{
//         f.preventDefault()
//         const user={emailid,password}
//         console.log(user)
//         fetch("http://localhost:8131/login/create",{
//             method:"POST",
//             headers:{"Content-Type":"application/json"},
//             body:JSON.stringify(user)

//         }).then(()=>{
//                 console.log("Created new user!")    
//         })
//     }
//     const [gotologin,setgotologin]=React.useState(false);
//     if(gotologin){
//         return <Navigate to="/onecomponent"/>
//     }
//     return(
//         <>
//            <section id="CREATE">
//         <img src="../images/logo.png" alt=""></img>
//         <h1>CREATE YOUR ACCOUNT</h1>
//         <input value={emailid}
//         onChange={(f)=>setemail(f.target.value)} type="email" placeholder="Email"></input>
//         <input value={password}
//         onChange={(f)=>setpassword(f.target.value)} type="password" placeholder="Password"></input>
//         <br></br>
//         <button onClick={signupclick} className="signupbutton">SIGN UP</button>
//         <br></br>
//         <button className="newACC"><a href="../HTML/myaccountLOGIN.html"></a></button>
//         <Link  to='onecomponent' onClick={()=>{
//     setgotologin(true);
// }}
// >
//     {" "}
//     Already hava an account ? Login</Link>
//     </section>
        
//         </>
//     )
// }
// export default Createnewacc;














// 2
// import React, { useState } from "react";
// import logo2 from './logo2.png';
// import { Link ,Navigate} from "react-router-dom";
// import Createnewacc from "./Createnewacc";
// const OneComponent = () =>{
//     const [emailid,setemail]=useState('')
//     const [password,setpassword]=useState('')
//     const loginclick=(e)=>{
//         e.preventDefault()
//         const user={emailid,password}
//         console.log(user)
//         fetch("http://localhost:8131/login/creat",{
//             method:"POST",
//             headers:{"Content-Type":"application/json"},
//             body:JSON.stringify(user)

//         }).then(()=>{
//                 console.log("logged in succesfully!")
//         })
//     }
//   const [newacc,setnewacc]=React.useState(false);
//   if(newacc){
//     return <Navigate to={"/createnewacc"}/>
//   }
//     return(
//         <>
//           <section id="LOGIN">
//         <img src={logo2} alt="ELITE"></img>
//         <p>WELCOME BACK</p>
//         <input value={emailid}
// onChange={(e)=>setemail(e.target.value)} type="email" placeholder="Email"></input>
// <br></br>
//         <input  value={password}
// onChange={(e)=>setpassword(e.target.value)} type="password" placeholder="Password"></input>
// <br></br>
//         <button  onClick={loginclick} className="logibutton">LOGIN</button>
//         <br></br>
// <Link  to='createnewacc' onClick={()=>{
//     setnewacc(true);
// }}
// >
//     {" "}
//     New in this site ? Create New Account</Link>
//         <div className="secmaindiv">
<Link to='passwordreset'>Password Reset</Link>

// <Link to='passwordupdate'>Password update</Link>
// </div>
//     </section>








//         </>
//     )
// }
// export default OneComponent;
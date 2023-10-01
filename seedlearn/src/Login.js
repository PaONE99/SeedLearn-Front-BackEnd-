import React, { useState ,useEffect} from 'react';
import './login.css'; // Import the CSS file containing your styles

function FlipCard() {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleToggle = () => {
    setIsSignUp(!isSignUp);
  };

  var [email, setemail] = useState(''); 
  var [password, setpassword] = useState(''); 
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform submission logic here
    // You can send the form data to an API or perform any other actions

    // Clear form fields after submission
    setemail('');
    setpassword('');
  };
  const handleClick=(e)=>{
    e.preventDefault()
    const log={email,password}
    console.log(log)
    fetch("http://localhost:2024/login",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(log)

  }).then(()=>{
    console.log("New buyer added")
  })
}
 

const [name, setname] = useState(''); 
  [email, setemail] = useState(''); 
  [password, setpassword] = useState(''); 
  
  const handleSubmit2 = (e) => {
    e.preventDefault();
    // Perform submission logic here
    // You can send the form data to an API or perform any other actions

    // Clear form fields after submission
    setname('');
    setemail('');
    setpassword('');
    
  };
  const handleClick2=(e)=>{
    e.preventDefault()
    const sig={name,email,password}
    console.log(sig)
    fetch("http://localhost:2023/signin",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(sig)

  }).then(()=>{
    console.log("New buyer added")
  })
}
 



  return (
    
    <div className="wrapper">
      <div></div>
      <label className="switch">
        <input className="toggle" type="checkbox" onChange={handleToggle} checked={isSignUp} />
        <span className="slider"></span>
        <span className="card-side"></span>
        <div className={`flip-card__inner ${isSignUp ? 'flipped' : ''}`}>
          <div className="flip-card__front">
            <div className="title">Log in</div>
            <form action="" onSubmit={handleSubmit} className="flip-card__form">
              <input type="email" placeholder="Email" name="email" value={email} onChange={(e) => setemail(e.target.value)} className="flip-card__input" />
              <input type="password" placeholder="Password" name="password" value={password} onChange={(e) => setpassword(e.target.value)} className="flip-card__input" />
              <button className="flip-card__btn" onClick={handleClick}>Let's go!</button>
            </form>

           
          </div>
              
          <div className="flip-card__back">
            <div className="title">Sign up</div>
            <form action="" onSubmit={handleSubmit2}className="flip-card__form">
              <input type="text" placeholder="Name" value={name} onChange={(e) => setname(e.target.value)} className="flip-card__input" />
              <input type="email" placeholder="Email" name="email" value={email} onChange={(e) => setemail(e.target.value)} className="flip-card__input" />
              <input type="password" placeholder="Password" name="password" value={password} onChange={(e) => setpassword(e.target.value)} className="flip-card__input" />
              <button className="flip-card__btn"onClick={handleClick2}>Confirm!</button>
            </form>
          </div>
        </div>
      </label>
    </div>
  );
}

export default FlipCard;

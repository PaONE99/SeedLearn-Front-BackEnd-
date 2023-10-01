import {useState,useEffect} from 'react';
import './Education.css'; // Import your CSS file for styling

const RegistrationForm = () => {
  const [name, setname] = useState(''); 
  const [email, setemail] = useState(''); 
  const [password, setpassword] = useState(''); 
  const [dateofbirth, setdateofbirth] = useState(''); 
  const [gender, setgender] = useState('');
  const [address, setaddress] = useState('');  
  const [mobilenumber, setmobilenumber] = useState(''); 
  const [qualification, setqualification] = useState(''); 
  const [stream, setstream] = useState(''); 
  const [yearofpass, setyearofpass] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform submission logic here
    // You can send the form data to an API or perform any other actions

    // Clear form fields after submission
    setname('');
    setemail('');
    setpassword('');
    setdateofbirth('');
    setgender('');
    setaddress('');
    setmobilenumber('');
    setqualification('');  
    setstream('');
    setyearofpass('');
  };

  const handleClick=(e)=>{
    e.preventDefault()
    const edu={name,email,password,dateofbirth,gender,address,mobilenumber,qualification,stream,yearofpass}
    console.log(edu)
    fetch("http://localhost:2021/education",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(edu)

  }).then(()=>{
    console.log("New buyer added")
  })
}
    //  table display
const [users, setUsers] = useState([])
const [loading, setLoading] = useState(false);
useEffect(() => {
  setLoading(true)
  fetch("http://localhost:2021/education")
    .then(response => response.json())
    .then(json => setUsers(json))
    .finally(() => {
      setLoading(false)
     })
  }, [])

  return (
    
      <div>
     
      {/* <p>Please fill in this form</p> */}
        <div className='fof'>
        <h1  id='hed-23'>Education Form</h1>
        <form onSubmit={handleSubmit}>
        <label For="name"><b>Name</b></label>
        <input type="text"   placeholder="Enter Name" name="name" value={name} onChange={(e) => setname(e.target.value)} required />
        <label For="email"><b>Email</b></label>
        <input type="email" placeholder="Enter Email" name="email" value={email} onChange={(e) => setemail(e.target.value)} required />

        <label For="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" value={password} onChange={(e) => setpassword(e.target.value)} required />

        
        <label For="dob"><b>Date of Birth</b></label>
        <input type="date" name="dob"value={dateofbirth} onChange={(e) => setdateofbirth(e.target.value)} required />
        <br></br><br></br>
        <label For="gender"><b>Gender</b></label>
        <select name="gender" value={gender} onChange={(e) => setgender(e.target.value)}required>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <br></br>
        <label For="address"><b>Address</b></label>
        <input type="text" name="address" placeholder="Enter Address"value={address} onChange={(e) => setaddress(e.target.value)} required />

        <label For="phone"><b>Phone Number</b></label>
        <br />
        <select name="phoneCode" required>
          <option selected hidden value="">Code</option>
          <option value="91">+91</option>
          <option value="99">+99</option>
          <option value="90">+90</option>
          <option value="66">+66</option>
        </select>
        <input type="tel" name="phone" placeholder="8123456781" value={mobilenumber} onChange={(e) => setmobilenumber(e.target.value)} required />


        <label For="Degree"><b>Qualification</b></label>
        <input type="text" Degree="Degree" placeholder="Enter your qualification"value={qualification} onChange={(e) => setqualification(e.target.value)} required />


        <label For="stream"><b>Stream</b></label>
        <input type="text" stream="stream" placeholder="Enter your stream" value={stream} onChange={(e) => setstream(e.target.value)} required />



        <label For="year"><b>Year</b></label>
        <input type="text" year="year" placeholder="Enter your year of pass" value={yearofpass} onChange={(e) => setyearofpass(e.target.value)} required />

        {/* <p>By creating an account you agree to our <a href="#" style={{ color: 'dodgerblue' }}>Terms & Privacy</a>.</p> */}

        <div className="button-11">
          <button type="submit" className="buttonsub" onClick={handleClick}>submit</button>
        </div>
        
      </form>
        </div>
      
      
              {/* tablediplay */}
      <div className="App">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <><>
          <h1 id='tabhed'>DataTable</h1>
          <table style={{ borderCollapse: 'collapse', width: '100%' }} className='tab1'>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>password</th>
              <th>Date</th>
              <th>gender</th>
              <th>address</th>
              <th>Phone</th>
              <th>qualification</th>
              <th>stream</th>
              <th>yearofpass</th>
              
            </tr>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.dateofbirth}</td>
                <td>{user.gender}</td>
                <td>{user.address}</td>
                <td>{user.mobilenumber}</td>
                <td>{user.qualification}</td>
                <td>{user.stream}</td>
                <td>{user.yearofpass}</td>
              </tr>
            ))}
          </table>
        </></>
      )}
    </div>                      
      </div>
    
    
  );
}

export default RegistrationForm;

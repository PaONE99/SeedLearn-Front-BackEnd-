package seedlearn.startupform;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
@Entity
public class StartupForm {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	 private String name;
	 private String email;
	 private String  password;
	 private String dateofbirth;
	 private String  gender;
	 private String  address;
	 private long mobilenumber;
	 private String  qualification;
	 private String  stream;
	 private String  yearofpass;
	 private String  startupidea;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getDateofbirth() {
		return dateofbirth;
	}
	public void setDateofbirth(String dateofbirth) {
		this.dateofbirth = dateofbirth;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public long getMobilenumber() {
		return mobilenumber;
	}
	public void setMobilenumber(long mobilenumber) {
		this.mobilenumber = mobilenumber;
	}
	public String getQualification() {
		return qualification;
	}
	public void setQualification(String qualification) {
		this.qualification = qualification;
	}
	public String getStream() {
		return stream;
	}
	public void setStream(String stream) {
		this.stream = stream;
	}
	public String getYearofpass() {
		return yearofpass;
	}
	public void setYearofpass(String yearofpass) {
		this.yearofpass = yearofpass;
	}
	public String getStartupidea() {
		return startupidea;
	}
	public void setStartupidea(String startupidea) {
		this.startupidea = startupidea;
	}
	public StartupForm(long id, String name, String email, String password, String dateofbirth, String gender,
			String address, long mobilenumber, String qualification, String stream, String yearofpass,
			String startupidea) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.password = password;
		this.dateofbirth = dateofbirth;
		this.gender = gender;
		this.address = address;
		this.mobilenumber = mobilenumber;
		this.qualification = qualification;
		this.stream = stream;
		this.yearofpass = yearofpass;
		this.startupidea = startupidea;
	}
	public StartupForm() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	}

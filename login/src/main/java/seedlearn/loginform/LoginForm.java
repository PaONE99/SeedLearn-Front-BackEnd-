package seedlearn.loginform;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
@Entity
public class LoginForm {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	 private String email;
	 private String  password;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
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
	public LoginForm(long id, String email, String password) {
		super();
		this.id = id;
		this.email = email;
		this.password = password;
	}
	public LoginForm() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}

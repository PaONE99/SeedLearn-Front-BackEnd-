package seedlearn.signinform;

import org.springframework.data.jpa.repository.JpaRepository;

public interface SigninRepo extends JpaRepository<SigninForm,Long> {
	
	

}

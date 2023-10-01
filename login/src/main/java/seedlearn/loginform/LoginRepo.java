package seedlearn.loginform;

import org.springframework.data.jpa.repository.JpaRepository;

public interface LoginRepo extends JpaRepository<LoginForm,Long>{

}

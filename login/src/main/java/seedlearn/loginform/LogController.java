package seedlearn.loginform;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin
public class LogController {
	@Autowired	
	LoginRepo loginRepo;
	@PostMapping("/login")
	public ResponseEntity<LoginForm> saveLogin(@RequestBody LoginForm login){
		return new ResponseEntity<>(loginRepo.save(login),HttpStatus.CREATED);
	}
	@GetMapping("/login")
	public ResponseEntity<List<LoginForm>> getLogin() {
		return new ResponseEntity<>(loginRepo.findAll(),HttpStatus.OK);
		
	}
	@GetMapping("/login/{id}")
	public ResponseEntity<LoginForm> getLogin(@PathVariable long id) {
		Optional<LoginForm> login = loginRepo.findById(id);
		if(login.isPresent()) {
			return new ResponseEntity<>(login.get(),HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	@PutMapping("/login/{id}")
	public ResponseEntity<LoginForm> updateLogin(@PathVariable long id,@RequestBody LoginForm log) {
		Optional<LoginForm> login = loginRepo.findById(id);
		if(login.isPresent()) {
			
			login.get().setEmail(log.getEmail());
			login.get().setPassword(log.getPassword());
			
			return new ResponseEntity<>(loginRepo.save(login.get()),HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	@DeleteMapping("/login/{id}")
	public ResponseEntity<Void> deleteLogin(@PathVariable long id) {
		Optional<LoginForm> login = loginRepo.findById(id);
		if(login.isPresent()) {
			loginRepo.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}
package seedlearn.signinform;

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
public class SigController {
	@Autowired	
	SigninRepo signinRepo;
	@PostMapping("/signin")
	public ResponseEntity<SigninForm> saveSignin(@RequestBody SigninForm signin){
		return new ResponseEntity<>(signinRepo.save(signin),HttpStatus.CREATED);
	}
	@GetMapping("/signin")
	public ResponseEntity<List<SigninForm>> getSignin() {
		return new ResponseEntity<>(signinRepo.findAll(),HttpStatus.OK);
		
	}
	@GetMapping("/signin/{id}")
	public ResponseEntity<SigninForm> getSignin(@PathVariable long id) {
		Optional<SigninForm> signin = signinRepo.findById(id);
		if(signin.isPresent()) {
			return new ResponseEntity<>(signin.get(),HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	@PutMapping("/signin/{id}")
	public ResponseEntity<SigninForm> updateSignin(@PathVariable long id,@RequestBody SigninForm sign) {
		Optional<SigninForm> signin = signinRepo.findById(id);
		if(signin.isPresent()) {
			
			signin.get().setName(sign.getName());
			signin.get().setEmail(sign.getEmail());
			signin.get().setPassword(sign.getPassword());
			
			return new ResponseEntity<>(signinRepo.save(signin.get()),HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	@DeleteMapping("/signin/{id}")
	public ResponseEntity<Void> deleteSignin(@PathVariable long id) {
		Optional<SigninForm> signin = signinRepo.findById(id);
		if(signin.isPresent()) {
			signinRepo.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}
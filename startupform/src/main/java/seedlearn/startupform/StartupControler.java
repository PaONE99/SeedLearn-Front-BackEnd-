package seedlearn.startupform;

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
public class StartupControler {
	@Autowired	
	StartupRepo startupRepo;
	@PostMapping("/startup")
	public ResponseEntity<StartupForm> saveStartup(@RequestBody StartupForm startup){
		return new ResponseEntity<>(startupRepo.save(startup),HttpStatus.CREATED);
	}
	@GetMapping("/startup")
	public ResponseEntity<List<StartupForm>> getStartup() {
		return new ResponseEntity<>(startupRepo.findAll(),HttpStatus.OK);
		
	}
	@GetMapping("/startup/{id}")
	public ResponseEntity<StartupForm> getStartup(@PathVariable long id) {
		Optional<StartupForm> startup = startupRepo.findById(id);
		if(startup.isPresent()) {
			return new ResponseEntity<>(startup.get(),HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	@PutMapping("/startup/{id}")
	public ResponseEntity<StartupForm> updateStartup(@PathVariable long id,@RequestBody StartupForm stp) {
		Optional<StartupForm> startup = startupRepo.findById(id);
		if(startup.isPresent()) {
			
			startup.get().setName(stp.getName());
			startup.get().setEmail(stp.getEmail());
			startup.get().setPassword(stp.getPassword());
			startup.get().setDateofbirth(stp.getDateofbirth());
			startup.get().setGender(stp.getGender());
			startup.get().setAddress(stp.getAddress());
			startup.get().setMobilenumber(stp.getMobilenumber());
			startup.get().setQualification(stp.getQualification());
			startup.get().setStream(stp.getStream());
			startup.get().setStartupidea(stp.getStartupidea());
			
			
			
			
			return new ResponseEntity<>(startupRepo.save(startup.get()),HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	@DeleteMapping("/startup/{id}")
	public ResponseEntity<Void> deleteStartup(@PathVariable long id) {
		Optional<StartupForm> startup = startupRepo.findById(id);
		if(startup.isPresent()) {
			startupRepo.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}
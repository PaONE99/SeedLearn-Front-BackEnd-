package seedlearn.educationform;
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
public class EduController {
	@Autowired	
	EducationRepo educationRepo;
	@PostMapping("/education")
	public ResponseEntity<EducationForm> saveEducation(@RequestBody EducationForm education){
		return new ResponseEntity<>(educationRepo.save(education),HttpStatus.CREATED);
	}
	@GetMapping("/education")
	public ResponseEntity<List<EducationForm>> getEducation() {
		return new ResponseEntity<>(educationRepo.findAll(),HttpStatus.OK);
		
	}
	@GetMapping("/education/{id}")
	public ResponseEntity<EducationForm> getEducation(@PathVariable long id) {
		Optional<EducationForm> education = educationRepo.findById(id);
		if(education.isPresent()) {
			return new ResponseEntity<>(education.get(),HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	@PutMapping("/education/{id}")
	public ResponseEntity<EducationForm> updateEducation(@PathVariable long id,@RequestBody EducationForm edu) {
		Optional<EducationForm> education = educationRepo.findById(id);
		if(education.isPresent()) {
			
			education.get().setName(edu.getName());
			education.get().setEmail(edu.getEmail());
			education.get().setPassword(edu.getPassword());
			education.get().setDateofbirth(edu.getDateofbirth());
			education.get().setGender(edu.getGender());
			education.get().setAddress(edu.getAddress());
			education.get().setMobilenumber(edu.getMobilenumber());
			education.get().setQualification(edu.getQualification());
			education.get().setStream(edu.getStream());
			education.get().setYearofpass(edu.getYearofpass());
			
			return new ResponseEntity<>(educationRepo.save(education.get()),HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	@DeleteMapping("/education/{id}")
	public ResponseEntity<Void> deleteEducation(@PathVariable long id) {
		Optional<EducationForm> education = educationRepo.findById(id);
		if(education.isPresent()) {
			educationRepo.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}
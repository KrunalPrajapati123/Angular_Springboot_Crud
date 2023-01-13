package com.krunal.controller;

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

import com.krunal.model.User;
import com.krunal.service.UserService;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

	@Autowired
	private UserService userService;
	
	
	@GetMapping("/getusers")
	public ResponseEntity<?> getUsers() {
		List<User> users = this.userService.getAllUsers();
		if(users!=null) {
			return new ResponseEntity<>(users, HttpStatus.OK);
			//	return ResponseEntity.status(HttpStatus.OK).body(users);
		}
		//return (ResponseEntity<?>) ResponseEntity.status(HttpStatus.NO_CONTENT);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
	@GetMapping("/getuser/{id}")
	public ResponseEntity<?> getUserById(@PathVariable("id") int id)
	{
		Optional<User> userById = this.userService.getUserById(id);
		
		if(!userById.isPresent())
		{
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			//return (ResponseEntity<?>) ResponseEntity.status(HttpStatus.NOT_FOUND);
		}
//		System.out.println("user: ");
		//return ResponseEntity.status(HttpStatus.OK).body(userById);
		return new ResponseEntity<>(userById, HttpStatus.OK);
	}
	
	@PostMapping("/saveuser")
	public ResponseEntity<String> saveUser(@RequestBody User user) {
		User userData = this.userService.save(user);
		if(userData!=null) {
			return ResponseEntity.status(HttpStatus.CREATED).body("saved successfully..!!");
		}
		return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body("saved Operation failed..!!");
		
	}
	
	@PutMapping("/updateuser/{id}")
	public ResponseEntity<String> updateUser(@PathVariable("id") int id,@RequestBody User user) {
	
		String response = userService.updateUser(user,id);
		if(response=="success") {
			return ResponseEntity.status(HttpStatus.OK).body("Updated successfully..!!");
		}
		return ResponseEntity.status(HttpStatus.FAILED_DEPENDENCY).body("Update Operation failed..!!");
	}
	
	@DeleteMapping("/deleteuser/{id}")
	public ResponseEntity<String> deleteUser(@PathVariable("id") int id){
		String deleteUser = userService.deleteUser(id);
		
		if(deleteUser=="success")
		{
			return ResponseEntity.status(HttpStatus.OK).body("Deleted successfully..!!");
		}
		
		return ResponseEntity.status(HttpStatus.FAILED_DEPENDENCY).body("Delete Operation failed..!!");
	}
	
}

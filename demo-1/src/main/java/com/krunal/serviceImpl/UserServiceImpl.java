package com.krunal.serviceImpl;

import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.krunal.model.User;
import com.krunal.repository.UserRepository;
import com.krunal.service.UserService;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
	private UserRepository userRepository;
	
	@Override
	public List<User> getAllUsers() {
		
		List<User> users = this.userRepository.findAll();
		return users; 
		
	}

	@Override
	public Optional<User> getUserById(int id) {
		Optional<User> user = this.userRepository.findById(id);
		return user;
		
	}

	@Override
	public String updateUser(User user,int id) {
		try {
			User userData = this.userRepository.findById(id).get();
			System.out.println("passed data: "+userData);
			if(userData!=null)
			{
				userData.setName(user.getName());
				userData.setCity(user.getCity());
				userData.setDepartment(user.getDepartment());
				User save = userRepository.save(userData);
				System.out.println("save data: "+userData);
			    return "success";
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		
	    return null;
	}

	@Override
	public String deleteUser(int id) {
		Optional<User> userData = this.userRepository.findById(id);
		if(userData.isPresent())
		{
			userRepository.deleteById(id);
			return "success";
			
		}
		return "failure";
	   
	}

	@Override
	public User save(User user) {
		
		System.out.println("passed data: "+user);
		Optional<User> userData = this.userRepository.findById(user.getId());
		if(!userData.isPresent())
		{
			User save = userRepository.save(user);
			System.out.println("save data: "+save);
		    return save;
		}
		return null;
	}

	

}

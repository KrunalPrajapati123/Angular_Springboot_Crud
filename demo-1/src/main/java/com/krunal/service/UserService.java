package com.krunal.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.krunal.model.User;


public interface UserService {

	
	public List<User> getAllUsers();
	
	
	public String deleteUser(int id);
	
	public User save(User user);

	public Optional<User> getUserById(int id);

	public String updateUser(User user, int id);
	
	
}

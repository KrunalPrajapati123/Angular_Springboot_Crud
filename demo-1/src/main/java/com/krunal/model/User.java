package com.krunal.model;

import javax.persistence.*;

@Entity
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name ="user_Id" )
	private int id;
	
	@Column(name = "user_name")
	private String name;
	
	@Column(name ="city" )
	private String city; 
	
	@Column(name ="department" )
	private String department;
	
	

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	public User(int id, String name, String city, String department) {
		super();
		this.id = id;
		this.name = name;
		this.city = city;
		this.department = department;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", city=" + city + ", department=" + department + "]";
	}
	
	
	
}

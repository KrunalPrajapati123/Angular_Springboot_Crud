package com.krunal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.krunal.model.User;

@Repository
public interface UserRepository extends JpaRepository<User,Integer>{
}

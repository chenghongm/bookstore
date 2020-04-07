package com.womentech.bookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.womentech.bookstore.entity.Book;

public interface BookRepository extends JpaRepository<Book, Long>{

}

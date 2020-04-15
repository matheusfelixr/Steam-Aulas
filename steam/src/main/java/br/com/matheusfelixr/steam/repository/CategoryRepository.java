package br.com.matheusfelixr.steam.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.matheusfelixr.steam.model.entity.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {

	Category findById(Long id);
}

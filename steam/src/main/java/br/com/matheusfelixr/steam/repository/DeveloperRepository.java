package br.com.matheusfelixr.steam.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.matheusfelixr.steam.model.entity.Developer;

@Repository
public interface DeveloperRepository extends JpaRepository<Developer, Long> {

	Developer findById(Long id);
}

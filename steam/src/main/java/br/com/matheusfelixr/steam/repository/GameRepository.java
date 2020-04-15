package br.com.matheusfelixr.steam.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.matheusfelixr.steam.model.entity.Game;

@Repository
public interface GameRepository extends JpaRepository<Game, Long> {

	Game findById(Long id);
}

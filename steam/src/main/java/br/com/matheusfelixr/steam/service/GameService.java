package br.com.matheusfelixr.steam.service;

import java.util.Date;
import java.util.List;

import org.hibernate.service.spi.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.matheusfelixr.steam.model.entity.Game;
import br.com.matheusfelixr.steam.repository.GameRepository;

@Service
public class GameService {
	
	@Autowired
	private GameRepository gameRepository;
	
	public List<Game> listAll(){
		return gameRepository.findAll();
	}
	
	public Game create(Game game){
		if(game.getId() != null) {
			throw new ServiceException("Não e possivel salvar, pois o id está preenchido");
		}
		game.getDataControl().markCreated(new Date());
		return gameRepository.save(game);
	}
	
	public Game update(Game game){
		if(game.getId() == null) {
			throw new ServiceException("Não e possivel editar, pois o id não está preenchido");
		}
		Game currentGame = this.gameRepository.findById(game.getId());
		
		if(currentGame==null) {
			throw new ServiceException("Não e possivel editar, pois o objeto não existe");
		}
		
		game.setDataControl(currentGame.getDataControl());
			
		game.getDataControl().markUpdated(new Date());
		return gameRepository.save(game);
	}
	
	public Boolean delete(Long idGame){
		Game currentGame = this.gameRepository.findById(idGame);
		
		if(currentGame==null) {
			throw new ServiceException("Não e existe o item com id");
		}		
		
		this.gameRepository.delete(currentGame);
		
		return true;
	}

}

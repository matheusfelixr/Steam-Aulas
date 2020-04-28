package br.com.matheusfelixr.steam.service;

import java.util.Date;
import java.util.List;

import org.hibernate.service.spi.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;

import br.com.matheusfelixr.steam.model.entity.Developer;
import br.com.matheusfelixr.steam.model.entity.Game;
import br.com.matheusfelixr.steam.repository.DeveloperRepository;
import br.com.matheusfelixr.steam.repository.GameRepository;

@Service
public class GameService {
	
	@Autowired
	private GameRepository gameRepository;
	
	@Autowired
	private DeveloperRepository developerRepository;
	
	public List<Game> listAll(){
		Game game = new Game();
		game.getDataControl().setDeleted(false);
		
		Example<Game> example = Example.of(game);
		
		return gameRepository.findAll(example);
	}
	
	public Game create(Game game){
		if(game.getId() != null) {
			throw new ServiceException("Não e possivel salvar, pois o id está preenchido");
		}
		validDeveloper(game.getDeveloper());
		
		
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
		
		validDeveloper(game.getDeveloper());
		
		game.setDataControl(currentGame.getDataControl());
			
		game.getDataControl().markUpdated(new Date());
		return gameRepository.save(game);
	}
	
	public Boolean delete(Long idGame){
		Game currentGame = this.gameRepository.findById(idGame);
		
		if(currentGame==null) {
			throw new ServiceException("Não e existe o item com id");
		}		
				
		currentGame.getDataControl().markDeleted(new Date());
		 gameRepository.save(currentGame);
		return true;
	}
	
	private Boolean validDeveloper(Developer developer) {
		
		if(developer == null ||developer.getId() == null) {
			throw new ServiceException("Não e possivel salvar, pois o developer esta vazio");
		}
		Developer developerFind = new Developer();
		developerFind = developerRepository.findById(developer.getId());
		if(developerFind == null) {
			throw new ServiceException("Não foi possivel encontrar o desenvolvedor");
		}else if(developerFind.getDataControl().getDeleted()) {
			throw new ServiceException("Não é possivel utilizar a desenvolvedora, pois a desenvolvedora selecionada esta deletada.");
		}
		
		return true;
	}
	

}

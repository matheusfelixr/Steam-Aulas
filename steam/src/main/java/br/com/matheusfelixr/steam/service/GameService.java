package br.com.matheusfelixr.steam.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.hibernate.service.spi.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;

import br.com.matheusfelixr.steam.model.entity.Category;
import br.com.matheusfelixr.steam.model.entity.Developer;
import br.com.matheusfelixr.steam.model.entity.Game;
import br.com.matheusfelixr.steam.repository.CategoryRepository;
import br.com.matheusfelixr.steam.repository.DeveloperRepository;
import br.com.matheusfelixr.steam.repository.GameRepository;

@Service
public class GameService {
	
	@Autowired
	private GameRepository gameRepository;
	
	@Autowired
	private DeveloperRepository developerRepository;
	
	@Autowired
	private CategoryRepository categoryRepository;
	
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
		validateDeveloper(game.getDeveloper());
		
		validateCategories(game.getCategories());
		
		game.getDataControl().markCreated(new Date());
		return gameRepository.save(game);
	}

	public Game update(Game game){
		if(game.getId() == null) {
			throw new ServiceException("Não e possivel editar, pois o id não está preenchido");
		}
		Optional<Game> currentGameOptional = this.gameRepository.findById(game.getId());
		
		Game currentGame = currentGameOptional.get();
		
		if(currentGame==null) {
			throw new ServiceException("Não e possivel editar, pois o objeto não existe");
		}
		validateCategories(game.getCategories());
		
		validateDeveloper(game.getDeveloper());
		
		game.setDataControl(currentGame.getDataControl());
			
		game.getDataControl().markUpdated(new Date());
		return gameRepository.save(game);
	}
	
	public Boolean delete(Long idGame){
		Optional<Game> currentGameOptional = this.gameRepository.findById(idGame);
		
		Game currentGame = currentGameOptional.get();
		
		
		if(currentGame==null) {
			throw new ServiceException("Não e existe o item com id");
		}		
				
		currentGame.getDataControl().markDeleted(new Date());
		 gameRepository.save(currentGame);
		return true;
	}
	
	private Boolean validateDeveloper(Developer developer) {
		
		if(developer == null ||developer.getId() == null) {
			throw new ServiceException("Não e possivel salvar, pois o developer esta vazio");
		}
		Optional<Developer> developerFindOptional = developerRepository.findById(developer.getId());
		
		Developer developerFind = developerFindOptional.get();
		if(developerFind == null) {
			throw new ServiceException("Não foi possivel encontrar o desenvolvedor");
		}else if(developerFind.getDataControl().getDeleted()) {
			throw new ServiceException("Não é possivel utilizar a desenvolvedora, pois a desenvolvedora selecionada esta deletada.");
		}
		
		return true;
	}
	
	
	private Boolean validateCategories(Set<Category> categories) {
		
		List<Category> list = new ArrayList<Category>();
		list.addAll(categories);
		validateCategories(list);
		return true;
	}
	
	private Boolean validateCategories(List<Category> categories) {
		
		if(categories == null) {
			throw new ServiceException("Objeto categories e obrigatorio");
		}
		
		for(Category category: categories) {
			
			if(category == null ||category.getId() == null) {
				throw new ServiceException("Não e possivel salvar, pois o category esta vazio");
			}
			Optional<Category> categoryFindOptional = categoryRepository.findById(category.getId());
			
			Category categoryFind = categoryFindOptional.get();
			
			if(categoryFind == null) {
				throw new ServiceException("Não foi possivel encontrar o category " + category.getId());
			}else if(categoryFind.getDataControl().getDeleted()) {
				throw new ServiceException("Não é possivel utilizar a category, pois a category selecionada esta deletada. " + category.getId());
			}
		}
		
		return true;
	}
	

}

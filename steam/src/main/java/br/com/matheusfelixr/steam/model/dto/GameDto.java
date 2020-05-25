package br.com.matheusfelixr.steam.model.dto;

import java.util.Date;
import java.util.List;

import br.com.matheusfelixr.steam.model.entity.Game;
import lombok.Data;

@Data
public class GameDto{
	
	private Long id;
	
	private String name;
	
	private String description;
	
	private Date releseDate;
	
	private DeveloperDto developer;
	
	private List<CategoryDto> categories;
	
	public Game transformDtoToGameWithId() {
		
		Game game = new Game();
		game.setId(this.getId());
		game.setName(this.getName());
		game.setDescription(this.getDescription());
		game.setReleseDate(this.getReleseDate());
		game.setDeveloper(developer.transformDtoToDeveloperWithId());
		
		// Pega a lista de category no gameDTO  e transforma em um set na entidade GAME 
		for(CategoryDto category : categories) {
			game.getCategories().add(category.transformDtoToCategoryWithId());
		}
		
		return game;
	}
	
	public Game transformDtoToGameWithoutId() {
		
		Game game = new Game();
		game.setName(this.getName());
		game.setDescription(this.getDescription());
		game.setReleseDate(this.getReleseDate());
		game.setDeveloper(developer.transformDtoToDeveloperWithId());
		
		for(CategoryDto category : categories) {
			game.getCategories().add(category.transformDtoToCategoryWithId());
		}
		
		return game;
	}

}

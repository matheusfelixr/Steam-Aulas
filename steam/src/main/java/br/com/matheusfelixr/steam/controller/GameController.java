package br.com.matheusfelixr.steam.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.matheusfelixr.steam.model.dto.GameDto;
import br.com.matheusfelixr.steam.model.entity.Game;
import br.com.matheusfelixr.steam.service.GameService;
import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/game")
public class GameController {
	
	@Autowired
	private GameService gameService;
	
	@ApiOperation("Metodo que retorna lista de categorias")
	@GetMapping("/list-all")
	public List<Game> getGames(){
		return gameService.listAll();
	}
	
	@PostMapping("/create")
	public Game createGame(@RequestBody GameDto gameDto){
		
		Game game = gameDto.transformDtoToGameWithoutId();
		
		return gameService.create(game);
	}
	
	@PostMapping("/update")
	public Game updateGame(@RequestBody GameDto gameDto){
		
		Game game = gameDto.transformDtoToGameWithId();
		
		return gameService.update(game);
	}
	
	@PostMapping("/delete")
	public Boolean deleteGame(@RequestBody Long id){	
		return gameService.delete(id);
	}
}

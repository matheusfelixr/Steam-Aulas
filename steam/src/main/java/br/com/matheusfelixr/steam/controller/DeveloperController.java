package br.com.matheusfelixr.steam.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.matheusfelixr.steam.model.entity.Developer;
import br.com.matheusfelixr.steam.service.DeveloperService;

@RestController
@RequestMapping("/developer")
public class DeveloperController {
	
	@Autowired
	private DeveloperService developerService;
	
	@GetMapping("/list-all")
	public List<Developer> getDevelopers(){
		return developerService.listAll();
	}
	
	@PostMapping("/create")
	public Developer createDevelopers(@RequestBody Developer developer){
		return developerService.create(developer);
	}
	
	@PostMapping("/update")
	public Developer updateDevelopers(@RequestBody Developer developer){
		return developerService.create(developer);
	}
	
	@PostMapping("/delete")
	public Boolean deleteDevelopers(@RequestBody Long id){	
		return developerService.delete(id);
	}

	
}

package br.com.matheusfelixr.steam.model.dto;

import java.util.Date;

import br.com.matheusfelixr.steam.model.entity.Developer;
import lombok.Data;

@Data
public class DeveloperDto {
	
	private Long id;
	
	private String name;
	
	private Date foundationDate;
	
	public Developer transformDtoToDeveloperWithId() {
		
		Developer developer = new Developer();
		developer.setId(this.getId());
		developer.setName(this.getName());
		developer.setFoundationDate(this.getFoundationDate());
		
		return developer;
	}
	
	public Developer transformDtoToDeveloperWithoutId() {
		
		Developer developer = new Developer();
		developer.setName(this.getName());
		developer.setFoundationDate(this.getFoundationDate());
		
		return developer;
	}

}

package br.com.matheusfelixr.steam.model.dto;

import br.com.matheusfelixr.steam.model.entity.Category;
import lombok.Data;

@Data
public class CategoryDto{
	
	private Long id;
	
	private String name;

	
	public Category transformDtoToCategoryWithId() {
		
		Category category = new Category();
		category.setId(this.getId());
		category.setName(this.getName());
		
		return category;
	}
	
	public Category transformDtoToCategoryWithoutId() {
		
		Category category = new Category();
		category.setName(this.getName());
		
		return category;
	}

}

package br.com.matheusfelixr.steam.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.matheusfelixr.steam.model.dto.CategoryDto;
import br.com.matheusfelixr.steam.model.entity.Category;
import br.com.matheusfelixr.steam.service.CategoryService;
import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/category")
public class CategoryController {
	
	@Autowired
	private CategoryService categoryService;
	
	@ApiOperation("Metodo que retorna lista de categorias")
	@GetMapping("/list-all")
	public List<Category> getCategorys(){
		return categoryService.listAll();
	}
	
	@PostMapping("/create")
	public Category createCategory(@RequestBody CategoryDto categoryDto){
		
		Category category = categoryDto.transformDtoToCategoryWithoutId();
		
		return categoryService.create(category);
	}
	
	@PostMapping("/update")
	public Category updateCategory(@RequestBody CategoryDto categoryDto){
		
		Category category = categoryDto.transformDtoToCategoryWithId();
		
		return categoryService.update(category);
	}
	
	@PostMapping("/delete")
	public Boolean deleteCategory(@RequestBody Long id){	
		return categoryService.delete(id);
	}
}

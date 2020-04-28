package br.com.matheusfelixr.steam.service;

import java.util.Date;
import java.util.List;

import org.hibernate.service.spi.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;

import br.com.matheusfelixr.steam.model.entity.Category;
import br.com.matheusfelixr.steam.repository.CategoryRepository;

@Service
public class CategoryService {
	
	@Autowired
	private CategoryRepository categoryRepository;
	
	public List<Category> listAll(){
		Category category = new Category();
		category.getDataControl().setDeleted(false);
		
		Example<Category> example = Example.of(category);
		
		return categoryRepository.findAll(example);
	}
	
	public Category create(Category category){
		if(category.getId() != null) {
			throw new ServiceException("Não e possivel salvar, pois o id está preenchido");
		}
		category.getDataControl().markCreated(new Date());
		return categoryRepository.save(category);
	}
	
	public Category update(Category category){
		if(category.getId() == null) {
			throw new ServiceException("Não e possivel editar, pois o id não está preenchido");
		}
		Category currentCategory = this.categoryRepository.findById(category.getId());
		
		if(currentCategory==null) {
			throw new ServiceException("Não e possivel editar, pois o objeto não existe");
		}
		
		category.setDataControl(currentCategory.getDataControl());
			
		category.getDataControl().markUpdated(new Date());
		return categoryRepository.save(category);
	}
	
	public Boolean delete(Long idCategory){
		Category currentCategory = this.categoryRepository.findById(idCategory);
		
		if(currentCategory==null) {
			throw new ServiceException("Não e existe o item com id");
		}		
				
		currentCategory.getDataControl().markDeleted(new Date());
		categoryRepository.save(currentCategory);
		return true;
	}

}

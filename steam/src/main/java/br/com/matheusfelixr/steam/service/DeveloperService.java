package br.com.matheusfelixr.steam.service;

import java.util.Date;
import java.util.List;

import org.hibernate.service.spi.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.matheusfelixr.steam.model.entity.Developer;
import br.com.matheusfelixr.steam.repository.DeveloperRepository;

@Service
public class DeveloperService {
	
	@Autowired
	private DeveloperRepository developerRepository;
	
	public List<Developer> listAll(){
		return developerRepository.findAll();
	}
	
	public Developer create(Developer developer){
		if(developer.getId() != null) {
			throw new ServiceException("Não e possivel criar, pois o está preenchido");
		}
		developer.getDataControl().markCreated(new Date());
		return developerRepository.save(developer);
	}
	
	public Developer update(Developer developer){
		if(developer.getId() == null) {
			throw new ServiceException("Não e possivel editar, pois o id não está preenchido");
		}
		
		Developer currentDeveloper = this.developerRepository.findById(developer.getId());
		
		if(currentDeveloper==null) {
			throw new ServiceException("Não e possivel editar, pois o objeto não existe");
		}
		
		developer.setDataControl(currentDeveloper.getDataControl());
		
		developer.getDataControl().markUpdated(new Date());
		return developerRepository.save(developer);
	}
	
	public Boolean delete(Long idDeveloper){
		Developer currentDeveloper = this.developerRepository.findById(idDeveloper);
		
		if(currentDeveloper == null) {
			throw new ServiceException("Não e existe o item com id");
		}		
		
		this.developerRepository.delete(currentDeveloper);
		
		return true;
	}
}

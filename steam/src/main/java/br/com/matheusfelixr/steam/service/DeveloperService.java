package br.com.matheusfelixr.steam.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.hibernate.service.spi.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;

import br.com.matheusfelixr.steam.model.entity.Developer;
import br.com.matheusfelixr.steam.repository.DeveloperRepository;

@Service
public class DeveloperService {
	
	@Autowired
	private DeveloperRepository developerRepository;
	
	public List<Developer> listAll(){
		Developer developer = new Developer();
		developer.getDataControl().setDeleted(false);
		
		Example<Developer> example = Example.of(developer);
		
		return developerRepository.findAll(example);
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
		
		Optional<Developer> currentDeveloperOptional = this.developerRepository.findById(developer.getId());
		
		Developer currentDeveloper = currentDeveloperOptional.get();
		
		if(currentDeveloper==null) {
			throw new ServiceException("Não e possivel editar, pois o objeto não existe");
		}
		
		developer.setDataControl(currentDeveloper.getDataControl());
		
		developer.getDataControl().markUpdated(new Date());
		return developerRepository.save(developer);
	}
	
	public Boolean delete(Long idDeveloper){
		Optional<Developer> currentDeveloperOptional = this.developerRepository.findById(idDeveloper);
		
		Developer currentDeveloper = currentDeveloperOptional.get();
		
		if(currentDeveloper == null) {
			throw new ServiceException("Não e existe o item com id");
		}		
		currentDeveloper.getDataControl().markDeleted(new Date());
		developerRepository.save(currentDeveloper);
		return true;
	}
}

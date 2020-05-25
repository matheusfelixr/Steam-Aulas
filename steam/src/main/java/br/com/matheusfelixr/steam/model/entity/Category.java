package br.com.matheusfelixr.steam.model.entity;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "CATEGORY" )
public class Category {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@Column(name = "NAME", nullable = false, length = 255)
	private String name;
	
	@Embedded
	private DataControl dataControl;
	
	public Category() {
		super();
	}
	
	public Category(String name) {
		super();
		this.name = name;
	}

	public DataControl getDataControl() {
		if(dataControl== null) {
			dataControl = new DataControl();
		}
		return dataControl;
	}

	
}

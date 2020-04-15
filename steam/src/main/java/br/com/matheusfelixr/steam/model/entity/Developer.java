package br.com.matheusfelixr.steam.model.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.Data;

@Data
@Entity
@Table(name = "DEVELOPER" )
public class Developer {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@Column(name = "NAME", nullable = false, length = 255)
	private String name;
	
	@Column(name = "FOUNDATION_DATE", nullable = true)
	@Temporal(TemporalType.DATE)
	private Date foundationDate;
	
	@Embedded
	private DataControl dataControl;

	public DataControl getDataControl() {
		if(dataControl== null) {
			dataControl = new DataControl();
		}
		return dataControl;
	}
	
}

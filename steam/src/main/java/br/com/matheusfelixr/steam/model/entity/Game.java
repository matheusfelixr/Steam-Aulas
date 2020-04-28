package br.com.matheusfelixr.steam.model.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.Data;

@Data
@Entity
@Table(name = "GAME")
public class Game {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@Column(name ="NAME", nullable = false)
	private String name;
	
	@Column(name ="DESCRIPTION", nullable = true, columnDefinition = "TEXT")
	private String description;
	
	@Column(name = "RELEASE_DATE", nullable = true)
	@Temporal(TemporalType.DATE)
	private Date releseDate;
	
//	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
//	private List<Category> category;
	
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "DEVELOPER_ID", nullable = false)
	private Developer developer;
	
	@Embedded
	private DataControl dataControl;

	public DataControl getDataControl() {
		if(dataControl== null) {
			dataControl = new DataControl();
		}
		return dataControl;
	}

}

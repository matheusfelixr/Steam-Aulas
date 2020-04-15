package br.com.matheusfelixr.steam.model.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.Data;

@Data
@Embeddable
public class DataControl {
	
	@Column(name = "CREATE_DATE" , nullable = false)
	@Temporal(TemporalType.TIMESTAMP)
	private Date createDate;
	
	@Column(name = "DELETE_DATE", nullable = true)
	@Temporal(TemporalType.TIMESTAMP)
	private Date deleteDate;
	
	@Column(name = "UPDATE_DATE" , nullable = false)
	@Temporal(TemporalType.TIMESTAMP)
	private Date updateDate;
	
	@Column(name = "DELETED" , nullable = false)
	private Boolean deleted;
	
	public void markCreated(Date date) {
		this.setCreateDate(date);
		this.setUpdateDate(date);
		this.setDeleted(false);
	}

	public void markUpdated(Date date) {
		this.setUpdateDate(date);
	}

	public void markDeleted(Date date) {
		this.setDeleteDate(date);
		this.setDeleted(true);
	}
}

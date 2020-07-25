
package com.ontimize.model.core.service;


import java.sql.Timestamp;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Service;

import com.ontimize.api.core.service.ICVService;
import com.ontimize.model.core.dao.CVDao;
import com.ontimize.db.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.common.security.PermissionsProviderSecured;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;


@Lazy
@Service("cv")
public class CVService implements ICVService {

	@Autowired
	private CVDao CVDao;

	@Autowired
	private DefaultOntimizeDaoHelper daoHelper;

	@Override
	public EntityResult cvQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException {
		// TODO Auto-generated method stub
		System.out.println("////////////////////////////////////");
		System.out.println("////////////////////////////////////");
		System.out.println("////////////////////////////////////");
		System.out.println("////////////////////////////////////");
		System.out.println("////////////////////////////////////");
		System.out.println("////////////////////////////////////");
		System.out.println("////////////////////////////////////");
		System.out.println("////////////////////////////////////");
		System.out.println("////////////////////////////////////");
		System.out.println("////////////////////////////////////");
		System.out.println("////////////////////////////////////");
		System.out.println("////////////////////////////////////");
		return this.daoHelper.query(this.CVDao, keyMap, attrList);
	}
	@Override
	public EntityResult cvInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {
		// TODO Auto-generated method stub
		return this.daoHelper.insert(this.CVDao,attrMap);
	}
	@Override
	public EntityResult cvUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap)
			throws OntimizeJEERuntimeException {
		// TODO Auto-generated method stub
		return this.daoHelper.update(this.CVDao, attrMap, keyMap);
	}
	@Override
	public EntityResult cvDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
		// TODO Auto-generated method stub
		return this.daoHelper.delete(this.CVDao, keyMap);
	}


}


package com.ontimize.api.core.service;

import java.util.List;
import java.util.Map;

import com.ontimize.db.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;

public interface ICVService {

   // cv
 public EntityResult cvQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException;
 public EntityResult cvInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException;
 public EntityResult cvUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) throws OntimizeJEERuntimeException;
 public EntityResult cvDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException;
 }
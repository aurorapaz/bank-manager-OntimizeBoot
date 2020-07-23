
package com.ontimize.model.core.dao;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;

@Repository("CVDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/CVDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")
public class CVDao extends OntimizeJdbcDaoSupport {
	
	public static final String ATTR_ID = "ID";
	public static final String ATTR_ID_CANDIDATE = "ID_CANDIDATE";
	public static final String ATTR_STUDIES = "STUDIES";
	public static final String ATTR_VOLUNTEERING = "VOLUNTEERING";
	public static final String ATTR_WORK = "WORK";
	public static final String ATTR_ENGLISH_LEVEL = "ENGLISH_LEVEL";
	public static final String ATTR_SKILLS = "SKILLS";
	public static final String ATTR_PROGRAMATION_LANGUAGES = "PROGRAMATION_LANGUAGES";

}
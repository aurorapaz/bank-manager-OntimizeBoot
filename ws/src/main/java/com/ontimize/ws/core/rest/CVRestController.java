
package com.ontimize.ws.core.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ontimize.api.core.service.ICVService;
import com.ontimize.jee.server.rest.ORestController;

@RestController
@RequestMapping("/cvs")
@ComponentScan(basePackageClasses = { com.ontimize.api.core.service.ICVService.class })
public class CVRestController extends ORestController<ICVService> {

 @Autowired
 private ICVService CVService;

 @Override
 public ICVService getService() {
  return this.CVService;
 }
}
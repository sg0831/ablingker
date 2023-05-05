package com.devsg0831.ablingker.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;

@Configuration 
@EnableWebMvc
public  class SwaggerConfig {

	@Bean
	public Docket swaggerAPI() {
		//Docket : swagger Bean 
		return  new  Docket(DocumentationType.OAS_30)
				.useDefaultResponseMessages(true ) //기본 응답 메시지 표시 여부 
				.select()
				.apis(RequestHandlerSelectors.basePackage("com.devsg0831.ablingker" )) //swagger탐색 대상 패키지 
				.paths(PathSelectors.any())
				.build()
				.apiInfo(apiInfo());
	}

	private ApiInfo apiInfo() {
		return  new  ApiInfoBuilder()
				.title("Ablingker API Documentation")
				.description("This is demo API Version")
				.version("1.0" )
				.build();
	}

}

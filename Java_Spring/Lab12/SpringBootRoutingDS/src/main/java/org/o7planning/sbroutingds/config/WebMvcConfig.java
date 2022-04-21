package org.o7planning.sbroutingds.config;

import org.o7planning.sbroutingds.interceptor.DataSourceIntercetor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

    @Override
    public void addInterceptors(InterceptorRegistry registry) {

        registry.addInterceptor(new DataSourceIntercetor())//
                .addPathPatterns("/publisher/*", "/advertiser/*");
    }

}
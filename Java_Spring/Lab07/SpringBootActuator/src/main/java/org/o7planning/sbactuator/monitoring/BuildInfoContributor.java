package org.o7planning.sbactuator.monitoring;

import java.util.HashMap;
import java.util.Map;
import org.springframework.boot.actuate.info.Info;
import org.springframework.boot.actuate.info.InfoContributor;
import org.springframework.stereotype.Component; 

@Component
public class BuildInfoContributor implements InfoContributor {
    
    @Override
    public void contribute(Info.Builder builder) {
        Map<String,String> data= new HashMap<String,String>();
        data.put("build.version", "2.6.5");
        builder.withDetail("buildInfo", data);
    }
}
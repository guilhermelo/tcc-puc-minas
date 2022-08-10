package melo.guilhermer.distribuidoraapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.Scheduled;

import javax.annotation.PostConstruct;
import java.util.TimeZone;

@SpringBootApplication
public class DistribuidoraApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(DistribuidoraApiApplication.class, args);
	}

	@PostConstruct
	public void init(){
		TimeZone.setDefault(TimeZone.getTimeZone("UTC"));
	}

}

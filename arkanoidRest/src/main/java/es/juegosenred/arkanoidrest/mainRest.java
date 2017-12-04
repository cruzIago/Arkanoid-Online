package es.juegosenred.arkanoidrest;

import org.springframework.boot.SpringApplication;  
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class mainRest {
    public static void main(String[] args){
    SpringApplication.run(mainRest.class,args); //Llamada para iniciar el servidor spring tomcat
    }
}

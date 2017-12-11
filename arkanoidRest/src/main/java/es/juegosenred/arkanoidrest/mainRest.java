package es.juegosenred.arkanoidrest;

import org.springframework.boot.SpringApplication;  
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

@SpringBootApplication
@EnableWebSocket
public class mainRest implements WebSocketConfigurer {
    public static void main(String[] args){
    SpringApplication.run(mainRest.class,args); //Llamada para iniciar el servidor spring tomcat
    }
    
    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registro){
        try{
        registro.addHandler(manejador(),"/demo").setAllowedOrigins("*");
        }catch(Exception e){
            System.out.println(e.getLocalizedMessage());
        }
    }
    
    
    @Bean
    public arkanoidHandler manejador(){
    return new arkanoidHandler();
    }
   
}

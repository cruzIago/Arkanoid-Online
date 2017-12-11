package es.juegosenred.arkanoidrest;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import java.io.IOException;
import java.math.BigDecimal;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

public class arkanoidHandler extends TextWebSocketHandler {

    private Map<String, WebSocketSession> sesiones = new ConcurrentHashMap(); //Mapa para almacenar mensajes
    private ObjectMapper mapeador = new ObjectMapper();

    @Override
    public void afterConnectionEstablished(WebSocketSession sesion) {
        System.out.println("New User: " + sesion.getId());
        sesiones.put(sesion.getId(), sesion);
    }

    @Override
    public void afterConnectionClosed(WebSocketSession sesion, CloseStatus status) throws Exception {
        System.out.println("Sesion cerrada: " + sesion.getId());
        sesiones.remove(sesion.getId());

    }
    
    //Manejamos las entradas en el servidor websocket 
    @Override
    protected void handleTextMessage(WebSocketSession sesion, TextMessage mensaje) throws Exception {
        try{
        System.out.println("Mensaje recibido: " + mensaje.getPayload());
        JsonNode nodo = mapeador.readTree(mensaje.getPayload());
        
        envioInforArkanoid(sesion, nodo);
        }catch(Exception e){
            System.out.println(e.getLocalizedMessage());
        }
    }
    //Enviamos el mensaje a los usuarios que no son el que lo envia.
    //Control de los mensajes que se envian y recibe se controlará en el cliente
    private void envioInforArkanoid(WebSocketSession sesion, JsonNode nodo) throws IOException {
        System.out.println("Mensaje enviado: " + nodo.toString());
        ObjectNode nuevo = mapeador.createObjectNode();
        nuevo.put("who", nodo.get("who").asText());
        nuevo.put("posicionPala", nodo.get("posicionPala").asDouble());
        nuevo.put("velociadBola",nodo.get("velocidadBola").asInt());
        nuevo.put("posicionBola",nodo.get("posicionBola").asDouble());
        nuevo.put("bloques",nodo.get("bloques").asText());
        nuevo.put("powerUp",nodo.get("powerUp").asInt());
        for (WebSocketSession participes : sesiones.values()) {
            if (!participes.getId().equals(sesion.getId())) {
                participes.sendMessage(new TextMessage(nuevo.toString()));
            }
        }

    }
    
    

}

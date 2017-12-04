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

    private Map<String, WebSocketSession> sesiones = new ConcurrentHashMap();
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

    @Override
    protected void handleTextMessage(WebSocketSession sesion, TextMessage mensaje) throws Exception {
        try{
        System.out.println("Mensaje recibido: " + mensaje.getPayload());
        JsonNode nodo = mapeador.readTree(mensaje.getPayload());
        envioParticipantes(sesion, nodo);
        }catch(Exception e){
            System.out.println(e.getLocalizedMessage());
        }
    }

    private void envioParticipantes(WebSocketSession sesion, JsonNode nodo) throws IOException {
        System.out.println("Mensaje enviado: " + nodo.toString());
        ObjectNode nuevo = mapeador.createObjectNode();
        nuevo.put("nombre", nodo.get("nombre").asText());
        nuevo.put("cuerpo", nodo.get("cuerpo").asText());
        for (WebSocketSession participes : sesiones.values()) {
            if (!participes.getId().equals(sesion.getId())) {
                participes.sendMessage(new TextMessage(nuevo.toString()));
            }
        }

    }

}

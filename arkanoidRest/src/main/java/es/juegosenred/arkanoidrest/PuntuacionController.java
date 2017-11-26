package es.juegosenred.arkanoidrest;

import java.util.Collection;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/puntos")
public class PuntuacionController {

    Map<Long, Puntuacion> puntss = new ConcurrentHashMap();
    AtomicLong id = new AtomicLong(0);
    boolean hashCrea = false;

    //Controlador get para el servidor
    @GetMapping
    public Collection<Puntuacion> scores() {
       // puntss.put((long)2, new Puntuacion(2,2,"hey"));
       //crearHash();
        return puntss.values();
    }

    //COntrolador post para el servidor
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Puntuacion nuevaPts(@RequestBody Puntuacion puntos) {
        if (!hashCrea) {
            crearHash();
        }
        long nextId = id.incrementAndGet();
        puntos.setId(nextId);
        Puntuacion auxP;
        Puntuacion auxP2;
        auxP = puntos;

        for (long i = 0; i < 8; i++) {//Diez puntuaciones máximo en el salon de la fama

            if (auxP.getScore() > puntss.get(i).getScore() || puntss.get(i).getScore() == 0) {
                auxP2 = auxP;
                auxP = puntss.get(i);
                puntss.put(i, auxP2);

            }
        }
        return puntos;

    }
    //Metodo para crear la tabla la primera vez. INTENTAR CAMBIAR
    public void crearHash() {
        hashCrea = true;
        for (long i = 0; i < 8; i++) {
            puntss.put(i, new Puntuacion());
        }
    }
}

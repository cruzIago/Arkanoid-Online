
package es.juegosenred.arkanoidrest;

import java.util.Collection;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.CrossOrigin;
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
/**
 * Clase de control del servidor rest. Solo usamos métodos POST y GET
 * 
 * #TODO: Traer la lista de un fichero de texto.
 * 
 */


@CrossOrigin
@RestController
@RequestMapping("/puntuacion")
public class PuntuacionController {

    Map<Long, Puntuacion> puntss = new ConcurrentHashMap();//HashMap que contiene la lista de acceso concurrente de puntuaciones.
    AtomicLong id = new AtomicLong(0);//un Long con operaciones
    boolean hashCrea = false;//variable para controlar si la tabla se creó o no

    //Controlador get para el servidor
    @GetMapping
    public Collection<Puntuacion> scores() {
        return puntss.values();
    }

    //Controlador post para el servidor
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Puntuacion nuevaPts(@RequestBody Puntuacion puntos) {
        if (!hashCrea) {
            crearHash();
        }
        long nextId = id.incrementAndGet(); //Cada vez que se realiza 
        puntos.setId(nextId);
        Puntuacion auxP;//Auxiliares para el metodo de burbuja
        Puntuacion auxP2;
        auxP = puntos;

        for (long i = 0; i < 8; i++) {//8 puntuaciones del salón de la fama

            if (auxP.getScore() > puntss.get(i).getScore() || puntss.get(i).getScore() == 0) {
                auxP2 = auxP;
                auxP = puntss.get(i);
                puntss.put(i, auxP2);

            }
        }
        return puntos;

    }
    
    //Metodo para crear la tabla la primera vez. 
    public void crearHash() {
        hashCrea = true;
        for (long i = 0; i < 8; i++) {
            puntss.put(i, new Puntuacion());
        }
    }
}

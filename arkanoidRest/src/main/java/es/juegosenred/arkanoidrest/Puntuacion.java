package es.juegosenred.arkanoidrest;
/**
* Clase para la generación de puntuaciones en el servidor REST.
*/
public class Puntuacion {

    private long id;//id de la puntuacion para diferenciar entre usuarios del mismo nombre
    private int score;//cantidad de puntos obtenidos
    private String who;

    public Puntuacion() {
        this.who="AKO";//Acronimo para los cuerpos por defecto de ArKanoid-Online
    }

    public Puntuacion(int id, int score, String who) {
        this.id = id;
        this.score = score;
        this.who = who;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public String getWho() {
        return who;
    }

    public void setWho(String who) {
        this.who = who;
    }

}

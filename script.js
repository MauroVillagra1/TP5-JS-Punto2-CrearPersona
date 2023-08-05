class Persona {
    constructor(nombre, dni, sexo, peso, altura, fechaNacimiento) {
        this.nombre = nombre;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.fechaNacimiento = fechaNacimiento;
    }

    calcularEdad() {
        const fechaNacimiento = new Date(this.fechaNacimiento);
        const fechaActual = new Date();
        let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();

        // Comprobamos si el mes de nacimiento es mayor al mes actual.
        // Si es así, aún no ha cumplido años, así que restamos 1 a la edad.
        const mesNacimiento = fechaNacimiento.getMonth();
        const mesActual = fechaActual.getMonth();
        if (mesActual < mesNacimiento) {
            edad--;
        } else if (mesActual === mesNacimiento) {
            // Si el mes actual es el mismo que el de nacimiento, comprobamos el día.
            const diaNacimiento = fechaNacimiento.getDate();
            const diaActual = fechaActual.getDate();
            if (diaActual < diaNacimiento) {
                edad--;
            }
        }

        return edad;
    }

    mostrarGeneracion() {
        const generaciones = [
            { nombre: 'Generacion Z', desde: 1994, hasta: 2010, rasgo: 'irreverencia', poblacion: '7,800,000', circunstanciaHistorica: 'expansión masiva de internet' },
            { nombre: 'Generacion Y (millenials)', desde: 1981, hasta: 1993, rasgo: 'frustracion', poblacion: '7,200,000', circunstanciaHistorica: 'inicio de la digitalización' },
            { nombre: 'Generacion X', desde: 1969, hasta: 1980, rasgo: 'obsesion por el exito', poblacion: '9,300,000', circunstanciaHistorica: 'Crisis del 73 y transición española' },
            { nombre: 'Baby boom', desde: 1949, hasta: 1968, rasgo: 'ambicion', poblacion: '12,200,000', circunstanciaHistorica: 'paz y explosión demográfica' },
            { nombre: 'Silent Generation', desde: 1930, hasta: 1948, rasgo: 'austeridad', poblacion: '6,300,000', circunstanciaHistorica: 'conflictos bélicos' },
        ];
    
        const fechaNacimiento = new Date(this.fechaNacimiento);
    
        const generacion = generaciones.find(gen =>
            fechaNacimiento.getFullYear() >= gen.desde && fechaNacimiento.getFullYear() <= gen.hasta
        );
        const edad = this.calcularEdad();
        let mensaje;
        if (edad >= 18) {
            mensaje = "Es mayor de edad";
        } else {
            mensaje = "Es menor de edad";
        }
        return `
            Nombre: ${this.nombre}
            DNI: ${this.dni}
            Edad: ${edad} años
            Sexo: ${this.sexo}
            Peso: ${this.peso}
            Altura: ${this.altura}
            Fecha de nacimiento: ${this.fechaNacimiento}
            Generación: ${generacion.nombre}
            Rasgo característico: ${generacion.rasgo}
            Población de la generación: ${generacion.poblacion}
            Circunstancia histórica: ${generacion.circunstanciaHistorica}
            ${mensaje}
        `
       
    }
}

function crearPersona() {
    const nombre = document.getElementById('nombre').value;
    const dni = document.getElementById('dni').value;
    const sexo = document.getElementById('sexo').value;
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;


    const persona = new Persona(nombre, dni, sexo, peso, altura, fechaNacimiento);

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<pre>
        ${persona.mostrarGeneracion()}
        </pre>`;
}

Vue.component("titulo",{
    template:"<h1>Soy un titulo</h1>"
})

Vue.component("tabla",{
    template:"<table border=1><tr><th>Hoy</th><th>Mañana</th><th>Jueves</th></tr><tr><td>Soleado</td><td>Mayormente soleado</td><td>Parcialmente nublado</td></tr><tr><td>19°C</td><td>17°C</td><td>12°C</td></tr><tr><td>E 13 km/h</td><td>E 11 km/h</td><td>S 16 km/h</td></tr></table>"
})

var tabla= ""+
"<table border=1>"+
    "<tr>"+
        "<th>ID</th>"+
        "<th>Nombre</th>"+
    "</tr>"+
    "<tr v-for='item in arreglo'>"+
        "<td>{{item.id}}</td>"+
        "<td>{{item.nombre}}</td>"+
    "</tr>"+
    "</table>"

Vue.component("listado",{
    props: ['arreglo'],
    template: tabla
}
    

)
var app  = new Vue(
    {
        el: "#hola",
        data: {
            mensaje: "Hola Mundo",
            texto: "",
            n1: 0, 
            n2: 0,
            opc: "",
            datos: [
                "Juan","José","Marcos"
                // {nombre: "Juan"},
                // {nombre:"José"},
                // {nombre:"Matias"}
            ],
            registros:[
                {id:01, nombre:"Luz"},
                {id:02, nombre:"Elena"},
                {id:03, nombre:"Katherine"},
                {id:04, nombre:"Nancy"}
            ]
            },
        methods: {
            ejecutar: function(){
                this.texto="Mensaje cambia";
            }
            
        }
    }
    )
Vue.createApp({
    data(){
        return{
            textoBoton: 'Seguir',
            alternar: false,
            MeGusta: 'Me Gusta',
            contador: 200,

            comentario: {
                usuario: '',
                contenido: ''
            },

            comentarios: [],

            mostrarError: false
        };
    },

    methods: {
        cambiartexto() {
            if(this.alternar){
                this.textoBoton = 'Seguir';
            }else{
                this.textoBoton = 'Dejar de Seguir';
            }
            this.alternar = !this.alternar;
        },

        sumarUno(){
            if(this.contador === 200){
                this.contador ++;
            }
        },

        enviarComentario(){
            // if(usuario === '' || comentario === ''){
            //     this.mostrarError = true
            // }else{
                this.comentarios.push({
                    usuario: this.comentario.usuario,
                    contenido: this.comentario.contenido
                });
                this.comentario.contenido = '';
            // };
        },

        borrarComentario(comentario) {
            this.comentarios.splice(this.comentarios.indexOf(comentario), 1);
        }
    }
}).mount('#app')
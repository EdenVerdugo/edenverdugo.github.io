const app = new Vue({
    el: '#app',
    created: function () {
        AOS.init({
            duration: 1200,
        });
    },
    data: {
        yo: {
            nombre: 'Eden Rodrigo Verdugo Garcia',
            correo: 'eden.verdugo@gmail.com',
            celular: '667 215 6054',
            cedulaProfesional: '7006956',
            foto: 'asset/img/cage2.jpg',
            formacionAcademica: [{
                    nombre: 'Facultad de Informática UAS',
                    fechas: '2004-2008',
                    ubicacion: ''
                },
                {
                    nombre: 'Centro de Estudios Tecnologicos Industriales y de Servicios #107',
                    fechas: '2001-2004',
                    ubicacion: ''
                },
                {
                    nombre: 'Escuela Secundaria General de Culiacancito',
                    fechas: '1999-2001',
                    ubicacion: ''
                },
                {
                    nombre: 'Escuela Primaria General de Culiacancito',
                    fechas: '1994-1999',
                    ubicacion: ''
                }
            ],
            experienciaProfesional: [{
                    nombre: 'Applied Protocol Interfaces S.A. de C.V.',
                    fechas: '2009–2010',
                    descripcion: `Desarrollo de Sistemas Informáticos para programación bodegas de Coppel y el
                            departamento de sistemas de MAXCOM Telecomunicaciones`
                },
                {
                    nombre: 'DIFARMER S.A. de C.V.',
                    fechas: '2010-2015',
                    descripcion: `Desarrollo de sistemas informáticos para las áreas de almacén, facturación
                            electrónica, Ventas y Página Web. `
                },
                {
                    nombre: 'SOFTWEE S.A. de C.V.',
                    fechas: '2015-Actual',
                    descripcion: `Desarrollo de sistemas computacionales para almacenes, facturación electrónica
                            y servicios web.`
                }
            ],
            habilidades: [{
                    descripcion: 'Microsoft .NET (dominio de C# y VB NET)',
                    iconos: [
                        'https://seeklogo.com/images/M/microsoft-net-framework-logo-B9BA1A3DA1-seeklogo.com.png',
                        'https://banner2.kisspng.com/20180831/iua/kisspng-c-programming-language-logo-microsoft-visual-stud-atlas-portfolio-5b89919299aab1.1956912415357423546294.jpg',
                        'https://www.searchpng.com/wp-content/uploads/2019/02/Visual-Studio-Icon-PNG-Image-715x715.png'
                    ],
                    animacion: ''
                },
                {
                    descripcion: 'Programación orientada a objetos',
                    iconos: [
                        'https://d3q6qq2zt8nhwv.cloudfront.net/course/99cd34a1082d424c93463878b7d88a8a.png'
                    ],
                    animacion: ''
                },
                {
                    descripcion: 'Diseño web y frameworks css',
                    iconos: [
                        'http://obscureproblemsandgotchas.com/wp-content/uploads/2018/06/bootstrap-stack-e1530246058846.png',
                        'https://bulma.io/images/bulma-banner.png'
                    ],
                    animacion: ''
                },
                {
                    descripcion: 'Lenguajes de programación web y frameworks js',
                    iconos: ['https://png.pngtree.com/svg/20170719/91de50e59c.svg',
                        'https://www.redsparkinfo.com/wp-content/themes/redspark/new_images/angularjs-icon.svg',
                        'https://cdn.iconscout.com/icon/free/png-256/vuejs-1175052.png'
                    ],
                    animacion: ''
                },
                {
                    descripcion: 'Bases de datos',
                    iconos: ['https://cdn.worldvectorlogo.com/logos/microsoft-sql-server.svg'],
                    animacion: ''
                },
                {
                    descripcion: 'Diseño y programacion Mobile',
                    iconos: [
                        'https://img2.freepng.es/20180802/otq/kisspng-android-studio-integrated-development-environment-arquivos-android-gdg-jo%C3%A3o-pessoa-5b634bb4f1f150.612031561533234100991.jpg',
                        'https://dtec.azurewebsites.net/images/xamarim.png'
                    ],
                    animacion: ''
                },
            ]
        },
    },
    computed: {
        mailTo: function () {
            return 'mailto:' + this.yo.correo
        },
        cel: function () {
            return 'cel:' + this.yo.celular
        },
        linkCedula: function () {
            return 'https://www.cedulaprofesional.sep.gob.mx/cedula/presidencia/indexAvanzada.action'
        }
    }
})
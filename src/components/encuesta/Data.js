

const Encuesta1 = {
    pregunta: "Pregunta1",
    respuesta:['si','no'],
    ponderacion:['1','2']

    }

const Encuesta11 ={
    "Encuesta1":{
        "Guía_de_Referencia_I_EJEMPLO_DE_CUESTIONARIO_PARA_IDENTIFICAR_A_LOS_TRABAJADORES_QUE_FUERON_SUJETOS_A_ACONTECIMIENTOS_TRAUMÁTICOS_SEVEROS":{
            "seccion1":{
                "I.- Acontecimiento traumático severo":{
                    "preguntas":{
                        "¿Accidente que tenga como consecuencia la muerte, la pérdida de un miembro o una lesión grave?":{
                           "respuestas":[
                              "SI",
                              "NO"
                           ],
                           "ponderacion":"none"
                        },
                        "¿Asaltos?":{
                           "respuestas":[
                              "SI",
                              "NO"
                           ],
                           "ponderacion":"none"
                        },
                        "¿Actos violentos que derivaron en lesiones graves?":{
                           "respuestas":[
                              "SI",
                              "NO"
                           ],
                           "ponderacion":"none"
                        },
                        "¿Secuestro?":{
                           "respuestas":[
                              "SI",
                              "NO"
                           ],
                           "ponderacion":"none"
                        },
                        "¿Amenazas?":{
                           "respuestas":[
                              "SI",
                              "NO"
                           ],
                           "ponderacion":"none"
                        },
                        "¿Cualquier otro que ponga en riesgo su vida o salud, y/o la de otras personas?":{
                           "respuestas":[
                              "SI",
                              "NO"
                           ],
                           "ponderacion":"none"
                        },
                    }
                }
            },
            "seccion2":{
                "II.- Recuerdos persistentes sobre el acontecimiento (durante el último mes)":{
                    "preguntas":{
                        "¿Ha tenido recuerdos recurrentes sobre el acontecimiento que le provocan malestares?":{
                           "respuestas":[
                              "SI",
                              "NO"
                           ],
                           "ponderacion":"none"
                        },
                        "¿Ha tenido sueños de carácter recurrente sobre el acontecimiento, que le producen malestar?":{
                           "respuestas":[
                              "SI",
                              "NO"
                           ],
                           "ponderacion":"none"
                        }
                    },
                }
            },       
            "seccion3":{
                "III.- Esfuerzo por evitar circunstancias parecidas o asociadas al acontecimiento (durante el último mes)":{
                    "preguntas":{
                        "¿Se ha esforzado por evitar todo tipo de sentimientos, conversaciones o situaciones que le puedan recordar el acontecimiento?":{
                           "respuestas":[
                              "SI",
                              "NO"
                           ],
                           "ponderacion":"none"
                        },
                        "¿Se ha esforzado por evitar todo tipo de actividades, lugares o personas que motivan recuerdos del acontecimiento?":{
                           "respuestas":[
                              "SI",
                              "NO"
                           ],
                           "ponderacion":"none"
                        },
                        "¿Ha tenido dificultad para recordar alguna parte importante del evento?":{
                           "respuestas":[
                              "SI",
                              "NO"
                           ],
                           "ponderacion":"none"
                        },
                        "¿Ha disminuido su interés en sus actividades cotidianas?":{
                           "respuestas":[
                              "SI",
                              "NO"
                           ],
                           "ponderacion":"none"
                        },
                        "¿Se ha sentido usted alejado o distante de los demás?":{
                           "respuestas":[
                              "SI",
                              "NO"
                           ],
                           "ponderacion":"none"
                        },
                        "¿Ha notado que tiene dificultad para expresar sus sentimientos?":{
                           "respuestas":[
                              "SI",
                              "NO"
                           ],
                           "ponderacion":"none"
                        },
                        "¿Ha tenido la impresión de que su vida se va a acortar, que va a morir antes que otras personas o que tiene un futuro limitado?":{
                           "respuestas":[
                              "SI",
                              "NO"
                           ],
                           "ponderacion":"none"
                        },
                    },
                }
            },
            "seccion4":{
                "IV Afectación (durante el último mes)":{
                    "preguntas":{
                        "¿Ha tenido usted dificultades para dormir?":{
                           "respuestas":[
                              "SI",
                              "NO"
                           ],
                           "ponderacion":"none"
                        },
                        "¿Ha estado particularmente irritable o le han dado arranques de coraje?":{
                           "respuestas":[
                              "SI",
                              "NO"
                           ],
                           "ponderacion":"none"
                        },
                        "¿Ha tenido dificultad para concentrarse?":{
                           "respuestas":[
                              "SI",
                              "NO"
                           ],
                           "ponderacion":"none"
                        },
                        "¿Ha estado nervioso o constantemente en alerta?":{
                           "respuestas":[
                              "SI",
                              "NO"
                           ],
                           "ponderacion":"none"
                        },
                        "¿Se ha sobresaltado fácilmente por cualquier cosa?":{
                           "respuestas":[
                              "SI",
                              "NO"
                           ],
                           "ponderacion":"none"
                        },
                        
                    }
                }
            }

        }
    }
}


const Encuesta2 ={
        "Encuesta2":{
        "Guia de Referencia II IDENTIFICACION Y ANALISIS DE LOS FACTORES DE RIESGO PSICOSOCIAL":{
            "preguntas":{
                "Mi trabajo me exige hacer mucho esfuerzo fisico":{
                   "respuestas":[
                      "SIEMPRE",
                      "CASI SIEMPRE",
                      "ALGUNAS VECES",
                      "CASI NUNCA",
                      "NUNCA"
                   ],
                   "ponderacion":[4,3,2,1,0]
                },
                "Me preocupa sufrir un accidente en mi trabajo":{
                   "respuestas":[
                      "SIEMPRE",
                      "CASI SIEMPRE",
                      "ALGUNAS VECES",
                      "CASI NUNCA",
                      "NUNCA"
                   ],
                   "ponderacion":[4,3,2,1,0]
                },
                "Considero que las actividades que realizo son peligrosas":{
                   "respuestas":[
                      "SIEMPRE",
                      "CASI SIEMPRE",
                      "ALGUNAS VECES",
                      "CASI NUNCA",
                      "NUNCA"
                   ],
                   "ponderacion":[4,3,2,1,0]
                },
                "Por la cantidad de trabajo que tengo debo quedarme tiempo adicional a mi turno":{
                    "respuestas":[
                       "SIEMPRE",
                       "CASI SIEMPRE",
                       "ALGUNAS VECES",
                       "CASI NUNCA",
                       "NUNCA"
                    ],
                    "ponderacion":[4,3,2,1,0]
                 },
                "Por la cantidad de trabajo que tengo debo trabajar sin parar":{
                    "respuestas":[
                       "SIEMPRE",
                       "CASI SIEMPRE",
                       "ALGUNAS VECES",
                       "CASI NUNCA",
                       "NUNCA"
                    ],
                    "ponderacion":[4,3,2,1,0]
                 },
                "Considero que es necesario mantener un ritmo de trabajo acelerado":{
                    "respuestas":[
                       "SIEMPRE",
                       "CASI SIEMPRE",
                       "ALGUNAS VECES",
                       "CASI NUNCA",
                       "NUNCA"
                    ],
                    "ponderacion":[4,3,2,1,0]
                 },
                "Mi trabajo exige que esté muy concentrado":{
                    "respuestas":[
                       "SIEMPRE",
                       "CASI SIEMPRE",
                       "ALGUNAS VECES",
                       "CASI NUNCA",
                       "NUNCA"
                    ],
                    "ponderacion":[4,3,2,1,0]
                 },
                "Mi trabajo requiere que memorice mucha información":{
                    "respuestas":[
                       "SIEMPRE",
                       "CASI SIEMPRE",
                       "ALGUNAS VECES",
                       "CASI NUNCA",
                       "NUNCA"
                    ],
                    "ponderacion":[4,3,2,1,0]
                 },
                "Mi trabajo exige que atienda varios asuntos al mismo tiempo":{
                    "respuestas":[
                       "SIEMPRE",
                       "CASI SIEMPRE",
                       "ALGUNAS VECES",
                       "CASI NUNCA",
                       "NUNCA"
                    ],
                    "ponderacion":[4,3,2,1,0]
                 },
                "En mi trabajo soy responsable de cosas de mucho valor":{
                    "respuestas":[
                       "SIEMPRE",
                       "CASI SIEMPRE",
                       "ALGUNAS VECES",
                       "CASI NUNCA",
                       "NUNCA"
                    ],
                    "ponderacion":[4,3,2,1,0]
                 },
                "Respondo ante mi jefe por los resultados de toda mi área de trabajo":{
                    "respuestas":[
                       "SIEMPRE",
                       "CASI SIEMPRE",
                       "ALGUNAS VECES",
                       "CASI NUNCA",
                       "NUNCA"
                    ],
                    "ponderacion":[4,3,2,1,0]
                 },
                "En mi trabajo me dan órdenes contradictorias":{
                    "respuestas":[
                       "SIEMPRE",
                       "CASI SIEMPRE",
                       "ALGUNAS VECES",
                       "CASI NUNCA",
                       "NUNCA"
                    ],
                    "ponderacion":[4,3,2,1,0]
                 },
                "Considero que en mi trabajo me piden hacer cosas innecesarias":{
                    "respuestas":[
                       "SIEMPRE",
                       "CASI SIEMPRE",
                       "ALGUNAS VECES",
                       "CASI NUNCA",
                       "NUNCA"
                    ],
                    "ponderacion":[4,3,2,1,0]
                 },
                "Trabajo horas extras más de tres veces a la semana":{
                    "respuestas":[
                       "SIEMPRE",
                       "CASI SIEMPRE",
                       "ALGUNAS VECES",
                       "CASI NUNCA",
                       "NUNCA"
                    ],
                    "ponderacion":[4,3,2,1,0]
                 },
                "Mi trabajo me exige laborar en días de descanso, festivos o fines de semana":{
                    "respuestas":[
                       "SIEMPRE",
                       "CASI SIEMPRE",
                       "ALGUNAS VECES",
                       "CASI NUNCA",
                       "NUNCA"
                    ],
                    "ponderacion":[4,3,2,1,0]
                 },
                "Considero que el tiempo en el trabajo es mucho y perjudica mis actividades familiares o personales":{
                    "respuestas":[
                       "SIEMPRE",
                       "CASI SIEMPRE",
                       "ALGUNAS VECES",
                       "CASI NUNCA",
                       "NUNCA"
                    ],
                    "ponderacion":[4,3,2,1,0]
                 },
                "Pienso en las actividades familiares o personales cuando estoy en mi trabajo":{
                    "respuestas":[
                       "SIEMPRE",
                       "CASI SIEMPRE",
                       "ALGUNAS VECES",
                       "CASI NUNCA",
                       "NUNCA"
                    ],
                    "ponderacion":[4,3,2,1,0]
                 },
                "Mi trabajo permite que desarrolle nuevas habilidades":{
                    "respuestas":[
                       "SIEMPRE",
                       "CASI SIEMPRE",
                       "ALGUNAS VECES",
                       "CASI NUNCA",
                       "NUNCA"
                    ],
                    "ponderacion":[0,1,2,3,4]
                 },
                "En mi trabajo puedo aspirar a un mejor puesto":{
                    "respuestas":[
                       "SIEMPRE",
                       "CASI SIEMPRE",
                       "ALGUNAS VECES",
                       "CASI NUNCA",
                       "NUNCA"
                    ],
                    "ponderacion":[0,1,2,3,4]
                 },
                "Durante mi jornada de trabajo puedo tomar pausas cuando las necesito":{
                    "respuestas":[
                       "SIEMPRE",
                       "CASI SIEMPRE",
                       "ALGUNAS VECES",
                       "CASI NUNCA",
                       "NUNCA"
                    ],
                    "ponderacion":[0,1,2,3,4]
                 },
                "Puedo decidir la velocidad a la que realizo mis actividades en mi trabajo":{
                    "respuestas":[
                       "SIEMPRE",
                       "CASI SIEMPRE",
                       "ALGUNAS VECES",
                       "CASI NUNCA",
                       "NUNCA"
                    ],
                    "ponderacion":[0,1,2,3,4]
                 },
                "Puedo cambiar el orden de las actividades que realizo en mi trabajo":{
                    "respuestas":[
                       "SIEMPRE",
                       "CASI SIEMPRE",
                       "ALGUNAS VECES",
                       "CASI NUNCA",
                       "NUNCA"
                    ],
                    "ponderacion":[0,1,2,3,4]
                 },
                "Me informan con claridad cuáles son mis funciones":{
                    "respuestas":[
                       "SIEMPRE",
                       "CASI SIEMPRE",
                       "ALGUNAS VECES",
                       "CASI NUNCA",
                       "NUNCA"
                    ],
                    "ponderacion":[0,1,2,3,4]
                 },
                "Me explican claramente los resultados que debo obtener en mi trabajo":{
                    "respuestas":[
                       "SIEMPRE",
                       "CASI SIEMPRE",
                       "ALGUNAS VECES",
                       "CASI NUNCA",
                       "NUNCA"
                    ],
                    "ponderacion":[0,1,2,3,4]
                 },
                "Me informan con quién puedo resolver problemas o asuntos de trabajo":{
                    "respuestas":[
                       "SIEMPRE",
                       "CASI SIEMPRE",
                       "ALGUNAS VECES",
                       "CASI NUNCA",
                       "NUNCA"
                    ],
                    "ponderacion":[0,1,2,3,4]
                 },
                "Me permiten asistir a capacitaciones relacionadas con mi trabajo":{
                    "respuestas":[
                       "SIEMPRE",
                       "CASI SIEMPRE",
                       "ALGUNAS VECES",
                       "CASI NUNCA",
                       "NUNCA"
                    ],
                    "ponderacion":[0,1,2,3,4]
                 },
                "Recibo capacitación útil para hacer mi trabajo":{
                    "respuestas":[
                       "SIEMPRE",
                       "CASI SIEMPRE",
                       "ALGUNAS VECES",
                       "CASI NUNCA",
                       "NUNCA"
                    ],
                    "ponderacion":[0,1,2,3,4]
                 },
                "Mi jefe tiene en cuenta mis puntos de vista y opiniones":{
                    "respuestas":[
                       "SIEMPRE",
                       "CASI SIEMPRE",
                       "ALGUNAS VECES",
                       "CASI NUNCA",
                       "NUNCA"
                    ],
                    "ponderacion":[0,1,2,3,4]
                 },
                "Mi jefe ayuda a solucionar los problemas que se presentan en el trabajo":{
                    "respuestas":[
                       "SIEMPRE",
                       "CASI SIEMPRE",
                       "ALGUNAS VECES",
                       "CASI NUNCA",
                       "NUNCA"
                    ],
                    "ponderacion":[0,1,2,3,4]
                 },
                "Puedo confiar en mis compañeros de trabajo":{
                    "respuestas":[
                       "SIEMPRE",
                       "CASI SIEMPRE",
                       "ALGUNAS VECES",
                       "CASI NUNCA",
                       "NUNCA"
                    ],
                    "ponderacion":[0,1,2,3,4]
                 },
                "Cuando tenemos que realizar trabajo de equipo los compañeros colaboran":{
                    "respuestas":[
                       "SIEMPRE",
                       "CASI SIEMPRE",
                       "ALGUNAS VECES",
                       "CASI NUNCA",
                       "NUNCA"
                    ],
                    "ponderacion":[0,1,2,3,4]
                 },
                "Mis compañeros de trabajo me ayudan cuando tengo dificultades":{
                    "respuestas":[
                       "SIEMPRE",
                       "CASI SIEMPRE",
                       "ALGUNAS VECES",
                       "CASI NUNCA",
                       "NUNCA"
                    ],
                    "ponderacion":[0,1,2,3,4]
                 },
                "En mi trabajo puedo expresarme libremente sin interrupciones":{
                    "respuestas":[
                       "SIEMPRE",
                       "CASI SIEMPRE",
                       "ALGUNAS VECES",
                       "CASI NUNCA",
                       "NUNCA"
                    ],
                    "ponderacion":[0,1,2,3,4]
                 },
                "Recibo críticas constantes a mi persona y/o trabajo":{
                    "respuestas":[
                       "SIEMPRE",
                       "CASI SIEMPRE",
                       "ALGUNAS VECES",
                       "CASI NUNCA",
                       "NUNCA"
                    ],
                    "ponderacion":[4,3,2,1,0]
                 },
                
                "Recibo burlas, calumnias, difamaciones, humillaciones o ridiculizaciones":{
                    "respuestas":[
                       "SIEMPRE",
                       "CASI SIEMPRE",
                       "ALGUNAS VECES",
                       "CASI NUNCA",
                       "NUNCA"
                    ],
                    "ponderacion":[4,3,2,1,0]
                 },
                
                "Se ignora mi presencia o se me excluye de las reuniones de trabajo y en la toma de decisiones":{
                    "respuestas":[
                       "SIEMPRE",
                       "CASI SIEMPRE",
                       "ALGUNAS VECES",
                       "CASI NUNCA",
                       "NUNCA"
                    ],
                    "ponderacion":[4,3,2,1,0]
                 },
                "Se manipulan las situaciones de trabajo para hacerme parecer un mal trabajador":{
                    "respuestas":[
                       "SIEMPRE",
                       "CASI SIEMPRE",
                       "ALGUNAS VECES",
                       "CASI NUNCA",
                       "NUNCA"
                    ],
                    "ponderacion":[4,3,2,1,0]
                 },
                "Se ignoran mis éxitos laborales y se atribuyen a otros trabajadores":{
                    "respuestas":[
                       "SIEMPRE",
                       "CASI SIEMPRE",
                       "ALGUNAS VECES",
                       "CASI NUNCA",
                       "NUNCA"
                    ],
                    "ponderacion":[4,3,2,1,0]
                 },
                "Me bloquean o impiden las oportunidades que tengo para obtener ascenso o mejora en mi trabajo":{
                    "respuestas":[
                       "SIEMPRE",
                       "CASI SIEMPRE",
                       "ALGUNAS VECES",
                       "CASI NUNCA",
                       "NUNCA"
                    ],
                    "ponderacion":[4,3,2,1,0]
                 },
                "He presenciado actos de violencia en mi centro de trabajo":{
                    "respuestas":[
                       "SIEMPRE",
                       "CASI SIEMPRE",
                       "ALGUNAS VECES",
                       "CASI NUNCA",
                       "NUNCA"
                    ],
                    "ponderacion":[4,3,2,1,0]
                 },
                "Atiendo clientes o usuarios muy enojados":{
                    "respuestas":[
                       "SIEMPRE",
                       "CASI SIEMPRE",
                       "ALGUNAS VECES",
                       "CASI NUNCA",
                       "NUNCA"
                    ],
                    "ponderacion":[4,3,2,1,0]
                 },
                "Mi trabajo me exige atender personas muy necesitadas de ayuda o enfermas":{
                    "respuestas":[
                       "SIEMPRE",
                       "CASI SIEMPRE",
                       "ALGUNAS VECES",
                       "CASI NUNCA",
                       "NUNCA"
                    ],
                    "ponderacion":[4,3,2,1,0]
                 },
                "Para hacer mi trabajo debo demostrar sentimientos distintos a los míos":{
                    "respuestas":[
                       "SIEMPRE",
                       "CASI SIEMPRE",
                       "ALGUNAS VECES",
                       "CASI NUNCA",
                       "NUNCA"
                    ],
                    "ponderacion":[4,3,2,1,0]
                 },
                "Comunican tarde los asuntos de trabajo":{
                    "respuestas":[
                       "SIEMPRE",
                       "CASI SIEMPRE",
                       "ALGUNAS VECES",
                       "CASI NUNCA",
                       "NUNCA"
                    ],
                    "ponderacion":[4,3,2,1,0]
                 },
                "Dificultan el logro de los resultados del trabajo":{
                    "respuestas":[
                       "SIEMPRE",
                       "CASI SIEMPRE",
                       "ALGUNAS VECES",
                       "CASI NUNCA",
                       "NUNCA"
                    ],
                    "ponderacion":[4,3,2,1,0]
                 },
                "Ignoran las sugerencias para mejorar su trabajo":{
                    "respuestas":[
                       "SIEMPRE",
                       "CASI SIEMPRE",
                       "ALGUNAS VECES",
                       "CASI NUNCA",
                       "NUNCA"
                    ],
                    "ponderacion":[4,3,2,1,0]
                 }
        }
    }
  }
}


const Encuesta3 ={
    "Encuesta3":{
    "Guía de Referencia III IDENTIFICACIÓN Y ANÁLISIS DE LOS FACTORES DE RIESGO PSICOSOCIAL Y EVALUACIÓN DEL ENTORNO ORGANIZACIONAL EN LOS CENTROS DE TRABAJO":{
        "preguntas":{
            "El espacio donde trabajo me permite realizar mis actividades de manera segura e higiénica":{
               "respuestas":[
                  "SIEMPRE",
                  "CASI SIEMPRE",
                  "ALGUNAS VECES",
                  "CASI NUNCA",
                  "NUNCA"
               ],
               "ponderacion":[0,1,2,3,4]
            },
            "Mi trabajo me exige hacer mucho esfuerzo físico":{
               "respuestas":[
                  "SIEMPRE",
                  "CASI SIEMPRE",
                  "ALGUNAS VECES",
                  "CASI NUNCA",
                  "NUNCA"
               ],
               "ponderacion":[4,3,2,1,0]
            },
            "Me preocupa sufrir un accidente en mi trabajo":{
               "respuestas":[
                  "SIEMPRE",
                  "CASI SIEMPRE",
                  "ALGUNAS VECES",
                  "CASI NUNCA",
                  "NUNCA"
               ],
               "ponderacion":[4,3,2,1,0]
            },
            "Considero que en mi trabajo se aplican las normas de seguridad y salud en el trabajo":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[0,1,2,3,4]
             },
            "Considero que las actividades que realizo son peligrosas":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[4,3,2,1,0]
             },
            "Por la cantidad de trabajo que tengo debo quedarme tiempo adicional a mi turno":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[4,3,2,1,0]
             },
            "Por la cantidad de trabajo que tengo debo trabajar sin parar":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[4,3,2,1,0]
             },
            "Considero que es necesario mantener un ritmo de trabajo acelerado":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[4,3,2,1,0]
             },
            "Mi trabajo exige que esté muy concentrado":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[4,3,2,1,0]
             },
            "Mi trabajo requiere que memorice mucha información":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[4,3,2,1,0]
             },
            "En mi trabajo tengo que tomar decisiones difíciles muy rápido":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[4,3,2,1,0]
             },
            "Mi trabajo exige que atienda varios asuntos al mismo tiempo":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[4,3,2,1,0]
             },
            "En mi trabajo soy responsable de cosas de mucho valor":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[4,3,2,1,0]
             },
            "Respondo ante mi jefe por los resultados de toda mi área de trabajo":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[4,3,2,1,0]
             },
            "En el trabajo me dan órdenes contradictorias': {'respuestas":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[4,3,2,1,0]
             },
            "Considero que en mi trabajo me piden hacer cosas innecesarias":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[4,3,2,1,0]
             },
            "Trabajo horas extras más de tres veces a la semana":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[4,3,2,1,0]
             },
            "Mi trabajo me exige laborar en días de descanso, festivos o fines de semana":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[4,3,2,1,0]
             },
            "Considero que el tiempo en el trabajo es mucho y perjudica mis actividades familiares o personales":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[4,3,2,1,0]
             },
            "Debo atender asuntos de trabajo cuando estoy en casa":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[4,3,2,1,0]
             },
            "Pienso en las actividades familiares o personales cuando estoy en mi trabajo":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[4,3,2,1,0]
             },
            "Pienso que mis responsabilidades familiares afectan mi trabajo":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[4,3,2,1,0]
             },
            "Mi trabajo permite que desarrolle nuevas habilidades":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[0,1,2,3,4]
             },
            "En mi trabajo puedo aspirar a un mejor puesto":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[0,1,2,3,4]
             },
            "Durante mi jornada de trabajo puedo tomar pausas cuando las necesito":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[0,1,2,3,4]
             },
            "Puedo decidir cuánto trabajo realizo durante la jornada laboral":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[0,1,2,3,4]
             },
            "Puedo decidir la velocidad a la que realizo mis actividades en mi trabajo":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[0,1,2,3,4]
             },
            "Puedo cambiar el orden de las actividades que realizo en mi trabajo":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[0,1,2,3,4]
             },
            "Los cambios que se presentan en mi trabajo dificultan mi labor":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[4,3,2,1,0]
             },
            "Cuando se presentan cambios en mi trabajo se tienen en cuenta mis ideas o aportaciones":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[0,1,2,3,4]
             },
            "Me informan con claridad cuáles son mis funciones":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[0,1,2,3,4]
             },
            "Me explican claramente los resultados que debo obtener en mi trabajo":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[0,1,2,3,4]
             },
            "Me explican claramente los objetivos de mi trabajo":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[0,1,2,3,4]
             },
            "Me informan con quién puedo resolver problemas o asuntos de trabajo":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[0,1,2,3,4]
             },
            "Me permiten asistir a capacitaciones relacionadas con mi trabajo":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[0,1,2,3,4]
             },
            
            "Recibo capacitación útil para hacer mi trabajo":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[0,1,2,3,4]
             },
            "'Mi jefe ayuda a organizar mejor el trabajo":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[0,1,2,3,4]
             },
            "Mi jefe tiene en cuenta mis puntos de vista y opiniones":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[0,1,2,3,4]
             },
            "Mi jefe me comunica a tiempo la información relacionada con el trabajo":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[0,1,2,3,4]
             },
            "La orientación que me da mi jefe me ayuda a realizar mejor mi trabajo":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[0,1,2,3,4]
             },
            "Mi jefe ayuda a solucionar los problemas que se presentan en el trabajo":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[0,1,2,3,4]
             },
            "Puedo confiar en mis compañeros de trabajo":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[0,1,2,3,4]
             },
            "Entre compañeros solucionamos los problemas de trabajo de forma respetuosa":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[0,1,2,3,4]
             },
            "En mi trabajo me hacen sentir parte del grupo":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[0,1,2,3,4]
             },
            "Cuando tenemos que realizar trabajo de equipo los compañeros colaboran":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[0,1,2,3,4]
             },
            "Mis compañeros de trabajo me ayudan cuando tengo dificultades":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[0,1,2,3,4]
             },
            "Me informan sobre lo que hago bien en mi trabajo":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[0,1,2,3,4]
             },
            "La forma como evalúan mi trabajo en mi centro de trabajo me ayuda a mejorar mi desempeño":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[0,1,2,3,4]
             },
            "En mi centro de trabajo me pagan a tiempo mi salario":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[0,1,2,3,4]
             },
            "El pago que recibo es el que merezco por el trabajo que realizo":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[0,1,2,3,4]
             },
            "Si obtengo los resultados esperados en mi trabajo me recompensan o reconocen":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[0,1,2,3,4]
             },
            "Las personas que hacen bien el trabajo pueden crecer laboralmente":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[0,1,2,3,4]
             },
            "Considero que mi trabajo es estable":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[0,1,2,3,4]
             },
            "En mi trabajo existe continua rotación de personal":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[4,3,2,1,0]
             },
            "Siento orgullo de laborar en este centro de trabajo":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[0,1,2,3,4]
             },
            "Me siento comprometido con mi trabajo":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[0,1,2,3,4]
             },
            "En mi trabajo puedo expresarme libremente sin interrupciones":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[0,1,2,3,4]
             },
            "Recibo críticas constantes a mi persona y/o trabajo":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[4,3,2,1,0]
             },
            "Recibo burlas, calumnias, difamaciones, humillaciones o ridiculizaciones":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[4,3,2,1,0]
             },
            "Se ignora mi presencia o se me excluye de las reuniones de trabajo y en la toma de decisiones":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[4,3,2,1,0]
             },
            "Se manipulan las situaciones de trabajo para hacerme parecer un mal trabajador":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[4,3,2,1,0]
             },
            "Se ignoran mis éxitos laborales y se atribuyen a otros trabajadores":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[4,3,2,1,0]
             },
            "Me bloquean o impiden las oportunidades que tengo para obtener ascenso o mejora en mi trabajo":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[4,3,2,1,0]
             },
            "He presenciado actos de violencia en mi centro de trabajo":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[4,3,2,1,0]
             },
            "Atiendo clientes o usuarios muy enojados":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[4,3,2,1,0]
             },
            "Mi trabajo me exige atender personas muy necesitadas de ayuda o enfermas":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[4,3,2,1,0]
             },
            "Para hacer mi trabajo debo demostrar sentimientos distintos a los míos":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[4,3,2,1,0]
             },
            "Mi trabajo me exige atender situaciones de violencia":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[4,3,2,1,0]
             },
            "Comunican tarde los asuntos de trabajo":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[4,3,2,1,0]
             },
            "Dificultan el logro de los resultados del trabajo":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[4,3,2,1,0]
             },
            "Cooperan poco cuando se necesita":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[4,3,2,1,0]
             },
            "Ignoran las sugerencias para mejorar su trabajo":{
                "respuestas":[
                   "SIEMPRE",
                   "CASI SIEMPRE",
                   "ALGUNAS VECES",
                   "CASI NUNCA",
                   "NUNCA"
                ],
                "ponderacion":[4,3,2,1,0]
             },
    }
}
}
}

    



export default Encuesta1 




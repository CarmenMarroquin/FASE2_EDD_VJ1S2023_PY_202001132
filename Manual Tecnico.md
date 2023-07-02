# MANUAL DE TECNICO
El siguiente progra se realizo cpn estructuras creadas con nodos y sus diferentes conexiones, por la cual los nodos tiene
conexiones diferentes, en la cual se pueden crear diferentes estructuras las cuales podrian ser
pila
cola
lista 
lista circular
lista doblemente enlazada

en estas se crean diferentes nodos y sus clases para crear los punteros a la hora de recolestar informacion

En este manual técnico, se presentará una descripción y análisis de tres estructuras de datos fundamentales: Árbol AVL, Matrices y Lista Enlazada Simple. Se abordarán sus definiciones, operaciones básicas, características y aplicaciones. Este manual tiene como objetivo proporcionar una guía completa sobre estas estructuras de datos y su implementación.

Árbol AVL:
2.1 Definición:
El árbol AVL es una estructura de datos de tipo árbol binario de búsqueda balanceado. Se caracteriza por mantener el factor de equilibrio de sus nodos, lo que garantiza que la altura de los subárboles izquierdo y derecho difiera como máximo en 1. Esto asegura un tiempo de búsqueda, inserción y eliminación óptimo.

2.2 Operaciones básicas:

Inserción: Permite añadir un nuevo nodo al árbol AVL manteniendo el balanceo.
Eliminación: Permite eliminar un nodo del árbol AVL manteniendo el balanceo.
Búsqueda: Permite buscar un valor específico en el árbol AVL.
utilizan su calse nodo
clase de cada una de las estructuras 
ejemplo

2.3 Balanceo AVL:
El balanceo AVL se logra mediante rotaciones simples o dobles, que reorganizan los nodos del árbol para mantener el factor de equilibrio. Las rotaciones se aplican según las condiciones de desequilibrio detectadas durante las operaciones de inserción y eliminación.

2.4 Ventajas y desventajas:

Ventajas: El árbol AVL garantiza un tiempo de búsqueda, inserción y eliminación eficiente en comparación con árboles no balanceados. Es adecuado para aplicaciones que requieren operaciones de búsqueda frecuentes.
Desventajas: El balanceo AVL puede requerir un mayor tiempo y recursos computacionales debido a las operaciones de rotación necesarias para mantener el árbol balanceado en cada modificación.

## Estructuras
import (
	"fmt"
	"os"
	"os/exec"
	"strconv"
)

type Lista struct {
	Cabeza  *Nodo
	Tamanio int
}

func (lista *Lista) Agregar(id, nombre, cargo, contraseña string) {
	empleado := &Empleado{id, nombre, cargo, contraseña}
	nodo := &Nodo{empleado, nil}

	if lista.Tamanio == 0 {
		lista.Cabeza = nodo
	} else {
		actual := lista.Cabeza
		for actual.siguiente != nil {
			actual = actual.siguiente
		}
		actual.siguiente = nodo
	}
	lista.Tamanio++
}

func (lista *Lista) Mostrar() {
	actual := lista.Cabeza
	for actual != nil {
		fmt.Println("id es " + actual.empleado.Id)
		fmt.Println("contraseña " + actual.empleado.Contraseña)
		actual = actual.siguiente
	}
}

func (lista *Lista) Graficar() {
	actual := lista.Cabeza
	nodo := ""
	texto := "digraph ListaSimple {"
	texto += "graph[layout = dot, rankdir = LR];"
	texto += "node [shape=record];"

	contador := 1
	for actual != nil {
		nombre := actual.empleado.Nombre
		id := actual.empleado.Id
		texto += "N" + strconv.Itoa(contador) + " [label=\"" + "Nombre:" + nombre + "\nId:" + id + "\"];"
		nodo += "N" + strconv.Itoa(contador)
		actual = actual.siguiente
		contador += 1

		if actual != nil {
			nodo += "->"
		}
	}
	texto += nodo
	texto += "}"

	// Guardar el código DOT en un archivo
	file, err := os.Create("lista.dot")
	if err != nil {
		fmt.Println("Error al crear el archivo:", err)
		return
	}
	defer file.Close()

	_, err = file.WriteString(texto)
	if err != nil {
		fmt.Println("Error al escribir en el archivo:", err)
		return
	}

	// Generar el gráfico a partir del archivo DOT
	cmd := exec.Command("dot", "-Tpng", "lista.dot", "-o", "lista.png")
	err = cmd.Run()
	if err != nil {
		fmt.Println("Error al generar el gráfico:", err)
		return
	}

	fmt.Println("Gráfico generado correctamente.")
}

func (lista *Lista) Buscar(usuario, contraseña1 string) bool {

	aux := lista.Cabeza

	for aux != nil {
		contraseña := aux.empleado.Contraseña
		id := aux.empleado.Id

		if usuario == id && contraseña1 == contraseña {

			return true
		}
		aux = aux.siguiente
	}

	return false

}
 este seria un ejemplo esta es la lista

# Objetivos

* Brindar la información necesaria para poder  representar la funcionalidad técnica de la estructura, diseño y definición del aplicativo.

* Describir las herramientas utilizadas para el diseño y desarrollo del prototipo

# Matemática CBC-UBA — Unidad 2: Funciones
**Generado:** 09/05/2026 22:10:01
**Cantidad:** 100 ejercicios · **Dificultad:** mixta
**Archivo:** `matematica_cbc_unidad_02_funciones.md` · **Timestamp:** 20260509_221001

---

## Ejercicio 1 — Dominio de una función racional

**Dificultad:** ⭐ Básica

### Enunciado

Hallá el dominio de la función $f(x) = \dfrac{3x + 1}{x^2 - 5x + 6}$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
El dominio de una función racional $\frac{P(x)}{Q(x)}$ es todo $\mathbb{R}$ excepto los valores donde el denominador se anula, ya que la división por cero no está definida.

**Paso 2: Igualar el denominador a cero.**
Resolvemos $x^2 - 5x + 6 = 0$ para encontrar los valores excluidos.

**Paso 3: Factorizar el denominador.**
Buscamos dos números cuyo producto sea $6$ y cuya suma sea $-5$: son $-2$ y $-3$.

$$x^2 - 5x + 6 = (x - 2)(x - 3) = 0$$

**Paso 4: Identificar las raíces.**
De $(x-2)(x-3) = 0$ obtenemos:

$$x = 2 \qquad \text{o} \qquad x = 3$$

**Paso 5: Expresar el dominio.**
Se excluyen $x = 2$ y $x = 3$ del conjunto de los reales:

$$\text{Dom}(f) = \mathbb{R} \setminus \{2,\, 3\} = (-\infty, 2) \cup (2, 3) \cup (3, +\infty)$$

### Respuesta Final

$$\text{Dom}(f) = (-\infty, 2) \cup (2, 3) \cup (3, +\infty)$$

---

## Ejercicio 2 — Evaluación e imagen de una función cuadrática

**Dificultad:** ⭐ Básica

### Enunciado

Dada $f(x) = 2x^2 - 3x + 1$, calculá $f(0)$, $f(-1)$ y $f(3)$. Luego determiná si $y = 10$ pertenece a la imagen de $f$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Evaluar una función significa reemplazar $x$ por el valor dado y operar. Para verificar si $y = 10$ está en la imagen, planteamos $f(x) = 10$ y verificamos si la ecuación tiene solución real.

**Paso 2: Calcular $f(0)$.**

$$f(0) = 2(0)^2 - 3(0) + 1 = 0 - 0 + 1 = 1$$

**Paso 3: Calcular $f(-1)$.**

$$f(-1) = 2(-1)^2 - 3(-1) + 1 = 2(1) + 3 + 1 = 6$$

**Paso 4: Calcular $f(3)$.**

$$f(3) = 2(3)^2 - 3(3) + 1 = 2(9) - 9 + 1 = 18 - 9 + 1 = 10$$

**Paso 5: Verificar si $y = 10$ pertenece a la imagen.**
Como $f(3) = 10$, existe al menos un $x = 3$ tal que $f(x) = 10$. Por lo tanto, $10 \in \text{Im}(f)$.

### Respuesta Final

$$f(0) = 1, \quad f(-1) = 6, \quad f(3) = 10$$

El valor $y = 10$ **sí** pertenece a la imagen de $f$ (alcanzado en $x = 3$).

---

## Ejercicio 3 — Dominio de una función con raíz e inverso

**Dificultad:** ⭐ Básica

### Enunciado

Determiná el dominio de $g(x) = \dfrac{\sqrt{x + 4}}{x - 1}$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
La función tiene dos restricciones simultáneas: el radicando debe ser no negativo (raíz cuadrada definida en $\mathbb{R}$) y el denominador no puede ser cero.

**Paso 2: Condición por la raíz cuadrada.**
El radicando debe ser mayor o igual a cero:

$$x + 4 \geq 0 \implies x \geq -4$$

Esto da el intervalo $[-4, +\infty)$.

**Paso 3: Condición por el denominador.**
El denominador no puede anularse:

$$x - 1 \neq 0 \implies x \neq 1$$

**Paso 4: Intersección de condiciones.**
Tomamos los $x$ que satisfacen ambas condiciones simultáneamente:

$$x \geq -4 \quad \text{y} \quad x \neq 1$$

**Paso 5: Escribir el dominio en notación de intervalos.**

$$\text{Dom}(g) = [-4, 1) \cup (1, +\infty)$$

### Respuesta Final

$$\text{Dom}(g) = [-4, 1) \cup (1, +\infty)$$

---

## Ejercicio 4 — Función definida por partes: análisis y gráfica

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Sea la función definida por partes:

$$f(x) = \begin{cases} x^2 - 1 & \text{si } x < 0 \\ 2x + 1 & \text{si } 0 \leq x \leq 3 \\ 8 & \text{si } x > 3 \end{cases}$$

Calculá $f(-2)$, $f(0)$, $f(3)$ y $f(5)$. Determiná además si $f$ es continua en $x = 0$ y en $x = 3$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Para evaluar, se elige la rama cuya condición incluye al valor dado. Para analizar continuidad en los puntos de empalme, verificamos que los valores laterales de cada rama coincidan.

**Paso 2: Calcular las evaluaciones.**
- $x = -2 < 0$: usamos $f(x) = x^2 - 1$
$$f(-2) = (-2)^2 - 1 = 4 - 1 = 3$$
- $x = 0$ con $0 \leq x \leq 3$: usamos $f(x) = 2x+1$
$$f(0) = 2(0) + 1 = 1$$
- $x = 3$ con $0 \leq x \leq 3$: usamos $f(x) = 2x+1$
$$f(3) = 2(3) + 1 = 7$$
- $x = 5 > 3$: usamos $f(x) = 8$
$$f(5) = 8$$

**Paso 3: Analizar continuidad en $x = 0$.**
Calculamos el valor desde la izquierda (rama $x < 0$) y desde la derecha (rama $0 \leq x \leq 3$):

$$\lim_{x \to 0^-} (x^2 - 1) = (0)^2 - 1 = -1$$
$$f(0) = 2(0) + 1 = 1$$

Como $-1 \neq 1$, hay una **discontinuidad de salto** en $x = 0$.

**Paso 4: Analizar continuidad en $x = 3$.**

$$\lim_{x \to 3^-} (2x + 1) = 2(3) + 1 = 7 = f(3)$$
$$\lim_{x \to 3^+} 8 = 8$$

Como $7 \neq 8$, hay una **discontinuidad de salto** en $x = 3$.

### Respuesta Final

$$f(-2) = 3, \quad f(0) = 1, \quad f(3) = 7, \quad f(5) = 8$$

$f$ presenta **discontinuidades de salto** en $x = 0$ y en $x = 3$.

---

## Ejercicio 5 — Composición de funciones

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Dadas $f(x) = \sqrt{x - 1}$ y $g(x) = x^2 + 5$, calculá $(f \circ g)(x)$, $(g \circ f)(x)$ y determiná el dominio de cada composición.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
La composición $(f \circ g)(x) = f(g(x))$ consiste en reemplazar el argumento de $f$ por la expresión de $g(x)$. Para el dominio de la composición se consideran las restricciones de cada función involucrada.

**Paso 2: Calcular $(f \circ g)(x)$.**

$$( f \circ g)(x) = f(g(x)) = f(x^2 + 5) = \sqrt{(x^2 + 5) - 1} = \sqrt{x^2 + 4}$$

**Paso 3: Dominio de $(f \circ g)(x)$.**
Necesitamos $x^2 + 4 \geq 0$. Como $x^2 \geq 0$ para todo real, se cumple que $x^2 + 4 \geq 4 > 0$ siempre.

$$\text{Dom}(f \circ g) = \mathbb{R}$$

**Paso 4: Calcular $(g \circ f)(x)$.**

$$(g \circ f)(x) = g(f(x)) = g(\sqrt{x-1}) = (\sqrt{x-1})^2 + 5 = (x - 1) + 5 = x + 4$$

**Paso 5: Dominio de $(g \circ f)(x)$.**
Para que $f(x) = \sqrt{x-1}$ esté definida, necesitamos $x - 1 \geq 0$, es decir, $x \geq 1$. Luego $g$ no agrega restricciones adicionales.

$$\text{Dom}(g \circ f) = [1, +\infty)$$

**Paso 6: Observación sobre la no conmutatividad.**
$(f \circ g)(x) = \sqrt{x^2+4} \neq x + 4 = (g \circ f)(x)$, lo que confirma que la composición en general **no es conmutativa**.

### Respuesta Final

$$(f \circ g)(x) = \sqrt{x^2 + 4}, \quad \text{Dom}(f \circ g) = \mathbb{R}$$

$$(g \circ f)(x) = x + 4, \quad \text{Dom}(g \circ f) = [1, +\infty)$$

---

## Ejercicio 6 — Función cuadrática: vértice, imagen y raíces

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Dada $f(x) = -x^2 + 4x + 5$, determiná el vértice, las raíces, la imagen de $f$ y graficá cualitativamente indicando todos los elementos hallados.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Para una parábola $f(x) = ax^2 + bx + c$, el vértice es $V = \left(-\frac{b}{2a},\, f\!\left(-\frac{b}{2a}\right)\right)$, la imagen depende del signo de $a$ y las raíces se obtienen de $f(x) = 0$.

**Paso 2: Identificar coeficientes.**

$$a = -1, \quad b = 4, \quad c = 5$$

Como $a = -1 < 0$, la parábola tiene **concavidad hacia abajo** y el vértice es un **máximo**.

**Paso 3: Calcular el vértice.**

$$x_V = -\frac{b}{2a} = -\frac{4}{2(-1)} = -\frac{4}{-2} = 2$$

$$y_V = f(2) = -(2)^2 + 4(2) + 5 = -4 + 8 + 5 = 9$$

$$V = (2,\, 9)$$

**Paso 4: Calcular las raíces mediante la fórmula cuadrática.**

$$\Delta = b^2 - 4ac = 16 - 4(-1)(5) = 16 + 20 = 36$$

$$x = \frac{-b \pm \sqrt{\Delta}}{2a} = \frac{-4 \pm 6}{-2}$$

$$x_1 = \frac{-4 + 6}{-2} = \frac{2}{-2} = -1, \qquad x_2 = \frac{-4 - 6}{-2} = \frac{-10}{-2} = 5$$

**Paso 5: Determinar la imagen.**
Como la parábola abre hacia abajo con valor máximo $y_V = 9$:

$$\text{Im}(f) = (-\infty,\, 9]$$

### Respuesta Final

- **Vértice (máximo):** $V = (2,\, 9)$
- **Raíces:** $x_1 = -1$ y $x_2 = 5$
- **Imagen:** $\text{Im}(f) = (-\infty, 9]$
- La parábola corta al eje $x$ en $(-1, 0)$ y $(5, 0)$, al eje $y$ en $(0, 5)$ y tiene concavidad negativa.

---

## Ejercicio 7 — Función inversa

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Hallá la función inversa de $f(x) = \dfrac{2x - 3}{x + 1}$, indicá su dominio e imagen, y verificá que $f(f^{-1}(x)) = x$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Para hallar $f^{-1}$, escribimos $y = f(x)$, despejamos $x$ en función de $y$ y luego intercambiamos los nombres de las variables.

**Paso 2: Plantear la ecuación.**

$$y = \frac{2x - 3}{x + 1}$$

**Paso 3: Despejar $x$.**
Multiplicamos ambos miembros por $(x + 1)$:

$$y(x + 1) = 2x - 3$$
$$xy + y = 2x - 3$$
$$xy - 2x = -3 - y$$
$$x(y - 2) = -3 - y$$
$$x = \

## Ejercicio 11 — Dominio de una función racional con radicales

**Dificultad:** ⭐ Básica

### Enunciado

Determiná el dominio de la función:

$$f(x) = \frac{\sqrt{x+3}}{x^2 - 4}$$

### Resolución paso a paso

**Paso 1: Identificar las restricciones del dominio.**
Una función tiene restricciones cuando hay radicandos con índice par (deben ser $\geq 0$) y denominadores (no pueden ser $= 0$). Aquí coexisten ambas restricciones.

**Paso 2: Condición del radical.**
El radicando del numerador debe ser no negativo:
$$x + 3 \geq 0 \implies x \geq -3$$

**Paso 3: Condición del denominador.**
El denominador no puede ser cero:
$$x^2 - 4 = 0 \implies x^2 = 4 \implies x = 2 \quad \text{o} \quad x = -2$$
Ambos valores deben excluirse.

**Paso 4: Intersección de condiciones.**
Tomamos $x \geq -3$ y excluimos $x = -2$ y $x = 2$:
$$\text{Dom}(f) = [-3,\, -2) \cup (-2,\, 2) \cup (2,\, +\infty)$$

### Respuesta Final

$$\text{Dom}(f) = [-3,\, -2) \cup (-2,\, 2) \cup (2,\, +\infty)$$

---

## Ejercicio 12 — Imagen de una función cuadrática

**Dificultad:** ⭐ Básica

### Enunciado

Determiná el rango (imagen) de la función:

$$g(x) = -2x^2 + 8x - 3$$

### Resolución paso a paso

**Paso 1: Identificar el tipo de parábola.**
El coeficiente principal es $a = -2 < 0$, por lo tanto la parábola abre hacia abajo y tiene un **máximo** en el vértice.

**Paso 2: Encontrar las coordenadas del vértice.**
La abscisa del vértice es:
$$x_v = -\frac{b}{2a} = -\frac{8}{2 \cdot (-2)} = -\frac{8}{-4} = 2$$

**Paso 3: Calcular la ordenada del vértice.**
$$g(2) = -2(2)^2 + 8(2) - 3 = -2 \cdot 4 + 16 - 3 = -8 + 16 - 3 = 5$$
El vértice es el punto $(2,\, 5)$.

**Paso 4: Determinar el rango.**
Como la parábola abre hacia abajo, $g(x)$ alcanza su valor máximo en $y = 5$ y desciende indefinidamente hacia $-\infty$. Por lo tanto:
$$\text{Im}(g) = (-\infty,\, 5]$$

### Respuesta Final

$$\text{Im}(g) = (-\infty,\, 5]$$

---

## Ejercicio 13 — Composición de funciones

**Dificultad:** ⭐ Básica

### Enunciado

Dadas $f(x) = 3x - 1$ y $g(x) = x^2 + 2$, calculá $(f \circ g)(x)$ y $(g \circ f)(x)$, y verificá que en general $f \circ g \neq g \circ f$.

### Resolución paso a paso

**Paso 1: Calcular $(f \circ g)(x)$.**
Por definición, $(f \circ g)(x) = f(g(x))$. Sustituimos $g(x)$ en $f$:
$$f(g(x)) = f(x^2 + 2) = 3(x^2 + 2) - 1$$

**Paso 2: Simplificar $(f \circ g)(x)$.**
$$3(x^2 + 2) - 1 = 3x^2 + 6 - 1 = 3x^2 + 5$$

**Paso 3: Calcular $(g \circ f)(x)$.**
$(g \circ f)(x) = g(f(x))$. Sustituimos $f(x)$ en $g$:
$$g(f(x)) = g(3x - 1) = (3x - 1)^2 + 2$$

**Paso 4: Expandir $(g \circ f)(x)$.**
$$(3x - 1)^2 + 2 = 9x^2 - 6x + 1 + 2 = 9x^2 - 6x + 3$$

**Paso 5: Verificar la desigualdad.**
$$f \circ g = 3x^2 + 5 \qquad \neq \qquad g \circ f = 9x^2 - 6x + 3$$
Claramente son polinomios distintos, lo que confirma que la composición **no es conmutativa** en general.

### Respuesta Final

$$(f \circ g)(x) = 3x^2 + 5 \qquad \text{y} \qquad (g \circ f)(x) = 9x^2 - 6x + 3$$

---

## Ejercicio 14 — Función inversa de una función lineal fraccionaria

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Hallá la función inversa de:

$$h(x) = \frac{2x + 1}{x - 3}, \quad x \neq 3$$

Indicá también el dominio de $h^{-1}$.

### Resolución paso a paso

**Paso 1: Plantear la ecuación para la inversa.**
Llamamos $y = h(x)$ y despejamos $x$ en función de $y$:
$$y = \frac{2x + 1}{x - 3}$$

**Paso 2: Eliminar el denominador.**
Multiplicamos ambos miembros por $(x - 3)$:
$$y(x - 3) = 2x + 1 \implies yx - 3y = 2x + 1$$

**Paso 3: Agrupar términos con $x$.**
$$yx - 2x = 1 + 3y \implies x(y - 2) = 1 + 3y$$

**Paso 4: Despejar $x$.**
$$x = \frac{1 + 3y}{y - 2}, \quad y \neq 2$$

**Paso 5: Escribir la inversa.**
Intercambiamos los roles de $x$ e $y$ (llamamos $x$ a la variable independiente):
$$h^{-1}(x) = \frac{3x + 1}{x - 2}$$

**Paso 6: Determinar el dominio de $h^{-1}$.**
El dominio de $h^{-1}$ es la imagen de $h$. Como $h$ es una función de Möbius, su imagen excluye la asíntota horizontal $y = 2$. Por lo tanto:
$$\text{Dom}(h^{-1}) = \mathbb{R} \setminus \{2\}$$

### Respuesta Final

$$h^{-1}(x) = \frac{3x + 1}{x - 2}, \quad \text{Dom}(h^{-1}) = \mathbb{R} \setminus \{2\}$$

---

## Ejercicio 15 — Análisis de paridad de una función

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Determiná si la siguiente función es par, impar o ninguna de las dos:

$$f(x) = \frac{x^3 - 3x}{x^2 + 1}$$

### Resolución paso a paso

**Paso 1: Verificar el dominio.**
El denominador $x^2 + 1 \geq 1 > 0$ para todo $x \in \mathbb{R}$, así que $\text{Dom}(f) = \mathbb{R}$, que es simétrico respecto al origen. Esto es condición necesaria para analizar paridad.

**Paso 2: Calcular $f(-x)$.**
Sustituimos $x$ por $-x$:
$$f(-x) = \frac{(-x)^3 - 3(-x)}{(-x)^2 + 1} = \frac{-x^3 + 3x}{x^2 + 1}$$

**Paso 3: Factorizar $f(-x)$.**
$$f(-x) = \frac{-(x^3 - 3x)}{x^2 + 1} = -\frac{x^3 - 3x}{x^2 + 1} = -f(x)$$

**Paso 4: Comparar con las definiciones.**
- Si $f(-x) = f(x)$ para todo $x$ → función **par**.
- Si $f(-x) = -f(x)$ para todo $x$ → función **impar**.

Como obtuvimos $f(-x) = -f(x)$, la función es **impar**.

**Paso 5: Interpretación geométrica.**
Una función impar tiene simetría respecto al **origen** del sistema de coordenadas.

### Respuesta Final

$f(x)$ es una función **impar**, ya que $f(-x) = -f(x)$ para todo $x \in \mathbb{R}$.

---

## Ejercicio 16 — Intersecciones y gráfico de función a tramos

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Dada la función definida por partes:

$$f(x) = \begin{cases} x^2 - 1 & \text{si } x < 1 \\ 2x - 2 & \text{si } x \geq 1 \end{cases}$$

Determiná los ceros de $f$, el valor de $f(0)$, $f(1)$ y $f(3)$, y verificá la continuidad en $x = 1$.

### Resolución paso a paso

**Paso 1: Encontrar los ceros de $f$ en cada tramo.**
*Tramo 1* ($x < 1$): $x^2 - 1 = 0 \implies x = \pm 1$. Solo $x = -1$ cumple $x < 1$. ✓
*Tramo 2* ($x \geq 1$): $2x - 2 = 0 \implies x = 1$. Cumple $x \geq 1$. ✓
Los ceros son $x = -1$ y $x = 1$.

**Paso 2: Calcular los valores pedidos.**
$$f(0) = (0)^2 - 1 = -1 \quad (0 < 1, \text{ tramo 1})$$
$$f(1) = 2(1) - 2 = 0 \quad (x = 1, \text{ tramo 2})$$
$$f(3) = 2(3) - 2 = 4 \quad (3 \geq 1, \text{ tramo 2})$$

**Paso 3: Verificar continuidad en $x = 1$ — límite por izquierda.**
$$\lim_{x \to 1^-} f(x) = \lim_{x \to 1^-} (x^2 - 1) = (1)^2 - 1 = 0$$

**Paso 4: Límite por derecha en $x = 1$.**
$$\lim_{x \to 1^+} f(x) = \lim_{x \to 1^+} (2x - 2) = 2(1) - 2 = 0$$

**Paso 5: Comparar con el valor de la función.**
$$\lim_{x \to 1^-} f(x) = \lim_{x \to 1^+} f(x) = 0 = f(1)$$
Las tres cantidades coinciden, por lo tanto $f$ es **continua** en $x = 1$.

### Respuesta Final

Los ceros son $x = -1$ y $x = 1$. Se cumple $f(0) = -1$, $f(1) = 0$, $f(3) = 4$, y $f$ es continua en $x = 1$.

---

## Ejercicio 17 — Transformaciones de funciones: traslaciones y reflexiones

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

A partir de la función $f(x) = \sqrt{x}$, obtené la expresión analítica y describí la transformación geométrica de:

$$g(x) = -\sqrt{x - 2} + 3$$

Determiná el dominio e imagen de $g$.

### Resolución paso a paso

**Paso 1: Identificar la función base.**
La función base es $f(x) = \sqrt{x}$, con $\text{Dom}(f) = [0, +\infty)$ e $\text{Im}(f) = [0, +\infty)$.

**Paso 2: Analizar el argumento $(x - 2)$.**
Reemplazar $x$ por $(x - 2)$ produce una **traslación horizontal 2 unidades hacia la derecha**:
$$f(x-2) = \sqrt{x-2}$$
Nuevo dominio provisional: $x - 2 \geq 0 \implies x \geq 2$, es decir $[2, +\infty)$.

**Paso 3: Analizar el signo negativo delante del radical.**
Multiplicar por $-1$ produce una **reflexión respecto al eje $x$**:
$$-\sqrt{x-2} \quad \Rightarrow \quad \text{imagen provisional: } (-\infty, 0]$$

**Paso 4: Analizar la suma $+3$.**
Sumar $3$ produce una **traslación vertical 3 unidades hacia arriba**:
$$g(x) = -\sqrt{x-2} + 3 \quad \Rightarrow \quad \text{imagen: } (-\infty, 3]$$

**Paso 5: Sintetizar dominio e imagen.**
$$\text{Dom}(g) = [2, +\infty), \qquad \text{Im}(g) = (-\infty, 3]$$
El punto inicial del gráfico es $(2, 3)$, que corresponde al vértice de la curva transformada.

### Respuesta Final

$$g(x) = -\sqrt{x-2}+3, \quad \text{Dom}(g) = [2,+\infty), \quad \text{Im}(g) = (-\infty, 3]$$

La gráfica de $f(x)=\sqrt{x}$ se traslada 2 unidades a la derecha, se refleja en el eje $x$ y se traslada 3 unidades hacia arriba.

---

## Ejercicio 18 — Ecuación exponencial y función exponencial

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Dada la función $f(x) = 2^{x+1}

## Ejercicio 21 — Dominio e imagen de una función lineal

**Dificultad:** ⭐ Básica

### Enunciado

Dada la función $f(x) = 3x - 7$, determiná el dominio y la imagen de $f$.

### Resolución paso a paso

**Paso 1: Identificar el tipo de función.**
$f(x) = 3x - 7$ es una función polinómica de grado 1 (función lineal). Las funciones polinómicas están definidas para todo número real, sin restricciones.

**Paso 2: Determinar el dominio.**
Como no hay divisiones, raíces de índice par ni logaritmos, el dominio es:

$$\text{Dom}(f) = \mathbb{R} = (-\infty, +\infty)$$

**Paso 3: Determinar la imagen.**
Para encontrar la imagen, planteamos $y = 3x - 7$ y despejamos $x$:

$$y + 7 = 3x \implies x = \frac{y + 7}{3}$$

**Paso 4: Analizar para qué valores de $y$ existe solución.**
Como $x = \dfrac{y+7}{3}$ está definida para todo $y \in \mathbb{R}$, cualquier valor real es alcanzable por $f$.

$$\text{Im}(f) = \mathbb{R} = (-\infty, +\infty)$$

### Respuesta Final

$$\text{Dom}(f) = \mathbb{R} \qquad \text{Im}(f) = \mathbb{R}$$

---

## Ejercicio 22 — Dominio de una función racional

**Dificultad:** ⭐ Básica

### Enunciado

Hallá el dominio de la función $g(x) = \dfrac{2x + 1}{x^2 - 5x + 6}$.

### Resolución paso a paso

**Paso 1: Identificar la restricción.**
En una función racional, el denominador no puede ser cero. Debemos resolver $x^2 - 5x + 6 = 0$.

**Paso 2: Factorizar el denominador.**
Buscamos dos números cuyo producto sea $6$ y cuya suma sea $-5$: son $-2$ y $-3$.

$$x^2 - 5x + 6 = (x - 2)(x - 3)$$

**Paso 3: Hallar los valores excluidos.**
$(x-2)(x-3) = 0 \implies x = 2 \quad \text{o} \quad x = 3$

Estos valores quedan excluidos del dominio.

**Paso 4: Expresar el dominio.**
El dominio es $\mathbb{R}$ menos los puntos $\{2, 3\}$:

$$\text{Dom}(g) = \mathbb{R} \setminus \{2,\, 3\} = (-\infty, 2) \cup (2, 3) \cup (3, +\infty)$$

### Respuesta Final

$$\text{Dom}(g) = (-\infty,\, 2) \cup (2,\, 3) \cup (3,\, +\infty)$$

---

## Ejercicio 23 — Dominio de una función con raíz cuadrada y denominador

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Determiná el dominio de la función $h(x) = \dfrac{\sqrt{x + 4}}{x - 1}$.

### Resolución paso a paso

**Paso 1: Identificar todas las restricciones.**
Hay dos condiciones simultáneas:
- El radicando debe ser no negativo: $x + 4 \geq 0$.
- El denominador no puede ser cero: $x - 1 \neq 0$.

**Paso 2: Resolver la condición de la raíz.**

$$x + 4 \geq 0 \implies x \geq -4$$

En notación de intervalos: $[-4, +\infty)$.

**Paso 3: Resolver la condición del denominador.**

$$x - 1 \neq 0 \implies x \neq 1$$

**Paso 4: Intersectar ambas condiciones.**
Tomamos $x \geq -4$ y excluimos $x = 1$:

$$\text{Dom}(h) = [-4,\, +\infty) \setminus \{1\}$$

**Paso 5: Expresar en unión de intervalos.**

$$\text{Dom}(h) = [-4,\, 1) \cup (1,\, +\infty)$$

### Respuesta Final

$$\text{Dom}(h) = [-4,\, 1) \cup (1,\, +\infty)$$

---

## Ejercicio 24 — Composición de funciones

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Dadas $f(x) = x^2 - 1$ y $g(x) = \sqrt{2x + 3}$, calculá $(f \circ g)(x)$ y $(g \circ f)(x)$. Indicá el dominio de cada composición.

### Resolución paso a paso

**Paso 1: Calcular $(f \circ g)(x) = f(g(x))$.**
Reemplazamos $g(x)$ dentro de $f$:

$$f(g(x)) = f\!\left(\sqrt{2x+3}\right) = \left(\sqrt{2x+3}\right)^2 - 1 = 2x + 3 - 1 = 2x + 2$$

**Paso 2: Dominio de $f \circ g$.**
Para que $g(x)$ esté definida necesitamos $2x + 3 \geq 0 \Rightarrow x \geq -\tfrac{3}{2}$.
Una vez calculada, $f(g(x)) = 2x+2$ es polinómica, pero la restricción de $g$ persiste.

$$\text{Dom}(f \circ g) = \left[-\frac{3}{2},\, +\infty\right)$$

**Paso 3: Calcular $(g \circ f)(x) = g(f(x))$.**
Reemplazamos $f(x)$ dentro de $g$:

$$g(f(x)) = g(x^2 - 1) = \sqrt{2(x^2 - 1) + 3} = \sqrt{2x^2 - 2 + 3} = \sqrt{2x^2 + 1}$$

**Paso 4: Dominio de $g \circ f$.**
Necesitamos $2x^2 + 1 \geq 0$. Como $2x^2 \geq 0$ para todo $x$, se tiene $2x^2 + 1 \geq 1 > 0$ siempre.

$$\text{Dom}(g \circ f) = \mathbb{R}$$

### Respuesta Final

$$(f \circ g)(x) = 2x + 2, \quad \text{Dom} = \left[-\dfrac{3}{2},\, +\infty\right)$$

$$(g \circ f)(x) = \sqrt{2x^2 + 1}, \quad \text{Dom} = \mathbb{R}$$

---

## Ejercicio 25 — Función cuadrática: vértice, dominio e imagen

**Dificultad:** ⭐ Básica

### Enunciado

Para la función $p(x) = -2x^2 + 8x - 3$, hallá el vértice, determiná si tiene máximo o mínimo, y calculá el dominio y la imagen.

### Resolución paso a paso

**Paso 1: Identificar los coeficientes.**
$a = -2$, $b = 8$, $c = -3$. Como $a < 0$, la parábola abre hacia abajo y tiene **máximo**.

**Paso 2: Calcular la coordenada $x$ del vértice.**

$$x_v = -\frac{b}{2a} = -\frac{8}{2 \cdot (-2)} = -\frac{8}{-4} = 2$$

**Paso 3: Calcular la coordenada $y$ del vértice.**

$$y_v = p(2) = -2(2)^2 + 8(2) - 3 = -2(4) + 16 - 3 = -8 + 16 - 3 = 5$$

El vértice es $V = (2,\, 5)$ y es un **máximo absoluto**.

**Paso 4: Determinar dominio e imagen.**
Al ser polinómica: $\text{Dom}(p) = \mathbb{R}$.
Como la parábola abre hacia abajo y el máximo es $y_v = 5$, la función toma todos los valores menores o iguales a $5$:

$$\text{Im}(p) = (-\infty,\, 5]$$

### Respuesta Final

- Vértice: $V = (2,\; 5)$ — **máximo absoluto**
- $\text{Dom}(p) = \mathbb{R}$
- $\text{Im}(p) = (-\infty,\; 5]$

---

## Ejercicio 26 — Función a trozos: evaluación y gráfica

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Sea la función definida por partes:

$$f(x) = \begin{cases} x^2 - 1 & \text{si } x < 0 \\ 2x + 1 & \text{si } 0 \leq x \leq 3 \\ 8 & \text{si } x > 3 \end{cases}$$

Calculá $f(-2)$, $f(0)$, $f(3)$ y $f(5)$. Luego determiná la imagen de $f$.

### Resolución paso a paso

**Paso 1: Evaluar $f(-2)$.**
Como $-2 < 0$, se usa $f(x) = x^2 - 1$:

$$f(-2) = (-2)^2 - 1 = 4 - 1 = 3$$

**Paso 2: Evaluar $f(0)$.**
Como $0 \leq 0 \leq 3$, se usa $f(x) = 2x + 1$:

$$f(0) = 2(0) + 1 = 1$$

**Paso 3: Evaluar $f(3)$.**
Como $0 \leq 3 \leq 3$, se usa $f(x) = 2x + 1$:

$$f(3) = 2(3) + 1 = 7$$

**Paso 4: Evaluar $f(5)$.**
Como $5 > 3$, se usa $f(x) = 8$:

$$f(5) = 8$$

**Paso 5: Determinar la imagen de cada tramo y unirlas.**
- **Tramo 1** ($x < 0$): $f(x) = x^2 - 1$. Cuando $x \to 0^-$, $f \to -1$; cuando $x \to -\infty$, $f \to +\infty$. La imagen es $[-1, +\infty)$... pero acotada a $x<0$ y la parábola tiene mínimo en $x=0$ (no incluido): $\text{Im}_1 = (-1, +\infty)$.
- **Tramo 2** ($0 \leq x \leq 3$): $f$ va de $f(0)=1$ a $f(3)=7$, ambos incluidos. $\text{Im}_2 = [1, 7]$.
- **Tramo 3** ($x > 3$): $f(x) = 8$ constante. $\text{Im}_3 = \{8\}$.

Uniendo: $\text{Im}(f) = (-1, +\infty)$ (ya contiene a $[1,7]$ y $\{8\}$).

### Respuesta Final

$$f(-2) = 3, \quad f(0) = 1, \quad f(3) = 7, \quad f(5) = 8$$

$$\text{Im}(f) = (-1,\, +\infty)$$

---

## Ejercicio 27 — Función inversa

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Dada $f(x) = \dfrac{3x - 2}{x + 5}$, verificá que $f$ es biyectiva en su dominio natural y hallá $f^{-1}(x)$.

### Resolución paso a paso

**Paso 1: Determinar el dominio de $f$.**
El denominador no puede ser cero: $x + 5 \neq 0 \Rightarrow x \neq -5$.

$$\text{Dom}(f) = \mathbb{R} \setminus \{-5\}$$

**Paso 2: Verificar inyectividad.**
Suponemos $f(x_1) = f(x_2)$:

$$\frac{3x_1 - 2}{x_1 + 5} = \frac{3x_2 - 2}{x_2 + 5}$$

$$(3x_1 - 2)(x_2 + 5) = (3x_2 - 2)(x_1 + 5)$$

$$3x_1 x_2 + 15x_1 - 2x_2 - 10 = 3x_1 x_2 + 15x_2 - 2x_1 - 10$$

$$15x_1 - 2x_2 + 2x_1 = 15x_2 \implies 17x_1 = 17x_2 \implies x_1 = x_2 \checkmark$$

$f$ es **inyectiva**.

**Paso 3: Despejar $x$ en función de $y$ para hallar $f^{-1}$.**

$$y = \frac{3x - 2}{x + 5}$$

$$y(x + 5) = 3x - 2$$

$$yx + 5y = 3x - 2$$

$$yx - 3x = -2 - 5y$$

$$x(y - 3) = -2 - 5y$$

$$x = \frac{-2 - 5y}{y - 3} = \frac{-(2 + 5y)}{y - 3}$$

**Paso 4: Escribir $f^{-1}$ y su dominio.**
Renombrando $y$ como $x$:

$$f^{-1}(x) = \frac{-5x - 2}{x - 3}$$

El dominio de $f^{-1}$ es $\mathbb{R} \setminus \{3\}$ (que coincide con la imagen de $f$).

### Respuesta Final

$$f^{-1}(x) = \frac{-5x - 2}{x - 3}, \qquad \text{Dom}(f^{-1}) = \mathbb{R} \setminus \{3\}$$

---

## Ejercicio

## Ejercicio 31 — Dominio de una función racional

**Dificultad:** ⭐ Básica

### Enunciado

Determiná el dominio de la función $f(x) = \dfrac{3x + 2}{x^2 - 5x + 6}$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
El dominio de una función racional $\frac{p(x)}{q(x)}$ es todo $\mathbb{R}$ excepto los valores donde el denominador se anula. Debemos resolver $q(x) = 0$.

**Paso 2: Plantear la ecuación del denominador.**
$$x^2 - 5x + 6 = 0$$

**Paso 3: Factorizar el denominador.**
Buscamos dos números cuyo producto sea $6$ y cuya suma sea $-5$: son $-2$ y $-3$.
$$x^2 - 5x + 6 = (x - 2)(x - 3)$$

**Paso 4: Hallar las raíces.**
$$(x - 2)(x - 3) = 0 \implies x = 2 \quad \text{o} \quad x = 3$$

**Paso 5: Escribir el dominio.**
Se excluyen $x = 2$ y $x = 3$ del conjunto de los reales.
$$\text{Dom}(f) = \mathbb{R} \setminus \{2,\, 3\}= (-\infty, 2) \cup (2, 3) \cup (3, +\infty)$$

### Respuesta Final

$$\text{Dom}(f) = (-\infty, 2) \cup (2, 3) \cup (3, +\infty)$$

---

## Ejercicio 32 — Evaluación e imagen de una función cuadrática

**Dificultad:** ⭐ Básica

### Enunciado

Dada $g(x) = 2x^2 - 3x + 1$, calculá $g(0)$, $g(-1)$ y $g(3)$. Luego determiná si $y = 10$ pertenece a la imagen de $g$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Evaluar una función significa sustituir el valor de $x$ en la expresión algebraica y operar. Para verificar si $y = 10$ pertenece a la imagen, planteamos $g(x) = 10$ y verificamos si tiene solución real.

**Paso 2: Calcular $g(0)$.**
$$g(0) = 2(0)^2 - 3(0) + 1 = 0 - 0 + 1 = 1$$

**Paso 3: Calcular $g(-1)$.**
$$g(-1) = 2(-1)^2 - 3(-1) + 1 = 2(1) + 3 + 1 = 6$$

**Paso 4: Calcular $g(3)$.**
$$g(3) = 2(3)^2 - 3(3) + 1 = 2(9) - 9 + 1 = 18 - 9 + 1 = 10$$

**Paso 5: Verificar si $y = 10$ pertenece a la imagen.**
Planteamos $g(x) = 10$:
$$2x^2 - 3x + 1 = 10 \implies 2x^2 - 3x - 9 = 0$$
Calculamos el discriminante: $\Delta = (-3)^2 - 4(2)(-9) = 9 + 72 = 81 > 0$.
Como $\Delta > 0$, existen soluciones reales ($x = 3$ es una de ellas, como ya calculamos).

### Respuesta Final

$$g(0) = 1, \qquad g(-1) = 6, \qquad g(3) = 10$$

El valor $y = 10$ **sí** pertenece a la imagen de $g$ (por ejemplo, $g(3) = 10$).

---

## Ejercicio 33 — Dominio de una función con raíz cuadrada y denominador

**Dificultad:** ⭐ Básica

### Enunciado

Determiná el dominio de $h(x) = \dfrac{\sqrt{x + 4}}{x - 1}$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
La función combina una raíz cuadrada y un denominador. La raíz impone que el radicando sea $\geq 0$, y el denominador impone que no sea $0$. El dominio es la intersección de ambas condiciones.

**Paso 2: Condición del radicando.**
$$x + 4 \geq 0 \implies x \geq -4$$
Esto da el conjunto $[-4, +\infty)$.

**Paso 3: Condición del denominador.**
$$x - 1 \neq 0 \implies x \neq 1$$

**Paso 4: Intersección de condiciones.**
Tomamos $x \geq -4$ y excluimos $x = 1$:
$$\text{Dom}(h) = [-4, 1) \cup (1, +\infty)$$

### Respuesta Final

$$\text{Dom}(h) = [-4, 1) \cup (1, +\infty)$$

---

## Ejercicio 34 — Composición de funciones

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Dadas $f(x) = x^2 + 1$ y $g(x) = \sqrt{2x - 3}$, calculá $(f \circ g)(x)$ y $(g \circ f)(x)$. Determiná el dominio de cada composición.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
La composición $(f \circ g)(x) = f(g(x))$ se obtiene sustituyendo $g(x)$ en lugar de $x$ en $f$. Análogamente para $(g \circ f)(x)$. El dominio se restringe según las condiciones de cada función.

**Paso 2: Calcular $(f \circ g)(x)$.**
$$f(g(x)) = f\!\left(\sqrt{2x-3}\right) = \left(\sqrt{2x-3}\right)^2 + 1 = (2x - 3) + 1 = 2x - 2$$

**Paso 3: Dominio de $(f \circ g)(x)$.**
Necesitamos que $g(x)$ esté definida: $2x - 3 \geq 0 \implies x \geq \tfrac{3}{2}$.
$$\text{Dom}(f \circ g) = \left[\tfrac{3}{2}, +\infty\right)$$

**Paso 4: Calcular $(g \circ f)(x)$.**
$$g(f(x)) = g(x^2 + 1) = \sqrt{2(x^2 + 1) - 3} = \sqrt{2x^2 + 2 - 3} = \sqrt{2x^2 - 1}$$

**Paso 5: Dominio de $(g \circ f)(x)$.**
Necesitamos $2x^2 - 1 \geq 0 \implies x^2 \geq \tfrac{1}{2} \implies |x| \geq \dfrac{1}{\sqrt{2}} = \dfrac{\sqrt{2}}{2}$.
$$\text{Dom}(g \circ f) = \left(-\infty,\, -\dfrac{\sqrt{2}}{2}\right] \cup \left[\dfrac{\sqrt{2}}{2},\, +\infty\right)$$

### Respuesta Final

$$(f \circ g)(x) = 2x - 2, \quad \text{Dom}(f \circ g) = \left[\tfrac{3}{2}, +\infty\right)$$

$$(g \circ f)(x) = \sqrt{2x^2 - 1}, \quad \text{Dom}(g \circ f) = \left(-\infty, -\dfrac{\sqrt{2}}{2}\right] \cup \left[\dfrac{\sqrt{2}}{2}, +\infty\right)$$

---

## Ejercicio 35 — Función inversa de una función lineal fraccionaria

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Dada $f(x) = \dfrac{2x + 1}{x - 3}$, encontrá la función inversa $f^{-1}(x)$ y verificá que $f(f^{-1}(x)) = x$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Para hallar la inversa, escribimos $y = f(x)$, despejamos $x$ en función de $y$, y luego intercambiamos $x$ e $y$. Verificamos componiendo.

**Paso 2: Plantear la ecuación y despejar $x$.**
$$y = \frac{2x + 1}{x - 3}$$
Multiplicamos ambos miembros por $(x - 3)$:
$$y(x - 3) = 2x + 1$$
$$xy - 3y = 2x + 1$$

**Paso 3: Agrupar términos con $x$.**
$$xy - 2x = 3y + 1$$
$$x(y - 2) = 3y + 1$$
$$x = \frac{3y + 1}{y - 2}$$

**Paso 4: Escribir la función inversa.**
Intercambiamos $x$ e $y$:
$$f^{-1}(x) = \frac{3x + 1}{x - 2}, \quad x \neq 2$$

**Paso 5: Verificar $f(f^{-1}(x)) = x$.**
$$f\!\left(\frac{3x+1}{x-2}\right) = \frac{2\cdot\dfrac{3x+1}{x-2} + 1}{\dfrac{3x+1}{x-2} - 3} = \frac{\dfrac{6x+2+x-2}{x-2}}{\dfrac{3x+1-3x+6}{x-2}} = \frac{7x}{7} = x \checkmark$$

### Respuesta Final

$$f^{-1}(x) = \frac{3x + 1}{x - 2}, \qquad \text{Dom}(f^{-1}) = \mathbb{R} \setminus \{2\}$$

---

## Ejercicio 36 — Análisis completo de una función cuadrática

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Para la función $f(x) = -x^2 + 4x + 5$, determiná: vértice, raíces, imagen, monotonía e intersección con los ejes.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se trata de una parábola con $a = -1 < 0$ (concavidad hacia abajo). Usamos las fórmulas del vértice $x_v = -\tfrac{b}{2a}$, la fórmula cuadrática para las raíces y analizamos el comportamiento.

**Paso 2: Hallar el vértice.**
$$x_v = -\frac{4}{2(-1)} = -\frac{4}{-2} = 2$$
$$y_v = f(2) = -(2)^2 + 4(2) + 5 = -4 + 8 + 5 = 9$$
$$\text{Vértice: } V = (2,\, 9)$$

**Paso 3: Hallar las raíces (ceros de $f$).**
$$-x^2 + 4x + 5 = 0 \implies x^2 - 4x - 5 = 0 \implies (x-5)(x+1) = 0$$
$$x_1 = 5 \qquad x_2 = -1$$

**Paso 4: Intersección con el eje $y$.**
$$f(0) = -(0)^2 + 4(0) + 5 = 5 \implies \text{punto } (0, 5)$$

**Paso 5: Imagen y monotonía.**
Como $a < 0$, la parábola abre hacia abajo: el vértice es un máximo.
- **Imagen:** $\text{Im}(f) = (-\infty,\, 9]$
- **Creciente** en $(-\infty, 2)$ y **decreciente** en $(2, +\infty)$.

### Respuesta Final

- **Vértice:** $V = (2, 9)$ (máximo)
- **Raíces:** $x = -1$ y $x = 5$
- **Intersección eje $y$:** $(0, 5)$
- **Imagen:** $(-\infty, 9]$
- **Creciente** en $(-\infty, 2)$; **decreciente** en $(2, +\infty)$

---

## Ejercicio 37 — Función a trozos: análisis y gráfico

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Dada la función definida a trozos:
$$f(x) = \begin{cases} x^2 - 1 & \text{si } x < 0 \\ 2x + 1 & \text{si } 0 \leq x \leq 3 \\ 8 & \text{si } x > 3 \end{cases}$$
Calculá $f(-2)$, $f(0)$, $f(3)$ y $f(5)$. Determiná si $f$ es continua en $x = 0$ y en $x = 3$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Para evaluar, se determina a qué tramo pertenece cada $x$ y se aplica la fórmula correspondiente. Para analizar continuidad en los puntos de cambio, se verifican los límites laterales y el valor de la función.

**Paso 2: Evaluar en cada punto.**
- $x = -2 < 0$: $f(-2) = (-2)^2 - 1 = 4 - 1 = 3$
- $x = 0 \in [0, 3]$: $f(0) = 2(0) + 1 = 1$
- $x = 3 \in [0, 3]$: $f(3) = 2(3) + 1 = 7$
- $x = 5 > 3$: $f(5) = 8$

**Paso 3: Analizar continuidad en $x = 0$.**
$$\lim_{x \to 0^-} f(x) = \lim_{x \to 0^-}(x^2 - 1) = 0 - 1 = -1$$
$$\lim_{x \to 0^+} f(x) = \lim_{x \to 0^+}(2x + 1) = 1$$
Como $\lim_{

## Ejercicio 41 — Dominio de una función racional

**Dificultad:** ⭐ Básica

### Enunciado

Hallá el dominio de la función $f(x) = \dfrac{3x + 1}{x^2 - 5x + 6}$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
El dominio de una función racional excluye los valores de $x$ que anulan el denominador, ya que la división por cero no está definida.

**Paso 2: Igualar el denominador a cero.**
$$x^2 - 5x + 6 = 0$$

**Paso 3: Factorizar el trinomio.**
Buscamos dos números cuyo producto sea $6$ y cuya suma sea $-5$: son $-2$ y $-3$.
$$x^2 - 5x + 6 = (x - 2)(x - 3) = 0$$

**Paso 4: Identificar los valores excluidos.**
$$(x - 2)(x - 3) = 0 \implies x = 2 \quad \text{o} \quad x = 3$$
Estos son los únicos valores donde el denominador se anula.

**Paso 5: Escribir el dominio.**
Se excluyen $x = 2$ y $x = 3$ del conjunto de los reales:
$$\text{Dom}(f) = \mathbb{R} \setminus \{2, 3\} = (-\infty, 2) \cup (2, 3) \cup (3, +\infty)$$

### Respuesta Final

$$\text{Dom}(f) = (-\infty, 2) \cup (2, 3) \cup (3, +\infty)$$

---

## Ejercicio 42 — Evaluación e imagen de una función cuadrática

**Dificultad:** ⭐ Básica

### Enunciado

Dada $f(x) = 2x^2 - 3x + 1$, calculá $f(0)$, $f(-1)$ y $f(3)$. Luego determiná si $y = 10$ pertenece a la imagen de $f$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Para evaluar una función, se sustituye el valor indicado en la expresión y se simplifica. Para verificar si $y = 10$ pertenece a la imagen, se plantea $f(x) = 10$ y se analiza si la ecuación tiene solución real.

**Paso 2: Calcular $f(0)$.**
$$f(0) = 2(0)^2 - 3(0) + 1 = 0 - 0 + 1 = 1$$

**Paso 3: Calcular $f(-1)$.**
$$f(-1) = 2(-1)^2 - 3(-1) + 1 = 2(1) + 3 + 1 = 6$$

**Paso 4: Calcular $f(3)$.**
$$f(3) = 2(3)^2 - 3(3) + 1 = 2(9) - 9 + 1 = 18 - 9 + 1 = 10$$

**Paso 5: Verificar si $y = 10$ pertenece a la imagen.**
Como $f(3) = 10$, existe al menos un $x = 3$ tal que $f(x) = 10$. Por lo tanto, $10 \in \text{Im}(f)$.

### Respuesta Final

$$f(0) = 1, \quad f(-1) = 6, \quad f(3) = 10$$
El valor $y = 10$ **sí** pertenece a la imagen de $f$, ya que $f(3) = 10$.

---

## Ejercicio 43 — Dominio de una función con raíz cuadrada y denominador

**Dificultad:** ⭐ Básica

### Enunciado

Determiná el dominio de $g(x) = \dfrac{\sqrt{x + 4}}{x - 1}$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
La expresión tiene dos restricciones simultáneas: el radicando de una raíz cuadrada debe ser **no negativo** ($\geq 0$), y el denominador no puede ser **cero**.

**Paso 2: Condición sobre el radicando.**
$$x + 4 \geq 0 \implies x \geq -4$$
En notación de intervalo: $[-4, +\infty)$.

**Paso 3: Condición sobre el denominador.**
$$x - 1 \neq 0 \implies x \neq 1$$

**Paso 4: Intersectar ambas condiciones.**
El dominio es el conjunto de $x$ que satisface **ambas** condiciones simultáneamente:
$$x \geq -4 \quad \text{y} \quad x \neq 1$$

**Paso 5: Escribir el dominio en notación de intervalos.**
$$\text{Dom}(g) = [-4, 1) \cup (1, +\infty)$$

### Respuesta Final

$$\text{Dom}(g) = [-4, 1) \cup (1, +\infty)$$

---

## Ejercicio 44 — Composición de funciones

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Dadas $f(x) = x^2 + 1$ y $g(x) = \sqrt{2x - 3}$, calculá $(f \circ g)(x)$ y $(g \circ f)(x)$. Determiná el dominio de cada composición.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
La composición $(f \circ g)(x) = f(g(x))$ significa aplicar primero $g$ y luego $f$. Para $(g \circ f)(x) = g(f(x))$ es al revés. El dominio de cada composición surge de las restricciones propias de cada función involucrada.

**Paso 2: Calcular $(f \circ g)(x)$.**
$$f(g(x)) = f\!\left(\sqrt{2x-3}\right) = \left(\sqrt{2x-3}\right)^2 + 1 = (2x - 3) + 1 = 2x - 2$$

**Paso 3: Dominio de $(f \circ g)(x)$.**
La restricción proviene de $g(x) = \sqrt{2x-3}$, que exige $2x - 3 \geq 0$:
$$2x - 3 \geq 0 \implies x \geq \tfrac{3}{2}$$
$$\text{Dom}(f \circ g) = \left[\tfrac{3}{2}, +\infty\right)$$

**Paso 4: Calcular $(g \circ f)(x)$.**
$$g(f(x)) = g(x^2 + 1) = \sqrt{2(x^2 + 1) - 3} = \sqrt{2x^2 + 2 - 3} = \sqrt{2x^2 - 1}$$

**Paso 5: Dominio de $(g \circ f)(x)$.**
Se necesita $2x^2 - 1 \geq 0$:
$$x^2 \geq \frac{1}{2} \implies |x| \geq \frac{1}{\sqrt{2}} = \frac{\sqrt{2}}{2}$$
$$\text{Dom}(g \circ f) = \left(-\infty, -\frac{\sqrt{2}}{2}\right] \cup \left[\frac{\sqrt{2}}{2}, +\infty\right)$$

### Respuesta Final

$$(f \circ g)(x) = 2x - 2, \quad \text{Dom}(f \circ g) = \left[\dfrac{3}{2}, +\infty\right)$$

$$(g \circ f)(x) = \sqrt{2x^2 - 1}, \quad \text{Dom}(g \circ f) = \left(-\infty, -\dfrac{\sqrt{2}}{2}\right] \cup \left[\dfrac{\sqrt{2}}{2}, +\infty\right)$$

---

## Ejercicio 45 — Función par, impar o ninguna

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Clasificá cada una de las siguientes funciones como par, impar o ninguna de las dos:
$$h(x) = x^3 - 4x \qquad \text{y} \qquad k(x) = x^2 + 3x - 1$$

### Resolución paso a paso

**Paso 1: Recordar las definiciones.**
- $f$ es **par** si $f(-x) = f(x)$ para todo $x$ en el dominio (simétrica respecto al eje $y$).
- $f$ es **impar** si $f(-x) = -f(x)$ para todo $x$ en el dominio (simétrica respecto al origen).

**Paso 2: Analizar $h(x) = x^3 - 4x$. Calcular $h(-x)$.**
$$h(-x) = (-x)^3 - 4(-x) = -x^3 + 4x = -(x^3 - 4x) = -h(x)$$

**Paso 3: Clasificar $h$.**
Como $h(-x) = -h(x)$, la función $h$ es **impar**.

**Paso 4: Analizar $k(x) = x^2 + 3x - 1$. Calcular $k(-x)$.**
$$k(-x) = (-x)^2 + 3(-x) - 1 = x^2 - 3x - 1$$

**Paso 5: Comparar con $k(x)$ y $-k(x)$.**
$$k(x) = x^2 + 3x - 1 \neq k(-x) \implies \text{no es par}$$
$$-k(x) = -x^2 - 3x + 1 \neq k(-x) \implies \text{no es impar}$$
La función $k$ no es ni par ni impar.

### Respuesta Final

- $h(x) = x^3 - 4x$ es **impar**, ya que $h(-x) = -h(x)$.
- $k(x) = x^2 + 3x - 1$ **no es par ni impar**.

---

## Ejercicio 46 — Función inversa

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Hallá la función inversa de $f(x) = \dfrac{2x + 5}{x - 3}$ y verificá que $(f \circ f^{-1})(x) = x$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Para hallar $f^{-1}$, se escribe $y = f(x)$, se despeja $x$ en función de $y$ y luego se intercambia la notación $x \leftrightarrow y$.

**Paso 2: Plantear $y = f(x)$ y despejar $x$.**
$$y = \frac{2x + 5}{x - 3}$$
Multiplicamos ambos miembros por $(x - 3)$:
$$y(x - 3) = 2x + 5$$
$$xy - 3y = 2x + 5$$

**Paso 3: Agrupar los términos con $x$.**
$$xy - 2x = 3y + 5$$
$$x(y - 2) = 3y + 5$$
$$x = \frac{3y + 5}{y - 2}$$

**Paso 4: Escribir $f^{-1}(x)$.**
Intercambiando $x$ e $y$:
$$f^{-1}(x) = \frac{3x + 5}{x - 2}$$

**Paso 5: Verificar $(f \circ f^{-1})(x) = x$.**
$$f\!\left(f^{-1}(x)\right) = f\!\left(\frac{3x+5}{x-2}\right) = \frac{2\cdot\dfrac{3x+5}{x-2} + 5}{\dfrac{3x+5}{x-2} - 3}$$
Numerador: $\dfrac{6x + 10 + 5(x-2)}{x-2} = \dfrac{6x+10+5x-10}{x-2} = \dfrac{11x}{x-2}$

Denominador: $\dfrac{3x+5 - 3(x-2)}{x-2} = \dfrac{3x+5-3x+6}{x-2} = \dfrac{11}{x-2}$

$$f\!\left(f^{-1}(x)\right) = \frac{\;\dfrac{11x}{x-2}\;}{\;\dfrac{11}{x-2}\;} = \frac{11x}{11} = x \checkmark$$

### Respuesta Final

$$f^{-1}(x) = \frac{3x + 5}{x - 2}, \quad \text{Dom}(f^{-1}) = \mathbb{R} \setminus \{2\}$$

La verificación confirma que $(f \circ f^{-1})(x) = x$.

---

## Ejercicio 47 — Gráfico e imagen de una función a tramos

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Dada la función definida por tramos:
$$f(x) = \begin{cases} -x + 2 & \text{si } x < 0 \\ x^2 - 1 & \text{si } 0 \leq x \leq 2 \\ 3 & \text{si } x > 2 \end{cases}$$
Determiná $f(-3)$, $f(0)$, $f(1)$, $f(2)$, $f(5)$, y la imagen de $f$.

### Resolución paso a paso

**Paso 1: Identificar qué tramo corresponde a cada valor.**
Se selecciona la expresión cuya condición se cumple para el $x$ pedido.

**Paso 2: Calcular los valores puntuales.**
- $x = -3 < 0$: $f(-3) = -(-3) + 2 = 3 + 2 = 5$
- $x = 0 \in [0, 2]$: $f(0) = (0)^2 - 1 = -1$
- $x = 1 \in [0, 2]$: $f(1) = (1)^2 - 1 = 0$
- $x = 2 \in [0, 2]$: $f(2) = (2)^2 - 1 = 3$
- $x = 5 > 2$: $f(5) = 3$

**Paso 3: Analizar la imagen del primer tramo ($x < 0$).**
$f(x) = -x + 2$ es decreciente. Cuando $x \to -\infty$, $f \to +\infty$. Cuando $x \to 0^

## Ejercicio 51 — Dominio de una función racional

**Dificultad:** ⭐ Básica

### Enunciado

Hallá el dominio de la función $f(x) = \dfrac{3x - 1}{x^2 - 5x + 6}$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Para una función racional $\frac{P(x)}{Q(x)}$, el dominio es $\mathbb{R}$ menos los valores donde el denominador se anula, ya que la división por cero no está definida.

**Paso 2: Igualar el denominador a cero.**
$$x^2 - 5x + 6 = 0$$

**Paso 3: Factorizar el trinomio.**
Buscamos dos números cuyo producto sea $6$ y cuya suma sea $-5$: son $-2$ y $-3$.
$$x^2 - 5x + 6 = (x - 2)(x - 3) = 0$$

**Paso 4: Obtener los valores excluidos.**
$$(x - 2)(x - 3) = 0 \implies x = 2 \quad \text{o} \quad x = 3$$

**Paso 5: Escribir el dominio.**
Se excluyen $x = 2$ y $x = 3$ del conjunto de los reales.
$$\text{Dom}(f) = \mathbb{R} \setminus \{2,\, 3\} = (-\infty, 2) \cup (2, 3) \cup (3, +\infty)$$

### Respuesta Final

$$\text{Dom}(f) = (-\infty,\, 2) \cup (2,\, 3) \cup (3,\, +\infty)$$

---

## Ejercicio 52 — Evaluación e imagen de una función cuadrática

**Dificultad:** ⭐ Básica

### Enunciado

Dada $f(x) = 2x^2 - 3x + 1$, calculá $f(0)$, $f(-1)$, $f(3)$ y determiná si $y = 10$ pertenece a la imagen de $f$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Para evaluar, se sustituye el valor de $x$ en la expresión. Para decidir si $y = 10$ pertenece a la imagen, se plantea la ecuación $f(x) = 10$ y se verifica si tiene solución real.

**Paso 2: Calcular $f(0)$.**
$$f(0) = 2(0)^2 - 3(0) + 1 = 0 - 0 + 1 = 1$$

**Paso 3: Calcular $f(-1)$.**
$$f(-1) = 2(-1)^2 - 3(-1) + 1 = 2(1) + 3 + 1 = 6$$

**Paso 4: Calcular $f(3)$.**
$$f(3) = 2(3)^2 - 3(3) + 1 = 2(9) - 9 + 1 = 18 - 9 + 1 = 10$$

**Paso 5: Verificar si $y = 10$ pertenece a la imagen.**
Como $f(3) = 10$, existe $x = 3 \in \mathbb{R}$ tal que $f(x) = 10$. Por lo tanto, $10 \in \text{Im}(f)$.

### Respuesta Final

$$f(0) = 1, \quad f(-1) = 6, \quad f(3) = 10$$

El valor $y = 10$ **sí** pertenece a la imagen de $f$, ya que $f(3) = 10$.

---

## Ejercicio 53 — Dominio de una función con raíz e inverso

**Dificultad:** ⭐ Básica

### Enunciado

Hallá el dominio de $g(x) = \dfrac{\sqrt{2x - 4}}{x - 7}$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Hay dos restricciones simultáneas: el radicando debe ser no negativo (condición de la raíz cuadrada) y el denominador debe ser no nulo. El dominio es la intersección de ambas condiciones.

**Paso 2: Condición de la raíz cuadrada.**
$$2x - 4 \geq 0 \implies 2x \geq 4 \implies x \geq 2$$
Primera restricción: $x \in [2, +\infty)$.

**Paso 3: Condición del denominador.**
$$x - 7 \neq 0 \implies x \neq 7$$

**Paso 4: Intersecar ambas condiciones.**
Tomamos $x \in [2, +\infty)$ y excluimos $x = 7$:
$$\text{Dom}(g) = [2, +\infty) \setminus \{7\} = [2,\, 7) \cup (7,\, +\infty)$$

### Respuesta Final

$$\text{Dom}(g) = [2,\, 7) \cup (7,\, +\infty)$$

---

## Ejercicio 54 — Composición de funciones

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Dadas $f(x) = x^2 + 1$ y $g(x) = \sqrt{x - 3}$, calculá $(g \circ f)(x)$ y $(f \circ g)(x)$. Determiná el dominio de cada composición.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
$(g \circ f)(x) = g(f(x))$ significa aplicar primero $f$ y luego $g$. $(f \circ g)(x) = f(g(x))$ significa aplicar primero $g$ y luego $f$. La composición no es conmutativa en general.

**Paso 2: Calcular $(g \circ f)(x)$.**
$$g(f(x)) = g(x^2 + 1) = \sqrt{(x^2 + 1) - 3} = \sqrt{x^2 - 2}$$

**Paso 3: Dominio de $(g \circ f)(x)$.**
Necesitamos que el radicando sea no negativo:
$$x^2 - 2 \geq 0 \implies x^2 \geq 2 \implies |x| \geq \sqrt{2}$$
$$\text{Dom}(g \circ f) = (-\infty,\, -\sqrt{2}\,] \cup [\sqrt{2},\, +\infty)$$

**Paso 4: Calcular $(f \circ g)(x)$.**
$$f(g(x)) = f\!\left(\sqrt{x-3}\right) = \left(\sqrt{x-3}\right)^2 + 1 = (x - 3) + 1 = x - 2$$

**Paso 5: Dominio de $(f \circ g)(x)$.**
El dominio de $g$ exige $x - 3 \geq 0$, es decir $x \geq 3$. Aunque la expresión final $x - 2$ parezca definida en todo $\mathbb{R}$, debemos respetar la restricción original:
$$\text{Dom}(f \circ g) = [3,\, +\infty)$$

### Respuesta Final

$$\boxed{(g \circ f)(x) = \sqrt{x^2 - 2}, \quad \text{Dom} = (-\infty,\, -\sqrt{2}] \cup [\sqrt{2},\, +\infty)}$$

$$\boxed{(f \circ g)(x) = x - 2, \quad \text{Dom} = [3,\, +\infty)}$$

---

## Ejercicio 55 — Función lineal: ecuación a partir de dos puntos

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Encontrá la ecuación de la función lineal $f(x) = ax + b$ que pasa por los puntos $A(-2,\, 7)$ y $B(4,\, -5)$. Luego determiná las intersecciones con los ejes.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Una función lineal queda determinada por su pendiente $a$ y su ordenada al origen $b$. Usamos los dos puntos para calcular $a$ y luego despejamos $b$.

**Paso 2: Calcular la pendiente $a$.**
$$a = \frac{y_B - y_A}{x_B - x_A} = \frac{-5 - 7}{4 - (-2)} = \frac{-12}{6} = -2$$

**Paso 3: Calcular la ordenada al origen $b$.**
Usando el punto $A(-2, 7)$:
$$7 = -2(-2) + b \implies 7 = 4 + b \implies b = 3$$

**Paso 4: Escribir la función.**
$$f(x) = -2x + 3$$

**Paso 5: Intersección con el eje $y$ (ordenada al origen).**
$$f(0) = -2(0) + 3 = 3 \implies \text{punto } (0,\, 3)$$

**Paso 6: Intersección con el eje $x$ (raíz).**
$$-2x + 3 = 0 \implies x = \frac{3}{2} \implies \text{punto } \left(\frac{3}{2},\, 0\right)$$

### Respuesta Final

$$f(x) = -2x + 3$$

- Intersección con eje $y$: $(0,\ 3)$
- Intersección con eje $x$: $\left(\dfrac{3}{2},\ 0\right)$

---

## Ejercicio 56 — Función cuadrática: vértice, raíces y gráfica

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Dada $f(x) = -x^2 + 4x + 5$, encontrá el vértice, las raíces, los intervalos de positividad y negatividad, y la imagen de $f$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
La parábola $f(x) = ax^2 + bx + c$ tiene vértice en $x_v = -\frac{b}{2a}$. Las raíces se obtienen con la fórmula cuadrática. Como $a = -1 < 0$, la parábola es cóncava hacia abajo y el vértice es un máximo.

**Paso 2: Calcular el vértice.**
Con $a = -1$, $b = 4$, $c = 5$:
$$x_v = -\frac{4}{2(-1)} = -\frac{4}{-2} = 2$$
$$y_v = f(2) = -(2)^2 + 4(2) + 5 = -4 + 8 + 5 = 9$$
Vértice: $(2,\, 9)$.

**Paso 3: Calcular las raíces con la fórmula cuadrática.**
$$\Delta = b^2 - 4ac = 16 - 4(-1)(5) = 16 + 20 = 36$$
$$x = \frac{-4 \pm \sqrt{36}}{2(-1)} = \frac{-4 \pm 6}{-2}$$
$$x_1 = \frac{-4 + 6}{-2} = \frac{2}{-2} = -1, \qquad x_2 = \frac{-4 - 6}{-2} = \frac{-10}{-2} = 5$$

**Paso 4: Determinar intervalos de positividad y negatividad.**
Como la parábola es cóncava hacia abajo y tiene raíces en $x = -1$ y $x = 5$:
- $f(x) > 0$ para $x \in (-1,\, 5)$
- $f(x) < 0$ para $x \in (-\infty,\, -1) \cup (5,\, +\infty)$

**Paso 5: Determinar la imagen.**
El valor máximo es $y_v = 9$ (en el vértice) y la parábola se extiende hacia $-\infty$:
$$\text{Im}(f) = (-\infty,\, 9]$$

### Respuesta Final

- **Vértice:** $(2,\ 9)$ (máximo)
- **Raíces:** $x = -1$ y $x = 5$
- **Positividad:** $x \in (-1,\ 5)$; **Negatividad:** $x \in (-\infty,\ -1) \cup (5,\ +\infty)$
- **Imagen:** $\text{Im}(f) = (-\infty,\ 9]$

---

## Ejercicio 57 — Función par, impar o ninguna

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Clasificá cada función como par, impar o ninguna de las dos:

**(a)** $f(x) = x^4 - 3x^2 + 1$ $\quad$ **(b)** $g(x) = 2x^3 - x$ $\quad$ **(c)** $h(x) = x^2 + x - 1$

### Resolución paso a paso

**Paso 1: Recordar las definiciones.**
Una función es **par** si $f(-x) = f(x)$ para todo $x$ en su dominio (simétrica respecto al eje $y$). Es **impar** si $f(-x) = -f(x)$ (simétrica respecto al origen).

**Paso 2: Analizar $f(x) = x^4 - 3x^2 + 1$.**
$$f(-x) = (-x)^4 - 3(-x)^2 + 1 = x^4 - 3x^2 + 1 = f(x)$$
Como $f(-x) = f(x)$, la función **es par**.

**Paso 3: Analizar $g(x) = 2x^3 - x$.**
$$g(-x) = 2(-x)^3 - (-x) = -2x^3 + x = -(2x^3 - x) = -g(x)$$
Como $g(-x) = -g(x)$, la función **es impar**.

**Paso 4: Analizar $h(x) = x^2 + x - 1$.**
$$h(-x) = (-x)^2 + (-x) - 1 = x^2 - x - 1$$
Comparamos: $h(-x) = x^2 - x - 1 \neq h(x) = x^2 + x - 1$ (no es par).
$$-h(x) = -(x^2 + x - 1) = -x^2 - x + 1 \neq h(-x)$

## Ejercicio 61 — Dominio de una función racional

**Dificultad:** ⭐ Básica

### Enunciado

Hallá el dominio de la función $f(x) = \dfrac{3x + 2}{x^2 - 5x + 6}$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
El dominio de una función racional es $\mathbb{R}$ menos los valores de $x$ que anulan el denominador (división por cero no está definida).

**Paso 2: Plantear la condición de exclusión.**
Debemos encontrar los $x$ tales que:
$$x^2 - 5x + 6 = 0$$

**Paso 3: Factorizar el denominador.**
Buscamos dos números cuyo producto sea $6$ y cuya suma sea $-5$: son $-2$ y $-3$.
$$x^2 - 5x + 6 = (x - 2)(x - 3)$$

**Paso 4: Resolver la ecuación.**
$$(x - 2)(x - 3) = 0 \implies x = 2 \quad \text{o} \quad x = 3$$

**Paso 5: Escribir el dominio.**
Se excluyen $x = 2$ y $x = 3$:
$$\text{Dom}(f) = \mathbb{R} \setminus \{2,\, 3\} = (-\infty, 2) \cup (2, 3) \cup (3, +\infty)$$

### Respuesta Final

$$\text{Dom}(f) = (-\infty,\, 2)\cup(2,\, 3)\cup(3,\,+\infty)$$

---

## Ejercicio 62 — Evaluación e imagen de una función cuadrática

**Dificultad:** ⭐ Básica

### Enunciado

Dada $f(x) = 2x^2 - 4x + 1$, calculá $f(0)$, $f(-1)$ y $f(3)$. Luego determiná si $y = 7$ pertenece a la imagen de $f$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Evaluar una función significa sustituir el valor de $x$ en la expresión algebraica y operar. Para verificar si $y = 7$ está en la imagen, se resuelve $f(x) = 7$.

**Paso 2: Calcular $f(0)$.**
$$f(0) = 2(0)^2 - 4(0) + 1 = 0 - 0 + 1 = 1$$

**Paso 3: Calcular $f(-1)$.**
$$f(-1) = 2(-1)^2 - 4(-1) + 1 = 2(1) + 4 + 1 = 7$$

**Paso 4: Calcular $f(3)$.**
$$f(3) = 2(3)^2 - 4(3) + 1 = 2(9) - 12 + 1 = 18 - 12 + 1 = 7$$

**Paso 5: Verificar si $y = 7$ pertenece a la imagen.**
Planteamos $2x^2 - 4x + 1 = 7$:
$$2x^2 - 4x - 6 = 0 \implies x^2 - 2x - 3 = 0 \implies (x-3)(x+1) = 0$$
$$x = 3 \quad \text{o} \quad x = -1$$
Como existen valores reales de $x$ que verifican la ecuación, $y = 7$ **sí** pertenece a la imagen.

### Respuesta Final

$$f(0) = 1, \quad f(-1) = 7, \quad f(3) = 7$$
$y = 7$ **pertenece** a la imagen de $f$ (alcanzado en $x = -1$ y $x = 3$).

---

## Ejercicio 63 — Dominio de una función con raíz cuadrada y denominador

**Dificultad:** ⭐ Básica

### Enunciado

Determiná el dominio de $g(x) = \dfrac{\sqrt{2x - 6}}{x - 5}$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Hay dos condiciones simultáneas: el radicando debe ser $\geq 0$ (raíz cuadrada definida en $\mathbb{R}$) y el denominador debe ser $\neq 0$.

**Paso 2: Condición del radicando.**
$$2x - 6 \geq 0 \implies 2x \geq 6 \implies x \geq 3$$
Esto da el intervalo $[3, +\infty)$.

**Paso 3: Condición del denominador.**
$$x - 5 \neq 0 \implies x \neq 5$$

**Paso 4: Intersectar ambas condiciones.**
Partimos de $x \geq 3$ y excluimos $x = 5$:
$$\text{Dom}(g) = [3, +\infty) \setminus \{5\} = [3, 5) \cup (5, +\infty)$$

### Respuesta Final

$$\text{Dom}(g) = [3,\, 5)\cup(5,\,+\infty)$$

---

## Ejercicio 64 — Composición de funciones

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Dadas $f(x) = \sqrt{x + 4}$ y $g(x) = x^2 - 1$, calculá $(f \circ g)(x)$ y $(g \circ f)(x)$. Determiná el dominio de cada composición.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
$(f \circ g)(x) = f(g(x))$: se sustituye $g(x)$ como argumento de $f$. Luego se analiza para qué $x$ la expresión resultante está definida.

**Paso 2: Calcular $(f \circ g)(x)$.**
$$f(g(x)) = f(x^2 - 1) = \sqrt{(x^2 - 1) + 4} = \sqrt{x^2 + 3}$$

**Paso 3: Dominio de $(f \circ g)(x)$.**
Necesitamos $x^2 + 3 \geq 0$. Como $x^2 \geq 0$ para todo $x \in \mathbb{R}$, se tiene $x^2 + 3 \geq 3 > 0$ siempre.
$$\text{Dom}(f \circ g) = \mathbb{R}$$

**Paso 4: Calcular $(g \circ f)(x)$.**
$$g(f(x)) = g(\sqrt{x+4}) = (\sqrt{x+4})^2 - 1 = (x + 4) - 1 = x + 3$$

**Paso 5: Dominio de $(g \circ f)(x)$.**
Primero debe estar definida $f(x) = \sqrt{x+4}$, lo que exige $x + 4 \geq 0$, es decir $x \geq -4$.
$$\text{Dom}(g \circ f) = [-4, +\infty)$$

**Paso 6: Verificar que las composiciones son distintas.**
$(f \circ g)(x) = \sqrt{x^2 + 3} \neq x + 3 = (g \circ f)(x)$, lo que confirma que la composición **no es conmutativa** en general.

### Respuesta Final

$$(f \circ g)(x) = \sqrt{x^2 + 3}, \quad \text{Dom}(f \circ g) = \mathbb{R}$$
$$(g \circ f)(x) = x + 3, \quad \text{Dom}(g \circ f) = [-4,\, +\infty)$$

---

## Ejercicio 65 — Función par, impar o ninguna

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Clasificá cada función como par, impar o ninguna de las dos:
$$f(x) = x^4 - 3x^2 + 5, \qquad g(x) = x^3 + 2x, \qquad h(x) = x^2 + x - 1$$

### Resolución paso a paso

**Paso 1: Recordar las definiciones.**
- $f$ es **par** si $f(-x) = f(x)$ para todo $x$ en su dominio.
- $f$ es **impar** si $f(-x) = -f(x)$ para todo $x$ en su dominio.
- Si no cumple ninguna de las dos condiciones, no tiene paridad.

**Paso 2: Analizar $f(x) = x^4 - 3x^2 + 5$.**
$$f(-x) = (-x)^4 - 3(-x)^2 + 5 = x^4 - 3x^2 + 5 = f(x)$$
Como $f(-x) = f(x)$, la función $f$ es **par**.

**Paso 3: Analizar $g(x) = x^3 + 2x$.**
$$g(-x) = (-x)^3 + 2(-x) = -x^3 - 2x = -(x^3 + 2x) = -g(x)$$
Como $g(-x) = -g(x)$, la función $g$ es **impar**.

**Paso 4: Analizar $h(x) = x^2 + x - 1$.**
$$h(-x) = (-x)^2 + (-x) - 1 = x^2 - x - 1$$
Verificamos: $h(-x) = x^2 - x - 1 \neq x^2 + x - 1 = h(x)$, así que no es par.
$$-h(x) = -(x^2 + x - 1) = -x^2 - x + 1 \neq x^2 - x - 1 = h(-x)$$
Tampoco es impar. La función $h$ **no es ni par ni impar**.

### Respuesta Final

- $f(x) = x^4 - 3x^2 + 5$: **par**.
- $g(x) = x^3 + 2x$: **impar**.
- $h(x) = x^2 + x - 1$: **ninguna de las dos**.

---

## Ejercicio 66 — Función inversa de una función lineal–racional

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Hallá la función inversa de $f(x) = \dfrac{2x + 1}{x - 3}$ y determiná su dominio e imagen.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Para obtener $f^{-1}(x)$, escribimos $y = f(x)$, despejamos $x$ en función de $y$, y luego intercambiamos los roles: $f^{-1}(x)$ será la expresión obtenida con $x$ en lugar de $y$.

**Paso 2: Plantear la ecuación.**
$$y = \frac{2x + 1}{x - 3}$$

**Paso 3: Despejar $x$.**
Multiplicamos ambos miembros por $(x - 3)$:
$$y(x - 3) = 2x + 1$$
$$yx - 3y = 2x + 1$$
$$yx - 2x = 3y + 1$$
$$x(y - 2) = 3y + 1$$
$$x = \frac{3y + 1}{y - 2}$$

**Paso 4: Escribir la inversa.**
Intercambiamos $x$ e $y$:
$$f^{-1}(x) = \frac{3x + 1}{x - 2}$$

**Paso 5: Dominio e imagen de $f^{-1}$.**
El dominio de $f^{-1}$ excluye los valores que anulan su denominador: $x - 2 = 0 \Rightarrow x = 2$.
$$\text{Dom}(f^{-1}) = \mathbb{R} \setminus \{2\}$$
La imagen de $f^{-1}$ coincide con el dominio de $f$:
$$\text{Im}(f^{-1}) = \mathbb{R} \setminus \{3\}$$

**Paso 6: Verificación.**
$(f \circ f^{-1})(x) = f\!\left(\dfrac{3x+1}{x-2}\right) = \dfrac{2\cdot\frac{3x+1}{x-2}+1}{\frac{3x+1}{x-2}-3} = \dfrac{\frac{6x+2+x-2}{x-2}}{\frac{3x+1-3x+6}{x-2}} = \dfrac{7x}{7} = x$ ✓

### Respuesta Final

$$f^{-1}(x) = \frac{3x + 1}{x - 2}, \quad \text{Dom}(f^{-1}) = \mathbb{R}\setminus\{2\}, \quad \text{Im}(f^{-1}) = \mathbb{R}\setminus\{3\}$$

---

## Ejercicio 67 — Gráfico y propiedades de una función cuadrática

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Dada $f(x) = -x^2 + 4x + 5$, determiná vértice, raíces, ordenada al origen, intervalo de crecimiento/decrecimiento e imagen de la función.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Es una parábola con $a = -1 < 0$ (concavidad hacia abajo). Calculamos el vértice con la fórmula $x_V = -\dfrac{b}{2a}$, las raíces con la fórmula cuadrática, y la imagen a partir del vértice.

**Paso 2: Vértice.**
$$x_V = -\frac{4}{2 \cdot (-1)} = -\frac{4}{-2} = 2$$
$$y_V = f(2) = -(2)^2 + 4(2) + 5 = -4 + 8 + 5 = 9$$
$$\text{Vértice: } V(2,\, 9)$$

**Paso 3: Raíces (ceros de $f$).**
$$-x^2 + 4x + 5 = 0 \implies x^2 - 4x - 5 = 0 \implies (x-5)(x+1) = 0$$
$$x_1 = 5, \quad x_2 = -1$$

**Paso 4: Ordenada al origen.**
$$f(0) = -(0)^2 + 4(0) +

## Ejercicio 71 — Dominio de una función racional

**Dificultad:** ⭐ Básica

### Enunciado

Hallá el dominio de la función $f(x) = \dfrac{3x - 1}{x^2 - 5x + 6}$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
El dominio de una función racional es todo $\mathbb{R}$ excepto los valores que anulan el denominador. Hay que resolver $x^2 - 5x + 6 = 0$.

**Paso 2: Factorizar el denominador.**
Buscamos dos números que multiplicados den $6$ y sumados den $-5$: son $-2$ y $-3$.

$$x^2 - 5x + 6 = (x - 2)(x - 3)$$

**Paso 3: Encontrar los valores excluidos.**
$(x - 2)(x - 3) = 0 \Rightarrow x = 2 \quad \text{o} \quad x = 3$

**Paso 4: Escribir el dominio.**
Se excluyen del dominio los valores $x = 2$ y $x = 3$.

$$\text{Dom}(f) = \mathbb{R} \setminus \{2,\, 3\} = (-\infty, 2) \cup (2, 3) \cup (3, +\infty)$$

### Respuesta Final

$$\text{Dom}(f) = (-\infty, 2) \cup (2, 3) \cup (3, +\infty)$$

---

## Ejercicio 72 — Dominio de una función con raíz e inversa

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Hallá el dominio de la función $g(x) = \dfrac{\sqrt{2x + 8}}{x^2 - 9}$.

### Resolución paso a paso

**Paso 1: Identificar las restricciones.**
Hay dos condiciones simultáneas:
- El radicando debe ser $\geq 0$: $2x + 8 \geq 0$.
- El denominador no puede ser cero: $x^2 - 9 \neq 0$.

**Paso 2: Resolver la condición de la raíz.**

$$2x + 8 \geq 0 \Rightarrow 2x \geq -8 \Rightarrow x \geq -4$$

El conjunto que satisface esto es $[-4, +\infty)$.

**Paso 3: Resolver la condición del denominador.**

$$x^2 - 9 = 0 \Rightarrow (x-3)(x+3) = 0 \Rightarrow x = 3 \quad \text{o} \quad x = -3$$

Se excluyen $x = 3$ y $x = -3$.

**Paso 4: Intersectar las condiciones.**
Partimos de $[-4, +\infty)$ y eliminamos $x = -3$ y $x = 3$:

$$\text{Dom}(g) = [-4, +\infty) \setminus \{-3,\, 3\}$$

**Paso 5: Escribir en forma de unión de intervalos.**

$$\text{Dom}(g) = [-4, -3) \cup (-3, 3) \cup (3, +\infty)$$

### Respuesta Final

$$\text{Dom}(g) = [-4, -3) \cup (-3, 3) \cup (3, +\infty)$$

---

## Ejercicio 73 — Evaluación e imagen de una función cuadrática

**Dificultad:** ⭐ Básica

### Enunciado

Dada $f(x) = -2x^2 + 8x - 3$, calculá $f(0)$, $f(1)$, $f(2)$ y $f(-1)$, e indicá el rango de la función.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se sustituye cada valor de $x$ en la expresión. Luego se analiza el rango usando el vértice de la parábola, ya que el coeficiente principal es negativo ($a = -2 < 0$, parábola cóncava hacia abajo).

**Paso 2: Calcular cada evaluación.**

$$f(0) = -2(0)^2 + 8(0) - 3 = -3$$

$$f(1) = -2(1)^2 + 8(1) - 3 = -2 + 8 - 3 = 3$$

$$f(2) = -2(2)^2 + 8(2) - 3 = -8 + 16 - 3 = 5$$

$$f(-1) = -2(-1)^2 + 8(-1) - 3 = -2 - 8 - 3 = -13$$

**Paso 3: Hallar el vértice para determinar el máximo.**
La abscisa del vértice es $x_v = -\dfrac{b}{2a} = -\dfrac{8}{2(-2)} = -\dfrac{8}{-4} = 2$.

$$f(2) = 5 \quad \text{(ya calculado, es el valor máximo)}$$

**Paso 4: Determinar el rango.**
Como $a < 0$, la parábola abre hacia abajo y el valor máximo es $f(2) = 5$. La función toma todos los valores menores o iguales a $5$.

$$\text{Im}(f) = (-\infty,\, 5]$$

### Respuesta Final

$f(0) = -3$, $\quad f(1) = 3$, $\quad f(2) = 5$, $\quad f(-1) = -13$.

$$\text{Im}(f) = (-\infty,\, 5]$$

---

## Ejercicio 74 — Composición de funciones

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Dadas $f(x) = 2x^2 - 1$ y $g(x) = 3x + 4$, calculá $(f \circ g)(x)$ y $(g \circ f)(x)$. Verificá el resultado evaluando en $x = 1$.

### Resolución paso a paso

**Paso 1: Recordar la definición de composición.**
$(f \circ g)(x) = f(g(x))$: se aplica primero $g$, luego $f$.
$(g \circ f)(x) = g(f(x))$: se aplica primero $f$, luego $g$.

**Paso 2: Calcular $(f \circ g)(x)$.**
Sustituimos $g(x)$ en $f$:

$$f(g(x)) = f(3x + 4) = 2(3x + 4)^2 - 1$$

Expandimos $(3x + 4)^2 = 9x^2 + 24x + 16$:

$$f(g(x)) = 2(9x^2 + 24x + 16) - 1 = 18x^2 + 48x + 32 - 1 = 18x^2 + 48x + 31$$

**Paso 3: Calcular $(g \circ f)(x)$.**
Sustituimos $f(x)$ en $g$:

$$g(f(x)) = g(2x^2 - 1) = 3(2x^2 - 1) + 4 = 6x^2 - 3 + 4 = 6x^2 + 1$$

**Paso 4: Verificar en $x = 1$.**

- $g(1) = 3(1) + 4 = 7$, luego $f(7) = 2(49) - 1 = 97$.
- $(f \circ g)(1) = 18(1) + 48(1) + 31 = 97$ ✓

- $f(1) = 2(1) - 1 = 1$, luego $g(1) = 3(1) + 4 = 7$.
- $(g \circ f)(1) = 6(1) + 1 = 7$ ✓

### Respuesta Final

$$(f \circ g)(x) = 18x^2 + 48x + 31$$

$$(g \circ f)(x) = 6x^2 + 1$$

La composición **no es conmutativa**: $(f \circ g) \neq (g \circ f)$.

---

## Ejercicio 75 — Función definida por partes: continuidad y gráfica

**Dificultad:** ⭐⭐⭐ Avanzada

### Enunciado

Dada la función definida por partes:

$$h(x) = \begin{cases} x^2 - 1 & \text{si } x < 1 \\ 3 & \text{si } x = 1 \\ 2x + 1 & \text{si } x > 1 \end{cases}$$

Calculá $h(-2)$, $h(0)$, $h(1)$ y $h(3)$. Determiná si $h$ es continua en $x = 1$ y justificá.

### Resolución paso a paso

**Paso 1: Evaluar la función en cada punto dado.**
Se elige la rama correspondiente a cada valor de $x$.

**Paso 2: Calcular $h(-2)$ y $h(0)$.**
Como $-2 < 1$ y $0 < 1$, se usa la rama $x^2 - 1$:

$$h(-2) = (-2)^2 - 1 = 4 - 1 = 3$$

$$h(0) = (0)^2 - 1 = 0 - 1 = -1$$

**Paso 3: Calcular $h(1)$ y $h(3)$.**
$x = 1$ usa la rama central; $3 > 1$ usa la rama $2x + 1$:

$$h(1) = 3 \quad \text{(por definición directa)}$$

$$h(3) = 2(3) + 1 = 7$$

**Paso 4: Analizar la continuidad en $x = 1$.**
Una función es continua en $x = a$ si $\displaystyle\lim_{x \to a} f(x) = f(a)$.

Calculamos los límites laterales:

$$\lim_{x \to 1^-} h(x) = \lim_{x \to 1^-} (x^2 - 1) = 1 - 1 = 0$$

$$\lim_{x \to 1^+} h(x) = \lim_{x \to 1^+} (2x + 1) = 2(1) + 1 = 3$$

**Paso 5: Concluir.**
Como $\displaystyle\lim_{x \to 1^-} h(x) = 0 \neq 3 = \lim_{x \to 1^+} h(x)$, el límite en $x = 1$ **no existe**.

Por lo tanto, $h$ **no es continua** en $x = 1$. La discontinuidad es de salto (los límites laterales existen pero son distintos).

### Respuesta Final

$$h(-2) = 3, \quad h(0) = -1, \quad h(1) = 3, \quad h(3) = 7$$

$h$ **no es continua** en $x = 1$ porque $\displaystyle\lim_{x \to 1^-} h(x) = 0 \neq 3 = \lim_{x \to 1^+} h(x)$. Presenta una discontinuidad de salto.

---

## Ejercicio 76 — Función inversa

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Hallá la función inversa de $f(x) = \dfrac{2x - 5}{x + 3}$ y verificá que $f(f^{-1}(x)) = x$.

### Resolución paso a paso

**Paso 1: Plantear la estrategia.**
Para hallar $f^{-1}$, escribimos $y = f(x)$, despejamos $x$ en función de $y$, y luego intercambiamos $x$ con $y$.

**Paso 2: Partir de $y = \dfrac{2x - 5}{x + 3}$ y despejar $x$.**

$$y(x + 3) = 2x - 5$$

$$xy + 3y = 2x - 5$$

$$xy - 2x = -5 - 3y$$

$$x(y - 2) = -5 - 3y$$

$$x = \frac{-5 - 3y}{y - 2}$$

**Paso 3: Escribir la inversa.**
Intercambiamos $x$ e $y$:

$$f^{-1}(x) = \frac{-5 - 3x}{x - 2} = \frac{-(3x + 5)}{x - 2}$$

**Paso 4: Verificar $f(f^{-1}(x)) = x$.**
Sea $u = f^{-1}(x) = \dfrac{-3x - 5}{x - 2}$. Calculamos $f(u)$:

$$f(u) = \frac{2u - 5}{u + 3} = \frac{2 \cdot \dfrac{-3x-5}{x-2} - 5}{\dfrac{-3x-5}{x-2} + 3}$$

Numerador: $\dfrac{2(-3x-5) - 5(x-2)}{x-2} = \dfrac{-6x - 10 - 5x + 10}{x-2} = \dfrac{-11x}{x-2}$

Denominador: $\dfrac{-3x - 5 + 3(x-2)}{x-2} = \dfrac{-3x - 5 + 3x - 6}{x-2} = \dfrac{-11}{x-2}$

$$f(f^{-1}(x)) = \frac{-11x/(x-2)}{-11/(x-2)} = \frac{-11x}{-11} = x \checkmark$$

### Respuesta Final

$$f^{-1}(x) = \frac{-(3x + 5)}{x - 2}, \quad x \neq 2$$

Verificado: $f(f^{-1}(x)) = x$.

---

## Ejercicio 77 — Análisis de una función exponencial

**Dificultad:** ⭐ Básica

### Enunciado

Dada $f(x) = 3 \cdot 2^{x-1} - 6$, determiná: dominio, imagen, intercepto con el eje $y$, intercepto con el eje $x$ y la asíntota horizontal.

### Resolución paso a paso

**Paso 1: Determinar el dominio.**
Las funciones exponenciales están definidas para todo $x \in \mathbb{R}$.

$$\text{Dom}(f) = \mathbb{R}$$

**Paso 2: Determinar la asíntota horizontal e imagen.**

## Ejercicio 81 — Dominio de una función racional

**Dificultad:** ⭐ Básica

### Enunciado

Hallá el dominio de la función $f(x) = \dfrac{3x + 2}{x^2 - 5x + 6}$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Para una función racional $\dfrac{P(x)}{Q(x)}$, el dominio es todo $\mathbb{R}$ excepto los valores que anulan el denominador, ya que la división por cero no está definida.

**Paso 2: Plantear la condición de exclusión.**
Buscamos los valores de $x$ que hacen $Q(x) = 0$:
$$x^2 - 5x + 6 = 0$$

**Paso 3: Resolver la ecuación cuadrática.**
Factorizamos buscando dos números cuyo producto sea $6$ y cuya suma sea $-5$: esos números son $-2$ y $-3$.
$$(x - 2)(x - 3) = 0$$
$$x = 2 \quad \text{o} \quad x = 3$$

**Paso 4: Excluir los valores problemáticos del dominio.**
Todos los reales excepto $x = 2$ y $x = 3$ hacen que el denominador sea distinto de cero, por lo tanto la función queda definida.

### Respuesta Final

$$\text{Dom}(f) = \mathbb{R} - \{2,\, 3\} = (-\infty,\, 2) \cup (2,\, 3) \cup (3,\, +\infty)$$

---

## Ejercicio 82 — Evaluación e imagen de una función cuadrática

**Dificultad:** ⭐ Básica

### Enunciado

Dada $f(x) = 2x^2 - 3x + 1$, calculá $f(0)$, $f(-1)$, $f(3)$ y $f(a+1)$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Evaluar una función significa sustituir la variable independiente $x$ por el valor o expresión indicada y simplificar el resultado.

**Paso 2: Calcular $f(0)$.**
$$f(0) = 2(0)^2 - 3(0) + 1 = 0 - 0 + 1 = 1$$

**Paso 3: Calcular $f(-1)$.**
$$f(-1) = 2(-1)^2 - 3(-1) + 1 = 2(1) + 3 + 1 = 6$$

**Paso 4: Calcular $f(3)$.**
$$f(3) = 2(3)^2 - 3(3) + 1 = 2(9) - 9 + 1 = 18 - 9 + 1 = 10$$

**Paso 5: Calcular $f(a+1)$.**
Sustituimos $x = a + 1$:
$$f(a+1) = 2(a+1)^2 - 3(a+1) + 1$$
Expandimos $(a+1)^2 = a^2 + 2a + 1$:
$$= 2(a^2 + 2a + 1) - 3a - 3 + 1 = 2a^2 + 4a + 2 - 3a - 3 + 1$$
$$= 2a^2 + a$$

### Respuesta Final

$$f(0) = 1, \quad f(-1) = 6, \quad f(3) = 10, \quad f(a+1) = 2a^2 + a$$

---

## Ejercicio 83 — Dominio de una función con raíz cuadrada y denominador

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Determiná el dominio de $g(x) = \dfrac{\sqrt{x + 4}}{x^2 - x - 2}$.

### Resolución paso a paso

**Paso 1: Identificar las condiciones simultáneas.**
La función combina una raíz cuadrada en el numerador (requiere que el radicando sea $\geq 0$) y un denominador racional (requiere que sea $\neq 0$). Ambas condiciones deben cumplirse simultáneamente.

**Paso 2: Condición del radicando.**
$$x + 4 \geq 0 \implies x \geq -4$$
Esto nos da el conjunto $[-4, +\infty)$.

**Paso 3: Condición del denominador.**
$$x^2 - x - 2 \neq 0$$
Factorizamos: buscamos dos números con producto $-2$ y suma $-1$: son $-2$ y $1$.
$$(x - 2)(x + 1) \neq 0$$
$$x \neq 2 \quad \text{y} \quad x \neq -1$$

**Paso 4: Intersección de las condiciones.**
Tomamos $x \geq -4$ y excluimos $x = -1$ y $x = 2$:
$$[-4, +\infty) - \{-1,\, 2\}$$

**Paso 5: Escribir en unión de intervalos.**
$$[-4,\, -1) \cup (-1,\, 2) \cup (2,\, +\infty)$$

### Respuesta Final

$$\text{Dom}(g) = [-4,\, -1) \cup (-1,\, 2) \cup (2,\, +\infty)$$

---

## Ejercicio 84 — Gráfica y propiedades de una función a tramos

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Dada la función definida por partes:
$$f(x) = \begin{cases} x^2 - 1 & \text{si } x < 0 \\ 2x + 1 & \text{si } x \geq 0 \end{cases}$$
Calculá $f(-3)$, $f(0)$, $f(2)$ y determiná si la función es continua en $x = 0$.

### Resolución paso a paso

**Paso 1: Identificar qué rama usar para cada evaluación.**
Se aplica la rama $x^2 - 1$ cuando $x < 0$, y la rama $2x + 1$ cuando $x \geq 0$.

**Paso 2: Calcular $f(-3)$.**
Como $-3 < 0$, usamos la primera rama:
$$f(-3) = (-3)^2 - 1 = 9 - 1 = 8$$

**Paso 3: Calcular $f(0)$ y $f(2)$.**
Como $0 \geq 0$, usamos la segunda rama:
$$f(0) = 2(0) + 1 = 1$$
Como $2 \geq 0$:
$$f(2) = 2(2) + 1 = 5$$

**Paso 4: Analizar continuidad en $x = 0$.**
Calculamos el límite lateral izquierdo (usando la rama $x^2 - 1$):
$$\lim_{x \to 0^-} (x^2 - 1) = (0)^2 - 1 = -1$$
Calculamos el límite lateral derecho (usando la rama $2x + 1$):
$$\lim_{x \to 0^+} (2x + 1) = 2(0) + 1 = 1$$

**Paso 5: Conclusión sobre continuidad.**
Como $\lim_{x \to 0^-} f(x) = -1 \neq 1 = \lim_{x \to 0^+} f(x)$, los límites laterales son distintos. Por lo tanto el límite en $x = 0$ no existe, y la función **no es continua** en ese punto (presenta una discontinuidad de salto).

### Respuesta Final

$$f(-3) = 8, \quad f(0) = 1, \quad f(2) = 5$$

La función **no es continua** en $x = 0$ porque $\lim_{x \to 0^-} f(x) = -1 \neq 1 = \lim_{x \to 0^+} f(x)$.

---

## Ejercicio 85 — Composición de funciones

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Dadas $f(x) = x^2 + 1$ y $g(x) = \sqrt{2x - 3}$, calculá $(f \circ g)(x)$, $(g \circ f)(x)$ y evaluá $(f \circ g)(6)$.

### Resolución paso a paso

**Paso 1: Recordar la definición de composición.**
$(f \circ g)(x) = f(g(x))$: primero se aplica $g$ y luego $f$ sobre el resultado. Análogamente, $(g \circ f)(x) = g(f(x))$.

**Paso 2: Calcular $(f \circ g)(x)$.**
Sustituimos $g(x) = \sqrt{2x-3}$ como argumento de $f$:
$$f(g(x)) = f\!\left(\sqrt{2x-3}\right) = \left(\sqrt{2x-3}\right)^2 + 1 = (2x - 3) + 1 = 2x - 2$$

**Paso 3: Calcular $(g \circ f)(x)$.**
Sustituimos $f(x) = x^2 + 1$ como argumento de $g$:
$$g(f(x)) = g(x^2 + 1) = \sqrt{2(x^2 + 1) - 3} = \sqrt{2x^2 + 2 - 3} = \sqrt{2x^2 - 1}$$

**Paso 4: Evaluar $(f \circ g)(6)$.**
Usando la expresión simplificada del Paso 2:
$$(f \circ g)(6) = 2(6) - 2 = 12 - 2 = 10$$
Verificación directa: $g(6) = \sqrt{2(6)-3} = \sqrt{9} = 3$, luego $f(3) = 3^2 + 1 = 10$ ✓

### Respuesta Final

$$(f \circ g)(x) = 2x - 2, \qquad (g \circ f)(x) = \sqrt{2x^2 - 1}, \qquad (f \circ g)(6) = 10$$

---

## Ejercicio 86 — Función inversa de una función lineal fraccional

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Hallá la función inversa de $f(x) = \dfrac{2x + 1}{x - 3}$ e indicá su dominio. Verificá que $f(f^{-1}(x)) = x$.

### Resolución paso a paso

**Paso 1: Verificar que $f$ es inyectiva.**
Una función lineal fraccional de la forma $\dfrac{ax+b}{cx+d}$ (con $ad - bc \neq 0$) es inyectiva en su dominio. Aquí $ad - bc = (2)(-3) - (1)(1) = -6 - 1 = -7 \neq 0$, por lo tanto existe la inversa.

**Paso 2: Plantear $y = f(x)$ y despejar $x$.**
$$y = \frac{2x + 1}{x - 3}$$
Multiplicamos ambos miembros por $(x - 3)$:
$$y(x - 3) = 2x + 1$$
$$xy - 3y = 2x + 1$$

**Paso 3: Agrupar los términos con $x$.**
$$xy - 2x = 3y + 1$$
$$x(y - 2) = 3y + 1$$
$$x = \frac{3y + 1}{y - 2}$$

**Paso 4: Escribir la función inversa.**
Intercambiamos los roles de $x$ e $y$:
$$f^{-1}(x) = \frac{3x + 1}{x - 2}$$
El dominio de $f^{-1}$ excluye $x = 2$: $\text{Dom}(f^{-1}) = \mathbb{R} - \{2\}$.

**Paso 5: Verificar $f(f^{-1}(x)) = x$.**
$$f\!\left(\frac{3x+1}{x-2}\right) = \frac{2\cdot\dfrac{3x+1}{x-2} + 1}{\dfrac{3x+1}{x-2} - 3} = \frac{\dfrac{6x+2}{x-2} + \dfrac{x-2}{x-2}}{\dfrac{3x+1}{x-2} - \dfrac{3(x-2)}{x-2}}$$
$$= \frac{\dfrac{6x+2+x-2}{x-2}}{\dfrac{3x+1-3x+6}{x-2}} = \frac{7x}{7} = x \checkmark$$

### Respuesta Final

$$f^{-1}(x) = \frac{3x + 1}{x - 2}, \qquad \text{Dom}(f^{-1}) = \mathbb{R} - \{2\}$$

---

## Ejercicio 87 — Análisis de paridad de funciones

**Dificultad:** ⭐ Básica

### Enunciado

Determiná si cada una de las siguientes funciones es par, impar o ninguna de las dos:
$$f(x) = x^4 - 3x^2 + 5, \qquad g(x) = x^3 - 2x, \qquad h(x) = x^2 + x - 1$$

### Resolución paso a paso

**Paso 1: Recordar las definiciones.**
- $f$ es **par** si $f(-x) = f(x)$ para todo $x$ en el dominio (simétrica respecto al eje $y$).
- $f$ es **impar** si $f(-x) = -f(x)$ para todo $x$ en el dominio (simétrica respecto al origen).

**Paso 2: Analizar $f(x) = x^4 - 3x^2 + 5$.**
$$f(-x) = (-x)^4 - 3(-x)^2 + 5 = x^4 - 3x^2 + 5 = f(x)$$
Como $f(-x) = f(x)$, la función $f$ es **par**.

**Paso 3: Analizar $g(x) = x^3 - 2x$.**
$$g(-x) = (-x)^3 - 2(-x) = -x^3 + 2x = -(x^3 - 2x) = -g(x)$$
Como $g(-x) = -g(x)$, la función $g$ es **impar**.

**Paso 4: Analizar $h(x) = x^

## Ejercicio 91 — Dominio de una función racional

**Dificultad:** ⭐ Básica

### Enunciado

Hallá el dominio de la función $f(x) = \dfrac{3x + 2}{x^2 - 5x + 6}$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
El dominio de una función racional es todo $\mathbb{R}$ excepto los valores de $x$ que anulan el denominador. Resolvemos $x^2 - 5x + 6 = 0$.

**Paso 2: Factorizar el denominador.**
Buscamos dos números cuyo producto sea $6$ y cuya suma sea $-5$: son $-2$ y $-3$.

$$x^2 - 5x + 6 = (x - 2)(x - 3)$$

**Paso 3: Determinar los valores excluidos.**
El denominador se anula cuando:
$$x - 2 = 0 \Rightarrow x = 2 \qquad \text{o} \qquad x - 3 = 0 \Rightarrow x = 3$$

**Paso 4: Escribir el dominio.**
Se excluyen $x = 2$ y $x = 3$ del conjunto de los reales.

$$\text{Dom}(f) = \mathbb{R} \setminus \{2,\, 3\}= (-\infty, 2) \cup (2, 3) \cup (3, +\infty)$$

### Respuesta Final

$$\text{Dom}(f) = (-\infty,\, 2) \cup (2,\, 3) \cup (3,\, +\infty)$$

---

## Ejercicio 92 — Evaluación e imagen de una función cuadrática

**Dificultad:** ⭐ Básica

### Enunciado

Dada $f(x) = 2x^2 - 3x + 1$, calculá $f(0)$, $f(-1)$ y $f(3)$. Luego determiná si $y = 10$ pertenece a la imagen de $f$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Evaluar una función significa reemplazar $x$ por el valor dado y operar. Para verificar si $y = 10$ pertenece a la imagen, planteamos $f(x) = 10$ y verificamos si tiene solución real.

**Paso 2: Calcular $f(0)$.**
$$f(0) = 2(0)^2 - 3(0) + 1 = 0 - 0 + 1 = 1$$

**Paso 3: Calcular $f(-1)$.**
$$f(-1) = 2(-1)^2 - 3(-1) + 1 = 2(1) + 3 + 1 = 6$$

**Paso 4: Calcular $f(3)$.**
$$f(3) = 2(3)^2 - 3(3) + 1 = 2(9) - 9 + 1 = 18 - 9 + 1 = 10$$

**Paso 5: Verificar si $y = 10$ pertenece a la imagen.**
Como $f(3) = 10$, el valor $y = 10$ sí pertenece a la imagen. El preimage es $x = 3$.

### Respuesta Final

$$f(0) = 1, \quad f(-1) = 6, \quad f(3) = 10$$

$y = 10$ **pertenece** a la imagen de $f$, ya que $f(3) = 10$.

---

## Ejercicio 93 — Dominio de una función con raíz cuadrada y denominador

**Dificultad:** ⭐ Básica

### Enunciado

Determiná el dominio de $g(x) = \dfrac{\sqrt{x + 4}}{x - 1}$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Hay dos restricciones simultáneas: el radicando debe ser no negativo (condición de la raíz) y el denominador no puede ser cero. El dominio es la intersección de ambas condiciones.

**Paso 2: Condición de la raíz cuadrada.**
$$x + 4 \geq 0 \Rightarrow x \geq -4$$

En notación de intervalo: $[-4, +\infty)$.

**Paso 3: Condición del denominador.**
$$x - 1 \neq 0 \Rightarrow x \neq 1$$

**Paso 4: Intersección de las condiciones.**
Tomamos $x \geq -4$ y excluimos $x = 1$:

$$\text{Dom}(g) = [-4, 1) \cup (1, +\infty)$$

### Respuesta Final

$$\text{Dom}(g) = [-4,\, 1) \cup (1,\, +\infty)$$

---

## Ejercicio 94 — Análisis completo de una función cuadrática (parábola)

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Dada $f(x) = -x^2 + 4x + 5$, determiná: vértice, ordenada al origen, raíces, imagen de $f$ y graficá esquemáticamente indicando todos esos elementos.

### Resolución paso a paso

**Paso 1: Identificar la forma estándar.**
$f(x) = -x^2 + 4x + 5$ tiene $a = -1 < 0$, por lo que la parábola abre hacia abajo y el vértice es un **máximo**.

**Paso 2: Calcular el vértice.**
La abscisa del vértice es:
$$x_v = -\frac{b}{2a} = -\frac{4}{2(-1)} = -\frac{4}{-2} = 2$$

La ordenada:
$$y_v = f(2) = -(2)^2 + 4(2) + 5 = -4 + 8 + 5 = 9$$

Vértice: $V = (2,\, 9)$.

**Paso 3: Calcular la ordenada al origen.**
$$f(0) = -(0)^2 + 4(0) + 5 = 5$$

Punto: $(0,\, 5)$.

**Paso 4: Calcular las raíces (ceros de $f$).**
$$-x^2 + 4x + 5 = 0 \Rightarrow x^2 - 4x - 5 = 0$$
$$\Delta = (-4)^2 - 4(1)(-5) = 16 + 20 = 36$$
$$x = \frac{4 \pm 6}{2} \Rightarrow x_1 = \frac{10}{2} = 5, \quad x_2 = \frac{-2}{2} = -1$$

Raíces: $x = 5$ y $x = -1$.

**Paso 5: Determinar la imagen.**
Como la parábola abre hacia abajo y el máximo es $y_v = 9$, la imagen es:

$$\text{Im}(f) = (-\infty,\, 9]$$

**Paso 6: Esquema gráfico (descripción).**
La parábola corta al eje $x$ en $(-1, 0)$ y $(5, 0)$, al eje $y$ en $(0, 5)$, tiene vértice en $(2, 9)$ y abre hacia abajo.

### Respuesta Final

- **Vértice:** $V = (2,\, 9)$ (máximo)
- **Ordenada al origen:** $(0,\, 5)$
- **Raíces:** $x = -1$ y $x = 5$
- **Imagen:** $\text{Im}(f) = (-\infty,\, 9]$

---

## Ejercicio 95 — Composición de funciones

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Dadas $f(x) = 2x - 1$ y $g(x) = x^2 + 3$, calculá $(f \circ g)(x)$, $(g \circ f)(x)$ y verificá que en general $f \circ g \neq g \circ f$. Luego evaluá $(f \circ g)(2)$.

### Resolución paso a paso

**Paso 1: Recordar la definición de composición.**
$(f \circ g)(x) = f(g(x))$: primero se aplica $g$, luego $f$ sobre ese resultado. Análogamente, $(g \circ f)(x) = g(f(x))$.

**Paso 2: Calcular $(f \circ g)(x)$.**
$$f(g(x)) = f(x^2 + 3) = 2(x^2 + 3) - 1 = 2x^2 + 6 - 1 = 2x^2 + 5$$

**Paso 3: Calcular $(g \circ f)(x)$.**
$$g(f(x)) = g(2x - 1) = (2x - 1)^2 + 3$$
$$(2x-1)^2 = 4x^2 - 4x + 1$$
$$g(f(x)) = 4x^2 - 4x + 1 + 3 = 4x^2 - 4x + 4$$

**Paso 4: Verificar que $f \circ g \neq g \circ f$.**
$$f \circ g = 2x^2 + 5 \qquad \neq \qquad g \circ f = 4x^2 - 4x + 4$$

Son expresiones distintas, confirmando que la composición **no es conmutativa** en general.

**Paso 5: Evaluar $(f \circ g)(2)$.**
$$( f \circ g)(2) = 2(2)^2 + 5 = 2(4) + 5 = 8 + 5 = 13$$

Verificación directa: $g(2) = 4 + 3 = 7$; $f(7) = 2(7) - 1 = 13$. ✓

### Respuesta Final

$$(f \circ g)(x) = 2x^2 + 5, \qquad (g \circ f)(x) = 4x^2 - 4x + 4$$

$$(f \circ g)(2) = 13$$

En general $f \circ g \neq g \circ f$.

---

## Ejercicio 96 — Función inversa de una función lineal–fraccionaria

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Hallá la función inversa de $f(x) = \dfrac{2x + 1}{x - 3}$, indicá su dominio e imagen, y verificá que $f(f^{-1}(x)) = x$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Para hallar $f^{-1}$, escribimos $y = f(x)$, despejamos $x$ en función de $y$ y luego intercambiamos las variables.

**Paso 2: Plantear la ecuación y despejar $x$.**
$$y = \frac{2x + 1}{x - 3}$$

Multiplicamos ambos miembros por $(x - 3)$:
$$y(x - 3) = 2x + 1$$
$$xy - 3y = 2x + 1$$

Agrupamos los términos con $x$:
$$xy - 2x = 3y + 1$$
$$x(y - 2) = 3y + 1$$
$$x = \frac{3y + 1}{y - 2}$$

**Paso 3: Escribir la inversa.**
Intercambiando $x$ e $y$:
$$f^{-1}(x) = \frac{3x + 1}{x - 2}$$

**Paso 4: Determinar el dominio e imagen de $f^{-1}$.**
$f^{-1}$ no está definida en $x = 2$, por lo tanto:
$$\text{Dom}(f^{-1}) = \mathbb{R} \setminus \{2\}$$

La imagen de $f^{-1}$ coincide con el dominio de $f$:
$$\text{Im}(f^{-1}) = \mathbb{R} \setminus \{3\}$$

**Paso 5: Verificar $f(f^{-1}(x)) = x$.**
$$f\!\left(\frac{3x+1}{x-2}\right) = \frac{2\cdot\dfrac{3x+1}{x-2} + 1}{\dfrac{3x+1}{x-2} - 3} = \frac{\dfrac{6x+2}{x-2}+\dfrac{x-2}{x-2}}{\dfrac{3x+1}{x-2}-\dfrac{3(x-2)}{x-2}}$$

$$= \frac{\dfrac{6x+2+x-2}{x-2}}{\dfrac{3x+1-3x+6}{x-2}} = \frac{7x}{7} = x \checkmark$$

### Respuesta Final

$$f^{-1}(x) = \frac{3x + 1}{x - 2}, \quad \text{Dom}(f^{-1}) = \mathbb{R}\setminus\{2\},\quad \text{Im}(f^{-1}) = \mathbb{R}\setminus\{3\}$$

---

## Ejercicio 97 — Análisis de función racional con asíntotas

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Para la función $h(x) = \dfrac{x^2 - 1}{x^2 - 4}$, determiná: dominio, ceros, asíntotas verticales, asíntota horizontal e intersección con el eje $y$.

### Resolución paso a paso

**Paso 1: Factorizar numerador y denominador.**
$$x^2 - 1 = (x-1)(x+1), \qquad x^2 - 4 = (x-2)(x+2)$$

No hay factores comunes, por lo que no hay huecos (agujeros) en la gráfica.

**Paso 2: Determinar el dominio.**
El denominador se anula en $x = 2$ y $x = -2$:
$$\text{Dom}(h) = \mathbb{R} \setminus \{-2,\, 2\}$$

**Paso 3: Ceros de $h$ (numerador $= 0$).**
$$x^2 - 1 = 0 \Rightarrow x = 1 \quad \text{o} \quad x = -1$$

Ambos valores están en el dominio. Ceros: $(-1, 0)$ y $(1, 0)$.

**Paso 4: Intersección con el eje $y$.**
$$h(0) = \frac{0 - 1}{0 - 4} = \
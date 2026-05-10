# Matemática CBC-UBA — Unidad 4: Límites y continuidad
**Generado:** 09/05/2026 22:09:56
**Cantidad:** 100 ejercicios · **Dificultad:** mixta
**Archivo:** `matematica_cbc_unidad_04_limites_continuidad.md` · **Timestamp:** 20260509_220956

---

## Ejercicio 1 — Límite directo por sustitución

**Dificultad:** ⭐ Básica

### Enunciado

Calculá el siguiente límite:

$$\lim_{x \to 3} \left(2x^2 - 5x + 1\right)$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
La función $f(x) = 2x^2 - 5x + 1$ es un polinomio. Los polinomios son continuos en todo $\mathbb{R}$, por lo que el límite se calcula por sustitución directa: $\lim_{x \to a} p(x) = p(a)$.

**Paso 2: Sustituir $x = 3$ en la expresión.**

$$\lim_{x \to 3} \left(2x^2 - 5x + 1\right) = 2(3)^2 - 5(3) + 1$$

**Paso 3: Calcular cada término.**

$$= 2 \cdot 9 - 15 + 1$$

$$= 18 - 15 + 1$$

**Paso 4: Obtener el resultado.**

$$= 4$$

### Respuesta Final

$$\lim_{x \to 3} \left(2x^2 - 5x + 1\right) = 4$$

---

## Ejercicio 2 — Límite con indeterminación $\tfrac{0}{0}$ por factorización

**Dificultad:** ⭐ Básica

### Enunciado

Calculá el siguiente límite:

$$\lim_{x \to 2} \frac{x^2 - 4}{x - 2}$$

### Resolución paso a paso

**Paso 1: Verificar la indeterminación.**
Sustituimos $x = 2$ directamente:

$$\frac{(2)^2 - 4}{2 - 2} = \frac{0}{0}$$

Se obtiene la indeterminación $\tfrac{0}{0}$, por lo que la sustitución directa no es válida. Debemos factorizar.

**Paso 2: Factorizar el numerador.**
Reconocemos la diferencia de cuadrados $x^2 - 4 = (x-2)(x+2)$:

$$\frac{x^2 - 4}{x - 2} = \frac{(x-2)(x+2)}{x-2}$$

**Paso 3: Simplificar el factor común.**
Como $x \to 2$ pero $x \neq 2$, el factor $(x-2) \neq 0$ y puede cancelarse:

$$\frac{(x-2)(x+2)}{x-2} = x + 2$$

**Paso 4: Calcular el límite de la expresión simplificada.**

$$\lim_{x \to 2} (x + 2) = 2 + 2 = 4$$

### Respuesta Final

$$\lim_{x \to 2} \frac{x^2 - 4}{x - 2} = 4$$

---

## Ejercicio 3 — Límite al infinito de función racional

**Dificultad:** ⭐ Básica

### Enunciado

Calculá el siguiente límite:

$$\lim_{x \to +\infty} \frac{3x^2 - 2x + 5}{7x^2 + x - 1}$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Tanto el numerador como el denominador tienden a $+\infty$, generando la indeterminación $\tfrac{\infty}{\infty}$. La técnica estándar es dividir numerador y denominador por la mayor potencia de $x$ presente, que aquí es $x^2$.

**Paso 2: Dividir numerador y denominador por $x^2$.**

$$\frac{3x^2 - 2x + 5}{7x^2 + x - 1} = \frac{\dfrac{3x^2}{x^2} - \dfrac{2x}{x^2} + \dfrac{5}{x^2}}{\dfrac{7x^2}{x^2} + \dfrac{x}{x^2} - \dfrac{1}{x^2}}$$

**Paso 3: Simplificar cada término.**

$$= \frac{3 - \dfrac{2}{x} + \dfrac{5}{x^2}}{7 + \dfrac{1}{x} - \dfrac{1}{x^2}}$$

**Paso 4: Tomar el límite cuando $x \to +\infty$.**
Los términos con $\tfrac{1}{x}$ y $\tfrac{1}{x^2}$ tienden a $0$:

$$\lim_{x \to +\infty} \frac{3 - \dfrac{2}{x} + \dfrac{5}{x^2}}{7 + \dfrac{1}{x} - \dfrac{1}{x^2}} = \frac{3 - 0 + 0}{7 + 0 - 0} = \frac{3}{7}$$

### Respuesta Final

$$\lim_{x \to +\infty} \frac{3x^2 - 2x + 5}{7x^2 + x - 1} = \frac{3}{7}$$

---

## Ejercicio 4 — Límite con indeterminación $\tfrac{0}{0}$ y raíz cuadrada

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calculá el siguiente límite:

$$\lim_{x \to 4} \frac{\sqrt{x} - 2}{x - 4}$$

### Resolución paso a paso

**Paso 1: Verificar la indeterminación.**
Sustituimos $x = 4$:

$$\frac{\sqrt{4} - 2}{4 - 4} = \frac{2 - 2}{0} = \frac{0}{0}$$

Hay indeterminación $\tfrac{0}{0}$. La estrategia es multiplicar por el conjugado del numerador.

**Paso 2: Multiplicar numerador y denominador por el conjugado $(\sqrt{x} + 2)$.**

$$\frac{\sqrt{x} - 2}{x - 4} \cdot \frac{\sqrt{x} + 2}{\sqrt{x} + 2} = \frac{(\sqrt{x} - 2)(\sqrt{x} + 2)}{(x - 4)(\sqrt{x} + 2)}$$

**Paso 3: Simplificar el numerador usando diferencia de cuadrados.**

$$(\sqrt{x} - 2)(\sqrt{x} + 2) = (\sqrt{x})^2 - 2^2 = x - 4$$

Entonces la fracción queda:

$$\frac{x - 4}{(x - 4)(\sqrt{x} + 2)}$$

**Paso 4: Cancelar el factor común $(x - 4)$, válido porque $x \neq 4$.**

$$= \frac{1}{\sqrt{x} + 2}$$

**Paso 5: Calcular el límite de la expresión simplificada.**

$$\lim_{x \to 4} \frac{1}{\sqrt{x} + 2} = \frac{1}{\sqrt{4} + 2} = \frac{1}{2 + 2} = \frac{1}{4}$$

### Respuesta Final

$$\lim_{x \to 4} \frac{\sqrt{x} - 2}{x - 4} = \frac{1}{4}$$

---

## Ejercicio 5 — Análisis de continuidad de una función partida

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Dada la función:

$$f(x) = \begin{cases} x^2 - 1 & \text{si } x < 2 \\ 3x - 4 & \text{si } x \geq 2 \end{cases}$$

Analizá la continuidad de $f$ en $x = 2$.

### Resolución paso a paso

**Paso 1: Recordar la definición de continuidad en un punto.**
Una función es continua en $x = a$ si y solo si se cumplen las tres condiciones:
1. $f(a)$ existe.
2. $\lim_{x \to a} f(x)$ existe (los límites laterales son iguales).
3. $\lim_{x \to a} f(x) = f(a)$.

**Paso 2: Calcular $f(2)$.**
Como $x = 2$ cumple $x \geq 2$, usamos la segunda rama:

$$f(2) = 3(2) - 4 = 6 - 4 = 2$$

**Paso 3: Calcular el límite por la izquierda $\lim_{x \to 2^-} f(x)$.**
Para $x < 2$ se usa la primera rama $f(x) = x^2 - 1$:

$$\lim_{x \to 2^-} f(x) = (2)^2 - 1 = 4 - 1 = 3$$

**Paso 4: Calcular el límite por la derecha $\lim_{x \to 2^+} f(x)$.**
Para $x \geq 2$ se usa la segunda rama $f(x) = 3x - 4$:

$$\lim_{x \to 2^+} f(x) = 3(2) - 4 = 6 - 4 = 2$$

**Paso 5: Comparar los límites laterales.**

$$\lim_{x \to 2^-} f(x) = 3 \neq 2 = \lim_{x \to 2^+} f(x)$$

Como los límites laterales son distintos, $\lim_{x \to 2} f(x)$ **no existe**. La condición 2 falla.

### Respuesta Final

$f$ es **discontinua** en $x = 2$. Los límites laterales no coinciden ($3 \neq 2$), por lo que el límite global no existe y la función presenta una **discontinuidad de salto** en ese punto.

---

## Ejercicio 6 — Límite con indeterminación $\tfrac{\infty}{\infty}$, grados distintos

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calculá el siguiente límite:

$$\lim_{x \to -\infty} \frac{4x^3 - x + 2}{6x^2 + 5}$$

### Resolución paso a paso

**Paso 1: Identificar la indeterminación y la estrategia.**
Al sustituir $x \to -\infty$, numerador y denominador tienden a $-\infty$ e $+\infty$ respectivamente, generando $\tfrac{\infty}{\infty}$. Dividimos por la mayor potencia del denominador, que es $x^2$.

**Paso 2: Dividir numerador y denominador por $x^2$.**

$$\frac{4x^3 - x + 2}{6x^2 + 5} = \frac{\dfrac{4x^3}{x^2} - \dfrac{x}{x^2} + \dfrac{2}{x^2}}{\dfrac{6x^2}{x^2} + \dfrac{5}{x^2}}$$

**Paso 3: Simplificar cada cociente.**

$$= \frac{4x - \dfrac{1}{x} + \dfrac{2}{x^2}}{6 + \dfrac{5}{x^2}}$$

**Paso 4: Analizar cada término cuando $x \to -\infty$.**
- $4x \to -\infty$
- $\dfrac{1}{x} \to 0$, $\dfrac{2}{x^2} \to 0$, $\dfrac{5}{x^2} \to 0$

Luego el numerador $\to -\infty$ y el denominador $\to 6 > 0$.

**Paso 5: Concluir el límite.**

$$\lim_{x \to -\infty} \frac{4x - \dfrac{1}{x} + \dfrac{2}{x^2}}{6 + \dfrac{5}{x^2}} = \frac{-\infty}{6} = -\infty$$

### Respuesta Final

$$\lim_{x \to -\infty} \frac{4x^3 - x + 2}{6x^2 + 5} = -\infty$$

El límite **no es finito**; la función crece sin cota por debajo.

---

## Ejercicio 7 — Determinación de parámetro para garantizar continuidad

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Determiná el valor de $k \in \mathbb{R}$ para que la función sea continua en $x = 1$:

$$f(x) = \begin{cases} \dfrac{x^2 + x - 2}{x - 1} & \text{si } x \neq 1 \\[6pt] k & \text{si } x = 1 \end{cases}$$

### Resolución paso a paso

**Paso 1: Condición necesaria de continuidad.**
Para que $f$ sea continua en $x = 1$ se debe cumplir:

$$\lim_{x \to 1} f(x) = f(1) = k$$

Por lo tanto, necesitamos calcular $\lim_{x \to 1} \dfrac{x^2 + x - 2}{x - 1}$.

**Paso 2: Verificar la indeterminación.**
Sustituimos $x = 1$:

$$\frac{(1)^2 + 1 - 2}{1 - 1} = \frac{0}{0}$$

Hay indeterminación. Factorizamos el numerador.

**Paso 3: Factorizar $x^2 + x - 2$.**
Buscamos dos números cuyo producto sea $-2$ y cuya suma sea $1$: son $2$ y $-1$.

$$x^2 + x - 2 = (x + 2)(x - 1)$$

**Paso 4: Simplificar y calcular el límite.**

$$\frac{(x+2)(x-1)}{x-1} = x + 2 \quad (x \neq 1)$$

$$\lim_{x \to 1} (x + 2) = 1 + 2 = 3$$

**Paso 5: Igualar el límite al valor de $k$.**

$$k = 3$$

### Respuesta Final

Para que $f$ sea continua en $x = 1$ debe ser $k = 3$.

---

## Ejercicio 8 — Límite con indeterminación $\tfrac{0}{0}$ por raíces cúbicas (conjugado generalizado)

**Dificultad:** ⭐⭐⭐ Avanzada

### Enunciado

Calculá el siguiente límite:

$$\lim_{x \to 0} \frac{\sqrt[3]{x+1} - 1}{x}$$

### Resolución paso a paso

**Paso 1: Verificar la indeterminación.**

## Ejercicio 11 — Límite directo por sustitución

**Dificultad:** ⭐ Básica

### Enunciado

Calcular el siguiente límite:

$$\lim_{x \to 3} \frac{x^2 - 2x + 5}{x + 1}$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Cuando el límite es de la forma $\frac{P(x)}{Q(x)}$ y $Q(a) \neq 0$, se puede evaluar directamente por sustitución (el cociente de polinomios es una función continua donde el denominador no se anula).

**Paso 2: Verificar que el denominador no se anula en $x = 3$.**

$$x + 1\big|_{x=3} = 3 + 1 = 4 \neq 0$$

El denominador no se anula, por lo tanto podemos sustituir directamente.

**Paso 3: Sustituir $x = 3$ en el numerador.**

$$x^2 - 2x + 5\big|_{x=3} = (3)^2 - 2(3) + 5 = 9 - 6 + 5 = 8$$

**Paso 4: Calcular el cociente.**

$$\lim_{x \to 3} \frac{x^2 - 2x + 5}{x + 1} = \frac{8}{4} = 2$$

### Respuesta Final

$$\lim_{x \to 3} \frac{x^2 - 2x + 5}{x + 1} = 2$$

---

## Ejercicio 12 — Indeterminación $\frac{0}{0}$ por factorización

**Dificultad:** ⭐ Básica

### Enunciado

Calcular el siguiente límite:

$$\lim_{x \to 2} \frac{x^2 - 4}{x - 2}$$

### Resolución paso a paso

**Paso 1: Verificar la indeterminación.**
Sustituyendo $x = 2$:

$$\frac{(2)^2 - 4}{2 - 2} = \frac{0}{0}$$

Se obtiene la indeterminación $\frac{0}{0}$, que requiere manipulación algebraica.

**Paso 2: Factorizar el numerador usando diferencia de cuadrados.**

$$x^2 - 4 = (x-2)(x+2)$$

**Paso 3: Reescribir la expresión y simplificar.**
Como $x \to 2$ pero $x \neq 2$, el factor $(x-2)$ puede cancelarse:

$$\frac{x^2 - 4}{x - 2} = \frac{(x-2)(x+2)}{x-2} = x + 2 \quad (x \neq 2)$$

**Paso 4: Evaluar el límite de la expresión simplificada.**

$$\lim_{x \to 2}(x + 2) = 2 + 2 = 4$$

### Respuesta Final

$$\lim_{x \to 2} \frac{x^2 - 4}{x - 2} = 4$$

---

## Ejercicio 13 — Indeterminación $\frac{0}{0}$ con trinomio cuadrático

**Dificultad:** ⭐ Básica

### Enunciado

Calcular el siguiente límite:

$$\lim_{x \to -1} \frac{x^2 + 3x + 2}{x^2 - 1}$$

### Resolución paso a paso

**Paso 1: Verificar la indeterminación.**
Sustituyendo $x = -1$:

$$\frac{(-1)^2 + 3(-1) + 2}{(-1)^2 - 1} = \frac{1 - 3 + 2}{1 - 1} = \frac{0}{0}$$

Se presenta la indeterminación $\frac{0}{0}$.

**Paso 2: Factorizar el numerador.**
Se buscan dos números que sumen $3$ y multipliquen $2$: son $1$ y $2$.

$$x^2 + 3x + 2 = (x+1)(x+2)$$

**Paso 3: Factorizar el denominador usando diferencia de cuadrados.**

$$x^2 - 1 = (x-1)(x+1)$$

**Paso 4: Simplificar la fracción cancelando el factor común $(x+1)$, con $x \neq -1$.**

$$\frac{(x+1)(x+2)}{(x-1)(x+1)} = \frac{x+2}{x-1}$$

**Paso 5: Evaluar el límite.**

$$\lim_{x \to -1} \frac{x+2}{x-1} = \frac{-1+2}{-1-1} = \frac{1}{-2} = -\frac{1}{2}$$

### Respuesta Final

$$\lim_{x \to -1} \frac{x^2 + 3x + 2}{x^2 - 1} = -\frac{1}{2}$$

---

## Ejercicio 14 — Indeterminación $\frac{0}{0}$ con raíz cuadrada (racionalización)

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calcular el siguiente límite:

$$\lim_{x \to 4} \frac{\sqrt{x} - 2}{x - 4}$$

### Resolución paso a paso

**Paso 1: Verificar la indeterminación.**
Sustituyendo $x = 4$:

$$\frac{\sqrt{4} - 2}{4 - 4} = \frac{2 - 2}{0} = \frac{0}{0}$$

Existe la indeterminación $\frac{0}{0}$. La estrategia es racionalizar el numerador multiplicando por el conjugado.

**Paso 2: Multiplicar numerador y denominador por el conjugado de $\sqrt{x} - 2$, que es $\sqrt{x} + 2$.**

$$\frac{\sqrt{x} - 2}{x - 4} \cdot \frac{\sqrt{x} + 2}{\sqrt{x} + 2}$$

**Paso 3: Desarrollar el numerador aplicando la identidad $(a-b)(a+b) = a^2 - b^2$.**

$$(\sqrt{x} - 2)(\sqrt{x} + 2) = (\sqrt{x})^2 - (2)^2 = x - 4$$

**Paso 4: Reescribir la expresión completa y simplificar.**

$$\frac{x - 4}{(x-4)(\sqrt{x}+2)} = \frac{1}{\sqrt{x}+2} \quad (x \neq 4)$$

**Paso 5: Evaluar el límite.**

$$\lim_{x \to 4} \frac{1}{\sqrt{x}+2} = \frac{1}{\sqrt{4}+2} = \frac{1}{2+2} = \frac{1}{4}$$

### Respuesta Final

$$\lim_{x \to 4} \frac{\sqrt{x} - 2}{x - 4} = \frac{1}{4}$$

---

## Ejercicio 15 — Límite al infinito de función racional

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calcular el siguiente límite:

$$\lim_{x \to +\infty} \frac{3x^2 - 5x + 1}{2x^2 + 7x - 4}$$

### Resolución paso a paso

**Paso 1: Identificar la indeterminación.**
Al intentar sustituir $x \to +\infty$, tanto numerador como denominador tienden a $+\infty$, generando la indeterminación $\frac{\infty}{\infty}$.

**Paso 2: Identificar el término de mayor grado.**
Tanto el numerador como el denominador tienen grado $2$. La estrategia es dividir todos los términos por $x^2$ (la mayor potencia que aparece).

**Paso 3: Dividir numerador y denominador por $x^2$.**

$$\frac{3x^2 - 5x + 1}{2x^2 + 7x - 4} = \frac{\dfrac{3x^2}{x^2} - \dfrac{5x}{x^2} + \dfrac{1}{x^2}}{\dfrac{2x^2}{x^2} + \dfrac{7x}{x^2} - \dfrac{4}{x^2}} = \frac{3 - \dfrac{5}{x} + \dfrac{1}{x^2}}{2 + \dfrac{7}{x} - \dfrac{4}{x^2}}$$

**Paso 4: Aplicar el límite usando que $\dfrac{k}{x^n} \to 0$ cuando $x \to +\infty$ para todo $k$ y $n > 0$.**

$$\lim_{x \to +\infty} \frac{3 - \dfrac{5}{x} + \dfrac{1}{x^2}}{2 + \dfrac{7}{x} - \dfrac{4}{x^2}} = \frac{3 - 0 + 0}{2 + 0 - 0} = \frac{3}{2}$$

### Respuesta Final

$$\lim_{x \to +\infty} \frac{3x^2 - 5x + 1}{2x^2 + 7x - 4} = \frac{3}{2}$$

---

## Ejercicio 16 — Límite al infinito con distintos grados

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calcular los siguientes límites y determinar si existe asíntota horizontal:

$$\lim_{x \to +\infty} \frac{4x^3 - x}{2x^2 + 1} \qquad \text{y} \qquad \lim_{x \to +\infty} \frac{5x - 3}{x^2 + 2x + 1}$$

### Resolución paso a paso

**Paso 1: Analizar el primer límite. El numerador tiene grado 3 y el denominador grado 2. Dividir por $x^2$.**

$$\frac{4x^3 - x}{2x^2 + 1} = \frac{x^3\!\left(4 - \dfrac{1}{x^2}\right)}{x^2\!\left(2 + \dfrac{1}{x^2}\right)} = x \cdot \frac{4 - \dfrac{1}{x^2}}{2 + \dfrac{1}{x^2}}$$

**Paso 2: Evaluar el primer límite.**

Cuando $x \to +\infty$, el factor $x \to +\infty$ y el cociente $\to \dfrac{4}{2} = 2$. Por lo tanto:

$$\lim_{x \to +\infty} \frac{4x^3 - x}{2x^2 + 1} = +\infty$$

No existe asíntota horizontal (el grado del numerador es mayor que el del denominador).

**Paso 3: Analizar el segundo límite. El denominador tiene grado 2 y el numerador grado 1. Dividir por $x^2$.**

$$\frac{5x - 3}{x^2 + 2x + 1} = \frac{\dfrac{5}{x} - \dfrac{3}{x^2}}{1 + \dfrac{2}{x} + \dfrac{1}{x^2}}$$

**Paso 4: Evaluar el segundo límite.**

$$\lim_{x \to +\infty} \frac{\dfrac{5}{x} - \dfrac{3}{x^2}}{1 + \dfrac{2}{x} + \dfrac{1}{x^2}} = \frac{0 - 0}{1 + 0 + 0} = 0$$

Existe asíntota horizontal $y = 0$ (el eje de abscisas) para $x \to +\infty$.

### Respuesta Final

$$\lim_{x \to +\infty} \frac{4x^3 - x}{2x^2 + 1} = +\infty \qquad \text{(no hay asíntota horizontal)}$$

$$\lim_{x \to +\infty} \frac{5x - 3}{x^2 + 2x + 1} = 0 \qquad \text{(asíntota horizontal } y = 0\text{)}$$

---

## Ejercicio 17 — Límites laterales y existencia del límite

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Dada la función definida por partes:

$$f(x) = \begin{cases} x^2 + 1 & \text{si } x < 2 \\ 3x - 1 & \text{si } x \geq 2 \end{cases}$$

Determinar si existe $\displaystyle\lim_{x \to 2} f(x)$.

### Resolución paso a paso

**Paso 1: Recordar la condición de existencia del límite.**
El límite $\lim_{x \to a} f(x)$ existe si y sólo si los límites laterales existen y son iguales:

$$\lim_{x \to a^-} f(x) = \lim_{x \to a^+} f(x)$$

**Paso 2: Calcular el límite por la izquierda ($x \to 2^-$).**
Cuando $x < 2$ se usa la rama $f(x) = x^2 + 1$:

$$\lim_{x \to 2^-} f(x) = \lim_{x \to 2^-} (x^2 + 1) = (2)^2 + 1 = 4 + 1 = 5$$

**Paso 3: Calcular el límite por la derecha ($x \to 2^+$).**
Cuando $x \geq 2$ (y en particular cuando $x > 2$) se usa la rama $f(x) = 3x - 1$:

$$\lim_{x \to 2^+} f(x) = \lim_{x \to 2^+} (3x - 1) = 3(2) - 1 = 6 - 1 = 5$$

**Paso 4: Comparar los límites laterales y concluir.**

$$\lim_{x \to 2^-} f(x) = 5 = \lim_{x \to 2^+} f(x)$$

Ambos límites laterales existen y son iguales, por lo tanto el límite existe y vale $5$.

### Respuesta Final

$$\lim_{x \to 2} f(x) = 5$$

---

## Ejercicio 18 — Análisis de continuidad de una función por partes

**Dificultad:** ⭐⭐⭐ Avanzada

### Enunciado

Determinar el valor de $k$ para que la siguiente función sea continua en

## Ejercicio 21 — Límite directo por sustitución

**Dificultad:** ⭐ Básica

### Enunciado

Calcular el siguiente límite:

$$\lim_{x \to 3} \left(2x^2 - 5x + 1\right)$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
La función $f(x) = 2x^2 - 5x + 1$ es un polinomio. Los polinomios son funciones continuas en todo $\mathbb{R}$, por lo tanto el límite cuando $x \to 3$ es simplemente $f(3)$.

**Paso 2: Sustituir $x = 3$ directamente.**

$$\lim_{x \to 3} \left(2x^2 - 5x + 1\right) = 2(3)^2 - 5(3) + 1$$

**Paso 3: Calcular cada término.**

$$= 2 \cdot 9 - 15 + 1$$

$$= 18 - 15 + 1$$

**Paso 4: Obtener el resultado.**

$$= 4$$

### Respuesta Final

$$\lim_{x \to 3} \left(2x^2 - 5x + 1\right) = 4$$

---

## Ejercicio 22 — Límite con indeterminación $\frac{0}{0}$ por factoreo

**Dificultad:** ⭐ Básica

### Enunciado

Calcular el siguiente límite:

$$\lim_{x \to 2} \frac{x^2 - 4}{x - 2}$$

### Resolución paso a paso

**Paso 1: Verificar la indeterminación.**
Al sustituir $x = 2$: numerador $= 4 - 4 = 0$, denominador $= 2 - 2 = 0$. Se obtiene la indeterminación $\frac{0}{0}$, por lo que no se puede aplicar sustitución directa.

**Paso 2: Factorizar el numerador.**
Reconocemos una diferencia de cuadrados:

$$x^2 - 4 = (x-2)(x+2)$$

**Paso 3: Simplificar la fracción.**
Como $x \to 2$ pero $x \neq 2$, el factor $(x-2)$ es distinto de cero y puede cancelarse:

$$\frac{x^2 - 4}{x - 2} = \frac{(x-2)(x+2)}{x-2} = x + 2$$

**Paso 4: Calcular el límite de la expresión simplificada.**

$$\lim_{x \to 2} (x + 2) = 2 + 2 = 4$$

### Respuesta Final

$$\lim_{x \to 2} \frac{x^2 - 4}{x - 2} = 4$$

---

## Ejercicio 23 — Límite con indeterminación $\frac{0}{0}$ por racionalización

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calcular el siguiente límite:

$$\lim_{x \to 9} \frac{\sqrt{x} - 3}{x - 9}$$

### Resolución paso a paso

**Paso 1: Verificar la indeterminación.**
Al sustituir $x = 9$: numerador $= \sqrt{9} - 3 = 0$, denominador $= 9 - 9 = 0$. Indeterminación $\frac{0}{0}$. La estrategia es racionalizar el numerador multiplicando por el conjugado.

**Paso 2: Multiplicar por el conjugado del numerador.**

$$\frac{\sqrt{x} - 3}{x - 9} \cdot \frac{\sqrt{x} + 3}{\sqrt{x} + 3}$$

**Paso 3: Desarrollar el numerador usando la identidad $(a-b)(a+b) = a^2 - b^2$.**

$$= \frac{(\sqrt{x})^2 - 3^2}{(x-9)(\sqrt{x}+3)} = \frac{x - 9}{(x-9)(\sqrt{x}+3)}$$

**Paso 4: Cancelar el factor común $(x - 9)$**, válido porque $x \to 9$ pero $x \neq 9$:

$$= \frac{1}{\sqrt{x} + 3}$$

**Paso 5: Aplicar sustitución directa.**

$$\lim_{x \to 9} \frac{1}{\sqrt{x}+3} = \frac{1}{\sqrt{9}+3} = \frac{1}{3+3} = \frac{1}{6}$$

### Respuesta Final

$$\lim_{x \to 9} \frac{\sqrt{x} - 3}{x - 9} = \frac{1}{6}$$

---

## Ejercicio 24 — Límite al infinito de función racional

**Dificultad:** ⭐ Básica

### Enunciado

Calcular el siguiente límite:

$$\lim_{x \to +\infty} \frac{3x^2 - 2x + 7}{5x^2 + x - 1}$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Cuando $x \to \infty$ en una función racional, se divide numerador y denominador por la mayor potencia de $x$ presente, que en este caso es $x^2$.

**Paso 2: Dividir numerador y denominador por $x^2$.**

$$\frac{3x^2 - 2x + 7}{5x^2 + x - 1} = \frac{\dfrac{3x^2}{x^2} - \dfrac{2x}{x^2} + \dfrac{7}{x^2}}{\dfrac{5x^2}{x^2} + \dfrac{x}{x^2} - \dfrac{1}{x^2}}$$

**Paso 3: Simplificar cada fracción.**

$$= \frac{3 - \dfrac{2}{x} + \dfrac{7}{x^2}}{5 + \dfrac{1}{x} - \dfrac{1}{x^2}}$$

**Paso 4: Aplicar los límites conocidos** $\dfrac{1}{x} \to 0$ y $\dfrac{1}{x^2} \to 0$ cuando $x \to +\infty$:

$$= \frac{3 - 0 + 0}{5 + 0 - 0} = \frac{3}{5}$$

### Respuesta Final

$$\lim_{x \to +\infty} \frac{3x^2 - 2x + 7}{5x^2 + x - 1} = \frac{3}{5}$$

---

## Ejercicio 25 — Límite lateral y continuidad en un punto

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Dada la función definida a tramos:

$$f(x) = \begin{cases} x^2 + 1 & \text{si } x < 2 \\ 4x - 3 & \text{si } x \geq 2 \end{cases}$$

Analizar si $f$ es continua en $x = 2$.

### Resolución paso a paso

**Paso 1: Recordar la condición de continuidad.**
$f$ es continua en $x = 2$ si y sólo si se cumplen tres condiciones:
1. $f(2)$ existe.
2. $\lim_{x \to 2} f(x)$ existe (lo que requiere que los límites laterales sean iguales).
3. $\lim_{x \to 2} f(x) = f(2)$.

**Paso 2: Calcular $f(2)$.**
Como $x = 2$ satisface $x \geq 2$, usamos la segunda rama:

$$f(2) = 4(2) - 3 = 8 - 3 = 5$$

**Paso 3: Calcular el límite por izquierda** ($x \to 2^-$, usamos la primera rama):

$$\lim_{x \to 2^-} f(x) = \lim_{x \to 2^-} (x^2 + 1) = (2)^2 + 1 = 4 + 1 = 5$$

**Paso 4: Calcular el límite por derecha** ($x \to 2^+$, usamos la segunda rama):

$$\lim_{x \to 2^+} f(x) = \lim_{x \to 2^+} (4x - 3) = 4(2) - 3 = 5$$

**Paso 5: Verificar las tres condiciones.**
- $f(2) = 5$ ✓ (existe)
- $\lim_{x \to 2^-} f(x) = \lim_{x \to 2^+} f(x) = 5$, entonces $\lim_{x \to 2} f(x) = 5$ ✓
- $\lim_{x \to 2} f(x) = f(2) = 5$ ✓

Las tres condiciones se cumplen.

### Respuesta Final

$f$ **es continua en $x = 2$**, ya que $\lim_{x \to 2^-} f(x) = \lim_{x \to 2^+} f(x) = f(2) = 5$.

---

## Ejercicio 26 — Límite con indeterminación $\frac{\infty}{\infty}$, grados distintos

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calcular el siguiente límite:

$$\lim_{x \to +\infty} \frac{4x^3 - 2x}{7x^4 + 3x^2 - 1}$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Ambos polinomios tienden a $+\infty$, generando la indeterminación $\frac{\infty}{\infty}$. Se divide por la mayor potencia del denominador, que es $x^4$.

**Paso 2: Dividir numerador y denominador por $x^4$.**

$$\frac{4x^3 - 2x}{7x^4 + 3x^2 - 1} = \frac{\dfrac{4x^3}{x^4} - \dfrac{2x}{x^4}}{\dfrac{7x^4}{x^4} + \dfrac{3x^2}{x^4} - \dfrac{1}{x^4}}$$

**Paso 3: Simplificar cada término.**

$$= \frac{\dfrac{4}{x} - \dfrac{2}{x^3}}{7 + \dfrac{3}{x^2} - \dfrac{1}{x^4}}$$

**Paso 4: Tomar el límite cuando $x \to +\infty$.**
Todos los términos con $x$ en el denominador tienden a $0$:

$$= \frac{0 - 0}{7 + 0 - 0} = \frac{0}{7} = 0$$

**Paso 5: Interpretación.**
Como el grado del numerador (3) es **menor** que el grado del denominador (4), el cociente tiende a $0$. Esto es consistente con la regla general para funciones racionales.

### Respuesta Final

$$\lim_{x \to +\infty} \frac{4x^3 - 2x}{7x^4 + 3x^2 - 1} = 0$$

---

## Ejercicio 27 — Límite con indeterminación $\frac{0}{0}$ y factoreo de cúbica

**Dificultad:** ⭐⭐⭐ Avanzada

### Enunciado

Calcular el siguiente límite:

$$\lim_{x \to -1} \frac{x^3 + 1}{x^2 - 1}$$

### Resolución paso a paso

**Paso 1: Verificar la indeterminación.**
Sustituyendo $x = -1$: numerador $= (-1)^3 + 1 = -1 + 1 = 0$, denominador $= (-1)^2 - 1 = 0$. Indeterminación $\frac{0}{0}$. Debemos factorizar ambos.

**Paso 2: Factorizar el numerador** usando la identidad de suma de cubos $a^3 + b^3 = (a+b)(a^2 - ab + b^2)$ con $a = x$, $b = 1$:

$$x^3 + 1 = (x + 1)(x^2 - x + 1)$$

**Paso 3: Factorizar el denominador** usando diferencia de cuadrados:

$$x^2 - 1 = (x-1)(x+1)$$

**Paso 4: Reescribir la fracción y cancelar el factor común $(x+1)$**, válido ya que $x \to -1$ pero $x \neq -1$:

$$\frac{x^3 + 1}{x^2 - 1} = \frac{(x+1)(x^2 - x + 1)}{(x+1)(x-1)} = \frac{x^2 - x + 1}{x - 1}$$

**Paso 5: Sustituir $x = -1$ en la expresión simplificada.**

$$\lim_{x \to -1} \frac{x^2 - x + 1}{x - 1} = \frac{(-1)^2 - (-1) + 1}{(-1) - 1} = \frac{1 + 1 + 1}{-2} = \frac{3}{-2}$$

### Respuesta Final

$$\lim_{x \to -1} \frac{x^3 + 1}{x^2 - 1} = -\frac{3}{2}$$

---

## Ejercicio 28 — Determinación de parámetro por continuidad

**Dificultad:** ⭐⭐⭐ Avanzada

### Enunciado

Determinar el valor del parámetro $k \in \mathbb{R}$ para que la función

$$f(x) = \begin{cases} \dfrac{x^2 - 3x}{x - 3} & \text{si } x \neq 3 \\[6pt] k & \text{si } x = 3 \end{cases}$$

sea continua en $x = 3$.

### Resolución paso a paso

**Paso 1: Condición necesaria.**
Para que $f$ sea continua en $x = 3$, se debe cumplir:

$$\lim_{x \to 3} f(x) = f(3) = k$$

Por lo tanto hay que calcular $\lim_{x \to 3} \dfrac{x^2 - 3x}{x - 3}$.

**Paso 2: Verificar la indeterminación.**
Al sustituir $x = 3$: numerador $= 9 - 9 = 0$, denominador $= 3 - 3 = 0$. Indeterminación $\f

## Ejercicio 31 — Límite directo por sustitución

**Dificultad:** ⭐ Básica

### Enunciado

Calcular el siguiente límite:

$$\lim_{x \to 3} \left(2x^2 - 5x + 1\right)$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
La función $f(x) = 2x^2 - 5x + 1$ es un polinomio. Los polinomios son continuos en todo $\mathbb{R}$, por lo tanto el límite cuando $x \to 3$ se calcula por sustitución directa: $\lim_{x \to c} p(x) = p(c)$.

**Paso 2: Sustituir $x = 3$.**

$$\lim_{x \to 3} \left(2x^2 - 5x + 1\right) = 2(3)^2 - 5(3) + 1$$

**Paso 3: Calcular cada término.**

$$= 2 \cdot 9 - 15 + 1 = 18 - 15 + 1$$

**Paso 4: Obtener el resultado.**

$$= 4$$

### Respuesta Final

$$\lim_{x \to 3} \left(2x^2 - 5x + 1\right) = 4$$

---

## Ejercicio 32 — Límite con indeterminación $\frac{0}{0}$ por factorización

**Dificultad:** ⭐ Básica

### Enunciado

Calcular el siguiente límite:

$$\lim_{x \to 2} \frac{x^2 - 4}{x - 2}$$

### Resolución paso a paso

**Paso 1: Verificar la indeterminación.**
Sustituyendo $x = 2$: numerador $= 2^2 - 4 = 0$, denominador $= 2 - 2 = 0$. Se obtiene la indeterminación $\frac{0}{0}$, por lo que no se puede aplicar sustitución directa.

**Paso 2: Factorizar el numerador.**
Se reconoce una diferencia de cuadrados:

$$x^2 - 4 = (x-2)(x+2)$$

**Paso 3: Simplificar la expresión.**
Como $x \to 2$ pero $x \neq 2$, el factor $(x-2)$ es distinto de cero y puede cancelarse:

$$\frac{x^2 - 4}{x - 2} = \frac{(x-2)(x+2)}{x-2} = x + 2$$

**Paso 4: Calcular el límite de la expresión simplificada.**

$$\lim_{x \to 2} (x + 2) = 2 + 2 = 4$$

### Respuesta Final

$$\lim_{x \to 2} \frac{x^2 - 4}{x - 2} = 4$$

---

## Ejercicio 33 — Límite con indeterminación $\frac{0}{0}$ por racionalización

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calcular el siguiente límite:

$$\lim_{x \to 9} \frac{\sqrt{x} - 3}{x - 9}$$

### Resolución paso a paso

**Paso 1: Verificar la indeterminación.**
Sustituyendo $x = 9$: numerador $= \sqrt{9} - 3 = 0$, denominador $= 9 - 9 = 0$. Se obtiene $\frac{0}{0}$. La presencia de la raíz cuadrada sugiere racionalizar el numerador.

**Paso 2: Multiplicar por el conjugado del numerador.**

$$\frac{\sqrt{x} - 3}{x - 9} \cdot \frac{\sqrt{x} + 3}{\sqrt{x} + 3}$$

**Paso 3: Desarrollar el numerador usando diferencia de cuadrados.**

$$= \frac{(\sqrt{x})^2 - 3^2}{(x-9)(\sqrt{x}+3)} = \frac{x - 9}{(x-9)(\sqrt{x}+3)}$$

**Paso 4: Cancelar el factor común $(x - 9)$.**
Como $x \to 9$ con $x \neq 9$:

$$= \frac{1}{\sqrt{x} + 3}$$

**Paso 5: Aplicar sustitución directa.**

$$\lim_{x \to 9} \frac{1}{\sqrt{x} + 3} = \frac{1}{\sqrt{9} + 3} = \frac{1}{3 + 3} = \frac{1}{6}$$

### Respuesta Final

$$\lim_{x \to 9} \frac{\sqrt{x} - 3}{x - 9} = \frac{1}{6}$$

---

## Ejercicio 34 — Límite al infinito de función racional

**Dificultad:** ⭐ Básica

### Enunciado

Calcular el siguiente límite:

$$\lim_{x \to +\infty} \frac{3x^2 - 2x + 5}{x^2 + 7x - 1}$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Ambos polinomios tienen grado 2 (mismo grado). La técnica consiste en dividir numerador y denominador por $x^2$, la mayor potencia presente.

**Paso 2: Dividir numerador y denominador por $x^2$.**

$$\frac{3x^2 - 2x + 5}{x^2 + 7x - 1} = \frac{\dfrac{3x^2}{x^2} - \dfrac{2x}{x^2} + \dfrac{5}{x^2}}{\dfrac{x^2}{x^2} + \dfrac{7x}{x^2} - \dfrac{1}{x^2}} = \frac{3 - \dfrac{2}{x} + \dfrac{5}{x^2}}{1 + \dfrac{7}{x} - \dfrac{1}{x^2}}$$

**Paso 3: Aplicar los límites término a término.**
Cuando $x \to +\infty$: $\dfrac{1}{x} \to 0$ y $\dfrac{1}{x^2} \to 0$.

$$\lim_{x \to +\infty} \frac{3 - \frac{2}{x} + \frac{5}{x^2}}{1 + \frac{7}{x} - \frac{1}{x^2}} = \frac{3 - 0 + 0}{1 + 0 - 0}$$

**Paso 4: Obtener el resultado.**

$$= \frac{3}{1} = 3$$

### Respuesta Final

$$\lim_{x \to +\infty} \frac{3x^2 - 2x + 5}{x^2 + 7x - 1} = 3$$

---

## Ejercicio 35 — Límite lateral y continuidad en un punto

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Dada la función definida a trozos:

$$f(x) = \begin{cases} x^2 + 1 & \text{si } x < 2 \\ 4x - 3 & \text{si } x \geq 2 \end{cases}$$

Determinar si $f$ es continua en $x = 2$.

### Resolución paso a paso

**Paso 1: Recordar la definición de continuidad.**
$f$ es continua en $x = 2$ si y solo si se cumplen las tres condiciones:
1. $f(2)$ existe.
2. $\lim_{x \to 2} f(x)$ existe (es decir, los límites laterales coinciden).
3. $\lim_{x \to 2} f(x) = f(2)$.

**Paso 2: Calcular $f(2)$.**
Como $x = 2$ satisface $x \geq 2$, se usa la segunda rama:

$$f(2) = 4(2) - 3 = 8 - 3 = 5$$

**Paso 3: Calcular el límite lateral izquierdo.**
Cuando $x \to 2^-$, se usa la rama $x^2 + 1$:

$$\lim_{x \to 2^-} f(x) = \lim_{x \to 2^-} (x^2 + 1) = 2^2 + 1 = 5$$

**Paso 4: Calcular el límite lateral derecho.**
Cuando $x \to 2^+$, se usa la rama $4x - 3$:

$$\lim_{x \to 2^+} f(x) = \lim_{x \to 2^+} (4x - 3) = 4(2) - 3 = 5$$

**Paso 5: Verificar las condiciones de continuidad.**
Como $\lim_{x \to 2^-} f(x) = \lim_{x \to 2^+} f(x) = 5$, el límite global existe e igual a $5$. Además, $f(2) = 5$. Las tres condiciones se cumplen.

### Respuesta Final

$f$ es **continua** en $x = 2$, ya que $\lim_{x \to 2^-} f(x) = \lim_{x \to 2^+} f(x) = f(2) = 5$.

---

## Ejercicio 36 — Límite con indeterminación $\frac{\infty}{\infty}$ de grados distintos

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calcular el siguiente límite:

$$\lim_{x \to -\infty} \frac{5x^3 - x + 2}{2x^2 + 3x - 4}$$

### Resolución paso a paso

**Paso 1: Identificar la indeterminación y la estrategia.**
Al sustituir $x \to -\infty$, tanto numerador como denominador tienden a $\infty$ en valor absoluto: indeterminación $\frac{\infty}{\infty}$. El numerador tiene grado 3 y el denominador grado 2. Se divide por $x^2$ (mayor grado del denominador).

**Paso 2: Dividir numerador y denominador por $x^2$.**

$$\frac{5x^3 - x + 2}{2x^2 + 3x - 4} = \frac{\dfrac{5x^3}{x^2} - \dfrac{x}{x^2} + \dfrac{2}{x^2}}{\dfrac{2x^2}{x^2} + \dfrac{3x}{x^2} - \dfrac{4}{x^2}} = \frac{5x - \dfrac{1}{x} + \dfrac{2}{x^2}}{2 + \dfrac{3}{x} - \dfrac{4}{x^2}}$$

**Paso 3: Analizar el comportamiento cuando $x \to -\infty$.**
Los términos $\dfrac{1}{x},\, \dfrac{2}{x^2},\, \dfrac{3}{x},\, \dfrac{4}{x^2} \to 0$. El numerador queda dominado por $5x$, que tiende a $-\infty$.

$$\lim_{x \to -\infty} \frac{5x - \frac{1}{x} + \frac{2}{x^2}}{2 + \frac{3}{x} - \frac{4}{x^2}} = \frac{-\infty}{2}$$

**Paso 4: Concluir el signo y valor del límite.**
El numerador tiende a $-\infty$ y el denominador tiende a $2 > 0$, por lo tanto:

$$\lim_{x \to -\infty} \frac{5x^3 - x + 2}{2x^2 + 3x - 4} = -\infty$$

### Respuesta Final

$$\lim_{x \to -\infty} \frac{5x^3 - x + 2}{2x^2 + 3x - 4} = -\infty$$

---

## Ejercicio 37 — Límite con indeterminación $\frac{0}{0}$ por factor común cúbico

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calcular el siguiente límite:

$$\lim_{x \to -1} \frac{x^3 + 1}{x^2 - 1}$$

### Resolución paso a paso

**Paso 1: Verificar la indeterminación.**
Sustituyendo $x = -1$: numerador $= (-1)^3 + 1 = -1 + 1 = 0$; denominador $= (-1)^2 - 1 = 1 - 1 = 0$. Indeterminación $\frac{0}{0}$.

**Paso 2: Factorizar el numerador.**
Se reconoce la suma de cubos: $a^3 + b^3 = (a+b)(a^2 - ab + b^2)$ con $a = x$, $b = 1$:

$$x^3 + 1 = (x + 1)(x^2 - x + 1)$$

**Paso 3: Factorizar el denominador.**
Se reconoce la diferencia de cuadrados: $x^2 - 1 = (x-1)(x+1)$.

**Paso 4: Reescribir y cancelar el factor común.**
Como $x \to -1$ con $x \neq -1$, el factor $(x+1) \neq 0$ y puede cancelarse:

$$\frac{x^3 + 1}{x^2 - 1} = \frac{(x+1)(x^2 - x + 1)}{(x-1)(x+1)} = \frac{x^2 - x + 1}{x - 1}$$

**Paso 5: Aplicar sustitución directa.**

$$\lim_{x \to -1} \frac{x^2 - x + 1}{x - 1} = \frac{(-1)^2 - (-1) + 1}{(-1) - 1} = \frac{1 + 1 + 1}{-2} = \frac{3}{-2}$$

### Respuesta Final

$$\lim_{x \to -1} \frac{x^3 + 1}{x^2 - 1} = -\frac{3}{2}$$

---

## Ejercicio 38 — Discontinuidad evitable y extensión por continuidad

**Dificultad:** ⭐⭐⭐ Avanzada

### Enunciado

Sea $g(x) = \dfrac{x^2 - 3x - 10}{x - 5}$.

a) Determinar el tipo de discontinuidad en $x = 5$.
b) Definir $\tilde{g}(x)$ que extienda $g$ por continuidad en $x = 5$.

### Resolución paso a paso

## Ejercicio 41 — Límite directo por sustitución

**Dificultad:** ⭐ Básica

### Enunciado

Calcular el siguiente límite:

$$\lim_{x \to 3} \left(2x^2 - 5x + 1\right)$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
La función $f(x) = 2x^2 - 5x + 1$ es un polinomio. Los polinomios son continuos en todo $\mathbb{R}$, por lo tanto el límite cuando $x \to 3$ se calcula evaluando directamente $f(3)$.

**Paso 2: Sustituir $x = 3$.**

$$\lim_{x \to 3} \left(2x^2 - 5x + 1\right) = 2(3)^2 - 5(3) + 1$$

**Paso 3: Calcular cada término.**

$$= 2 \cdot 9 - 15 + 1$$

$$= 18 - 15 + 1$$

**Paso 4: Obtener el resultado.**

$$= 4$$

### Respuesta Final

$$\lim_{x \to 3} \left(2x^2 - 5x + 1\right) = 4$$

---

## Ejercicio 42 — Límite con indeterminación $\frac{0}{0}$ por factorización

**Dificultad:** ⭐ Básica

### Enunciado

Calcular el siguiente límite:

$$\lim_{x \to 2} \frac{x^2 - 4}{x - 2}$$

### Resolución paso a paso

**Paso 1: Verificar la indeterminación.**
Sustituyendo $x = 2$: numerador $= 2^2 - 4 = 0$ y denominador $= 2 - 2 = 0$. Se obtiene la indeterminación $\frac{0}{0}$, por lo que no se puede aplicar sustitución directa.

**Paso 2: Factorizar el numerador.**
Se reconoce una diferencia de cuadrados:

$$x^2 - 4 = (x-2)(x+2)$$

**Paso 3: Simplificar la expresión.**
Como $x \to 2$ pero $x \neq 2$, el factor $(x-2)$ no es cero y puede cancelarse:

$$\frac{x^2 - 4}{x - 2} = \frac{(x-2)(x+2)}{x-2} = x + 2$$

**Paso 4: Calcular el límite de la expresión simplificada.**

$$\lim_{x \to 2} (x + 2) = 2 + 2 = 4$$

### Respuesta Final

$$\lim_{x \to 2} \frac{x^2 - 4}{x - 2} = 4$$

---

## Ejercicio 43 — Límite con indeterminación $\frac{0}{0}$ por racionalización

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calcular el siguiente límite:

$$\lim_{x \to 9} \frac{\sqrt{x} - 3}{x - 9}$$

### Resolución paso a paso

**Paso 1: Verificar la indeterminación.**
Sustituyendo $x = 9$: numerador $= \sqrt{9} - 3 = 0$ y denominador $= 9 - 9 = 0$. Se presenta la indeterminación $\frac{0}{0}$. La estrategia es multiplicar por el conjugado del numerador.

**Paso 2: Multiplicar y dividir por el conjugado $(\sqrt{x} + 3)$.**

$$\frac{\sqrt{x} - 3}{x - 9} \cdot \frac{\sqrt{x} + 3}{\sqrt{x} + 3} = \frac{(\sqrt{x} - 3)(\sqrt{x} + 3)}{(x - 9)(\sqrt{x} + 3)}$$

**Paso 3: Simplificar el numerador usando diferencia de cuadrados.**

$$(\sqrt{x} - 3)(\sqrt{x} + 3) = x - 9$$

Entonces:

$$\frac{x - 9}{(x - 9)(\sqrt{x} + 3)}$$

**Paso 4: Cancelar el factor $(x - 9)$ (válido pues $x \neq 9$).**

$$= \frac{1}{\sqrt{x} + 3}$$

**Paso 5: Evaluar el límite.**

$$\lim_{x \to 9} \frac{1}{\sqrt{x} + 3} = \frac{1}{\sqrt{9} + 3} = \frac{1}{3 + 3} = \frac{1}{6}$$

### Respuesta Final

$$\lim_{x \to 9} \frac{\sqrt{x} - 3}{x - 9} = \frac{1}{6}$$

---

## Ejercicio 44 — Límite lateral e infinito

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calcular los límites laterales y determinar si existe el límite:

$$\lim_{x \to 1} \frac{3}{(x-1)^2}$$

### Resolución paso a paso

**Paso 1: Identificar el comportamiento en $x = 1$.**
El denominador $(x-1)^2$ se anula en $x = 1$ y el numerador es $3 \neq 0$, por lo que hay una discontinuidad. Se analizan los límites laterales para determinar si el límite es $+\infty$ o $-\infty$.

**Paso 2: Estudiar el signo del denominador.**
Para cualquier $x \neq 1$, se cumple $(x-1)^2 > 0$. Entonces $\frac{3}{(x-1)^2} > 0$ siempre.

**Paso 3: Calcular el límite por la izquierda ($x \to 1^-$).**
Cuando $x \to 1^-$, $(x-1)^2 \to 0^+$, por lo tanto:

$$\lim_{x \to 1^-} \frac{3}{(x-1)^2} = +\infty$$

**Paso 4: Calcular el límite por la derecha ($x \to 1^+$).**
Cuando $x \to 1^+$, $(x-1)^2 \to 0^+$, por lo tanto:

$$\lim_{x \to 1^+} \frac{3}{(x-1)^2} = +\infty$$

**Paso 5: Concluir sobre la existencia del límite.**
Como ambos límites laterales coinciden (ambos son $+\infty$), se dice que:

$$\lim_{x \to 1} \frac{3}{(x-1)^2} = +\infty$$

### Respuesta Final

$$\lim_{x \to 1} \frac{3}{(x-1)^2} = +\infty$$

Los límites laterales coinciden; el límite existe (como límite infinito).

---

## Ejercicio 45 — Límite en el infinito de función racional

**Dificultad:** ⭐ Básica

### Enunciado

Calcular el siguiente límite:

$$\lim_{x \to +\infty} \frac{4x^2 - 3x + 7}{2x^2 + x - 5}$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Cuando $x \to \infty$ en una función racional, se divide numerador y denominador por la potencia más alta de $x$ presente, que en este caso es $x^2$.

**Paso 2: Dividir numerador y denominador por $x^2$.**

$$\frac{4x^2 - 3x + 7}{2x^2 + x - 5} = \frac{\dfrac{4x^2}{x^2} - \dfrac{3x}{x^2} + \dfrac{7}{x^2}}{\dfrac{2x^2}{x^2} + \dfrac{x}{x^2} - \dfrac{5}{x^2}} = \frac{4 - \dfrac{3}{x} + \dfrac{7}{x^2}}{2 + \dfrac{1}{x} - \dfrac{5}{x^2}}$$

**Paso 3: Aplicar los límites conocidos cuando $x \to +\infty$.**
Se sabe que $\dfrac{1}{x} \to 0$ y $\dfrac{1}{x^2} \to 0$ cuando $x \to +\infty$:

$$\lim_{x \to +\infty} \frac{4 - \dfrac{3}{x} + \dfrac{7}{x^2}}{2 + \dfrac{1}{x} - \dfrac{5}{x^2}} = \frac{4 - 0 + 0}{2 + 0 - 0}$$

**Paso 4: Obtener el resultado.**

$$= \frac{4}{2} = 2$$

### Respuesta Final

$$\lim_{x \to +\infty} \frac{4x^2 - 3x + 7}{2x^2 + x - 5} = 2$$

---

## Ejercicio 46 — Límite con indeterminación $\frac{0}{0}$ por factorización de cúbica

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calcular el siguiente límite:

$$\lim_{x \to -1} \frac{x^3 + 1}{x^2 - 1}$$

### Resolución paso a paso

**Paso 1: Verificar la indeterminación.**
Sustituyendo $x = -1$: numerador $= (-1)^3 + 1 = -1 + 1 = 0$ y denominador $= (-1)^2 - 1 = 0$. Indeterminación $\frac{0}{0}$. Se factorizan numerador y denominador.

**Paso 2: Factorizar el numerador.**
Se aplica la identidad de suma de cubos: $a^3 + b^3 = (a+b)(a^2 - ab + b^2)$ con $a = x$, $b = 1$:

$$x^3 + 1 = (x + 1)(x^2 - x + 1)$$

**Paso 3: Factorizar el denominador.**
Se aplica diferencia de cuadrados:

$$x^2 - 1 = (x-1)(x+1)$$

**Paso 4: Reescribir y cancelar el factor común $(x+1)$.**
Como $x \to -1$ pero $x \neq -1$, el factor $(x+1)$ no es cero y puede simplificarse:

$$\frac{x^3 + 1}{x^2 - 1} = \frac{(x+1)(x^2 - x + 1)}{(x-1)(x+1)} = \frac{x^2 - x + 1}{x - 1}$$

**Paso 5: Evaluar el límite.**

$$\lim_{x \to -1} \frac{x^2 - x + 1}{x - 1} = \frac{(-1)^2 - (-1) + 1}{-1 - 1} = \frac{1 + 1 + 1}{-2} = \frac{3}{-2}$$

### Respuesta Final

$$\lim_{x \to -1} \frac{x^3 + 1}{x^2 - 1} = -\frac{3}{2}$$

---

## Ejercicio 47 — Continuidad de una función definida a trozos

**Dificultad:** ⭐⭐⭐ Avanzada

### Enunciado

Determinar para qué valor de $k$ la siguiente función es continua en $x = 2$:

$$f(x) = \begin{cases} \dfrac{x^2 - x - 2}{x - 2} & \text{si } x \neq 2 \\[8pt] k & \text{si } x = 2 \end{cases}$$

### Resolución paso a paso

**Paso 1: Recordar la definición de continuidad en un punto.**
La función $f$ es continua en $x = 2$ si y solo si se cumplen tres condiciones:
1. $f(2)$ está definida.
2. Existe $\displaystyle\lim_{x \to 2} f(x)$.
3. $\displaystyle\lim_{x \to 2} f(x) = f(2)$.

Por enunciado, $f(2) = k$, así que la condición 1 se satisface. El valor $k$ debe igualarse al límite.

**Paso 2: Calcular $\displaystyle\lim_{x \to 2} f(x)$.**
Para $x \neq 2$, $f(x) = \dfrac{x^2 - x - 2}{x - 2}$. Verificamos: numerador en $x=2$ es $4 - 2 - 2 = 0$ y denominador $= 0$. Indeterminación $\frac{0}{0}$.

**Paso 3: Factorizar el numerador.**
Buscamos raíces de $x^2 - x - 2$: raíces en $x = 2$ y $x = -1$, por lo tanto:

$$x^2 - x - 2 = (x - 2)(x + 1)$$

**Paso 4: Simplificar y calcular el límite.**
Como $x \neq 2$, cancelamos $(x-2)$:

$$\frac{(x-2)(x+1)}{x-2} = x + 1$$

$$\lim_{x \to 2}(x + 1) = 2 + 1 = 3$$

**Paso 5: Imponer la condición de continuidad.**
Para que $f$ sea continua en $x = 2$ se requiere:

$$k = \lim_{x \to 2} f(x) = 3$$

### Respuesta Final

Para que $f$ sea continua en $x = 2$, debe ser $k = 3$.

---

## Ejercicio 48 — Límite con indeterminación $\infty - \infty$ por racionalización

**Dificultad:** ⭐⭐⭐ Avanzada

### Enunciado

Calcular el siguiente límite:

$$\lim_{x \to +\infty} \left(\sqrt{x^2 + 5x} - x\right)$$

### Resolución paso a paso

**Paso 1: Identificar la indeterminación.**
Cuando $x \to +\infty$: $\sqrt{x^2 + 5x} \to +\infty$ y $x \to +\infty$. Se tiene la forma indeterminada $\infty - \infty$. La estrategia es multiplicar por el conjugado.

**Paso 2: Multiplicar y dividir por el conjugado $\left(\sqrt{x^2

## Ejercicio 51 — Límite directo por sustitución

**Dificultad:** ⭐ Básica

### Enunciado

Calcular el siguiente límite:

$$\lim_{x \to 3} \left(2x^2 - 5x + 1\right)$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
La función $f(x) = 2x^2 - 5x + 1$ es un polinomio. Los polinomios son continuos en todo $\mathbb{R}$, por lo que el límite se calcula por sustitución directa: $\lim_{x \to a} p(x) = p(a)$.

**Paso 2: Sustituir $x = 3$.**

$$\lim_{x \to 3} \left(2x^2 - 5x + 1\right) = 2(3)^2 - 5(3) + 1$$

**Paso 3: Calcular cada término.**

$$= 2 \cdot 9 - 15 + 1 = 18 - 15 + 1$$

**Paso 4: Obtener el resultado.**

$$= 4$$

### Respuesta Final

$$\lim_{x \to 3} \left(2x^2 - 5x + 1\right) = 4$$

---

## Ejercicio 52 — Límite con indeterminación $\frac{0}{0}$ por factoreo

**Dificultad:** ⭐ Básica

### Enunciado

Calcular el siguiente límite:

$$\lim_{x \to 2} \frac{x^2 - 4}{x - 2}$$

### Resolución paso a paso

**Paso 1: Verificar la indeterminación.**
Sustituyendo $x = 2$: numerador $= 2^2 - 4 = 0$, denominador $= 2 - 2 = 0$. Se obtiene la indeterminación $\frac{0}{0}$, por lo que no se puede aplicar sustitución directa.

**Paso 2: Factorizar el numerador.**
Se reconoce diferencia de cuadrados:

$$x^2 - 4 = (x-2)(x+2)$$

**Paso 3: Simplificar la expresión.**
Para $x \neq 2$ se puede cancelar el factor común $(x - 2)$:

$$\frac{x^2 - 4}{x - 2} = \frac{(x-2)(x+2)}{x-2} = x + 2$$

**Paso 4: Calcular el límite de la expresión simplificada.**

$$\lim_{x \to 2} (x + 2) = 2 + 2 = 4$$

### Respuesta Final

$$\lim_{x \to 2} \frac{x^2 - 4}{x - 2} = 4$$

---

## Ejercicio 53 — Límite con indeterminación $\frac{0}{0}$ por racionalización

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calcular el siguiente límite:

$$\lim_{x \to 9} \frac{\sqrt{x} - 3}{x - 9}$$

### Resolución paso a paso

**Paso 1: Verificar la indeterminación.**
Sustituyendo $x = 9$: numerador $= \sqrt{9} - 3 = 0$, denominador $= 9 - 9 = 0$. Hay indeterminación $\frac{0}{0}$. La estrategia es multiplicar por el conjugado del numerador.

**Paso 2: Multiplicar numerador y denominador por el conjugado $(\sqrt{x} + 3)$.**

$$\frac{\sqrt{x} - 3}{x - 9} \cdot \frac{\sqrt{x} + 3}{\sqrt{x} + 3} = \frac{(\sqrt{x} - 3)(\sqrt{x} + 3)}{(x - 9)(\sqrt{x} + 3)}$$

**Paso 3: Simplificar el numerador usando diferencia de cuadrados.**

$$(\sqrt{x} - 3)(\sqrt{x} + 3) = x - 9$$

Entonces la expresión queda:

$$\frac{x - 9}{(x - 9)(\sqrt{x} + 3)}$$

**Paso 4: Cancelar el factor común $(x - 9)$, válido para $x \neq 9$.**

$$= \frac{1}{\sqrt{x} + 3}$$

**Paso 5: Aplicar sustitución directa.**

$$\lim_{x \to 9} \frac{1}{\sqrt{x} + 3} = \frac{1}{\sqrt{9} + 3} = \frac{1}{3 + 3} = \frac{1}{6}$$

### Respuesta Final

$$\lim_{x \to 9} \frac{\sqrt{x} - 3}{x - 9} = \frac{1}{6}$$

---

## Ejercicio 54 — Límite lateral y existencia del límite

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Dada la función definida por partes:

$$f(x) = \begin{cases} x^2 + 1 & \text{si } x < 2 \\ 3x - 1 & \text{si } x \geq 2 \end{cases}$$

Determinar si existe $\lim_{x \to 2} f(x)$.

### Resolución paso a paso

**Paso 1: Recordar la condición de existencia del límite.**
El límite $\lim_{x \to a} f(x)$ existe si y solo si los límites laterales existen y son iguales:

$$\lim_{x \to a^-} f(x) = \lim_{x \to a^+} f(x)$$

**Paso 2: Calcular el límite por la izquierda ($x \to 2^-$).**
Para $x < 2$ se usa $f(x) = x^2 + 1$:

$$\lim_{x \to 2^-} f(x) = \lim_{x \to 2^-} (x^2 + 1) = (2)^2 + 1 = 4 + 1 = 5$$

**Paso 3: Calcular el límite por la derecha ($x \to 2^+$).**
Para $x \geq 2$ se usa $f(x) = 3x - 1$:

$$\lim_{x \to 2^+} f(x) = \lim_{x \to 2^+} (3x - 1) = 3(2) - 1 = 6 - 1 = 5$$

**Paso 4: Comparar los límites laterales.**

$$\lim_{x \to 2^-} f(x) = 5 = \lim_{x \to 2^+} f(x)$$

Como ambos límites laterales coinciden, el límite existe y vale $5$.

### Respuesta Final

$$\lim_{x \to 2} f(x) = 5$$

Los límites laterales son iguales, por lo tanto el límite existe.

---

## Ejercicio 55 — Límite al infinito de función racional

**Dificultad:** ⭐ Básica

### Enunciado

Calcular el siguiente límite:

$$\lim_{x \to +\infty} \frac{4x^3 - 2x + 7}{6x^3 + x^2 - 5}$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se tiene una fracción de polinomios con el mismo grado en numerador y denominador (grado 3). Se divide numerador y denominador por $x^3$, la mayor potencia presente.

**Paso 2: Dividir cada término por $x^3$.**

$$\frac{4x^3 - 2x + 7}{6x^3 + x^2 - 5} = \frac{\dfrac{4x^3}{x^3} - \dfrac{2x}{x^3} + \dfrac{7}{x^3}}{\dfrac{6x^3}{x^3} + \dfrac{x^2}{x^3} - \dfrac{5}{x^3}} = \frac{4 - \dfrac{2}{x^2} + \dfrac{7}{x^3}}{6 + \dfrac{1}{x} - \dfrac{5}{x^3}}$$

**Paso 3: Aplicar el límite cuando $x \to +\infty$.**
Cada término de la forma $\dfrac{c}{x^n}$ con $n \geq 1$ tiende a $0$:

$$\lim_{x \to +\infty} \frac{4 - \dfrac{2}{x^2} + \dfrac{7}{x^3}}{6 + \dfrac{1}{x} - \dfrac{5}{x^3}} = \frac{4 - 0 + 0}{6 + 0 - 0}$$

**Paso 4: Calcular el resultado.**

$$= \frac{4}{6} = \frac{2}{3}$$

### Respuesta Final

$$\lim_{x \to +\infty} \frac{4x^3 - 2x + 7}{6x^3 + x^2 - 5} = \frac{2}{3}$$

---

## Ejercicio 56 — Análisis de continuidad en un punto

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Determinar si la siguiente función es continua en $x = 1$:

$$f(x) = \begin{cases} \dfrac{x^2 - 1}{x - 1} & \text{si } x \neq 1 \\[6pt] 3 & \text{si } x = 1 \end{cases}$$

### Resolución paso a paso

**Paso 1: Recordar las tres condiciones de continuidad en un punto.**
$f$ es continua en $x = 1$ si y solo si:
1. $f(1)$ está definida.
2. $\lim_{x \to 1} f(x)$ existe.
3. $\lim_{x \to 1} f(x) = f(1)$.

**Paso 2: Verificar la condición 1.**
Por definición de la función: $f(1) = 3$. ✓ El valor existe.

**Paso 3: Calcular $\lim_{x \to 1} f(x)$ para $x \neq 1$.**
Sustituyendo $x = 1$ en $\dfrac{x^2-1}{x-1}$: se obtiene $\dfrac{0}{0}$. Se factoriza:

$$\frac{x^2 - 1}{x - 1} = \frac{(x-1)(x+1)}{x-1} = x + 1 \quad (x \neq 1)$$

**Paso 4: Aplicar el límite.**

$$\lim_{x \to 1} f(x) = \lim_{x \to 1} (x + 1) = 1 + 1 = 2$$

**Paso 5: Verificar la condición 3.**

$$\lim_{x \to 1} f(x) = 2 \neq 3 = f(1)$$

La condición 3 **no** se cumple. La función tiene una discontinuidad evitable en $x = 1$ (el límite existe pero no coincide con el valor de la función).

### Respuesta Final

$f$ **no es continua** en $x = 1$. Presenta una **discontinuidad evitable** en ese punto, ya que $\lim_{x \to 1} f(x) = 2 \neq 3 = f(1)$. Para hacerla continua bastaría redefinir $f(1) = 2$.

---

## Ejercicio 57 — Límite con indeterminación $\frac{\infty}{\infty}$ de distinto grado

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calcular el siguiente límite:

$$\lim_{x \to -\infty} \frac{5x^2 - 3x}{2x^4 + 1}$$

### Resolución paso a paso

**Paso 1: Identificar la indeterminación y la estrategia.**
Al sustituir $x \to -\infty$ tanto el numerador como el denominador tienden a $+\infty$, generando la indeterminación $\frac{\infty}{\infty}$. Se divide por la mayor potencia del denominador: $x^4$.

**Paso 2: Dividir numerador y denominador por $x^4$.**

$$\frac{5x^2 - 3x}{2x^4 + 1} = \frac{\dfrac{5x^2}{x^4} - \dfrac{3x}{x^4}}{\dfrac{2x^4}{x^4} + \dfrac{1}{x^4}} = \frac{\dfrac{5}{x^2} - \dfrac{3}{x^3}}{2 + \dfrac{1}{x^4}}$$

**Paso 3: Aplicar el límite cuando $x \to -\infty$.**
Cada potencia negativa de $x$ tiende a $0$:

$$\lim_{x \to -\infty} \frac{\dfrac{5}{x^2} - \dfrac{3}{x^3}}{2 + \dfrac{1}{x^4}} = \frac{0 - 0}{2 + 0}$$

**Paso 4: Calcular el resultado.**

$$= \frac{0}{2} = 0$$

**Nota:** El grado del numerador ($2$) es menor que el grado del denominador ($4$), por eso el límite es $0$. Esto es coherente con la regla general de límites de funciones racionales al infinito.

### Respuesta Final

$$\lim_{x \to -\infty} \frac{5x^2 - 3x}{2x^4 + 1} = 0$$

---

## Ejercicio 58 — Límite con indeterminación $\frac{0}{0}$ por factoreo cúbico

**Dificultad:** ⭐⭐⭐ Avanzada

### Enunciado

Calcular el siguiente límite:

$$\lim_{x \to -2} \frac{x^3 + 8}{x^2 + 5x + 6}$$

### Resolución paso a paso

**Paso 1: Verificar la indeterminación.**
Sustituyendo $x = -2$:
- Numerador: $(-2)^3 + 8 = -8 + 8 = 0$
- Denominador: $(-2)^2 + 5(-2) + 6 = 4 - 10 + 6 = 0$

Hay indeterminación $\frac{0}{0}$. Se deben factorizar ambos.

**Paso 2: Factorizar el numerador usando suma de cubos.**
La identidad es $a^3 + b^3 = (a+b)(a^2 - ab + b

## Ejercicio 61 — Límite directo por sustitución

**Dificultad:** ⭐ Básica

### Enunciado

Calculá el siguiente límite:

$$\lim_{x \to 3} \left(2x^2 - 5x + 1\right)$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
La función $f(x) = 2x^2 - 5x + 1$ es un polinomio. Los polinomios son continuos en todo $\mathbb{R}$, por lo tanto el límite se calcula por sustitución directa: $\lim_{x \to a} p(x) = p(a)$.

**Paso 2: Sustituir $x = 3$ en la expresión.**

$$\lim_{x \to 3} \left(2x^2 - 5x + 1\right) = 2(3)^2 - 5(3) + 1$$

**Paso 3: Calcular cada término.**

$$= 2 \cdot 9 - 15 + 1 = 18 - 15 + 1$$

**Paso 4: Obtener el resultado.**

$$= 4$$

### Respuesta Final

$$\lim_{x \to 3} \left(2x^2 - 5x + 1\right) = 4$$

---

## Ejercicio 62 — Límite con indeterminación $\frac{0}{0}$ por factoreo

**Dificultad:** ⭐ Básica

### Enunciado

Calculá el siguiente límite:

$$\lim_{x \to 2} \frac{x^2 - 4}{x - 2}$$

### Resolución paso a paso

**Paso 1: Verificar la indeterminación.**
Sustituimos $x = 2$: el numerador vale $2^2 - 4 = 0$ y el denominador vale $2 - 2 = 0$. Se presenta la indeterminación $\frac{0}{0}$, por lo que no se puede aplicar sustitución directa. La estrategia es factorizar el numerador.

**Paso 2: Factorizar el numerador.**
Reconocemos una diferencia de cuadrados:

$$x^2 - 4 = (x-2)(x+2)$$

**Paso 3: Simplificar la fracción.**
Como $x \to 2$ pero $x \neq 2$, el factor $(x-2)$ es no nulo y se puede cancelar:

$$\frac{x^2 - 4}{x - 2} = \frac{(x-2)(x+2)}{x-2} = x + 2$$

**Paso 4: Calcular el límite de la expresión simplificada.**

$$\lim_{x \to 2} (x + 2) = 2 + 2 = 4$$

### Respuesta Final

$$\lim_{x \to 2} \frac{x^2 - 4}{x - 2} = 4$$

---

## Ejercicio 63 — Límite con indeterminación $\frac{0}{0}$ por racionalización

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calculá el siguiente límite:

$$\lim_{x \to 9} \frac{\sqrt{x} - 3}{x - 9}$$

### Resolución paso a paso

**Paso 1: Verificar la indeterminación.**
Sustituimos $x = 9$: numerador $= \sqrt{9} - 3 = 0$, denominador $= 9 - 9 = 0$. Indeterminación $\frac{0}{0}$. La estrategia es multiplicar por el conjugado del numerador.

**Paso 2: Multiplicar numerador y denominador por el conjugado $(\sqrt{x} + 3)$.**

$$\frac{\sqrt{x} - 3}{x - 9} \cdot \frac{\sqrt{x} + 3}{\sqrt{x} + 3} = \frac{(\sqrt{x} - 3)(\sqrt{x} + 3)}{(x-9)(\sqrt{x}+3)}$$

**Paso 3: Simplificar el numerador usando diferencia de cuadrados.**

$$(\sqrt{x} - 3)(\sqrt{x} + 3) = x - 9$$

Entonces la expresión queda:

$$\frac{x - 9}{(x - 9)(\sqrt{x} + 3)}$$

**Paso 4: Cancelar el factor común $(x - 9)$, válido pues $x \neq 9$.**

$$= \frac{1}{\sqrt{x} + 3}$$

**Paso 5: Calcular el límite por sustitución directa.**

$$\lim_{x \to 9} \frac{1}{\sqrt{x} + 3} = \frac{1}{\sqrt{9} + 3} = \frac{1}{3 + 3} = \frac{1}{6}$$

### Respuesta Final

$$\lim_{x \to 9} \frac{\sqrt{x} - 3}{x - 9} = \frac{1}{6}$$

---

## Ejercicio 64 — Límite al infinito de función racional

**Dificultad:** ⭐ Básica

### Enunciado

Calculá el siguiente límite:

$$\lim_{x \to +\infty} \frac{3x^2 - 7x + 1}{5x^2 + 2x - 4}$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Ambos polinomios tienen el mismo grado (grado 2). Para límites al infinito de funciones racionales, se divide numerador y denominador por la potencia de $x$ de mayor grado, en este caso $x^2$.

**Paso 2: Dividir cada término por $x^2$.**

$$\frac{3x^2 - 7x + 1}{5x^2 + 2x - 4} = \frac{\dfrac{3x^2}{x^2} - \dfrac{7x}{x^2} + \dfrac{1}{x^2}}{\dfrac{5x^2}{x^2} + \dfrac{2x}{x^2} - \dfrac{4}{x^2}} = \frac{3 - \dfrac{7}{x} + \dfrac{1}{x^2}}{5 + \dfrac{2}{x} - \dfrac{4}{x^2}}$$

**Paso 3: Aplicar los límites conocidos $\lim_{x \to +\infty} \frac{k}{x^n} = 0$.**

Cuando $x \to +\infty$, los términos $\dfrac{7}{x}$, $\dfrac{1}{x^2}$, $\dfrac{2}{x}$ y $\dfrac{4}{x^2}$ tienden todos a $0$.

**Paso 4: Obtener el resultado.**

$$\lim_{x \to +\infty} \frac{3 - \frac{7}{x} + \frac{1}{x^2}}{5 + \frac{2}{x} - \frac{4}{x^2}} = \frac{3 - 0 + 0}{5 + 0 - 0} = \frac{3}{5}$$

### Respuesta Final

$$\lim_{x \to +\infty} \frac{3x^2 - 7x + 1}{5x^2 + 2x - 4} = \frac{3}{5}$$

---

## Ejercicio 65 — Límite lateral y análisis de existencia

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Dada la función

$$f(x) = \frac{|x - 4|}{x - 4}$$

analizá si existe $\lim_{x \to 4} f(x)$ calculando los límites laterales.

### Resolución paso a paso

**Paso 1: Expresar el valor absoluto por casos.**
Recordamos que $|x - 4| = \begin{cases} x - 4 & \text{si } x > 4 \\ -(x-4) & \text{si } x < 4 \end{cases}$

Por lo tanto $f(x) = \begin{cases} \dfrac{x-4}{x-4} = 1 & \text{si } x > 4 \\[6pt] \dfrac{-(x-4)}{x-4} = -1 & \text{si } x < 4 \end{cases}$

**Paso 2: Calcular el límite por la derecha ($x \to 4^+$).**
Para $x > 4$, $f(x) = 1$:

$$\lim_{x \to 4^+} f(x) = \lim_{x \to 4^+} 1 = 1$$

**Paso 3: Calcular el límite por la izquierda ($x \to 4^-$).**
Para $x < 4$, $f(x) = -1$:

$$\lim_{x \to 4^-} f(x) = \lim_{x \to 4^-} (-1) = -1$$

**Paso 4: Comparar los límites laterales.**
Para que exista el límite bilateral es condición necesaria y suficiente que ambos límites laterales sean iguales:

$$\lim_{x \to 4^+} f(x) = 1 \neq -1 = \lim_{x \to 4^-} f(x)$$

Como los límites laterales son distintos, el límite bilateral no existe.

### Respuesta Final

$$\lim_{x \to 4^+} f(x) = 1, \quad \lim_{x \to 4^-} f(x) = -1$$

$$\therefore \quad \lim_{x \to 4} \frac{|x-4|}{x-4} \textbf{ no existe.}$$

---

## Ejercicio 66 — Indeterminación $\frac{\infty}{\infty}$ con raíz cuadrada

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calculá el siguiente límite:

$$\lim_{x \to +\infty} \frac{\sqrt{4x^2 + 3x} - 2x}{1}$$

es decir,

$$\lim_{x \to +\infty} \left(\sqrt{4x^2 + 3x} - 2x\right)$$

### Resolución paso a paso

**Paso 1: Identificar la indeterminación.**
Cuando $x \to +\infty$: $\sqrt{4x^2 + 3x} \to +\infty$ y $2x \to +\infty$. Se presenta la indeterminación $\infty - \infty$. La estrategia es multiplicar y dividir por el conjugado.

**Paso 2: Multiplicar y dividir por el conjugado $\left(\sqrt{4x^2 + 3x} + 2x\right)$.**

$$\sqrt{4x^2+3x} - 2x = \frac{\left(\sqrt{4x^2+3x} - 2x\right)\left(\sqrt{4x^2+3x} + 2x\right)}{\sqrt{4x^2+3x} + 2x}$$

**Paso 3: Simplificar el numerador usando diferencia de cuadrados.**

$$\left(\sqrt{4x^2+3x}\right)^2 - (2x)^2 = 4x^2 + 3x - 4x^2 = 3x$$

La expresión queda:

$$\frac{3x}{\sqrt{4x^2 + 3x} + 2x}$$

**Paso 4: Dividir numerador y denominador por $x$ (con $x > 0$, entonces $x = \sqrt{x^2}$).**

$$= \frac{3x}{x\left(\sqrt{4 + \frac{3}{x}} + 2\right)} = \frac{3}{\sqrt{4 + \frac{3}{x}} + 2}$$

**Paso 5: Tomar el límite cuando $x \to +\infty$.**

$$\lim_{x \to +\infty} \frac{3}{\sqrt{4 + \frac{3}{x}} + 2} = \frac{3}{\sqrt{4 + 0} + 2} = \frac{3}{2 + 2} = \frac{3}{4}$$

### Respuesta Final

$$\lim_{x \to +\infty} \left(\sqrt{4x^2 + 3x} - 2x\right) = \frac{3}{4}$$

---

## Ejercicio 67 — Continuidad de una función definida por partes

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Determiná el valor de $k$ para que la siguiente función sea continua en $x = 2$:

$$f(x) = \begin{cases} \dfrac{x^2 - 4}{x - 2} & \text{si } x \neq 2 \\[8pt] k & \text{si } x = 2 \end{cases}$$

### Resolución paso a paso

**Paso 1: Recordar la condición de continuidad.**
Una función $f$ es continua en $x = a$ si y sólo si se cumplen tres condiciones simultáneamente:
1. $f(a)$ está definida.
2. $\lim_{x \to a} f(x)$ existe.
3. $\lim_{x \to a} f(x) = f(a)$.

En este problema, $f(2) = k$ está definida. Debemos calcular el límite e igualarlo a $k$.

**Paso 2: Calcular $\lim_{x \to 2} f(x)$.**
Para $x \neq 2$, trabajamos con $\dfrac{x^2 - 4}{x - 2}$. Verificamos: numerador $= 0$, denominador $= 0$ — indeterminación $\frac{0}{0}$.

**Paso 3: Factorizar el numerador.**

$$x^2 - 4 = (x-2)(x+2)$$

$$\frac{x^2 - 4}{x - 2} = \frac{(x-2)(x+2)}{x-2} = x + 2 \quad (x \neq 2)$$

**Paso 4: Calcular el límite.**

$$\lim_{x \to 2} \frac{x^2 - 4}{x - 2} = \lim_{x \to 2} (x + 2) = 2 + 2 = 4$$

**Paso 5: Aplicar la condición de continuidad.**
Para que $f$ sea continua en $x = 2$:

$$k = \lim_{x \to 2} f(x) = 4$$

### Respuesta Final

Para que $f$ sea continua en $x = 2$, debe ser $k = 4$.

---

## Ejercicio 68 — Límite con indeterminación $\frac{0}{0}$ por división de polinomios

**Dificultad:** ⭐⭐⭐ Avanzada

## Ejercicio 71 — Límite directo por sustitución

**Dificultad:** ⭐ Básica

### Enunciado

Calcular el siguiente límite:

$$\lim_{x \to 3} \frac{2x^2 - 5x + 1}{x + 4}$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Cuando el denominador no se anula en el punto, el límite se calcula por sustitución directa (evaluación). Verificamos: $x + 4 \big|_{x=3} = 7 \neq 0$, por lo que no hay indeterminación.

**Paso 2: Sustituir $x = 3$ en el numerador.**

$$2(3)^2 - 5(3) + 1 = 2 \cdot 9 - 15 + 1 = 18 - 15 + 1 = 4$$

**Paso 3: Sustituir $x = 3$ en el denominador.**

$$3 + 4 = 7$$

**Paso 4: Calcular el cociente.**

$$\lim_{x \to 3} \frac{2x^2 - 5x + 1}{x + 4} = \frac{4}{7}$$

### Respuesta Final

$$\lim_{x \to 3} \frac{2x^2 - 5x + 1}{x + 4} = \frac{4}{7}$$

---

## Ejercicio 72 — Límite con indeterminación $\frac{0}{0}$ por factoreo

**Dificultad:** ⭐ Básica

### Enunciado

Calcular el siguiente límite:

$$\lim_{x \to 2} \frac{x^2 - 4}{x - 2}$$

### Resolución paso a paso

**Paso 1: Verificar la indeterminación.**
Sustituimos $x = 2$: numerador $= 4 - 4 = 0$, denominador $= 2 - 2 = 0$. Se obtiene la forma indeterminada $\frac{0}{0}$, por lo que no podemos aplicar sustitución directa.

**Paso 2: Factorizar el numerador.**
Reconocemos diferencia de cuadrados:

$$x^2 - 4 = (x-2)(x+2)$$

**Paso 3: Simplificar la expresión.**
Para $x \neq 2$, el factor $(x - 2)$ puede cancelarse:

$$\frac{x^2 - 4}{x - 2} = \frac{(x-2)(x+2)}{x-2} = x + 2$$

**Paso 4: Calcular el límite de la expresión simplificada.**

$$\lim_{x \to 2} (x + 2) = 2 + 2 = 4$$

### Respuesta Final

$$\lim_{x \to 2} \frac{x^2 - 4}{x - 2} = 4$$

---

## Ejercicio 73 — Límite con indeterminación $\frac{0}{0}$ por raíz conjugada

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calcular el siguiente límite:

$$\lim_{x \to 9} \frac{\sqrt{x} - 3}{x - 9}$$

### Resolución paso a paso

**Paso 1: Verificar la indeterminación.**
Sustituimos $x = 9$: numerador $= \sqrt{9} - 3 = 0$, denominador $= 9 - 9 = 0$. Forma $\frac{0}{0}$. La presencia de la raíz sugiere multiplicar por el conjugado.

**Paso 2: Multiplicar numerador y denominador por el conjugado de $\sqrt{x} - 3$.**

$$\frac{\sqrt{x} - 3}{x - 9} \cdot \frac{\sqrt{x} + 3}{\sqrt{x} + 3} = \frac{(\sqrt{x} - 3)(\sqrt{x} + 3)}{(x - 9)(\sqrt{x} + 3)}$$

**Paso 3: Simplificar el numerador usando diferencia de cuadrados.**

$$(\sqrt{x} - 3)(\sqrt{x} + 3) = x - 9$$

La expresión queda:

$$\frac{x - 9}{(x - 9)(\sqrt{x} + 3)}$$

**Paso 4: Cancelar el factor común $(x - 9)$ para $x \neq 9$.**

$$\frac{x - 9}{(x - 9)(\sqrt{x} + 3)} = \frac{1}{\sqrt{x} + 3}$$

**Paso 5: Calcular el límite por sustitución directa.**

$$\lim_{x \to 9} \frac{1}{\sqrt{x} + 3} = \frac{1}{\sqrt{9} + 3} = \frac{1}{3 + 3} = \frac{1}{6}$$

### Respuesta Final

$$\lim_{x \to 9} \frac{\sqrt{x} - 3}{x - 9} = \frac{1}{6}$$

---

## Ejercicio 74 — Límite en el infinito de función racional

**Dificultad:** ⭐ Básica

### Enunciado

Calcular el siguiente límite:

$$\lim_{x \to +\infty} \frac{3x^2 - 2x + 5}{x^2 + 7x - 1}$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Cuando $x \to \infty$ en un cociente de polinomios, se divide numerador y denominador por la mayor potencia de $x$ presente, que en este caso es $x^2$.

**Paso 2: Dividir numerador y denominador por $x^2$.**

$$\frac{3x^2 - 2x + 5}{x^2 + 7x - 1} = \frac{\dfrac{3x^2}{x^2} - \dfrac{2x}{x^2} + \dfrac{5}{x^2}}{\dfrac{x^2}{x^2} + \dfrac{7x}{x^2} - \dfrac{1}{x^2}} = \frac{3 - \dfrac{2}{x} + \dfrac{5}{x^2}}{1 + \dfrac{7}{x} - \dfrac{1}{x^2}}$$

**Paso 3: Aplicar los límites elementales $\dfrac{k}{x^n} \to 0$ cuando $x \to +\infty$.**

- $\dfrac{2}{x} \to 0$, $\quad \dfrac{5}{x^2} \to 0$, $\quad \dfrac{7}{x} \to 0$, $\quad \dfrac{1}{x^2} \to 0$

**Paso 4: Calcular el límite resultante.**

$$\lim_{x \to +\infty} \frac{3 - \dfrac{2}{x} + \dfrac{5}{x^2}}{1 + \dfrac{7}{x} - \dfrac{1}{x^2}} = \frac{3 - 0 + 0}{1 + 0 - 0} = \frac{3}{1} = 3$$

### Respuesta Final

$$\lim_{x \to +\infty} \frac{3x^2 - 2x + 5}{x^2 + 7x - 1} = 3$$

---

## Ejercicio 75 — Límites laterales y existencia del límite

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Dada la función definida por partes:

$$f(x) = \begin{cases} x^2 + 1 & \text{si } x < 2 \\ 3x - 1 & \text{si } x \geq 2 \end{cases}$$

Determinar si existe $\displaystyle\lim_{x \to 2} f(x)$.

### Resolución paso a paso

**Paso 1: Recordar la condición de existencia del límite.**
El límite $\displaystyle\lim_{x \to a} f(x)$ existe si y solo si los límites laterales existen y son iguales:

$$\lim_{x \to a^-} f(x) = \lim_{x \to a^+} f(x)$$

**Paso 2: Calcular el límite lateral izquierdo ($x \to 2^-$).**
Para $x < 2$ se usa $f(x) = x^2 + 1$:

$$\lim_{x \to 2^-} f(x) = \lim_{x \to 2^-} (x^2 + 1) = (2)^2 + 1 = 4 + 1 = 5$$

**Paso 3: Calcular el límite lateral derecho ($x \to 2^+$).**
Para $x \geq 2$ se usa $f(x) = 3x - 1$:

$$\lim_{x \to 2^+} f(x) = \lim_{x \to 2^+} (3x - 1) = 3(2) - 1 = 6 - 1 = 5$$

**Paso 4: Comparar los límites laterales.**

$$\lim_{x \to 2^-} f(x) = 5 = \lim_{x \to 2^+} f(x)$$

Como ambos límites laterales coinciden, el límite global existe y vale $5$.

**Paso 5: Observación sobre continuidad.**
Verificamos $f(2) = 3(2) - 1 = 5$. Como $f(2) = 5 = \displaystyle\lim_{x \to 2} f(x)$, la función también es continua en $x = 2$.

### Respuesta Final

$$\lim_{x \to 2} f(x) = 5 \quad \text{(el límite existe)}$$

---

## Ejercicio 76 — Límite con indeterminación $\frac{\infty}{\infty}$, grados distintos

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calcular el siguiente límite:

$$\lim_{x \to +\infty} \frac{4x^3 - x + 2}{6x^5 - 3x^2 + 1}$$

### Resolución paso a paso

**Paso 1: Identificar la indeterminación.**
Al sustituir $x \to +\infty$, numerador y denominador tienden a $+\infty$, dando la forma $\frac{\infty}{\infty}$. Se divide por la mayor potencia del denominador, $x^5$.

**Paso 2: Dividir numerador y denominador por $x^5$.**

$$\frac{4x^3 - x + 2}{6x^5 - 3x^2 + 1} = \frac{\dfrac{4}{x^2} - \dfrac{1}{x^4} + \dfrac{2}{x^5}}{6 - \dfrac{3}{x^3} + \dfrac{1}{x^5}}$$

**Paso 3: Aplicar los límites elementales cuando $x \to +\infty$.**
Todos los términos con $x$ en el denominador tienden a $0$:

$$\frac{4}{x^2} \to 0, \quad \frac{1}{x^4} \to 0, \quad \frac{2}{x^5} \to 0, \quad \frac{3}{x^3} \to 0, \quad \frac{1}{x^5} \to 0$$

**Paso 4: Calcular el límite resultante.**

$$\lim_{x \to +\infty} \frac{\dfrac{4}{x^2} - \dfrac{1}{x^4} + \dfrac{2}{x^5}}{6 - \dfrac{3}{x^3} + \dfrac{1}{x^5}} = \frac{0 - 0 + 0}{6 - 0 + 0} = \frac{0}{6} = 0$$

### Respuesta Final

$$\lim_{x \to +\infty} \frac{4x^3 - x + 2}{6x^5 - 3x^2 + 1} = 0$$

---

## Ejercicio 77 — Análisis de continuidad con discontinuidad evitable

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Analizar la continuidad de la siguiente función en $x = -1$:

$$g(x) = \begin{cases} \dfrac{x^2 + 3x + 2}{x + 1} & \text{si } x \neq -1 \\[8pt] 5 & \text{si } x = -1 \end{cases}$$

### Resolución paso a paso

**Paso 1: Recordar las condiciones de continuidad en un punto.**
$g$ es continua en $x = -1$ si se cumplen las tres condiciones:
1. $g(-1)$ está definida.
2. $\displaystyle\lim_{x \to -1} g(x)$ existe.
3. $\displaystyle\lim_{x \to -1} g(x) = g(-1)$.

**Paso 2: Verificar la condición (1).**
Por definición de la función: $g(-1) = 5$. ✓

**Paso 3: Calcular $\displaystyle\lim_{x \to -1} g(x)$.**
Para $x \neq -1$, se usa la primera rama. Verificamos la indeterminación: numerador $= 1 - 3 + 2 = 0$, denominador $= 0$. Forma $\frac{0}{0}$. Factorizamos el numerador:

$$x^2 + 3x + 2 = (x+1)(x+2)$$

**Paso 4: Simplificar y evaluar.**
Para $x \neq -1$:

$$\frac{x^2 + 3x + 2}{x + 1} = \frac{(x+1)(x+2)}{x+1} = x + 2$$

$$\lim_{x \to -1} g(x) = \lim_{x \to -1} (x + 2) = -1 + 2 = 1$$

**Paso 5: Comparar el límite con el valor de la función.**

$$\lim_{x \to -1} g(x) = 1 \neq 5 = g(-1)$$

La condición (3) no se cumple. La función tiene una **discontinuidad evitable** en $x = -1$: el límite existe pero no coincide con el valor asignado. Para hacerla continua, debería definirse $g(-1) = 1$.

### Respuesta Final

$g$ es **discontinua** en $x = -1$ (discontinuidad evitable), ya que $\displaystyle\lim_{x \to -1} g(x) = 1 \neq 5 = g(-1)$.

---

## Ejercicio 78 — Límite con indeter

## Ejercicio 81 — Límite directo por sustitución

**Dificultad:** ⭐ Básica

### Enunciado

Calcular el siguiente límite:

$$\lim_{x \to 3} \left(2x^2 - 5x + 1\right)$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
La función $f(x) = 2x^2 - 5x + 1$ es un polinomio. Los polinomios son continuos en todo $\mathbb{R}$, por lo tanto el límite se calcula por sustitución directa: $\lim_{x \to a} p(x) = p(a)$.

**Paso 2: Sustituir $x = 3$ en la expresión.**

$$\lim_{x \to 3} \left(2x^2 - 5x + 1\right) = 2(3)^2 - 5(3) + 1$$

**Paso 3: Calcular cada término.**

$$= 2 \cdot 9 - 15 + 1 = 18 - 15 + 1$$

**Paso 4: Obtener el resultado.**

$$= 4$$

### Respuesta Final

$$\lim_{x \to 3} \left(2x^2 - 5x + 1\right) = 4$$

---

## Ejercicio 82 — Límite con indeterminación $\frac{0}{0}$ por factorización

**Dificultad:** ⭐ Básica

### Enunciado

Calcular el siguiente límite:

$$\lim_{x \to 2} \frac{x^2 - 4}{x - 2}$$

### Resolución paso a paso

**Paso 1: Verificar la indeterminación.**
Sustituyendo $x = 2$: numerador $= 2^2 - 4 = 0$, denominador $= 2 - 2 = 0$. Se obtiene la indeterminación $\frac{0}{0}$, por lo que no se puede aplicar sustitución directa.

**Paso 2: Factorizar el numerador.**
Se reconoce una diferencia de cuadrados:

$$x^2 - 4 = (x-2)(x+2)$$

**Paso 3: Simplificar la expresión.**
Como $x \to 2$ pero $x \neq 2$, el factor $(x-2) \neq 0$ y puede cancelarse:

$$\frac{x^2 - 4}{x - 2} = \frac{(x-2)(x+2)}{x-2} = x + 2$$

**Paso 4: Calcular el límite de la expresión simplificada.**

$$\lim_{x \to 2} (x + 2) = 2 + 2 = 4$$

### Respuesta Final

$$\lim_{x \to 2} \frac{x^2 - 4}{x - 2} = 4$$

---

## Ejercicio 83 — Límite con indeterminación $\frac{0}{0}$ y raíz cuadrada

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calcular el siguiente límite:

$$\lim_{x \to 4} \frac{\sqrt{x} - 2}{x - 4}$$

### Resolución paso a paso

**Paso 1: Verificar la indeterminación.**
Sustituyendo $x = 4$: numerador $= \sqrt{4} - 2 = 0$, denominador $= 4 - 4 = 0$. Indeterminación $\frac{0}{0}$. Se aplica la técnica de racionalización del numerador.

**Paso 2: Multiplicar numerador y denominador por el conjugado $(\sqrt{x} + 2)$.**

$$\frac{\sqrt{x} - 2}{x - 4} \cdot \frac{\sqrt{x} + 2}{\sqrt{x} + 2} = \frac{(\sqrt{x})^2 - 2^2}{(x-4)(\sqrt{x}+2)}$$

**Paso 3: Simplificar el numerador.**

$$= \frac{x - 4}{(x-4)(\sqrt{x}+2)}$$

**Paso 4: Cancelar el factor común $(x - 4)$, válido porque $x \neq 4$.**

$$= \frac{1}{\sqrt{x} + 2}$$

**Paso 5: Calcular el límite por sustitución directa.**

$$\lim_{x \to 4} \frac{1}{\sqrt{x} + 2} = \frac{1}{\sqrt{4} + 2} = \frac{1}{2 + 2} = \frac{1}{4}$$

### Respuesta Final

$$\lim_{x \to 4} \frac{\sqrt{x} - 2}{x - 4} = \frac{1}{4}$$

---

## Ejercicio 84 — Límite al infinito de función racional

**Dificultad:** ⭐ Básica

### Enunciado

Calcular el siguiente límite:

$$\lim_{x \to +\infty} \frac{3x^2 - 2x + 5}{x^2 + 7}$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Cuando $x \to \infty$ en una función racional, se divide numerador y denominador por la mayor potencia de $x$ que aparece (en este caso $x^2$).

**Paso 2: Dividir numerador y denominador por $x^2$.**

$$\frac{3x^2 - 2x + 5}{x^2 + 7} = \frac{\dfrac{3x^2}{x^2} - \dfrac{2x}{x^2} + \dfrac{5}{x^2}}{\dfrac{x^2}{x^2} + \dfrac{7}{x^2}}$$

**Paso 3: Simplificar cada término.**

$$= \frac{3 - \dfrac{2}{x} + \dfrac{5}{x^2}}{1 + \dfrac{7}{x^2}}$$

**Paso 4: Tomar el límite cuando $x \to +\infty$.**
Los términos $\dfrac{2}{x}$, $\dfrac{5}{x^2}$ y $\dfrac{7}{x^2}$ tienden a $0$:

$$\lim_{x \to +\infty} \frac{3 - \frac{2}{x} + \frac{5}{x^2}}{1 + \frac{7}{x^2}} = \frac{3 - 0 + 0}{1 + 0} = 3$$

### Respuesta Final

$$\lim_{x \to +\infty} \frac{3x^2 - 2x + 5}{x^2 + 7} = 3$$

---

## Ejercicio 85 — Límite lateral e inexistencia del límite

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Dada la función:

$$f(x) = \frac{|x - 1|}{x - 1}$$

Calcular $\lim_{x \to 1^-} f(x)$ y $\lim_{x \to 1^+} f(x)$, y determinar si existe $\lim_{x \to 1} f(x)$.

### Resolución paso a paso

**Paso 1: Expresar $|x - 1|$ según el signo de $x - 1$.**

Recordar la definición de valor absoluto:

$$|x - 1| = \begin{cases} x - 1 & \text{si } x \geq 1 \\ -(x-1) & \text{si } x < 1 \end{cases}$$

**Paso 2: Calcular el límite por izquierda ($x \to 1^-$).**
Cuando $x < 1$, se tiene $x - 1 < 0$, luego $|x-1| = -(x-1)$:

$$\lim_{x \to 1^-} \frac{-(x-1)}{x-1} = \lim_{x \to 1^-} (-1) = -1$$

**Paso 3: Calcular el límite por derecha ($x \to 1^+$).**
Cuando $x > 1$, se tiene $x - 1 > 0$, luego $|x-1| = x-1$:

$$\lim_{x \to 1^+} \frac{x-1}{x-1} = \lim_{x \to 1^+} 1 = 1$$

**Paso 4: Comparar los límites laterales.**
Como $\lim_{x \to 1^-} f(x) = -1 \neq 1 = \lim_{x \to 1^+} f(x)$, los límites laterales son distintos.

**Paso 5: Concluir sobre la existencia del límite.**
El límite global existe si y solo si ambos límites laterales existen y son iguales. Como no lo son, el límite no existe.

### Respuesta Final

$$\lim_{x \to 1^-} f(x) = -1, \quad \lim_{x \to 1^+} f(x) = 1$$

$$\lim_{x \to 1} \frac{|x-1|}{x-1) } \textbf{ no existe}$$

---

## Ejercicio 86 — Límite con indeterminación $\frac{\infty}{\infty}$ de grados distintos

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calcular el siguiente límite:

$$\lim_{x \to -\infty} \frac{5x^3 - 2x}{x^4 + 3x^2 - 1}$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
El grado del numerador es $3$ y el del denominador es $4$. Se divide numerador y denominador por $x^4$, la mayor potencia presente.

**Paso 2: Dividir numerador y denominador por $x^4$.**

$$\frac{5x^3 - 2x}{x^4 + 3x^2 - 1} = \frac{\dfrac{5x^3}{x^4} - \dfrac{2x}{x^4}}{\dfrac{x^4}{x^4} + \dfrac{3x^2}{x^4} - \dfrac{1}{x^4}}$$

**Paso 3: Simplificar cada cociente.**

$$= \frac{\dfrac{5}{x} - \dfrac{2}{x^3}}{1 + \dfrac{3}{x^2} - \dfrac{1}{x^4}}$$

**Paso 4: Tomar el límite cuando $x \to -\infty$.**
Todos los términos con $x$ en el denominador tienden a $0$:

$$\lim_{x \to -\infty} \frac{\frac{5}{x} - \frac{2}{x^3}}{1 + \frac{3}{x^2} - \frac{1}{x^4}} = \frac{0 - 0}{1 + 0 - 0} = \frac{0}{1} = 0$$

**Paso 5: Interpretación.**
El grado del denominador supera al del numerador, por lo que la fracción tiende a $0$ independientemente de la dirección del infinito.

### Respuesta Final

$$\lim_{x \to -\infty} \frac{5x^3 - 2x}{x^4 + 3x^2 - 1} = 0$$

---

## Ejercicio 87 — Continuidad de una función definida por partes

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Determinar si la siguiente función es continua en $x = 2$:

$$f(x) = \begin{cases} \dfrac{x^2 - x - 2}{x - 2} & \text{si } x \neq 2 \\[6pt] 5 & \text{si } x = 2 \end{cases}$$

### Resolución paso a paso

**Paso 1: Recordar las condiciones de continuidad en un punto.**
$f$ es continua en $x = 2$ si y solo si se cumplen las tres condiciones:
1. $f(2)$ está definida.
2. $\lim_{x \to 2} f(x)$ existe.
3. $\lim_{x \to 2} f(x) = f(2)$.

**Paso 2: Verificar que $f(2)$ está definida.**
Por definición, $f(2) = 5$. ✓

**Paso 3: Calcular $\lim_{x \to 2} f(x)$.**
Para $x \neq 2$ se trabaja con $\dfrac{x^2 - x - 2}{x - 2}$. Verificar la indeterminación: numerador $= 4 - 2 - 2 = 0$, denominador $= 0$. Hay que factorizar.

**Paso 4: Factorizar el numerador.**

$$x^2 - x - 2 = (x-2)(x+1)$$

**Paso 5: Simplificar y calcular el límite.**

$$\lim_{x \to 2} \frac{(x-2)(x+1)}{x-2} = \lim_{x \to 2} (x+1) = 2 + 1 = 3$$

**Paso 6: Comparar el límite con el valor de la función.**
$\lim_{x \to 2} f(x) = 3$, pero $f(2) = 5$.

Como $3 \neq 5$, la tercera condición no se cumple. La función tiene una **discontinuidad evitable** en $x = 2$.

### Respuesta Final

$f$ **no es continua** en $x = 2$ porque $\lim_{x \to 2} f(x) = 3 \neq 5 = f(2)$.

La discontinuidad es **evitable** (o removible): redefiniendo $f(2) = 3$ la función sería continua.

---

## Ejercicio 88 — Límite con indeterminación $\frac{0}{0}$ y factorización cúbica

**Dificultad:** ⭐⭐⭐ Avanzada

### Enunciado

Calcular el siguiente límite:

$$\lim_{x \to -2} \frac{x^3 + 8}{x^2 + 5x + 6}$$

### Resolución paso a paso

**Paso 1: Verificar la indeterminación.**
Sustituyendo $x = -2$: numerador $= (-2)^3 + 8 = -8 + 8 = 0$; denominador $= 4 - 10 + 6 = 0$. Indeterminación $\frac{0}{0}$.

**Paso 2: Factorizar el numerador usando suma de cubos.**
La fórmula es $a^3 + b^3 = (a+b)(a

## Ejercicio 91 — Límite directo por sustitución

**Dificultad:** ⭐ Básica

### Enunciado

Calcular el siguiente límite:

$$\lim_{x \to 3} \left(2x^2 - 5x + 1\right)$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
La función $f(x) = 2x^2 - 5x + 1$ es un polinomio. Los polinomios son continuos en todo $\mathbb{R}$, por lo tanto el límite se calcula sustituyendo directamente $x = 3$.

**Paso 2: Sustituir $x = 3$.**

$$\lim_{x \to 3} \left(2x^2 - 5x + 1\right) = 2(3)^2 - 5(3) + 1$$

**Paso 3: Calcular cada término.**

$$= 2 \cdot 9 - 15 + 1$$

$$= 18 - 15 + 1$$

**Paso 4: Obtener el resultado.**

$$= 4$$

### Respuesta Final

$$\lim_{x \to 3} \left(2x^2 - 5x + 1\right) = 4$$

---

## Ejercicio 92 — Límite con indeterminación $\frac{0}{0}$ por factoreo

**Dificultad:** ⭐ Básica

### Enunciado

Calcular el siguiente límite:

$$\lim_{x \to 2} \frac{x^2 - 4}{x - 2}$$

### Resolución paso a paso

**Paso 1: Verificar la indeterminación.**
Sustituyendo $x = 2$ directamente: numerador $= 4 - 4 = 0$, denominador $= 2 - 2 = 0$. Se obtiene la indeterminación $\dfrac{0}{0}$, por lo que no se puede aplicar sustitución directa.

**Paso 2: Factorizar el numerador.**
Se reconoce $x^2 - 4$ como diferencia de cuadrados:

$$x^2 - 4 = (x-2)(x+2)$$

**Paso 3: Simplificar la expresión.**
Como $x \to 2$ pero $x \neq 2$, el factor $(x - 2)$ es no nulo y puede cancelarse:

$$\frac{x^2 - 4}{x - 2} = \frac{(x-2)(x+2)}{x-2} = x + 2 \quad (x \neq 2)$$

**Paso 4: Calcular el límite de la expresión simplificada.**

$$\lim_{x \to 2} (x + 2) = 2 + 2 = 4$$

### Respuesta Final

$$\lim_{x \to 2} \frac{x^2 - 4}{x - 2} = 4$$

---

## Ejercicio 93 — Límite con indeterminación $\frac{0}{0}$ por factoreo de cúbica

**Dificultad:** ⭐ Básica

### Enunciado

Calcular el siguiente límite:

$$\lim_{x \to -1} \frac{x^3 + 1}{x + 1}$$

### Resolución paso a paso

**Paso 1: Verificar la indeterminación.**
Sustituyendo $x = -1$: numerador $= (-1)^3 + 1 = -1 + 1 = 0$, denominador $= -1 + 1 = 0$. Se presenta $\dfrac{0}{0}$.

**Paso 2: Factorizar el numerador usando suma de cubos.**
La fórmula de suma de cubos es $a^3 + b^3 = (a+b)(a^2 - ab + b^2)$. Con $a = x$ y $b = 1$:

$$x^3 + 1 = (x + 1)(x^2 - x + 1)$$

**Paso 3: Simplificar cancelando el factor común.**
Como $x \neq -1$ en el proceso de límite:

$$\frac{x^3 + 1}{x + 1} = \frac{(x+1)(x^2 - x + 1)}{x + 1} = x^2 - x + 1$$

**Paso 4: Aplicar sustitución directa.**

$$\lim_{x \to -1} (x^2 - x + 1) = (-1)^2 - (-1) + 1 = 1 + 1 + 1 = 3$$

### Respuesta Final

$$\lim_{x \to -1} \frac{x^3 + 1}{x + 1} = 3$$

---

## Ejercicio 94 — Límite al infinito de función racional

**Dificultad:** ⭐ Básica

### Enunciado

Calcular el siguiente límite:

$$\lim_{x \to +\infty} \frac{3x^2 - 7x + 2}{5x^2 + x - 4}$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Ambos polinomios tienen grado 2 (mismo grado). La técnica consiste en dividir numerador y denominador por $x^2$, la mayor potencia presente.

**Paso 2: Dividir numerador y denominador por $x^2$.**

$$\frac{3x^2 - 7x + 2}{5x^2 + x - 4} = \frac{\dfrac{3x^2}{x^2} - \dfrac{7x}{x^2} + \dfrac{2}{x^2}}{\dfrac{5x^2}{x^2} + \dfrac{x}{x^2} - \dfrac{4}{x^2}} = \frac{3 - \dfrac{7}{x} + \dfrac{2}{x^2}}{5 + \dfrac{1}{x} - \dfrac{4}{x^2}}$$

**Paso 3: Aplicar los límites conocidos.**
Cuando $x \to +\infty$: $\dfrac{1}{x} \to 0$ y $\dfrac{1}{x^2} \to 0$.

$$\lim_{x \to +\infty} \frac{3 - \dfrac{7}{x} + \dfrac{2}{x^2}}{5 + \dfrac{1}{x} - \dfrac{4}{x^2}} = \frac{3 - 0 + 0}{5 + 0 - 0}$$

**Paso 4: Calcular el resultado.**

$$= \frac{3}{5}$$

### Respuesta Final

$$\lim_{x \to +\infty} \frac{3x^2 - 7x + 2}{5x^2 + x - 4} = \frac{3}{5}$$

---

## Ejercicio 95 — Límite con indeterminación $\frac{0}{0}$ por racionalización

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calcular el siguiente límite:

$$\lim_{x \to 4} \frac{\sqrt{x} - 2}{x - 4}$$

### Resolución paso a paso

**Paso 1: Verificar la indeterminación.**
Sustituyendo $x = 4$: numerador $= \sqrt{4} - 2 = 0$, denominador $= 4 - 4 = 0$. Indeterminación $\dfrac{0}{0}$.

**Paso 2: Multiplicar por el conjugado del numerador.**
El conjugado de $\sqrt{x} - 2$ es $\sqrt{x} + 2$. Se multiplica numerador y denominador por dicho conjugado:

$$\frac{\sqrt{x} - 2}{x - 4} \cdot \frac{\sqrt{x} + 2}{\sqrt{x} + 2} = \frac{(\sqrt{x} - 2)(\sqrt{x} + 2)}{(x - 4)(\sqrt{x} + 2)}$$

**Paso 3: Simplificar el numerador usando diferencia de cuadrados.**

$$(\sqrt{x} - 2)(\sqrt{x} + 2) = (\sqrt{x})^2 - 2^2 = x - 4$$

Entonces:

$$\frac{x - 4}{(x - 4)(\sqrt{x} + 2)}$$

**Paso 4: Cancelar el factor común $(x - 4)$.**
Como $x \neq 4$ en el proceso de límite:

$$= \frac{1}{\sqrt{x} + 2}$$

**Paso 5: Aplicar sustitución directa.**

$$\lim_{x \to 4} \frac{1}{\sqrt{x} + 2} = \frac{1}{\sqrt{4} + 2} = \frac{1}{2 + 2} = \frac{1}{4}$$

### Respuesta Final

$$\lim_{x \to 4} \frac{\sqrt{x} - 2}{x - 4} = \frac{1}{4}$$

---

## Ejercicio 96 — Análisis de continuidad en un punto

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Determinar si la siguiente función es continua en $x = 1$:

$$f(x) = \begin{cases} \dfrac{x^2 - 1}{x - 1} & \text{si } x \neq 1 \\[6pt] 3 & \text{si } x = 1 \end{cases}$$

### Resolución paso a paso

**Paso 1: Recordar las condiciones de continuidad.**
Una función $f$ es continua en $x = a$ si y solo si se cumplen tres condiciones simultáneamente:
1. $f(a)$ está definida.
2. $\displaystyle\lim_{x \to a} f(x)$ existe.
3. $\displaystyle\lim_{x \to a} f(x) = f(a)$.

**Paso 2: Verificar condición 1 — $f(1)$ definida.**
Por definición de la función: $f(1) = 3$. ✓ Está definida.

**Paso 3: Calcular $\displaystyle\lim_{x \to 1} f(x)$ — condición 2.**
Para $x \neq 1$ se usa la primera rama. Se factoriza el numerador:

$$\frac{x^2 - 1}{x - 1} = \frac{(x-1)(x+1)}{x-1} = x + 1 \quad (x \neq 1)$$

Entonces:

$$\lim_{x \to 1} f(x) = \lim_{x \to 1} (x + 1) = 1 + 1 = 2$$

El límite existe e es igual a $2$. ✓

**Paso 4: Comparar el límite con $f(1)$ — condición 3.**

$$\lim_{x \to 1} f(x) = 2 \neq 3 = f(1)$$

La tercera condición **no se cumple**. La función tiene una discontinuidad en $x = 1$.

**Paso 5: Clasificar la discontinuidad.**
Como el límite existe pero no coincide con el valor de la función, se trata de una **discontinuidad evitable** (o removible). Bastaría redefinir $f(1) = 2$ para que la función sea continua en ese punto.

### Respuesta Final

$f$ **no es continua** en $x = 1$ porque $\displaystyle\lim_{x \to 1} f(x) = 2 \neq 3 = f(1)$. La discontinuidad es **evitable**.

---

## Ejercicio 97 — Límite lateral e indeterminación $\frac{k}{0}$

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calcular los límites laterales y el límite global de:

$$\lim_{x \to 2} \frac{x + 1}{(x - 2)^2}$$

### Resolución paso a paso

**Paso 1: Verificar el comportamiento al sustituir.**
Sustituyendo $x = 2$: numerador $= 2 + 1 = 3 \neq 0$, denominador $= (2-2)^2 = 0$. Se presenta la forma $\dfrac{3}{0}$, lo que indica un infinito.

**Paso 2: Analizar el signo del denominador.**
El denominador es $(x-2)^2 \geq 0$ para todo $x$, y es estrictamente positivo para $x \neq 2$. Por lo tanto $(x-2)^2 > 0$ tanto cuando $x \to 2^-$ como cuando $x \to 2^+$.

**Paso 3: Calcular el límite lateral por la izquierda.**
Cuando $x \to 2^-$: numerador $\to 3 > 0$, denominador $(x-2)^2 \to 0^+$.

$$\lim_{x \to 2^-} \frac{x + 1}{(x - 2)^2} = \frac{3}{0^+} = +\infty$$

**Paso 4: Calcular el límite lateral por la derecha.**
Cuando $x \to 2^+$: numerador $\to 3 > 0$, denominador $(x-2)^2 \to 0^+$.

$$\lim_{x \to 2^+} \frac{x + 1}{(x - 2)^2} = \frac{3}{0^+} = +\infty$$

**Paso 5: Determinar el límite global.**
Como ambos límites laterales coinciden:

$$\lim_{x \to 2} \frac{x + 1}{(x - 2)^2} = +\infty$$

### Respuesta Final

$$\lim_{x \to 2^-} \frac{x+1}{(x-2)^2} = +\infty, \quad \lim_{x \to 2^+} \frac{x+1}{(x-2)^2} = +\infty$$

$$\lim_{x \to 2} \frac{x + 1}{(x - 2)^2} = +\infty$$

La función tiene una **asíntota vertical** en $x = 2$.

---

## Ejercicio 98 — Límite con indeterminación $\infty - \infty$

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calcular el siguiente límite:

$$\lim_{x \to +\infty} \left(\sqrt{x^2 + 5x} - x\right)$$

### Resolución paso a paso

**Paso 1: Identificar la indeterminación.**
Cuando $x \to +\infty$: $\sqrt{x^2 + 5x} \to +\infty$ y $x \to +\infty$. Se presenta la indeterminación $\infty - \infty$.

**Paso 2: Multiplicar por el conjugado.**
Se
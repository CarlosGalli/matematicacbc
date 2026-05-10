# Matemática CBC-UBA — Unidad 1: Números reales y álgebra
**Generado:** 09/05/2026 22:09:34
**Cantidad:** 100 ejercicios · **Dificultad:** mixta
**Archivo:** `matematica_cbc_unidad_01_numeros_reales_algebra.md` · **Timestamp:** 20260509_220934

---

## Ejercicio 1 — Simplificación de expresión con fracciones

**Dificultad:** ⭐ Básica

### Enunciado

Simplificá y expresá como una sola fracción:

$$\frac{3}{4} + \frac{5}{6} - \frac{1}{3}$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Para sumar y restar fracciones con distinto denominador, debemos hallar el **mínimo común múltiplo (MCM)** de los denominadores $4$, $6$ y $3$.

**Paso 2: Calcular el MCM.**
Descomponemos: $4 = 2^2$, $6 = 2 \cdot 3$, $3 = 3$. El MCM es $2^2 \cdot 3 = 12$.

**Paso 3: Convertir cada fracción al denominador común.**

$$\frac{3}{4} = \frac{9}{12}, \qquad \frac{5}{6} = \frac{10}{12}, \qquad \frac{1}{3} = \frac{4}{12}$$

**Paso 4: Operar los numeradores.**

$$\frac{9}{12} + \frac{10}{12} - \frac{4}{12} = \frac{9 + 10 - 4}{12} = \frac{15}{12}$$

**Paso 5: Simplificar la fracción resultante.**
El MCD de $15$ y $12$ es $3$:

$$\frac{15}{12} = \frac{15 \div 3}{12 \div 3} = \frac{5}{4}$$

### Respuesta Final

$$\frac{3}{4} + \frac{5}{6} - \frac{1}{3} = \frac{5}{4}$$

---

## Ejercicio 2 — Valor absoluto y desigualdad

**Dificultad:** ⭐ Básica

### Enunciado

Resolvé la inecuación y expresá la solución en notación de intervalos:

$$|2x - 3| \leq 7$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Usamos la propiedad fundamental: $|A| \leq k$ (con $k > 0$) equivale a $-k \leq A \leq k$.

**Paso 2: Escribir la doble inecuación equivalente.**

$$-7 \leq 2x - 3 \leq 7$$

**Paso 3: Sumar $3$ en todos los miembros.**

$$-7 + 3 \leq 2x \leq 7 + 3$$

$$-4 \leq 2x \leq 10$$

**Paso 4: Dividir todos los miembros por $2$.**

$$\frac{-4}{2} \leq x \leq \frac{10}{2}$$

$$-2 \leq x \leq 5$$

**Paso 5: Expresar en notación de intervalos.**
La solución es el intervalo cerrado $[-2,\, 5]$.

### Respuesta Final

$$x \in [-2,\, 5]$$

---

## Ejercicio 3 — Racionalización de denominador

**Dificultad:** ⭐ Básica

### Enunciado

Racionalizá el denominador y simplificá:

$$\frac{6}{\sqrt{3} + 1}$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Cuando el denominador tiene la forma $\sqrt{a} + b$, multiplicamos numerador y denominador por el **conjugado** $\sqrt{a} - b$, aprovechando la identidad $(A+B)(A-B) = A^2 - B^2$.

**Paso 2: Multiplicar por el conjugado de $\sqrt{3}+1$.**

$$\frac{6}{\sqrt{3}+1} \cdot \frac{\sqrt{3}-1}{\sqrt{3}-1} = \frac{6(\sqrt{3}-1)}{(\sqrt{3})^2 - 1^2}$$

**Paso 3: Calcular el denominador.**

$$(\sqrt{3})^2 - 1^2 = 3 - 1 = 2$$

**Paso 4: Simplificar.**

$$\frac{6(\sqrt{3}-1)}{2} = 3(\sqrt{3}-1)$$

**Paso 5: Distribuir y escribir la forma final.**

$$3\sqrt{3} - 3$$

### Respuesta Final

$$\frac{6}{\sqrt{3}+1} = 3\sqrt{3} - 3$$

---

## Ejercicio 4 — Resolución de ecuación de segundo grado por fórmula cuadrática

**Dificultad:** ⭐ Básica

### Enunciado

Encontrá todas las raíces reales de la ecuación:

$$2x^2 - 5x - 3 = 0$$

### Resolución paso a paso

**Paso 1: Identificar los coeficientes.**
La ecuación tiene la forma $ax^2 + bx + c = 0$ con $a = 2$, $b = -5$, $c = -3$.

**Paso 2: Calcular el discriminante $\Delta$.**

$$\Delta = b^2 - 4ac = (-5)^2 - 4 \cdot 2 \cdot (-3) = 25 + 24 = 49$$

**Paso 3: Verificar que $\Delta > 0$.**
Como $\Delta = 49 > 0$, la ecuación tiene **dos raíces reales distintas**.

**Paso 4: Aplicar la fórmula cuadrática.**

$$x = \frac{-b \pm \sqrt{\Delta}}{2a} = \frac{5 \pm \sqrt{49}}{4} = \frac{5 \pm 7}{4}$$

**Paso 5: Calcular cada raíz.**

$$x_1 = \frac{5 + 7}{4} = \frac{12}{4} = 3, \qquad x_2 = \frac{5 - 7}{4} = \frac{-2}{4} = -\frac{1}{2}$$

### Respuesta Final

$$x_1 = 3 \qquad \text{y} \qquad x_2 = -\frac{1}{2}$$

---

## Ejercicio 5 — Propiedades de potencias y simplificación

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Simplificá la siguiente expresión, dejando el resultado con exponentes positivos:

$$\frac{a^3 \cdot b^{-2} \cdot (a^2 b)^3}{a^{-1} \cdot b^4}$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Aplicamos las propiedades de potencias: $(xy)^n = x^n y^n$, $x^m \cdot x^n = x^{m+n}$ y $\dfrac{x^m}{x^n} = x^{m-n}$.

**Paso 2: Desarrollar el factor $(a^2 b)^3$ del numerador.**

$$(a^2 b)^3 = a^{2 \cdot 3} \cdot b^3 = a^6 b^3$$

**Paso 3: Reescribir el numerador completo.**

$$a^3 \cdot b^{-2} \cdot a^6 b^3 = a^{3+6} \cdot b^{-2+3} = a^9 \cdot b^1 = a^9 b$$

**Paso 4: Reescribir el denominador.**

$$a^{-1} \cdot b^4$$

**Paso 5: Dividir numerador por denominador aplicando la regla de exponentes.**

$$\frac{a^9 \cdot b}{a^{-1} \cdot b^4} = a^{9-(-1)} \cdot b^{1-4} = a^{10} \cdot b^{-3}$$

**Paso 6: Expresar con exponentes positivos.**

$$a^{10} \cdot b^{-3} = \frac{a^{10}}{b^3}$$

### Respuesta Final

$$\frac{a^3 \cdot b^{-2} \cdot (a^2 b)^3}{a^{-1} \cdot b^4} = \frac{a^{10}}{b^3}$$

---

## Ejercicio 6 — Sistema de dos ecuaciones lineales

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Resolvé el siguiente sistema de ecuaciones:

$$\begin{cases} 3x + 2y = 16 \\ 5x - 4y = 2 \end{cases}$$

### Resolución paso a paso

**Paso 1: Elegir el método de resolución.**
Usamos el **método de eliminación (reducción)**. Observamos que si multiplicamos la primera ecuación por $2$, los coeficientes de $y$ serán opuestos.

**Paso 2: Multiplicar la primera ecuación por $2$.**

$$2 \cdot (3x + 2y) = 2 \cdot 16 \implies 6x + 4y = 32$$

**Paso 3: Sumar la ecuación obtenida con la segunda ecuación.**

$$\begin{aligned} 6x + 4y &= 32 \\ 5x - 4y &= 2 \\ \hline 11x &= 34 \end{aligned}$$

**Paso 4: Despejar $x$.**

$$x = \frac{34}{11}$$

**Paso 5: Sustituir $x = \dfrac{34}{11}$ en la primera ecuación para hallar $y$.**

$$3 \cdot \frac{34}{11} + 2y = 16 \implies \frac{102}{11} + 2y = 16$$

$$2y = 16 - \frac{102}{11} = \frac{176}{11} - \frac{102}{11} = \frac{74}{11}$$

$$y = \frac{74}{22} = \frac{37}{11}$$

**Paso 6: Verificar en la segunda ecuación.**

$$5 \cdot \frac{34}{11} - 4 \cdot \frac{37}{11} = \frac{170}{11} - \frac{148}{11} = \frac{22}{11} = 2 \checkmark$$

### Respuesta Final

$$x = \frac{34}{11}, \qquad y = \frac{37}{11}$$

---

## Ejercicio 7 — Inecuación cuadrática

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Resolvé la inecuación y expresá la solución en notación de intervalos:

$$x^2 - x - 6 < 0$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Para resolver una inecuación cuadrática, primero hallamos las raíces del polinomio asociado $p(x) = x^2 - x - 6$ y luego analizamos el signo de $p(x)$ en cada intervalo.

**Paso 2: Encontrar las raíces de $x^2 - x - 6 = 0$.**
Buscamos dos números cuyo producto sea $-6$ y cuya suma sea $-1$: estos son $-3$ y $2$.

$$x^2 - x - 6 = (x-3)(x+2) = 0 \implies x_1 = -2, \quad x_2 = 3$$

**Paso 3: Identificar los intervalos a analizar.**
Las raíces dividen la recta real en tres intervalos: $(-\infty, -2)$, $(-2, 3)$ y $(3, +\infty)$.

**Paso 4: Analizar el signo de $(x-3)(x+2)$ en cada intervalo.**

| Intervalo | Signo de $(x+2)$ | Signo de $(x-3)$ | Signo del producto |
|---|---|---|---|
| $(-\infty,-2)$ | $-$ | $-$ | $+$ |
| $(-2,\;3)$ | $+$ | $-$ | $-$ |
| $(3,+\infty)$ | $+$ | $+$ | $+$ |

**Paso 5: Determinar dónde el producto es negativo.**
El producto $(x-3)(x+2) < 0$ únicamente en el intervalo $(-2, 3)$. Como la inecuación es estricta ($<$), los extremos no se incluyen.

### Respuesta Final

$$x \in (-2,\; 3)$$

---

## Ejercicio 8 — Factorización y simplificación de expresión racional

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Simplificá la siguiente expresión racional, indicando para qué valores de $x$ es válida:

$$\frac{x^3 - 8}{x^2 - 4}$$

### Resolución paso a paso

**Paso 1: Reconocer las identidades algebraicas aplicables.**
El numerador $x^3 - 8$ es una **diferencia de cubos**: $a^3 - b^3 = (a-b)(a^2+ab+b^2)$, con $a=x$, $b=2$.
El denominador $x^2 - 4$ es una **diferencia de cuadrados**: $a^2 - b^2 = (a-b)(a+b)$, con $a=x$, $b=2$.

**Paso 2: Factorizar el numerador.**

$$x^3 - 8 = (x-2)(x^2 + 2x + 4)$$

**Paso 3: Factorizar el denominador.**

$$x^2 - 4 = (x-2)(x+2)$$

**Paso 4: Reescribir la fracción con ambas factorizaciones.**

$$\frac{(x-2)(x^2+2x+4)}{(x-2)(x+2)}$$

**Paso 5: Cancelar el factor común $(x-2)$, válido cuando $x \neq 2$.**

$$\frac{x^2+2x+4}{x+2}$$

**Paso 6: Indicar las restricciones del dominio.**
La expresión original no está definida para $x = 2$ (hace cero el numerador y denominador) ni para $x = -2$ (hace cero el denominador). Ambas restricciones se mantienen en la expresión simplificada.

### Respuesta Final

$$\frac{x^3-8}{x^2-4} = \frac{x^2+2x+4}{x+2}, \quad x \neq 2 \text{ y } x \neq -2$$

---

## Ejercicio 9 — Ecuación con valor absoluto de ambos lados

**Dificultad:** ⭐⭐⭐ Avanzada

### En

## Ejercicio 11 — Clasificación y ubicación en la recta real

**Dificultad:** ⭐ Básica

### Enunciado

Clasificá cada uno de los siguientes números indicando si es natural, entero, racional, irracional o real. Luego ordenalos de menor a mayor y ubicalos en la recta numérica:

$$-\frac{7}{3}, \quad \sqrt{4}, \quad 0{,}\overline{6}, \quad -2, \quad \sqrt{5}, \quad 0$$

### Resolución paso a paso

**Paso 1: Clasificar cada número.**

- $-\dfrac{7}{3}$: es un cociente de enteros con denominador $\neq 0$, por lo tanto es **racional** (y real). No es entero ni natural.
- $\sqrt{4} = 2$: es **natural**, entero, racional y real.
- $0{,}\overline{6} = \dfrac{2}{3}$: decimal periódico, por lo tanto **racional** (y real).
- $-2$: es **entero** (negativo), racional y real. No es natural.
- $\sqrt{5}$: no es cuadrado perfecto, su decimal es infinito no periódico, por lo tanto es **irracional** (y real).
- $0$: es **natural** (según la convención adoptada en CBC), entero, racional y real.

**Paso 2: Convertir a decimales aproximados para comparar.**

$$-\frac{7}{3} \approx -2{,}333\ldots \qquad \sqrt{4} = 2 \qquad 0{,}\overline{6} \approx 0{,}666\ldots$$
$$-2 \qquad \sqrt{5} \approx 2{,}236\ldots \qquad 0$$

**Paso 3: Ordenar de menor a mayor.**

Comparando los valores decimales:

$$-2{,}333\ldots < -2 < 0 < 0{,}666\ldots < 2 < 2{,}236\ldots$$

**Paso 4: Escribir el orden con los números originales.**

$$-\frac{7}{3} < -2 < 0 < 0{,}\overline{6} < \sqrt{4} < \sqrt{5}$$

### Respuesta Final

Orden de menor a mayor:

$$\boxed{-\dfrac{7}{3} < -2 < 0 < 0{,}\overline{6} < \sqrt{4} < \sqrt{5}}$$

---

## Ejercicio 12 — Operaciones con fracciones y potencias

**Dificultad:** ⭐ Básica

### Enunciado

Calculá el valor exacto de la siguiente expresión, simplificando al máximo:

$$E = \frac{3}{4} - \frac{5}{6} + \frac{7}{12} \cdot \left(\frac{2}{3}\right)^2$$

### Resolución paso a paso

**Paso 1: Resolver la potencia.**

$$\left(\frac{2}{3}\right)^2 = \frac{2^2}{3^2} = \frac{4}{9}$$

**Paso 2: Realizar la multiplicación.**

$$\frac{7}{12} \cdot \frac{4}{9} = \frac{7 \cdot 4}{12 \cdot 9} = \frac{28}{108}$$

Simplificamos dividiendo numerador y denominador por $4$:

$$\frac{28}{108} = \frac{7}{27}$$

**Paso 3: Calcular el mínimo común múltiplo de los denominadores 4, 6 y 27.**

$4 = 2^2$, $\quad 6 = 2 \cdot 3$, $\quad 27 = 3^3$

$$\text{mcm}(4,\,6,\,27) = 2^2 \cdot 3^3 = 4 \cdot 27 = 108$$

**Paso 4: Convertir todas las fracciones al denominador 108.**

$$\frac{3}{4} = \frac{81}{108}, \qquad \frac{5}{6} = \frac{90}{108}, \qquad \frac{7}{27} = \frac{28}{108}$$

**Paso 5: Sumar y restar.**

$$E = \frac{81}{108} - \frac{90}{108} + \frac{28}{108} = \frac{81 - 90 + 28}{108} = \frac{19}{108}$$

Verificamos que $\gcd(19, 108) = 1$ (19 es primo y no divide a 108), entonces la fracción ya es irreducible.

### Respuesta Final

$$\boxed{E = \dfrac{19}{108}}$$

---

## Ejercicio 13 — Propiedades de valor absoluto e inecuación

**Dificultad:** ⭐ Básica

### Enunciado

Resolvé la inecuación y expresá la solución en notación de intervalo y en la recta real:

$$|2x - 3| \leq 7$$

### Resolución paso a paso

**Paso 1: Aplicar la definición equivalente de valor absoluto.**

La propiedad fundamental es: $|A| \leq k$ (con $k > 0$) equivale a $-k \leq A \leq k$.

Como $7 > 0$, escribimos:

$$-7 \leq 2x - 3 \leq 7$$

**Paso 2: Sumar 3 en todos los miembros.**

$$-7 + 3 \leq 2x - 3 + 3 \leq 7 + 3$$

$$-4 \leq 2x \leq 10$$

**Paso 3: Dividir por 2 en todos los miembros.**

Como $2 > 0$, el sentido de las desigualdades no cambia:

$$\frac{-4}{2} \leq \frac{2x}{2} \leq \frac{10}{2}$$

$$-2 \leq x \leq 5$$

**Paso 4: Verificar con un valor interior y uno exterior.**

- $x = 0$ (interior): $|2(0)-3| = |-3| = 3 \leq 7$ ✓
- $x = 6$ (exterior): $|2(6)-3| = |9| = 9 \leq 7$ ✗ (correcto que no pertenezca)

### Respuesta Final

$$\boxed{x \in [-2,\; 5]}$$

---

## Ejercicio 14 — Racionalización de denominadores

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Racionalizá el denominador y simplificá la siguiente expresión:

$$R = \frac{6}{\sqrt{5} - \sqrt{2}} + \frac{1}{\sqrt{5} + \sqrt{2}}$$

### Resolución paso a paso

**Paso 1: Racionalizar la primera fracción multiplicando por el conjugado $(\sqrt{5}+\sqrt{2})$.**

$$\frac{6}{\sqrt{5}-\sqrt{2}} \cdot \frac{\sqrt{5}+\sqrt{2}}{\sqrt{5}+\sqrt{2}} = \frac{6(\sqrt{5}+\sqrt{2})}{(\sqrt{5})^2 - (\sqrt{2})^2} = \frac{6(\sqrt{5}+\sqrt{2})}{5-2} = \frac{6(\sqrt{5}+\sqrt{2})}{3}$$

$$= 2(\sqrt{5}+\sqrt{2}) = 2\sqrt{5}+2\sqrt{2}$$

**Paso 2: Racionalizar la segunda fracción multiplicando por el conjugado $(\sqrt{5}-\sqrt{2})$.**

$$\frac{1}{\sqrt{5}+\sqrt{2}} \cdot \frac{\sqrt{5}-\sqrt{2}}{\sqrt{5}-\sqrt{2}} = \frac{\sqrt{5}-\sqrt{2}}{(\sqrt{5})^2-(\sqrt{2})^2} = \frac{\sqrt{5}-\sqrt{2}}{3}$$

**Paso 3: Sumar ambas fracciones racionalizadas.**

$$R = 2\sqrt{5}+2\sqrt{2} + \frac{\sqrt{5}-\sqrt{2}}{3}$$

**Paso 4: Reducir al denominador común 3.**

$$R = \frac{3(2\sqrt{5}+2\sqrt{2})}{3} + \frac{\sqrt{5}-\sqrt{2}}{3} = \frac{6\sqrt{5}+6\sqrt{2}+\sqrt{5}-\sqrt{2}}{3}$$

**Paso 5: Agrupar términos semejantes.**

$$R = \frac{(6+1)\sqrt{5} + (6-1)\sqrt{2}}{3} = \frac{7\sqrt{5}+5\sqrt{2}}{3}$$

### Respuesta Final

$$\boxed{R = \dfrac{7\sqrt{5}+5\sqrt{2}}{3}}$$

---

## Ejercicio 15 — Simplificación de expresión con propiedades de potencias

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Simplificá la siguiente expresión, dejando el resultado sin denominadores ni exponentes negativos:

$$S = \frac{a^{3/2} \cdot b^{-1} \cdot (a^2 b)^{1/2}}{a^{-1/2} \cdot b^{2/3}}$$

donde $a > 0$ y $b > 0$.

### Resolución paso a paso

**Paso 1: Desarrollar el factor $(a^2 b)^{1/2}$ en el numerador.**

$$(a^2 b)^{1/2} = a^{2 \cdot \frac{1}{2}} \cdot b^{\frac{1}{2}} = a^1 \cdot b^{1/2} = a \cdot b^{1/2}$$

**Paso 2: Reescribir el numerador completo.**

$$\text{Numerador} = a^{3/2} \cdot b^{-1} \cdot a \cdot b^{1/2}$$

Agrupamos por base usando $a^m \cdot a^n = a^{m+n}$:

$$= a^{3/2 + 1} \cdot b^{-1 + 1/2} = a^{5/2} \cdot b^{-1/2}$$

**Paso 3: Reescribir el denominador.**

$$\text{Denominador} = a^{-1/2} \cdot b^{2/3}$$

**Paso 4: Dividir numerador por denominador usando $\dfrac{a^m}{a^n} = a^{m-n}$.**

$$S = \frac{a^{5/2} \cdot b^{-1/2}}{a^{-1/2} \cdot b^{2/3}} = a^{5/2 - (-1/2)} \cdot b^{-1/2 - 2/3}$$

**Paso 5: Calcular los exponentes resultantes.**

Para $a$: $\dfrac{5}{2} - \left(-\dfrac{1}{2}\right) = \dfrac{5}{2} + \dfrac{1}{2} = \dfrac{6}{2} = 3$

Para $b$: $-\dfrac{1}{2} - \dfrac{2}{3} = -\dfrac{3}{6} - \dfrac{4}{6} = -\dfrac{7}{6}$

$$S = a^3 \cdot b^{-7/6}$$

**Paso 6: Eliminar el exponente negativo.**

$$S = \frac{a^3}{b^{7/6}}$$

### Respuesta Final

$$\boxed{S = \dfrac{a^3}{b^{7/6}}}$$

---

## Ejercicio 16 — Inecuación con valor absoluto estricto

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Resolvé la inecuación y expresá la solución como unión de intervalos:

$$|3x + 1| > 5$$

### Resolución paso a paso

**Paso 1: Aplicar la propiedad equivalente para valor absoluto mayor.**

La propiedad es: $|A| > k$ (con $k > 0$) equivale a $A < -k$ **o** $A > k$.

Entonces:

$$3x + 1 < -5 \qquad \text{o} \qquad 3x + 1 > 5$$

**Paso 2: Resolver la primera inecuación.**

$$3x + 1 < -5$$
$$3x < -5 - 1$$
$$3x < -6$$
$$x < -2$$

**Paso 3: Resolver la segunda inecuación.**

$$3x + 1 > 5$$
$$3x > 5 - 1$$
$$3x > 4$$
$$x > \frac{4}{3}$$

**Paso 4: Unir las soluciones (se trata de una disyunción).**

$$x < -2 \qquad \text{o} \qquad x > \frac{4}{3}$$

**Paso 5: Verificar con valores de prueba.**

- $x = -3$: $|3(-3)+1| = |-8| = 8 > 5$ ✓
- $x = 0$: $|3(0)+1| = 1 > 5$ ✗ (correcto, no pertenece)
- $x = 2$: $|3(2)+1| = 7 > 5$ ✓

### Respuesta Final

$$\boxed{x \in \left(-\infty,\; -2\right) \cup \left(\frac{4}{3},\; +\infty\right)}$$

---

## Ejercicio 17 — Conversión de decimal periódico a fracción

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Expresá el número decimal periódico mixto $2{,}3\overline{17}$ como fracción irreducible de enteros.

### Resolución paso a paso

**Paso 1: Identificar la estructura del número.**

$2{,}3\overline{17} = 2{,}31717171717\ldots$

La parte no periódica después de la coma tiene **1 dígito** (el 3) y el período **17** tiene **2 dígitos**.

**Paso 2: Plantear la ecuación con variable $x$.**

Sea $x = 2{,}3\overline{17}$.

**Paso 3: Multiplicar para alinear los períodos.**

Multiplicamos por $10$ (para "mover" la parte no periódica):

$$10x = 23{,}\overline{17} = 23{,}171717\ldots$$

Multiplicamos por $1000$ (para mover un período completo adicional):

$$1000x = 2317{,}\overline{17} = 2317{,}171717\ldots$$

**Paso 4: Restar para elim

## Ejercicio 21 — Clasificación y propiedades de números reales

**Dificultad:** ⭐ Básica

### Enunciado

Clasificá cada uno de los siguientes números indicando si es natural, entero, racional o irracional, y justificá brevemente:
$$a)\ \frac{-8}{4} \qquad b)\ \sqrt{7} \qquad c)\ 0{,}\overline{3} \qquad d)\ \sqrt{49}$$

### Resolución paso a paso

**Paso 1: Analizar $a) \ \dfrac{-8}{4}$.**
Simplificamos la fracción: $\dfrac{-8}{4} = -2$. Es un número entero (pertenece a $\mathbb{Z}$) y, por ende, también racional ($\mathbb{Q}$). No es natural porque es negativo.

**Paso 2: Analizar $b) \ \sqrt{7}$.**
Verificamos si 7 es cuadrado perfecto: no lo es. $\sqrt{7}$ no puede escribirse como cociente de enteros; su expansión decimal es infinita no periódica ($\approx 2{,}6457...$). Es irracional ($\mathbb{R} \setminus \mathbb{Q}$).

**Paso 3: Analizar $c) \ 0{,}\overline{3}$.**
Todo decimal periódico es racional. Llamamos $x = 0{,}\overline{3}$, entonces $10x = 3{,}\overline{3}$. Restando: $9x = 3 \Rightarrow x = \dfrac{3}{9} = \dfrac{1}{3}$. Es racional ($\mathbb{Q}$).

**Paso 4: Analizar $d) \ \sqrt{49}$.**
$\sqrt{49} = 7$ porque $7^2 = 49$. Es un número natural ($\mathbb{N}$), y por inclusión también entero y racional.

### Respuesta Final

| Número | Resultado | Clasificación |
|---|---|---|
| $\dfrac{-8}{4}$ | $-2$ | Entero, racional |
| $\sqrt{7}$ | $\approx 2{,}6457...$ | Irracional |
| $0{,}\overline{3}$ | $\dfrac{1}{3}$ | Racional |
| $\sqrt{49}$ | $7$ | Natural, entero, racional |

---

## Ejercicio 22 — Operaciones con fracciones y jerarquía

**Dificultad:** ⭐ Básica

### Enunciado

Calculá el siguiente valor numérico respetando la jerarquía de operaciones:
$$E = \frac{3}{4} - \frac{1}{6} \cdot \left(2 + \frac{1}{2}\right) + \frac{5}{3}$$

### Resolución paso a paso

**Paso 1: Resolver el paréntesis.**
$$2 + \frac{1}{2} = \frac{4}{2} + \frac{1}{2} = \frac{5}{2}$$

**Paso 2: Realizar la multiplicación (mayor jerarquía que la suma/resta).**
$$\frac{1}{6} \cdot \frac{5}{2} = \frac{5}{12}$$

**Paso 3: Reescribir la expresión con el resultado obtenido.**
$$E = \frac{3}{4} - \frac{5}{12} + \frac{5}{3}$$

**Paso 4: Calcular el mínimo común múltiplo de los denominadores.**
$\text{mcm}(4, 12, 3) = 12$. Convertimos cada fracción:
$$\frac{3}{4} = \frac{9}{12}, \qquad \frac{5}{12} = \frac{5}{12}, \qquad \frac{5}{3} = \frac{20}{12}$$

**Paso 5: Sumar y restar con denominador común.**
$$E = \frac{9}{12} - \frac{5}{12} + \frac{20}{12} = \frac{9 - 5 + 20}{12} = \frac{24}{12} = 2$$

### Respuesta Final

$$E = 2$$

---

## Ejercicio 23 — Valor absoluto: ecuación con dos casos

**Dificultad:** ⭐ Básica

### Enunciado

Resolvé la siguiente ecuación con valor absoluto en $\mathbb{R}$:
$$|2x - 5| = 7$$

### Resolución paso a paso

**Paso 1: Recordar la definición de valor absoluto.**
$|A| = k$ (con $k \geq 0$) equivale a los dos casos: $A = k$ o $A = -k$. Aquí $A = 2x-5$ y $k = 7 > 0$, así que hay dos soluciones posibles.

**Paso 2: Plantear el Caso 1.**
$$2x - 5 = 7$$
$$2x = 7 + 5 = 12$$
$$x = 6$$

**Paso 3: Plantear el Caso 2.**
$$2x - 5 = -7$$
$$2x = -7 + 5 = -2$$
$$x = -1$$

**Paso 4: Verificar ambas soluciones en la ecuación original.**
- Para $x = 6$: $|2(6) - 5| = |12 - 5| = |7| = 7$ ✓
- Para $x = -1$: $|2(-1) - 5| = |-2 - 5| = |-7| = 7$ ✓

### Respuesta Final

$$x = 6 \qquad \text{o} \qquad x = -1$$

---

## Ejercicio 24 — Inecuación lineal con valor absoluto

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Resolvé la inecuación y expresá la solución en notación de intervalo y en la recta numérica:
$$|3x + 1| \leq 8$$

### Resolución paso a paso

**Paso 1: Aplicar la propiedad de valor absoluto con desigualdad.**
$|A| \leq k$ (con $k > 0$) equivale a $-k \leq A \leq k$. Aquí $A = 3x+1$ y $k = 8$:
$$-8 \leq 3x + 1 \leq 8$$

**Paso 2: Restar 1 en todos los miembros.**
$$-8 - 1 \leq 3x \leq 8 - 1$$
$$-9 \leq 3x \leq 7$$

**Paso 3: Dividir por 3 en todos los miembros (positivo, no cambia el sentido).**
$$\frac{-9}{3} \leq x \leq \frac{7}{3}$$
$$-3 \leq x \leq \frac{7}{3}$$

**Paso 4: Verificar con un punto interior, por ejemplo $x = 0$.**
$|3(0)+1| = |1| = 1 \leq 8$ ✓

**Paso 5: Verificar que los extremos quedan excluidos o incluidos correctamente.**
- $x = -3$: $|3(-3)+1| = |-9+1| = |-8| = 8 \leq 8$ ✓ (incluido)
- $x = \frac{7}{3}$: $|3 \cdot \frac{7}{3}+1| = |7+1| = 8 \leq 8$ ✓ (incluido)

### Respuesta Final

$$x \in \left[-3,\ \frac{7}{3}\right]$$

---

## Ejercicio 25 — Racionalización de denominadores

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Racionalizá el denominador y simplificá al máximo la siguiente expresión:
$$\frac{6}{\sqrt{5} - \sqrt{2}}$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia de racionalización.**
El denominador es una diferencia de radicales: $\sqrt{5} - \sqrt{2}$. Multiplicamos numerador y denominador por el conjugado $\sqrt{5} + \sqrt{2}$ para aplicar la identidad $(a-b)(a+b) = a^2 - b^2$.

**Paso 2: Multiplicar por el conjugado.**
$$\frac{6}{\sqrt{5} - \sqrt{2}} \cdot \frac{\sqrt{5} + \sqrt{2}}{\sqrt{5} + \sqrt{2}} = \frac{6(\sqrt{5} + \sqrt{2})}{(\sqrt{5})^2 - (\sqrt{2})^2}$$

**Paso 3: Calcular el denominador usando la diferencia de cuadrados.**
$$(\sqrt{5})^2 - (\sqrt{2})^2 = 5 - 2 = 3$$

**Paso 4: Simplificar la fracción resultante.**
$$\frac{6(\sqrt{5} + \sqrt{2})}{3} = 2(\sqrt{5} + \sqrt{2})$$

**Paso 5: Escribir el resultado expandido.**
$$2\sqrt{5} + 2\sqrt{2}$$

### Respuesta Final

$$\frac{6}{\sqrt{5} - \sqrt{2}} = 2\sqrt{5} + 2\sqrt{2}$$

---

## Ejercicio 26 — Factorización completa de un polinomio

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Factorizá completamente el siguiente polinomio sobre $\mathbb{R}$:
$$p(x) = 2x^3 - 8x^2 - 10x$$

### Resolución paso a paso

**Paso 1: Extraer el factor común.**
Cada término tiene factor $2x$:
$$p(x) = 2x(x^2 - 4x - 5)$$

**Paso 2: Factorizar el trinomio cuadrático $x^2 - 4x - 5$.**
Buscamos dos números $r$ y $s$ tales que $r \cdot s = -5$ y $r + s = -4$. Probamos: $r = -5$, $s = 1$ → $(-5)(1) = -5$ ✓ y $-5 + 1 = -4$ ✓.

**Paso 3: Escribir la factorización del trinomio.**
$$x^2 - 4x - 5 = (x - 5)(x + 1)$$

**Paso 4: Verificar mediante producto desarrollado.**
$$(x-5)(x+1) = x^2 + x - 5x - 5 = x^2 - 4x - 5 \checkmark$$

**Paso 5: Escribir la factorización completa.**
$$p(x) = 2x(x-5)(x+1)$$

Las raíces son $x = 0$, $x = 5$ y $x = -1$.

### Respuesta Final

$$p(x) = 2x(x - 5)(x + 1)$$

---

## Ejercicio 27 — Sistema de ecuaciones lineales 2×2

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Resolvé el siguiente sistema de ecuaciones lineales por el método de sustitución y verificá la solución:
$$\begin{cases} 3x - 2y = 7 \\ x + 4y = -1 \end{cases}$$

### Resolución paso a paso

**Paso 1: Despejar $x$ de la segunda ecuación.**
$$x + 4y = -1 \implies x = -1 - 4y$$

**Paso 2: Sustituir en la primera ecuación.**
$$3(-1 - 4y) - 2y = 7$$
$$-3 - 12y - 2y = 7$$
$$-14y = 7 + 3 = 10$$

**Paso 3: Resolver para $y$.**
$$y = \frac{10}{-14} = -\frac{5}{7}$$

**Paso 4: Sustituir $y = -\dfrac{5}{7}$ en la expresión de $x$.**
$$x = -1 - 4\left(-\frac{5}{7}\right) = -1 + \frac{20}{7} = \frac{-7 + 20}{7} = \frac{13}{7}$$

**Paso 5: Verificar en ambas ecuaciones originales.**
- $3 \cdot \dfrac{13}{7} - 2 \cdot \left(-\dfrac{5}{7}\right) = \dfrac{39}{7} + \dfrac{10}{7} = \dfrac{49}{7} = 7$ ✓
- $\dfrac{13}{7} + 4 \cdot \left(-\dfrac{5}{7}\right) = \dfrac{13}{7} - \dfrac{20}{7} = \dfrac{-7}{7} = -1$ ✓

### Respuesta Final

$$x = \frac{13}{7}, \qquad y = -\frac{5}{7}$$

---

## Ejercicio 28 — Simplificación de expresiones con potencias y raíces

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Simplificá la siguiente expresión, dejando el resultado sin denominadores y con exponentes positivos:
$$E = \frac{x^{5/3} \cdot x^{-1/2}}{x^{2/3}}$$

con $x > 0$.

### Resolución paso a paso

**Paso 1: Aplicar la propiedad $a^m \cdot a^n = a^{m+n}$ en el numerador.**
$$x^{5/3} \cdot x^{-1/2} = x^{5/3 + (-1/2)} = x^{5/3 - 1/2}$$

**Paso 2: Calcular el exponente $\dfrac{5}{3} - \dfrac{1}{2}$.**
$$\text{mcm}(3,2) = 6 \implies \frac{5}{3} - \frac{1}{2} = \frac{10}{6} - \frac{3}{6} = \frac{7}{6}$$
Entonces el numerador es $x^{7/6}$.

**Paso 3: Aplicar la propiedad $\dfrac{a^m}{a^n} = a^{m-n}$.**
$$E = \frac{x^{7/6}}{x^{2/3}} = x^{7/6 - 2/3}$$

**Paso 4: Calcular el exponente $\dfrac{7}{6} - \dfrac{2}{3}$.**
$$\frac{2}{3} = \frac{4}{6} \implies \frac{7}{6} - \frac{4}{6} = \frac{3}{6} = \frac{1}{2}$$

**Paso 5: Escribir el resultado

## Ejercicio 31 — Clasificación y orden en los números reales

**Dificultad:** ⭐ Básica

### Enunciado

Determiná a cuáles conjuntos numéricos ($\mathbb{N}$, $\mathbb{Z}$, $\mathbb{Q}$, $\mathbb{I}$, $\mathbb{R}$) pertenece cada uno de los siguientes números y ordenalos de menor a mayor en la recta real:

$$a = -\frac{9}{3}, \quad b = \sqrt{7}, \quad c = 0{,}3\overline{6}, \quad d = \pi - \pi, \quad e = -\sqrt{16}$$

### Resolución paso a paso

**Paso 1: Simplificar cada expresión.**

- $a = -\dfrac{9}{3} = -3$
- $b = \sqrt{7} \approx 2{,}6457\ldots$ (no es raíz exacta)
- $c = 0{,}3\overline{6} = 0{,}3666\ldots$ (decimal periódico)
- $d = \pi - \pi = 0$
- $e = -\sqrt{16} = -4$

**Paso 2: Clasificar $a = -3$.**

Es entero negativo. Pertenece a $\mathbb{Z}$, $\mathbb{Q}$ y $\mathbb{R}$. No pertenece a $\mathbb{N}$ ni a $\mathbb{I}$.

**Paso 3: Clasificar $b = \sqrt{7}$.**

$\sqrt{7}$ es irracional (7 no es cuadrado perfecto). Pertenece a $\mathbb{I}$ y $\mathbb{R}$ solamente.

**Paso 4: Clasificar $c = 0{,}3\overline{6}$.**

Todo decimal periódico es racional. Lo verificamos: sea $x = 0{,}3\overline{6}$.

$$10x = 3{,}\overline{6}, \quad 100x = 36{,}\overline{6}$$

$$100x - 10x = 36{,}\overline{6} - 3{,}\overline{6} = 33 \implies 90x = 33 \implies x = \frac{33}{90} = \frac{11}{30}$$

Pertenece a $\mathbb{Q}$ y $\mathbb{R}$.

**Paso 5: Clasificar $d = 0$ y $e = -4$.**

- $d = 0$: pertenece a $\mathbb{N}$ (según la convención CBC), $\mathbb{Z}$, $\mathbb{Q}$ y $\mathbb{R}$.
- $e = -4$: pertenece a $\mathbb{Z}$, $\mathbb{Q}$ y $\mathbb{R}$.

**Paso 6: Ordenar de menor a mayor.**

Valores aproximados: $e = -4$, $a = -3$, $d = 0$, $c \approx 0{,}367$, $b \approx 2{,}646$.

$$e < a < d < c < b \quad \Longrightarrow \quad -4 < -3 < 0 < \frac{11}{30} < \sqrt{7}$$

### Respuesta Final

| Número | Valor | $\mathbb{N}$ | $\mathbb{Z}$ | $\mathbb{Q}$ | $\mathbb{I}$ | $\mathbb{R}$ |
|--------|-------|:---:|:---:|:---:|:---:|:---:|
| $a$ | $-3$ | ✗ | ✓ | ✓ | ✗ | ✓ |
| $b$ | $\sqrt{7}$ | ✗ | ✗ | ✗ | ✓ | ✓ |
| $c$ | $\tfrac{11}{30}$ | ✗ | ✗ | ✓ | ✗ | ✓ |
| $d$ | $0$ | ✓ | ✓ | ✓ | ✗ | ✓ |
| $e$ | $-4$ | ✗ | ✓ | ✓ | ✗ | ✓ |

Orden: $-4 < -3 < 0 < \dfrac{11}{30} < \sqrt{7}$

---

## Ejercicio 32 — Operaciones con fracciones y simplificación

**Dificultad:** ⭐ Básica

### Enunciado

Calculá y simplificá al máximo la siguiente expresión:

$$E = \frac{5}{6} - \frac{3}{4} + \frac{7}{12} \cdot \frac{2}{5} - \frac{1}{3} \div \frac{4}{9}$$

### Resolución paso a paso

**Paso 1: Identificar el orden de las operaciones.**

Primero se resuelven multiplicaciones y divisiones, luego sumas y restas.

**Paso 2: Calcular el producto $\dfrac{7}{12} \cdot \dfrac{2}{5}$.**

$$\frac{7}{12} \cdot \frac{2}{5} = \frac{7 \cdot 2}{12 \cdot 5} = \frac{14}{60} = \frac{7}{30}$$

**Paso 3: Calcular la división $\dfrac{1}{3} \div \dfrac{4}{9}$.**

Dividir es multiplicar por el recíproco:

$$\frac{1}{3} \div \frac{4}{9} = \frac{1}{3} \cdot \frac{9}{4} = \frac{9}{12} = \frac{3}{4}$$

**Paso 4: Reescribir la expresión con los resultados obtenidos.**

$$E = \frac{5}{6} - \frac{3}{4} + \frac{7}{30} - \frac{3}{4}$$

**Paso 5: Encontrar el mínimo común múltiplo de los denominadores.**

$\text{mcm}(6, 4, 30, 4) = \text{mcm}(6, 4, 30) = 60$.

**Paso 6: Convertir todas las fracciones al denominador 60 y operar.**

$$E = \frac{50}{60} - \frac{45}{60} + \frac{14}{60} - \frac{45}{60} = \frac{50 - 45 + 14 - 45}{60} = \frac{-26}{60} = -\frac{13}{30}$$

### Respuesta Final

$$E = -\frac{13}{30}$$

---

## Ejercicio 33 — Valor absoluto: ecuación con dos casos

**Dificultad:** ⭐ Básica

### Enunciado

Resolvé la ecuación:

$$|3x - 7| = 2x + 1$$

### Resolución paso a paso

**Paso 1: Recordar la definición de valor absoluto.**

$|A| = k$ con $k \geq 0$ implica $A = k$ o $A = -k$. Además, la solución es válida solo si $2x + 1 \geq 0$, es decir, $x \geq -\dfrac{1}{2}$.

**Paso 2: Plantear el Caso 1: $3x - 7 \geq 0$, o sea $x \geq \frac{7}{3}$.**

La ecuación se convierte en:

$$3x - 7 = 2x + 1$$

$$3x - 2x = 1 + 7 \implies x = 8$$

Verificar: $x = 8 \geq \dfrac{7}{3}$ ✓ y $2(8)+1 = 17 > 0$ ✓.

**Paso 3: Plantear el Caso 2: $3x - 7 < 0$, o sea $x < \frac{7}{3}$.**

El valor absoluto cambia el signo:

$$-(3x - 7) = 2x + 1 \implies -3x + 7 = 2x + 1$$

$$7 - 1 = 2x + 3x \implies 6 = 5x \implies x = \frac{6}{5}$$

Verificar: $x = \dfrac{6}{5} < \dfrac{7}{3}$ ✓ y $2 \cdot \dfrac{6}{5} + 1 = \dfrac{17}{5} > 0$ ✓.

**Paso 4: Verificar ambas soluciones en la ecuación original.**

- $x = 8$: $|3(8)-7| = |17| = 17$ y $2(8)+1 = 17$ ✓
- $x = \dfrac{6}{5}$: $\left|3 \cdot \dfrac{6}{5}-7\right| = \left|\dfrac{18}{5}-\dfrac{35}{5}\right| = \dfrac{17}{5}$ y $2 \cdot \dfrac{6}{5}+1 = \dfrac{17}{5}$ ✓

### Respuesta Final

$$x = 8 \quad \text{o} \quad x = \frac{6}{5}$$

---

## Ejercicio 34 — Propiedades de potencias y radicales

**Dificultad:** ⭐ Básica

### Enunciado

Simplificá la siguiente expresión, dejando el resultado sin denominador y con exponentes positivos:

$$P = \frac{x^{5/3} \cdot x^{-1/2}}{\sqrt[6]{x^5}} \qquad (x > 0)$$

### Resolución paso a paso

**Paso 1: Convertir el radical del denominador a exponente fraccionario.**

$$\sqrt[6]{x^5} = x^{5/6}$$

**Paso 2: Simplificar el numerador usando la propiedad $x^a \cdot x^b = x^{a+b}$.**

$$x^{5/3} \cdot x^{-1/2} = x^{5/3 - 1/2}$$

Calculo $\dfrac{5}{3} - \dfrac{1}{2}$ con denominador común 6:

$$\frac{5}{3} - \frac{1}{2} = \frac{10}{6} - \frac{3}{6} = \frac{7}{6}$$

Entonces el numerador es $x^{7/6}$.

**Paso 3: Aplicar la propiedad $\dfrac{x^a}{x^b} = x^{a-b}$.**

$$P = \frac{x^{7/6}}{x^{5/6}} = x^{7/6 - 5/6} = x^{2/6} = x^{1/3}$$

**Paso 4: Escribir el resultado en forma radical para confirmar.**

$$x^{1/3} = \sqrt[3]{x}$$

### Respuesta Final

$$P = x^{1/3} = \sqrt[3]{x}$$

---

## Ejercicio 35 — Factorización completa de un polinomio

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Factorizá completamente el siguiente polinomio:

$$p(x) = 2x^4 - 8x^3 - 10x^2 + 44x - 28$$

### Resolución paso a paso

**Paso 1: Extraer factor común.**

Todos los coeficientes son divisibles por 2:

$$p(x) = 2(x^4 - 4x^3 - 5x^2 + 22x - 14)$$

**Paso 2: Buscar raíces racionales del polinomio $q(x) = x^4 - 4x^3 - 5x^2 + 22x - 14$.**

Los divisores de 14 son $\pm1, \pm2, \pm7, \pm14$. Probamos:

- $q(1) = 1 - 4 - 5 + 22 - 14 = 0$ ✓ → $(x-1)$ es factor.

**Paso 3: Dividir $q(x)$ por $(x-1)$ usando división sintética (Ruffini).**

$$\begin{array}{r|rrrrr}
1 & 1 & -4 & -5 & 22 & -14 \\
  &   &  1 & -3 & -8 &  14 \\
\hline
  & 1 & -3 & -8 & 14 &   0
\end{array}$$

Cociente: $x^3 - 3x^2 - 8x + 14$.

**Paso 4: Buscar raíces del cociente $r(x) = x^3 - 3x^2 - 8x + 14$.**

- $r(1) = 1 - 3 - 8 + 14 = 4 \neq 0$
- $r(7) = 343 - 147 - 56 + 14 = 154 \neq 0$
- $r(-2) = -8 - 12 + 16 + 14 = 10 \neq 0$
- $r(7)$... probamos $r(2) = 8 - 12 - 16 + 14 = -6 \neq 0$
- $r(-1) = -1 - 3 + 8 + 14 = 18 \neq 0$
- $r(7)$... probamos $r(1)$ ya hecho; probemos el trinomio al cuadrado.

Reintentando con $r(-2) = -8 - 12 + 16 + 14 = 10$, $r(7)=154$, $r(-7) = -343-147+56+14=-420$.

Probemos $r(1)=4$, busquemos otra raíz: $x = -1$: ya calculado. Reedito el polinomio inicial.

Recalculo $p(x)=2x^4-8x^3-10x^2+44x-28$. $q(x) = x^4-4x^3-5x^2+22x-14$.

Tras dividir por $(x-1)$: $x^3-3x^2-8x+14$. Probamos $x=7$: $343-147-56+14=154$. $x=-2$: $-8-12+16+14=10$. $x=2$: $8-12-16+14=-6$. Intentemos otra raíz:

$x = -1$: $-1-3+8+14 = 18$. Parece que no hay más raíces racionales enteras simples. Revisemos con $x=1$ nuevamente en $r$: $r(1) = 4 \neq 0$.

Probemos el discriminante del cúbico o busquemos error. Revisemos Ruffini con $x=1$ en $r(x)$: $r(x)=x^3-3x^2-8x+14$. Probamos $x=7$: demasiado grande; $x=-1$: 18; probemos ahora $x

## Ejercicio 41 — Clasificación y orden en la recta real

**Dificultad:** ⭐ Básica

### Enunciado

Clasificá cada uno de los siguientes números indicando si son naturales, enteros, racionales o irracionales. Luego ordenalos de menor a mayor sobre la recta real:

$$\frac{7}{2}, \quad -3, \quad \sqrt{5}, \quad 0, \quad -\frac{1}{4}, \quad \pi - 3$$

### Resolución paso a paso

**Paso 1: Clasificar cada número.**

- $\frac{7}{2} = 3{,}5$ → **Racional** (cociente de enteros con denominador $\neq 0$).
- $-3$ → **Entero** (y también racional, ya que $-3 = \frac{-3}{1}$).
- $\sqrt{5} \approx 2{,}236\ldots$ → **Irracional** (no puede expresarse como cociente de enteros; su decimal es no periódico e infinito).
- $0$ → **Natural** (según la convención adoptada en CBC), **entero** y **racional**.
- $-\frac{1}{4} = -0{,}25$ → **Racional**.
- $\pi - 3 \approx 3{,}1416\ldots - 3 = 0{,}1416\ldots$ → **Irracional** (diferencia de un irracional y un racional es irracional).

**Paso 2: Convertir todos a decimales aproximados para comparar.**

$$-3 = -3{,}000 \qquad -\tfrac{1}{4} = -0{,}250 \qquad 0 = 0{,}000$$
$$\pi - 3 \approx 0{,}1416 \qquad \sqrt{5} \approx 2{,}236 \qquad \tfrac{7}{2} = 3{,}500$$

**Paso 3: Ordenar de menor a mayor.**

Comparando los valores decimales:

$$-3{,}000 < -0{,}250 < 0{,}000 < 0{,}1416\ldots < 2{,}236\ldots < 3{,}500$$

**Paso 4: Escribir el orden con los símbolos originales.**

$$-3 < -\frac{1}{4} < 0 < \pi - 3 < \sqrt{5} < \frac{7}{2}$$

### Respuesta Final

El orden de menor a mayor es:

$$-3 < -\dfrac{1}{4} < 0 < \pi - 3 < \sqrt{5} < \dfrac{7}{2}$$

---

## Ejercicio 42 — Operaciones con fracciones y simplificación

**Dificultad:** ⭐ Básica

### Enunciado

Calculá y simplificá al máximo la siguiente expresión:

$$E = \frac{5}{6} - \frac{3}{4} + \frac{7}{12} \cdot \frac{2}{5}$$

### Resolución paso a paso

**Paso 1: Respetar el orden de las operaciones (jerarquía).**

Primero se resuelve el producto $\dfrac{7}{12} \cdot \dfrac{2}{5}$, y luego se realizan las sumas/restas.

**Paso 2: Calcular el producto.**

$$\frac{7}{12} \cdot \frac{2}{5} = \frac{7 \times 2}{12 \times 5} = \frac{14}{60}$$

Simplificamos dividiendo numerador y denominador por $\text{MCD}(14, 60) = 2$:

$$\frac{14}{60} = \frac{7}{30}$$

**Paso 3: Reescribir la expresión con el resultado del producto.**

$$E = \frac{5}{6} - \frac{3}{4} + \frac{7}{30}$$

**Paso 4: Calcular el mínimo común múltiplo de los denominadores.**

Los denominadores son $6$, $4$ y $30$.

$$\text{MCM}(6, 4, 30) = 60$$

**Paso 5: Convertir cada fracción al denominador común $60$.**

$$\frac{5}{6} = \frac{50}{60}, \qquad \frac{3}{4} = \frac{45}{60}, \qquad \frac{7}{30} = \frac{14}{60}$$

**Paso 6: Operar con el denominador común.**

$$E = \frac{50}{60} - \frac{45}{60} + \frac{14}{60} = \frac{50 - 45 + 14}{60} = \frac{19}{60}$$

Verificamos: $\text{MCD}(19, 60) = 1$, por lo que la fracción ya es irreducible.

### Respuesta Final

$$E = \dfrac{19}{60}$$

---

## Ejercicio 43 — Valor absoluto: ecuación con dos casos

**Dificultad:** ⭐ Básica

### Enunciado

Resolvé la siguiente ecuación con valor absoluto y verificá las soluciones:

$$|2x - 5| = 7$$

### Resolución paso a paso

**Paso 1: Recordar la definición de valor absoluto.**

Para cualquier expresión $A$, la ecuación $|A| = k$ con $k > 0$ equivale a:

$$A = k \qquad \text{o} \qquad A = -k$$

**Paso 2: Plantear los dos casos.**

$$\text{Caso 1: } 2x - 5 = 7 \qquad \text{Caso 2: } 2x - 5 = -7$$

**Paso 3: Resolver el Caso 1.**

$$2x - 5 = 7$$
$$2x = 7 + 5 = 12$$
$$x = \frac{12}{2} = 6$$

**Paso 4: Resolver el Caso 2.**

$$2x - 5 = -7$$
$$2x = -7 + 5 = -2$$
$$x = \frac{-2}{2} = -1$$

**Paso 5: Verificar las soluciones en la ecuación original.**

- Para $x = 6$: $|2(6) - 5| = |12 - 5| = |7| = 7$ ✓
- Para $x = -1$: $|2(-1) - 5| = |-2 - 5| = |-7| = 7$ ✓

### Respuesta Final

Las soluciones son $x = 6$ y $x = -1$.

$$S = \{-1,\ 6\}$$

---

## Ejercicio 44 — Inecuación con valor absoluto e interpretación en la recta

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Resolvé la inecuación, expresá la solución en notación de intervalo y representala sobre la recta real:

$$|3x + 1| \leq 8$$

### Resolución paso a paso

**Paso 1: Recordar la equivalencia para inecuaciones con valor absoluto.**

La inecuación $|A| \leq k$ (con $k > 0$) equivale a la inecuación doble:

$$-k \leq A \leq k$$

**Paso 2: Aplicar la equivalencia con $A = 3x + 1$ y $k = 8$.**

$$-8 \leq 3x + 1 \leq 8$$

**Paso 3: Restar $1$ en los tres miembros.**

$$-8 - 1 \leq 3x \leq 8 - 1$$
$$-9 \leq 3x \leq 7$$

**Paso 4: Dividir los tres miembros por $3$ (positivo, no cambia el sentido de las desigualdades).**

$$\frac{-9}{3} \leq x \leq \frac{7}{3}$$
$$-3 \leq x \leq \frac{7}{3}$$

**Paso 5: Expresar la solución en notación de intervalo.**

$$x \in \left[-3,\ \frac{7}{3}\right]$$

La recta real muestra extremos cerrados (incluidos) en $-3$ y $\frac{7}{3} \approx 2{,}\overline{3}$.

### Respuesta Final

$$S = \left[-3,\ \dfrac{7}{3}\right]$$

---

## Ejercicio 45 — Racionalización de denominadores con radical doble

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Racionalizá el denominador y simplificá la expresión:

$$E = \frac{6}{\sqrt{5} - \sqrt{2}}$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia de racionalización.**

Cuando el denominador es de la forma $\sqrt{a} - \sqrt{b}$, se multiplica y divide por el **conjugado** $\sqrt{a} + \sqrt{b}$, utilizando la identidad $(A - B)(A + B) = A^2 - B^2$.

**Paso 2: Multiplicar numerador y denominador por el conjugado $(\sqrt{5} + \sqrt{2})$.**

$$E = \frac{6}{\sqrt{5} - \sqrt{2}} \cdot \frac{\sqrt{5} + \sqrt{2}}{\sqrt{5} + \sqrt{2}}$$

**Paso 3: Operar el denominador usando diferencia de cuadrados.**

$$(\sqrt{5} - \sqrt{2})(\sqrt{5} + \sqrt{2}) = (\sqrt{5})^2 - (\sqrt{2})^2 = 5 - 2 = 3$$

**Paso 4: Operar el numerador.**

$$6 \cdot (\sqrt{5} + \sqrt{2}) = 6\sqrt{5} + 6\sqrt{2}$$

**Paso 5: Escribir la fracción resultante y simplificar.**

$$E = \frac{6\sqrt{5} + 6\sqrt{2}}{3} = \frac{6(\sqrt{5} + \sqrt{2})}{3} = 2(\sqrt{5} + \sqrt{2})$$

### Respuesta Final

$$E = 2\!\left(\sqrt{5} + \sqrt{2}\right) = 2\sqrt{5} + 2\sqrt{2}$$

---

## Ejercicio 46 — Simplificación de expresión algebraica con potencias y raíces

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Simplificá la siguiente expresión, escribiendo el resultado con exponentes racionales positivos. Considerá $x > 0$:

$$E = \frac{x^{3/2} \cdot x^{-1/3}}{\sqrt[4]{x^3}}$$

### Resolución paso a paso

**Paso 1: Convertir la raíz del denominador a exponente racional.**

$$\sqrt[4]{x^3} = x^{3/4}$$

**Paso 2: Reescribir la expresión completa con exponentes racionales.**

$$E = \frac{x^{3/2} \cdot x^{-1/3}}{x^{3/4}}$$

**Paso 3: Aplicar la propiedad $a^m \cdot a^n = a^{m+n}$ en el numerador.**

Calcular $\dfrac{3}{2} + \left(-\dfrac{1}{3}\right)$. El MCM de $2$ y $3$ es $6$:

$$\frac{3}{2} - \frac{1}{3} = \frac{9}{6} - \frac{2}{6} = \frac{7}{6}$$

Entonces el numerador es $x^{7/6}$.

**Paso 4: Aplicar la propiedad $\dfrac{a^m}{a^n} = a^{m-n}$.**

$$E = \frac{x^{7/6}}{x^{3/4}} = x^{\,7/6\ -\ 3/4}$$

**Paso 5: Calcular el exponente $\dfrac{7}{6} - \dfrac{3}{4}$. El MCM de $6$ y $4$ es $12$:**

$$\frac{7}{6} - \frac{3}{4} = \frac{14}{12} - \frac{9}{12} = \frac{5}{12}$$

**Paso 6: Escribir el resultado final.**

$$E = x^{5/12}$$

### Respuesta Final

$$E = x^{5/12} = \sqrt[12]{x^5} \qquad (x > 0)$$

---

## Ejercicio 47 — Sistema de ecuaciones lineales $2 \times 2$ por sustitución y eliminación

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Resolvé el siguiente sistema de ecuaciones y clasificalo (compatible determinado, incompatible o indeterminado):

$$\begin{cases} 3x - 2y = 7 \\ 5x + 4y = 3 \end{cases}$$

### Resolución paso a paso

**Paso 1: Elegir el método de eliminación (suma/resta).**

Vamos a eliminar la variable $y$. Los coeficientes de $y$ son $-2$ y $4$. Multiplicamos la primera ecuación por $2$ para igualar los coeficientes en valor absoluto.

**Paso 2: Multiplicar la primera ecuación por $2$.**

$$2 \cdot (3x - 2y) = 2 \cdot 7 \implies 6x - 4y = 14$$

El sistema equivalente queda:

$$\begin{cases} 6x - 4y = 14 \\ 5x + 4y = 3 \end{cases}$$

**Paso 3: Sumar ambas ecuaciones para eliminar $y$.**

$$(6x - 4y) + (5x + 4y) = 14 + 3$$
$$11x = 17$$
$$x = \frac{17}{11}$$

**Paso 4: Sustituir $x = \dfrac{17}{11}$ en la primera ecuación original para hallar $y$.**

$$3 \cdot \frac{17}{11} - 2y = 7$$
$$\frac{51}{11} - 2y = 7$$
$$-2y = 7 - \frac{51}{11} = \frac{77}{11} - \frac{51}{11} = \frac{26}{11}$$
$$y = -\frac{26}{22} = -\frac{13}{11}$$

**Paso 5: Verificar en la segunda ecuación original.**

$$5 \cdot \frac{17}{11} + 4 \cdot \left(-\frac{13}{11}\right) = \frac{85}{11} - \frac{52}{11} = \frac{33}{11} = 3 \checkmark$$

El sistema tiene solución única → es **compatible determinado**.

### Respuesta Final

$$x = \dfrac{17}{11}, \qquad y = -\dfrac{13}{11}$$

## Ejercicio 51 — Clasificación y orden en los reales

**Dificultad:** ⭐ Básica

### Enunciado

Determiná si los siguientes números son racionales o irracionales y ordenalos de menor a mayor:
$$A = \sqrt{16}, \quad B = -\dfrac{7}{3}, \quad C = \sqrt{5}, \quad D = 0{,}1\overline{6}$$

### Resolución paso a paso

**Paso 1: Clasificar cada número.**
- $A = \sqrt{16} = 4$ → racional (entero).
- $B = -\dfrac{7}{3} \approx -2{,}333...$ → racional (fracción).
- $C = \sqrt{5} \approx 2{,}236...$ → irracional (raíz de no cuadrado perfecto).
- $D = 0{,}1\overline{6} = 0{,}1666...$ → racional (decimal periódico).

**Paso 2: Convertir $D$ a fracción para mayor precisión.**
Sea $x = 0{,}1\overline{6}$. Entonces $10x = 1{,}\overline{6}$ y $100x = 16{,}\overline{6}$.
Restando: $100x - 10x = 16{,}\overline{6} - 1{,}\overline{6}$, es decir $90x = 15$, por lo tanto $x = \dfrac{15}{90} = \dfrac{1}{6}$.

**Paso 3: Obtener valores decimales aproximados de todos.**
$$B \approx -2{,}333 \quad < \quad D = \tfrac{1}{6} \approx 0{,}167 \quad < \quad C \approx 2{,}236 \quad < \quad A = 4$$

**Paso 4: Establecer el orden.**
Comparando los cuatro valores ubicados en la recta real:
$$B < D < C < A$$

### Respuesta Final

- $A = 4$ (racional), $B = -\tfrac{7}{3}$ (racional), $C = \sqrt{5}$ (irracional), $D = \tfrac{1}{6}$ (racional).
- Orden de menor a mayor: $$-\dfrac{7}{3} < \dfrac{1}{6} < \sqrt{5} < 4$$

---

## Ejercicio 52 — Simplificación de expresión con potencias y raíces

**Dificultad:** ⭐ Básica

### Enunciado

Simplificá completamente la siguiente expresión:
$$E = \dfrac{x^{5/3} \cdot x^{-1/3}}{x^{2/3}} \quad \text{con } x > 0$$

### Resolución paso a paso

**Paso 1: Aplicar la propiedad del producto de potencias de igual base.**
En el numerador, como las bases son iguales, se suman los exponentes:
$$x^{5/3} \cdot x^{-1/3} = x^{5/3 + (-1/3)} = x^{4/3}$$

**Paso 2: Aplicar la propiedad del cociente de potencias de igual base.**
Al dividir potencias de igual base se restan los exponentes:
$$\dfrac{x^{4/3}}{x^{2/3}} = x^{4/3 - 2/3} = x^{2/3}$$

**Paso 3: Expresar el resultado en forma radical.**
Recordando que $x^{p/q} = \sqrt[q]{x^p}$:
$$x^{2/3} = \sqrt[3]{x^2}$$

**Paso 4: Verificar con un valor concreto.**
Para $x = 8$: $E = \dfrac{8^{5/3} \cdot 8^{-1/3}}{8^{2/3}} = \dfrac{32 \cdot \tfrac{1}{2}}{4} = \dfrac{16}{4} = 4$ y $8^{2/3} = (\sqrt[3]{8})^2 = 4$. ✓

### Respuesta Final

$$E = x^{2/3} = \sqrt[3]{x^2}$$

---

## Ejercicio 53 — Racionalización de denominador con binomio irracional

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Racionalizá el denominador y simplificá:
$$E = \dfrac{3 + \sqrt{5}}{\sqrt{5} - \sqrt{2}}$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
El denominador es un binomio irracional de la forma $a - b$. Se multiplica numerador y denominador por el conjugado $a + b = \sqrt{5} + \sqrt{2}$, usando la identidad $(a-b)(a+b) = a^2 - b^2$.

**Paso 2: Multiplicar numerador y denominador por el conjugado.**
$$E = \dfrac{(3 + \sqrt{5})(\sqrt{5} + \sqrt{2})}{(\sqrt{5} - \sqrt{2})(\sqrt{5} + \sqrt{2})}$$

**Paso 3: Calcular el denominador.**
$$(\sqrt{5})^2 - (\sqrt{2})^2 = 5 - 2 = 3$$

**Paso 4: Desarrollar el numerador aplicando distributiva.**
$$(3 + \sqrt{5})(\sqrt{5} + \sqrt{2}) = 3\sqrt{5} + 3\sqrt{2} + \sqrt{5}\cdot\sqrt{5} + \sqrt{5}\cdot\sqrt{2}$$
$$= 3\sqrt{5} + 3\sqrt{2} + 5 + \sqrt{10}$$

**Paso 5: Escribir el resultado final.**
$$E = \dfrac{5 + 3\sqrt{2} + 3\sqrt{5} + \sqrt{10}}{3}$$

### Respuesta Final

$$E = \dfrac{5 + 3\sqrt{2} + 3\sqrt{5} + \sqrt{10}}{3}$$

---

## Ejercicio 54 — Resolución de ecuación con valor absoluto

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Resolvé la ecuación y expresá la solución en forma de conjunto:
$$|2x - 5| = |x + 1|$$

### Resolución paso a paso

**Paso 1: Plantear los dos casos.**
La ecuación $|A| = |B|$ equivale a $A = B$ o $A = -B$.

**Paso 2: Resolver el Caso 1** — $2x - 5 = x + 1$.
$$2x - x = 1 + 5 \implies x = 6$$

**Paso 3: Verificar $x = 6$.**
$$|2(6) - 5| = |7| = 7 \qquad |6 + 1| = |7| = 7 \quad \checkmark$$

**Paso 4: Resolver el Caso 2** — $2x - 5 = -(x + 1)$.
$$2x - 5 = -x - 1 \implies 3x = 4 \implies x = \dfrac{4}{3}$$

**Paso 5: Verificar $x = \tfrac{4}{3}$.**
$$\left|2 \cdot \tfrac{4}{3} - 5\right| = \left|\tfrac{8}{3} - \tfrac{15}{3}\right| = \left|-\tfrac{7}{3}\right| = \tfrac{7}{3}$$
$$\left|\tfrac{4}{3} + 1\right| = \left|\tfrac{7}{3}\right| = \tfrac{7}{3} \quad \checkmark$$

### Respuesta Final

$$S = \left\{\dfrac{4}{3},\ 6\right\}$$

---

## Ejercicio 55 — Inecuación con valor absoluto

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Resolvé la inecuación y expresá la solución en notación de intervalo y en la recta real:
$$|3x + 2| < 7$$

### Resolución paso a paso

**Paso 1: Aplicar la propiedad de valor absoluto menor que una constante positiva.**
$|A| < k$ (con $k > 0$) equivale a $-k < A < k$. Aquí $A = 3x+2$ y $k = 7$:
$$-7 < 3x + 2 < 7$$

**Paso 2: Restar 2 en los tres miembros.**
$$-7 - 2 < 3x < 7 - 2$$
$$-9 < 3x < 5$$

**Paso 3: Dividir los tres miembros por 3 (positivo, no cambia el sentido).**
$$-3 < x < \dfrac{5}{3}$$

**Paso 4: Verificar un valor interior y uno exterior.**
- $x = 0$ (interior): $|3(0)+2| = 2 < 7$ ✓
- $x = 2$ (exterior): $|3(2)+2| = 8 \not< 7$ ✓ (queda fuera, como se esperaba)

### Respuesta Final

$$S = \left(-3,\ \dfrac{5}{3}\right)$$

---

## Ejercicio 56 — Factorización completa de un polinomio cúbico

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Factorizá completamente el polinomio:
$$P(x) = 2x^3 - 3x^2 - 11x + 6$$

### Resolución paso a paso

**Paso 1: Buscar raíces racionales candidatas.**
Por el teorema de la raíz racional, las posibles raíces son $\pm\dfrac{p}{q}$ donde $p \mid 6$ y $q \mid 2$:
$$\pm 1,\ \pm 2,\ \pm 3,\ \pm 6,\ \pm\tfrac{1}{2},\ \pm\tfrac{3}{2}$$

**Paso 2: Probar $x = 3$.**
$$P(3) = 2(27) - 3(9) - 11(3) + 6 = 54 - 27 - 33 + 6 = 0 \quad \checkmark$$
Entonces $(x - 3)$ es factor.

**Paso 3: Dividir $P(x)$ por $(x-3)$ mediante Ruffini.**

| | 2 | −3 | −11 | 6 |
|---|---|---|---|---|
| 3 | | 6 | 9 | −6 |
| | 2 | 3 | −2 | 0 |

El cociente es $2x^2 + 3x - 2$.

**Paso 4: Factorizar el trinomio cuadrático $2x^2 + 3x - 2$.**
Buscamos $a$, $b$ tales que $2x^2 + 3x - 2 = (2x + a)(x + b)$ con $ab = -2$ y $a + 2b = 3$.
Probando $a = -1$, $b = 2$: $(2x - 1)(x + 2)$. Verificación: $2x^2 + 4x - x - 2 = 2x^2 + 3x - 2$ ✓

**Paso 5: Escribir la factorización completa.**
$$P(x) = (x - 3)(2x - 1)(x + 2)$$

### Respuesta Final

$$P(x) = (x-3)(2x-1)(x+2)$$
Las raíces son $x = 3$, $x = \dfrac{1}{2}$ y $x = -2$.

---

## Ejercicio 57 — Sistema de ecuaciones con parámetro

**Dificultad:** ⭐⭐⭐ Avanzada

### Enunciado

Determiná para qué valores del parámetro $k \in \mathbb{R}$ el siguiente sistema tiene solución única, infinitas soluciones o no tiene solución:
$$\begin{cases} 2x + ky = 4 \\ kx + 2y = 6 \end{cases}$$

### Resolución paso a paso

**Paso 1: Calcular el determinante de la matriz de coeficientes.**
$$\Delta = \begin{vmatrix} 2 & k \\ k & 2 \end{vmatrix} = 2 \cdot 2 - k \cdot k = 4 - k^2$$

**Paso 2: Analizar el caso $\Delta \neq 0$ (solución única).**
$$4 - k^2 \neq 0 \implies k^2 \neq 4 \implies k \neq 2 \text{ y } k \neq -2$$
Para todo $k \in \mathbb{R} \setminus \{-2, 2\}$, el sistema tiene solución única.

**Paso 3: Analizar el caso $k = 2$.**
El sistema queda:
$$\begin{cases} 2x + 2y = 4 \\ 2x + 2y = 6 \end{cases}$$
Ambas ecuaciones son paralelas (misma izquierda, distinta derecha). **Sin solución.**

**Paso 4: Analizar el caso $k = -2$.**
El sistema queda:
$$\begin{cases} 2x - 2y = 4 \implies x - y = 2\\ -2x + 2y = 6 \implies -x + y = 3 \end{cases}$$
La segunda ecuación es $-(x - y) = 3$, es decir $x - y = -3$, que contradice $x - y = 2$. **Sin solución.**

**Paso 5: Conclusión sobre infinitas soluciones.**
No existe ningún valor de $k$ que produzca ecuaciones proporcionales entre sí (las ecuaciones son consistentes entre sí solo si los términos independientes son proporcionales en la misma razón). Verificando: para $k=2$, la razón de los coeficientes es $1$ pero $4/6 \neq 1$; para $k=-2$ ídem. Por lo tanto **nunca hay infinitas soluciones**.

### Respuesta Final

- **Solución única:** $k \in \mathbb{R} \setminus \{-2, 2\}$
- **Sin solución:** $k = 2$ o $k = -2$
- **Infinitas soluciones:** ningún valor de $k$

---

## Ejercicio 58 — Inecuación cuadrática con análisis de signo

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Resolvé la inecuación y expresá el conjunto solución en notación de intervalo:
$$x^2 - 2x - 8 \geq 0$$

### Resolución paso a paso

**Paso 1: Factorizar el trinomio cuadrático.**
Buscamos dos números cuyo producto sea $-8$ y cuya suma sea $-2$: son $-4$ y $2$.

## Ejercicio 61 — Clasificación y orden en la recta real

**Dificultad:** ⭐ Básica

### Enunciado

Determiná si cada uno de los siguientes números es racional o irracional. Luego ordenalos de menor a mayor y ubicalos en la recta real:

$$\frac{7}{3}, \quad \sqrt{5}, \quad -\frac{11}{4}, \quad \sqrt{9}, \quad -\sqrt{2}$$

### Resolución paso a paso

**Paso 1: Clasificar cada número.**

- $\dfrac{7}{3}$: cociente de enteros con denominador no nulo → **racional**. $\frac{7}{3} \approx 2{,}333...$
- $\sqrt{5}$: no es cuadrado perfecto → **irracional**. $\sqrt{5} \approx 2{,}236...$
- $-\dfrac{11}{4}$: cociente de enteros → **racional**. $-\frac{11}{4} = -2{,}75$
- $\sqrt{9} = 3$: cuadrado perfecto → **racional** (es el entero $3$).
- $-\sqrt{2}$: $\sqrt{2}$ es irracional → su opuesto también es **irracional**. $-\sqrt{2} \approx -1{,}414...$

**Paso 2: Convertir todos a decimales aproximados para comparar.**

$$-\frac{11}{4} = -2{,}75 \qquad -\sqrt{2} \approx -1{,}414 \qquad \frac{7}{3} \approx 2{,}333 \qquad \sqrt{5} \approx 2{,}236 \qquad \sqrt{9} = 3$$

**Paso 3: Ordenar de menor a mayor.**

Comparando los valores decimales:

$$-2{,}75 < -1{,}414 < 2{,}236 < 2{,}333 < 3$$

Por lo tanto:

$$-\frac{11}{4} < -\sqrt{2} < \sqrt{5} < \frac{7}{3} < \sqrt{9}$$

**Paso 4: Ubicar en la recta real.**

$$\longleftarrow \cdots \underset{-2{,}75}{\bullet} \cdots \underset{-1{,}41}{\bullet} \cdots \underset{0}{|} \cdots \underset{2{,}24}{\bullet} \cdots \underset{2{,}33}{\bullet} \cdots \underset{3}{\bullet} \cdots \longrightarrow$$

$$\quad\; {-\tfrac{11}{4}} \qquad\quad {-\sqrt{2}} \qquad\qquad\qquad {\sqrt{5}} \quad {\tfrac{7}{3}} \quad {\sqrt{9}}$$

### Respuesta Final

$$-\frac{11}{4} < -\sqrt{2} < \sqrt{5} < \frac{7}{3} < \sqrt{9}$$

Los racionales son $\dfrac{7}{3}$, $-\dfrac{11}{4}$ y $\sqrt{9}=3$; los irracionales son $\sqrt{5}$ y $-\sqrt{2}$.

---

## Ejercicio 62 — Operaciones con fracciones y simplificación

**Dificultad:** ⭐ Básica

### Enunciado

Calculá y simplificá al máximo la siguiente expresión:

$$E = \frac{5}{6} - \frac{3}{8} + \frac{7}{12}$$

### Resolución paso a paso

**Paso 1: Encontrar el mínimo común múltiplo (MCM) de los denominadores.**

Los denominadores son $6$, $8$ y $12$.

$$6 = 2 \cdot 3, \quad 8 = 2^3, \quad 12 = 2^2 \cdot 3$$

$$\text{MCM}(6, 8, 12) = 2^3 \cdot 3 = 24$$

**Paso 2: Convertir cada fracción al denominador común $24$.**

$$\frac{5}{6} = \frac{5 \cdot 4}{24} = \frac{20}{24}$$

$$\frac{3}{8} = \frac{3 \cdot 3}{24} = \frac{9}{24}$$

$$\frac{7}{12} = \frac{7 \cdot 2}{24} = \frac{14}{24}$$

**Paso 3: Realizar las operaciones con el denominador común.**

$$E = \frac{20}{24} - \frac{9}{24} + \frac{14}{24} = \frac{20 - 9 + 14}{24} = \frac{25}{24}$$

**Paso 4: Verificar si la fracción es reducible.**

$$\text{MCD}(25, 24): \quad 25 = 5^2, \quad 24 = 2^3 \cdot 3$$

No comparten factores comunes, por lo que $\dfrac{25}{24}$ ya está en su mínima expresión.

### Respuesta Final

$$E = \frac{25}{24}$$

---

## Ejercicio 63 — Valor absoluto: ecuación con dos casos

**Dificultad:** ⭐ Básica

### Enunciado

Resolvé la siguiente ecuación con valor absoluto y verificá las soluciones obtenidas:

$$|2x - 5| = 7$$

### Resolución paso a paso

**Paso 1: Recordar la definición de valor absoluto.**

$|A| = k$ (con $k \geq 0$) equivale a plantear dos casos:

$$A = k \qquad \text{o} \qquad A = -k$$

En este problema $A = 2x - 5$ y $k = 7 > 0$, así que el planteo es válido.

**Paso 2: Resolver el primer caso.**

$$2x - 5 = 7$$
$$2x = 12$$
$$x = 6$$

**Paso 3: Resolver el segundo caso.**

$$2x - 5 = -7$$
$$2x = -2$$
$$x = -1$$

**Paso 4: Verificar $x = 6$.**

$$|2(6) - 5| = |12 - 5| = |7| = 7 \checkmark$$

**Paso 5: Verificar $x = -1$.**

$$|2(-1) - 5| = |-2 - 5| = |-7| = 7 \checkmark$$

### Respuesta Final

$$x = 6 \qquad \text{o} \qquad x = -1$$

El conjunto solución es $S = \{-1,\; 6\}$.

---

## Ejercicio 64 — Desigualdad con valor absoluto e intervalo solución

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Resolvé la inecuación y expresá la solución como intervalo y en la recta real:

$$|3x + 1| \leq 8$$

### Resolución paso a paso

**Paso 1: Aplicar la propiedad de la desigualdad con valor absoluto.**

$|A| \leq k$ (con $k > 0$) equivale a:

$$-k \leq A \leq k$$

Por lo tanto:

$$-8 \leq 3x + 1 \leq 8$$

**Paso 2: Restar $1$ en los tres miembros.**

$$-8 - 1 \leq 3x \leq 8 - 1$$
$$-9 \leq 3x \leq 7$$

**Paso 3: Dividir por $3$ (positivo, no cambia las desigualdades).**

$$\frac{-9}{3} \leq x \leq \frac{7}{3}$$
$$-3 \leq x \leq \frac{7}{3}$$

**Paso 4: Verificar los extremos.**

- Para $x = -3$: $|3(-3)+1| = |-9+1| = |-8| = 8 \leq 8$ ✓
- Para $x = \frac{7}{3}$: $|3 \cdot \frac{7}{3}+1| = |7+1| = 8 \leq 8$ ✓

**Paso 5: Expresar el conjunto solución.**

$$S = \left[-3,\; \frac{7}{3}\right]$$

$$\longleftarrow \cdots \underset{-3}{[} \cdots \underset{0}{|} \cdots \underset{7/3}{]} \cdots \longrightarrow$$

### Respuesta Final

$$S = \left[-3,\; \frac{7}{3}\right]$$

---

## Ejercicio 65 — Racionalización de denominadores

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Racionalizá el denominador y simplificá:

$$\frac{6}{\sqrt{5} - \sqrt{2}}$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia de racionalización.**

El denominador es $\sqrt{5} - \sqrt{2}$, una diferencia de radicales. Se multiplica numerador y denominador por el **conjugado** $\sqrt{5} + \sqrt{2}$:

$$\frac{6}{\sqrt{5} - \sqrt{2}} \cdot \frac{\sqrt{5} + \sqrt{2}}{\sqrt{5} + \sqrt{2}}$$

**Paso 2: Desarrollar el denominador usando diferencia de cuadrados.**

$$(\sqrt{5} - \sqrt{2})(\sqrt{5} + \sqrt{2}) = (\sqrt{5})^2 - (\sqrt{2})^2 = 5 - 2 = 3$$

**Paso 3: Desarrollar el numerador.**

$$6 \cdot (\sqrt{5} + \sqrt{2}) = 6\sqrt{5} + 6\sqrt{2}$$

**Paso 4: Escribir la fracción resultante.**

$$\frac{6\sqrt{5} + 6\sqrt{2}}{3}$$

**Paso 5: Simplificar dividiendo numerador y denominador por $3$.**

$$\frac{6\sqrt{5} + 6\sqrt{2}}{3} = \frac{6}{3}\sqrt{5} + \frac{6}{3}\sqrt{2} = 2\sqrt{5} + 2\sqrt{2}$$

### Respuesta Final

$$\frac{6}{\sqrt{5} - \sqrt{2}} = 2\sqrt{5} + 2\sqrt{2}$$

---

## Ejercicio 66 — Propiedades de potencias y simplificación

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Simplificá la siguiente expresión usando exclusivamente las propiedades de potencias, dejando el resultado sin denominador y con exponentes positivos:

$$\frac{x^{-3} \cdot y^{5} \cdot x^{2}}{y^{-1} \cdot x^{4} \cdot y^{3}}$$

### Resolución paso a paso

**Paso 1: Agrupar las potencias de la misma base en numerador y denominador.**

Numerador: $x^{-3} \cdot x^{2} \cdot y^{5}$

Denominador: $x^{4} \cdot y^{-1} \cdot y^{3}$

**Paso 2: Aplicar $a^m \cdot a^n = a^{m+n}$ en el numerador.**

$$x^{-3+2} \cdot y^{5} = x^{-1} \cdot y^{5}$$

**Paso 3: Aplicar $a^m \cdot a^n = a^{m+n}$ en el denominador.**

$$x^{4} \cdot y^{-1+3} = x^{4} \cdot y^{2}$$

**Paso 4: Armar la fracción simplificada y aplicar $\dfrac{a^m}{a^n} = a^{m-n}$.**

$$\frac{x^{-1} \cdot y^{5}}{x^{4} \cdot y^{2}} = x^{-1-4} \cdot y^{5-2} = x^{-5} \cdot y^{3}$$

**Paso 5: Eliminar el exponente negativo.**

$$x^{-5} \cdot y^{3} = \frac{y^{3}}{x^{5}}$$

### Respuesta Final

$$\frac{x^{-3} \cdot y^{5} \cdot x^{2}}{y^{-1} \cdot x^{4} \cdot y^{3}} = \frac{y^{3}}{x^{5}}$$

---

## Ejercicio 67 — Sistema de inecuaciones lineales con intersección de intervalos

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Resolvé el siguiente sistema de inecuaciones y expresá la solución como intersección de intervalos:

$$\begin{cases} 3x - 2 > 4 \\ 5 - 2x \geq -1 \end{cases}$$

### Resolución paso a paso

**Paso 1: Resolver la primera inecuación.**

$$3x - 2 > 4$$
$$3x > 6$$
$$x > 2$$

El conjunto solución de la primera es $S_1 = (2, +\infty)$.

**Paso 2: Resolver la segunda inecuación.**

$$5 - 2x \geq -1$$
$$-2x \geq -6$$

Al dividir por $-2$ **se invierte el signo de la desigualdad**:

$$x \leq 3$$

El conjunto solución de la segunda es $S_2 = (-\infty, 3]$.

**Paso 3: Calcular la intersección $S_1 \cap S_2$.**

$$S_1 \cap S_2 = (2, +\infty) \cap (-\infty, 3] = (2,\; 3]$$

**Paso 4: Representar en la recta real.**

$$\longleftarrow \cdots \underset{2}{(} \cdots \underset{3}{]} \cdots \longrightarrow$$

El $2$ está excluido (paréntesis) y el $3$ está incluido (corchete).

**Paso 5: Verificar con un valor interior, $x = 2{,}5$.**

- $3(2{,}5) - 2 = 5{,}5 > 4$ ✓
- $5 - 2(2{,}5) = 0 \geq -1$ ✓

### Respuesta Final

$$S = (2,\; 3]$$

---

## Ejercicio 68 — Factorización completa de una expresión algebraica

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Factorizá completamente la siguiente expresión, identificando cada técnica utilizada:

$$6x^3 -

## Ejercicio 71 — Clasificación y operaciones con números reales

**Dificultad:** ⭐ Básica

### Enunciado

Clasificá cada uno de los siguientes números indicando si es natural, entero, racional o irracional. Luego calculá:

$$A = \frac{3}{4} + 0{,}5 - \frac{1}{3}$$

### Resolución paso a paso

**Paso 1: Clasificar los números.**
- $\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}$
- $7 \in \mathbb{N}$; $-3 \in \mathbb{Z}$; $\dfrac{2}{5} \in \mathbb{Q}$; $\sqrt{2} \in \mathbb{I}$ (irracional).
- $0{,}5 = \dfrac{1}{2} \in \mathbb{Q}$.

**Paso 2: Convertir todo a fracciones con denominador común.**
$$A = \frac{3}{4} + \frac{1}{2} - \frac{1}{3}$$
El mínimo común múltiplo de $4$, $2$ y $3$ es $\text{mcm}(4,2,3) = 12$.

**Paso 3: Escribir cada fracción con denominador 12.**
$$A = \frac{9}{12} + \frac{6}{12} - \frac{4}{12}$$

**Paso 4: Operar numeradores.**
$$A = \frac{9 + 6 - 4}{12} = \frac{11}{12}$$

### Respuesta Final

$$A = \frac{11}{12} \approx 0{,}9\overline{16}$$

---

## Ejercicio 72 — Valor absoluto y desigualdades

**Dificultad:** ⭐ Básica

### Enunciado

Resolvé la inecuación con valor absoluto y expresá la solución en notación de intervalo:

$$|2x - 5| \leq 3$$

### Resolución paso a paso

**Paso 1: Aplicar la definición de valor absoluto.**
La propiedad fundamental establece que $|A| \leq k$ (con $k > 0$) equivale a $-k \leq A \leq k$.
Aquí $A = 2x - 5$ y $k = 3$:
$$-3 \leq 2x - 5 \leq 3$$

**Paso 2: Sumar 5 en los tres miembros.**
$$-3 + 5 \leq 2x - 5 + 5 \leq 3 + 5$$
$$2 \leq 2x \leq 8$$

**Paso 3: Dividir por 2 (positivo, no cambia desigualdad).**
$$\frac{2}{2} \leq \frac{2x}{2} \leq \frac{8}{2}$$
$$1 \leq x \leq 4$$

**Paso 4: Verificar un valor interior y uno exterior.**
- $x = 2$: $|2(2)-5| = |-1| = 1 \leq 3$ ✓
- $x = 0$: $|2(0)-5| = 5 \leq 3$ ✗ (queda fuera, correcto)

### Respuesta Final

$$x \in [1,\ 4]$$

---

## Ejercicio 73 — Propiedades de potencias y radicales

**Dificultad:** ⭐ Básica

### Enunciado

Simplificá la siguiente expresión usando propiedades de potencias y radicales, dejando el resultado sin denominadores con radicales:

$$B = \frac{\sqrt[3]{8} \cdot 2^{-1} + \sqrt{9}}{\sqrt{2}}$$

### Resolución paso a paso

**Paso 1: Simplificar cada término del numerador.**
- $\sqrt[3]{8} = 8^{1/3} = (2^3)^{1/3} = 2^1 = 2$
- $2^{-1} = \dfrac{1}{2}$
- $\sqrt{9} = 3$

Por lo tanto el numerador queda:
$$\sqrt[3]{8} \cdot 2^{-1} + \sqrt{9} = 2 \cdot \frac{1}{2} + 3 = 1 + 3 = 4$$

**Paso 2: Escribir la expresión simplificada.**
$$B = \frac{4}{\sqrt{2}}$$

**Paso 3: Racionalizar multiplicando por $\dfrac{\sqrt{2}}{\sqrt{2}}$.**
$$B = \frac{4}{\sqrt{2}} \cdot \frac{\sqrt{2}}{\sqrt{2}} = \frac{4\sqrt{2}}{2}$$

**Paso 4: Simplificar la fracción.**
$$B = \frac{4\sqrt{2}}{2} = 2\sqrt{2}$$

### Respuesta Final

$$B = 2\sqrt{2} \approx 2{,}828$$

---

## Ejercicio 74 — Factorización y simplificación de expresiones algebraicas

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Simplificá la siguiente expresión algebraica factorizando completamente numerador y denominador:

$$C = \frac{x^3 - 4x}{x^2 - x - 6}$$

### Resolución paso a paso

**Paso 1: Factorizar el numerador.**
$$x^3 - 4x = x(x^2 - 4)$$
Reconocemos diferencia de cuadrados: $x^2 - 4 = (x-2)(x+2)$.
$$x^3 - 4x = x(x-2)(x+2)$$

**Paso 2: Factorizar el denominador.**
Buscamos dos números que multiplicados den $-6$ y sumados den $-1$: son $-3$ y $2$.
$$x^2 - x - 6 = (x-3)(x+2)$$

**Paso 3: Reescribir la expresión y cancelar factores comunes.**
$$C = \frac{x(x-2)(x+2)}{(x-3)(x+2)}$$
El factor $(x+2)$ aparece en ambos (con $x \neq -2$):
$$C = \frac{x(x-2)}{x-3}$$

**Paso 4: Determinar restricciones del dominio.**
La expresión original exige que el denominador original sea distinto de cero:
$(x-3)(x+2) \neq 0 \Rightarrow x \neq 3$ y $x \neq -2$.

**Paso 5: Verificar con un valor, por ejemplo $x = 4$.**
- Original: $\dfrac{64-16}{16-4-6} = \dfrac{48}{6} = 8$
- Simplificada: $\dfrac{4(4-2)}{4-3} = \dfrac{8}{1} = 8$ ✓

### Respuesta Final

$$C = \frac{x(x-2)}{x-3}, \quad x \neq 3,\ x \neq -2$$

---

## Ejercicio 75 — Sistema de ecuaciones lineales 2×2

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Resolvé el siguiente sistema de ecuaciones por el método de eliminación (reducción):

$$\begin{cases} 3x - 2y = 7 \\ 5x + 4y = 3 \end{cases}$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia de eliminación.**
Multiplicamos la primera ecuación por $2$ para que el coeficiente de $y$ en ambas ecuaciones sea igual en valor absoluto y se cancele al sumar.

**Paso 2: Multiplicar la primera ecuación por 2.**
$$2 \cdot (3x - 2y) = 2 \cdot 7 \implies 6x - 4y = 14$$
El sistema equivalente resulta:
$$\begin{cases} 6x - 4y = 14 \\ 5x + 4y = 3 \end{cases}$$

**Paso 3: Sumar ambas ecuaciones para eliminar $y$.**
$$(6x + 5x) + (-4y + 4y) = 14 + 3$$
$$11x = 17 \implies x = \frac{17}{11}$$

**Paso 4: Sustituir $x = \dfrac{17}{11}$ en la primera ecuación original.**
$$3 \cdot \frac{17}{11} - 2y = 7$$
$$\frac{51}{11} - 2y = 7$$
$$-2y = 7 - \frac{51}{11} = \frac{77}{11} - \frac{51}{11} = \frac{26}{11}$$
$$y = -\frac{13}{11}$$

**Paso 5: Verificar en la segunda ecuación.**
$$5 \cdot \frac{17}{11} + 4 \cdot \left(-\frac{13}{11}\right) = \frac{85}{11} - \frac{52}{11} = \frac{33}{11} = 3 \ ✓$$

### Respuesta Final

$$x = \frac{17}{11}, \quad y = -\frac{13}{11}$$

---

## Ejercicio 76 — Ecuación cuadrática con discriminante

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Resolvé completamente la ecuación cuadrática, determinando el número y naturaleza de sus raíces:

$$2x^2 - 6x + 3 = 0$$

### Resolución paso a paso

**Paso 1: Identificar los coeficientes.**
Comparando con $ax^2 + bx + c = 0$:
$$a = 2, \quad b = -6, \quad c = 3$$

**Paso 2: Calcular el discriminante.**
$$\Delta = b^2 - 4ac = (-6)^2 - 4(2)(3) = 36 - 24 = 12$$
Como $\Delta = 12 > 0$, existen dos raíces reales y distintas.

**Paso 3: Aplicar la fórmula cuadrática.**
$$x = \frac{-b \pm \sqrt{\Delta}}{2a} = \frac{6 \pm \sqrt{12}}{4}$$

**Paso 4: Simplificar $\sqrt{12}$.**
$$\sqrt{12} = \sqrt{4 \cdot 3} = 2\sqrt{3}$$
$$x = \frac{6 \pm 2\sqrt{3}}{4} = \frac{3 \pm \sqrt{3}}{2}$$

**Paso 5: Escribir las dos soluciones.**
$$x_1 = \frac{3 + \sqrt{3}}{2} \approx \frac{3 + 1{,}732}{2} \approx 2{,}366$$
$$x_2 = \frac{3 - \sqrt{3}}{2} \approx \frac{3 - 1{,}732}{2} \approx 0{,}634$$

**Paso 6: Verificar por Vieta.**
- $x_1 + x_2 = 3 = -\dfrac{b}{a} = \dfrac{6}{2}$ ✓
- $x_1 \cdot x_2 = \dfrac{9-3}{4} = \dfrac{6}{4} = \dfrac{3}{2} = \dfrac{c}{a}$ ✓

### Respuesta Final

$$x_1 = \frac{3 + \sqrt{3}}{2}, \quad x_2 = \frac{3 - \sqrt{3}}{2}$$

---

## Ejercicio 77 — Inecuación cuadrática

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Resolvé la siguiente inecuación cuadrática y expresá la solución en notación de intervalo:

$$x^2 - x - 6 < 0$$

### Resolución paso a paso

**Paso 1: Encontrar las raíces del polinomio asociado.**
Resolvemos $x^2 - x - 6 = 0$ factorizando: buscamos dos números que multiplicados den $-6$ y sumados den $-1$. Son $-3$ y $2$:
$$x^2 - x - 6 = (x-3)(x+2) = 0$$
$$x_1 = -2, \quad x_2 = 3$$

**Paso 2: Analizar el signo de la parábola.**
El coeficiente principal es $a = 1 > 0$, por lo que la parábola abre hacia arriba. Esto significa que el trinomio es **negativo** entre sus raíces y **positivo** fuera de ellas.

**Paso 3: Construir la tabla de signos.**

| Intervalo | $(x+2)$ | $(x-3)$ | Producto |
|---|---|---|---|
| $x < -2$ | $-$ | $-$ | $+$ |
| $-2 < x < 3$ | $+$ | $-$ | $-$ |
| $x > 3$ | $+$ | $+$ | $+$ |

**Paso 4: Identificar dónde el producto es negativo ($ < 0$).**
El producto $(x+2)(x-3) < 0$ exactamente en $-2 < x < 3$.
Los extremos se excluyen porque la inecuación es estricta.

**Paso 5: Verificar con $x = 0$.**
$$0^2 - 0 - 6 = -6 < 0 \quad ✓$$

### Respuesta Final

$$x \in (-2,\ 3)$$

---

## Ejercicio 78 — Racionalización y operaciones con radicales

**Dificultad:** ⭐⭐⭐ Avanzada

### Enunciado

Racionalizá y simplificá completamente la siguiente expresión:

$$D = \frac{3}{\sqrt{5} - \sqrt{2}} - \frac{3}{\sqrt{5} + \sqrt{2}}$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Cada fracción tiene un binomio con radicales en el denominador. Racionalizamos multiplicando por el conjugado de cada denominador respectivo.

**Paso 2: Racionalizar la primera fracción.**
El conjugado de $(\sqrt{5} - \sqrt{2})$ es $(\sqrt{5} + \sqrt{2})$:
$$\frac{3}{\sqrt{5}-\sqrt{2}} \cdot \frac{\sqrt{5}+\sqrt{2}}{\sqrt{5}+\sqrt{2}} = \frac{3(\sqrt{5}+\sqrt{2})}{(\sqrt{5})^2 - (\sqrt{2})^2} = \frac{3(\sqrt{5}+\sqrt{2})}{5 - 2} = \frac{3(\sqrt{5}+\sqrt{2

## Ejercicio 81 — Clasificación y orden en los números reales

**Dificultad:** ⭐ Básica

### Enunciado

Clasificá cada uno de los siguientes números indicando si es natural, entero, racional o irracional. Luego ordenalos de menor a mayor en la recta real:

$$\sqrt{9}, \quad -\dfrac{7}{3}, \quad 0{,}\overline{6}, \quad -2, \quad \sqrt{5}, \quad 0$$

### Resolución paso a paso

**Paso 1: Clasificar cada número.**

- $\sqrt{9} = 3$ → Natural, entero, racional.
- $-\dfrac{7}{3} = -2{,}\overline{3}$ → Racional (fracción de enteros).
- $0{,}\overline{6} = \dfrac{2}{3}$ → Racional (decimal periódico).
- $-2$ → Entero, racional.
- $\sqrt{5} \approx 2{,}236...$ → Irracional (no tiene expresión decimal finita ni periódica).
- $0$ → Natural (según convención CBC), entero, racional.

**Paso 2: Convertir todos a decimales aproximados para comparar.**

$$-\dfrac{7}{3} \approx -2{,}333..., \quad -2 = -2{,}000, \quad 0 = 0{,}000$$
$$0{,}\overline{6} \approx 0{,}666..., \quad \sqrt{5} \approx 2{,}236, \quad \sqrt{9} = 3{,}000$$

**Paso 3: Ordenar de menor a mayor.**

$$-2{,}333... < -2{,}000 < 0 < 0{,}666... < 2{,}236... < 3$$

**Paso 4: Escribir el orden con la notación original.**

$$-\dfrac{7}{3} < -2 < 0 < 0{,}\overline{6} < \sqrt{5} < \sqrt{9}$$

### Respuesta Final

$$-\dfrac{7}{3} < -2 < 0 < 0{,}\overline{6} < \sqrt{5} < \sqrt{9}$$

Los irracionales del conjunto son únicamente $\sqrt{5}$. El resto son racionales.

---

## Ejercicio 82 — Operaciones con fracciones y simplificación

**Dificultad:** ⭐ Básica

### Enunciado

Calculá el siguiente valor numérico y expresá el resultado como fracción irreducible:

$$A = \dfrac{3}{4} - \dfrac{5}{6} + \dfrac{7}{12}$$

### Resolución paso a paso

**Paso 1: Determinar el mínimo común múltiplo (mcm) de los denominadores.**

Los denominadores son $4$, $6$ y $12$.

$$\text{mcm}(4, 6, 12) = 12$$

**Paso 2: Convertir cada fracción al denominador común $12$.**

$$\dfrac{3}{4} = \dfrac{3 \times 3}{4 \times 3} = \dfrac{9}{12}$$

$$\dfrac{5}{6} = \dfrac{5 \times 2}{6 \times 2} = \dfrac{10}{12}$$

$$\dfrac{7}{12} = \dfrac{7}{12}$$

**Paso 3: Realizar la operación con numeradores.**

$$A = \dfrac{9}{12} - \dfrac{10}{12} + \dfrac{7}{12} = \dfrac{9 - 10 + 7}{12} = \dfrac{6}{12}$$

**Paso 4: Simplificar la fracción obtenida.**

$$\dfrac{6}{12} = \dfrac{6 \div 6}{12 \div 6} = \dfrac{1}{2}$$

### Respuesta Final

$$A = \dfrac{1}{2}$$

---

## Ejercicio 83 — Propiedades de valor absoluto

**Dificultad:** ⭐ Básica

### Enunciado

Calculá el valor de la siguiente expresión sin usar calculadora:

$$B = |{-3 + 7}| - |5 - 11| + |{-2}| \cdot |-4|$$

### Resolución paso a paso

**Paso 1: Resolver las operaciones dentro de cada valor absoluto.**

- $-3 + 7 = 4$
- $5 - 11 = -6$
- $-2$ ya es un número.
- $-4$ ya es un número.

**Paso 2: Aplicar la definición de valor absoluto a cada término.**

$$|4| = 4, \quad |-6| = 6, \quad |-2| = 2, \quad |-4| = 4$$

Recordá: $|x| = x$ si $x \geq 0$ y $|x| = -x$ si $x < 0$.

**Paso 3: Sustituir los valores absolutos calculados.**

$$B = 4 - 6 + 2 \cdot 4$$

**Paso 4: Respetar el orden de operaciones (primero la multiplicación).**

$$B = 4 - 6 + 8$$

**Paso 5: Combinar términos de izquierda a derecha.**

$$B = (4 - 6) + 8 = -2 + 8 = 6$$

### Respuesta Final

$$B = 6$$

---

## Ejercicio 84 — Racionalización de denominadores

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Racionalizá el denominador de la siguiente expresión y simplificá el resultado:

$$C = \dfrac{6}{\sqrt{3} - 1}$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia de racionalización.**

El denominador es $\sqrt{3} - 1$, una diferencia que involucra un irracional. Se multiplica el numerador y denominador por el conjugado $\sqrt{3} + 1$.

**Paso 2: Multiplicar numerador y denominador por el conjugado.**

$$C = \dfrac{6}{\sqrt{3} - 1} \cdot \dfrac{\sqrt{3} + 1}{\sqrt{3} + 1}$$

**Paso 3: Expandir el denominador usando la diferencia de cuadrados.**

$$(\sqrt{3} - 1)(\sqrt{3} + 1) = (\sqrt{3})^2 - (1)^2 = 3 - 1 = 2$$

**Paso 4: Expandir el numerador.**

$$6 \cdot (\sqrt{3} + 1) = 6\sqrt{3} + 6$$

**Paso 5: Escribir la fracción resultante y simplificar.**

$$C = \dfrac{6\sqrt{3} + 6}{2} = \dfrac{6(\sqrt{3} + 1)}{2} = 3(\sqrt{3} + 1) = 3\sqrt{3} + 3$$

### Respuesta Final

$$C = 3\sqrt{3} + 3 = 3(\sqrt{3} + 1)$$

---

## Ejercicio 85 — Propiedades de potencias y radicales

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Simplificá la siguiente expresión, expresando el resultado con exponentes racionales y sin radicales:

$$D = \dfrac{\sqrt[3]{x^4} \cdot \sqrt{x^3}}{\sqrt[6]{x^5}}, \quad x > 0$$

### Resolución paso a paso

**Paso 1: Convertir cada radical a notación con exponente fraccionario.**

$$\sqrt[3]{x^4} = x^{4/3}, \quad \sqrt{x^3} = x^{3/2}, \quad \sqrt[6]{x^5} = x^{5/6}$$

**Paso 2: Reescribir la expresión completa con exponentes.**

$$D = \dfrac{x^{4/3} \cdot x^{3/2}}{x^{5/6}}$$

**Paso 3: Sumar los exponentes del numerador (misma base, producto).**

Se busca $\dfrac{4}{3} + \dfrac{3}{2}$. El mcm de $3$ y $2$ es $6$:

$$\dfrac{4}{3} + \dfrac{3}{2} = \dfrac{8}{6} + \dfrac{9}{6} = \dfrac{17}{6}$$

El numerador es $x^{17/6}$.

**Paso 4: Restar el exponente del denominador (misma base, cociente).**

$$D = \dfrac{x^{17/6}}{x^{5/6}} = x^{17/6 - 5/6} = x^{12/6} = x^2$$

### Respuesta Final

$$D = x^2$$

---

## Ejercicio 86 — Ecuación con valor absoluto

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Resolvé la siguiente ecuación en $\mathbb{R}$ y verificá las soluciones:

$$|2x - 5| = 3$$

### Resolución paso a paso

**Paso 1: Aplicar la definición de ecuación con valor absoluto.**

La ecuación $|A| = k$ con $k \geq 0$ equivale a $A = k$ o $A = -k$. Aquí $k = 3 > 0$, así que se plantean dos casos.

**Paso 2: Resolver el Caso 1 — expresión positiva.**

$$2x - 5 = 3$$
$$2x = 3 + 5 = 8$$
$$x = 4$$

**Paso 3: Resolver el Caso 2 — expresión negativa.**

$$2x - 5 = -3$$
$$2x = -3 + 5 = 2$$
$$x = 1$$

**Paso 4: Verificar $x = 4$ en la ecuación original.**

$$|2(4) - 5| = |8 - 5| = |3| = 3 \checkmark$$

**Paso 5: Verificar $x = 1$ en la ecuación original.**

$$|2(1) - 5| = |2 - 5| = |-3| = 3 \checkmark$$

### Respuesta Final

$$x = 1 \quad \text{o} \quad x = 4$$

El conjunto solución es $S = \{1,\ 4\}$.

---

## Ejercicio 87 — Inecuación con valor absoluto

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Resolvé la siguiente inecuación y expresá la solución en notación de intervalos y en la recta real:

$$|3x + 2| \leq 7$$

### Resolución paso a paso

**Paso 1: Aplicar la propiedad de inecuación con valor absoluto.**

La inecuación $|A| \leq k$ (con $k > 0$) equivale a $-k \leq A \leq k$. Entonces:

$$-7 \leq 3x + 2 \leq 7$$

**Paso 2: Restar $2$ en todos los miembros de la doble inecuación.**

$$-7 - 2 \leq 3x \leq 7 - 2$$
$$-9 \leq 3x \leq 5$$

**Paso 3: Dividir todos los miembros por $3$ (positivo, no cambia el sentido).**

$$\dfrac{-9}{3} \leq x \leq \dfrac{5}{3}$$
$$-3 \leq x \leq \dfrac{5}{3}$$

**Paso 4: Verificar un valor del intervalo, por ejemplo $x = 0$.**

$$|3(0) + 2| = |2| = 2 \leq 7 \checkmark$$

**Paso 5: Verificar un valor fuera del intervalo, por ejemplo $x = 2$.**

$$|3(2) + 2| = |8| = 8 \leq 7 \quad \text{FALSO} \checkmark \text{ (correctamente excluido)}$$

### Respuesta Final

$$x \in \left[-3,\ \dfrac{5}{3}\right]$$

---

## Ejercicio 88 — Racionalización con doble radical y simplificación

**Dificultad:** ⭐⭐⭐ Avanzada

### Enunciado

Simplificá y racionalizá completamente la siguiente expresión:

$$E = \dfrac{\sqrt{5} + \sqrt{3}}{\sqrt{5} - \sqrt{3}} - \dfrac{\sqrt{5} - \sqrt{3}}{\sqrt{5} + \sqrt{3}}$$

### Resolución paso a paso

**Paso 1: Identificar la estructura — diferencia de dos fracciones con denominadores conjugados.**

Se necesita un denominador común. Se observa que los denominadores son $(\sqrt{5}-\sqrt{3})$ y $(\sqrt{5}+\sqrt{3})$.

**Paso 2: Calcular el denominador común multiplicando ambos denominadores.**

$$(\sqrt{5} - \sqrt{3})(\sqrt{5} + \sqrt{3}) = (\sqrt{5})^2 - (\sqrt{3})^2 = 5 - 3 = 2$$

**Paso 3: Reescribir la resta con denominador común $2$.**

$$E = \dfrac{(\sqrt{5}+\sqrt{3})^2 - (\sqrt{5}-\sqrt{3})^2}{2}$$

**Paso 4: Expandir $(\sqrt{5}+\sqrt{3})^2$.**

$$(\sqrt{5}+\sqrt{3})^2 = 5 + 2\sqrt{15} + 3 = 8 + 2\sqrt{15}$$

**Paso 5: Expandir $(\sqrt{5}-\sqrt{3})^2$.**

$$(\sqrt{5}-\sqrt{3})^2 = 5 - 2\sqrt{15} + 3 = 8 - 2\sqrt{15}$$

**Paso 6: Calcular la diferencia de los numeradores.**

$$(8 + 2\sqrt{15}) - (8 - 2\sqrt{15}) = 8 + 2\sqrt{15} - 8 + 2\sqrt{15} = 4\sqrt{15}$$

**Paso 7: Dividir por el denominador común.**

$$E = \dfrac{4\sqrt{15}}{2} = 2\sqrt{15}$$

### Respuesta Final

$$E = 2\sqrt{15}$$

---

## Ejercicio 89 — Inecuación de segundo grado con análisis de signo

**Dificultad:** ⭐⭐⭐ Avanzada

### Enunciado

Resolvé la siguiente inecuación en $\mathbb{R}$ usando el método de análisis de signo por tabla:

$$x^2 - x - 6 < 0$$

### Resolución paso a paso

**Paso 1: Encontrar las raíces del polinomio $p(x) = x^2 - x - 6$.**

Usando la fórmula cuadrática con $a

## Ejercicio 91 — Clasificación y operaciones con números reales

**Dificultad:** ⭐ Básica

### Enunciado

Clasificá cada número en la categoría más específica posible (Natural, Entero, Racional, Irracional) y calculá la siguiente expresión:

$$E = \frac{3}{4} + 0{,}5 - \frac{1}{3}$$

### Resolución paso a paso

**Paso 1: Clasificar los números.**
- $3/4$: es Racional ($\mathbb{Q}$), ya que es cociente de enteros con denominador $\neq 0$.
- $0{,}5 = 1/2$: es Racional ($\mathbb{Q}$), decimal exacto.
- $1/3$: es Racional ($\mathbb{Q}$).

**Paso 2: Convertir todo a fracciones con denominador común.**
El mínimo común múltiplo de $4$, $2$ y $3$ es $\text{mcm}(4,2,3) = 12$.

$$E = \frac{3}{4} + \frac{1}{2} - \frac{1}{3} = \frac{9}{12} + \frac{6}{12} - \frac{4}{12}$$

**Paso 3: Operar los numeradores.**

$$E = \frac{9 + 6 - 4}{12} = \frac{11}{12}$$

**Paso 4: Verificar que el resultado es irreducible.**
$\text{mcd}(11, 12) = 1$ (11 es primo y no divide a 12), por lo tanto la fracción ya está en su mínima expresión.

### Respuesta Final

$$E = \frac{11}{12}$$

Todos los números del enunciado son **racionales** y el resultado $\dfrac{11}{12} \in \mathbb{Q}$.

---

## Ejercicio 92 — Propiedades del valor absoluto

**Dificultad:** ⭐ Básica

### Enunciado

Calculá y simplificá la siguiente expresión, justificando el uso del valor absoluto en cada caso:

$$A = |{-7}| - |3 - 8| + \left|\frac{-12}{4}\right|$$

### Resolución paso a paso

**Paso 1: Recordar la definición de valor absoluto.**
$|x| = x$ si $x \geq 0$, y $|x| = -x$ si $x < 0$. El resultado es siempre no negativo.

**Paso 2: Calcular $|{-7}|$.**
Como $-7 < 0$:

$$|{-7}| = -(-7) = 7$$

**Paso 3: Calcular $|3 - 8|$.**
Primero operamos dentro del valor absoluto: $3 - 8 = -5$. Como $-5 < 0$:

$$|3 - 8| = |{-5}| = -(-5) = 5$$

**Paso 4: Calcular $\left|\dfrac{-12}{4}\right|$.**
Simplificamos la fracción: $\dfrac{-12}{4} = -3$. Como $-3 < 0$:

$$\left|\frac{-12}{4}\right| = |{-3}| = 3$$

**Paso 5: Sustituir y calcular $A$.**

$$A = 7 - 5 + 3 = 5$$

### Respuesta Final

$$A = 5$$

---

## Ejercicio 93 — Racionalización de denominadores

**Dificultad:** ⭐ Básica

### Enunciado

Racionalizá el denominador de la siguiente expresión y simplificá el resultado:

$$B = \frac{6}{\sqrt{3}} + \frac{10}{\sqrt{5}}$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Para racionalizar una fracción de la forma $\dfrac{a}{\sqrt{n}}$, multiplicamos numerador y denominador por $\sqrt{n}$, ya que $\sqrt{n} \cdot \sqrt{n} = n$.

**Paso 2: Racionalizar $\dfrac{6}{\sqrt{3}}$.**

$$\frac{6}{\sqrt{3}} = \frac{6}{\sqrt{3}} \cdot \frac{\sqrt{3}}{\sqrt{3}} = \frac{6\sqrt{3}}{3} = 2\sqrt{3}$$

**Paso 3: Racionalizar $\dfrac{10}{\sqrt{5}}$.**

$$\frac{10}{\sqrt{5}} = \frac{10}{\sqrt{5}} \cdot \frac{\sqrt{5}}{\sqrt{5}} = \frac{10\sqrt{5}}{5} = 2\sqrt{5}$$

**Paso 4: Sumar los resultados.**
Como $\sqrt{3}$ y $\sqrt{5}$ son irracionales distintos, los términos no son semejantes y no pueden combinarse:

$$B = 2\sqrt{3} + 2\sqrt{5}$$

**Paso 5: Factorizar (forma compacta opcional).**

$$B = 2(\sqrt{3} + \sqrt{5})$$

### Respuesta Final

$$B = 2\sqrt{3} + 2\sqrt{5} = 2(\sqrt{3} + \sqrt{5})$$

---

## Ejercicio 94 — Inecuación lineal con solución en la recta real

**Dificultad:** ⭐ Básica

### Enunciado

Resolvé la siguiente inecuación en $\mathbb{R}$ y expresá la solución en notación de intervalo y en la recta numérica:

$$3x - 7 \leq 2x + 5$$

### Resolución paso a paso

**Paso 1: Identificar el tipo de inecuación.**
Es una inecuación lineal en $x$. La estrategia es despejar $x$ aplicando las mismas operaciones que en una ecuación, recordando que al multiplicar o dividir por un número **negativo** se invierte el signo de desigualdad. Aquí no será necesario.

**Paso 2: Pasar los términos con $x$ al miembro izquierdo.**

$$3x - 2x \leq 5 + 7$$

$$x \leq 12$$

**Paso 3: Interpretar la solución.**
El conjunto solución es todos los reales menores o iguales a $12$.

**Paso 4: Expresar en notación de intervalo.**

$$S = (-\infty,\ 12]$$

El corchete $]$ indica que $12$ **está incluido** (la desigualdad es $\leq$).

### Respuesta Final

$$x \leq 12 \quad \Longleftrightarrow \quad S = (-\infty,\ 12]$$

---

## Ejercicio 95 — Inecuación con valor absoluto

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Resolvé la siguiente inecuación en $\mathbb{R}$ y expresá la solución como unión o intersección de intervalos:

$$|2x - 3| < 7$$

### Resolución paso a paso

**Paso 1: Aplicar la propiedad fundamental.**
La propiedad establece que $|u| < k$ (con $k > 0$) equivale a:

$$-k < u < k$$

En nuestro caso $u = 2x - 3$ y $k = 7$:

$$-7 < 2x - 3 < 7$$

**Paso 2: Sumar $3$ en todos los miembros.**

$$-7 + 3 < 2x < 7 + 3$$

$$-4 < 2x < 10$$

**Paso 3: Dividir todos los miembros por $2$ (positivo, no cambia el signo).**

$$\frac{-4}{2} < x < \frac{10}{2}$$

$$-2 < x < 5$$

**Paso 4: Verificar con un valor interior, por ejemplo $x = 0$.**

$$|2(0) - 3| = |{-3}| = 3 < 7 \checkmark$$

**Paso 5: Expresar en notación de intervalo.**

$$S = (-2,\ 5)$$

### Respuesta Final

$$|2x - 3| < 7 \quad \Longleftrightarrow \quad x \in (-2,\ 5)$$

---

## Ejercicio 96 — Operaciones con potencias y radicales

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Simplificá completamente la siguiente expresión, dejando el resultado sin denominador y con exponentes positivos:

$$C = \frac{x^{5/2} \cdot x^{-1/2}}{x^{2/3}} \qquad (x > 0)$$

### Resolución paso a paso

**Paso 1: Aplicar la propiedad de producto de potencias de igual base.**
Cuando las bases son iguales: $x^a \cdot x^b = x^{a+b}$.

$$x^{5/2} \cdot x^{-1/2} = x^{5/2 + (-1/2)} = x^{4/2} = x^2$$

**Paso 2: Sustituir en la expresión original.**

$$C = \frac{x^2}{x^{2/3}}$$

**Paso 3: Aplicar la propiedad de cociente de potencias de igual base.**
$\dfrac{x^a}{x^b} = x^{a - b}$.

$$C = x^{2 - 2/3}$$

**Paso 4: Calcular el exponente resultante.**
Expresamos $2 = \dfrac{6}{3}$:

$$2 - \frac{2}{3} = \frac{6}{3} - \frac{2}{3} = \frac{4}{3}$$

**Paso 5: Escribir el resultado en notación radical (forma equivalente).**

$$C = x^{4/3} = \sqrt[3]{x^4}$$

### Respuesta Final

$$C = x^{4/3} = \sqrt[3]{x^4} \qquad (x > 0)$$

---

## Ejercicio 97 — Sistema de inecuaciones lineales

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Resolvé el siguiente sistema de inecuaciones en $\mathbb{R}$ y expresá la solución como intersección de intervalos:

$$\begin{cases} 2x + 1 > 5 \\ 3x - 4 \leq 11 \end{cases}$$

### Resolución paso a paso

**Paso 1: Resolver la primera inecuación.**

$$2x + 1 > 5$$

$$2x > 5 - 1$$

$$2x > 4 \implies x > 2$$

Solución parcial: $S_1 = (2, +\infty)$.

**Paso 2: Resolver la segunda inecuación.**

$$3x - 4 \leq 11$$

$$3x \leq 11 + 4$$

$$3x \leq 15 \implies x \leq 5$$

Solución parcial: $S_2 = (-\infty, 5]$.

**Paso 3: Calcular la intersección de ambas soluciones.**
La solución del sistema es $S_1 \cap S_2$, es decir, los valores de $x$ que satisfacen **ambas** condiciones simultáneamente:

$$S = (2, +\infty) \cap (-\infty, 5] = (2,\ 5]$$

**Paso 4: Verificar con un valor interior, $x = 3$.**
- Primera: $2(3)+1 = 7 > 5$ ✓
- Segunda: $3(3)-4 = 5 \leq 11$ ✓

**Paso 5: Verificar que los extremos funcionan correctamente.**
- $x = 2$: Primera condición: $2(2)+1=5 \not> 5$, queda excluido. ✓
- $x = 5$: Segunda condición: $3(5)-4=11 \leq 11$, queda incluido. ✓

### Respuesta Final

$$S = (2,\ 5]$$

---

## Ejercicio 98 — Inecuación cuadrática

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Resolvé la siguiente inecuación en $\mathbb{R}$:

$$x^2 - x - 6 < 0$$

### Resolución paso a paso

**Paso 1: Encontrar las raíces del polinomio asociado.**
Resolvemos la ecuación $x^2 - x - 6 = 0$ mediante la fórmula cuadrática:

$$x = \frac{-(-1) \pm \sqrt{(-1)^2 - 4(1)(-6)}}{2(1)} = \frac{1 \pm \sqrt{1 + 24}}{2} = \frac{1 \pm \sqrt{25}}{2} = \frac{1 \pm 5}{2}$$

**Paso 2: Calcular las dos raíces.**

$$x_1 = \frac{1 - 5}{2} = \frac{-4}{2} = -2 \qquad x_2 = \frac{1 + 5}{2} = \frac{6}{2} = 3$$

**Paso 3: Factorizar el polinomio.**

$$x^2 - x - 6 = (x - 3)(x + 2)$$

**Paso 4: Analizar el signo del producto en cada intervalo.**
Las raíces dividen a $\mathbb{R}$ en tres intervalos:

| Intervalo | Signo de $(x+2)$ | Signo de $(x-3)$ | Signo del producto |
|---|---|---|---|
| $x < -2$ | $-$ | $-$ | $+$ |
| $-2 < x < 3$ | $+$ | $-$ | $-$ |
| $x > 3$ | $+$ | $+$ | $+$ |

**Paso 5: Seleccionar el intervalo donde el producto es negativo ($ < 0$).**
El producto es negativo sólo en $(-2, 3)$. Como la desigualdad es estricta ($< 0$), los extremos quedan excluidos.

### Respuesta Final

$$x^2 - x - 6 < 0 \quad \Longleftrightarrow \quad x \in (-2,\ 3)$$

---

## Ejercicio 99 — Inecuación con valor absoluto (caso mayor que)

**Dificultad:** ⭐⭐⭐ Avanzada

### Enunciado

Resolvé la siguiente inecuación en $\mathbb{R}$ y expresá la solución como unión de intervalos:

$$\left|\frac{x-1}{2}\right| \geq 3$$

### Resolución paso a paso

**Paso 1: Aplicar la propiedad fundamental para $|u| \geq k$ con $k > 0$.**
La pro
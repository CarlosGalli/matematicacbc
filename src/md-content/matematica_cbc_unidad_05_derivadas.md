# Matemática CBC-UBA — Unidad 5: Derivadas
**Generado:** 09/05/2026 22:10:07
**Cantidad:** 100 ejercicios · **Dificultad:** mixta
**Archivo:** `matematica_cbc_unidad_05_derivadas.md` · **Timestamp:** 20260509_221007

---

## Ejercicio 1 — Derivada de una función polinómica
**Dificultad:** ⭐ Básica

### Enunciado
Calculá la derivada de $f(x) = 3x^4 - 5x^3 + 2x^2 - 7x + 1$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se aplica la regla de la potencia: si $f(x) = x^n$, entonces $f'(x) = n \cdot x^{n-1}$. También se usa la linealidad de la derivada: la derivada de una suma es la suma de las derivadas, y las constantes multiplicativas se conservan.

**Paso 2: Derivar término a término.**
$$f'(x) = \frac{d}{dx}(3x^4) - \frac{d}{dx}(5x^3) + \frac{d}{dx}(2x^2) - \frac{d}{dx}(7x) + \frac{d}{dx}(1)$$

**Paso 3: Aplicar la regla de la potencia a cada término.**
$$f'(x) = 3 \cdot 4x^3 - 5 \cdot 3x^2 + 2 \cdot 2x - 7 \cdot 1 + 0$$

**Paso 4: Simplificar los coeficientes.**
$$f'(x) = 12x^3 - 15x^2 + 4x - 7$$

### Respuesta Final
$$f'(x) = 12x^3 - 15x^2 + 4x - 7$$

---

## Ejercicio 2 — Derivada usando la regla del producto
**Dificultad:** ⭐ Básica

### Enunciado
Calculá la derivada de $f(x) = (2x^3 - 1)(x^2 + 5x)$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se aplica la regla del producto: si $f(x) = u(x) \cdot v(x)$, entonces $f'(x) = u'(x) \cdot v(x) + u(x) \cdot v'(x)$. Se identifican $u(x) = 2x^3 - 1$ y $v(x) = x^2 + 5x$.

**Paso 2: Calcular las derivadas de cada factor.**
$$u'(x) = 6x^2 \qquad v'(x) = 2x + 5$$

**Paso 3: Aplicar la fórmula del producto.**
$$f'(x) = 6x^2 \cdot (x^2 + 5x) + (2x^3 - 1) \cdot (2x + 5)$$

**Paso 4: Expandir cada producto.**
$$f'(x) = 6x^4 + 30x^3 + 4x^4 + 10x^3 - 2x - 5$$

**Paso 5: Agrupar términos semejantes.**
$$f'(x) = (6x^4 + 4x^4) + (30x^3 + 10x^3) - 2x - 5$$
$$f'(x) = 10x^4 + 40x^3 - 2x - 5$$

### Respuesta Final
$$f'(x) = 10x^4 + 40x^3 - 2x - 5$$

---

## Ejercicio 3 — Derivada usando la regla del cociente
**Dificultad:** ⭐⭐ Intermedia

### Enunciado
Calculá la derivada de $f(x) = \dfrac{x^2 + 3x}{2x - 1}$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se aplica la regla del cociente: si $f(x) = \dfrac{u(x)}{v(x)}$, entonces $f'(x) = \dfrac{u'(x) \cdot v(x) - u(x) \cdot v'(x)}{[v(x)]^2}$. Se identifican $u(x) = x^2 + 3x$ y $v(x) = 2x - 1$.

**Paso 2: Calcular las derivadas del numerador y denominador.**
$$u'(x) = 2x + 3 \qquad v'(x) = 2$$

**Paso 3: Aplicar la fórmula del cociente.**
$$f'(x) = \frac{(2x+3)(2x-1) - (x^2+3x)(2)}{(2x-1)^2}$$

**Paso 4: Expandir el numerador.**
$$(2x+3)(2x-1) = 4x^2 - 2x + 6x - 3 = 4x^2 + 4x - 3$$
$$(x^2+3x)(2) = 2x^2 + 6x$$

**Paso 5: Restar y simplificar el numerador.**
$$f'(x) = \frac{4x^2 + 4x - 3 - 2x^2 - 6x}{(2x-1)^2} = \frac{2x^2 - 2x - 3}{(2x-1)^2}$$

### Respuesta Final
$$f'(x) = \frac{2x^2 - 2x - 3}{(2x-1)^2}$$

---

## Ejercicio 4 — Derivada de función compuesta (regla de la cadena)
**Dificultad:** ⭐⭐ Intermedia

### Enunciado
Calculá la derivada de $f(x) = (3x^2 - 4x + 1)^5$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se aplica la regla de la cadena: si $f(x) = [g(x)]^n$, entonces $f'(x) = n \cdot [g(x)]^{n-1} \cdot g'(x)$. Se identifica $g(x) = 3x^2 - 4x + 1$ y $n = 5$.

**Paso 2: Calcular la derivada de la función interior $g(x)$.**
$$g'(x) = 6x - 4$$

**Paso 3: Aplicar la regla de la cadena.**
$$f'(x) = 5 \cdot (3x^2 - 4x + 1)^4 \cdot (6x - 4)$$

**Paso 4: Factorizar el coeficiente numérico.**
$$f'(x) = 5 \cdot 2(3x - 2) \cdot (3x^2 - 4x + 1)^4$$

**Paso 5: Escribir la forma final simplificada.**
$$f'(x) = 10(3x-2)(3x^2 - 4x + 1)^4$$

### Respuesta Final
$$f'(x) = 10(3x - 2)(3x^2 - 4x + 1)^4$$

---

## Ejercicio 5 — Derivada de función exponencial y logarítmica
**Dificultad:** ⭐⭐ Intermedia

### Enunciado
Calculá la derivada de $f(x) = e^{2x} \cdot \ln(x^2 + 1)$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
La función es un producto de dos funciones: $u(x) = e^{2x}$ y $v(x) = \ln(x^2+1)$. Se aplica la regla del producto combinada con la regla de la cadena para derivar cada factor.

**Paso 2: Derivar $u(x) = e^{2x}$ usando regla de la cadena.**
$$u'(x) = e^{2x} \cdot 2 = 2e^{2x}$$

**Paso 3: Derivar $v(x) = \ln(x^2+1)$ usando regla de la cadena.**
$$v'(x) = \frac{1}{x^2+1} \cdot 2x = \frac{2x}{x^2+1}$$

**Paso 4: Aplicar la regla del producto.**
$$f'(x) = u'(x) \cdot v(x) + u(x) \cdot v'(x)$$
$$f'(x) = 2e^{2x} \cdot \ln(x^2+1) + e^{2x} \cdot \frac{2x}{x^2+1}$$

**Paso 5: Factorizar el factor común $2e^{2x}$.**
$$f'(x) = 2e^{2x}\left(\ln(x^2+1) + \frac{x}{x^2+1}\right)$$

### Respuesta Final
$$f'(x) = 2e^{2x}\left(\ln(x^2+1) + \frac{x}{x^2+1}\right)$$

---

## Ejercicio 6 — Derivada de función trigonométrica compuesta
**Dificultad:** ⭐⭐ Intermedia

### Enunciado
Calculá la derivada de $f(x) = \sin^3(4x)$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
La función se reescribe como $f(x) = [\sin(4x)]^3$. Se aplica la regla de la cadena dos veces: primero con la potencia cúbica y luego con el seno.

**Paso 2: Aplicar la regla de la cadena para la potencia exterior.**
Sea $h(x) = \sin(4x)$, entonces $f(x) = [h(x)]^3$ y:
$$f'(x) = 3[\sin(4x)]^2 \cdot \frac{d}{dx}[\sin(4x)]$$

**Paso 3: Derivar $\sin(4x)$ usando la regla de la cadena.**
$$\frac{d}{dx}[\sin(4x)] = \cos(4x) \cdot 4 = 4\cos(4x)$$

**Paso 4: Combinar ambos resultados.**
$$f'(x) = 3\sin^2(4x) \cdot 4\cos(4x)$$

**Paso 5: Simplificar.**
$$f'(x) = 12\sin^2(4x)\cos(4x)$$

### Respuesta Final
$$f'(x) = 12\sin^2(4x)\cos(4x)$$

---

## Ejercicio 7 — Ecuación de la recta tangente
**Dificultad:** ⭐⭐ Intermedia

### Enunciado
Hallá la ecuación de la recta tangente a la curva $f(x) = x^3 - 2x^2 + 1$ en el punto $x_0 = 2$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
La recta tangente en $x_0$ tiene ecuación $y - f(x_0) = f'(x_0)(x - x_0)$. Se necesita calcular $f(x_0)$ y $f'(x_0)$.

**Paso 2: Calcular la ordenada del punto de tangencia $f(2)$.**
$$f(2) = (2)^3 - 2(2)^2 + 1 = 8 - 8 + 1 = 1$$
El punto de tangencia es $(2,\, 1)$.

**Paso 3: Calcular la derivada $f'(x)$.**
$$f'(x) = 3x^2 - 4x$$

**Paso 4: Evaluar la derivada en $x_0 = 2$ para obtener la pendiente.**
$$f'(2) = 3(2)^2 - 4(2) = 12 - 8 = 4$$

**Paso 5: Escribir la ecuación de la recta tangente.**
$$y - 1 = 4(x - 2)$$
$$y - 1 = 4x - 8$$
$$y = 4x - 7$$

### Respuesta Final
La recta tangente a $f(x)$ en $x_0 = 2$ es:
$$y = 4x - 7$$

---

## Ejercicio 8 — Derivada de función con raíz y potencia negativa
**Dificultad:** ⭐⭐⭐ Avanzada

### Enunciado
Calculá la derivada de $f(x) = \dfrac{\sqrt{x^3+1}}{x^2-3}$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se reescribe $\sqrt{x^3+1} = (x^3+1)^{1/2}$ y se aplica la regla del cociente con $u(x) = (x^3+1)^{1/2}$ y $v(x) = x^2-3$. Para derivar $u(x)$ se necesita la regla de la cadena.

**Paso 2: Calcular $u'(x)$ usando la regla de la cadena.**
$$u'(x) = \frac{1}{2}(x^3+1)^{-1/2} \cdot 3x^2 = \frac{3x^2}{2\sqrt{x^3+1}}$$

**Paso 3: Calcular $v'(x)$.**
$$v'(x) = 2x$$

**Paso 4: Aplicar la regla del cociente.**
$$f'(x) = \frac{u'(x)\cdot v(x) - u(x)\cdot v'(x)}{[v(x)]^2}$$
$$f'(x) = \frac{\dfrac{3x^2}{2\sqrt{x^3+1}} \cdot (x^2-3) - \sqrt{x^3+1} \cdot 2x}{(x^2-3)^2}$$

**Paso 5: Multiplicar numerador y denominador por $2\sqrt{x^3+1}$ para eliminar la fracción interna.**
$$f'(x) = \frac{3x^2(x^2-3) - 2x \cdot 2(x^3+1)}{2\sqrt{x^3+1}\,(x^2-3)^2}$$

**Paso 6: Expandir y simplificar el numerador.**
$$3x^2(x^2-3) = 3x^4 - 9x^2$$
$$4x(x^3+1) = 4x^4 + 4x$$
$$\text{Numerador} = 3x^4 - 9x^2 - 4x^4 - 4x = -x^4 - 9x^2 - 4x$$

**Paso 7: Factorizar el numerador.**
$$-x^4 - 9x^2 - 4x = -x(x^3 + 9x + 4)$$

### Respuesta Final
$$f'(x) = \frac{-x(x^3 + 9x + 4)}{2\sqrt

## Ejercicio 11 — Derivada de una función polinómica
**Dificultad:** ⭐ Básica

### Enunciado
Calculá la derivada de $f(x) = 4x^5 - 3x^3 + 7x^2 - 2x + 9$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se aplica la regla de la potencia: si $f(x) = x^n$, entonces $f'(x) = n \cdot x^{n-1}$. La derivada de una suma es la suma de las derivadas (linealidad del operador derivada). La derivada de una constante es $0$.

**Paso 2: Derivar término a término.**
$$f'(x) = \frac{d}{dx}(4x^5) - \frac{d}{dx}(3x^3) + \frac{d}{dx}(7x^2) - \frac{d}{dx}(2x) + \frac{d}{dx}(9)$$

**Paso 3: Aplicar la regla de la potencia en cada término.**
$$f'(x) = 4 \cdot 5x^{4} - 3 \cdot 3x^{2} + 7 \cdot 2x^{1} - 2 \cdot 1x^{0} + 0$$

**Paso 4: Simplificar cada término.**
$$f'(x) = 20x^4 - 9x^2 + 14x - 2$$

### Respuesta Final
$$f'(x) = 20x^4 - 9x^2 + 14x - 2$$

---

## Ejercicio 12 — Derivada de una función con raíces y potencias negativas
**Dificultad:** ⭐ Básica

### Enunciado
Calculá la derivada de $g(x) = 3\sqrt{x} - \dfrac{5}{x^2} + \sqrt[3]{x^4}$.

### Resolución paso a paso

**Paso 1: Reescribir la función con exponentes racionales.**
Antes de derivar, convertimos raíces y fracciones a la forma $x^n$:
$$g(x) = 3x^{1/2} - 5x^{-2} + x^{4/3}$$

**Paso 2: Identificar la estrategia.**
Se aplica la regla de la potencia $\dfrac{d}{dx}(x^n) = n\,x^{n-1}$ a cada término por separado.

**Paso 3: Derivar término a término.**
$$g'(x) = 3 \cdot \frac{1}{2}x^{1/2 - 1} - 5 \cdot (-2)x^{-2-1} + \frac{4}{3}x^{4/3 - 1}$$

**Paso 4: Simplificar los exponentes.**
$$g'(x) = \frac{3}{2}x^{-1/2} + 10x^{-3} + \frac{4}{3}x^{1/3}$$

**Paso 5: Reescribir en notación con raíces y fracciones (forma estándar).**
$$g'(x) = \frac{3}{2\sqrt{x}} + \frac{10}{x^3} + \frac{4}{3}\sqrt[3]{x}$$

### Respuesta Final
$$g'(x) = \frac{3}{2\sqrt{x}} + \frac{10}{x^3} + \frac{4\,\sqrt[3]{x}}{3}$$

---

## Ejercicio 13 — Derivada usando la regla del producto
**Dificultad:** ⭐⭐ Intermedia

### Enunciado
Calculá la derivada de $h(x) = (3x^2 - 5)(2x^3 + x - 4)$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
La función es un producto de dos factores. Se aplica la regla del producto:
$$(u \cdot v)' = u' \cdot v + u \cdot v'$$
donde $u = 3x^2 - 5$ y $v = 2x^3 + x - 4$.

**Paso 2: Calcular $u'$ y $v'$ por separado.**
$$u' = \frac{d}{dx}(3x^2 - 5) = 6x$$
$$v' = \frac{d}{dx}(2x^3 + x - 4) = 6x^2 + 1$$

**Paso 3: Aplicar la fórmula del producto.**
$$h'(x) = u' \cdot v + u \cdot v' = 6x(2x^3 + x - 4) + (3x^2 - 5)(6x^2 + 1)$$

**Paso 4: Expandir el primer producto.**
$$6x(2x^3 + x - 4) = 12x^4 + 6x^2 - 24x$$

**Paso 5: Expandir el segundo producto.**
$$(3x^2 - 5)(6x^2 + 1) = 18x^4 + 3x^2 - 30x^2 - 5 = 18x^4 - 27x^2 - 5$$

**Paso 6: Sumar y simplificar términos semejantes.**
$$h'(x) = 12x^4 + 6x^2 - 24x + 18x^4 - 27x^2 - 5$$
$$h'(x) = 30x^4 - 21x^2 - 24x - 5$$

### Respuesta Final
$$h'(x) = 30x^4 - 21x^2 - 24x - 5$$

---

## Ejercicio 14 — Derivada usando la regla del cociente
**Dificultad:** ⭐⭐ Intermedia

### Enunciado
Calculá la derivada de $f(x) = \dfrac{x^2 + 3x - 1}{2x - 5}$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
La función es un cociente. Se aplica la regla del cociente:
$$\left(\frac{u}{v}\right)' = \frac{u' \cdot v - u \cdot v'}{v^2}$$
donde $u = x^2 + 3x - 1$ y $v = 2x - 5$.

**Paso 2: Calcular $u'$ y $v'$.**
$$u' = 2x + 3 \qquad v' = 2$$

**Paso 3: Sustituir en la fórmula.**
$$f'(x) = \frac{(2x+3)(2x-5) - (x^2+3x-1)(2)}{(2x-5)^2}$$

**Paso 4: Expandir el numerador — primer producto.**
$$(2x+3)(2x-5) = 4x^2 - 10x + 6x - 15 = 4x^2 - 4x - 15$$

**Paso 5: Expandir el numerador — segundo producto.**
$$(x^2 + 3x - 1)(2) = 2x^2 + 6x - 2$$

**Paso 6: Restar y simplificar el numerador.**
$$f'(x) = \frac{4x^2 - 4x - 15 - 2x^2 - 6x + 2}{(2x-5)^2} = \frac{2x^2 - 10x - 13}{(2x-5)^2}$$

### Respuesta Final
$$f'(x) = \frac{2x^2 - 10x - 13}{(2x-5)^2}$$

---

## Ejercicio 15 — Derivada de funciones trigonométricas
**Dificultad:** ⭐ Básica

### Enunciado
Calculá la derivada de $p(x) = 5\sen(x) - 3\cos(x) + 2\tan(x)$.

### Resolución paso a paso

**Paso 1: Identificar las fórmulas de derivadas trigonométricas básicas.**
$$\frac{d}{dx}[\sen(x)] = \cos(x), \quad \frac{d}{dx}[\cos(x)] = -\sen(x), \quad \frac{d}{dx}[\tan(x)] = \sec^2(x)$$

**Paso 2: Aplicar linealidad del operador derivada.**
$$p'(x) = 5\frac{d}{dx}[\sen(x)] - 3\frac{d}{dx}[\cos(x)] + 2\frac{d}{dx}[\tan(x)]$$

**Paso 3: Sustituir cada derivada.**
$$p'(x) = 5\cos(x) - 3 \cdot (-\sen(x)) + 2\sec^2(x)$$

**Paso 4: Simplificar signos.**
$$p'(x) = 5\cos(x) + 3\sen(x) + 2\sec^2(x)$$

### Respuesta Final
$$p'(x) = 5\cos(x) + 3\sen(x) + 2\sec^2(x)$$

---

## Ejercicio 16 — Derivada de funciones compuestas (regla de la cadena)
**Dificultad:** ⭐⭐ Intermedia

### Enunciado
Calculá la derivada de $f(x) = \sen(3x^2 - 7x + 1)$.

### Resolución paso a paso

**Paso 1: Identificar la composición de funciones.**
La función es $f(x) = f_{\text{ext}}(f_{\text{int}}(x))$ donde:
- Función exterior: $F(u) = \sen(u)$
- Función interior: $u(x) = 3x^2 - 7x + 1$

**Paso 2: Recordar la regla de la cadena.**
$$\frac{d}{dx}[F(u(x))] = F'(u(x)) \cdot u'(x)$$

**Paso 3: Derivar la función exterior evaluada en $u$.**
$$F'(u) = \cos(u) \implies F'(u(x)) = \cos(3x^2 - 7x + 1)$$

**Paso 4: Derivar la función interior.**
$$u'(x) = \frac{d}{dx}(3x^2 - 7x + 1) = 6x - 7$$

**Paso 5: Multiplicar ambos resultados (regla de la cadena).**
$$f'(x) = \cos(3x^2 - 7x + 1) \cdot (6x - 7)$$

### Respuesta Final
$$f'(x) = (6x - 7)\cos(3x^2 - 7x + 1)$$

---

## Ejercicio 17 — Derivada de función exponencial y logarítmica compuesta
**Dificultad:** ⭐⭐ Intermedia

### Enunciado
Calculá la derivada de $g(x) = e^{x^3 - 2x} + \ln(5x^2 + 3)$.

### Resolución paso a paso

**Paso 1: Separar la expresión en dos términos y recordar las reglas clave.**
$$g'(x) = \frac{d}{dx}\left[e^{x^3-2x}\right] + \frac{d}{dx}\left[\ln(5x^2+3)\right]$$
Se usará en ambos casos la regla de la cadena: $\dfrac{d}{dx}[e^{u}] = e^{u} \cdot u'$ y $\dfrac{d}{dx}[\ln(u)] = \dfrac{u'}{u}$.

**Paso 2: Derivar el primer término — identificar $u$ e $u'$.**
$$u_1 = x^3 - 2x \implies u_1' = 3x^2 - 2$$
$$\frac{d}{dx}\left[e^{x^3-2x}\right] = e^{x^3-2x} \cdot (3x^2 - 2)$$

**Paso 3: Derivar el segundo término — identificar $u$ e $u'$.**
$$u_2 = 5x^2 + 3 \implies u_2' = 10x$$
$$\frac{d}{dx}\left[\ln(5x^2+3)\right] = \frac{10x}{5x^2+3}$$

**Paso 4: Reunir ambos resultados.**
$$g'(x) = (3x^2 - 2)\,e^{x^3-2x} + \frac{10x}{5x^2+3}$$

### Respuesta Final
$$g'(x) = (3x^2 - 2)\,e^{x^3 - 2x} + \frac{10x}{5x^2 + 3}$$

---

## Ejercicio 18 — Ecuación de la recta tangente a una curva
**Dificultad:** ⭐⭐ Intermedia

### Enunciado
Hallá la ecuación de la recta tangente a la curva $f(x) = x^3 - 4x^2 + 2$ en el punto donde $x_0 = 3$.

### Resolución paso a paso

**Paso 1: Calcular el punto de tangencia.**
Evaluamos $f$ en $x_0 = 3$:
$$f(3) = (3)^3 - 4(3)^2 + 2 = 27 - 36 + 2 = -7$$
El punto de tangencia es $(3,\,-7)$.

**Paso 2: Calcular la derivada de $f$.**
$$f'(x) = \frac{d}{dx}(x^3 - 4x^2 + 2) = 3x^2 - 8x$$

**Paso 3: Evaluar la derivada en $x_0 = 3$ para obtener la pendiente.**
$$m = f'(3) = 3(3)^2 - 8(3) = 27 - 24 = 3$$

**Paso 4: Recordar la forma punto-pendiente de la recta.**
La ecuación de la tangente es:
$$y - y_0 = m(x - x_0)$$

**Paso 5: Sustituir los valores hallados.**
$$y - (-7) = 3(x - 3)$$
$$y + 7 = 3x - 9$$
$$y = 3x - 16$$

### Respuesta Final
La ecuación de la recta tangente en $x_0 = 3$ es:
$$y = 3x - 16$$

---

## Ejercicio 19 — Derivada de orden superior y análisis de concavidad
**Dificultad:** ⭐⭐⭐ Avanzada

### Enunciado
Dada $f(x) = x^4 - 8x^3 + 18x^2 - 5$, calculá $f'(x)$ y $f''(x)$. Luego determiná los intervalos

## Ejercicio 21 — Derivada de una función polinómica
**Dificultad:** ⭐ Básica

### Enunciado
Calculá la derivada de $f(x) = 4x^5 - 3x^3 + 7x^2 - 2x + 9$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se aplica la regla de la potencia: $\frac{d}{dx}[x^n] = n\,x^{n-1}$, y la linealidad de la derivada: $\frac{d}{dx}[a\,g(x) + b\,h(x)] = a\,g'(x) + b\,h'(x)$. La derivada de una constante es cero.

**Paso 2: Derivar término a término.**
$$f'(x) = \frac{d}{dx}[4x^5] - \frac{d}{dx}[3x^3] + \frac{d}{dx}[7x^2] - \frac{d}{dx}[2x] + \frac{d}{dx}[9]$$

**Paso 3: Aplicar la regla de la potencia en cada término.**
$$f'(x) = 4 \cdot 5x^{4} - 3 \cdot 3x^{2} + 7 \cdot 2x^{1} - 2 \cdot 1x^{0} + 0$$

**Paso 4: Simplificar.**
$$f'(x) = 20x^4 - 9x^2 + 14x - 2$$

### Respuesta Final
$$f'(x) = 20x^4 - 9x^2 + 14x - 2$$

---

## Ejercicio 22 — Derivada de una función con raíces y potencias negativas
**Dificultad:** ⭐ Básica

### Enunciado
Calculá la derivada de $g(x) = 3\sqrt{x} - \dfrac{5}{x^2} + \sqrt[3]{x}$.

### Resolución paso a paso

**Paso 1: Reescribir todo con notación de potencias racionales.**
Se convierte cada término para poder aplicar la regla de la potencia:
$$g(x) = 3x^{1/2} - 5x^{-2} + x^{1/3}$$

**Paso 2: Derivar término a término usando $\frac{d}{dx}[x^n] = nx^{n-1}$.**
$$g'(x) = 3 \cdot \frac{1}{2}x^{1/2 - 1} - 5 \cdot (-2)x^{-2-1} + \frac{1}{3}x^{1/3 - 1}$$

**Paso 3: Calcular los nuevos exponentes.**
$$g'(x) = \frac{3}{2}x^{-1/2} + 10x^{-3} + \frac{1}{3}x^{-2/3}$$

**Paso 4: Reescribir con notación de raíces y fracciones para presentar el resultado limpiamente.**
$$g'(x) = \frac{3}{2\sqrt{x}} + \frac{10}{x^3} + \frac{1}{3\sqrt[3]{x^2}}$$

### Respuesta Final
$$g'(x) = \frac{3}{2\sqrt{x}} + \frac{10}{x^3} + \frac{1}{3\sqrt[3]{x^2}}$$

---

## Ejercicio 23 — Derivada de un producto de funciones
**Dificultad:** ⭐ Básica

### Enunciado
Calculá la derivada de $h(x) = (3x^2 - 1)(2x^3 + 5x)$ usando la regla del producto.

### Resolución paso a paso

**Paso 1: Identificar la regla del producto.**
Si $h(x) = u(x) \cdot v(x)$, entonces $h'(x) = u'(x)\,v(x) + u(x)\,v'(x)$.
Aquí: $u(x) = 3x^2 - 1$ y $v(x) = 2x^3 + 5x$.

**Paso 2: Calcular $u'(x)$ y $v'(x)$.**
$$u'(x) = 6x \qquad v'(x) = 6x^2 + 5$$

**Paso 3: Aplicar la fórmula del producto.**
$$h'(x) = 6x(2x^3 + 5x) + (3x^2 - 1)(6x^2 + 5)$$

**Paso 4: Expandir cada producto.**
$$h'(x) = 12x^4 + 30x^2 + 18x^4 + 15x^2 - 6x^2 - 5$$

**Paso 5: Agrupar términos semejantes.**
$$h'(x) = (12x^4 + 18x^4) + (30x^2 + 15x^2 - 6x^2) - 5 = 30x^4 + 39x^2 - 5$$

### Respuesta Final
$$h'(x) = 30x^4 + 39x^2 - 5$$

---

## Ejercicio 24 — Derivada de un cociente de funciones
**Dificultad:** ⭐⭐ Intermedia

### Enunciado
Calculá la derivada de $f(x) = \dfrac{x^2 + 3x - 1}{2x - 5}$.

### Resolución paso a paso

**Paso 1: Identificar la regla del cociente.**
Si $f(x) = \dfrac{u(x)}{v(x)}$, entonces $f'(x) = \dfrac{u'(x)\,v(x) - u(x)\,v'(x)}{[v(x)]^2}$.
Aquí: $u(x) = x^2 + 3x - 1$ y $v(x) = 2x - 5$.

**Paso 2: Calcular $u'(x)$ y $v'(x)$.**
$$u'(x) = 2x + 3 \qquad v'(x) = 2$$

**Paso 3: Aplicar la fórmula del cociente.**
$$f'(x) = \frac{(2x+3)(2x-5) - (x^2+3x-1)(2)}{(2x-5)^2}$$

**Paso 4: Expandir el numerador.**
$$(2x+3)(2x-5) = 4x^2 - 10x + 6x - 15 = 4x^2 - 4x - 15$$
$$(x^2+3x-1)(2) = 2x^2 + 6x - 2$$

**Paso 5: Restar los resultados en el numerador.**
$$f'(x) = \frac{4x^2 - 4x - 15 - 2x^2 - 6x + 2}{(2x-5)^2} = \frac{2x^2 - 10x - 13}{(2x-5)^2}$$

### Respuesta Final
$$f'(x) = \frac{2x^2 - 10x - 13}{(2x-5)^2}$$

---

## Ejercicio 25 — Derivada de funciones compuestas (Regla de la cadena)
**Dificultad:** ⭐⭐ Intermedia

### Enunciado
Calculá la derivada de $f(x) = (3x^2 - 2x + 1)^6$.

### Resolución paso a paso

**Paso 1: Identificar la regla de la cadena.**
Si $f(x) = [u(x)]^n$, entonces $f'(x) = n\,[u(x)]^{n-1} \cdot u'(x)$.
Aquí: $u(x) = 3x^2 - 2x + 1$ y $n = 6$.

**Paso 2: Calcular la derivada de la función interior.**
$$u'(x) = 6x - 2$$

**Paso 3: Aplicar la regla de la cadena.**
$$f'(x) = 6\,(3x^2 - 2x + 1)^{5} \cdot (6x - 2)$$

**Paso 4: Factorizar el factor $(6x - 2)$.**
$$6x - 2 = 2(3x - 1)$$

**Paso 5: Reescribir de forma factorizada.**
$$f'(x) = 6 \cdot 2(3x-1)\,(3x^2 - 2x + 1)^5 = 12(3x-1)(3x^2 - 2x + 1)^5$$

### Respuesta Final
$$f'(x) = 12(3x-1)(3x^2 - 2x + 1)^5$$

---

## Ejercicio 26 — Derivada de funciones exponenciales y logarítmicas
**Dificultad:** ⭐⭐ Intermedia

### Enunciado
Calculá la derivada de $f(x) = e^{3x^2 - 1} + \ln(5x^3 + 2)$.

### Resolución paso a paso

**Paso 1: Separar los términos y recordar las fórmulas base.**
Se aplica:
- $\frac{d}{dx}[e^{u(x)}] = e^{u(x)} \cdot u'(x)$
- $\frac{d}{dx}[\ln(u(x))] = \dfrac{u'(x)}{u(x)}$

**Paso 2: Derivar el primer término $e^{3x^2-1}$.**
La función interior es $u(x) = 3x^2 - 1$, su derivada es $u'(x) = 6x$.
$$\frac{d}{dx}\left[e^{3x^2-1}\right] = 6x\,e^{3x^2-1}$$

**Paso 3: Derivar el segundo término $\ln(5x^3+2)$.**
La función interior es $v(x) = 5x^3 + 2$, su derivada es $v'(x) = 15x^2$.
$$\frac{d}{dx}\left[\ln(5x^3+2)\right] = \frac{15x^2}{5x^3+2}$$

**Paso 4: Combinar ambos resultados.**
$$f'(x) = 6x\,e^{3x^2-1} + \frac{15x^2}{5x^3+2}$$

### Respuesta Final
$$f'(x) = 6x\,e^{3x^2-1} + \frac{15x^2}{5x^3+2}$$

---

## Ejercicio 27 — Derivada de funciones trigonométricas con regla de la cadena
**Dificultad:** ⭐⭐ Intermedia

### Enunciado
Calculá la derivada de $g(x) = \cos^3(4x) - \sin(x^2 + 1)$.

### Resolución paso a paso

**Paso 1: Reescribir $\cos^3(4x)$ y planificar la doble aplicación de la cadena.**
$$g(x) = [\cos(4x)]^3 - \sin(x^2+1)$$
Para el primer término se aplica la cadena dos veces: la potencia cúbica y el argumento $4x$.

**Paso 2: Derivar $[\cos(4x)]^3$.**
- Capa exterior (potencia): $3[\cos(4x)]^2 \cdot \frac{d}{dx}[\cos(4x)]$
- Capa interior: $\frac{d}{dx}[\cos(4x)] = -\sin(4x) \cdot 4 = -4\sin(4x)$

Combinando:
$$\frac{d}{dx}[\cos^3(4x)] = 3\cos^2(4x) \cdot (-4\sin(4x)) = -12\cos^2(4x)\sin(4x)$$

**Paso 3: Derivar $\sin(x^2+1)$ con la regla de la cadena.**
La función interior es $u(x) = x^2 + 1$, con $u'(x) = 2x$.
$$\frac{d}{dx}[\sin(x^2+1)] = \cos(x^2+1) \cdot 2x = 2x\cos(x^2+1)$$

**Paso 4: Combinar con el signo correcto.**
$$g'(x) = -12\cos^2(4x)\sin(4x) - 2x\cos(x^2+1)$$

### Respuesta Final
$$g'(x) = -12\cos^2(4x)\sin(4x) - 2x\cos(x^2+1)$$

---

## Ejercicio 28 — Ecuación de la recta tangente en un punto
**Dificultad:** ⭐⭐ Intermedia

### Enunciado
Hallá la ecuación de la recta tangente a la curva $f(x) = x^3 - 4x + 2$ en el punto donde $x_0 = 2$.

### Resolución paso a paso

**Paso 1: Recordar que la recta tangente en $x_0$ tiene la forma $y - y_0 = f'(x_0)(x - x_0)$.**
Se necesita calcular $y_0 = f(x_0)$ y la pendiente $m = f'(x_0)$.

**Paso 2: Calcular el punto de tangencia $y_0 = f(2)$.**
$$f(2) = (2)^3 - 4(2) + 2 = 8 - 8 + 2 = 2$$
El punto es $(2,\,2)$.

**Paso 3: Calcular la derivada $f'(x)$.**
$$f'(x) = 3x^2 - 4$$

**Paso 4: Evaluar la pendiente en $x_0 = 2$.**
$$m = f'(2) = 3(2)^2 - 4 = 12 - 4 = 8$$

**Paso 5: Escribir la ecuación de la recta tangente.**
$$y - 2 = 8(x - 2)$$
$$y = 8x - 16 + 2$$
$$y = 8x - 14$$

### Respuesta Final
La ecuación de la recta tangente en $x_0 = 2$ es:
$$y = 8x - 14$$

---

## Ejercicio 29 — Análisis de crecimiento y puntos críticos
**Dificultad:** ⭐⭐⭐ Avanzada

### Enunciado
Dada $f(x) = x^4 - 8x^2 + 3$, hallá los puntos críticos, determiná si son máximos o mínimos locales usando la segunda derivada, e indicá los intervalos de crecimiento y decrecimiento

## Ejercicio 31 — Derivada de una función polinómica
**Dificultad:** ⭐ Básica

### Enunciado
Calculá la derivada de $f(x) = 5x^4 - 3x^3 + 7x^2 - 2x + 9$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Aplicamos la regla de la potencia: si $f(x) = x^n$, entonces $f'(x) = n \cdot x^{n-1}$. La derivada de una constante es cero, y la derivada de una suma es la suma de las derivadas.

**Paso 2: Derivar término a término.**
$$f'(x) = \frac{d}{dx}(5x^4) - \frac{d}{dx}(3x^3) + \frac{d}{dx}(7x^2) - \frac{d}{dx}(2x) + \frac{d}{dx}(9)$$

**Paso 3: Aplicar la regla de la potencia en cada término.**
$$f'(x) = 5 \cdot 4x^{3} - 3 \cdot 3x^{2} + 7 \cdot 2x^{1} - 2 \cdot 1x^{0} + 0$$

**Paso 4: Simplificar cada término.**
$$f'(x) = 20x^3 - 9x^2 + 14x - 2$$

### Respuesta Final
$$f'(x) = 20x^3 - 9x^2 + 14x - 2$$

---

## Ejercicio 32 — Derivada usando la regla del producto
**Dificultad:** ⭐ Básica

### Enunciado
Dada $g(x) = (3x^2 - 1)(2x + 5)$, calculá $g'(x)$ aplicando la regla del producto.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
La regla del producto establece que si $g(x) = u(x) \cdot v(x)$, entonces $g'(x) = u'(x) \cdot v(x) + u(x) \cdot v'(x)$. Identificamos $u(x) = 3x^2 - 1$ y $v(x) = 2x + 5$.

**Paso 2: Calcular las derivadas de cada factor.**
$$u'(x) = 6x \qquad v'(x) = 2$$

**Paso 3: Aplicar la fórmula del producto.**
$$g'(x) = 6x \cdot (2x + 5) + (3x^2 - 1) \cdot 2$$

**Paso 4: Desarrollar cada producto.**
$$g'(x) = 12x^2 + 30x + 6x^2 - 2$$

**Paso 5: Agrupar términos semejantes.**
$$g'(x) = 18x^2 + 30x - 2$$

### Respuesta Final
$$g'(x) = 18x^2 + 30x - 2$$

---

## Ejercicio 33 — Derivada usando la regla del cociente
**Dificultad:** ⭐⭐ Intermedia

### Enunciado
Calculá la derivada de $h(x) = \dfrac{x^2 + 3x - 1}{2x - 5}$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Aplicamos la regla del cociente: si $h(x) = \dfrac{u(x)}{v(x)}$, entonces $h'(x) = \dfrac{u'(x) \cdot v(x) - u(x) \cdot v'(x)}{[v(x)]^2}$. Identificamos $u(x) = x^2 + 3x - 1$ y $v(x) = 2x - 5$.

**Paso 2: Calcular las derivadas del numerador y denominador.**
$$u'(x) = 2x + 3 \qquad v'(x) = 2$$

**Paso 3: Sustituir en la fórmula del cociente.**
$$h'(x) = \frac{(2x+3)(2x-5) - (x^2+3x-1) \cdot 2}{(2x-5)^2}$$

**Paso 4: Expandir el numerador.**
$$(2x+3)(2x-5) = 4x^2 - 10x + 6x - 15 = 4x^2 - 4x - 15$$
$$(x^2+3x-1) \cdot 2 = 2x^2 + 6x - 2$$

**Paso 5: Restar en el numerador.**
$$\text{Numerador} = 4x^2 - 4x - 15 - 2x^2 - 6x + 2 = 2x^2 - 10x - 13$$

**Paso 6: Escribir el resultado final.**
$$h'(x) = \frac{2x^2 - 10x - 13}{(2x-5)^2}$$

### Respuesta Final
$$h'(x) = \frac{2x^2 - 10x - 13}{(2x-5)^2}$$

---

## Ejercicio 34 — Derivada de funciones trigonométricas
**Dificultad:** ⭐ Básica

### Enunciado
Calculá la derivada de $f(x) = 4\sen(x) - 3\cos(x) + 2\tan(x)$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Usamos las fórmulas de derivación trigonométrica elementales:
$$\frac{d}{dx}[\sen(x)] = \cos(x), \quad \frac{d}{dx}[\cos(x)] = -\sen(x), \quad \frac{d}{dx}[\tan(x)] = \sec^2(x)$$

**Paso 2: Derivar término a término.**
$$f'(x) = 4 \cdot \frac{d}{dx}[\sen(x)] - 3 \cdot \frac{d}{dx}[\cos(x)] + 2 \cdot \frac{d}{dx}[\tan(x)]$$

**Paso 3: Aplicar cada fórmula.**
$$f'(x) = 4\cos(x) - 3 \cdot (-\sen(x)) + 2\sec^2(x)$$

**Paso 4: Simplificar signos.**
$$f'(x) = 4\cos(x) + 3\sen(x) + 2\sec^2(x)$$

### Respuesta Final
$$f'(x) = 4\cos(x) + 3\sen(x) + 2\sec^2(x)$$

---

## Ejercicio 35 — Derivada con regla de la cadena
**Dificultad:** ⭐⭐ Intermedia

### Enunciado
Calculá la derivada de $f(x) = (3x^2 - 5x + 2)^6$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Reconocemos una función compuesta $f(x) = [g(x)]^6$ donde $g(x) = 3x^2 - 5x + 2$. Aplicamos la regla de la cadena: $f'(x) = 6[g(x)]^5 \cdot g'(x)$.

**Paso 2: Calcular la derivada de la función interior.**
$$g(x) = 3x^2 - 5x + 2 \implies g'(x) = 6x - 5$$

**Paso 3: Aplicar la regla de la cadena.**
$$f'(x) = 6(3x^2 - 5x + 2)^5 \cdot (6x - 5)$$

**Paso 4: Escribir el resultado ordenado.**
$$f'(x) = 6(6x-5)(3x^2 - 5x + 2)^5$$

### Respuesta Final
$$f'(x) = 6(6x-5)(3x^2 - 5x + 2)^5$$

---

## Ejercicio 36 — Derivada de función exponencial y logarítmica
**Dificultad:** ⭐⭐ Intermedia

### Enunciado
Calculá la derivada de $f(x) = e^{3x^2 - 1} + \ln(5x^3 + 2)$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Aplicamos dos fórmulas con regla de la cadena:
$$\frac{d}{dx}[e^{u(x)}] = e^{u(x)} \cdot u'(x) \qquad \frac{d}{dx}[\ln(u(x))] = \frac{u'(x)}{u(x)}$$

**Paso 2: Derivar el primer término. Identificamos $u(x) = 3x^2 - 1$, con $u'(x) = 6x$.**
$$\frac{d}{dx}\left[e^{3x^2-1}\right] = e^{3x^2-1} \cdot 6x = 6x \, e^{3x^2-1}$$

**Paso 3: Derivar el segundo término. Identificamos $u(x) = 5x^3 + 2$, con $u'(x) = 15x^2$.**
$$\frac{d}{dx}\left[\ln(5x^3+2)\right] = \frac{15x^2}{5x^3+2}$$

**Paso 4: Sumar ambas derivadas.**
$$f'(x) = 6x\,e^{3x^2-1} + \frac{15x^2}{5x^3+2}$$

### Respuesta Final
$$f'(x) = 6x\,e^{3x^2-1} + \frac{15x^2}{5x^3+2}$$

---

## Ejercicio 37 — Ecuación de la recta tangente
**Dificultad:** ⭐⭐ Intermedia

### Enunciado
Hallá la ecuación de la recta tangente a la curva $f(x) = x^3 - 4x + 1$ en el punto $x_0 = 2$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
La recta tangente en $x_0$ tiene ecuación $y - f(x_0) = f'(x_0)(x - x_0)$. Necesitamos calcular el punto de tangencia y la pendiente $f'(x_0)$.

**Paso 2: Calcular el punto de tangencia $f(2)$.**
$$f(2) = (2)^3 - 4(2) + 1 = 8 - 8 + 1 = 1$$
El punto es $(2, 1)$.

**Paso 3: Calcular la derivada de $f(x)$.**
$$f'(x) = 3x^2 - 4$$

**Paso 4: Evaluar la derivada en $x_0 = 2$ para obtener la pendiente.**
$$f'(2) = 3(2)^2 - 4 = 12 - 4 = 8$$

**Paso 5: Escribir la ecuación de la recta tangente.**
$$y - 1 = 8(x - 2)$$
$$y = 8x - 16 + 1$$
$$y = 8x - 15$$

### Respuesta Final
La ecuación de la recta tangente en $x_0 = 2$ es:
$$y = 8x - 15$$

---

## Ejercicio 38 — Derivada implícita
**Dificultad:** ⭐⭐⭐ Avanzada

### Enunciado
Dada la curva implícita $x^3 + y^3 - 3xy = 7$, calculá $\dfrac{dy}{dx}$ mediante derivación implícita.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Derivamos ambos miembros de la ecuación respecto de $x$, recordando que $y$ es función implícita de $x$. Cada vez que derivemos $y$, multiplicamos por $\dfrac{dy}{dx}$ (regla de la cadena).

**Paso 2: Derivar el primer miembro término a término.**
$$\frac{d}{dx}(x^3) + \frac{d}{dx}(y^3) - \frac{d}{dx}(3xy) = \frac{d}{dx}(7)$$

**Paso 3: Aplicar reglas correspondientes a cada término.**
- $\dfrac{d}{dx}(x^3) = 3x^2$
- $\dfrac{d}{dx}(y^3) = 3y^2 \cdot \dfrac{dy}{dx}$ (regla de la cadena)
- $\dfrac{d}{dx}(3xy) = 3\left(y + x\dfrac{dy}{dx}\right)$ (regla del producto)
- $\dfrac{d}{dx}(7) = 0$

Entonces:
$$3x^2 + 3y^2\frac{dy}{dx} - 3y - 3x\frac{dy}{dx} = 0$$

**Paso 4: Agrupar los términos con $\dfrac{dy}{dx}$.**
$$3y^2\frac{dy}{dx} - 3x\frac{dy}{dx} = 3y - 3x^2$$

**Paso 5: Factorizar $\dfrac{dy}{dx}$.**
$$\frac{dy}{dx}(3y^2 - 3x) = 3y - 3x^2$$

**Paso 6: Despejar $\dfrac{dy}{dx}$.**
$$\frac{dy}{dx} = \frac{3y - 3x^2}{3y^2 - 3x} = \frac{3(y - x^2)}{3(y^2 - x)} = \frac{y - x^2}{y^2 - x}$$

### Respuesta Final
$$\frac{dy}{dx} = \frac{y - x^2}{y^2 - x}$$

---

## Ejercicio 39 — Análisis de máximos y mínimos locales
**Dificultad:** ⭐⭐⭐ Avanzada

### Enunciado
Para la función $f(x) = 2x^3 - 9x^2 + 12x - 4$, determiná los intervalos de crecimiento y decrecimiento, y clasificá los extremos locales.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Los extremos locales ocurren donde $f'(x) = 0$ (puntos críticos). Luego analizamos el signo de $f'(x)$: si cambia de $+$ a $-$, hay máximo local; si cambia de $-$ a $+$, hay mínimo local.

**Paso 2:

## Ejercicio 41 — Derivada de una función polinómica
**Dificultad:** ⭐ Básica

### Enunciado
Calculá la derivada de $f(x) = 5x^4 - 3x^3 + 7x^2 - 2x + 9$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se aplica la regla de la potencia: si $f(x) = x^n$, entonces $f'(x) = n \cdot x^{n-1}$. La derivada de una constante es $0$ y la derivada es un operador lineal, por lo que se puede derivar término a término.

**Paso 2: Derivar el término $5x^4$.**
$$\frac{d}{dx}(5x^4) = 5 \cdot 4x^3 = 20x^3$$

**Paso 3: Derivar los términos $-3x^3 + 7x^2 - 2x$.**
$$\frac{d}{dx}(-3x^3) = -3 \cdot 3x^2 = -9x^2$$
$$\frac{d}{dx}(7x^2) = 7 \cdot 2x = 14x$$
$$\frac{d}{dx}(-2x) = -2$$

**Paso 4: Derivar la constante y reunir todos los términos.**
$$\frac{d}{dx}(9) = 0$$
$$f'(x) = 20x^3 - 9x^2 + 14x - 2 + 0$$

### Respuesta Final
$$f'(x) = 20x^3 - 9x^2 + 14x - 2$$

---

## Ejercicio 42 — Derivada usando la regla del producto
**Dificultad:** ⭐ Básica

### Enunciado
Calculá la derivada de $f(x) = (3x^2 - 5)(2x + 7)$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se aplica la regla del producto: si $f(x) = u(x) \cdot v(x)$, entonces $f'(x) = u'(x) \cdot v(x) + u(x) \cdot v'(x)$. Se identifica $u(x) = 3x^2 - 5$ y $v(x) = 2x + 7$.

**Paso 2: Calcular $u'(x)$ y $v'(x)$.**
$$u'(x) = \frac{d}{dx}(3x^2 - 5) = 6x$$
$$v'(x) = \frac{d}{dx}(2x + 7) = 2$$

**Paso 3: Aplicar la fórmula del producto.**
$$f'(x) = u'(x) \cdot v(x) + u(x) \cdot v'(x) = 6x(2x + 7) + (3x^2 - 5)(2)$$

**Paso 4: Expandir cada término.**
$$6x(2x + 7) = 12x^2 + 42x$$
$$(3x^2 - 5)(2) = 6x^2 - 10$$

**Paso 5: Sumar y simplificar.**
$$f'(x) = 12x^2 + 42x + 6x^2 - 10 = 18x^2 + 42x - 10$$

### Respuesta Final
$$f'(x) = 18x^2 + 42x - 10$$

---

## Ejercicio 43 — Derivada usando la regla del cociente
**Dificultad:** ⭐⭐ Intermedia

### Enunciado
Calculá la derivada de $f(x) = \dfrac{x^2 + 3x - 1}{2x - 5}$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se aplica la regla del cociente: si $f(x) = \dfrac{u(x)}{v(x)}$, entonces $f'(x) = \dfrac{u'(x) \cdot v(x) - u(x) \cdot v'(x)}{[v(x)]^2}$. Se identifica $u(x) = x^2 + 3x - 1$ y $v(x) = 2x - 5$.

**Paso 2: Calcular $u'(x)$ y $v'(x)$.**
$$u'(x) = 2x + 3 \qquad v'(x) = 2$$

**Paso 3: Aplicar la fórmula del cociente.**
$$f'(x) = \frac{(2x+3)(2x-5) - (x^2+3x-1)(2)}{(2x-5)^2}$$

**Paso 4: Expandir el numerador, primer producto.**
$$(2x+3)(2x-5) = 4x^2 - 10x + 6x - 15 = 4x^2 - 4x - 15$$

**Paso 5: Expandir el numerador, segundo producto.**
$$(x^2+3x-1)(2) = 2x^2 + 6x - 2$$

**Paso 6: Restar y simplificar el numerador.**
$$4x^2 - 4x - 15 - (2x^2 + 6x - 2) = 4x^2 - 4x - 15 - 2x^2 - 6x + 2 = 2x^2 - 10x - 13$$

### Respuesta Final
$$f'(x) = \frac{2x^2 - 10x - 13}{(2x-5)^2}$$

---

## Ejercicio 44 — Derivada de funciones trigonométricas básicas
**Dificultad:** ⭐ Básica

### Enunciado
Calculá la derivada de $f(x) = 4\sin(x) - 3\cos(x) + 2\tan(x)$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se usan las derivadas trigonométricas fundamentales:
$$\frac{d}{dx}(\sin x) = \cos x, \quad \frac{d}{dx}(\cos x) = -\sin x, \quad \frac{d}{dx}(\tan x) = \sec^2 x$$
La derivada es lineal, así que se deriva término a término.

**Paso 2: Derivar $4\sin(x)$.**
$$\frac{d}{dx}(4\sin x) = 4\cos x$$

**Paso 3: Derivar $-3\cos(x)$.**
$$\frac{d}{dx}(-3\cos x) = -3 \cdot (-\sin x) = 3\sin x$$

**Paso 4: Derivar $2\tan(x)$.**
$$\frac{d}{dx}(2\tan x) = 2\sec^2 x$$

**Paso 5: Reunir todos los términos.**
$$f'(x) = 4\cos x + 3\sin x + 2\sec^2 x$$

### Respuesta Final
$$f'(x) = 4\cos x + 3\sin x + 2\sec^2 x$$

---

## Ejercicio 45 — Regla de la cadena con función compuesta
**Dificultad:** ⭐⭐ Intermedia

### Enunciado
Calculá la derivada de $f(x) = (3x^2 - 4x + 1)^5$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se aplica la regla de la cadena: si $f(x) = [g(x)]^n$, entonces $f'(x) = n \cdot [g(x)]^{n-1} \cdot g'(x)$. Se identifica $g(x) = 3x^2 - 4x + 1$ y $n = 5$.

**Paso 2: Calcular la derivada de la función interior $g(x)$.**
$$g'(x) = \frac{d}{dx}(3x^2 - 4x + 1) = 6x - 4$$

**Paso 3: Aplicar la regla de la cadena.**
$$f'(x) = 5 \cdot (3x^2 - 4x + 1)^{5-1} \cdot g'(x)$$
$$f'(x) = 5 \cdot (3x^2 - 4x + 1)^{4} \cdot (6x - 4)$$

**Paso 4: Factorizar si es posible.**
Se observa que $(6x - 4) = 2(3x - 2)$, por lo que:
$$f'(x) = 5 \cdot 2(3x-2) \cdot (3x^2 - 4x + 1)^4 = 10(3x-2)(3x^2 - 4x + 1)^4$$

### Respuesta Final
$$f'(x) = 10(3x - 2)(3x^2 - 4x + 1)^4$$

---

## Ejercicio 46 — Derivada de función exponencial y logarítmica
**Dificultad:** ⭐⭐ Intermedia

### Enunciado
Calculá la derivada de $f(x) = e^{3x^2 - 1} + \ln(5x + 2)$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se usan las reglas: $\dfrac{d}{dx}(e^{u(x)}) = e^{u(x)} \cdot u'(x)$ y $\dfrac{d}{dx}(\ln(u(x))) = \dfrac{u'(x)}{u(x)}$, ambas aplicando la regla de la cadena.

**Paso 2: Derivar $e^{3x^2 - 1}$. Identificar la función interior.**
$$u(x) = 3x^2 - 1 \implies u'(x) = 6x$$

**Paso 3: Aplicar la cadena al término exponencial.**
$$\frac{d}{dx}\left(e^{3x^2-1}\right) = e^{3x^2-1} \cdot 6x = 6x \, e^{3x^2-1}$$

**Paso 4: Derivar $\ln(5x + 2)$. Identificar la función interior.**
$$v(x) = 5x + 2 \implies v'(x) = 5$$

**Paso 5: Aplicar la cadena al término logarítmico.**
$$\frac{d}{dx}(\ln(5x+2)) = \frac{5}{5x+2}$$

**Paso 6: Reunir ambos resultados.**
$$f'(x) = 6x\,e^{3x^2-1} + \frac{5}{5x+2}$$

### Respuesta Final
$$f'(x) = 6x\,e^{3x^2-1} + \frac{5}{5x+2}$$

---

## Ejercicio 47 — Derivada de orden superior (segunda derivada)
**Dificultad:** ⭐⭐ Intermedia

### Enunciado
Dada $f(x) = x^4 - 6x^3 + 2x^2 - 8x + 3$, calculá $f''(x)$ y determiná los valores de $x$ para los cuales $f''(x) = 0$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
La segunda derivada $f''(x)$ se obtiene derivando $f'(x)$. Luego se iguala a cero y se resuelve la ecuación resultante.

**Paso 2: Calcular la primera derivada $f'(x)$.**
$$f'(x) = 4x^3 - 18x^2 + 4x - 8$$

**Paso 3: Calcular la segunda derivada $f''(x)$ derivando $f'(x)$.**
$$f''(x) = \frac{d}{dx}(4x^3 - 18x^2 + 4x - 8) = 12x^2 - 36x + 4$$

**Paso 4: Plantear e igualar $f''(x) = 0$.**
$$12x^2 - 36x + 4 = 0$$
Se divide toda la ecuación por $4$:
$$3x^2 - 9x + 1 = 0$$

**Paso 5: Aplicar la fórmula cuadrática.**
$$x = \frac{9 \pm \sqrt{81 - 12}}{6} = \frac{9 \pm \sqrt{69}}{6}$$

### Respuesta Final
$$f''(x) = 12x^2 - 36x + 4$$
Los valores donde $f''(x) = 0$ son:
$$x = \frac{9 - \sqrt{69}}{6} \approx 0{,}114 \qquad \text{y} \qquad x = \frac{9 + \sqrt{69}}{6} \approx 2{,}886$$

---

## Ejercicio 48 — Derivada implícita
**Dificultad:** ⭐⭐⭐ Avanzada

### Enunciado
Dada la curva implícita $x^3 + y^3 - 3xy = 7$, calculá $\dfrac{dy}{dx}$ usando derivación implícita y evaluá la derivada en el punto $(2, 1)$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se deriva ambos miembros de la ecuación respecto de $x$, tratando a $y$ como función implícita de $x$. Cada vez que se deriva una expresión en $y$, se multiplica por $\dfrac{dy}{dx}$ (regla de la cadena).

**Paso 2: Derivar $x^3$.**
$$\frac{d}{dx}(x^3) = 3x^2$$

**Paso 3: Derivar $y^3$ respecto de $x$ (usando cadena).**
$$\frac{d}{dx}(y^3) = 3y^2 \cdot \frac{dy}{dx}$$

**Paso 4: Derivar $-3xy$ usando la regla del producto.**
$$\frac{d}{dx}(-3xy) = -3\left(1 \cdot y + x \cdot \frac{dy}{dx}\right) = -3y - 3x\frac{dy}{dx}$$

**Paso 5: Derivar el miembro derecho e igualar.**
$$3x^2 + 3y^2\frac{dy}{dx} - 3y - 3x\frac{dy}{dx} = 0$$

**Paso 6: Despejar $\dfrac{dy}{dx}$.**
$$3y^2\frac{dy}{dx} - 3x\frac{dy}{dx} = 3y - 3x^2$$
$$\frac{dy}{dx}(3y^2

## Ejercicio 51 — Derivada de una función polinómica
**Dificultad:** ⭐ Básica

### Enunciado
Calculá la derivada de $f(x) = 4x^5 - 3x^3 + 7x^2 - 2x + 9$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se aplica la regla de la potencia: $\frac{d}{dx}(x^n) = n\,x^{n-1}$, y la linealidad de la derivada, que permite derivar término a término.

**Paso 2: Derivar el término $4x^5$.**
$$\frac{d}{dx}(4x^5) = 4 \cdot 5\,x^{5-1} = 20x^4$$

**Paso 3: Derivar los términos $-3x^3 + 7x^2 - 2x$.**
$$\frac{d}{dx}(-3x^3) = -3 \cdot 3\,x^2 = -9x^2$$
$$\frac{d}{dx}(7x^2) = 7 \cdot 2\,x = 14x$$
$$\frac{d}{dx}(-2x) = -2$$

**Paso 4: Derivar la constante $9$.**
$$\frac{d}{dx}(9) = 0$$

**Paso 5: Reunir todos los términos.**
$$f'(x) = 20x^4 - 9x^2 + 14x - 2$$

### Respuesta Final
$$f'(x) = 20x^4 - 9x^2 + 14x - 2$$

---

## Ejercicio 52 — Derivada usando la regla del producto
**Dificultad:** ⭐ Básica

### Enunciado
Calculá la derivada de $g(x) = (3x^2 - 5)(2x + 1)$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se aplica la regla del producto: $(u \cdot v)' = u'v + uv'$, con $u = 3x^2 - 5$ y $v = 2x + 1$.

**Paso 2: Calcular $u'$.**
$$u = 3x^2 - 5 \implies u' = 6x$$

**Paso 3: Calcular $v'$.**
$$v = 2x + 1 \implies v' = 2$$

**Paso 4: Aplicar la regla del producto.**
$$g'(x) = u'v + uv' = (6x)(2x+1) + (3x^2-5)(2)$$

**Paso 5: Expandir cada término.**
$$= 12x^2 + 6x + 6x^2 - 10$$

**Paso 6: Simplificar.**
$$g'(x) = 18x^2 + 6x - 10$$

### Respuesta Final
$$g'(x) = 18x^2 + 6x - 10$$

---

## Ejercicio 53 — Derivada usando la regla del cociente
**Dificultad:** ⭐⭐ Intermedia

### Enunciado
Calculá la derivada de $h(x) = \dfrac{x^2 + 3x - 1}{2x - 5}$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se aplica la regla del cociente: $\left(\dfrac{u}{v}\right)' = \dfrac{u'v - uv'}{v^2}$, con $u = x^2 + 3x - 1$ y $v = 2x - 5$.

**Paso 2: Calcular $u'$.**
$$u = x^2 + 3x - 1 \implies u' = 2x + 3$$

**Paso 3: Calcular $v'$.**
$$v = 2x - 5 \implies v' = 2$$

**Paso 4: Aplicar la regla del cociente.**
$$h'(x) = \frac{(2x+3)(2x-5) - (x^2+3x-1)(2)}{(2x-5)^2}$$

**Paso 5: Expandir el numerador.**
$$(2x+3)(2x-5) = 4x^2 - 10x + 6x - 15 = 4x^2 - 4x - 15$$
$$(x^2+3x-1)(2) = 2x^2 + 6x - 2$$

**Paso 6: Restar y simplificar el numerador.**
$$4x^2 - 4x - 15 - 2x^2 - 6x + 2 = 2x^2 - 10x - 13$$

**Paso 7: Escribir el resultado final.**
$$h'(x) = \frac{2x^2 - 10x - 13}{(2x-5)^2}$$

### Respuesta Final
$$h'(x) = \frac{2x^2 - 10x - 13}{(2x-5)^2}$$

---

## Ejercicio 54 — Derivada de función compuesta (regla de la cadena)
**Dificultad:** ⭐⭐ Intermedia

### Enunciado
Calculá la derivada de $f(x) = (3x^2 - 4x + 1)^6$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se aplica la regla de la cadena: $[g(h(x))]' = g'(h(x)) \cdot h'(x)$. Aquí $g(u) = u^6$ y $h(x) = 3x^2 - 4x + 1$.

**Paso 2: Derivar la función exterior $g(u) = u^6$.**
$$g'(u) = 6u^5$$
Evaluada en $u = h(x)$: $\ 6(3x^2 - 4x + 1)^5$.

**Paso 3: Derivar la función interior $h(x) = 3x^2 - 4x + 1$.**
$$h'(x) = 6x - 4$$

**Paso 4: Aplicar la regla de la cadena.**
$$f'(x) = 6(3x^2 - 4x + 1)^5 \cdot (6x - 4)$$

**Paso 5: Factorizar el factor $(6x - 4)$.**
$$6x - 4 = 2(3x - 2)$$

**Paso 6: Escribir la expresión final.**
$$f'(x) = 12(3x-2)(3x^2-4x+1)^5$$

### Respuesta Final
$$f'(x) = 12(3x-2)(3x^2 - 4x + 1)^5$$

---

## Ejercicio 55 — Derivada de funciones exponencial y logarítmica
**Dificultad:** ⭐⭐ Intermedia

### Enunciado
Calculá la derivada de $p(x) = e^{3x^2 - 1} + \ln(5x + 2)$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se derivan dos términos por separado usando regla de la cadena:
- $\frac{d}{dx}(e^{u}) = e^{u} \cdot u'$
- $\frac{d}{dx}(\ln u) = \dfrac{u'}{u}$

**Paso 2: Derivar $e^{3x^2-1}$. Identificar la función interior.**
$$u = 3x^2 - 1 \implies u' = 6x$$

**Paso 3: Aplicar la cadena al primer término.**
$$\frac{d}{dx}\left(e^{3x^2-1}\right) = e^{3x^2-1} \cdot 6x = 6x\,e^{3x^2-1}$$

**Paso 4: Derivar $\ln(5x+2)$. Identificar la función interior.**
$$u = 5x + 2 \implies u' = 5$$

**Paso 5: Aplicar la cadena al segundo término.**
$$\frac{d}{dx}\bigl(\ln(5x+2)\bigr) = \frac{5}{5x+2}$$

**Paso 6: Reunir los resultados.**
$$p'(x) = 6x\,e^{3x^2-1} + \frac{5}{5x+2}$$

### Respuesta Final
$$p'(x) = 6x\,e^{3x^2-1} + \frac{5}{5x+2}$$

---

## Ejercicio 56 — Derivada de función trigonométrica compuesta
**Dificultad:** ⭐⭐ Intermedia

### Enunciado
Calculá la derivada de $q(x) = \sin^3(4x - \pi)$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se reescribe $q(x) = [\sin(4x-\pi)]^3$ y se aplica la regla de la cadena dos veces: primero sobre la potencia cúbica y luego sobre el seno.

**Paso 2: Derivar la función exterior $u^3$ respecto de $u = \sin(4x-\pi)$.**
$$\frac{d}{du}(u^3) = 3u^2 = 3\sin^2(4x-\pi)$$

**Paso 3: Derivar la función intermedia $\sin(v)$ con $v = 4x - \pi$.**
$$\frac{d}{dv}(\sin v) = \cos v = \cos(4x-\pi)$$

**Paso 4: Derivar la función más interior $v = 4x - \pi$.**
$$v' = 4$$

**Paso 5: Aplicar la cadena completa (multiplicar los tres factores).**
$$q'(x) = 3\sin^2(4x-\pi) \cdot \cos(4x-\pi) \cdot 4$$

**Paso 6: Simplificar.**
$$q'(x) = 12\sin^2(4x-\pi)\cos(4x-\pi)$$

### Respuesta Final
$$q'(x) = 12\sin^2(4x-\pi)\,\cos(4x-\pi)$$

---

## Ejercicio 57 — Ecuación de la recta tangente a una curva
**Dificultad:** ⭐⭐ Intermedia

### Enunciado
Hallá la ecuación de la recta tangente a la curva $f(x) = x^3 - 4x + 2$ en el punto de abscisa $x_0 = 2$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
La recta tangente en $x_0$ tiene ecuación $y - f(x_0) = f'(x_0)(x - x_0)$. Se necesita calcular $f(x_0)$ y $f'(x_0)$.

**Paso 2: Calcular la ordenada del punto de tangencia $f(2)$.**
$$f(2) = (2)^3 - 4(2) + 2 = 8 - 8 + 2 = 2$$
El punto de tangencia es $(2,\,2)$.

**Paso 3: Calcular la derivada $f'(x)$.**
$$f'(x) = 3x^2 - 4$$

**Paso 4: Evaluar la derivada en $x_0 = 2$ para obtener la pendiente.**
$$f'(2) = 3(2)^2 - 4 = 12 - 4 = 8$$

**Paso 5: Escribir la ecuación de la recta tangente.**
$$y - 2 = 8(x - 2)$$

**Paso 6: Despejar $y$ y simplificar.**
$$y = 8x - 16 + 2 = 8x - 14$$

### Respuesta Final
La recta tangente a $f(x)$ en $x_0 = 2$ es:
$$y = 8x - 14$$

---

## Ejercicio 58 — Derivada implícita
**Dificultad:** ⭐⭐⭐ Avanzada

### Enunciado
Dada la curva implícita $x^3 + y^3 - 3xy = 5$, hallá $\dfrac{dy}{dx}$ usando derivación implícita.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se deriva ambos miembros de la ecuación respecto de $x$, tratando a $y$ como función de $x$ (i.e., $y = y(x)$) y aplicando regla de la cadena y regla del producto donde corresponda.

**Paso 2: Derivar $x^3$.**
$$\frac{d}{dx}(x^3) = 3x^2$$

**Paso 3: Derivar $y^3$ respecto de $x$ con regla de la cadena.**
$$\frac{d}{dx}(y^3) = 3y^2\,\frac{dy}{dx}$$

**Paso 4: Derivar $3xy$ respecto de $x$ con regla del producto.**
$$\frac{d}{dx}(3xy) = 3\left(1 \cdot y + x \cdot \frac{dy}{dx}\right) = 3y + 3x\,\frac{dy}{dx}$$

**Paso 5: Derivar la constante $5$.**
$$\frac{d}{dx}(5) = 0$$

**Paso 6: Plantear la ecuación con todos los términos derivados.**
$$3x^2 + 3y^2\,\frac{dy}{dx} - 3y - 3x\,\frac{dy}{dx} = 0$$

**Paso 7: Aislar $\dfrac{dy}{dx}$. Agrupar los términos que la contienen.**
$$3y^2\,\frac{dy}{dx} - 3x\,\frac{dy}{dx} = 3y - 3x^2$$
$$3(y^2 - x)\,\frac{dy}{dx} = 3(y - x^2)$$
$$\frac{dy}{dx} = \frac{y - x^2}{y^2 - x}$$

### Respuesta Final
$$\frac{dy}{dx} = \frac{y - x^2}{y^2 - x}$$

---

## Ejercicio 59 — Análisis de máximos y mínimos con derivada segunda
**Dificultad:** ⭐⭐⭐ Avanzada

### Enunciado
Para la función $f(x) = x^4 - 8x^2 + 3$, determiná los intervalos de crecimiento y decrecimiento, los extremos locales y clasificalos usando la derivada segunda.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se calcula $

## Ejercicio 61 — Derivada de una función polinómica
**Dificultad:** ⭐ Básica

### Enunciado
Calculá la derivada de $f(x) = 4x^5 - 3x^3 + 7x^2 - 2x + 9$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se aplica la regla de la potencia: $\dfrac{d}{dx}(x^n) = n\,x^{n-1}$, junto con la linealidad de la derivada (la derivada de una suma es la suma de las derivadas, y las constantes multiplicativas "salen").

**Paso 2: Derivar el término $4x^5$.**
$$\frac{d}{dx}(4x^5) = 4 \cdot 5x^{4} = 20x^4$$

**Paso 3: Derivar los términos $-3x^3 + 7x^2 - 2x$.**
$$\frac{d}{dx}(-3x^3) = -3 \cdot 3x^{2} = -9x^2$$
$$\frac{d}{dx}(7x^2) = 7 \cdot 2x = 14x$$
$$\frac{d}{dx}(-2x) = -2$$

**Paso 4: Derivar la constante $9$.**
$$\frac{d}{dx}(9) = 0$$

**Paso 5: Reunir todos los términos.**
$$f'(x) = 20x^4 - 9x^2 + 14x - 2$$

### Respuesta Final
$$f'(x) = 20x^4 - 9x^2 + 14x - 2$$

---

## Ejercicio 62 — Derivada usando la regla del producto
**Dificultad:** ⭐ Básica

### Enunciado
Calculá la derivada de $g(x) = (3x^2 - 5)(2x^3 + x)$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se aplica la regla del producto: $(u \cdot v)' = u'v + uv'$, con $u = 3x^2 - 5$ y $v = 2x^3 + x$.

**Paso 2: Calcular $u'$.**
$$u' = \frac{d}{dx}(3x^2 - 5) = 6x$$

**Paso 3: Calcular $v'$.**
$$v' = \frac{d}{dx}(2x^3 + x) = 6x^2 + 1$$

**Paso 4: Aplicar la fórmula del producto.**
$$g'(x) = u'v + uv' = 6x(2x^3 + x) + (3x^2 - 5)(6x^2 + 1)$$

**Paso 5: Expandir cada término.**
$$6x(2x^3 + x) = 12x^4 + 6x^2$$
$$(3x^2 - 5)(6x^2 + 1) = 18x^4 + 3x^2 - 30x^2 - 5 = 18x^4 - 27x^2 - 5$$

**Paso 6: Sumar y simplificar.**
$$g'(x) = 12x^4 + 6x^2 + 18x^4 - 27x^2 - 5 = 30x^4 - 21x^2 - 5$$

### Respuesta Final
$$g'(x) = 30x^4 - 21x^2 - 5$$

---

## Ejercicio 63 — Derivada usando la regla del cociente
**Dificultad:** ⭐ Básica

### Enunciado
Calculá la derivada de $h(x) = \dfrac{x^2 + 3x}{2x - 1}$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se aplica la regla del cociente: $\left(\dfrac{u}{v}\right)' = \dfrac{u'v - uv'}{v^2}$, con $u = x^2 + 3x$ y $v = 2x - 1$.

**Paso 2: Calcular $u'$ y $v'$.**
$$u' = 2x + 3 \qquad v' = 2$$

**Paso 3: Aplicar la fórmula.**
$$h'(x) = \frac{(2x+3)(2x-1) - (x^2+3x)(2)}{(2x-1)^2}$$

**Paso 4: Expandir el numerador.**
$$(2x+3)(2x-1) = 4x^2 - 2x + 6x - 3 = 4x^2 + 4x - 3$$
$$(x^2+3x)(2) = 2x^2 + 6x$$

**Paso 5: Restar y simplificar el numerador.**
$$4x^2 + 4x - 3 - 2x^2 - 6x = 2x^2 - 2x - 3$$

**Paso 6: Escribir el resultado final.**
$$h'(x) = \frac{2x^2 - 2x - 3}{(2x-1)^2}$$

### Respuesta Final
$$h'(x) = \frac{2x^2 - 2x - 3}{(2x-1)^2}$$

---

## Ejercicio 64 — Derivada de función compuesta (regla de la cadena)
**Dificultad:** ⭐⭐ Intermedia

### Enunciado
Calculá la derivada de $f(x) = (5x^3 - 2x + 1)^6$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se aplica la regla de la cadena: $[g(u(x))]' = g'(u(x)) \cdot u'(x)$. Aquí $g(u) = u^6$ y $u(x) = 5x^3 - 2x + 1$.

**Paso 2: Derivar la función exterior.**
$$g'(u) = 6u^5 \quad \Rightarrow \quad g'(u(x)) = 6(5x^3 - 2x + 1)^5$$

**Paso 3: Derivar la función interior.**
$$u'(x) = \frac{d}{dx}(5x^3 - 2x + 1) = 15x^2 - 2$$

**Paso 4: Aplicar la regla de la cadena.**
$$f'(x) = 6(5x^3 - 2x + 1)^5 \cdot (15x^2 - 2)$$

**Paso 5: Escribir la forma final (no se simplifica más).**
$$f'(x) = 6(15x^2 - 2)(5x^3 - 2x + 1)^5$$

### Respuesta Final
$$f'(x) = 6(15x^2 - 2)(5x^3 - 2x + 1)^5$$

---

## Ejercicio 65 — Derivada de funciones exponencial y logarítmica
**Dificultad:** ⭐⭐ Intermedia

### Enunciado
Calculá la derivada de $p(x) = e^{3x^2 - 1} + \ln(4x^3 + 7)$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se usan las fórmulas $\dfrac{d}{dx}(e^{u}) = e^{u} \cdot u'$ y $\dfrac{d}{dx}(\ln u) = \dfrac{u'}{u}$, combinadas con la regla de la cadena.

**Paso 2: Derivar $e^{3x^2 - 1}$.**
La función interior es $u(x) = 3x^2 - 1$, entonces $u'(x) = 6x$.
$$\frac{d}{dx}\left(e^{3x^2-1}\right) = e^{3x^2-1} \cdot 6x = 6x\,e^{3x^2-1}$$

**Paso 3: Derivar $\ln(4x^3 + 7)$.**
La función interior es $v(x) = 4x^3 + 7$, entonces $v'(x) = 12x^2$.
$$\frac{d}{dx}\left(\ln(4x^3+7)\right) = \frac{12x^2}{4x^3+7}$$

**Paso 4: Sumar ambas derivadas.**
$$p'(x) = 6x\,e^{3x^2-1} + \frac{12x^2}{4x^3+7}$$

### Respuesta Final
$$p'(x) = 6x\,e^{3x^2-1} + \frac{12x^2}{4x^3+7}$$

---

## Ejercicio 66 — Derivada de funciones trigonométricas con regla de la cadena
**Dificultad:** ⭐⭐ Intermedia

### Enunciado
Calculá la derivada de $q(x) = \sin^3(2x) - \cos(x^2 + 1)$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se reescribe $\sin^3(2x) = [\sin(2x)]^3$ para aplicar la regla de la cadena en dos niveles. Para $\cos(x^2+1)$ se aplica la cadena directamente.

**Paso 2: Derivar $[\sin(2x)]^3$ — primera capa (potencia).**
Sea $w = \sin(2x)$. Entonces $\dfrac{d}{dx}(w^3) = 3w^2 \cdot w'$.

**Paso 3: Derivar $w = \sin(2x)$ — segunda capa (seno compuesto).**
$$w' = \cos(2x) \cdot 2 = 2\cos(2x)$$
Juntando ambas capas:
$$\frac{d}{dx}\left[\sin^3(2x)\right] = 3\sin^2(2x) \cdot 2\cos(2x) = 6\sin^2(2x)\cos(2x)$$

**Paso 4: Derivar $\cos(x^2 + 1)$.**
$$\frac{d}{dx}\left[\cos(x^2+1)\right] = -\sin(x^2+1) \cdot 2x = -2x\sin(x^2+1)$$

**Paso 5: Restar (respetando el signo de la función original).**
$$q'(x) = 6\sin^2(2x)\cos(2x) - (-2x\sin(x^2+1))$$
$$q'(x) = 6\sin^2(2x)\cos(2x) + 2x\sin(x^2+1)$$

### Respuesta Final
$$q'(x) = 6\sin^2(2x)\cos(2x) + 2x\sin(x^2+1)$$

---

## Ejercicio 67 — Ecuación de la recta tangente en un punto
**Dificultad:** ⭐⭐ Intermedia

### Enunciado
Hallá la ecuación de la recta tangente a la curva $f(x) = x^3 - 4x + 2$ en el punto donde $x_0 = 2$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
La recta tangente en $x_0$ tiene pendiente $m = f'(x_0)$ y pasa por el punto $(x_0,\, f(x_0))$. Su ecuación es $y - f(x_0) = m(x - x_0)$.

**Paso 2: Calcular $f(x_0) = f(2)$.**
$$f(2) = (2)^3 - 4(2) + 2 = 8 - 8 + 2 = 2$$
El punto de tangencia es $(2,\, 2)$.

**Paso 3: Calcular $f'(x)$.**
$$f'(x) = 3x^2 - 4$$

**Paso 4: Evaluar $f'(2)$ para obtener la pendiente.**
$$m = f'(2) = 3(2)^2 - 4 = 12 - 4 = 8$$

**Paso 5: Escribir la ecuación de la recta tangente.**
$$y - 2 = 8(x - 2)$$
$$y = 8x - 16 + 2$$
$$y = 8x - 14$$

### Respuesta Final
La recta tangente a $f(x) = x^3 - 4x + 2$ en $x_0 = 2$ es:
$$y = 8x - 14$$

---

## Ejercicio 68 — Análisis de monotonía y extremos locales
**Dificultad:** ⭐⭐⭐ Avanzada

### Enunciado
Dada $f(x) = x^4 - 8x^2 + 3$, determiná los intervalos de crecimiento y decrecimiento, y clasificá los extremos locales.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se calcula $f'(x)$, se resuelve $f'(x) = 0$ para hallar los puntos críticos y se analiza el signo de $f'$ en cada subintervalo. Si $f'(x) > 0$, la función crece; si $f'(x) < 0$, decrece.

**Paso 2: Calcular $f'(x)$.**
$$f'(x) = 4x^3 - 16x = 4x(x^2 - 4) = 4x(x-2)(x+2)$$

**Paso 3: Hallar los puntos críticos resolviendo $f'(x) = 0$.**
$$4x(x-2)(x+2) = 0 \implies x = -2,\; x = 0,\; x = 2$$

**Paso 4: Analizar el signo de $f'(x)$ en cada subintervalo.**

| Intervalo | Factor $4x$ | Factor $(x-2)$ | Factor $(x+2)$ | $f'(x)$ | Monotonía |
|---|---|---|---|---|---|
| $x < -2$ | $-$ | $-$ | $-$ | $-$ | Decrece |
| $-2 < x < 0$ | $-$ | $-$ | $+$ | $+$ | Crece |
| $0 < x < 2$ | $+$ | $-$ | $+$ | $-$ | Decrece |
| $x > 2$ | $+$ | $+$ | $+$ | $+$ | Crece |

**Paso 5: Clasificar los extremos locales.**
- En $x = -2$: $f'$ pasa de $-$

## Ejercicio 71 — Derivada de una función polinómica

**Dificultad:** ⭐ Básica

### Enunciado

Calculá la derivada de $f(x) = 5x^4 - 3x^3 + 7x^2 - 2x + 9$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se aplica la regla de la potencia: si $f(x) = x^n$, entonces $f'(x) = n \cdot x^{n-1}$. La derivada de una suma es la suma de las derivadas, y la derivada de una constante es $0$.

**Paso 2: Derivar término a término.**
$$f'(x) = \frac{d}{dx}(5x^4) - \frac{d}{dx}(3x^3) + \frac{d}{dx}(7x^2) - \frac{d}{dx}(2x) + \frac{d}{dx}(9)$$

**Paso 3: Aplicar la regla de la potencia en cada término.**
$$f'(x) = 5 \cdot 4x^{4-1} - 3 \cdot 3x^{3-1} + 7 \cdot 2x^{2-1} - 2 \cdot 1x^{1-1} + 0$$

**Paso 4: Simplificar los exponentes y coeficientes.**
$$f'(x) = 20x^3 - 9x^2 + 14x - 2$$

### Respuesta Final

$$f'(x) = 20x^3 - 9x^2 + 14x - 2$$

---

## Ejercicio 72 — Derivada de una función con raíz y potencia negativa

**Dificultad:** ⭐ Básica

### Enunciado

Calculá la derivada de $g(x) = 4\sqrt{x} - \dfrac{3}{x^2} + 6$.

### Resolución paso a paso

**Paso 1: Reescribir la función con notación de potencias.**
Convertimos raíces y fracciones a potencias para poder aplicar la regla de la potencia directamente:
$$g(x) = 4x^{1/2} - 3x^{-2} + 6$$

**Paso 2: Derivar término a término.**
$$g'(x) = \frac{d}{dx}(4x^{1/2}) - \frac{d}{dx}(3x^{-2}) + \frac{d}{dx}(6)$$

**Paso 3: Aplicar la regla $\frac{d}{dx}(x^n) = n\,x^{n-1}$ en cada término.**
$$g'(x) = 4 \cdot \frac{1}{2}\,x^{1/2 - 1} - 3 \cdot (-2)\,x^{-2-1} + 0$$
$$g'(x) = 2x^{-1/2} + 6x^{-3}$$

**Paso 4: Reescribir el resultado en notación con raíces y fracciones.**
$$g'(x) = \frac{2}{\sqrt{x}} + \frac{6}{x^3}$$

### Respuesta Final

$$g'(x) = \frac{2}{\sqrt{x}} + \frac{6}{x^3}$$

---

## Ejercicio 73 — Derivada de un producto de funciones

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calculá la derivada de $h(x) = (3x^2 - 5)(x^3 + 2x)$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se aplica la regla del producto: si $h(x) = u(x) \cdot v(x)$, entonces $h'(x) = u'(x)\,v(x) + u(x)\,v'(x)$.
Identificamos $u(x) = 3x^2 - 5$ y $v(x) = x^3 + 2x$.

**Paso 2: Calcular $u'(x)$ y $v'(x)$.**
$$u'(x) = 6x \qquad v'(x) = 3x^2 + 2$$

**Paso 3: Aplicar la regla del producto.**
$$h'(x) = (6x)(x^3 + 2x) + (3x^2 - 5)(3x^2 + 2)$$

**Paso 4: Expandir el primer producto.**
$$6x \cdot x^3 + 6x \cdot 2x = 6x^4 + 12x^2$$

**Paso 5: Expandir el segundo producto.**
$$3x^2 \cdot 3x^2 + 3x^2 \cdot 2 - 5 \cdot 3x^2 - 5 \cdot 2 = 9x^4 + 6x^2 - 15x^2 - 10 = 9x^4 - 9x^2 - 10$$

**Paso 6: Sumar ambos resultados y simplificar.**
$$h'(x) = 6x^4 + 12x^2 + 9x^4 - 9x^2 - 10 = 15x^4 + 3x^2 - 10$$

### Respuesta Final

$$h'(x) = 15x^4 + 3x^2 - 10$$

---

## Ejercicio 74 — Derivada de un cociente de funciones

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calculá la derivada de $f(x) = \dfrac{2x^2 + 1}{x - 3}$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se aplica la regla del cociente: si $f(x) = \dfrac{u(x)}{v(x)}$, entonces:
$$f'(x) = \frac{u'(x)\,v(x) - u(x)\,v'(x)}{[v(x)]^2}$$
Identificamos $u(x) = 2x^2 + 1$ y $v(x) = x - 3$.

**Paso 2: Calcular $u'(x)$ y $v'(x)$.**
$$u'(x) = 4x \qquad v'(x) = 1$$

**Paso 3: Sustituir en la fórmula del cociente.**
$$f'(x) = \frac{4x\,(x-3) - (2x^2+1)\cdot 1}{(x-3)^2}$$

**Paso 4: Expandir el numerador.**
$$4x(x-3) = 4x^2 - 12x$$
$$\text{Numerador} = 4x^2 - 12x - 2x^2 - 1 = 2x^2 - 12x - 1$$

**Paso 5: Escribir el resultado final.**
$$f'(x) = \frac{2x^2 - 12x - 1}{(x-3)^2}$$

### Respuesta Final

$$f'(x) = \frac{2x^2 - 12x - 1}{(x-3)^2}$$

---

## Ejercicio 75 — Derivada de una función compuesta (regla de la cadena)

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calculá la derivada de $f(x) = (4x^3 - 7x + 1)^5$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se aplica la regla de la cadena: si $f(x) = [g(x)]^n$, entonces $f'(x) = n\,[g(x)]^{n-1} \cdot g'(x)$.
Identificamos $g(x) = 4x^3 - 7x + 1$ y $n = 5$.

**Paso 2: Calcular $g'(x)$.**
$$g'(x) = 12x^2 - 7$$

**Paso 3: Aplicar la regla de la cadena.**
$$f'(x) = 5\,(4x^3 - 7x + 1)^{5-1} \cdot g'(x)$$
$$f'(x) = 5\,(4x^3 - 7x + 1)^{4} \cdot (12x^2 - 7)$$

**Paso 4: Escribir el resultado ordenado.**
$$f'(x) = 5(12x^2 - 7)(4x^3 - 7x + 1)^4$$

### Respuesta Final

$$f'(x) = 5(12x^2 - 7)(4x^3 - 7x + 1)^4$$

---

## Ejercicio 76 — Derivada de funciones exponencial y logarítmica

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calculá la derivada de $f(x) = e^{3x^2 - 1} + \ln(5x + 2)$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se usan las fórmulas:
$$\frac{d}{dx}[e^{u(x)}] = e^{u(x)} \cdot u'(x) \qquad \frac{d}{dx}[\ln(u(x))] = \frac{u'(x)}{u(x)}$$
Ambas requieren la regla de la cadena.

**Paso 2: Derivar $e^{3x^2 - 1}$.**
Identificamos $u(x) = 3x^2 - 1$, entonces $u'(x) = 6x$.
$$\frac{d}{dx}\left[e^{3x^2 - 1}\right] = e^{3x^2 - 1} \cdot 6x = 6x\,e^{3x^2 - 1}$$

**Paso 3: Derivar $\ln(5x + 2)$.**
Identificamos $u(x) = 5x + 2$, entonces $u'(x) = 5$.
$$\frac{d}{dx}[\ln(5x+2)] = \frac{5}{5x+2}$$

**Paso 4: Combinar ambas derivadas.**
$$f'(x) = 6x\,e^{3x^2-1} + \frac{5}{5x+2}$$

### Respuesta Final

$$f'(x) = 6x\,e^{3x^2-1} + \frac{5}{5x+2}$$

---

## Ejercicio 77 — Derivada de funciones trigonométricas con regla de la cadena

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calculá la derivada de $f(x) = \sin^3(2x) - \cos(x^2 + 1)$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Reescribimos $\sin^3(2x) = [\sin(2x)]^3$ y aplicamos la regla de la cadena en cada término usando:
$$\frac{d}{dx}[\sin(u)] = \cos(u)\,u' \qquad \frac{d}{dx}[\cos(u)] = -\sin(u)\,u'$$

**Paso 2: Derivar $[\sin(2x)]^3$ — capa exterior.**
Aplicamos la potencia con $g(x) = \sin(2x)$ y $n = 3$:
$$\frac{d}{dx}[\sin(2x)]^3 = 3[\sin(2x)]^2 \cdot \frac{d}{dx}[\sin(2x)]$$

**Paso 3: Derivar la capa interior $\sin(2x)$.**
$$\frac{d}{dx}[\sin(2x)] = \cos(2x) \cdot 2 = 2\cos(2x)$$
Entonces:
$$\frac{d}{dx}[\sin(2x)]^3 = 3\sin^2(2x) \cdot 2\cos(2x) = 6\sin^2(2x)\cos(2x)$$

**Paso 4: Derivar $-\cos(x^2 + 1)$.**
Con $u(x) = x^2 + 1$, $u'(x) = 2x$:
$$\frac{d}{dx}[-\cos(x^2+1)] = -(-\sin(x^2+1)) \cdot 2x = 2x\sin(x^2+1)$$

**Paso 5: Combinar los resultados.**
$$f'(x) = 6\sin^2(2x)\cos(2x) + 2x\sin(x^2+1)$$

### Respuesta Final

$$f'(x) = 6\sin^2(2x)\cos(2x) + 2x\sin(x^2+1)$$

---

## Ejercicio 78 — Ecuación de la recta tangente a una curva

**Dificultad:** ⭐⭐⭐ Avanzada

### Enunciado

Encontrá la ecuación de la recta tangente a la curva $f(x) = x^3 - 4x^2 + 2$ en el punto $x_0 = 3$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
La recta tangente en $x_0$ tiene ecuación $y - f(x_0) = f'(x_0)(x - x_0)$. Necesitamos calcular $f(x_0)$ y $f'(x_0)$.

**Paso 2: Calcular $f(3)$ — punto de tangencia.**
$$f(3) = (3)^3 - 4(3)^2 + 2 = 27 - 36 + 2 = -7$$
El punto de tangencia es $(3,\,-7)$.

**Paso 3: Calcular $f'(x)$.**
$$f'(x) = 3x^2 - 8x$$

**Paso 4: Evaluar $f'(3)$ — pendiente de la tangente.**
$$f'(3) = 3(3)^2 - 8(3) = 3 \cdot 9 - 24 = 27 - 24 = 3$$

**Paso 5: Escribir la ecuación de la recta tangente.**
$$y - (-7) = 3(x - 3)$$
$$y + 7 = 3x - 9$$
$$y = 3x - 16$$

### Respuesta Final

La ecuación de la recta tangente a $f(x) = x^3 - 4x^2 + 2$ en $x_0 = 3$ es:
$$y = 3x - 16$$

---

## Ejercicio 79 — Análisis de máximos, mínimos e intervalos de crecimiento

**Dificultad:** ⭐⭐⭐ Avanzada

## Ejercicio 81 — Derivada de una función polinómica
**Dificultad:** ⭐ Básica

### Enunciado
Calculá la derivada de $f(x) = 4x^5 - 3x^3 + 7x^2 - 2x + 9$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Aplicamos la regla de la potencia: si $f(x) = x^n$, entonces $f'(x) = n \cdot x^{n-1}$. También usamos la linealidad de la derivada: la derivada de una suma es la suma de las derivadas, y las constantes multiplicativas se conservan.

**Paso 2: Derivar término a término.**
$$f'(x) = \frac{d}{dx}(4x^5) - \frac{d}{dx}(3x^3) + \frac{d}{dx}(7x^2) - \frac{d}{dx}(2x) + \frac{d}{dx}(9)$$

**Paso 3: Aplicar la regla de la potencia en cada término.**
$$f'(x) = 4 \cdot 5x^{4} - 3 \cdot 3x^{2} + 7 \cdot 2x^{1} - 2 \cdot 1x^{0} + 0$$

**Paso 4: Simplificar cada término.**
$$f'(x) = 20x^4 - 9x^2 + 14x - 2$$

### Respuesta Final
$$f'(x) = 20x^4 - 9x^2 + 14x - 2$$

---

## Ejercicio 82 — Derivada de una función con raíces y potencias negativas
**Dificultad:** ⭐ Básica

### Enunciado
Calculá la derivada de $g(x) = 3\sqrt{x} - \dfrac{5}{x^2} + \sqrt[3]{x}$.

### Resolución paso a paso

**Paso 1: Reescribir con potencias racionales.**
Convertimos cada término para poder aplicar la regla de la potencia:
$$g(x) = 3x^{1/2} - 5x^{-2} + x^{1/3}$$

**Paso 2: Aplicar la regla de la potencia a cada término.**
$$g'(x) = 3 \cdot \frac{1}{2}x^{1/2 - 1} - 5 \cdot (-2)x^{-2-1} + \frac{1}{3}x^{1/3 - 1}$$

**Paso 3: Simplificar los exponentes.**
$$g'(x) = \frac{3}{2}x^{-1/2} + 10x^{-3} + \frac{1}{3}x^{-2/3}$$

**Paso 4: Reescribir con raíces y fracciones para presentación estándar.**
$$g'(x) = \frac{3}{2\sqrt{x}} + \frac{10}{x^3} + \frac{1}{3\sqrt[3]{x^2}}$$

### Respuesta Final
$$g'(x) = \frac{3}{2\sqrt{x}} + \frac{10}{x^3} + \frac{1}{3\sqrt[3]{x^2}}$$

---

## Ejercicio 83 — Derivada de un producto de funciones
**Dificultad:** ⭐ Básica

### Enunciado
Calculá la derivada de $h(x) = (3x^2 - 1)(2x^3 + 5x)$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Aplicamos la regla del producto: si $h(x) = u(x) \cdot v(x)$, entonces $h'(x) = u'(x)\cdot v(x) + u(x)\cdot v'(x)$.
Identificamos $u(x) = 3x^2 - 1$ y $v(x) = 2x^3 + 5x$.

**Paso 2: Calcular las derivadas de cada factor.**
$$u'(x) = 6x \qquad v'(x) = 6x^2 + 5$$

**Paso 3: Aplicar la fórmula del producto.**
$$h'(x) = (6x)(2x^3 + 5x) + (3x^2 - 1)(6x^2 + 5)$$

**Paso 4: Expandir cada producto.**
$$h'(x) = (12x^4 + 30x^2) + (18x^4 + 15x^2 - 6x^2 - 5)$$

**Paso 5: Agrupar términos semejantes.**
$$h'(x) = 12x^4 + 30x^2 + 18x^4 + 9x^2 - 5$$
$$h'(x) = 30x^4 + 39x^2 - 5$$

### Respuesta Final
$$h'(x) = 30x^4 + 39x^2 - 5$$

---

## Ejercicio 84 — Derivada de un cociente
**Dificultad:** ⭐⭐ Intermedia

### Enunciado
Calculá la derivada de $f(x) = \dfrac{x^2 + 3x - 1}{2x - 5}$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Aplicamos la regla del cociente: si $f(x) = \dfrac{u(x)}{v(x)}$, entonces $f'(x) = \dfrac{u'(x)\cdot v(x) - u(x)\cdot v'(x)}{[v(x)]^2}$.
Identificamos $u(x) = x^2 + 3x - 1$ y $v(x) = 2x - 5$.

**Paso 2: Calcular las derivadas del numerador y del denominador.**
$$u'(x) = 2x + 3 \qquad v'(x) = 2$$

**Paso 3: Sustituir en la fórmula del cociente.**
$$f'(x) = \frac{(2x+3)(2x-5) - (x^2+3x-1)(2)}{(2x-5)^2}$$

**Paso 4: Expandir el numerador.**
$(2x+3)(2x-5) = 4x^2 - 10x + 6x - 15 = 4x^2 - 4x - 15$

$(x^2+3x-1)(2) = 2x^2 + 6x - 2$

**Paso 5: Restar y simplificar el numerador.**
$$\text{Numerador} = (4x^2 - 4x - 15) - (2x^2 + 6x - 2) = 2x^2 - 10x - 13$$

**Paso 6: Escribir el resultado final.**
$$f'(x) = \frac{2x^2 - 10x - 13}{(2x-5)^2}$$

### Respuesta Final
$$f'(x) = \frac{2x^2 - 10x - 13}{(2x-5)^2}$$

---

## Ejercicio 85 — Regla de la cadena con función compuesta
**Dificultad:** ⭐⭐ Intermedia

### Enunciado
Calculá la derivada de $f(x) = (3x^2 - 2x + 4)^6$.

### Resolución paso a paso

**Paso 1: Identificar la estructura de función compuesta.**
La función es de la forma $f(x) = [g(x)]^6$, donde $g(x) = 3x^2 - 2x + 4$.
Aplicamos la regla de la cadena: $f'(x) = 6\cdot[g(x)]^5 \cdot g'(x)$.

**Paso 2: Calcular la derivada de la función interior.**
$$g'(x) = 6x - 2$$

**Paso 3: Aplicar la regla de la cadena.**
$$f'(x) = 6(3x^2 - 2x + 4)^5 \cdot (6x - 2)$$

**Paso 4: Factorizar el factor $6x - 2$.**
$$6x - 2 = 2(3x - 1)$$

**Paso 5: Escribir la expresión completamente factorizada.**
$$f'(x) = 6 \cdot 2(3x-1)(3x^2 - 2x + 4)^5 = 12(3x-1)(3x^2 - 2x + 4)^5$$

### Respuesta Final
$$f'(x) = 12(3x-1)(3x^2 - 2x + 4)^5$$

---

## Ejercicio 86 — Derivada de funciones exponencial y logarítmica
**Dificultad:** ⭐⭐ Intermedia

### Enunciado
Calculá la derivada de $f(x) = e^{3x^2 - 1} + \ln(5x^3 + 2)$.

### Resolución paso a paso

**Paso 1: Separar la derivada por linealidad.**
$$f'(x) = \frac{d}{dx}\!\left[e^{3x^2-1}\right] + \frac{d}{dx}\!\left[\ln(5x^3+2)\right]$$

**Paso 2: Derivar el término exponencial con regla de la cadena.**
La fórmula es $\dfrac{d}{dx}[e^{u}] = e^{u} \cdot u'$, con $u = 3x^2 - 1$, $u' = 6x$:
$$\frac{d}{dx}\!\left[e^{3x^2-1}\right] = e^{3x^2-1} \cdot 6x = 6x\,e^{3x^2-1}$$

**Paso 3: Derivar el término logarítmico con regla de la cadena.**
La fórmula es $\dfrac{d}{dx}[\ln u] = \dfrac{u'}{u}$, con $u = 5x^3+2$, $u' = 15x^2$:
$$\frac{d}{dx}\!\left[\ln(5x^3+2)\right] = \frac{15x^2}{5x^3+2}$$

**Paso 4: Reunir los resultados.**
$$f'(x) = 6x\,e^{3x^2-1} + \frac{15x^2}{5x^3+2}$$

### Respuesta Final
$$f'(x) = 6x\,e^{3x^2-1} + \frac{15x^2}{5x^3+2}$$

---

## Ejercicio 87 — Derivada de funciones trigonométricas compuestas
**Dificultad:** ⭐⭐ Intermedia

### Enunciado
Calculá la derivada de $f(x) = \sin^4(2x) + \cos(x^3)$.

### Resolución paso a paso

**Paso 1: Reescribir y separar la expresión.**
$$f(x) = [\sin(2x)]^4 + \cos(x^3)$$
$$f'(x) = \frac{d}{dx}[\sin(2x)]^4 + \frac{d}{dx}[\cos(x^3)]$$

**Paso 2: Derivar $[\sin(2x)]^4$ con regla de la cadena doble.**
Identificamos capas: exterior $u^4$, media $\sin(v)$, interior $v = 2x$.
$$\frac{d}{dx}[\sin(2x)]^4 = 4[\sin(2x)]^3 \cdot \cos(2x) \cdot 2$$
$$= 8\sin^3(2x)\cos(2x)$$

**Paso 3: Derivar $\cos(x^3)$ con regla de la cadena.**
Con $u = x^3$, $u' = 3x^2$:
$$\frac{d}{dx}[\cos(x^3)] = -\sin(x^3) \cdot 3x^2 = -3x^2\sin(x^3)$$

**Paso 4: Combinar los resultados.**
$$f'(x) = 8\sin^3(2x)\cos(2x) - 3x^2\sin(x^3)$$

**Paso 5: Reconocer si conviene simplificar con identidad doble ángulo (opcional).**
Recordando $2\sin\theta\cos\theta = \sin(2\theta)$:
$$8\sin^3(2x)\cos(2x) = 4\sin^2(2x)\cdot 2\sin(2x)\cos(2x) = 4\sin^2(2x)\sin(4x)$$
Ambas formas son correctas. Dejamos la expresión en su forma directa.

### Respuesta Final
$$f'(x) = 8\sin^3(2x)\cos(2x) - 3x^2\sin(x^3)$$

---

## Ejercicio 88 — Ecuación de la recta tangente en un punto
**Dificultad:** ⭐⭐ Intermedia

### Enunciado
Hallá la ecuación de la recta tangente a la curva $f(x) = x^3 - 4x^2 + 3$ en el punto de abscisa $x_0 = 2$.

### Resolución paso a paso

**Paso 1: Calcular la ordenada del punto de tangencia.**
$$f(2) = (2)^3 - 4(2)^2 + 3 = 8 - 16 + 3 = -5$$
El punto es $P = (2,\,-5)$.

**Paso 2: Calcular la derivada de la función.**
$$f'(x) = 3x^2 - 8x$$

**Paso 3: Evaluar la derivada en $x_0 = 2$ para obtener la pendiente.**
$$f'(2) = 3(2)^2 - 8(2) = 12 - 16 = -4$$
La pendiente de la recta tangente es $m = -4$.

**Paso 4: Escribir la ecuación de la recta tangente.**
Usamos la forma punto-pendiente: $y - y_0 = m(x - x_0)$:
$$y - (-5) = -4(x - 2)$$

**Paso 5: Simplificar la ecuación.**
$$y + 5 = -4x + 8$$
$$y = -4x + 3$$

### Respuesta Final
La recta tangente a $f(x) = x^3 - 4x^2 + 3$ en $x_0 = 2$ es:
$$y = -4x + 3$$

---

## Ejercicio 89 — Análisis de crecimiento, decrecimiento y extremos locales
**Dificultad:** ⭐⭐⭐ Avanzada

### Enunciado
Dada $f(x) =

## Ejercicio 91 — Derivada de una función polinómica
**Dificultad:** ⭐ Básica

### Enunciado
Calculá la derivada de $f(x) = 5x^4 - 3x^3 + 7x^2 - 2x + 9$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se aplica la regla de la potencia: si $f(x) = x^n$, entonces $f'(x) = n \cdot x^{n-1}$, junto con la linealidad de la derivada (la derivada de una suma es la suma de las derivadas).

**Paso 2: Derivar término a término.**
$$f'(x) = \frac{d}{dx}(5x^4) - \frac{d}{dx}(3x^3) + \frac{d}{dx}(7x^2) - \frac{d}{dx}(2x) + \frac{d}{dx}(9)$$

**Paso 3: Aplicar la regla de la potencia a cada término.**
$$f'(x) = 5 \cdot 4x^3 - 3 \cdot 3x^2 + 7 \cdot 2x^1 - 2 \cdot 1x^0 + 0$$

**Paso 4: Simplificar cada término.**
$$f'(x) = 20x^3 - 9x^2 + 14x - 2$$

### Respuesta Final
$$f'(x) = 20x^3 - 9x^2 + 14x - 2$$

---

## Ejercicio 92 — Derivada usando la regla del producto
**Dificultad:** ⭐ Básica

### Enunciado
Calculá la derivada de $g(x) = (3x^2 - 1)(2x + 5)$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se aplica la regla del producto: si $g(x) = u(x) \cdot v(x)$, entonces $g'(x) = u'(x)\cdot v(x) + u(x)\cdot v'(x)$. Se identifican $u(x) = 3x^2 - 1$ y $v(x) = 2x + 5$.

**Paso 2: Calcular las derivadas de cada factor.**
$$u'(x) = 6x \qquad v'(x) = 2$$

**Paso 3: Aplicar la fórmula del producto.**
$$g'(x) = 6x \cdot (2x + 5) + (3x^2 - 1) \cdot 2$$

**Paso 4: Expandir cada producto.**
$$g'(x) = 12x^2 + 30x + 6x^2 - 2$$

**Paso 5: Agrupar términos semejantes.**
$$g'(x) = 18x^2 + 30x - 2$$

### Respuesta Final
$$g'(x) = 18x^2 + 30x - 2$$

---

## Ejercicio 93 — Derivada usando la regla del cociente
**Dificultad:** ⭐⭐ Intermedia

### Enunciado
Calculá la derivada de $h(x) = \dfrac{x^2 + 3x}{2x - 1}$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se aplica la regla del cociente: si $h(x) = \dfrac{u(x)}{v(x)}$, entonces $h'(x) = \dfrac{u'(x)\cdot v(x) - u(x)\cdot v'(x)}{[v(x)]^2}$. Se identifican $u(x) = x^2 + 3x$ y $v(x) = 2x - 1$.

**Paso 2: Calcular las derivadas del numerador y denominador.**
$$u'(x) = 2x + 3 \qquad v'(x) = 2$$

**Paso 3: Aplicar la fórmula del cociente.**
$$h'(x) = \frac{(2x + 3)(2x - 1) - (x^2 + 3x)(2)}{(2x - 1)^2}$$

**Paso 4: Expandir el numerador.**
$$(2x+3)(2x-1) = 4x^2 - 2x + 6x - 3 = 4x^2 + 4x - 3$$
$$(x^2 + 3x)(2) = 2x^2 + 6x$$

**Paso 5: Restar y simplificar el numerador.**
$$h'(x) = \frac{4x^2 + 4x - 3 - 2x^2 - 6x}{(2x-1)^2} = \frac{2x^2 - 2x - 3}{(2x-1)^2}$$

### Respuesta Final
$$h'(x) = \frac{2x^2 - 2x - 3}{(2x - 1)^2}$$

---

## Ejercicio 94 — Derivada de función con raíz usando regla de la cadena
**Dificultad:** ⭐⭐ Intermedia

### Enunciado
Calculá la derivada de $f(x) = \sqrt{3x^2 - 5x + 1}$.

### Resolución paso a paso

**Paso 1: Reescribir la raíz como potencia fraccionaria.**
$$f(x) = (3x^2 - 5x + 1)^{1/2}$$

**Paso 2: Identificar la estrategia — regla de la cadena.**
Si $f(x) = [g(x)]^n$, entonces $f'(x) = n \cdot [g(x)]^{n-1} \cdot g'(x)$. Aquí $g(x) = 3x^2 - 5x + 1$ y $n = \tfrac{1}{2}$.

**Paso 3: Calcular la derivada de la función interior.**
$$g'(x) = 6x - 5$$

**Paso 4: Aplicar la regla de la cadena.**
$$f'(x) = \frac{1}{2}(3x^2 - 5x + 1)^{-1/2} \cdot (6x - 5)$$

**Paso 5: Reescribir en forma de fracción con raíz.**
$$f'(x) = \frac{6x - 5}{2\sqrt{3x^2 - 5x + 1}}$$

### Respuesta Final
$$f'(x) = \frac{6x - 5}{2\sqrt{3x^2 - 5x + 1}}$$

---

## Ejercicio 95 — Derivada de función exponencial compuesta
**Dificultad:** ⭐⭐ Intermedia

### Enunciado
Calculá la derivada de $f(x) = e^{4x^2 - 3x}$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia — regla de la cadena para exponencial.**
Si $f(x) = e^{g(x)}$, entonces $f'(x) = e^{g(x)} \cdot g'(x)$. Aquí $g(x) = 4x^2 - 3x$.

**Paso 2: Calcular la derivada de la función del exponente.**
$$g'(x) = 8x - 3$$

**Paso 3: Aplicar la fórmula.**
$$f'(x) = e^{4x^2 - 3x} \cdot (8x - 3)$$

**Paso 4: Escribir el resultado ordenado.**
$$f'(x) = (8x - 3)\,e^{4x^2 - 3x}$$

### Respuesta Final
$$f'(x) = (8x - 3)\,e^{4x^2 - 3x}$$

---

## Ejercicio 96 — Derivada de función logarítmica compuesta
**Dificultad:** ⭐⭐ Intermedia

### Enunciado
Calculá la derivada de $f(x) = \ln(x^3 + 2x^2 - 4)$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia — regla de la cadena para logaritmo.**
Si $f(x) = \ln(g(x))$, entonces $f'(x) = \dfrac{g'(x)}{g(x)}$. Aquí $g(x) = x^3 + 2x^2 - 4$.

**Paso 2: Calcular la derivada de la función interior.**
$$g'(x) = 3x^2 + 4x$$

**Paso 3: Aplicar la fórmula.**
$$f'(x) = \frac{3x^2 + 4x}{x^3 + 2x^2 - 4}$$

**Paso 4: Verificar si el numerador factoriza para simplificar.**
$$3x^2 + 4x = x(3x + 4)$$
El denominador $x^3 + 2x^2 - 4$ no comparte factor común evidente, por lo que la expresión queda como está.

### Respuesta Final
$$f'(x) = \frac{3x^2 + 4x}{x^3 + 2x^2 - 4} = \frac{x(3x+4)}{x^3 + 2x^2 - 4}$$

---

## Ejercicio 97 — Derivada de función trigonométrica compuesta
**Dificultad:** ⭐⭐ Intermedia

### Enunciado
Calculá la derivada de $f(x) = \sin^3(2x)$.

### Resolución paso a paso

**Paso 1: Reescribir la función para visualizar la composición.**
$$f(x) = [\sin(2x)]^3$$
Se trata de una composición doble: $f(x) = [h(g(x))]^3$ donde $g(x) = 2x$ y $h(u) = \sin(u)$.

**Paso 2: Identificar la estrategia — regla de la cadena aplicada dos veces.**
Primero se deriva la potencia cúbica, luego el seno, luego el argumento $2x$.

**Paso 3: Derivar la potencia exterior.**
$$f'(x) = 3[\sin(2x)]^2 \cdot \frac{d}{dx}[\sin(2x)]$$

**Paso 4: Derivar $\sin(2x)$ con la regla de la cadena.**
$$\frac{d}{dx}[\sin(2x)] = \cos(2x) \cdot 2$$

**Paso 5: Combinar todos los factores.**
$$f'(x) = 3\sin^2(2x) \cdot \cos(2x) \cdot 2$$

**Paso 6: Simplificar.**
$$f'(x) = 6\sin^2(2x)\cos(2x)$$

### Respuesta Final
$$f'(x) = 6\sin^2(2x)\cos(2x)$$

---

## Ejercicio 98 — Ecuación de la recta tangente
**Dificultad:** ⭐⭐⭐ Avanzada

### Enunciado
Hallá la ecuación de la recta tangente a la curva $f(x) = x^3 - 4x^2 + 2$ en el punto donde $x_0 = 3$.

### Resolución paso a paso

**Paso 1: Calcular la ordenada del punto de tangencia.**
$$f(3) = (3)^3 - 4(3)^2 + 2 = 27 - 36 + 2 = -7$$
El punto de tangencia es $(3,\,-7)$.

**Paso 2: Calcular la derivada de $f(x)$.**
$$f'(x) = 3x^2 - 8x$$

**Paso 3: Evaluar la derivada en $x_0 = 3$ para obtener la pendiente.**
$$f'(3) = 3(3)^2 - 8(3) = 27 - 24 = 3$$
La pendiente de la recta tangente es $m = 3$.

**Paso 4: Escribir la ecuación de la recta tangente con la forma punto-pendiente.**
$$y - y_0 = m(x - x_0)$$
$$y - (-7) = 3(x - 3)$$

**Paso 5: Despejar y simplificar.**
$$y + 7 = 3x - 9$$
$$y = 3x - 16$$

### Respuesta Final
La ecuación de la recta tangente a $f(x) = x^3 - 4x^2 + 2$ en $x_0 = 3$ es:
$$y = 3x - 16$$

---

## Ejercicio 99 — Derivada de función implícita
**Dificultad:** ⭐⭐⭐ Avanzada

### Enunciado
Dada la curva implícita $x^2 + 3xy - y^2 = 7$, hallá $\dfrac{dy}{dx}$ usando derivación implícita.

### Resolución paso a paso

**Paso 1: Identificar la estrategia — derivación implícita.**
Se deriva ambos miembros de la ecuación respecto de $x$, tratando a $y$ como función de $x$. Cada vez que se deriva un término con $y$, se multiplica por $\dfrac{dy}{dx}$.

**Paso 2: Derivar el primer término $x^2$.**
$$\frac{d}{dx}(x^2) = 2x$$

**Paso 3: Derivar el término $3xy$ usando la regla del producto.**
$$\frac{d}{dx}(3xy) = 3\left(1 \cdot y + x \cdot \frac{dy}{dx}\right) = 3y + 3x\frac{dy}{dx}$$

**Paso 4: Derivar el término $-y^2$ usando la regla de la cadena.**
$$\frac{d}{dx}(-y^2) = -2y\frac{dy}{dx}$$

**Paso 5: Derivar el miembro derecho y armar la ecuación completa.**
$$\frac{d}{dx}(7) = 0$$
$$2x + 3y + 3x\frac{dy}{dx} - 2y\frac{dy}{dx} = 0$$

**Paso 6: Agrupar los términos con $\dfrac{dy}{dx}$ y despejar.**
$$3x\frac{dy}{dx} - 2y\frac{dy}{dx} = -2x - 3y$$
$$\frac{dy}{dx}(3x - 2y) = -2x - 3y$$
$$\frac{dy}{dx} = \frac{-2x - 3y}{3x - 2y}$$

### Respuesta Final
$$\frac{dy}{dx} = \frac{-2x - 3y}{3x - 2y}$$

---
# Matemática CBC-UBA — Unidad 4: Límites y continuidad
**Generado:** 07/05/2026 06:57:00
**Cantidad:** 10 ejercicios · **Dificultad:** mixta
**Archivo:** `matematica_cbc_unidad_04_limites_continuidad.md` · **Timestamp:** 20260507_065700

---

# Tarea 1 — Profesor de Matemática CBC-UBA

# Guía de Ejercicios Resueltos: Límites y Continuidad
## Matemática CBC-UBA | Nivel Mixto

---

> **Para el estudiante:** Esta guía cubre los tópicos centrales de límites y continuidad que aparecen en los parciales del CBC. Los ejercicios van de menor a mayor complejidad. Leé los pasos con atención y no saltees las justificaciones: ahí está la matemática de verdad.

---

## Ejercicio 1 — Límite directo por sustitución (Nivel: Básico)

### Enunciado
Calculá el siguiente límite:

$$\lim_{x \to 3} \left(2x^2 - 5x + 1\right)$$

### Datos y dominio
La función $f(x) = 2x^2 - 5x + 1$ es un **polinomio**, definida para todo $x \in \mathbb{R}$.

### Resolución paso a paso

**Paso 1 — Identificar el tipo de función.**

$f(x) = 2x^2 - 5x + 1$ es una función polinómica. Los polinomios son **continuos en todo** $\mathbb{R}$.

**Paso 2 — Aplicar la propiedad de continuidad.**

> **Propiedad:** Si $f$ es continua en $x = a$, entonces $\displaystyle\lim_{x \to a} f(x) = f(a)$.

Como $f$ es polinómica, es continua en $x = 3$. Por lo tanto, podemos **sustituir directamente**:

**Paso 3 — Sustituir $x = 3$:**

$$\lim_{x \to 3} \left(2x^2 - 5x + 1\right) = 2(3)^2 - 5(3) + 1$$

$$= 2 \cdot 9 - 15 + 1 = 18 - 15 + 1 = 4$$

### ✅ Respuesta Final

$$\boxed{\lim_{x \to 3} \left(2x^2 - 5x + 1\right) = 4}$$

### Conceptos clave
- Continuidad de funciones polinómicas
- Evaluación directa por sustitución
- Límite de una función en un punto

---

## Ejercicio 2 — Indeterminación $\tfrac{0}{0}$ por factorización (Nivel: Básico-Intermedio)

### Enunciado
Calculá:

$$\lim_{x \to 2} \frac{x^2 - 4}{x - 2}$$

### Datos y dominio
La función $f(x) = \dfrac{x^2 - 4}{x - 2}$ **no está definida** en $x = 2$ (denominador nulo). El dominio es $\text{Dom}(f) = \mathbb{R} \setminus \{2\}$.

### Resolución paso a paso

**Paso 1 — Verificar la indeterminación.**

Sustituimos $x = 2$ para ver qué pasa:

$$\frac{(2)^2 - 4}{2 - 2} = \frac{4 - 4}{0} = \frac{0}{0} \quad \longrightarrow \text{Indeterminación } \frac{0}{0}$$

> **Atención:** $\frac{0}{0}$ NO es cero ni infinito. Es una **forma indeterminada** que requiere análisis adicional.

**Paso 2 — Factorizar el numerador.**

Aplicamos la identidad de diferencia de cuadrados:

$$x^2 - 4 = (x-2)(x+2)$$

Entonces:

$$\frac{x^2 - 4}{x - 2} = \frac{(x-2)(x+2)}{x-2}$$

**Paso 3 — Simplificar (válido porque $x \neq 2$).**

> **Justificación:** En el cálculo de límites cuando $x \to 2$, el punto $x = 2$ **nunca se alcanza**, solo nos acercamos. Por eso podemos cancelar el factor $(x-2)$ con $x \neq 2$.

$$\frac{\cancel{(x-2)}(x+2)}{\cancel{(x-2)}} = x + 2, \quad \text{con } x \neq 2$$

**Paso 4 — Calcular el límite de la expresión simplificada.**

$$\lim_{x \to 2} \frac{x^2 - 4}{x - 2} = \lim_{x \to 2} (x + 2) = 2 + 2 = 4$$

### ✅ Respuesta Final

$$\boxed{\lim_{x \to 2} \frac{x^2 - 4}{x - 2} = 4}$$

### Conceptos clave
- Forma indeterminada $\frac{0}{0}$
- Factorización y simplificación algebraica
- El límite analiza el comportamiento *cerca* del punto, no *en* el punto

---

## Ejercicio 3 — Límite lateral y existencia del límite (Nivel: Intermedio)

### Enunciado
Dada la función a trozos:

$$f(x) = \begin{cases} x^2 + 1 & \text{si } x < 1 \\ 3x - 1 & \text{si } x \geq 1 \end{cases}$$

Analizá si existe $\displaystyle\lim_{x \to 1} f(x)$ y determiná si $f$ es continua en $x = 1$.

### Resolución paso a paso

**Paso 1 — Calcular el límite lateral izquierdo** ($x \to 1^-$, es decir, $x < 1$):

En este caso, usamos la rama $f(x) = x^2 + 1$:

$$\lim_{x \to 1^-} f(x) = \lim_{x \to 1^-} (x^2 + 1) = (1)^2 + 1 = 2$$

**Paso 2 — Calcular el límite lateral derecho** ($x \to 1^+$, es decir, $x > 1$):

En este caso, usamos la rama $f(x) = 3x - 1$:

$$\lim_{x \to 1^+} f(x) = \lim_{x \to 1^+} (3x - 1) = 3(1) - 1 = 2$$

**Paso 3 — Verificar la igualdad de límites laterales.**

> **Teorema:** $\displaystyle\lim_{x \to a} f(x)$ existe $\iff$ $\displaystyle\lim_{x \to a^-} f(x) = \lim_{x \to a^+} f(x)$

Como $\displaystyle\lim_{x \to 1^-} f(x) = \lim_{x \to 1^+} f(x) = 2$, el límite **existe** y:

$$\lim_{x \to 1} f(x) = 2$$

**Paso 4 — Verificar continuidad en $x = 1$.**

> **Definición:** $f$ es continua en $x = a$ si se cumplen **tres condiciones**:
> 1. $f(a)$ está definida
> 2. $\displaystyle\lim_{x \to a} f(x)$ existe
> 3. $\displaystyle\lim_{x \to a} f(x) = f(a)$

- **Condición 1:** $f(1) = 3(1) - 1 = 2$ ✓ (usamos la rama $x \geq 1$)
- **Condición 2:** $\displaystyle\lim_{x \to 1} f(x) = 2$ ✓ (calculado arriba)
- **Condición 3:** $\displaystyle\lim_{x \to 1} f(x) = f(1) = 2$ ✓

Las tres condiciones se cumplen. ¡$f$ **es continua** en $x = 1$!

### Comportamiento gráfico (descripción ASCII)

```
f(x)
  |        /  (rama 3x-1)
3 |       /
  |      * ← f(1) = 2
2 |    */
  |  *  (rama x²+1)
1 | *
  |___________
        1     x
```

### ✅ Respuesta Final

$$\boxed{\lim_{x \to 1} f(x) = 2 \quad \text{y} \quad f \text{ es continua en } x = 1}$$

### Conceptos clave
- Límites laterales izquierdo y derecho
- Condición necesaria y suficiente para la existencia del límite
- Definición de continuidad en un punto (3 condiciones)

---

## Ejercicio 4 — Indeterminación $\tfrac{0}{0}$ con radicales (Nivel: Intermedio)

### Enunciado
Calculá:

$$\lim_{x \to 0} \frac{\sqrt{x+4} - 2}{x}$$

### Datos y dominio
Para que $\sqrt{x+4}$ esté definida, necesitamos $x + 4 \geq 0$, es decir $x \geq -4$. En $x = 0$, el denominador es nulo, por lo que hay que analizar la indeterminación.

### Resolución paso a paso

**Paso 1 — Verificar la indeterminación.**

$$\frac{\sqrt{0+4} - 2}{0} = \frac{\sqrt{4} - 2}{0} = \frac{2 - 2}{0} = \frac{0}{0} \quad \longrightarrow \text{Indeterminación}$$

**Paso 2 — Técnica: multiplicar por el conjugado.**

> **Estrategia:** Cuando aparece una raíz cuadrada, multiplicamos numerador y denominador por el **conjugado** del numerador: $(\sqrt{x+4} + 2)$.
> Usamos la identidad: $(a - b)(a + b) = a^2 - b^2$

$$\frac{\sqrt{x+4} - 2}{x} \cdot \frac{\sqrt{x+4} + 2}{\sqrt{x+4} + 2}$$

**Paso 3 — Operar el numerador.**

$$(\sqrt{x+4} - 2)(\sqrt{x+4} + 2) = (\sqrt{x+4})^2 - (2)^2 = (x + 4) - 4 = x$$

**Paso 4 — Reescribir la expresión.**

$$\frac{x}{x \cdot (\sqrt{x+4} + 2)}$$

**Paso 5 — Simplificar (con $x \neq 0$).**

$$\frac{\cancel{x}}{\cancel{x}(\sqrt{x+4} + 2)} = \frac{1}{\sqrt{x+4} + 2}$$

**Paso 6 — Evaluar el límite.**

$$\lim_{x \to 0} \frac{1}{\sqrt{x+4} + 2} = \frac{1}{\sqrt{0+4} + 2} = \frac{1}{2 + 2} = \frac{1}{4}$$

### ✅ Respuesta Final

$$\boxed{\lim_{x \to 0} \frac{\sqrt{x+4} - 2}{x} = \frac{1}{4}}$$

### Conceptos clave
- Indeterminación $\frac{0}{0}$ con radicales
- Técnica de racionalización por conjugado
- Identidad diferencia de cuadrados: $(a-b)(a+b) = a^2 - b^2$

---

## Ejercicio 5 — Límite en el infinito y asíntotas horizontales (Nivel: Intermedio)

### Enunciado
Calculá los siguientes límites y determiná las asíntotas horizontales de $f(x) = \dfrac{3x^2 - 2x}{x^2 + 5}$.

$$\lim_{x \to +\infty} f(x) \qquad \text{y} \qquad \lim_{x \to -\infty} f(x)$$

### Resolución paso a paso

**Paso 1 — Identificar la indeterminación.**

Cuando $x \to \pm\infty$, numerador y denominador tienden a $\infty$. Tenemos la forma $\dfrac{\infty}{\infty}$.

**Paso 2 — Dividir numerador y denominador por la potencia de mayor grado.**

La potencia máxima es $x^2$. Dividimos todo por $x^2$:

$$f(x) = \frac{3x^2 - 2x}{x^2 + 5} = \frac{\dfrac{3x^2 - 2x}{x^2}}{\dfrac{x^2 + 5}{x^2}} = \frac{3 - \dfrac{2}{x}}{1 + \dfrac{5}{x^2}}$$

**Paso 3 — Calcular el límite cuando $x \to +\infty$.**

> **Propiedad:** $\displaystyle\lim_{x \to \pm\infty} \frac{c}{x^n} = 0$ para cualquier constante $c$ y $n > 0$.

$$\lim_{x \to +\infty} \frac{3 - \dfrac{2}{x}}{1 + \dfrac{5}{x^2}} = \frac{3 - 0}{1 + 0} = \frac{3}{1} = 3$$

**Paso 4 — Calcular el límite cuando $x \to -\infty$.**

El análisis es idéntico porque los términos $\dfrac{2}{x}$ y $\dfrac{5}{x^2}$ también tienden a $0$:

$$\lim_{x \to -\infty} \frac{3 - \dfrac{2}{x}}{1 + \dfrac{5}{x^2}} = \frac{3 - 0}{1 + 0} = 3$$

**Paso 5 — Determinar asíntotas horizontales.**

> **Definición:** Si $\displaystyle\lim_{x \to \pm\infty} f(x) = L$ (número finito), entonces la recta $y = L$ es **asíntota horizontal** de $f$.

Ambos límites valen $3$, por lo tanto la recta $y = 3$ es **asíntota horizontal** por ambos lados.

### Comportamiento gráfico

```
f(x)
  |
3 |_ _ _ _ _ _ _ _ _ _ _ (y = 3, asíntota horizontal)
  |       _______________
  |      /
  |_____/
  |___________________ x
     -∞             +∞
```

### ✅ Respuesta Final

$$\boxed{\lim_{x \to +\infty} f(x) = \lim_{x \to -\infty} f(x) = 3}$$

La recta $y = 3$ es la **asíntota horizontal** de $f(x) = \df

---

# Tarea 2 — Profesor de Matemática CBC-UBA

# Resumen Teórico: Límites y Continuidad
## Matemática CBC-UBA

---

## 📌 Concepto de Límite

El límite de $f(x)$ cuando $x \to a$ describe el comportamiento de $f$ **cerca** de $a$, independientemente de lo que ocurra **en** $a$. Notación:

$$\lim_{x \to a} f(x) = L$$

> **Condición de existencia:** el límite existe $\iff$ los límites laterales coinciden:
> $$\lim_{x \to a^-} f(x) = \lim_{x \to a^+} f(x) = L$$

---

## 📌 Continuidad en un Punto

$f$ es continua en $x = a$ si se cumplen **las tres condiciones simultáneamente**:

| Condición | Descripción |
|-----------|-------------|
| 1️⃣ | $f(a)$ está definida |
| 2️⃣ | $\displaystyle\lim_{x \to a} f(x)$ existe |
| 3️⃣ | $\displaystyle\lim_{x \to a} f(x) = f(a)$ |

> 💡 **Todo polinomio es continuo en $\mathbb{R}$**: podés evaluar directamente por sustitución.

---

## 📌 Formas Indeterminadas y Técnicas de Resolución

| Indeterminación | Situación típica | Técnica |
|----------------|-----------------|---------|
| $\dfrac{0}{0}$ | Factores comunes | Factorizar y cancelar |
| $\dfrac{0}{0}$ con raíces | Radicales en numerador | Multiplicar por conjugado |
| $\dfrac{\infty}{\infty}$ | $x \to \pm\infty$ | Dividir por la mayor potencia de $x$ |

---

## 📌 Fórmulas Clave

$$\lim_{x \to \pm\infty} \frac{c}{x^n} = 0 \quad (c \in \mathbb{R},\ n > 0)$$

$$\frac{a^2 - b^2}{a - b} = a + b \qquad \text{(diferencia de cuadrados)}$$

$$(a-b)(a+b) = a^2 - b^2 \qquad \text{(conjugado)}$$

---

## 📌 Asíntotas Horizontales

Si $\displaystyle\lim_{x \to \pm\infty} f(x) = L \in \mathbb{R}$, entonces $y = L$ es **asíntota horizontal**.

---

## ⚠️ Tips para el Parcial

- **Siempre verificá** la indeterminación sustituyendo primero antes de aplicar cualquier técnica.
- **Nunca cancelés** sin aclarar que $x \neq a$ en el proceso.
- En funciones a trozos, **calculá ambos límites laterales** por separado y comparalos.
- $\dfrac{0}{0}$ **no es cero**: es una señal de que necesitás trabajar algebraicamente.
- Para asíntotas, **recordá dividir por la potencia máxima** del denominador.
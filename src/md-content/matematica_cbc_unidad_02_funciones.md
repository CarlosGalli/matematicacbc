# Matemática CBC-UBA — Unidad 2: Funciones
**Generado:** 07/05/2026 06:54:56
**Cantidad:** 10 ejercicios · **Dificultad:** mixta
**Archivo:** `matematica_cbc_unidad_02_funciones.md` · **Timestamp:** 20260507_065456

---

# Tarea 1 — Profesor de Matemática CBC-UBA

# 📚 Guía de Ejercicios Resueltos — Funciones
## Matemática CBC-UBA | Dificultad Mixta

---

> **Nota pedagógica:** Esta guía cubre los temas centrales del eje de Funciones del programa oficial del CBC. Los ejercicios están ordenados de menor a mayor dificultad dentro de cada bloque temático. Mostramos **todos** los pasos algebraicos y justificamos cada propiedad que aplicamos.

---

## 📋 Índice Temático

| N° | Tema | Dificultad |
|-----|------|-----------|
| 1 | Dominio e imagen de función racional | ⭐ Básica |
| 2 | Función definida por partes | ⭐ Básica |
| 3 | Composición de funciones | ⭐⭐ Media |
| 4 | Función inversa | ⭐⭐ Media |
| 5 | Función cuadrática: análisis completo | ⭐⭐ Media |
| 6 | Dominio de función con raíz y logaritmo | ⭐⭐ Media |
| 7 | Función exponencial y logarítmica | ⭐⭐ Media |
| 8 | Inyectividad y biyectividad | ⭐⭐⭐ Alta |
| 9 | Análisis completo de función racional | ⭐⭐⭐ Alta |
| 10 | Composición e inversa combinadas | ⭐⭐⭐ Alta |

---

## Ejercicio 1 — Dominio e Imagen de Función Racional
### ⭐ Dificultad: Básica

---

**Enunciado:**

Dada la función $f(x) = \dfrac{x + 3}{x^2 - x - 6}$, determiná el **dominio** y la **imagen** de $f$.

---

### 📐 Resolución paso a paso

**Paso 1: Determinar el dominio.**

El dominio de una función racional $\dfrac{P(x)}{Q(x)}$ son todos los números reales excepto aquellos que anulan el denominador.

> **Propiedad aplicada:** La división por cero no está definida en $\mathbb{R}$.

Resolvemos $Q(x) = x^2 - x - 6 = 0$:

Factorizamos el trinomio buscando dos números cuyo producto sea $-6$ y cuya suma sea $-1$:

$$x^2 - x - 6 = (x - 3)(x + 2) = 0$$

Verificación: $(-3)(2) = -6$ ✓ y $(-3) + 2 = -1$ ✓

Entonces:

$$x - 3 = 0 \Rightarrow x = 3 \qquad \text{o} \qquad x + 2 = 0 \Rightarrow x = -2$$

**Paso 2: Escribir el dominio.**

$$\text{Dom}(f) = \mathbb{R} \setminus \{-2,\, 3\} = (-\infty,\,-2) \cup (-2,\,3) \cup (3,\,+\infty)$$

**Paso 3: Simplificar la función.**

Como $x^2 - x - 6 = (x-3)(x+2)$, podemos reescribir:

$$f(x) = \frac{x + 3}{(x - 3)(x + 2)}$$

Notamos que $x + 3 \neq x - 3$ y $x + 3 \neq x + 2$, por lo tanto **no hay simplificación posible**. La función no tiene cancelaciones.

**Paso 4: Determinar la imagen.**

Para hallar la imagen, planteamos $y = f(x)$ y despejamos $x$:

$$y = \frac{x + 3}{(x-3)(x+2)}$$

Multiplicamos ambos miembros por $(x-3)(x+2)$:

$$y(x^2 - x - 6) = x + 3$$

$$yx^2 - yx - 6y = x + 3$$

$$yx^2 - yx - x - 6y - 3 = 0$$

$$yx^2 - (y + 1)x - (6y + 3) = 0$$

Para que exista $x \in \text{Dom}(f)$ que corresponda a cada $y$, analizamos dos casos:

**Caso A: $y = 0$**

Si $y = 0$: $0 \cdot x^2 - (0+1)x - (0+3) = 0 \Rightarrow -x - 3 = 0 \Rightarrow x = -3$

Como $x = -3 \in \text{Dom}(f)$ (es decir, $-3 \neq -2$ y $-3 \neq 3$), entonces $y = 0$ **pertenece** a la imagen.

Verificación: $f(-3) = \dfrac{-3+3}{(-3)^2-(-3)-6} = \dfrac{0}{9+3-6} = \dfrac{0}{6} = 0$ ✓

**Caso B: $y \neq 0$**

La ecuación es de segundo grado en $x$. Calculamos el discriminante:

$$\Delta = b^2 - 4ac = (y+1)^2 - 4 \cdot y \cdot (-(6y+3))$$

$$\Delta = (y+1)^2 + 4y(6y+3)$$

$$\Delta = y^2 + 2y + 1 + 24y^2 + 12y$$

$$\Delta = 25y^2 + 14y + 1$$

Para que haya solución real: $\Delta \geq 0$

$$25y^2 + 14y + 1 \geq 0$$

Raíces del discriminante:

$$y = \frac{-14 \pm \sqrt{196 - 100}}{50} = \frac{-14 \pm \sqrt{96}}{50} = \frac{-14 \pm 4\sqrt{6}}{50} = \frac{-7 \pm 2\sqrt{6}}{25}$$

Calculamos aproximadamente: $\sqrt{6} \approx 2{,}449$

$$y_1 = \frac{-7 - 4{,}899}{25} \approx \frac{-11{,}899}{25} \approx -0{,}476 \qquad y_2 = \frac{-7 + 4{,}899}{25} \approx \frac{-2{,}101}{25} \approx -0{,}084$$

Como el coeficiente de $y^2$ es positivo ($25 > 0$), la parábola abre hacia arriba, por lo tanto:

$$\Delta \geq 0 \iff y \leq y_1 \text{ o } y \geq y_2$$

$$\boxed{\text{Im}(f) = \left(-\infty,\, \frac{-7 - 2\sqrt{6}}{25}\right] \cup \left[\frac{-7 + 2\sqrt{6}}{25},\, +\infty\right)}$$

---

**Conceptos clave:** Dominio de función racional, factorización de trinomios, imagen mediante discriminante.

---

## Ejercicio 2 — Función Definida por Partes
### ⭐ Dificultad: Básica

---

**Enunciado:**

Sea la función:

$$f(x) = \begin{cases} x^2 - 4 & \text{si } x < -1 \\ 2x + 1 & \text{si } -1 \leq x \leq 2 \\ \sqrt{x - 2} & \text{si } x > 2 \end{cases}$$

a) Calculá $f(-3)$, $f(-1)$, $f(0)$, $f(2)$, $f(6)$.

b) ¿Es continua en $x = -1$? ¿Y en $x = 2$?

c) Describí el comportamiento general de la función.

---

### 📐 Resolución paso a paso

**Parte a) Evaluación de la función**

> **Propiedad aplicada:** Para evaluar una función definida por partes, primero identificamos en qué intervalo cae el valor de $x$, y luego aplicamos la expresión correspondiente.

**$f(-3)$:** Como $-3 < -1$, usamos $f(x) = x^2 - 4$:
$$f(-3) = (-3)^2 - 4 = 9 - 4 = 5$$

**$f(-1)$:** Como $-1 \leq -1 \leq 2$ (el $-1$ está incluido en el segundo intervalo), usamos $f(x) = 2x + 1$:
$$f(-1) = 2(-1) + 1 = -2 + 1 = -1$$

**$f(0)$:** Como $-1 \leq 0 \leq 2$, usamos $f(x) = 2x + 1$:
$$f(0) = 2(0) + 1 = 1$$

**$f(2)$:** Como $-1 \leq 2 \leq 2$ (el $2$ está incluido en el segundo intervalo), usamos $f(x) = 2x + 1$:
$$f(2) = 2(2) + 1 = 5$$

**$f(6)$:** Como $6 > 2$, usamos $f(x) = \sqrt{x - 2}$:
$$f(6) = \sqrt{6 - 2} = \sqrt{4} = 2$$

---

**Parte b) Continuidad**

> **Definición:** Una función es **continua en $x = a$** si se cumplen las tres condiciones: (1) $f(a)$ existe, (2) $\lim_{x \to a} f(x)$ existe (los límites laterales coinciden), (3) $\lim_{x \to a} f(x) = f(a)$.

**Análisis en $x = -1$:**

- $f(-1) = -1$ ✓ (calculado arriba)

- Límite por izquierda (usamos $x^2 - 4$ porque $x < -1$):
$$\lim_{x \to -1^-} f(x) = \lim_{x \to -1^-} (x^2 - 4) = (-1)^2 - 4 = 1 - 4 = -3$$

- Límite por derecha (usamos $2x + 1$ porque $-1 \leq x \leq 2$):
$$\lim_{x \to -1^+} f(x) = \lim_{x \to -1^+} (2x + 1) = 2(-1) + 1 = -1$$

Como $\lim_{x \to -1^-} f(x) = -3 \neq -1 = \lim_{x \to -1^+} f(x)$, los límites laterales **no coinciden**.

$$\therefore \quad f \text{ NO es continua en } x = -1 \text{ (discontinuidad de salto)}$$

**Análisis en $x = 2$:**

- $f(2) = 5$ ✓ (calculado arriba)

- Límite por izquierda (usamos $2x + 1$):
$$\lim_{x \to 2^-} f(x) = \lim_{x \to 2^-} (2x + 1) = 2(2) + 1 = 5$$

- Límite por derecha (usamos $\sqrt{x-2}$):
$$\lim_{x \to 2^+} f(x) = \lim_{x \to 2^+} \sqrt{x - 2} = \sqrt{2 - 2} = \sqrt{0} = 0$$

Como $\lim_{x \to 2^-} f(x) = 5 \neq 0 = \lim_{x \to 2^+} f(x)$, los límites laterales **no coinciden**.

$$\therefore \quad f \text{ NO es continua en } x = 2 \text{ (discontinuidad de salto)}$$

---

**Parte c) Comportamiento general**

```
f(x)
  |
5 |        *                          *
  |       / \                        /
  |      /   \        ___           /
  |     /     \      /   \         /
  |    /       \    /     \       /
-4|---*---------*--*-------*-----*-----> x
      -3        -1  0      2     6
```

- **Para $x < -1$:** parábola $x^2 - 4$, creciente a la derecha y decreciente a la izquierda (con vértice en $x=0$, fuera del intervalo).
- **Para $-1 \leq x \leq 2$:** recta de pendiente positiva $m = 2$.
- **Para $x > 2$:** raíz cuadrada desplazada, creciente desde $(2, 0)$.

---

> ### ✅ Respuesta Final
> - $f(-3)=5$, $f(-1)=-1$, $f(0)=1$, $f(2)=5$, $f(6)=2$
> - $f$ **no es continua** ni en $x=-1$ (salto de $-3$ a $-1$) ni en $x=2$ (salto de $5$ a $0$)

**Conceptos clave:** Función definida por partes, evaluación por intervalos, continuidad lateral, discontinuidad de salto.

---

## Ejercicio 3 — Composición de Funciones
### ⭐⭐ Dificultad: Media

---

**Enunciado:**

Dadas $f(x) = \sqrt{x + 1}$ y $g(x) = \dfrac{1}{x - 2}$, calculá:

a) $(f \circ g)(x)$ y su dominio.

b) $(g \circ f)(x)$ y su dominio.

c) ¿Es cierto que $(f \circ g)(x) = (g \circ f)(x)$?

---

### 📐 Resolución paso a paso

> **Definición:** La composición $(f \circ g)(x) = f(g(x))$ significa "aplicar $g$ primero y luego $f$ al resultado". El dominio de $f \circ g$ son todos los $x$ del dominio de $g$ tales que $g(x)$ esté en el dominio de $f$.

**Paso 1: Identificar dominios individuales.**

Para $f(x) = \sqrt{x+1}$: necesitamos $x + 1 \geq 0 \Rightarrow x \geq -1$, entonces $\text{Dom}(f) = [-1, +\infty)$

Para $g(x) = \dfrac{1}{x-2}$: necesitamos $x \neq 2$, entonces $\text{Dom}(g) = \mathbb{R} \setminus \{2\}$

---

# Tarea 2 — Profesor de Matemática CBC-UBA

# 📖 Resumen Teórico — Funciones
## Matemática CBC-UBA | Para tener a mano en el parcial

---

## 1. Conceptos Fundamentales

**Función:** Una relación $f: A \to B$ donde a cada $x \in A$ le corresponde **un único** $y \in B$. Se escribe $y = f(x)$.

- **Dominio** $(\text{Dom}(f))$: conjunto de valores de $x$ para los que $f$ está definida.
- **Imagen** $(\text{Im}(f))$: conjunto de valores que efectivamente toma $f(x)$.

---

## 2. Reglas de Dominio según el Tipo de Función

| Tipo | Restricción | Condición |
|------|-------------|-----------|
| Racional $\frac{P(x)}{Q(x)}$ | Denominador $\neq 0$ | $Q(x) \neq 0$ |
| Radical par $\sqrt[2n]{f(x)}$ | Radicando $\geq 0$ | $f(x) \geq 0$ |
| Logarítmica $\log f(x)$ | Argumento $> 0$ | $f(x) > 0$ |
| Combinada | Todas las anteriores simultáneamente | Sistema de condiciones |

> 💡 **Tip parcial:** Si hay raíz **y** logaritmo juntos, planteá ambas condiciones como un **sistema** y tomá la intersección.

---

## 3. Composición e Inversa

**Composición:** $(f \circ g)(x) = f(g(x))$

$$\text{Dom}(f \circ g) = \{x \in \text{Dom}(g) : g(x) \in \text{Dom}(f)\}$$

> ⚠️ En general, $f \circ g \neq g \circ f$. ¡El orden importa!

**Función inversa $f^{-1}$:** Existe si y solo si $f$ es **biyectiva** (inyectiva y surayectiva).

$$f(a) = b \iff f^{-1}(b) = a$$

Para calcularla: despejá $x$ de $y = f(x)$ y luego intercambiás roles: $f^{-1}(x) = \ldots$

---

## 4. Propiedades Clave de Funciones Especiales

**Exponencial** $f(x) = a^x$ $(a > 0,\ a \neq 1)$:
$$\text{Dom} = \mathbb{R}, \quad \text{Im} = (0, +\infty)$$

**Logarítmica** $f(x) = \log_a x$:
$$\text{Dom} = (0,+\infty), \quad \text{Im} = \mathbb{R}$$

Son **inversas** entre sí: $\log_a(a^x) = x$ y $a^{\log_a x} = x$

**Cuadrática** $f(x) = ax^2 + bx + c$:
- Vértice: $V = \left(-\dfrac{b}{2a},\ -\dfrac{\Delta}{4a}\right)$ donde $\Delta = b^2 - 4ac$
- Imagen: $\left[-\dfrac{\Delta}{4a}, +\infty\right)$ si $a > 0$; $\left(-\infty, -\dfrac{\Delta}{4a}\right]$ si $a < 0$

---

## 5. Continuidad

Una función es **continua en $x = a$** si se cumplen las **tres condiciones**:

$$\text{(1) } f(a) \text{ existe} \qquad \text{(2) } \lim_{x \to a} f(x) \text{ existe} \qquad \text{(3) } \lim_{x \to a} f(x) = f(a)$$

> 💡 **Tip parcial:** En funciones por partes, verificá siempre la continuidad en los **puntos de empalme** comparando límites laterales.

---

## ⚡ Checklist para el Parcial

- [ ] Encontrar **todos** los valores que anulan denominadores o radicandos
- [ ] En composición, restringir el dominio **en dos pasos**
- [ ] Para la imagen de funciones racionales, usar el **discriminante** $\Delta \geq 0$
- [ ] Verificar biyectividad antes de calcular la inversa
- [ ] En funciones por partes, evaluar siempre en el intervalo **correcto**
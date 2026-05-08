# Matemática CBC-UBA — Unidad 1: Números reales y álgebra
**Generado:** 07/05/2026 06:53:42
**Cantidad:** 10 ejercicios · **Dificultad:** mixta
**Archivo:** `matematica_cbc_unidad_01_numeros_reales_algebra.md` · **Timestamp:** 20260507_065342

---

# Tarea 1 — Profesor de Matemática CBC-UBA

# Guía de Ejercicios Resueltos: Números Reales y Álgebra
### Matemática CBC-UBA | Nivel Mixto

---

## Conceptos Previos Necesarios

Antes de arrancar, recordá las propiedades fundamentales de los **números reales** $\mathbb{R}$:

| Propiedad | Suma | Producto |
|-----------|------|----------|
| Conmutativa | $a+b=b+a$ | $a \cdot b = b \cdot a$ |
| Asociativa | $(a+b)+c=a+(b+c)$ | $(a \cdot b)\cdot c=a\cdot(b \cdot c)$ |
| Distributiva | $a(b+c)=ab+ac$ | |
| Neutro | $a+0=a$ | $a \cdot 1 = a$ |
| Inverso | $a+(-a)=0$ | $a \cdot \frac{1}{a}=1$ (con $a\neq 0$) |

---

## Ejercicio 1 — Valor Absoluto y Desigualdades
**Dificultad:** ⭐ Básica

### Enunciado
Resolvé la inecuación: $|2x - 3| \leq 5$

### Dominio de validez
$x \in \mathbb{R}$

### Resolución paso a paso

**Paso 1: Aplicar la definición de valor absoluto.**

Recordá la propiedad fundamental:
$$|A| \leq k \iff -k \leq A \leq k \quad \text{(válido para } k > 0\text{)}$$

Como $k = 5 > 0$, podemos aplicarla directamente:
$$|2x - 3| \leq 5 \iff -5 \leq 2x - 3 \leq 5$$

**Paso 2: Resolver la inecuación doble.**

Sumamos $3$ en los tres miembros (propiedad de la desigualdad: sumar el mismo número no cambia el sentido):
$$-5 + 3 \leq 2x - 3 + 3 \leq 5 + 3$$
$$-2 \leq 2x \leq 8$$

**Paso 3: Dividir por $2 > 0$ en los tres miembros.**

Como dividimos por un número **positivo**, el sentido de la desigualdad **se mantiene**:
$$\frac{-2}{2} \leq \frac{2x}{2} \leq \frac{8}{2}$$
$$-1 \leq x \leq 4$$

**Paso 4: Escribir el conjunto solución.**

$$S = [-1,\ 4]$$

Representación en la recta real:
```
<----(----|==========|----)---->
        -1             4
```
*(Extremos cerrados: se incluyen $-1$ y $4$)*

### ✅ Respuesta Final
$$\boxed{x \in [-1,\ 4]}$$

### Conceptos clave involucrados
- Definición de valor absoluto
- Propiedades de las desigualdades
- Intervalos cerrados en $\mathbb{R}$

---

## Ejercicio 2 — Simplificación de Expresiones con Potencias y Radicales
**Dificultad:** ⭐⭐ Intermedia

### Enunciado
Simplificá la siguiente expresión, expresando el resultado sin radicales en el denominador:
$$\frac{\sqrt{50} - \sqrt{18}}{\sqrt{2}}$$

### Resolución paso a paso

**Paso 1: Simplificar cada radical del numerador.**

Buscamos factores cuadrados perfectos dentro de cada raíz:

$$\sqrt{50} = \sqrt{25 \cdot 2} = \sqrt{25}\cdot\sqrt{2} = 5\sqrt{2}$$

$$\sqrt{18} = \sqrt{9 \cdot 2} = \sqrt{9}\cdot\sqrt{2} = 3\sqrt{2}$$

*Propiedad usada:* $\sqrt{a \cdot b} = \sqrt{a}\cdot\sqrt{b}$ para $a, b \geq 0$

**Paso 2: Reemplazar en el numerador y factorizar.**

$$\sqrt{50} - \sqrt{18} = 5\sqrt{2} - 3\sqrt{2} = (5-3)\sqrt{2} = 2\sqrt{2}$$

*Propiedad usada:* distributiva (suma de términos semejantes con radicales iguales)

**Paso 3: Dividir por $\sqrt{2}$.**

$$\frac{2\sqrt{2}}{\sqrt{2}} = 2 \cdot \frac{\sqrt{2}}{\sqrt{2}} = 2 \cdot 1 = 2$$

*Propiedad usada:* $\dfrac{\sqrt{a}}{\sqrt{a}} = 1$ para $a > 0$

### ✅ Respuesta Final
$$\boxed{\frac{\sqrt{50} - \sqrt{18}}{\sqrt{2}} = 2}$$

### Conceptos clave involucrados
- Propiedades de radicales
- Simplificación de radicales con factores cuadrados perfectos
- Suma de radicales semejantes

---

## Ejercicio 3 — Ecuación Cuadrática con Fórmula Resolvente
**Dificultad:** ⭐⭐ Intermedia

### Enunciado
Resolvé la ecuación: $2x^2 - 5x - 3 = 0$

### Resolución paso a paso

**Paso 1: Identificar los coeficientes.**

La ecuación es de la forma $ax^2 + bx + c = 0$, con:
$$a = 2, \quad b = -5, \quad c = -3$$

**Paso 2: Calcular el discriminante.**

$$\Delta = b^2 - 4ac = (-5)^2 - 4\cdot(2)\cdot(-3) = 25 + 24 = 49$$

Como $\Delta = 49 > 0$, la ecuación tiene **dos raíces reales distintas**. ✓

**Paso 3: Aplicar la fórmula resolvente.**

$$x = \frac{-b \pm \sqrt{\Delta}}{2a} = \frac{-(-5) \pm \sqrt{49}}{2 \cdot 2} = \frac{5 \pm 7}{4}$$

**Paso 4: Calcular las dos soluciones.**

$$x_1 = \frac{5 + 7}{4} = \frac{12}{4} = 3$$

$$x_2 = \frac{5 - 7}{4} = \frac{-2}{4} = -\frac{1}{2}$$

**Paso 5: Verificación (importante en el CBC).**

Para $x_1 = 3$: $\quad 2(9) - 5(3) - 3 = 18 - 15 - 3 = 0$ ✓

Para $x_2 = -\dfrac{1}{2}$: $\quad 2\left(\dfrac{1}{4}\right) - 5\left(-\dfrac{1}{2}\right) - 3 = \dfrac{1}{2} + \dfrac{5}{2} - 3 = 3 - 3 = 0$ ✓

### ✅ Respuesta Final
$$\boxed{x_1 = 3 \qquad x_2 = -\frac{1}{2}}$$

### Conceptos clave involucrados
- Fórmula resolvente (Bhaskara)
- Discriminante $\Delta$ y naturaleza de las raíces
- Verificación de soluciones

---

## Ejercicio 4 — Propiedades de Números Reales: Demostración Simple
**Dificultad:** ⭐⭐ Intermedia

### Enunciado
Demostrá que para todo $a \in \mathbb{R}$, se cumple: $(-1) \cdot a = -a$

*(Es decir, demostrar que el opuesto aditivo de $a$ coincide con el producto $(-1)\cdot a$)*

### Resolución paso a paso

**Paso 1: Partir de la propiedad del inverso aditivo.**

Por definición, $-a$ es el único número tal que:
$$a + (-a) = 0$$

Entonces, para demostrar que $(-1)\cdot a = -a$, alcanza con probar que:
$$a + (-1)\cdot a = 0$$

**Paso 2: Usar la propiedad distributiva.**

$$a + (-1)\cdot a = 1\cdot a + (-1)\cdot a$$

*(Usamos que $1\cdot a = a$, elemento neutro del producto)*

$$= [1 + (-1)]\cdot a$$

*(Propiedad distributiva: $b\cdot a + c\cdot a = (b+c)\cdot a$)*

$$= 0 \cdot a$$

*(Propiedad del inverso aditivo de $1$: $1 + (-1) = 0$)*

$$= 0$$

*(Propiedad de absorción: $0 \cdot a = 0$ para todo $a \in \mathbb{R}$)*

**Paso 3: Concluir por unicidad del inverso aditivo.**

Como demostramos que $a + (-1)\cdot a = 0$, y el inverso aditivo de $a$ es **único** en $\mathbb{R}$, necesariamente:
$$(-1)\cdot a = -a \qquad \square$$

### ✅ Respuesta Final
$$\boxed{(-1)\cdot a = -a \text{ para todo } a \in \mathbb{R}}$$
*(demostrado)*

### Conceptos clave involucrados
- Axiomas de $\mathbb{R}$: neutro aditivo, neutro multiplicativo, distributiva
- Unicidad del inverso aditivo
- Demostración formal con propiedades de campo

---

## Ejercicio 5 — Inecuación con Cociente
**Dificultad:** ⭐⭐⭐ Avanzada

### Enunciado
Resolvé la inecuación: $\dfrac{x+1}{x-2} > 3$

### Dominio de validez
$x \neq 2$ (el denominador no puede ser cero)

### Resolución paso a paso

> ⚠️ **Atención:** No se puede multiplicar por $(x-2)$ directamente porque no sabemos su signo. Si fuera negativo, habría que cambiar el sentido de la desigualdad. Usamos el método del signo.

**Paso 1: Llevar todo al mismo miembro.**

$$\frac{x+1}{x-2} - 3 > 0$$

**Paso 2: Reducir a una sola fracción (denominador común $= x-2$).**

$$\frac{x+1}{x-2} - \frac{3(x-2)}{x-2} > 0$$

$$\frac{x+1 - 3(x-2)}{x-2} > 0$$

**Paso 3: Simplificar el numerador.**

$$x + 1 - 3x + 6 = -2x + 7$$

Entonces:
$$\frac{-2x + 7}{x - 2} > 0$$

**Paso 4: Encontrar los valores críticos.**

- Numerador $= 0$: $-2x + 7 = 0 \Rightarrow x = \dfrac{7}{2}$
- Denominador $= 0$: $x - 2 = 0 \Rightarrow x = 2$ *(excluido del dominio)*

**Paso 5: Tabla de signos.**

Los puntos críticos $x = 2$ y $x = \dfrac{7}{2}$ dividen la recta en tres intervalos:

```
         x=2          x=7/2
<---------|------------|---------->
   (-∞,2)   (2, 7/2)   (7/2, +∞)
```

| Intervalo | $-2x+7$ | $x-2$ | Cociente |
|-----------|---------|-------|----------|
| $x < 2$ | $+$ | $-$ | $-$ |
| $2 < x < \frac{7}{2}$ | $+$ | $+$ | $+$ ✓ |
| $x > \frac{7}{2}$ | $-$ | $+$ | $-$ |

*(En $x=2$: no definido. En $x=\frac{7}{2}$: el cociente vale $0$, no satisface $> 0$)*

**Paso 6: Conjunto solución.**

El cociente es **positivo** en el intervalo $\left(2,\ \dfrac{7}{2}\right)$.

### ✅ Respuesta Final
$$\boxed{x \in \left(2,\ \frac{7}{2}\right)}$$

### Conceptos clave involucrados
- Inecuaciones con expresiones racionales
- Tabla de signos (método fundamental)
- Cuidado con el signo del denominador
- Valores críticos y puntos excluidos

---

## Ejercicio 6 — Factorización de Polinomios
**Dificultad:** ⭐⭐ Intermedia

### Enunciado
Factorizá completamente el polinomio: $P(x) = x^3 - 6x^2 + 11x - 6$

### Resolución paso a paso

**Paso 1: Buscar raíces racionales enteras.**

Por el **Teorema de las Raíces Racionales**, las posibles raíces enteras son los divisores del término independiente ($-6$):
$$\text{Candidatos: } \pm 1,\ \pm 2,\ \pm 3,\ \pm 6$$

**Paso 2: Probar candidatos por sustitución directa (Teorema del Resto).**

- $P(1) = 1 - 6 + 11 - 6 = 0$ ✓ → $x = 1$ es raíz

Como $P(1) = 0$, por el **Teorema del Factor**: $(x - 1)$ divide a $P(x)$.

**Paso 3: División de polinomios (división sintética o Ruffini).**

Dividimos $P(x) = x^3 - 6x^2 + 11x - 6$ por $(x-1)$ usando Ruffini:

```
       |  1   -6   11   -6
  x=1  |      1    -5    6
       |------------------
          1   -5    6    0  ← resto = 0 ✓
```

Entonces: $P(x) = (x-1)(x^2 - 5x + 6)$

**Paso 4: Factorizar el cociente cuadrático.**

Para $x^2 - 5x + 6$, buscamos dos números que sumen $-5$ y multipliquen $6$:
$$(-2) + (-3) = -5 \quad \text{y} \quad (-2)\cdot(-3) = 6 \checkmark$$

Por lo tanto:
$$x^2 - 5x + 6 = (x-

---

# Tarea 2 — Profesor de Matemática CBC-UBA

# Resumen Teórico: Números Reales y Álgebra
### Matemática CBC-UBA | Repaso para el Parcial

---

## 1. Valor Absoluto

**Definición:**
$$|a| = \begin{cases} a & \text{si } a \geq 0 \\ -a & \text{si } a < 0 \end{cases}$$

**Propiedad clave para inecuaciones:**
$$|A| \leq k \iff -k \leq A \leq k \qquad (k > 0)$$
$$|A| \geq k \iff A \leq -k \text{ ó } A \geq k \qquad (k > 0)$$

> 💡 **Tip parcial:** Siempre verificá que $k > 0$ antes de aplicar estas equivalencias.

---

## 2. Propiedades de Radicales y Potencias

$$\sqrt{a \cdot b} = \sqrt{a}\cdot\sqrt{b} \qquad \frac{\sqrt{a}}{\sqrt{b}} = \sqrt{\frac{a}{b}} \qquad (a,b \geq 0,\ b \neq 0)$$

**Simplificación:** buscá factores cuadrados perfectos dentro de la raíz.
$$\sqrt{50} = \sqrt{25 \cdot 2} = 5\sqrt{2}$$

---

## 3. Ecuaciones Cuadráticas

**Fórmula resolvente:**
$$x = \frac{-b \pm \sqrt{\Delta}}{2a}, \qquad \Delta = b^2 - 4ac$$

| $\Delta$ | Raíces |
|----------|--------|
| $> 0$ | Dos reales distintas |
| $= 0$ | Una real doble |
| $< 0$ | No hay raíces reales |

> 💡 **Tip parcial:** Siempre **verificá** las soluciones reemplazando en la ecuación original.

---

## 4. Inecuaciones con Cocientes

**Método obligatorio:** tabla de signos.

1. Pasá todo a un miembro y reducí a una sola fracción
2. Identificá los valores críticos (numerador $= 0$ y denominador $= 0$)
3. Construí la tabla de signos por intervalos

> ⚠️ **Nunca** multipliques por una expresión con $x$ sin analizar su signo primero.

---

## 5. Factorización de Polinomios

**Teorema del Resto:** $P(a) = 0 \iff (x - a)$ divide a $P(x)$

**Candidatos a raíces enteras:** divisores del término independiente.

**Regla de Ruffini:** método rápido para dividir por $(x - a)$.

> 💡 **Tip parcial:** Probá primero $x = 1$ y $x = -1$, son los más fáciles de calcular a mano.
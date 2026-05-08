# Matemática CBC-UBA — Unidad 6: Integrales
**Generado:** 07/05/2026 06:58:55
**Cantidad:** 10 ejercicios · **Dificultad:** mixta
**Archivo:** `matematica_cbc_unidad_06_integrales.md` · **Timestamp:** 20260507_065855

---

# Tarea 1 — Profesor de Matemática CBC-UBA

# 📚 Guía de Ejercicios Resueltos: Integrales
### Matemática CBC-UBA | Nivel Mixto

---

> **Temas cubiertos:** Primitivas inmediatas · Sustitución (cambio de variable) · Integración por partes · Fracciones parciales · Integral definida · Áreas entre curvas

---

## EJERCICIO 1 — Integral inmediata con reglas básicas

### 📋 Enunciado
Calculá la siguiente integral indefinida:

$$\int \left( 3x^4 - \frac{2}{x^3} + 5\sqrt{x} - 7 \right) dx$$

---

### ✏️ Resolución paso a paso

**Paso 1: Reescribir la expresión con potencias**

Antes de integrar, convertimos todas las raíces y fracciones a notación de potencia:

$$\frac{2}{x^3} = 2x^{-3} \qquad \sqrt{x} = x^{1/2}$$

Entonces la integral queda:

$$\int \left( 3x^4 - 2x^{-3} + 5x^{1/2} - 7 \right) dx$$

**Paso 2: Aplicar linealidad de la integral**

> **Propiedad (Linealidad):** $\int [f(x) \pm g(x)]\, dx = \int f(x)\, dx \pm \int g(x)\, dx$
> y $\int k \cdot f(x)\, dx = k \int f(x)\, dx$

$$= 3\int x^4\, dx - 2\int x^{-3}\, dx + 5\int x^{1/2}\, dx - 7\int dx$$

**Paso 3: Aplicar la regla de la potencia**

> **Regla de la potencia:** $\int x^n\, dx = \dfrac{x^{n+1}}{n+1} + C \quad (n \neq -1)$

Término a término:

$$3\int x^4\, dx = 3 \cdot \frac{x^5}{5} = \frac{3x^5}{5}$$

$$-2\int x^{-3}\, dx = -2 \cdot \frac{x^{-2}}{-2} = x^{-2} = \frac{1}{x^2}$$

$$5\int x^{1/2}\, dx = 5 \cdot \frac{x^{3/2}}{3/2} = 5 \cdot \frac{2}{3} x^{3/2} = \frac{10}{3}x^{3/2}$$

$$-7\int dx = -7x$$

**Paso 4: Escribir el resultado final**

$$\boxed{\int \left( 3x^4 - \frac{2}{x^3} + 5\sqrt{x} - 7 \right) dx = \frac{3x^5}{5} + \frac{1}{x^2} + \frac{10}{3}x^{3/2} - 7x + C}$$

**⚠️ Observación importante:** La constante de integración $C \in \mathbb{R}$ es **siempre obligatoria** en integrales indefinidas. Omitirla es un error conceptual grave.

---

### 🔑 Conceptos clave
- Integral indefinida como antiderivada
- Linealidad de la integral
- Regla de la potencia para $n \neq -1$
- Constante de integración

---

## EJERCICIO 2 — Integrales de funciones trigonométricas y exponencial

### 📋 Enunciado
Calculá:

$$\int \left( \cos(x) - 3\text{sen}(x) + 2e^x - \frac{4}{x} \right) dx$$

---

### ✏️ Resolución paso a paso

**Paso 1: Separar por linealidad**

$$= \int \cos(x)\, dx - 3\int \text{sen}(x)\, dx + 2\int e^x\, dx - 4\int \frac{1}{x}\, dx$$

**Paso 2: Aplicar primitivas inmediatas**

> **Tabla de primitivas fundamentales:**
> - $\int \cos(x)\, dx = \text{sen}(x) + C$
> - $\int \text{sen}(x)\, dx = -\cos(x) + C$
> - $\int e^x\, dx = e^x + C$
> - $\int \frac{1}{x}\, dx = \ln|x| + C \quad (x \neq 0)$

$$\int \cos(x)\, dx = \text{sen}(x)$$

$$-3\int \text{sen}(x)\, dx = -3 \cdot (-\cos(x)) = 3\cos(x)$$

$$2\int e^x\, dx = 2e^x$$

$$-4\int \frac{1}{x}\, dx = -4\ln|x|$$

**Paso 3: Resultado**

$$\boxed{\int \left( \cos(x) - 3\text{sen}(x) + 2e^x - \frac{4}{x} \right) dx = \text{sen}(x) + 3\cos(x) + 2e^x - 4\ln|x| + C}$$

**✅ Verificación (derivando):**
$$\frac{d}{dx}\left[\text{sen}(x) + 3\cos(x) + 2e^x - 4\ln|x|\right] = \cos(x) - 3\text{sen}(x) + 2e^x - \frac{4}{x} \checkmark$$

---

### 🔑 Conceptos clave
- Primitivas inmediatas trigonométricas y exponenciales
- El valor absoluto en $\ln|x|$ es necesario para cubrir $x < 0$
- Verificación por derivación

---

## EJERCICIO 3 — Cambio de variable (sustitución simple)

### 📋 Enunciado
Calculá la siguiente integral usando cambio de variable:

$$\int x^2 \cdot e^{x^3 + 1}\, dx$$

---

### ✏️ Resolución paso a paso

**Paso 1: Identificar la sustitución conveniente**

> **Idea clave del cambio de variable:** Buscamos una función $u = g(x)$ tal que $g'(x)$ aparezca (o casi aparezca) como factor en el integrando.

Observamos que la derivada de $x^3 + 1$ es $3x^2$, y tenemos $x^2$ en el integrando. ¡Perfecto!

Sea:
$$u = x^3 + 1 \implies du = 3x^2\, dx \implies x^2\, dx = \frac{du}{3}$$

**Paso 2: Sustituir en la integral**

$$\int x^2 \cdot e^{x^3 + 1}\, dx = \int e^u \cdot \frac{du}{3} = \frac{1}{3}\int e^u\, du$$

**Paso 3: Integrar en términos de $u$**

$$\frac{1}{3}\int e^u\, du = \frac{1}{3}e^u + C$$

**Paso 4: Volver a la variable original** (¡no olvidar este paso!)

Reemplazamos $u = x^3 + 1$:

$$\frac{1}{3}e^u + C = \frac{1}{3}e^{x^3+1} + C$$

$$\boxed{\int x^2 \cdot e^{x^3 + 1}\, dx = \frac{1}{3}e^{x^3+1} + C}$$

**✅ Verificación:**
$$\frac{d}{dx}\left[\frac{1}{3}e^{x^3+1}\right] = \frac{1}{3} \cdot e^{x^3+1} \cdot 3x^2 = x^2 e^{x^3+1} \checkmark$$

---

### 🔑 Conceptos clave
- Sustitución $u = g(x)$: se elige $u$ como la función "interior"
- El diferencial $du$ debe aparecer en el integrando
- Siempre volver a la variable original al final

---

## EJERCICIO 4 — Cambio de variable con ajuste de constante

### 📋 Enunciado
Calculá:

$$\int \frac{3x}{\sqrt{x^2 - 5}}\, dx$$

---

### ✏️ Resolución paso a paso

**Dominio de validez:** Se necesita $x^2 - 5 > 0$, es decir $x \in (-\infty, -\sqrt{5}) \cup (\sqrt{5}, +\infty)$

**Paso 1: Elegir la sustitución**

La expresión dentro de la raíz es $x^2 - 5$. Su derivada es $2x$, y tenemos $x$ en el numerador.

Sea:
$$u = x^2 - 5 \implies du = 2x\, dx \implies x\, dx = \frac{du}{2}$$

**Paso 2: Reescribir el integrando**

$$\int \frac{3x}{\sqrt{x^2 - 5}}\, dx = \int \frac{3}{\sqrt{u}} \cdot \frac{du}{2} = \frac{3}{2}\int u^{-1/2}\, du$$

**Paso 3: Aplicar regla de la potencia**

$$\frac{3}{2}\int u^{-1/2}\, du = \frac{3}{2} \cdot \frac{u^{1/2}}{1/2} = \frac{3}{2} \cdot 2\sqrt{u} = 3\sqrt{u} + C$$

**Paso 4: Volver a $x$**

$$3\sqrt{u} + C = 3\sqrt{x^2 - 5} + C$$

$$\boxed{\int \frac{3x}{\sqrt{x^2 - 5}}\, dx = 3\sqrt{x^2 - 5} + C}$$

---

### 🔑 Conceptos clave
- Reconocer la forma $\int \frac{g'(x)}{\sqrt{g(x)}}\, dx$
- Ajuste de la constante numérica al despejar $x\,dx$
- Dominio implícito de la función

---

## EJERCICIO 5 — Integración por partes

### 📋 Enunciado
Calculá la siguiente integral usando integración por partes:

$$\int x \cdot \text{sen}(2x)\, dx$$

---

### ✏️ Resolución paso a paso

**Paso 1: Recordar la fórmula**

> **Integración por partes:** $\int u\, dv = u \cdot v - \int v\, du$
>
> **Regla ILATE** para elegir $u$: **I**nversa trigonométrica → **L**ogarítmica → **A**lgebraica → **T**rigonométrica → **E**xponencial.
> Se elige $u$ como la función de mayor prioridad en la lista.

**Paso 2: Elegir $u$ y $dv$**

Tenemos: polinomio ($x$) y trigonométrica ($\text{sen}(2x)$).

Por ILATE, la función algebraica tiene mayor prioridad → $u = x$

$$u = x \implies du = dx$$
$$dv = \text{sen}(2x)\, dx \implies v = \int \text{sen}(2x)\, dx = -\frac{\cos(2x)}{2}$$

> **Cálculo de $v$:** $\int \text{sen}(2x)\, dx$. Usando que $\int \text{sen}(ax)\, dx = -\dfrac{\cos(ax)}{a}$ obtenemos $v = -\dfrac{\cos(2x)}{2}$.

**Paso 3: Aplicar la fórmula**

$$\int x \cdot \text{sen}(2x)\, dx = x \cdot \left(-\frac{\cos(2x)}{2}\right) - \int \left(-\frac{\cos(2x)}{2}\right) dx$$

$$= -\frac{x\cos(2x)}{2} + \frac{1}{2}\int \cos(2x)\, dx$$

**Paso 4: Resolver la integral restante**

$$\frac{1}{2}\int \cos(2x)\, dx = \frac{1}{2} \cdot \frac{\text{sen}(2x)}{2} = \frac{\text{sen}(2x)}{4}$$

**Paso 5: Resultado final**

$$\boxed{\int x \cdot \text{sen}(2x)\, dx = -\frac{x\cos(2x)}{2} + \frac{\text{sen}(2x)}{4} + C}$$

**✅ Verificación derivando:**
$$\frac{d}{dx}\left[-\frac{x\cos(2x)}{2} + \frac{\text{sen}(2x)}{4}\right]$$
$$= -\frac{1 \cdot \cos(2x) + x \cdot (-2\text{sen}(2x))}{2} + \frac{2\cos(2x)}{4}$$
$$= -\frac{\cos(2x)}{2} + x\,\text{sen}(2x) + \frac{\cos(2x)}{2} = x\,\text{sen}(2x) \checkmark$$

---

### 🔑 Conceptos clave
- Fórmula de integración por partes
- Criterio ILATE para elección de $u$
- La integral resultante debe ser más simple que la original

---

## EJERCICIO 6 — Integración por partes con función logarítmica

### 📋 Enunciado
Calculá:

$$\int x^2 \ln(x)\, dx \quad (x > 0)$$

---

### ✏️ Resolución paso a paso

**Paso 1: Elegir $u$ y $dv$ por ILATE**

Por ILATE, el logaritmo tiene mayor prioridad que el polinomio:

$$u = \ln(x) \implies du = \frac{1}{x}\, dx$$
$$dv = x^2\, dx \implies v = \frac{x^3}{3}$$

**Paso 2: Aplicar integración por partes**

$$\int x^2 \ln(x)\, dx = \ln(x) \cdot \frac{x^3}{3} - \int \frac{x^3}{3} \cdot \frac{1}{x}\, dx$$

$$= \frac{x^3 \ln(x)}{3} - \frac{1}{3}\int x^2\, dx$$

**Paso 3: Resolver la integral restante**

$$\frac{1}{3}\int x^2\, dx = \frac{1}{3} \cdot \frac{x^3}{3} = \frac{x^3}{9}$$

**Paso 4: Resultado final**

$$\boxed{\int x

---

# Tarea 2 — Profesor de Matemática CBC-UBA

# 📝 Resumen Teórico: Integrales
### Matemática CBC-UBA | Material de repaso para parcial

---

## 1. Concepto fundamental

La **integral indefinida** de $f(x)$ es la familia de todas sus antiderivadas:

$$\int f(x)\,dx = F(x) + C \quad \text{donde } F'(x) = f(x),\ C \in \mathbb{R}$$

> ⚠️ **La constante $C$ es obligatoria siempre.** Olvidarla es error conceptual en el parcial.

---

## 2. Primitivas inmediatas que tenés que tener memorizadas

| Función | Primitiva |
|---|---|
| $x^n\ (n\neq -1)$ | $\dfrac{x^{n+1}}{n+1}+C$ |
| $\dfrac{1}{x}$ | $\ln\|x\|+C$ |
| $e^x$ | $e^x+C$ |
| $\text{sen}(x)$ | $-\cos(x)+C$ |
| $\cos(x)$ | $\text{sen}(x)+C$ |

---

## 3. Métodos de integración

### 🔹 Linealidad
$$\int [af(x) \pm bg(x)]\,dx = a\int f(x)\,dx \pm b\int g(x)\,dx$$

### 🔹 Cambio de variable
Elegís $u = g(x)$, calculás $du = g'(x)\,dx$ y reescribís **todo** en términos de $u$. Al final, **siempre volvés a $x$**.

### 🔹 Integración por partes
$$\int u\,dv = u\cdot v - \int v\,du$$
Usá la regla **ILATE** para elegir $u$: **I**nversa trig. → **L**og. → **A**lgebraica → **T**rig. → **E**xponencial.

### 🔹 Fracciones parciales
Para integrar racionales $\frac{P(x)}{Q(x)}$: primero verificá que el grado del numerador sea **menor** que el del denominador (si no, dividís), luego descomponés en fracciones simples según los factores de $Q(x)$.

---

## 4. Integral definida y área

$$\int_a^b f(x)\,dx = F(b) - F(a) \quad \textbf{(Teorema de Barrow)}$$

Para el **área entre dos curvas** $f(x) \geq g(x)$ en $[a,b]$:
$$A = \int_a^b [f(x) - g(x)]\,dx$$

---

## 💡 Tips para el parcial

1. **Verificá siempre derivando** tu resultado: es la única forma de estar 100% seguro.
2. En cambio de variable, **fijate que no quede ninguna $x$ suelta** después de sustituir.
3. En fracciones parciales, **comprobá el grado** antes de arrancar a descomponer.
4. Para el área, identificá primero **cuál curva está arriba** en el intervalo (igualá las funciones para encontrar los puntos de corte).
5. El $\ln|x|$ siempre lleva **valor absoluto**: no lo omitas aunque el ejercicio diga $x > 0$.
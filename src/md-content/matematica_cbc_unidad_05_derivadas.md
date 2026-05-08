# Matemática CBC-UBA — Unidad 5: Derivadas
**Generado:** 07/05/2026 06:57:56
**Cantidad:** 10 ejercicios · **Dificultad:** mixta
**Archivo:** `matematica_cbc_unidad_05_derivadas.md` · **Timestamp:** 20260507_065756

---

# Tarea 1 — Profesor de Matemática CBC-UBA

# 📐 Guía de Ejercicios Resueltos: Derivadas
## Matemática CBC-UBA | Nivel Mixto

---

> **Índice de contenidos:** Derivadas por definición · Reglas básicas · Regla de la cadena · Derivada implícita · Derivada de funciones trascendentes · Aplicaciones (máximos, mínimos, análisis de funciones)

---

## Ejercicio 1 — Derivada por Definición (Nivel Básico)

### Enunciado
Calculá la derivada de $f(x) = 3x^2 - 5x + 2$ usando la **definición de derivada** (límite del cociente incremental).

### Resolución paso a paso

**Definición:** $f'(x) = \displaystyle\lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$

**Paso 1 — Calculamos $f(x+h)$:**
$$f(x+h) = 3(x+h)^2 - 5(x+h) + 2$$
$$= 3(x^2 + 2xh + h^2) - 5x - 5h + 2$$
$$= 3x^2 + 6xh + 3h^2 - 5x - 5h + 2$$

**Paso 2 — Calculamos $f(x+h) - f(x)$:**
$$f(x+h) - f(x) = (3x^2 + 6xh + 3h^2 - 5x - 5h + 2) - (3x^2 - 5x + 2)$$
$$= \cancel{3x^2} + 6xh + 3h^2 - \cancel{5x} - 5h + \cancel{2} - \cancel{3x^2} + \cancel{5x} - \cancel{2}$$
$$= 6xh + 3h^2 - 5h$$

**Paso 3 — Dividimos por $h$:**
$$\frac{f(x+h) - f(x)}{h} = \frac{6xh + 3h^2 - 5h}{h} = \frac{h(6x + 3h - 5)}{h} = 6x + 3h - 5$$

> ⚠️ **Justificación:** Simplificamos $h \neq 0$ porque el límite analiza lo que pasa cuando $h \to 0$, **no** cuando $h = 0$.

**Paso 4 — Tomamos el límite:**
$$f'(x) = \lim_{h \to 0}(6x + 3h - 5) = 6x + 3(0) - 5 = 6x - 5$$

### ✅ Respuesta Final
$$\boxed{f'(x) = 6x - 5}$$

**Conceptos clave:** Definición de derivada como límite, cociente incremental, límite directo.

---

## Ejercicio 2 — Reglas Básicas de Derivación (Nivel Básico)

### Enunciado
Derivá la función $f(x) = 5x^4 - \dfrac{2}{x^3} + \sqrt[5]{x^2} - 7$

### Datos y dominio
El dominio de $f$ es $\mathbb{R} \setminus \{0\}$ (por la presencia de $\frac{1}{x^3}$).

### Resolución paso a paso

**Paso 1 — Reescribimos con potencias:**
$$f(x) = 5x^4 - 2x^{-3} + x^{2/5} - 7$$

> **Justificación:** Usamos las identidades $\dfrac{1}{x^n} = x^{-n}$ y $\sqrt[n]{x^m} = x^{m/n}$ para poder aplicar la **regla de la potencia**: $\dfrac{d}{dx}[x^n] = n \cdot x^{n-1}$

**Paso 2 — Derivamos término a término (linealidad de la derivada):**

| Término | Derivada |
|---------|----------|
| $5x^4$ | $5 \cdot 4x^3 = 20x^3$ |
| $-2x^{-3}$ | $-2 \cdot (-3)x^{-4} = 6x^{-4}$ |
| $x^{2/5}$ | $\dfrac{2}{5}x^{2/5 - 1} = \dfrac{2}{5}x^{-3/5}$ |
| $-7$ | $0$ (constante) |

**Paso 3 — Reescribimos con notación estándar:**
$$f'(x) = 20x^3 + 6x^{-4} + \frac{2}{5}x^{-3/5}$$
$$= 20x^3 + \frac{6}{x^4} + \frac{2}{5\sqrt[5]{x^3}}$$

### ✅ Respuesta Final
$$\boxed{f'(x) = 20x^3 + \frac{6}{x^4} + \frac{2}{5\sqrt[5]{x^3}}}$$

**Conceptos clave:** Regla de la potencia, linealidad de la derivada, reescritura con exponentes racionales.

---

## Ejercicio 3 — Regla del Producto y del Cociente (Nivel Intermedio)

### Enunciado
Calculá la derivada de $g(x) = \dfrac{x^3 \cdot \ln(x)}{x^2 + 1}$

### Resolución paso a paso

Identificamos la estructura: es un **cociente** donde el numerador es un **producto**.

Llamamos:
- $u(x) = x^3 \cdot \ln(x)$ → numerador
- $v(x) = x^2 + 1$ → denominador

**Regla del cociente:** $g'(x) = \dfrac{u'(x) \cdot v(x) - u(x) \cdot v'(x)}{[v(x)]^2}$

---

**Paso 1 — Calculamos $u'(x)$ con la regla del producto:**

$u(x) = x^3 \cdot \ln(x)$, donde $p(x) = x^3$ y $q(x) = \ln(x)$

$$u'(x) = p'(x) \cdot q(x) + p(x) \cdot q'(x)$$
$$u'(x) = 3x^2 \cdot \ln(x) + x^3 \cdot \frac{1}{x}$$
$$u'(x) = 3x^2 \ln(x) + x^2$$

**Paso 2 — Calculamos $v'(x)$:**
$$v'(x) = 2x$$

**Paso 3 — Aplicamos la regla del cociente:**
$$g'(x) = \frac{(3x^2 \ln x + x^2)(x^2 + 1) - x^3 \ln(x) \cdot 2x}{(x^2 + 1)^2}$$

**Paso 4 — Expandimos el numerador:**
$$= \frac{3x^4 \ln x + 3x^2 \ln x + x^4 + x^2 - 2x^4 \ln x}{(x^2 + 1)^2}$$

**Paso 5 — Agrupamos términos con $\ln x$:**
$$= \frac{(3x^4 - 2x^4)\ln x + 3x^2 \ln x + x^4 + x^2}{(x^2 + 1)^2}$$
$$= \frac{x^4 \ln x + 3x^2 \ln x + x^4 + x^2}{(x^2 + 1)^2}$$

**Paso 6 — Factorizamos:**
$$= \frac{x^2(x^2 + 3)\ln x + x^2(x^2 + 1)}{(x^2 + 1)^2}$$
$$= \frac{x^2\big[(x^2 + 3)\ln x + (x^2 + 1)\big]}{(x^2 + 1)^2}$$

### ✅ Respuesta Final
$$\boxed{g'(x) = \frac{x^2\big[(x^2 + 3)\ln x + x^2 + 1\big]}{(x^2 + 1)^2}}$$

**Conceptos clave:** Regla del producto, regla del cociente, derivada del logaritmo natural.

---

## Ejercicio 4 — Regla de la Cadena (Nivel Intermedio)

### Enunciado
Derivá las siguientes funciones aplicando la **regla de la cadena**:

**(a)** $f(x) = (3x^2 - 7x + 1)^8$

**(b)** $h(x) = e^{\sin(x^2)}$

---

### Resolución — Parte (a)

**Regla de la cadena:** Si $f(x) = [g(x)]^n$, entonces $f'(x) = n \cdot [g(x)]^{n-1} \cdot g'(x)$

Identificamos:
- Función exterior: $(\cdot)^8$
- Función interior: $g(x) = 3x^2 - 7x + 1$

**Paso 1:** Derivamos la exterior "dejando la interior intacta":
$$\frac{d}{dx}[g(x)]^8 = 8 \cdot [g(x)]^7$$

**Paso 2:** Multiplicamos por la derivada de la interior:
$$g'(x) = 6x - 7$$

**Paso 3:** Combinamos:
$$f'(x) = 8(3x^2 - 7x + 1)^7 \cdot (6x - 7)$$

### ✅ Respuesta (a)
$$\boxed{f'(x) = 8(6x - 7)(3x^2 - 7x + 1)^7}$$

---

### Resolución — Parte (b)

Aquí hay **dos niveles de cadena** (función compuesta de tres funciones).

Identificamos:
- Capa externa: $e^{(\cdot)}$
- Capa media: $\sin(\cdot)$
- Capa interna: $x^2$

**Paso 1 — Derivamos capa externa:**
$$\frac{d}{d(\sin x^2)}e^{\sin(x^2)} = e^{\sin(x^2)}$$

**Paso 2 — Multiplicamos por la derivada de la capa media:**
$$\frac{d}{dx}\sin(x^2) = \cos(x^2) \cdot \frac{d}{dx}(x^2) = \cos(x^2) \cdot 2x$$

**Paso 3 — Resultado final:**
$$h'(x) = e^{\sin(x^2)} \cdot \cos(x^2) \cdot 2x$$

### ✅ Respuesta (b)
$$\boxed{h'(x) = 2x\cos(x^2) \cdot e^{\sin(x^2)}}$$

**Conceptos clave:** Regla de la cadena simple y múltiple, composición de funciones, derivadas de funciones elementales.

---

## Ejercicio 5 — Derivada de Funciones Trigonométricas e Inversas (Nivel Intermedio)

### Enunciado
Calculá la derivada de $f(x) = \arctan\!\left(\dfrac{x}{\sqrt{1-x^2}}\right)$

*(Dominio: $-1 < x < 1$)*

### Resolución paso a paso

**Paso 1 — Identificamos la estructura:** Es una composición $f = \arctan(g(x))$ con $g(x) = \dfrac{x}{\sqrt{1-x^2}}$.

**Derivada del arctan:** $\dfrac{d}{dx}\arctan(u) = \dfrac{u'}{1 + u^2}$

**Paso 2 — Calculamos $g'(x)$ con la regla del cociente:**

$$g(x) = \frac{x}{(1-x^2)^{1/2}}$$

Numerador: $p = x \Rightarrow p' = 1$

Denominador: $q = (1-x^2)^{1/2} \Rightarrow q' = \dfrac{1}{2}(1-x^2)^{-1/2} \cdot (-2x) = \dfrac{-x}{\sqrt{1-x^2}}$

$$g'(x) = \frac{1 \cdot \sqrt{1-x^2} - x \cdot \dfrac{-x}{\sqrt{1-x^2}}}{1-x^2}$$

$$= \frac{\sqrt{1-x^2} + \dfrac{x^2}{\sqrt{1-x^2}}}{1-x^2}$$

$$= \frac{\dfrac{(1-x^2) + x^2}{\sqrt{1-x^2}}}{1-x^2} = \frac{\dfrac{1}{\sqrt{1-x^2}}}{1-x^2} = \frac{1}{(1-x^2)^{3/2}}$$

**Paso 3 — Calculamos $1 + [g(x)]^2$:**
$$1 + \left(\frac{x}{\sqrt{1-x^2}}\right)^2 = 1 + \frac{x^2}{1-x^2} = \frac{1-x^2+x^2}{1-x^2} = \frac{1}{1-x^2}$$

**Paso 4 — Aplicamos la fórmula:**
$$f'(x) = \frac{g'(x)}{1 + [g(x)]^2} = \dfrac{\dfrac{1}{(1-x^2)^{3/2}}}{\dfrac{1}{1-x^2}} = \frac{1}{(1-x^2)^{3/2}} \cdot (1-x^2) = \frac{1}{\sqrt{1-x^2}}$$

> 💡 **Observación:** Notamos que $f'(x) = \dfrac{1}{\sqrt{1-x^2}}$, que es exactamente la derivada de $\arcsin(x)$. Esto se explica porque $\arctan\!\left(\dfrac{x}{\sqrt{1-x^2}}\right) = \arcsin(x)$ para $x \in (-1,1)$. ¡La derivada lo confirma!

### ✅ Respuesta Final
$$\boxed{f'(x) = \frac{1}{\sqrt{1-x^2}}}$$

**Conceptos clave:** Derivada del arctan, regla de la cadena, álgebra de fracciones, identidad trigonométrica inversa.

---

## Ejercicio 6 — Derivada Implícita (Nivel Intermedio)

### Enunciado
Dada la curva implícita $x^3 + y^3 - 3xy = 0$ (folium de Descartes),

---

# Tarea 2 — Profesor de Matemática CBC-UBA

# 📝 Resumen Teórico: Derivadas
## Matemática CBC-UBA | Guía para el Parcial

---

## 1. Definición Fundamental

La **derivada** de $f$ en $x$ es:

$$f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$$

> ⚠️ **Tip parcial:** Si el límite no existe → $f$ no es derivable en ese punto. Derivable implica continua, **pero no al revés**.

---

## 2. Reglas de Derivación

| Regla | Fórmula |
|-------|---------|
| Potencia | $(x^n)' = n\,x^{n-1}$ |
| Producto | $(u \cdot v)' = u'v + uv'$ |
| Cociente | $\left(\dfrac{u}{v}\right)' = \dfrac{u'v - uv'}{v^2}$ |
| Cadena | $[f(g(x))]' = f'(g(x)) \cdot g'(x)$ |

---

## 3. Derivadas de Funciones Elementales

$$(\ln x)' = \frac{1}{x} \qquad (e^x)' = e^x \qquad (\sin x)' = \cos x \qquad (\cos x)' = -\sin x$$

$$(\arctan x)' = \frac{1}{1+x^2} \qquad (\arcsin x)' = \frac{1}{\sqrt{1-x^2}}$$

---

## 4. Derivada Implícita

Cuando $y$ está definida implícitamente, derivás **ambos miembros** respecto de $x$ tratando a $y$ como función de $x$ y aplicando cadena sobre cada término con $y$.

> ⚠️ **Tip parcial:** Cada vez que derivás $y^n$, el resultado es $n\,y^{n-1} \cdot y'$. ¡No te olvidés el $y'$!

---

## 5. Tips Clave para el Parcial

- **Reescribí antes de derivar:** $\sqrt[n]{x^m} = x^{m/n}$ y $\frac{1}{x^n} = x^{-n}$ te simplifican todo.
- **Cadena múltiple:** identificá las capas de adentro hacia afuera y derivá de afuera hacia adentro.
- **Verificá el dominio:** si hay logaritmos, raíces o denominadores, fijate dónde está definida la función.
- **Factorizá la respuesta:** el profe/la profe agradece y vos ganás puntos de claridad.
# Matemática CBC-UBA — Unidad 3: Trigonometría
**Generado:** 07/05/2026 06:55:54
**Cantidad:** 10 ejercicios · **Dificultad:** mixta
**Archivo:** `matematica_cbc_unidad_03_trigonometria.md` · **Timestamp:** 20260507_065554

---

# Tarea 1 — Profesor de Matemática CBC-UBA

# Guía de Ejercicios Resueltos — Trigonometría
## Matemática CBC-UBA

---

> **Nivel:** Mixto (de menor a mayor complejidad)
> **Temas:** Razones trigonométricas, círculo unitario, identidades, reducción, ecuaciones trigonométricas
> **Destinatarios:** Ingresantes y cursantes del CBC-UBA

---

## Conceptos Previos Clave

Antes de arrancar, recordá el **círculo unitario** y los valores exactos fundamentales:

```
          90° (π/2)
            |
     (0,1)  |
            |
  180° -----+------ 0° (2π)
 (π)  (-1,0)|  (1,0)
            |
     (0,-1) |
          270° (3π/2)

Cuadrante I:   sen > 0, cos > 0, tg > 0
Cuadrante II:  sen > 0, cos < 0, tg < 0
Cuadrante III: sen < 0, cos < 0, tg > 0
Cuadrante IV:  sen < 0, cos > 0, tg < 0
```

| Ángulo | $\sin$ | $\cos$ | $\tan$ |
|--------|--------|--------|--------|
| $0°$ | $0$ | $1$ | $0$ |
| $30°$ | $\frac{1}{2}$ | $\frac{\sqrt{3}}{2}$ | $\frac{\sqrt{3}}{3}$ |
| $45°$ | $\frac{\sqrt{2}}{2}$ | $\frac{\sqrt{2}}{2}$ | $1$ |
| $60°$ | $\frac{\sqrt{3}}{2}$ | $\frac{1}{2}$ | $\sqrt{3}$ |
| $90°$ | $1$ | $0$ | no existe |

---

## Ejercicio 1 — Razones Trigonométricas Básicas

### 📌 Enunciado
En un triángulo rectángulo, el cateto opuesto al ángulo $\alpha$ mide $3$ y la hipotenusa mide $5$. Calculá todas las razones trigonométricas de $\alpha$.

### Datos
- Cateto opuesto: $co = 3$
- Hipotenusa: $h = 5$
- Dominio: $\alpha \in (0°, 90°)$

### Resolución paso a paso

**Paso 1 — Calcular el cateto adyacente con el Teorema de Pitágoras:**

$$h^2 = co^2 + ca^2 \implies ca^2 = h^2 - co^2 = 25 - 9 = 16$$

$$\boxed{ca = 4}$$

**Paso 2 — Calcular las razones trigonométricas usando las definiciones:**

> **Justificación:** Por definición en triángulo rectángulo, $\sin\alpha = \dfrac{\text{cateto opuesto}}{\text{hipotenusa}}$, etc.

$$\sin\alpha = \frac{co}{h} = \frac{3}{5}$$

$$\cos\alpha = \frac{ca}{h} = \frac{4}{5}$$

$$\tan\alpha = \frac{co}{ca} = \frac{3}{4}$$

**Paso 3 — Calcular las razones recíprocas:**

$$\csc\alpha = \frac{1}{\sin\alpha} = \frac{5}{3}$$

$$\sec\alpha = \frac{1}{\cos\alpha} = \frac{5}{4}$$

$$\cot\alpha = \frac{1}{\tan\alpha} = \frac{4}{3}$$

**Paso 4 — Verificación con identidad fundamental:**

$$\sin^2\alpha + \cos^2\alpha = \left(\frac{3}{5}\right)^2 + \left(\frac{4}{5}\right)^2 = \frac{9}{25} + \frac{16}{25} = \frac{25}{25} = 1 \checkmark$$

### ✅ Respuesta Final

$$\sin\alpha = \frac{3}{5}, \quad \cos\alpha = \frac{4}{5}, \quad \tan\alpha = \frac{3}{4}, \quad \csc\alpha = \frac{5}{3}, \quad \sec\alpha = \frac{5}{4}, \quad \cot\alpha = \frac{4}{3}$$

**Conceptos clave:** Triángulo rectángulo, Teorema de Pitágoras, definición de razones trigonométricas, identidad fundamental $\sin^2\alpha + \cos^2\alpha = 1$.

---

## Ejercicio 2 — Ángulo en Cuadrante II

### 📌 Enunciado
Sabiendo que $\cos\alpha = -\dfrac{5}{13}$ con $\alpha \in \left(\dfrac{\pi}{2}, \pi\right)$, calculá $\sin\alpha$, $\tan\alpha$ y $\cot\alpha$.

### Datos
- $\cos\alpha = -\dfrac{5}{13}$
- $\alpha$ está en el **Cuadrante II**: $\sin\alpha > 0$, $\tan\alpha < 0$

### Resolución paso a paso

**Paso 1 — Calcular $\sin\alpha$ usando la identidad fundamental:**

> **Justificación:** La identidad $\sin^2\alpha + \cos^2\alpha = 1$ vale para todo $\alpha \in \mathbb{R}$.

$$\sin^2\alpha = 1 - \cos^2\alpha = 1 - \left(-\frac{5}{13}\right)^2 = 1 - \frac{25}{169} = \frac{169 - 25}{169} = \frac{144}{169}$$

$$\sin\alpha = \pm\frac{12}{13}$$

**Paso 2 — Determinar el signo correcto:**

Como $\alpha \in \left(\dfrac{\pi}{2}, \pi\right)$ (Cuadrante II), el seno es **positivo**:

$$\sin\alpha = +\frac{12}{13}$$

**Paso 3 — Calcular $\tan\alpha$:**

$$\tan\alpha = \frac{\sin\alpha}{\cos\alpha} = \frac{\frac{12}{13}}{-\frac{5}{13}} = \frac{12}{13} \cdot \left(-\frac{13}{5}\right) = -\frac{12}{5}$$

Notá que el signo negativo es coherente con estar en el Cuadrante II. ✓

**Paso 4 — Calcular $\cot\alpha$:**

$$\cot\alpha = \frac{1}{\tan\alpha} = \frac{1}{-\frac{12}{5}} = -\frac{5}{12}$$

### ✅ Respuesta Final

$$\sin\alpha = \frac{12}{13}, \qquad \tan\alpha = -\frac{12}{5}, \qquad \cot\alpha = -\frac{5}{12}$$

**Conceptos clave:** Identidad pitagórica, signos por cuadrante, determinación unívoca del signo según el cuadrante dado.

---

## Ejercicio 3 — Valores Exactos de Ángulos Notables

### 📌 Enunciado
Calculá el valor exacto de la siguiente expresión:

$$E = 2\sin 60° \cdot \cos 30° - \tan 45° + \frac{\cos 0°}{\sin 90°}$$

### Resolución paso a paso

**Paso 1 — Reemplazar cada razón trigonométrica por su valor exacto:**

> **Justificación:** Se usan los valores exactos del triángulo equilátero ($30°$-$60°$-$90°$) y el triángulo isósceles rectángulo ($45°$-$45°$-$90°$).

$$\sin 60° = \frac{\sqrt{3}}{2}, \quad \cos 30° = \frac{\sqrt{3}}{2}, \quad \tan 45° = 1, \quad \cos 0° = 1, \quad \sin 90° = 1$$

**Paso 2 — Sustituir en la expresión:**

$$E = 2 \cdot \frac{\sqrt{3}}{2} \cdot \frac{\sqrt{3}}{2} - 1 + \frac{1}{1}$$

**Paso 3 — Resolver el primer término:**

$$2 \cdot \frac{\sqrt{3}}{2} \cdot \frac{\sqrt{3}}{2} = 2 \cdot \frac{\sqrt{3} \cdot \sqrt{3}}{4} = 2 \cdot \frac{3}{4} = \frac{6}{4} = \frac{3}{2}$$

**Paso 4 — Combinar todos los términos:**

$$E = \frac{3}{2} - 1 + 1 = \frac{3}{2}$$

### ✅ Respuesta Final

$$\boxed{E = \dfrac{3}{2}}$$

**Conceptos clave:** Tabla de valores exactos, operaciones algebraicas con radicales, simplificación de fracciones.

---

## Ejercicio 4 — Reducción al Primer Cuadrante

### 📌 Enunciado
Calculá el valor exacto de:

$$F = \sin\left(\frac{5\pi}{6}\right) + \cos\left(\frac{4\pi}{3}\right) - \tan\left(\frac{7\pi}{4}\right)$$

### Resolución paso a paso

**Paso 1 — Analizar cada ángulo y reducir al ángulo de referencia:**

> **Justificación:** El ángulo de referencia es el ángulo agudo formado con el eje de abscisas. El signo depende del cuadrante.

**Para $\dfrac{5\pi}{6}$ (150°) — Cuadrante II:**

$$\frac{5\pi}{6} = \pi - \frac{\pi}{6} \implies \text{ángulo de referencia: } \frac{\pi}{6} = 30°$$

En el Cuadrante II, $\sin > 0$:

$$\sin\left(\frac{5\pi}{6}\right) = +\sin\left(\frac{\pi}{6}\right) = +\frac{1}{2}$$

**Para $\dfrac{4\pi}{3}$ (240°) — Cuadrante III:**

$$\frac{4\pi}{3} = \pi + \frac{\pi}{3} \implies \text{ángulo de referencia: } \frac{\pi}{3} = 60°$$

En el Cuadrante III, $\cos < 0$:

$$\cos\left(\frac{4\pi}{3}\right) = -\cos\left(\frac{\pi}{3}\right) = -\frac{1}{2}$$

**Para $\dfrac{7\pi}{4}$ (315°) — Cuadrante IV:**

$$\frac{7\pi}{4} = 2\pi - \frac{\pi}{4} \implies \text{ángulo de referencia: } \frac{\pi}{4} = 45°$$

En el Cuadrante IV, $\tan < 0$:

$$\tan\left(\frac{7\pi}{4}\right) = -\tan\left(\frac{\pi}{4}\right) = -1$$

**Paso 2 — Sustituir y calcular:**

$$F = \frac{1}{2} + \left(-\frac{1}{2}\right) - (-1) = \frac{1}{2} - \frac{1}{2} + 1 = 0 + 1 = 1$$

### ✅ Respuesta Final

$$\boxed{F = 1}$$

**Conceptos clave:** Ángulo de referencia, reducción al primer cuadrante, regla de signos por cuadrante (regla "CAST" o "ASCT").

---

## Ejercicio 5 — Verificación de Identidad Trigonométrica

### 📌 Enunciado
Demostrá la siguiente identidad trigonométrica:

$$\frac{\sin\alpha}{1 - \cos\alpha} = \frac{1 + \cos\alpha}{\sin\alpha}$$

### Datos
- Dominio: $\alpha \in \mathbb{R}$ tal que $\sin\alpha \neq 0$ y $\cos\alpha \neq 1$

### Resolución paso a paso

> **Estrategia:** Partimos del miembro izquierdo (ML) y llegamos al miembro derecho (MD), o bien demostramos que ML $-$ MD $= 0$.

**Método — Multiplicar en ML por la expresión conjugada:**

> **Justificación:** Multiplicamos y dividimos por $(1 + \cos\alpha)$, que es el conjugado del denominador. Esto se puede hacer porque no altera el valor de la expresión.

$$\text{ML} = \frac{\sin\alpha}{1 - \cos\alpha} \cdot \frac{1 + \cos\alpha}{1 + \cos\alpha}$$

**Paso 1 — Multiplicar numerador y denominador:**

$$= \frac{\sin\alpha \cdot (1 + \cos\alpha)}{(1 - \cos\alpha)(1 + \cos\alpha)}$$

**Paso 2 — Aplicar diferencia de cuadrados en el denominador:**

> **Justificación:** $(a-b)(a+b) = a^2 - b^2$

$$(1 - \cos\alpha)(1 + \cos\alpha) = 1 - \cos^2\alpha$$

**Paso 3 — Aplicar la identidad fundamental en el denominador:**

> **Justificación:** De $\sin^2\alpha + \cos^2\alpha = 1$ se deduce que $1 - \cos^2\alpha = \sin^2\alpha$

$$= \frac{\sin\alpha \cdot (1 + \cos\alpha)}{\sin^2\alpha}$$

**Paso 4 — Simplificar:**

$$= \frac{\cancel{\sin\alpha} \cdot (1 + \cos\alpha)}{\sin^{\cancel{2}}\alpha} = \frac{1 + \cos\alpha}{\sin\alpha} = \text{MD} \checkmark$$

### ✅ Respuesta Final

> La identidad queda demostrada: $\dfrac{\sin\alpha}{1 - \cos\alpha} = \dfrac{1 + \cos\alpha}{\sin\alpha}$ ✓

**Conceptos clave:** Identidad fundamental, diferencia de cuadrados, conjugado de una expresión, manipulación algebraica de identidades.

---

## Ejercicio 6 — Simplificación de Expresión Trigonométrica

### 📌 Enunciado
Simplificá la expresión:

$$G = \frac{\tan^2\theta - \sin^2\theta}{\tan^2\theta \cdot \sin^2\theta}$$

### Resolución paso a paso

**Paso 1 — Expresar $\tan\theta$ en función de $\sin\theta$ y $\cos\theta$:**

> **Justificación:** Por definición, $\tan\theta = \dfrac{\sin\theta}{\cos\theta}$

---

# Tarea 2 — Profesor de Matemática CBC-UBA

# Resumen Teórico — Trigonometría
## Matemática CBC-UBA

---

## 1. Razones Trigonométricas

En un **triángulo rectángulo** con ángulo agudo $\alpha$:

$$\sin\alpha = \frac{co}{h} \qquad \cos\alpha = \frac{ca}{h} \qquad \tan\alpha = \frac{co}{ca}$$

Las **razones recíprocas**: $\csc\alpha = \dfrac{1}{\sin\alpha}$, $\sec\alpha = \dfrac{1}{\cos\alpha}$, $\cot\alpha = \dfrac{1}{\tan\alpha}$

---

## 2. Identidades Fundamentales

$$\sin^2\alpha + \cos^2\alpha = 1 \qquad \tan\alpha = \frac{\sin\alpha}{\cos\alpha} \qquad \cot\alpha = \frac{\cos\alpha}{\sin\alpha}$$

De la primera se derivan:
$$1 + \tan^2\alpha = \sec^2\alpha \qquad 1 + \cot^2\alpha = \csc^2\alpha$$

---

## 3. Signos por Cuadrante

| Cuadrante | $\sin$ | $\cos$ | $\tan$ |
|:---------:|:------:|:------:|:------:|
| I | $+$ | $+$ | $+$ |
| II | $+$ | $-$ | $-$ |
| III | $-$ | $-$ | $+$ |
| IV | $-$ | $+$ | $-$ |

> **Mnemotécnico:** "Todos Son Cordiales Aquí" (I→todas, II→sin, III→tan, IV→cos)

---

## 4. Valores Exactos Clave

| $\alpha$ | $0°$ | $30°$ | $45°$ | $60°$ | $90°$ |
|----------|------|-------|-------|-------|-------|
| $\sin$ | $0$ | $\frac{1}{2}$ | $\frac{\sqrt{2}}{2}$ | $\frac{\sqrt{3}}{2}$ | $1$ |
| $\cos$ | $1$ | $\frac{\sqrt{3}}{2}$ | $\frac{\sqrt{2}}{2}$ | $\frac{1}{2}$ | $0$ |

> **Truco:** Los senos de $0°$ a $90°$ son $\dfrac{\sqrt{0}}{2}, \dfrac{\sqrt{1}}{2}, \dfrac{\sqrt{2}}{2}, \dfrac{\sqrt{3}}{2}, \dfrac{\sqrt{4}}{2}$.

---

## 5. Reducción al Primer Cuadrante

Expresá el ángulo como referencia al eje $x$ y ajustá el signo según el cuadrante:

$$\sin(\pi - \alpha) = +\sin\alpha \qquad \cos(\pi + \alpha) = -\cos\alpha \qquad \tan(2\pi - \alpha) = -\tan\alpha$$

---

## 6. Tips para el Parcial ⚡

- **Siempre** indicá el cuadrante antes de determinar signos.
- Para **identidades**: trabajá un solo miembro, nunca los dos simultáneamente.
- Cuando aparezca $1 - \cos\alpha$ o $1 + \cos\alpha$, pensá en **conjugado + identidad pitagórica**.
- Convertí todo a $\sin$ y $\cos$ cuando no veas el camino.
- **Verificá** con la identidad fundamental al final: $\sin^2\alpha + \cos^2\alpha = 1$.
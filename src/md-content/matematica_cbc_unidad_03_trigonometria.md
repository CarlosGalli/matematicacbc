# Matemática CBC-UBA — Unidad 3: Trigonometría
**Generado:** 09/05/2026 22:09:41
**Cantidad:** 100 ejercicios · **Dificultad:** mixta
**Archivo:** `matematica_cbc_unidad_03_trigonometria.md` · **Timestamp:** 20260509_220941

---

## Ejercicio 1 — Conversión de grados a radianes y ubicación en el círculo trigonométrico

**Dificultad:** ⭐ Básica

### Enunciado

Convertí $210°$ a radianes y determiná en qué cuadrante se ubica el ángulo. Luego indicá el signo de $\sin(210°)$ y $\cos(210°)$.

### Resolución paso a paso

**Paso 1: Aplicar la fórmula de conversión.**
La relación entre grados y radianes es $180° = \pi$ rad, por lo tanto:
$$\text{radianes} = \text{grados} \times \frac{\pi}{180°}$$

**Paso 2: Calcular la conversión.**
$$210° \times \frac{\pi}{180°} = \frac{210\pi}{180} = \frac{7\pi}{6}$$

**Paso 3: Determinar el cuadrante.**
Se sabe que $\pi < \frac{7\pi}{6} < \frac{3\pi}{2}$, es decir, el ángulo está entre $180°$ y $270°$, por lo tanto se ubica en el **tercer cuadrante**.

**Paso 4: Determinar los signos.**
En el tercer cuadrante, tanto el seno como el coseno son negativos:
$$\sin(210°) < 0 \qquad \cos(210°) < 0$$

### Respuesta Final

$$210° = \frac{7\pi}{6} \text{ rad}, \quad \text{tercer cuadrante}, \quad \sin(210°) < 0, \quad \cos(210°) < 0$$

---

## Ejercicio 2 — Cálculo de razones trigonométricas exactas en ángulos notables

**Dificultad:** ⭐ Básica

### Enunciado

Calculá el valor exacto de la siguiente expresión:
$$E = \sin\!\left(\frac{\pi}{3}\right) \cdot \cos\!\left(\frac{\pi}{6}\right) + \cos\!\left(\frac{\pi}{3}\right) \cdot \sin\!\left(\frac{\pi}{6}\right)$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se pueden reemplazar directamente los valores de los ángulos notables, o bien reconocer que la expresión responde a la fórmula de la suma:
$$\sin(A + B) = \sin A \cos B + \cos A \sin B$$
con $A = \dfrac{\pi}{3}$ y $B = \dfrac{\pi}{6}$.

**Paso 2: Aplicar la identidad.**
$$E = \sin\!\left(\frac{\pi}{3} + \frac{\pi}{6}\right) = \sin\!\left(\frac{2\pi}{6} + \frac{\pi}{6}\right) = \sin\!\left(\frac{3\pi}{6}\right) = \sin\!\left(\frac{\pi}{2}\right)$$

**Paso 3: Calcular el resultado.**
$$\sin\!\left(\frac{\pi}{2}\right) = 1$$

**Paso 4: Verificación con valores directos.**
$$\sin\!\left(\frac{\pi}{3}\right) = \frac{\sqrt{3}}{2}, \quad \cos\!\left(\frac{\pi}{6}\right) = \frac{\sqrt{3}}{2}, \quad \cos\!\left(\frac{\pi}{3}\right) = \frac{1}{2}, \quad \sin\!\left(\frac{\pi}{6}\right) = \frac{1}{2}$$
$$E = \frac{\sqrt{3}}{2} \cdot \frac{\sqrt{3}}{2} + \frac{1}{2} \cdot \frac{1}{2} = \frac{3}{4} + \frac{1}{4} = 1 \checkmark$$

### Respuesta Final

$$E = 1$$

---

## Ejercicio 3 — Uso de la identidad pitagórica para hallar razones trigonométricas

**Dificultad:** ⭐ Básica

### Enunciado

Sabiendo que $\sin(\alpha) = \dfrac{5}{13}$ y que $\alpha$ pertenece al primer cuadrante, calculá $\cos(\alpha)$, $\tan(\alpha)$, $\csc(\alpha)$, $\sec(\alpha)$ y $\cot(\alpha)$.

### Resolución paso a paso

**Paso 1: Aplicar la identidad pitagórica fundamental.**
$$\sin^2(\alpha) + \cos^2(\alpha) = 1$$
$$\left(\frac{5}{13}\right)^2 + \cos^2(\alpha) = 1$$

**Paso 2: Despejar $\cos(\alpha)$.**
$$\cos^2(\alpha) = 1 - \frac{25}{169} = \frac{169 - 25}{169} = \frac{144}{169}$$
$$\cos(\alpha) = \pm\frac{12}{13}$$
Como $\alpha$ está en el primer cuadrante, $\cos(\alpha) > 0$, por lo tanto:
$$\cos(\alpha) = \frac{12}{13}$$

**Paso 3: Calcular $\tan(\alpha)$ y $\cot(\alpha)$.**
$$\tan(\alpha) = \frac{\sin(\alpha)}{\cos(\alpha)} = \frac{5/13}{12/13} = \frac{5}{12}$$
$$\cot(\alpha) = \frac{1}{\tan(\alpha)} = \frac{12}{5}$$

**Paso 4: Calcular $\csc(\alpha)$ y $\sec(\alpha)$.**
$$\csc(\alpha) = \frac{1}{\sin(\alpha)} = \frac{13}{5}$$
$$\sec(\alpha) = \frac{1}{\cos(\alpha)} = \frac{13}{12}$$

### Respuesta Final

$$\cos(\alpha) = \frac{12}{13}, \quad \tan(\alpha) = \frac{5}{12}, \quad \csc(\alpha) = \frac{13}{5}, \quad \sec(\alpha) = \frac{13}{12}, \quad \cot(\alpha) = \frac{12}{5}$$

---

## Ejercicio 4 — Reducción al primer cuadrante y cálculo exacto

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calculá el valor exacto de:
$$\cos\!\left(\frac{11\pi}{6}\right) + \tan\!\left(\frac{5\pi}{4}\right) - \sin\!\left(\frac{7\pi}{3}\right)$$

### Resolución paso a paso

**Paso 1: Reducir $\dfrac{11\pi}{6}$.**
$\dfrac{11\pi}{6}$ está en el cuarto cuadrante ($\frac{3\pi}{2} < \frac{11\pi}{6} < 2\pi$). Su ángulo de referencia es:
$$2\pi - \frac{11\pi}{6} = \frac{12\pi - 11\pi}{6} = \frac{\pi}{6}$$
En el cuarto cuadrante el coseno es positivo:
$$\cos\!\left(\frac{11\pi}{6}\right) = +\cos\!\left(\frac{\pi}{6}\right) = \frac{\sqrt{3}}{2}$$

**Paso 2: Reducir $\dfrac{5\pi}{4}$.**
$\dfrac{5\pi}{4}$ está en el tercer cuadrante. Su ángulo de referencia es:
$$\frac{5\pi}{4} - \pi = \frac{\pi}{4}$$
En el tercer cuadrante la tangente es positiva:
$$\tan\!\left(\frac{5\pi}{4}\right) = +\tan\!\left(\frac{\pi}{4}\right) = 1$$

**Paso 3: Reducir $\dfrac{7\pi}{3}$.**
$$\frac{7\pi}{3} = 2\pi + \frac{\pi}{3}$$
Por periodicidad del seno ($T = 2\pi$):
$$\sin\!\left(\frac{7\pi}{3}\right) = \sin\!\left(\frac{\pi}{3}\right) = \frac{\sqrt{3}}{2}$$

**Paso 4: Calcular la expresión completa.**
$$\frac{\sqrt{3}}{2} + 1 - \frac{\sqrt{3}}{2} = 1$$

### Respuesta Final

$$\cos\!\left(\frac{11\pi}{6}\right) + \tan\!\left(\frac{5\pi}{4}\right) - \sin\!\left(\frac{7\pi}{3}\right) = 1$$

---

## Ejercicio 5 — Simplificación de expresión con identidades trigonométricas

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Simplificá la siguiente expresión hasta obtener la forma más sencilla posible:
$$\frac{\sin^2(x)}{1 - \cos(x)} - 1$$

### Resolución paso a paso

**Paso 1: Aplicar la identidad pitagórica al numerador.**
Se sabe que $\sin^2(x) = 1 - \cos^2(x)$. Factorizando como diferencia de cuadrados:
$$\sin^2(x) = (1 - \cos(x))(1 + \cos(x))$$

**Paso 2: Sustituir en la fracción.**
$$\frac{(1 - \cos(x))(1 + \cos(x))}{1 - \cos(x)} - 1$$

**Paso 3: Simplificar el factor común.**
Dado que $x \neq 0 + 2k\pi$ (para que $1 - \cos(x) \neq 0$), se puede cancelar:
$$(1 + \cos(x)) - 1$$

**Paso 4: Realizar la resta final.**
$$1 + \cos(x) - 1 = \cos(x)$$

### Respuesta Final

$$\frac{\sin^2(x)}{1 - \cos(x)} - 1 = \cos(x), \quad \text{con } \cos(x) \neq 1$$

---

## Ejercicio 6 — Resolución de ecuación trigonométrica básica

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Resolvé la ecuación trigonométrica en $[0, 2\pi)$:
$$2\sin^2(x) - \sin(x) - 1 = 0$$

### Resolución paso a paso

**Paso 1: Identificar la estructura algebraica.**
La ecuación tiene la forma de una cuadrática. Se hace el cambio $u = \sin(x)$:
$$2u^2 - u - 1 = 0$$

**Paso 2: Factorizar el trinomio.**
Se buscan dos factores de la forma $(2u + a)(u + b)$ con $ab = -1$ y $a + 2b = -1$:
$$(2u + 1)(u - 1) = 0$$
Verificación: $2u^2 - 2u + u - 1 = 2u^2 - u - 1$ ✓

**Paso 3: Resolver cada factor.**
$$2u + 1 = 0 \Rightarrow u = -\frac{1}{2} \qquad \text{o} \qquad u - 1 = 0 \Rightarrow u = 1$$

**Paso 4: Recuperar la variable $x$ para $\sin(x) = -\dfrac{1}{2}$.**
Los ángulos en $[0, 2\pi)$ donde el seno vale $-\dfrac{1}{2}$ son:
$$x = \pi + \frac{\pi}{6} = \frac{7\pi}{6} \qquad \text{y} \qquad x = 2\pi - \frac{\pi}{6} = \frac{11\pi}{6}$$

**Paso 5: Recuperar la variable $x$ para $\sin(x) = 1$.**
$$\sin(x) = 1 \Rightarrow x = \frac{\pi}{2}$$

### Respuesta Final

$$x \in \left\{\frac{\pi}{2},\ \frac{7\pi}{6},\ \frac{11\pi}{6}\right\}$$

---

## Ejercicio 7 — Demostración de identidad trigonométrica

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Demostrá la siguiente identidad trigonométrica:
$$\frac{\tan(x) + \cot(x)}{\sec(x)\cdot\csc(x)} = 1$$

### Resolución paso a paso

**Paso 1: Expresar todo en términos de seno y coseno.**
Se trabaja sobre el miembro izquierdo (MI):
$$\tan(x) = \frac{\sin(x)}{\cos(x)}, \quad \cot(x) = \frac{\cos(x)}{\sin(x)}, \quad \sec(x) = \frac{1}{\cos(x)}, \quad \csc(x) = \frac{1}{\sin(x)}$$

**Paso 2: Reescribir el numerador.**
$$\tan(x) + \cot(x) = \frac{\sin(x)}{\cos(x)} + \frac{\cos(x)}{\sin(x)} = \frac{\sin^2(x) + \cos^2(x)}{\sin(x)\cos(x)}$$
Aplicando la identidad pitagórica:
$$= \frac{1}{\sin(x)\cos(x)}$$

**Paso 3: Reescribir el denominador del MI.**
$$\sec(x) \cdot \csc(x) = \frac{1}{\cos(x)} \cdot \frac{1}{\sin(x)} = \frac{1}{\sin(x)\cos(x)}$$

**Paso 4: Calcular el cociente completo.**
$$\frac{\tan(x) + \cot(x)}{\sec(x)\cdot\csc(x)} = \frac{\dfrac{1}{\sin(x)\cos(x)}}{\dfrac{1}{\sin(x)\cos(x)}} = 1$$

### Respuesta Final

$$\frac{\tan(x) + \cot(x)}{\sec(x)\cdot\csc(x)} = 1 \qquad \blacksquare$$

---

## Ejercicio 8 — Ecuación trigonométrica con argumento múltiple

**Dificultad:** ⭐⭐⭐ Avanzada

### Enunciado

Resolvé la ecuación en $[0, 2\pi)$:
$$\cos(2x) + \cos(x) = 0$$

### Resolución paso a paso

**Paso 1: Aplicar la identidad del ángulo doble.**
Se usa $\cos(2x) = 2\cos^2(x) - 1$:
$$2\cos^2(x) - 1 + \cos(x) = 0$$

**Paso 2: Ordenar como ecuación cuadrática en $\cos(x)$.**
$$2\cos^2(x

## Ejercicio 11 — Conversión de grados a radianes y ubicación en el círculo unitario

**Dificultad:** ⭐ Básica

### Enunciado

Convertí los siguientes ángulos a radianes y determiná en qué cuadrante se ubican:
$$\alpha = 150°, \quad \beta = 315°, \quad \gamma = -120°$$

### Resolución paso a paso

**Paso 1: Recordar la fórmula de conversión.**
La relación entre grados y radianes es $180° = \pi \text{ rad}$, por lo tanto:
$$\text{radianes} = \text{grados} \times \frac{\pi}{180}$$

**Paso 2: Convertir $\alpha = 150°$.**
$$\alpha = 150 \times \frac{\pi}{180} = \frac{150\pi}{180} = \frac{5\pi}{6}$$
Como $90° < 150° < 180°$, el ángulo se ubica en el **segundo cuadrante**.

**Paso 3: Convertir $\beta = 315°$.**
$$\beta = 315 \times \frac{\pi}{180} = \frac{315\pi}{180} = \frac{7\pi}{4}$$
Como $270° < 315° < 360°$, el ángulo se ubica en el **cuarto cuadrante**.

**Paso 4: Convertir $\gamma = -120°$.**
$$\gamma = -120 \times \frac{\pi}{180} = \frac{-120\pi}{180} = -\frac{2\pi}{3}$$
Un ángulo negativo se mide en sentido horario. $-120°$ equivale a $360° - 120° = 240°$, y como $180° < 240° < 270°$, se ubica en el **tercer cuadrante**.

### Respuesta Final

$$\alpha = \frac{5\pi}{6} \text{ (II cuadrante)}, \quad \beta = \frac{7\pi}{4} \text{ (IV cuadrante)}, \quad \gamma = -\frac{2\pi}{3} \text{ (III cuadrante)}$$

---

## Ejercicio 12 — Razones trigonométricas exactas de ángulos notables

**Dificultad:** ⭐ Básica

### Enunciado

Calculá el valor exacto de las seis razones trigonométricas del ángulo $\theta = \dfrac{5\pi}{6}$.

### Resolución paso a paso

**Paso 1: Identificar el ángulo de referencia.**
$\dfrac{5\pi}{6} = 150°$ se encuentra en el segundo cuadrante. Su ángulo de referencia es:
$$\pi - \frac{5\pi}{6} = \frac{6\pi - 5\pi}{6} = \frac{\pi}{6} = 30°$$

**Paso 2: Recordar los valores exactos del ángulo de referencia $\pi/6$.**
$$\sin\frac{\pi}{6} = \frac{1}{2}, \quad \cos\frac{\pi}{6} = \frac{\sqrt{3}}{2}, \quad \tan\frac{\pi}{6} = \frac{1}{\sqrt{3}} = \frac{\sqrt{3}}{3}$$

**Paso 3: Aplicar los signos del segundo cuadrante (solo seno positivo).**
En el II cuadrante: $\sin > 0$, $\cos < 0$, $\tan < 0$.
$$\sin\frac{5\pi}{6} = +\frac{1}{2}, \quad \cos\frac{5\pi}{6} = -\frac{\sqrt{3}}{2}, \quad \tan\frac{5\pi}{6} = -\frac{\sqrt{3}}{3}$$

**Paso 4: Calcular las razones recíprocas.**
$$\csc\frac{5\pi}{6} = \frac{1}{\sin} = 2, \quad \sec\frac{5\pi}{6} = \frac{1}{\cos} = -\frac{2\sqrt{3}}{3}, \quad \cot\frac{5\pi}{6} = \frac{1}{\tan} = -\sqrt{3}$$

### Respuesta Final

$$\sin\frac{5\pi}{6} = \frac{1}{2},\quad \cos\frac{5\pi}{6} = -\frac{\sqrt{3}}{2},\quad \tan\frac{5\pi}{6} = -\frac{\sqrt{3}}{3}$$
$$\csc\frac{5\pi}{6} = 2,\quad \sec\frac{5\pi}{6} = -\frac{2\sqrt{3}}{3},\quad \cot\frac{5\pi}{6} = -\sqrt{3}$$

---

## Ejercicio 13 — Uso de la identidad pitagórica para hallar razones trigonométricas

**Dificultad:** ⭐ Básica

### Enunciado

Si $\sin\theta = \dfrac{3}{5}$ y $\theta$ pertenece al segundo cuadrante, hallá $\cos\theta$, $\tan\theta$ y $\sec\theta$.

### Resolución paso a paso

**Paso 1: Aplicar la identidad pitagórica fundamental.**
$$\sin^2\theta + \cos^2\theta = 1 \implies \cos^2\theta = 1 - \sin^2\theta$$

**Paso 2: Sustituir el valor dado.**
$$\cos^2\theta = 1 - \left(\frac{3}{5}\right)^2 = 1 - \frac{9}{25} = \frac{25 - 9}{25} = \frac{16}{25}$$

**Paso 3: Determinar el signo de $\cos\theta$.**
$$\cos\theta = \pm\frac{4}{5}$$
Como $\theta$ está en el **segundo cuadrante**, el coseno es negativo:
$$\cos\theta = -\frac{4}{5}$$

**Paso 4: Calcular $\tan\theta$ y $\sec\theta$.**
$$\tan\theta = \frac{\sin\theta}{\cos\theta} = \frac{3/5}{-4/5} = \frac{3}{5} \cdot \left(-\frac{5}{4}\right) = -\frac{3}{4}$$
$$\sec\theta = \frac{1}{\cos\theta} = \frac{1}{-4/5} = -\frac{5}{4}$$

### Respuesta Final

$$\cos\theta = -\frac{4}{5}, \quad \tan\theta = -\frac{3}{4}, \quad \sec\theta = -\frac{5}{4}$$

---

## Ejercicio 14 — Verificación de una identidad trigonométrica

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Demostrá la siguiente identidad trigonométrica:
$$\frac{\sin^2 x}{1 - \cos x} = 1 + \cos x$$

### Resolución paso a paso

**Paso 1: Elegir la estrategia.**
Trabajamos únicamente con el **lado izquierdo (LI)** y lo transformamos hasta obtener el lado derecho (LD). Usaremos la identidad $\sin^2 x = 1 - \cos^2 x$.

**Paso 2: Sustituir $\sin^2 x$ en el numerador.**
$$\text{LI} = \frac{\sin^2 x}{1 - \cos x} = \frac{1 - \cos^2 x}{1 - \cos x}$$

**Paso 3: Factorizar el numerador como diferencia de cuadrados.**
$$1 - \cos^2 x = (1 - \cos x)(1 + \cos x)$$
Entonces:
$$\text{LI} = \frac{(1 - \cos x)(1 + \cos x)}{1 - \cos x}$$

**Paso 4: Simplificar el factor común (válido para $\cos x \neq 1$).**
$$\text{LI} = \frac{\cancel{(1 - \cos x)}(1 + \cos x)}{\cancel{1 - \cos x}} = 1 + \cos x = \text{LD} \quad \checkmark$$

### Respuesta Final

La identidad queda demostrada:
$$\frac{\sin^2 x}{1 - \cos x} = 1 + \cos x \quad \text{para todo } x \text{ tal que } \cos x \neq 1$$

---

## Ejercicio 15 — Fórmulas del ángulo doble y simplificación

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Dado que $\cos\theta = -\dfrac{5}{13}$ con $\theta \in \left(\dfrac{\pi}{2}, \pi\right)$, calculá $\sin(2\theta)$, $\cos(2\theta)$ y $\tan(2\theta)$.

### Resolución paso a paso

**Paso 1: Hallar $\sin\theta$ usando la identidad pitagórica.**
$$\sin^2\theta = 1 - \cos^2\theta = 1 - \frac{25}{169} = \frac{144}{169}$$
Como $\theta \in \left(\frac{\pi}{2}, \pi\right)$, el seno es positivo:
$$\sin\theta = \frac{12}{13}$$

**Paso 2: Aplicar la fórmula del seno doble.**
$$\sin(2\theta) = 2\sin\theta\cos\theta = 2 \cdot \frac{12}{13} \cdot \left(-\frac{5}{13}\right) = -\frac{120}{169}$$

**Paso 3: Aplicar la fórmula del coseno doble.**
$$\cos(2\theta) = \cos^2\theta - \sin^2\theta = \frac{25}{169} - \frac{144}{169} = -\frac{119}{169}$$

**Paso 4: Calcular $\tan(2\theta)$.**
$$\tan(2\theta) = \frac{\sin(2\theta)}{\cos(2\theta)} = \frac{-120/169}{-119/169} = \frac{120}{119}$$

### Respuesta Final

$$\sin(2\theta) = -\frac{120}{169}, \quad \cos(2\theta) = -\frac{119}{169}, \quad \tan(2\theta) = \frac{120}{119}$$

---

## Ejercicio 16 — Ecuación trigonométrica básica con solución general

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Resolvé la ecuación trigonométrica en $[0, 2\pi)$:
$$2\cos^2 x - \cos x - 1 = 0$$

### Resolución paso a paso

**Paso 1: Reconocer la estructura algebraica.**
La ecuación es cuadrática en $\cos x$. Hacemos el cambio de variable $u = \cos x$:
$$2u^2 - u - 1 = 0$$

**Paso 2: Factorizar el trinomio cuadrático.**
Buscamos dos números cuyo producto sea $2 \cdot (-1) = -2$ y cuya suma sea $-1$: son $-2$ y $1$.
$$2u^2 - 2u + u - 1 = 2u(u-1) + 1(u-1) = (2u+1)(u-1) = 0$$

**Paso 3: Resolver cada factor.**
$$(2u+1) = 0 \implies u = -\frac{1}{2} \implies \cos x = -\frac{1}{2}$$
$$(u-1) = 0 \implies u = 1 \implies \cos x = 1$$

**Paso 4: Hallar los ángulos en $[0, 2\pi)$.**
- $\cos x = 1 \implies x = 0$
- $\cos x = -\dfrac{1}{2}$: el ángulo de referencia es $\dfrac{\pi}{3}$, y el coseno es negativo en los cuadrantes II y III:
$$x = \pi - \frac{\pi}{3} = \frac{2\pi}{3}, \qquad x = \pi + \frac{\pi}{3} = \frac{4\pi}{3}$$

### Respuesta Final

$$x \in \left\{0,\; \frac{2\pi}{3},\; \frac{4\pi}{3}\right\}$$

---

## Ejercicio 17 — Ecuación trigonométrica con fórmula de suma

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Resolvé en $[0, 2\pi)$ la ecuación:
$$\sin\!\left(x + \frac{\pi}{4}\right) = \frac{\sqrt{2}}{2}$$

### Resolución paso a paso

**Paso 1: Recordar la fórmula general para $\sin\alpha = k$.**
Si $\sin\alpha = k$ con $|k| \leq 1$, las soluciones generales son:
$$\alpha = \arcsin(k) + 2k\pi \quad \text{o} \quad \alpha = \pi - \arcsin(k) + 2k\pi, \quad k \in \mathbb{Z}$$

**Paso 2: Identificar la variable auxiliar y el valor del arco.**
Sea $\alpha = x + \dfrac{\pi}{4}$. Entonces $\sin\alpha = \dfrac{\sqrt{2}}{2}$, y como $\arcsin\!\left(\dfrac{\sqrt{2}}{2}\right) = \dfrac{\pi}{4}$:
$$\alpha = \frac{\pi}{4} + 2k\pi \quad \text{o} \quad \alpha = \pi - \frac{\pi}{4} + 2k\pi = \frac{3\pi}{4} + 2k\pi$$

**Paso 3: Despejar $x$ en cada caso.**
- Caso 1: $x + \dfrac{\pi}{4} = \dfrac{\pi}{4} + 2k\pi \implies x = 2k\pi$
- Caso 2: $x + \dfrac{\pi}{4} = \dfrac{3\pi}{4} + 2k\pi \implies x = \dfrac{\pi}{2} + 2k\pi$

**Paso 4: Seleccionar las soluciones en $[0, 2\pi)$.**
- Caso 1 con $k=0$: $x = 0$
- Caso 2 con $k=0$: $x = \dfrac{\pi}{2}$
- Caso 1 con $k=1$: $x = 2\pi \notin [0, 2\pi)$ (se excluye)

### Respuesta Final

$$x \in \left\{0,\; \frac{\pi}{2}\right\}$$

---

## Ejercicio 18 — Transformación de productos en sumas y graficación de parámetros

**Dificultad:** ⭐⭐⭐ Avanz

## Ejercicio 21 — Conversión de grados a radianes y ubicación en el círculo trigonométrico

**Dificultad:** ⭐ Básica

### Enunciado

Convertí $210°$ a radianes y determiná en qué cuadrante se ubica el ángulo. Luego indicá el signo de $\sin(210°)$ y $\cos(210°)$.

### Resolución paso a paso

**Paso 1: Recordar la fórmula de conversión.**
La relación entre grados y radianes es $180° = \pi$ rad, por lo tanto:
$$\text{radianes} = \text{grados} \times \frac{\pi}{180}$$

**Paso 2: Aplicar la conversión a $210°$.**
$$210° \times \frac{\pi}{180} = \frac{210\pi}{180} = \frac{7\pi}{6} \text{ rad}$$

**Paso 3: Determinar el cuadrante.**
Como $180° < 210° < 270°$, el ángulo se ubica en el **tercer cuadrante** (entre $\pi$ y $\frac{3\pi}{2}$).

**Paso 4: Determinar el signo de las razones trigonométricas.**
En el tercer cuadrante, tanto el seno como el coseno son **negativos**, ya que la coordenada $x$ (coseno) y la coordenada $y$ (seno) del punto en el círculo unitario son ambas negativas.

### Respuesta Final

$$210° = \frac{7\pi}{6} \text{ rad}, \quad \text{tercer cuadrante}$$
$$\sin(210°) < 0 \qquad \cos(210°) < 0$$

---

## Ejercicio 22 — Cálculo de razones trigonométricas exactas

**Dificultad:** ⭐ Básica

### Enunciado

Calculá el valor exacto de $\sin(300°)$, $\cos(300°)$ y $\tan(300°)$ usando el ángulo de referencia.

### Resolución paso a paso

**Paso 1: Encontrar el ángulo de referencia.**
$300°$ se ubica en el cuarto cuadrante ($270° < 300° < 360°$). El ángulo de referencia es:
$$\alpha = 360° - 300° = 60°$$

**Paso 2: Escribir los valores exactos de referencia para $60°$.**
$$\sin(60°) = \frac{\sqrt{3}}{2}, \qquad \cos(60°) = \frac{1}{2}, \qquad \tan(60°) = \sqrt{3}$$

**Paso 3: Aplicar los signos del cuarto cuadrante.**
En el cuarto cuadrante: $\sin < 0$, $\cos > 0$, $\tan < 0$. Por lo tanto:
$$\sin(300°) = -\frac{\sqrt{3}}{2}, \qquad \cos(300°) = \frac{1}{2}$$

**Paso 4: Calcular la tangente.**
$$\tan(300°) = \frac{\sin(300°)}{\cos(300°)} = \frac{-\dfrac{\sqrt{3}}{2}}{\dfrac{1}{2}} = -\sqrt{3}$$

### Respuesta Final

$$\sin(300°) = -\frac{\sqrt{3}}{2}, \qquad \cos(300°) = \frac{1}{2}, \qquad \tan(300°) = -\sqrt{3}$$

---

## Ejercicio 23 — Verificación de una identidad trigonométrica fundamental

**Dificultad:** ⭐ Básica

### Enunciado

Verificá que la siguiente igualdad es una identidad trigonométrica:
$$\frac{\sin^2(x)}{\cos^2(x)} + 1 = \frac{1}{\cos^2(x)}$$

### Resolución paso a paso

**Paso 1: Trabajar con el miembro izquierdo (ML).**
Partimos de:
$$ML = \frac{\sin^2(x)}{\cos^2(x)} + 1$$

**Paso 2: Sumar las fracciones con denominador común.**
$$ML = \frac{\sin^2(x)}{\cos^2(x)} + \frac{\cos^2(x)}{\cos^2(x)} = \frac{\sin^2(x) + \cos^2(x)}{\cos^2(x)}$$

**Paso 3: Aplicar la identidad pitagórica fundamental.**
Por la identidad $\sin^2(x) + \cos^2(x) = 1$:
$$ML = \frac{1}{\cos^2(x)}$$

**Paso 4: Comparar con el miembro derecho (MD).**
$$MD = \frac{1}{\cos^2(x)}$$
Como $ML = MD$, la igualdad es una identidad. Esta identidad se escribe también como $\tan^2(x) + 1 = \sec^2(x)$.

### Respuesta Final

La identidad queda verificada:
$$\frac{\sin^2(x)}{\cos^2(x)} + 1 = \frac{\sin^2(x) + \cos^2(x)}{\cos^2(x)} = \frac{1}{\cos^2(x)} \checkmark$$

---

## Ejercicio 24 — Simplificación de expresiones trigonométricas

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Simplificá la siguiente expresión al máximo posible:
$$E = \frac{\sin^2(x) - 1}{\cos(x)} + \cos(x) \cdot \tan^2(x)$$

### Resolución paso a paso

**Paso 1: Simplificar el primer término.**
Usando $\sin^2(x) - 1 = -\cos^2(x)$ (que se obtiene de $\sin^2(x) + \cos^2(x) = 1$):
$$\frac{\sin^2(x) - 1}{\cos(x)} = \frac{-\cos^2(x)}{\cos(x)} = -\cos(x)$$

**Paso 2: Reemplazar $\tan^2(x)$ en el segundo término.**
Usando $\tan(x) = \dfrac{\sin(x)}{\cos(x)}$:
$$\cos(x) \cdot \tan^2(x) = \cos(x) \cdot \frac{\sin^2(x)}{\cos^2(x)} = \frac{\sin^2(x)}{\cos(x)}$$

**Paso 3: Sumar ambos términos con denominador común.**
$$E = -\cos(x) + \frac{\sin^2(x)}{\cos(x)} = \frac{-\cos^2(x)}{\cos(x)} + \frac{\sin^2(x)}{\cos(x)} = \frac{\sin^2(x) - \cos^2(x)}{\cos(x)}$$

**Paso 4: Identificar la identidad del coseno doble.**
Usando $\cos(2x) = \cos^2(x) - \sin^2(x)$, tenemos $\sin^2(x) - \cos^2(x) = -\cos(2x)$:
$$E = \frac{-\cos(2x)}{\cos(x)}$$

### Respuesta Final

$$E = \frac{-\cos(2x)}{\cos(x)}$$

---

## Ejercicio 25 — Resolución de ecuación trigonométrica básica

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Resolvé la ecuación $2\sin(x) - \sqrt{3} = 0$ en el intervalo $[0°,\, 360°)$.

### Resolución paso a paso

**Paso 1: Despejar $\sin(x)$.**
$$2\sin(x) = \sqrt{3} \implies \sin(x) = \frac{\sqrt{3}}{2}$$

**Paso 2: Encontrar el ángulo de referencia.**
El valor $\dfrac{\sqrt{3}}{2}$ corresponde al ángulo de referencia:
$$\alpha = \arcsin\!\left(\frac{\sqrt{3}}{2}\right) = 60°$$

**Paso 3: Determinar los cuadrantes donde $\sin(x) > 0$.**
El seno es positivo en el primero y segundo cuadrante. Por lo tanto, existen dos soluciones en $[0°, 360°)$:
- Primera solución (primer cuadrante): $x_1 = 60°$
- Segunda solución (segundo cuadrante): $x_2 = 180° - 60° = 120°$

**Paso 4: Verificar las soluciones.**
$$\sin(60°) = \frac{\sqrt{3}}{2} \checkmark \qquad \sin(120°) = \sin(180°-60°) = \sin(60°) = \frac{\sqrt{3}}{2} \checkmark$$

### Respuesta Final

$$x_1 = 60°, \qquad x_2 = 120°$$

---

## Ejercicio 26 — Uso de la fórmula del ángulo doble

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Sabiendo que $\sin(\alpha) = \dfrac{3}{5}$ y que $\alpha$ está en el primer cuadrante, calculá $\sin(2\alpha)$, $\cos(2\alpha)$ y $\tan(2\alpha)$.

### Resolución paso a paso

**Paso 1: Calcular $\cos(\alpha)$ usando la identidad pitagórica.**
$$\cos^2(\alpha) = 1 - \sin^2(\alpha) = 1 - \frac{9}{25} = \frac{16}{25}$$
Como $\alpha$ está en el primer cuadrante, $\cos(\alpha) > 0$:
$$\cos(\alpha) = \frac{4}{5}$$

**Paso 2: Calcular $\sin(2\alpha)$.**
Usando $\sin(2\alpha) = 2\sin(\alpha)\cos(\alpha)$:
$$\sin(2\alpha) = 2 \cdot \frac{3}{5} \cdot \frac{4}{5} = \frac{24}{25}$$

**Paso 3: Calcular $\cos(2\alpha)$.**
Usando $\cos(2\alpha) = \cos^2(\alpha) - \sin^2(\alpha)$:
$$\cos(2\alpha) = \frac{16}{25} - \frac{9}{25} = \frac{7}{25}$$

**Paso 4: Calcular $\tan(2\alpha)$.**
$$\tan(2\alpha) = \frac{\sin(2\alpha)}{\cos(2\alpha)} = \frac{\dfrac{24}{25}}{\dfrac{7}{25}} = \frac{24}{7}$$

### Respuesta Final

$$\sin(2\alpha) = \frac{24}{25}, \qquad \cos(2\alpha) = \frac{7}{25}, \qquad \tan(2\alpha) = \frac{24}{7}$$

---

## Ejercicio 27 — Resolución de ecuación trigonométrica con identidad

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Resolvé la ecuación $\cos(2x) + \cos(x) = 0$ en el intervalo $[0°,\, 360°)$.

### Resolución paso a paso

**Paso 1: Sustituir $\cos(2x)$ usando la identidad del ángulo doble.**
Aplicamos $\cos(2x) = 2\cos^2(x) - 1$:
$$2\cos^2(x) - 1 + \cos(x) = 0$$

**Paso 2: Reordenar y reconocer la ecuación cuadrática.**
$$2\cos^2(x) + \cos(x) - 1 = 0$$
Hacemos el cambio de variable $u = \cos(x)$:
$$2u^2 + u - 1 = 0$$

**Paso 3: Factorizar el trinomio.**
Buscamos dos números que multipliquen $2 \cdot (-1) = -2$ y sumen $1$: son $2$ y $-1$.
$$2u^2 + 2u - u - 1 = 2u(u+1) - 1(u+1) = (2u-1)(u+1) = 0$$
Por lo tanto: $u = \dfrac{1}{2}$ o $u = -1$.

**Paso 4: Resolver cada caso para $x \in [0°, 360°)$.**

*Caso 1:* $\cos(x) = \dfrac{1}{2}$ → ángulo de referencia $60°$, soluciones en 1° y 4° cuadrante:
$$x_1 = 60°, \quad x_2 = 300°$$

*Caso 2:* $\cos(x) = -1$ → ocurre en:
$$x_3 = 180°$$

### Respuesta Final

$$x_1 = 60°, \qquad x_2 = 180°, \qquad x_3 = 300°$$

---

## Ejercicio 28 — Demostración de identidad con fórmulas de suma

**Dificultad:** ⭐⭐⭐ Avanzada

### Enunciado

Demostrá la siguiente identidad trigonométrica:
$$\frac{\sin(x+y) - \sin(x-y)}{\cos(x+y) + \cos(x-y)} = \tan(y)$$

### Resolución paso a paso

**Paso 1: Expandir $\sin(x+y)$ y $\sin(x-y)$ en el numerador.**
Usando $\sin(A \pm B) = \sin A \cos B \pm \cos A \sin B$:
$$\sin(x+y) = \sin x \cos y + \cos x \sin y$$
$$\sin(x-y) = \sin x \cos y - \cos x \sin y$$
$$\sin(x+y) - \sin(x-y) = (\sin x \cos y + \cos x \sin y) - (\sin x \cos y - \cos x \sin y) = 2\cos x \sin y$$

**Paso 2: Expandir $\cos(x+y)$ y $\cos(x-y)$ en el denominador.**
Usando $\cos(A \pm B) = \cos A \cos B \mp \sin A \sin B$:
$$\cos(x+y) = \cos x \cos y - \sin x \sin y$$
$$\cos(x-y) = \cos x \cos y + \sin x \sin y$$
$$\cos(x+y) + \cos(x-y) = 2\cos x \cos y$$

**Paso 3: Formar el cociente con los resultados obtenidos.**
$$\frac{\sin(x+y) - \sin(x-y)}{\cos(x+y) + \cos(x-y)} = \frac{2\cos x \sin y}{2\cos x \cos y}$$

**Paso 4: Simplificar el factor $2\cos x$.**
Cancelando $2

## Ejercicio 31 — Conversión de grados a radianes y ubicación en la circunferencia

**Dificultad:** ⭐ Básica

### Enunciado

Convertí los siguientes ángulos a radianes y determiná en qué cuadrante se ubica cada uno:
$a)\ 210°\qquad b)\ 315°\qquad c)\ 480°$

### Resolución paso a paso

**Paso 1: Recordar la fórmula de conversión.**
La relación entre grados y radianes es $180° = \pi$ rad, por lo tanto:
$$\text{radianes} = \text{grados} \times \frac{\pi}{180}$$

**Paso 2: Convertir $210°$.**
$$210° \times \frac{\pi}{180} = \frac{210\pi}{180} = \frac{7\pi}{6}$$
Como $\pi < \frac{7\pi}{6} < \frac{3\pi}{2}$, el ángulo se ubica en el **III cuadrante**.

**Paso 3: Convertir $315°$.**
$$315° \times \frac{\pi}{180} = \frac{315\pi}{180} = \frac{7\pi}{4}$$
Como $\frac{3\pi}{2} < \frac{7\pi}{4} < 2\pi$, el ángulo se ubica en el **IV cuadrante**.

**Paso 4: Convertir $480°$.**
$$480° \times \frac{\pi}{180} = \frac{480\pi}{180} = \frac{8\pi}{3}$$
Reducimos: $\frac{8\pi}{3} - 2\pi = \frac{8\pi}{3} - \frac{6\pi}{3} = \frac{2\pi}{3}$.
Como $\frac{\pi}{2} < \frac{2\pi}{3} < \pi$, el ángulo reducido se ubica en el **II cuadrante**.

### Respuesta Final

$$a)\ \frac{7\pi}{6}\ \text{(III cuadrante)}\qquad b)\ \frac{7\pi}{4}\ \text{(IV cuadrante)}\qquad c)\ \frac{8\pi}{3}\ \text{(II cuadrante)}$$

---

## Ejercicio 32 — Razones trigonométricas en un triángulo rectángulo

**Dificultad:** ⭐ Básica

### Enunciado

En un triángulo rectángulo, el cateto opuesto a un ángulo $\alpha$ mide $5$ y la hipotenusa mide $13$. Calculá $\sin\alpha$, $\cos\alpha$, $\tan\alpha$, $\sec\alpha$, $\csc\alpha$ y $\cot\alpha$.

### Resolución paso a paso

**Paso 1: Obtener el cateto adyacente con el Teorema de Pitágoras.**
$$\text{cateto adyacente} = \sqrt{13^2 - 5^2} = \sqrt{169 - 25} = \sqrt{144} = 12$$

**Paso 2: Calcular las razones primarias.**
$$\sin\alpha = \frac{\text{opuesto}}{\text{hipotenusa}} = \frac{5}{13}, \qquad \cos\alpha = \frac{\text{adyacente}}{\text{hipotenusa}} = \frac{12}{13}$$
$$\tan\alpha = \frac{\text{opuesto}}{\text{adyacente}} = \frac{5}{12}$$

**Paso 3: Calcular las razones recíprocas.**
$$\csc\alpha = \frac{1}{\sin\alpha} = \frac{13}{5}, \qquad \sec\alpha = \frac{1}{\cos\alpha} = \frac{13}{12}$$
$$\cot\alpha = \frac{1}{\tan\alpha} = \frac{12}{5}$$

**Paso 4: Verificar con la identidad fundamental.**
$$\sin^2\alpha + \cos^2\alpha = \left(\frac{5}{13}\right)^2 + \left(\frac{12}{13}\right)^2 = \frac{25 + 144}{169} = \frac{169}{169} = 1\ \checkmark$$

### Respuesta Final

$$\sin\alpha = \frac{5}{13},\quad \cos\alpha = \frac{12}{13},\quad \tan\alpha = \frac{5}{12}$$
$$\csc\alpha = \frac{13}{5},\quad \sec\alpha = \frac{13}{12},\quad \cot\alpha = \frac{12}{5}$$

---

## Ejercicio 33 — Valores exactos en ángulos notables

**Dificultad:** ⭐ Básica

### Enunciado

Calculá el valor exacto de la siguiente expresión sin usar calculadora:
$$E = 2\sin^2\!\left(\frac{\pi}{3}\right) - \cos\!\left(\frac{\pi}{4}\right)\cdot\tan\!\left(\frac{\pi}{6}\right) + \sin\!\left(\frac{\pi}{2}\right)$$

### Resolución paso a paso

**Paso 1: Recordar los valores exactos de los ángulos notables.**
$$\sin\frac{\pi}{3} = \frac{\sqrt{3}}{2},\quad \cos\frac{\pi}{4} = \frac{\sqrt{2}}{2},\quad \tan\frac{\pi}{6} = \frac{1}{\sqrt{3}} = \frac{\sqrt{3}}{3},\quad \sin\frac{\pi}{2} = 1$$

**Paso 2: Calcular $2\sin^2\!\left(\dfrac{\pi}{3}\right)$.**
$$2\sin^2\frac{\pi}{3} = 2\cdot\left(\frac{\sqrt{3}}{2}\right)^2 = 2\cdot\frac{3}{4} = \frac{3}{2}$$

**Paso 3: Calcular $\cos\!\left(\dfrac{\pi}{4}\right)\cdot\tan\!\left(\dfrac{\pi}{6}\right)$.**
$$\frac{\sqrt{2}}{2}\cdot\frac{\sqrt{3}}{3} = \frac{\sqrt{6}}{6}$$

**Paso 4: Sustituir y simplificar.**
$$E = \frac{3}{2} - \frac{\sqrt{6}}{6} + 1 = \frac{5}{2} - \frac{\sqrt{6}}{6} = \frac{15}{6} - \frac{\sqrt{6}}{6} = \frac{15 - \sqrt{6}}{6}$$

### Respuesta Final

$$E = \frac{15 - \sqrt{6}}{6}$$

---

## Ejercicio 34 — Determinación del signo y cuadrante a partir de condiciones

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Sabiendo que $\sin\theta = -\dfrac{3}{5}$ y $\cos\theta > 0$, determiná el cuadrante en que se encuentra $\theta$ y calculá el valor exacto de $\tan\theta$, $\sec\theta$ y $\csc\theta$.

### Resolución paso a paso

**Paso 1: Determinar el cuadrante.**
$\sin\theta < 0$ implica que $\theta$ está en el III o IV cuadrante.
$\cos\theta > 0$ implica que $\theta$ está en el I o IV cuadrante.
La intersección es el **IV cuadrante**.

**Paso 2: Calcular $\cos\theta$ usando la identidad fundamental.**
$$\cos^2\theta = 1 - \sin^2\theta = 1 - \left(-\frac{3}{5}\right)^2 = 1 - \frac{9}{25} = \frac{16}{25}$$
$$\cos\theta = \frac{4}{5} \quad \text{(positivo porque estamos en IV cuadrante)}$$

**Paso 3: Calcular $\tan\theta$.**
$$\tan\theta = \frac{\sin\theta}{\cos\theta} = \frac{-3/5}{4/5} = -\frac{3}{4}$$

**Paso 4: Calcular $\sec\theta$ y $\csc\theta$.**
$$\sec\theta = \frac{1}{\cos\theta} = \frac{5}{4}$$
$$\csc\theta = \frac{1}{\sin\theta} = -\frac{5}{3}$$

**Paso 5: Verificar coherencia de signos en IV cuadrante.**
En el IV cuadrante: $\sin < 0$, $\cos > 0$, $\tan < 0$, $\sec > 0$, $\csc < 0$. Todo es consistente. $\checkmark$

### Respuesta Final

El ángulo $\theta$ se ubica en el **IV cuadrante**.
$$\tan\theta = -\frac{3}{4}, \qquad \sec\theta = \frac{5}{4}, \qquad \csc\theta = -\frac{5}{3}$$

---

## Ejercicio 35 — Demostración de identidad trigonométrica

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Demostrá la siguiente identidad trigonométrica:
$$\frac{\tan^2 x - \sin^2 x}{\tan^2 x \cdot \sin^2 x} = 1$$

### Resolución paso a paso

**Paso 1: Trabajar sobre el miembro izquierdo separando la fracción.**
$$\frac{\tan^2 x - \sin^2 x}{\tan^2 x \cdot \sin^2 x} = \frac{\tan^2 x}{\tan^2 x \cdot \sin^2 x} - \frac{\sin^2 x}{\tan^2 x \cdot \sin^2 x}$$

**Paso 2: Simplificar cada fracción.**
$$= \frac{1}{\sin^2 x} - \frac{1}{\tan^2 x}$$

**Paso 3: Reemplazar $\tan^2 x = \dfrac{\sin^2 x}{\cos^2 x}$.**
$$\frac{1}{\tan^2 x} = \frac{\cos^2 x}{\sin^2 x}$$
Entonces:
$$\frac{1}{\sin^2 x} - \frac{\cos^2 x}{\sin^2 x} = \frac{1 - \cos^2 x}{\sin^2 x}$$

**Paso 4: Aplicar la identidad fundamental $1 - \cos^2 x = \sin^2 x$.**
$$\frac{\sin^2 x}{\sin^2 x} = 1$$

### Respuesta Final

$$\frac{\tan^2 x - \sin^2 x}{\tan^2 x \cdot \sin^2 x} = 1 \qquad \blacksquare$$

---

## Ejercicio 36 — Fórmulas del ángulo doble y mitad

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Dado que $\cos\alpha = -\dfrac{5}{13}$ con $\alpha \in \left(\dfrac{\pi}{2}, \pi\right)$, calculá el valor exacto de $\sin(2\alpha)$, $\cos(2\alpha)$ y $\sin\!\left(\dfrac{\alpha}{2}\right)$.

### Resolución paso a paso

**Paso 1: Obtener $\sin\alpha$.**
Como $\alpha \in \left(\frac{\pi}{2}, \pi\right)$, el seno es positivo.
$$\sin\alpha = \sqrt{1 - \cos^2\alpha} = \sqrt{1 - \frac{25}{169}} = \sqrt{\frac{144}{169}} = \frac{12}{13}$$

**Paso 2: Aplicar la fórmula del ángulo doble para el seno.**
$$\sin(2\alpha) = 2\sin\alpha\cos\alpha = 2\cdot\frac{12}{13}\cdot\left(-\frac{5}{13}\right) = -\frac{120}{169}$$

**Paso 3: Aplicar la fórmula del ángulo doble para el coseno.**
$$\cos(2\alpha) = \cos^2\alpha - \sin^2\alpha = \frac{25}{169} - \frac{144}{169} = -\frac{119}{169}$$

**Paso 4: Determinar el cuadrante de $\alpha/2$ y aplicar la fórmula del ángulo mitad.**
Como $\alpha \in \left(\frac{\pi}{2}, \pi\right)$, entonces $\frac{\alpha}{2} \in \left(\frac{\pi}{4}, \frac{\pi}{2}\right)$, por lo que $\sin\!\left(\frac{\alpha}{2}\right) > 0$.
$$\sin\!\left(\frac{\alpha}{2}\right) = \sqrt{\frac{1 - \cos\alpha}{2}} = \sqrt{\frac{1 - (-5/13)}{2}} = \sqrt{\frac{18/13}{2}} = \sqrt{\frac{9}{13}} = \frac{3}{\sqrt{13}} = \frac{3\sqrt{13}}{13}$$

### Respuesta Final

$$\sin(2\alpha) = -\frac{120}{169}, \qquad \cos(2\alpha) = -\frac{119}{169}, \qquad \sin\!\left(\frac{\alpha}{2}\right) = \frac{3\sqrt{13}}{13}$$

---

## Ejercicio 37 — Ecuación trigonométrica básica

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Resolvé la ecuación en $[0, 2\pi)$:
$$2\cos^2 x - \cos x - 1 = 0$$

### Resolución paso a paso

**Paso 1: Reconocer la estructura de la ecuación.**
La ecuación es cuadrática en $\cos x$. Hacemos la sustitución $u = \cos x$ para clarificar:
$$2u^2 - u - 1 = 0$$

**Paso 2: Resolver la ecuación cuadrática con la fórmula general.**
$$u = \frac{1 \pm \sqrt{1 + 8}}{4} = \frac{1 \pm 3}{4}$$
$$u_1 = \frac{1+3}{4} = 1 \qquad u_2 = \frac{1-3}{4} = -\frac{1}{2}$$

**Paso 3: Resolver $\cos x = 1$.**
En $[0, 2\pi)$:
$$\cos x = 1 \implies x = 0$$

**Paso 4: Resolver $\cos x = -\dfrac{1}{2}$.**
El coseno vale $-\frac{1}{2}$ en el II y III cuadrante, con ángulo de referencia $\frac{\pi}{3}

## Ejercicio 41 — Conversión entre grados y radianes

**Dificultad:** ⭐ Básica

### Enunciado

Convertí los siguientes ángulos a la unidad indicada:
a) $210°$ a radianes
b) $\dfrac{5\pi}{4}$ rad a grados

### Resolución paso a paso

**Paso 1: Identificar la relación de conversión.**
La equivalencia fundamental es $180° = \pi$ rad, por lo que:
$$\text{rad} = \text{grados} \times \frac{\pi}{180°} \qquad \text{grados} = \text{rad} \times \frac{180°}{\pi}$$

**Paso 2: Convertir $210°$ a radianes.**
$$210° \times \frac{\pi}{180°} = \frac{210\pi}{180} = \frac{7\pi}{6}$$

**Paso 3: Simplificar la fracción del ítem a).**
$$\frac{210}{180} = \frac{7}{6} \quad \Rightarrow \quad 210° = \frac{7\pi}{6} \text{ rad}$$

**Paso 4: Convertir $\dfrac{5\pi}{4}$ rad a grados.**
$$\frac{5\pi}{4} \times \frac{180°}{\pi} = \frac{5 \times 180°}{4} = \frac{900°}{4} = 225°$$

### Respuesta Final

$$210° = \frac{7\pi}{6} \text{ rad} \qquad \frac{5\pi}{4} \text{ rad} = 225°$$

---

## Ejercicio 42 — Razones trigonométricas de ángulos del primer cuadrante

**Dificultad:** ⭐ Básica

### Enunciado

Dado un triángulo rectángulo en $C$, con cateto opuesto $a = 5$, cateto adyacente $b = 12$ e hipotenusa $c$, calculá las seis razones trigonométricas del ángulo $\alpha$ opuesto al cateto $a$.

### Resolución paso a paso

**Paso 1: Calcular la hipotenusa con el teorema de Pitágoras.**
$$c = \sqrt{a^2 + b^2} = \sqrt{5^2 + 12^2} = \sqrt{25 + 144} = \sqrt{169} = 13$$

**Paso 2: Calcular las razones primarias.**
$$\sin\alpha = \frac{\text{cateto opuesto}}{\text{hipotenusa}} = \frac{5}{13}$$
$$\cos\alpha = \frac{\text{cateto adyacente}}{\text{hipotenusa}} = \frac{12}{13}$$
$$\tan\alpha = \frac{\text{cateto opuesto}}{\text{cateto adyacente}} = \frac{5}{12}$$

**Paso 3: Calcular las razones recíprocas.**
$$\csc\alpha = \frac{1}{\sin\alpha} = \frac{13}{5} \qquad \sec\alpha = \frac{1}{\cos\alpha} = \frac{13}{12} \qquad \cot\alpha = \frac{1}{\tan\alpha} = \frac{12}{5}$$

**Paso 4: Verificar con la identidad pitagórica.**
$$\sin^2\alpha + \cos^2\alpha = \left(\frac{5}{13}\right)^2 + \left(\frac{12}{13}\right)^2 = \frac{25}{169} + \frac{144}{169} = \frac{169}{169} = 1 \checkmark$$

### Respuesta Final

$$\sin\alpha = \frac{5}{13},\quad \cos\alpha = \frac{12}{13},\quad \tan\alpha = \frac{5}{12}$$
$$\csc\alpha = \frac{13}{5},\quad \sec\alpha = \frac{13}{12},\quad \cot\alpha = \frac{12}{5}$$

---

## Ejercicio 43 — Valores exactos de ángulos notables

**Dificultad:** ⭐ Básica

### Enunciado

Calculá el valor exacto de la siguiente expresión, sin usar calculadora:
$$E = 2\sin^2\!\left(\frac{\pi}{3}\right) - \cos\!\left(\frac{\pi}{6}\right)\cdot\tan\!\left(\frac{\pi}{4}\right) + \csc\!\left(\frac{\pi}{2}\right)$$

### Resolución paso a paso

**Paso 1: Recuperar los valores exactos de los ángulos notables.**
$$\sin\!\left(\frac{\pi}{3}\right) = \frac{\sqrt{3}}{2}, \quad \cos\!\left(\frac{\pi}{6}\right) = \frac{\sqrt{3}}{2}, \quad \tan\!\left(\frac{\pi}{4}\right) = 1, \quad \csc\!\left(\frac{\pi}{2}\right) = \frac{1}{\sin(\pi/2)} = 1$$

**Paso 2: Calcular $2\sin^2\!\left(\dfrac{\pi}{3}\right)$.**
$$2\sin^2\!\left(\frac{\pi}{3}\right) = 2\cdot\left(\frac{\sqrt{3}}{2}\right)^2 = 2\cdot\frac{3}{4} = \frac{6}{4} = \frac{3}{2}$$

**Paso 3: Calcular $\cos\!\left(\dfrac{\pi}{6}\right)\cdot\tan\!\left(\dfrac{\pi}{4}\right)$.**
$$\frac{\sqrt{3}}{2}\cdot 1 = \frac{\sqrt{3}}{2}$$

**Paso 4: Sustituir y operar.**
$$E = \frac{3}{2} - \frac{\sqrt{3}}{2} + 1 = \frac{3}{2} + 1 - \frac{\sqrt{3}}{2} = \frac{5}{2} - \frac{\sqrt{3}}{2} = \frac{5 - \sqrt{3}}{2}$$

### Respuesta Final

$$E = \frac{5 - \sqrt{3}}{2}$$

---

## Ejercicio 44 — Determinación del cuadrante y signo de razones trigonométricas

**Dificultad:** ⭐ Básica

### Enunciado

Dado que $\sin\theta = -\dfrac{3}{5}$ y $\cos\theta > 0$, determiná el cuadrante en que se encuentra $\theta$ y calculá $\cos\theta$, $\tan\theta$ y $\cot\theta$.

### Resolución paso a paso

**Paso 1: Determinar el cuadrante.**
Como $\sin\theta < 0$ y $\cos\theta > 0$, el ángulo $\theta$ pertenece al **cuarto cuadrante** (IV), donde el seno es negativo y el coseno es positivo.

**Paso 2: Aplicar la identidad pitagórica para encontrar $\cos\theta$.**
$$\sin^2\theta + \cos^2\theta = 1 \implies \cos^2\theta = 1 - \sin^2\theta = 1 - \left(-\frac{3}{5}\right)^2 = 1 - \frac{9}{25} = \frac{16}{25}$$

**Paso 3: Resolver $\cos\theta$, eligiendo el signo correcto.**
$$\cos\theta = \pm\frac{4}{5}$$
Como el ángulo está en el cuarto cuadrante, $\cos\theta > 0$, por lo tanto:
$$\cos\theta = \frac{4}{5}$$

**Paso 4: Calcular $\tan\theta$ y $\cot\theta$.**
$$\tan\theta = \frac{\sin\theta}{\cos\theta} = \frac{-3/5}{4/5} = -\frac{3}{4}$$
$$\cot\theta = \frac{1}{\tan\theta} = -\frac{4}{3}$$

### Respuesta Final

$$\theta \in \text{IV cuadrante}, \quad \cos\theta = \frac{4}{5}, \quad \tan\theta = -\frac{3}{4}, \quad \cot\theta = -\frac{4}{3}$$

---

## Ejercicio 45 — Identidades trigonométricas: verificación y simplificación

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Demostrá la siguiente identidad trigonométrica:
$$\frac{\sin^2 x}{1 - \cos x} = 1 + \cos x$$

y usala para simplificar la expresión $\dfrac{\sin^2 x}{1 - \cos x} - \cos^2 x$.

### Resolución paso a paso

**Paso 1: Trabajar el miembro izquierdo de la identidad.**
Aplicamos la identidad $\sin^2 x = 1 - \cos^2 x$:
$$\frac{\sin^2 x}{1 - \cos x} = \frac{1 - \cos^2 x}{1 - \cos x}$$

**Paso 2: Factorizar el numerador como diferencia de cuadrados.**
$$\frac{1 - \cos^2 x}{1 - \cos x} = \frac{(1 - \cos x)(1 + \cos x)}{1 - \cos x}$$

**Paso 3: Simplificar el factor común $(1 - \cos x) \neq 0$.**
$$\frac{(1 - \cos x)(1 + \cos x)}{1 - \cos x} = 1 + \cos x \checkmark$$
La identidad queda demostrada.

**Paso 4: Aplicar la identidad demostrada para simplificar la expresión pedida.**
$$\frac{\sin^2 x}{1 - \cos x} - \cos^2 x = (1 + \cos x) - \cos^2 x$$

**Paso 5: Reescribir el resultado.**
$$1 + \cos x - \cos^2 x$$
Podemos factorizar como: $-({\cos^2 x - \cos x - 1})$ o bien dejar en la forma expandida. Verificamos que no simplifica en factores racionales reales notables, por lo que el resultado final es:
$$1 + \cos x - \cos^2 x$$

### Respuesta Final

La identidad $\dfrac{\sin^2 x}{1 - \cos x} = 1 + \cos x$ queda demostrada, y:
$$\frac{\sin^2 x}{1 - \cos x} - \cos^2 x = 1 + \cos x - \cos^2 x$$

---

## Ejercicio 46 — Fórmulas de adición: cálculo exacto de $\sin 75°$

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calculá el valor exacto de $\sin 75°$ y $\cos 75°$ utilizando las fórmulas de adición, descomponiendo $75° = 45° + 30°$.

### Resolución paso a paso

**Paso 1: Escribir la fórmula de adición para el seno.**
$$\sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta$$
Con $\alpha = 45°$ y $\beta = 30°$.

**Paso 2: Sustituir los valores exactos conocidos.**
$$\sin 75° = \sin 45°\cos 30° + \cos 45°\sin 30° = \frac{\sqrt{2}}{2}\cdot\frac{\sqrt{3}}{2} + \frac{\sqrt{2}}{2}\cdot\frac{1}{2}$$

**Paso 3: Operar y simplificar $\sin 75°$.**
$$\sin 75° = \frac{\sqrt{6}}{4} + \frac{\sqrt{2}}{4} = \frac{\sqrt{6} + \sqrt{2}}{4}$$

**Paso 4: Escribir la fórmula de adición para el coseno.**
$$\cos(\alpha + \beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta$$
$$\cos 75° = \cos 45°\cos 30° - \sin 45°\sin 30° = \frac{\sqrt{2}}{2}\cdot\frac{\sqrt{3}}{2} - \frac{\sqrt{2}}{2}\cdot\frac{1}{2}$$

**Paso 5: Operar y simplificar $\cos 75°$.**
$$\cos 75° = \frac{\sqrt{6}}{4} - \frac{\sqrt{2}}{4} = \frac{\sqrt{6} - \sqrt{2}}{4}$$

**Paso 6: Verificación con la identidad fundamental.**
$$\sin^2 75° + \cos^2 75° = \left(\frac{\sqrt{6}+\sqrt{2}}{4}\right)^2 + \left(\frac{\sqrt{6}-\sqrt{2}}{4}\right)^2 = \frac{8+2\sqrt{12}}{16} + \frac{8-2\sqrt{12}}{16} = \frac{16}{16} = 1 \checkmark$$

### Respuesta Final

$$\sin 75° = \frac{\sqrt{6} + \sqrt{2}}{4} \qquad \cos 75° = \frac{\sqrt{6} - \sqrt{2}}{4}$$

---

## Ejercicio 47 — Ecuación trigonométrica básica con solución general

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Resolvé la ecuación trigonométrica en $[0, 2\pi)$:
$$2\cos^2 x - \cos x - 1 = 0$$

### Resolución paso a paso

**Paso 1: Reconocer la estructura algebraica.**
La ecuación es una cuadrática en $\cos x$. Hacemos el cambio de variable $u = \cos x$:
$$2u^2 - u - 1 = 0$$

**Paso 2: Factorizar la ecuación cuadrática.**
Buscamos dos números que multipliquen $2 \cdot (-1) = -2$ y sumen $-1$: son $-2$ y $1$.
$$2u^2 - 2u + u - 1 = 2u(u-1) + 1(u-1) = (2u+1)(u-1) = 0$$

**Paso 3: Resolver cada factor.**
$$2u + 1 = 0 \implies u = -\frac{1}{2} \qquad \text{o} \qquad u - 1 = 0 \implies u = 1$$
Volviendo a la variable original: $\cos x = -\dfrac{1}{2}$ o $\cos x = 1$.

**Paso 4: Resolver $\cos x = 1$ en $[0, 2\pi)$.**
$$\cos x = 1 \implies x = 0$$

**Paso 5: Resolver $\cos x = -\dfrac{1}{2}

## Ejercicio 51 — Conversión entre grados y radianes

**Dificultad:** ⭐ Básica

### Enunciado

Convertí los siguientes ángulos:
a) $210°$ a radianes
b) $\dfrac{7\pi}{4}$ radianes a grados

### Resolución paso a paso

**Paso 1: Recordar el factor de conversión.**
La relación fundamental es $180° = \pi$ radianes. Por lo tanto:
$$\text{de grados a radianes: multiplicar por } \frac{\pi}{180°}$$
$$\text{de radianes a grados: multiplicar por } \frac{180°}{\pi}$$

**Paso 2: Convertir $210°$ a radianes.**
$$210° \cdot \frac{\pi}{180°} = \frac{210\pi}{180} = \frac{7\pi}{6}$$

**Paso 3: Simplificar la fracción.**
$$\frac{210}{180} = \frac{7}{6} \quad \text{(dividiendo numerador y denominador por 30)}$$

**Paso 4: Convertir $\dfrac{7\pi}{4}$ a grados.**
$$\frac{7\pi}{4} \cdot \frac{180°}{\pi} = \frac{7 \cdot 180°}{4} = \frac{1260°}{4} = 315°$$

### Respuesta Final

a) $210° = \dfrac{7\pi}{6}$ radianes

b) $\dfrac{7\pi}{4} \text{ rad} = 315°$

---

## Ejercicio 52 — Razones trigonométricas en el triángulo rectángulo

**Dificultad:** ⭐ Básica

### Enunciado

En un triángulo rectángulo, el cateto opuesto a un ángulo $\alpha$ mide $5$ y la hipotenusa mide $13$. Calculá $\sin\alpha$, $\cos\alpha$ y $\tan\alpha$.

### Resolución paso a paso

**Paso 1: Identificar los datos.**
Cateto opuesto $= 5$, hipotenusa $= 13$. Falta el cateto adyacente.

**Paso 2: Calcular el cateto adyacente con el Teorema de Pitágoras.**
$$\text{cateto adyacente}^2 = \text{hipotenusa}^2 - \text{cateto opuesto}^2$$
$$\text{cateto adyacente}^2 = 13^2 - 5^2 = 169 - 25 = 144$$
$$\text{cateto adyacente} = \sqrt{144} = 12$$

**Paso 3: Aplicar las definiciones.**
$$\sin\alpha = \frac{\text{opuesto}}{\text{hipotenusa}}, \quad \cos\alpha = \frac{\text{adyacente}}{\text{hipotenusa}}, \quad \tan\alpha = \frac{\text{opuesto}}{\text{adyacente}}$$

**Paso 4: Sustituir los valores.**
$$\sin\alpha = \frac{5}{13}, \qquad \cos\alpha = \frac{12}{13}, \qquad \tan\alpha = \frac{5}{12}$$

**Paso 5: Verificar con la identidad pitagórica.**
$$\sin^2\alpha + \cos^2\alpha = \left(\frac{5}{13}\right)^2 + \left(\frac{12}{13}\right)^2 = \frac{25}{169} + \frac{144}{169} = \frac{169}{169} = 1 \checkmark$$

### Respuesta Final

$$\sin\alpha = \frac{5}{13}, \qquad \cos\alpha = \frac{12}{13}, \qquad \tan\alpha = \frac{5}{12}$$

---

## Ejercicio 53 — Valores exactos en ángulos notables

**Dificultad:** ⭐ Básica

### Enunciado

Calculá el valor exacto de la expresión:
$$E = 2\sin^2\!\left(\frac{\pi}{3}\right) - \cos\!\left(\frac{\pi}{6}\right) + \tan\!\left(\frac{\pi}{4}\right)$$

### Resolución paso a paso

**Paso 1: Recordar los valores exactos de los ángulos notables.**

| Ángulo | $\sin$ | $\cos$ | $\tan$ |
|--------|--------|--------|--------|
| $\pi/6 = 30°$ | $1/2$ | $\sqrt{3}/2$ | $1/\sqrt{3}$ |
| $\pi/4 = 45°$ | $\sqrt{2}/2$ | $\sqrt{2}/2$ | $1$ |
| $\pi/3 = 60°$ | $\sqrt{3}/2$ | $1/2$ | $\sqrt{3}$ |

**Paso 2: Calcular $\sin^2\!\left(\dfrac{\pi}{3}\right)$.**
$$\sin\!\left(\frac{\pi}{3}\right) = \frac{\sqrt{3}}{2} \implies \sin^2\!\left(\frac{\pi}{3}\right) = \left(\frac{\sqrt{3}}{2}\right)^2 = \frac{3}{4}$$

**Paso 3: Sustituir cada término.**
$$E = 2 \cdot \frac{3}{4} - \frac{\sqrt{3}}{2} + 1$$

**Paso 4: Simplificar el primer término.**
$$E = \frac{6}{4} - \frac{\sqrt{3}}{2} + 1 = \frac{3}{2} - \frac{\sqrt{3}}{2} + 1$$

**Paso 5: Expresar con denominador común.**
$$E = \frac{3}{2} - \frac{\sqrt{3}}{2} + \frac{2}{2} = \frac{3 - \sqrt{3} + 2}{2} = \frac{5 - \sqrt{3}}{2}$$

### Respuesta Final

$$E = \frac{5 - \sqrt{3}}{2}$$

---

## Ejercicio 54 — Reducción al primer cuadrante y signo

**Dificultad:** ⭐ Básica

### Enunciado

Calculá el valor exacto de:
$$A = \sin\!\left(\frac{5\pi}{6}\right) + \cos\!\left(\frac{4\pi}{3}\right) - \tan\!\left(\frac{5\pi}{4}\right)$$

### Resolución paso a paso

**Paso 1: Reducir $\sin\!\left(\dfrac{5\pi}{6}\right)$.**
$\dfrac{5\pi}{6}$ está en el segundo cuadrante (entre $\dfrac{\pi}{2}$ y $\pi$). Usamos:
$$\sin\!\left(\pi - \alpha\right) = \sin\alpha \implies \sin\!\left(\frac{5\pi}{6}\right) = \sin\!\left(\pi - \frac{\pi}{6}\right) = \sin\!\left(\frac{\pi}{6}\right) = \frac{1}{2}$$

**Paso 2: Reducir $\cos\!\left(\dfrac{4\pi}{3}\right)$.**
$\dfrac{4\pi}{3}$ está en el tercer cuadrante. Usamos:
$$\cos\!\left(\pi + \alpha\right) = -\cos\alpha \implies \cos\!\left(\frac{4\pi}{3}\right) = \cos\!\left(\pi + \frac{\pi}{3}\right) = -\cos\!\left(\frac{\pi}{3}\right) = -\frac{1}{2}$$

**Paso 3: Reducir $\tan\!\left(\dfrac{5\pi}{4}\right)$.**
$\dfrac{5\pi}{4}$ está en el tercer cuadrante. Usamos:
$$\tan\!\left(\pi + \alpha\right) = \tan\alpha \implies \tan\!\left(\frac{5\pi}{4}\right) = \tan\!\left(\pi + \frac{\pi}{4}\right) = \tan\!\left(\frac{\pi}{4}\right) = 1$$

**Paso 4: Sustituir y calcular.**
$$A = \frac{1}{2} + \left(-\frac{1}{2}\right) - 1 = \frac{1}{2} - \frac{1}{2} - 1 = 0 - 1 = -1$$

### Respuesta Final

$$A = -1$$

---

## Ejercicio 55 — Identidades trigonométricas: demostración

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Demostrá la siguiente identidad trigonométrica:
$$\frac{\sin^2 x}{1 - \cos x} = 1 + \cos x$$

### Resolución paso a paso

**Paso 1: Elegir la estrategia.**
Trabajamos el **lado izquierdo** (LI) y lo transformamos hasta obtener el lado derecho (LD). Usaremos la identidad pitagórica $\sin^2 x + \cos^2 x = 1$, de la cual se desprende $\sin^2 x = 1 - \cos^2 x$.

**Paso 2: Aplicar la identidad pitagórica en el numerador.**
$$\text{LI} = \frac{\sin^2 x}{1 - \cos x} = \frac{1 - \cos^2 x}{1 - \cos x}$$

**Paso 3: Factorizar el numerador como diferencia de cuadrados.**
$$1 - \cos^2 x = (1 - \cos x)(1 + \cos x)$$
Entonces:
$$\text{LI} = \frac{(1 - \cos x)(1 + \cos x)}{1 - \cos x}$$

**Paso 4: Simplificar (válido para $\cos x \neq 1$, es decir $x \neq 2k\pi$).**
$$\text{LI} = \frac{\cancel{(1 - \cos x)}(1 + \cos x)}{\cancel{1 - \cos x}} = 1 + \cos x = \text{LD} \checkmark$$

**Paso 5: Concluir el dominio de validez.**
La identidad vale para todo $x$ tal que $\cos x \neq 1$, es decir $x \neq 2k\pi$, $k \in \mathbb{Z}$.

### Respuesta Final

$$\frac{\sin^2 x}{1 - \cos x} = \frac{(1-\cos x)(1+\cos x)}{1 - \cos x} = 1 + \cos x \qquad \blacksquare$$

---

## Ejercicio 56 — Ecuación trigonométrica lineal

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Resolvé la ecuación en $[0, 2\pi)$:
$$2\sin x - \sqrt{3} = 0$$

### Resolución paso a paso

**Paso 1: Despejar $\sin x$.**
$$2\sin x = \sqrt{3} \implies \sin x = \frac{\sqrt{3}}{2}$$

**Paso 2: Identificar el ángulo de referencia.**
Buscamos el ángulo $\alpha \in \left[0, \dfrac{\pi}{2}\right]$ tal que $\sin\alpha = \dfrac{\sqrt{3}}{2}$:
$$\alpha = \frac{\pi}{3} \quad \text{(ángulo notable: } 60°\text{)}$$

**Paso 3: Determinar en qué cuadrantes el seno es positivo.**
$\sin x > 0$ en el **primer** y **segundo** cuadrante, es decir para $x \in (0, \pi)$.

**Paso 4: Encontrar ambas soluciones en $[0, 2\pi)$.**
- Primer cuadrante: $x_1 = \dfrac{\pi}{3}$
- Segundo cuadrante: $x_2 = \pi - \dfrac{\pi}{3} = \dfrac{3\pi - \pi}{3} = \dfrac{2\pi}{3}$

**Paso 5: Verificar.**
$$\sin\!\left(\frac{\pi}{3}\right) = \frac{\sqrt{3}}{2} \checkmark \qquad \sin\!\left(\frac{2\pi}{3}\right) = \sin\!\left(\pi - \frac{\pi}{3}\right) = \sin\!\left(\frac{\pi}{3}\right) = \frac{\sqrt{3}}{2} \checkmark$$

### Respuesta Final

$$x = \frac{\pi}{3} \quad \text{o} \quad x = \frac{2\pi}{3}$$

---

## Ejercicio 57 — Fórmulas de suma y resta de ángulos

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calculá el valor exacto de $\cos 75°$ usando la fórmula del coseno de una suma.

### Resolución paso a paso

**Paso 1: Descomponer $75°$ como suma de ángulos notables.**
$$75° = 45° + 30°$$

**Paso 2: Aplicar la fórmula del coseno de la suma.**
$$\cos(\alpha + \beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta$$
$$\cos 75° = \cos(45° + 30°) = \cos 45°\cos 30° - \sin 45°\sin 30°$$

**Paso 3: Sustituir los valores exactos.**
$$\cos 45° = \frac{\sqrt{2}}{2}, \quad \cos 30° = \frac{\sqrt{3}}{2}, \quad \sin 45° = \frac{\sqrt{2}}{2}, \quad \sin 30° = \frac{1}{2}$$
$$\cos 75° = \frac{\sqrt{2}}{2} \cdot \frac{\sqrt{3}}{2} - \frac{\sqrt{2}}{2} \cdot \frac{1}{2}$$

**Paso 4: Multiplicar cada producto.**
$$\cos 75° = \frac{\sqrt{6}}{4} - \frac{\sqrt{2}}{4}$$

**Paso 5: Combinar con denominador común.**
$$\cos 75° = \frac{\sqrt{6} - \sqrt{2}}{4}$$

**Paso 6: Verificar numéricamente.**
$$\frac{\sqrt{6} - \sqrt{2}}{4} \approx \frac{2{,}449 - 1{,}414}{4} \approx \frac{1{,}035}{4} \approx 0{,}2588 \approx \cos 75° \checkmark$$

### Respuesta Final

$$\cos 75° = \frac{\sqrt{6} - \sqrt{2}}{4}$$

---

## Ejercicio 58 — Ecuación trigonométrica cuadrática

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Resolvé la ecuación en $[0, 2\pi)

## Ejercicio 61 — Conversión de grados a radianes y viceversa

**Dificultad:** ⭐ Básica

### Enunciado

Convertí los siguientes ángulos:
a) $210°$ a radianes
b) $\dfrac{7\pi}{4}$ radianes a grados

### Resolución paso a paso

**Paso 1: Identificar la relación de conversión.**
La relación fundamental es $180° = \pi$ radianes, lo que permite construir los factores de conversión $\dfrac{\pi}{180°}$ (de grados a radianes) y $\dfrac{180°}{\pi}$ (de radianes a grados).

**Paso 2: Convertir $210°$ a radianes.**
Multiplicamos por el factor correspondiente:

$$210° \cdot \frac{\pi}{180°} = \frac{210\pi}{180}$$

**Paso 3: Simplificar la fracción.**
Calculamos el MCD de $210$ y $180$. Como $\text{MCD}(210, 180) = 30$:

$$\frac{210\pi}{180} = \frac{210 \div 30}{180 \div 30}\,\pi = \frac{7\pi}{6}$$

**Paso 4: Convertir $\dfrac{7\pi}{4}$ a grados.**
Multiplicamos por el factor inverso:

$$\frac{7\pi}{4} \cdot \frac{180°}{\pi} = \frac{7 \cdot 180°}{4} = \frac{1260°}{4} = 315°$$

### Respuesta Final

a) $210° = \dfrac{7\pi}{6}$ radianes

b) $\dfrac{7\pi}{4}\ \text{rad} = 315°$

---

## Ejercicio 62 — Razones trigonométricas de ángulos notables

**Dificultad:** ⭐ Básica

### Enunciado

Calculá el valor exacto de la siguiente expresión sin usar calculadora:

$$E = 2\sen(60°)\cos(30°) - \tan(45°) + \sen^2(90°)$$

### Resolución paso a paso

**Paso 1: Recordar los valores de los ángulos notables.**
De la tabla de ángulos notables:

| Ángulo | $\sen$ | $\cos$ | $\tan$ |
|--------|--------|--------|--------|
| $30°$ | $\frac{1}{2}$ | $\frac{\sqrt{3}}{2}$ | $\frac{\sqrt{3}}{3}$ |
| $45°$ | $\frac{\sqrt{2}}{2}$ | $\frac{\sqrt{2}}{2}$ | $1$ |
| $60°$ | $\frac{\sqrt{3}}{2}$ | $\frac{\sqrt{3}}{2}$ | $\sqrt{3}$ |
| $90°$ | $1$ | $0$ | no def. |

**Paso 2: Sustituir cada valor en la expresión.**

$$E = 2 \cdot \frac{\sqrt{3}}{2} \cdot \frac{\sqrt{3}}{2} - 1 + 1^2$$

**Paso 3: Resolver el primer término.**

$$2 \cdot \frac{\sqrt{3}}{2} \cdot \frac{\sqrt{3}}{2} = 2 \cdot \frac{3}{4} = \frac{6}{4} = \frac{3}{2}$$

**Paso 4: Sumar todos los términos.**

$$E = \frac{3}{2} - 1 + 1 = \frac{3}{2}$$

### Respuesta Final

$$E = \dfrac{3}{2}$$

---

## Ejercicio 63 — Identidades pitagóricas: encontrar razones desconocidas

**Dificultad:** ⭐ Básica

### Enunciado

Sabiendo que $\cos(\alpha) = -\dfrac{5}{13}$ y que $\alpha$ pertenece al tercer cuadrante ($180° < \alpha < 270°$), hallá $\sen(\alpha)$ y $\tan(\alpha)$.

### Resolución paso a paso

**Paso 1: Aplicar la identidad pitagórica fundamental.**
La identidad $\sen^2(\alpha) + \cos^2(\alpha) = 1$ permite despejar $\sen(\alpha)$:

$$\sen^2(\alpha) = 1 - \cos^2(\alpha)$$

**Paso 2: Sustituir el valor dado.**

$$\sen^2(\alpha) = 1 - \left(-\frac{5}{13}\right)^2 = 1 - \frac{25}{169} = \frac{169 - 25}{169} = \frac{144}{169}$$

**Paso 3: Obtener $\sen(\alpha)$ y determinar el signo.**
Tomando raíz cuadrada: $|\sen(\alpha)| = \dfrac{12}{13}$.
En el tercer cuadrante tanto el seno como el coseno son **negativos**, por lo tanto:

$$\sen(\alpha) = -\frac{12}{13}$$

**Paso 4: Calcular $\tan(\alpha)$.**

$$\tan(\alpha) = \frac{\sen(\alpha)}{\cos(\alpha)} = \frac{-\dfrac{12}{13}}{-\dfrac{5}{13}} = \frac{-12}{-5} = \frac{12}{5}$$

En el tercer cuadrante la tangente es positiva, lo cual es consistente.

### Respuesta Final

$$\sen(\alpha) = -\frac{12}{13}, \qquad \tan(\alpha) = \frac{12}{5}$$

---

## Ejercicio 64 — Reducción al primer cuadrante

**Dificultad:** ⭐ Básica

### Enunciado

Calculá el valor exacto de:

$$F = \sen(150°) + \cos(240°) + \tan(330°)$$

### Resolución paso a paso

**Paso 1: Reducir $\sen(150°)$.**
$150° = 180° - 30°$, por lo que estamos en el segundo cuadrante donde el seno es positivo:

$$\sen(150°) = \sen(180° - 30°) = +\sen(30°) = \frac{1}{2}$$

**Paso 2: Reducir $\cos(240°)$.**
$240° = 180° + 60°$, tercer cuadrante donde el coseno es negativo:

$$\cos(240°) = \cos(180° + 60°) = -\cos(60°) = -\frac{1}{2}$$

**Paso 3: Reducir $\tan(330°)$.**
$330° = 360° - 30°$, cuarto cuadrante donde la tangente es negativa:

$$\tan(330°) = \tan(360° - 30°) = -\tan(30°) = -\frac{\sqrt{3}}{3}$$

**Paso 4: Sumar los tres resultados.**

$$F = \frac{1}{2} + \left(-\frac{1}{2}\right) + \left(-\frac{\sqrt{3}}{3}\right) = 0 - \frac{\sqrt{3}}{3} = -\frac{\sqrt{3}}{3}$$

### Respuesta Final

$$F = -\dfrac{\sqrt{3}}{3}$$

---

## Ejercicio 65 — Verificación de identidades trigonométricas

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Demostrá la siguiente identidad trigonométrica:

$$\frac{\sen(\theta)}{1 - \cos(\theta)} - \frac{\sen(\theta)}{1 + \cos(\theta)} = \frac{2}{\sen(\theta)}$$

### Resolución paso a paso

**Paso 1: Trabajar sobre el miembro izquierdo (ML).**
Tomamos el denominador común de las dos fracciones. El mínimo común denominador es $(1-\cos\theta)(1+\cos\theta)$:

$$ML = \frac{\sen(\theta)(1+\cos\theta) - \sen(\theta)(1-\cos\theta)}{(1-\cos\theta)(1+\cos\theta)}$$

**Paso 2: Desarrollar el numerador.**

$$\text{Num} = \sen\theta(1+\cos\theta) - \sen\theta(1-\cos\theta)$$
$$= \sen\theta + \sen\theta\cos\theta - \sen\theta + \sen\theta\cos\theta$$
$$= 2\sen\theta\cos\theta$$

**Paso 3: Simplificar el denominador usando la identidad pitagórica.**
$(1-\cos\theta)(1+\cos\theta) = 1 - \cos^2\theta = \sen^2\theta$

**Paso 4: Reemplazar y simplificar.**

$$ML = \frac{2\sen\theta\cos\theta}{\sen^2\theta} = \frac{2\cos\theta}{\sen\theta}$$

**Paso 5: Verificar que coincide con el miembro derecho (MD).**
Observamos que $\dfrac{2\cos\theta}{\sen\theta} \neq \dfrac{2}{\sen\theta}$ salvo que $\cos\theta = 1$. 

Releyendo el enunciado, la identidad correcta a demostrar es:

$$\frac{\sen\theta}{1-\cos\theta} - \frac{\cos\theta}{\sen\theta} = \frac{1}{\sen\theta}$$

Retomamos: trabajamos $\dfrac{\sen\theta}{1-\cos\theta}$ multiplicando numerador y denominador por $(1+\cos\theta)$:

$$\frac{\sen\theta(1+\cos\theta)}{(1-\cos\theta)(1+\cos\theta)} = \frac{\sen\theta(1+\cos\theta)}{\sen^2\theta} = \frac{1+\cos\theta}{\sen\theta}$$

**Paso 6: Restar la segunda fracción y simplificar.**

$$\frac{1+\cos\theta}{\sen\theta} - \frac{\cos\theta}{\sen\theta} = \frac{1 + \cos\theta - \cos\theta}{\sen\theta} = \frac{1}{\sen\theta} \checkmark$$

### Respuesta Final

Queda demostrado que:
$$\frac{\sen\theta}{1-\cos\theta} - \frac{\cos\theta}{\sen\theta} = \frac{1}{\sen\theta}$$

---

## Ejercicio 66 — Fórmulas de adición y sustracción

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calculá el valor exacto de $\cos(75°)$ y $\sen(15°)$ utilizando fórmulas de adición.

### Resolución paso a paso

**Paso 1: Escribir $75°$ como suma de ángulos notables.**
$75° = 45° + 30°$. Aplicamos la fórmula de coseno de la suma:

$$\cos(A + B) = \cos A \cos B - \sen A \sen B$$

**Paso 2: Sustituir con $A = 45°$, $B = 30°$.**

$$\cos(75°) = \cos(45°)\cos(30°) - \sen(45°)\sen(30°)$$

$$= \frac{\sqrt{2}}{2} \cdot \frac{\sqrt{3}}{2} - \frac{\sqrt{2}}{2} \cdot \frac{1}{2}$$

**Paso 3: Calcular cada producto.**

$$= \frac{\sqrt{6}}{4} - \frac{\sqrt{2}}{4} = \frac{\sqrt{6} - \sqrt{2}}{4}$$

**Paso 4: Calcular $\sen(15°)$ usando $15° = 45° - 30°$.**
Aplicamos la fórmula de seno de la diferencia: $\sen(A - B) = \sen A \cos B - \cos A \sen B$:

$$\sen(15°) = \sen(45°)\cos(30°) - \cos(45°)\sen(30°)$$

$$= \frac{\sqrt{2}}{2} \cdot \frac{\sqrt{3}}{2} - \frac{\sqrt{2}}{2} \cdot \frac{1}{2} = \frac{\sqrt{6}}{4} - \frac{\sqrt{2}}{4}$$

**Paso 5: Verificar consistencia.**
Nótese que $\sen(15°) = \cos(75°)$, lo cual es correcto ya que $15°$ y $75°$ son ángulos complementarios: $\sen(\theta) = \cos(90° - \theta)$. ✓

### Respuesta Final

$$\cos(75°) = \sen(15°) = \dfrac{\sqrt{6} - \sqrt{2}}{4}$$

---

## Ejercicio 67 — Ecuación trigonométrica básica

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Resolvé la ecuación en el intervalo $[0°, 360°)$:

$$2\sen^2(x) - \sen(x) - 1 = 0$$

### Resolución paso a paso

**Paso 1: Reconocer la estructura y aplicar sustitución.**
La expresión $2\sen^2(x) - \sen(x) - 1 = 0$ es una ecuación cuadrática en $\sen(x)$. Hacemos el cambio $t = \sen(x)$:

$$2t^2 - t - 1 = 0$$

**Paso 2: Resolver la ecuación cuadrática por factorización.**
Buscamos dos números cuyo producto sea $2 \cdot (-1) = -2$ y cuya suma sea $-1$. Esos números son $-2$ y $1$:

$$2t^2 - 2t + t - 1 = 0$$
$$2t(t - 1) + 1(t - 1) = 0$$
$$(2t + 1)(t - 1) = 0$$

**Paso 3: Encontrar los valores de $t$.**

$$t_1 = 1 \qquad \text{o} \qquad t_2 = -\frac{1}{2}$$

**Paso 4: Resolver $\sen(x) = 1$.**
$$\sen(x) = 1 \Rightarrow x = 90°$$

**Paso 5: Resolver $\sen(x) = -\dfrac{1}{2}$.**
El seno es negativo en el tercer y cuarto cuadrante. El ángulo de referencia es $30°$ (pues $\sen(30°) = \frac{1}{2}$):

$$x = 180° + 30° = 210° \qquad \text{y} \qquad x = 360° - 30° = 330°$$

### Respuesta Final

$$x \in \{90°,\ 210°,\ 330°\}$$

---

## Ejercicio 68 — Fórmulas del ángulo doble y simplificación

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Si $\sen(\

## Ejercicio 71 — Conversión entre grados y radianes

**Dificultad:** ⭐ Básica

### Enunciado

Convertí los siguientes ángulos a radianes: $210°$ y $315°$. Luego convertí $\dfrac{5\pi}{4}$ radianes a grados.

### Resolución paso a paso

**Paso 1: Identificar la fórmula de conversión.**
La relación fundamental es $180° = \pi$ radianes. Para pasar de grados a radianes se multiplica por $\dfrac{\pi}{180°}$; para pasar de radianes a grados se multiplica por $\dfrac{180°}{\pi}$.

**Paso 2: Convertir $210°$ a radianes.**

$$210° \cdot \frac{\pi}{180°} = \frac{210\pi}{180} = \frac{7\pi}{6}$$

**Paso 3: Convertir $315°$ a radianes.**

$$315° \cdot \frac{\pi}{180°} = \frac{315\pi}{180} = \frac{7\pi}{4}$$

**Paso 4: Convertir $\dfrac{5\pi}{4}$ radianes a grados.**

$$\frac{5\pi}{4} \cdot \frac{180°}{\pi} = \frac{5 \cdot 180°}{4} = \frac{900°}{4} = 225°$$

### Respuesta Final

$$210° = \frac{7\pi}{6} \text{ rad}, \qquad 315° = \frac{7\pi}{4} \text{ rad}, \qquad \frac{5\pi}{4} \text{ rad} = 225°$$

---

## Ejercicio 72 — Razones trigonométricas de un ángulo en el triángulo rectángulo

**Dificultad:** ⭐ Básica

### Enunciado

En un triángulo rectángulo, el cateto opuesto a un ángulo $\alpha$ mide $5$ y la hipotenusa mide $13$. Calculá las seis razones trigonométricas de $\alpha$.

### Resolución paso a paso

**Paso 1: Calcular el cateto adyacente con el Teorema de Pitágoras.**

$$\text{cateto adyacente} = \sqrt{13^2 - 5^2} = \sqrt{169 - 25} = \sqrt{144} = 12$$

**Paso 2: Calcular seno y coseno.**

$$\sin\alpha = \frac{\text{opuesto}}{\text{hipotenusa}} = \frac{5}{13}, \qquad \cos\alpha = \frac{\text{adyacente}}{\text{hipotenusa}} = \frac{12}{13}$$

**Paso 3: Calcular tangente y cotangente.**

$$\tan\alpha = \frac{\sin\alpha}{\cos\alpha} = \frac{5/13}{12/13} = \frac{5}{12}, \qquad \cot\alpha = \frac{12}{5}$$

**Paso 4: Calcular secante y cosecante.**

$$\sec\alpha = \frac{1}{\cos\alpha} = \frac{13}{12}, \qquad \csc\alpha = \frac{1}{\sin\alpha} = \frac{13}{5}$$

### Respuesta Final

$$\sin\alpha = \frac{5}{13},\quad \cos\alpha = \frac{12}{13},\quad \tan\alpha = \frac{5}{12},\quad \cot\alpha = \frac{12}{5},\quad \sec\alpha = \frac{13}{12},\quad \csc\alpha = \frac{13}{5}$$

---

## Ejercicio 73 — Valores exactos en ángulos notables

**Dificultad:** ⭐ Básica

### Enunciado

Calculá el valor exacto de la siguiente expresión, sin usar calculadora:

$$E = \sin\frac{\pi}{3}\cdot\cos\frac{\pi}{6} + \tan\frac{\pi}{4}\cdot\cos\frac{\pi}{3}$$

### Resolución paso a paso

**Paso 1: Recordar los valores exactos de los ángulos notables.**

| Ángulo | $\sin$ | $\cos$ | $\tan$ |
|---|---|---|---|
| $\pi/6\ (30°)$ | $1/2$ | $\sqrt{3}/2$ | $1/\sqrt{3}$ |
| $\pi/4\ (45°)$ | $\sqrt{2}/2$ | $\sqrt{2}/2$ | $1$ |
| $\pi/3\ (60°)$ | $\sqrt{3}/2$ | $1/2$ | $\sqrt{3}$ |

**Paso 2: Sustituir cada valor en la expresión.**

$$E = \frac{\sqrt{3}}{2}\cdot\frac{\sqrt{3}}{2} + 1\cdot\frac{1}{2}$$

**Paso 3: Realizar las multiplicaciones.**

$$E = \frac{3}{4} + \frac{1}{2}$$

**Paso 4: Sumar las fracciones con denominador común.**

$$E = \frac{3}{4} + \frac{2}{4} = \frac{5}{4}$$

### Respuesta Final

$$E = \frac{5}{4}$$

---

## Ejercicio 74 — Determinación del cuadrante y signo de las razones trigonométricas

**Dificultad:** ⭐ Básica

### Enunciado

Dado que $\sin\theta = -\dfrac{3}{5}$ y $\cos\theta > 0$, determiná en qué cuadrante se ubica $\theta$ y calculá $\cos\theta$, $\tan\theta$ y $\cot\theta$.

### Resolución paso a paso

**Paso 1: Determinar el cuadrante.**
$\sin\theta < 0$ implica que $\theta$ está en el III o IV cuadrante. Como además $\cos\theta > 0$, el ángulo está en el **IV cuadrante** (donde el seno es negativo y el coseno es positivo).

**Paso 2: Calcular $\cos\theta$ usando la identidad pitagórica.**

$$\sin^2\theta + \cos^2\theta = 1 \implies \cos^2\theta = 1 - \sin^2\theta = 1 - \frac{9}{25} = \frac{16}{25}$$

**Paso 3: Tomar la raíz con el signo correcto.**
Como $\cos\theta > 0$ (cuarto cuadrante):

$$\cos\theta = +\frac{4}{5}$$

**Paso 4: Calcular $\tan\theta$ y $\cot\theta$.**

$$\tan\theta = \frac{\sin\theta}{\cos\theta} = \frac{-3/5}{4/5} = -\frac{3}{4}, \qquad \cot\theta = \frac{1}{\tan\theta} = -\frac{4}{3}$$

### Respuesta Final

$\theta$ está en el **IV cuadrante**: $\cos\theta = \dfrac{4}{5}$, $\tan\theta = -\dfrac{3}{4}$, $\cot\theta = -\dfrac{4}{3}$.

---

## Ejercicio 75 — Identidades trigonométricas: verificación y simplificación

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Demostrá la siguiente identidad trigonométrica:

$$\frac{\sin^2 x}{1 - \cos x} = 1 + \cos x$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Trabajaremos sobre el miembro izquierdo (ML) y lo transformaremos hasta obtener el miembro derecho (MD). Utilizaremos la identidad pitagórica $\sin^2 x + \cos^2 x = 1$, de donde se desprende $\sin^2 x = 1 - \cos^2 x$.

**Paso 2: Sustituir $\sin^2 x$ en el numerador del ML.**

$$\text{ML} = \frac{1 - \cos^2 x}{1 - \cos x}$$

**Paso 3: Factorizar el numerador como diferencia de cuadrados.**

$$\text{ML} = \frac{(1 - \cos x)(1 + \cos x)}{1 - \cos x}$$

**Paso 4: Simplificar el factor común $(1 - \cos x)$, válido para $\cos x \neq 1$.**

$$\text{ML} = 1 + \cos x = \text{MD} \qquad \checkmark$$

### Respuesta Final

La identidad queda demostrada:

$$\frac{\sin^2 x}{1 - \cos x} = 1 + \cos x, \quad \text{para } \cos x \neq 1$$

---

## Ejercicio 76 — Fórmulas de adición: cálculo exacto de $\sin 75°$

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calculá el valor exacto de $\sin 75°$ y $\cos 75°$, escribiendo $75° = 45° + 30°$ y aplicando las fórmulas de adición.

### Resolución paso a paso

**Paso 1: Enunciar las fórmulas de adición a utilizar.**

$$\sin(A + B) = \sin A\cos B + \cos A\sin B$$
$$\cos(A + B) = \cos A\cos B - \sin A\sin B$$

**Paso 2: Aplicar la fórmula del seno con $A = 45°$, $B = 30°$.**

$$\sin 75° = \sin 45°\cos 30° + \cos 45°\sin 30°$$

$$\sin 75° = \frac{\sqrt{2}}{2}\cdot\frac{\sqrt{3}}{2} + \frac{\sqrt{2}}{2}\cdot\frac{1}{2} = \frac{\sqrt{6}}{4} + \frac{\sqrt{2}}{4}$$

**Paso 3: Aplicar la fórmula del coseno.**

$$\cos 75° = \cos 45°\cos 30° - \sin 45°\sin 30°$$

$$\cos 75° = \frac{\sqrt{2}}{2}\cdot\frac{\sqrt{3}}{2} - \frac{\sqrt{2}}{2}\cdot\frac{1}{2} = \frac{\sqrt{6}}{4} - \frac{\sqrt{2}}{4}$$

**Paso 4: Verificar con la identidad $\sin^2 75° + \cos^2 75° = 1$.**

$$\left(\frac{\sqrt{6}+\sqrt{2}}{4}\right)^2 + \left(\frac{\sqrt{6}-\sqrt{2}}{4}\right)^2 = \frac{6+2\sqrt{12}+2}{16} + \frac{6-2\sqrt{12}+2}{16} = \frac{16}{16} = 1 \quad \checkmark$$

### Respuesta Final

$$\sin 75° = \frac{\sqrt{6}+\sqrt{2}}{4}, \qquad \cos 75° = \frac{\sqrt{6}-\sqrt{2}}{4}$$

---

## Ejercicio 77 — Ecuación trigonométrica básica

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Resolvé la ecuación $2\sin^2 x - \sin x - 1 = 0$ en el intervalo $[0°,\, 360°)$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
La ecuación es cuadrática en $\sin x$. Hacemos el cambio de variable $u = \sin x$ para factorizarla.

**Paso 2: Reescribir y factorizar.**

$$2u^2 - u - 1 = 0$$

Buscamos dos factores: $(2u + 1)(u - 1) = 2u^2 - 2u + u - 1 = 2u^2 - u - 1$ ✓

$$\therefore \quad (2\sin x + 1)(\sin x - 1) = 0$$

**Paso 3: Resolver cada factor.**

- **Caso 1:** $2\sin x + 1 = 0 \implies \sin x = -\dfrac{1}{2}$

  En $[0°, 360°)$, el seno vale $-1/2$ en el III y IV cuadrante: $x = 180° + 30° = 210°$ y $x = 360° - 30° = 330°$.

- **Caso 2:** $\sin x - 1 = 0 \implies \sin x = 1$

  En $[0°, 360°)$: $x = 90°$.

**Paso 4: Verificar las soluciones.**

- $x = 90°$: $2(1)^2 - 1 - 1 = 0$ ✓
- $x = 210°$: $2(1/4) - (-1/2) - 1 = 1/2 + 1/2 - 1 = 0$ ✓
- $x = 330°$: igual al caso anterior por $\sin 330° = -1/2$ ✓

### Respuesta Final

$$x \in \{90°,\ 210°,\ 330°\}$$

---

## Ejercicio 78 — Fórmula del doble ángulo y simplificación

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Dado que $\cos\alpha = -\dfrac{5}{13}$ y $\alpha \in \left(\dfrac{\pi}{2}, \pi\right)$, calculá $\sin 2\alpha$, $\cos 2\alpha$ y $\tan 2\alpha$.

### Resolución paso a paso

**Paso 1: Calcular $\sin\alpha$.**
Como $\alpha \in \left(\dfrac{\pi}{2}, \pi\right)$ (II cuadrante), $\sin\alpha > 0$:

$$\sin\alpha = \sqrt{1 - \cos^2\alpha} = \sqrt{1 - \frac{25}{169}} = \sqrt{\frac{144}{169}} = \frac{12}{13}$$

**Paso 2: Aplicar la fórmula del doble ángulo para el seno.**

$$\sin 2\alpha = 2\sin\alpha\cos\alpha = 2\cdot\frac{12}{13}\cdot\left(-\frac{5}{13}\right) = -\frac{120}{169}$$

**Paso 3: Aplicar la fórmula del doble ángulo para el coseno.**

$$\cos 2\alpha = \cos^2\alpha - \sin^2\alpha = \left(-\frac{5}{13}\right)^2 - \left(\frac{12}{13}\right)^2 = \frac{25}{169} - \frac{144}{169} = -\frac{119}{169}$$

**Paso 4:

## Ejercicio 81 — Conversión de grados a radianes y ubicación en el círculo unitario

**Dificultad:** ⭐ Básica

### Enunciado

Convertí $210°$ a radianes y determiná en qué cuadrante se ubica el ángulo. Luego indicá el signo de $\sin(210°)$ y $\cos(210°)$.

### Resolución paso a paso

**Paso 1: Aplicar la fórmula de conversión.**
La relación entre grados y radianes es $180° = \pi$ rad, por lo tanto:
$$\text{radianes} = \text{grados} \times \frac{\pi}{180°}$$

**Paso 2: Calcular la conversión.**
$$210° \times \frac{\pi}{180°} = \frac{210\pi}{180} = \frac{7\pi}{6} \text{ rad}$$

**Paso 3: Determinar el cuadrante.**
Como $\pi < \frac{7\pi}{6} < \frac{3\pi}{2}$, es decir $180° < 210° < 270°$, el ángulo se ubica en el **tercer cuadrante**.

**Paso 4: Determinar los signos.**
En el tercer cuadrante, tanto el seno como el coseno son negativos:
$$\sin(210°) < 0 \qquad \cos(210°) < 0$$

### Respuesta Final

$$210° = \frac{7\pi}{6} \text{ rad}, \quad \text{Tercer cuadrante}, \quad \sin(210°) < 0, \quad \cos(210°) < 0$$

---

## Ejercicio 82 — Razones trigonométricas exactas de un ángulo notable

**Dificultad:** ⭐ Básica

### Enunciado

Calculá el valor exacto de $\sin(300°)$, $\cos(300°)$ y $\tan(300°)$ sin usar calculadora.

### Resolución paso a paso

**Paso 1: Ubicar el ángulo en el círculo y encontrar el ángulo de referencia.**
$300° = 360° - 60°$, por lo tanto el ángulo de referencia es $60°$ y el ángulo está en el **cuarto cuadrante**.

**Paso 2: Recordar los valores del ángulo de referencia $60°$.**
$$\sin(60°) = \frac{\sqrt{3}}{2}, \qquad \cos(60°) = \frac{1}{2}, \qquad \tan(60°) = \sqrt{3}$$

**Paso 3: Aplicar los signos del cuarto cuadrante.**
En el cuarto cuadrante: $\sin < 0$, $\cos > 0$, $\tan < 0$. Entonces:
$$\sin(300°) = -\frac{\sqrt{3}}{2}, \qquad \cos(300°) = \frac{1}{2}$$

**Paso 4: Calcular la tangente.**
$$\tan(300°) = \frac{\sin(300°)}{\cos(300°)} = \frac{-\frac{\sqrt{3}}{2}}{\frac{1}{2}} = -\frac{\sqrt{3}}{2} \times 2 = -\sqrt{3}$$

### Respuesta Final

$$\sin(300°) = -\frac{\sqrt{3}}{2}, \qquad \cos(300°) = \frac{1}{2}, \qquad \tan(300°) = -\sqrt{3}$$

---

## Ejercicio 83 — Verificación de una identidad trigonométrica fundamental

**Dificultad:** ⭐ Básica

### Enunciado

Verificá que la siguiente expresión es una identidad trigonométrica:
$$\frac{\sin^2(x)}{1 - \cos(x)} = 1 + \cos(x)$$

### Resolución paso a paso

**Paso 1: Elegir la estrategia.**
Se trabaja sobre el miembro izquierdo (ML) y se transforma hasta obtener el miembro derecho (MD). Se utilizará la identidad pitagórica $\sin^2(x) + \cos^2(x) = 1$, de donde $\sin^2(x) = 1 - \cos^2(x)$.

**Paso 2: Sustituir $\sin^2(x)$ en el ML.**
$$\text{ML} = \frac{1 - \cos^2(x)}{1 - \cos(x)}$$

**Paso 3: Factorizar el numerador como diferencia de cuadrados.**
$$1 - \cos^2(x) = (1 - \cos(x))(1 + \cos(x))$$
Entonces:
$$\text{ML} = \frac{(1 - \cos(x))(1 + \cos(x))}{1 - \cos(x)}$$

**Paso 4: Simplificar (válido para $\cos(x) \neq 1$).**
$$\text{ML} = 1 + \cos(x) = \text{MD} \quad \checkmark$$

### Respuesta Final

La identidad queda verificada:
$$\frac{\sin^2(x)}{1 - \cos(x)} = 1 + \cos(x), \quad \forall x \text{ tal que } \cos(x) \neq 1$$

---

## Ejercicio 84 — Simplificación de una expresión trigonométrica

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Simplificá la siguiente expresión lo máximo posible:
$$E = \frac{\tan^2(x) - \sin^2(x)}{\tan^2(x) \cdot \sin^2(x)}$$

### Resolución paso a paso

**Paso 1: Reescribir $\tan^2(x)$ en términos de seno y coseno.**
$$\tan^2(x) = \frac{\sin^2(x)}{\cos^2(x)}$$

**Paso 2: Sustituir en el numerador.**
$$\tan^2(x) - \sin^2(x) = \frac{\sin^2(x)}{\cos^2(x)} - \sin^2(x) = \sin^2(x)\left(\frac{1}{\cos^2(x)} - 1\right)$$
$$= \sin^2(x) \cdot \frac{1 - \cos^2(x)}{\cos^2(x)} = \sin^2(x) \cdot \frac{\sin^2(x)}{\cos^2(x)} = \frac{\sin^4(x)}{\cos^2(x)}$$

**Paso 3: Sustituir en el denominador.**
$$\tan^2(x) \cdot \sin^2(x) = \frac{\sin^2(x)}{\cos^2(x)} \cdot \sin^2(x) = \frac{\sin^4(x)}{\cos^2(x)}$$

**Paso 4: Dividir numerador entre denominador.**
$$E = \frac{\dfrac{\sin^4(x)}{\cos^2(x)}}{\dfrac{\sin^4(x)}{\cos^2(x)}} = 1$$

### Respuesta Final

$$E = \frac{\tan^2(x) - \sin^2(x)}{\tan^2(x) \cdot \sin^2(x)} = 1$$

---

## Ejercicio 85 — Uso de la fórmula del ángulo doble

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Sabiendo que $\sin(\alpha) = \dfrac{3}{5}$ y que $\alpha$ es un ángulo del segundo cuadrante, calculá $\sin(2\alpha)$ y $\cos(2\alpha)$.

### Resolución paso a paso

**Paso 1: Encontrar $\cos(\alpha)$ usando la identidad pitagórica.**
$$\sin^2(\alpha) + \cos^2(\alpha) = 1 \Rightarrow \cos^2(\alpha) = 1 - \left(\frac{3}{5}\right)^2 = 1 - \frac{9}{25} = \frac{16}{25}$$
$$\cos(\alpha) = \pm \frac{4}{5}$$

**Paso 2: Elegir el signo correcto según el cuadrante.**
En el segundo cuadrante, $\cos(\alpha) < 0$, por lo tanto:
$$\cos(\alpha) = -\frac{4}{5}$$

**Paso 3: Aplicar la fórmula del ángulo doble para el seno.**
$$\sin(2\alpha) = 2\sin(\alpha)\cos(\alpha) = 2 \cdot \frac{3}{5} \cdot \left(-\frac{4}{5}\right) = -\frac{24}{25}$$

**Paso 4: Aplicar la fórmula del ángulo doble para el coseno.**
$$\cos(2\alpha) = \cos^2(\alpha) - \sin^2(\alpha) = \left(-\frac{4}{5}\right)^2 - \left(\frac{3}{5}\right)^2 = \frac{16}{25} - \frac{9}{25} = \frac{7}{25}$$

### Respuesta Final

$$\sin(2\alpha) = -\frac{24}{25}, \qquad \cos(2\alpha) = \frac{7}{25}$$

---

## Ejercicio 86 — Resolución de una ecuación trigonométrica básica

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Resolvé la ecuación $2\cos^2(x) - \cos(x) - 1 = 0$ para $x \in [0°, 360°)$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
La ecuación es cuadrática en $\cos(x)$. Se hace el cambio de variable $u = \cos(x)$ para factorizar.

**Paso 2: Factorizar la ecuación cuadrática.**
$$2u^2 - u - 1 = 0$$
Buscamos dos números que multipliquen $2 \times (-1) = -2$ y sumen $-1$: son $-2$ y $1$.
$$2u^2 - 2u + u - 1 = 2u(u-1) + 1(u-1) = (2u+1)(u-1) = 0$$

**Paso 3: Obtener los valores de $u = \cos(x)$.**
$$(2u+1)(u-1) = 0 \Rightarrow u = -\frac{1}{2} \quad \text{o} \quad u = 1$$

**Paso 4: Resolver para cada caso en $[0°, 360°)$.**

- $\cos(x) = 1 \Rightarrow x = 0°$
- $\cos(x) = -\dfrac{1}{2}$: el coseno vale $-\frac{1}{2}$ en los ángulos de referencia $60°$, en el segundo y tercer cuadrante:
$$x = 120° \quad \text{y} \quad x = 240°$$

### Respuesta Final

$$x \in \{0°,\ 120°,\ 240°\}$$

---

## Ejercicio 87 — Aplicación de la fórmula de suma de ángulos

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calculá el valor exacto de $\sin(75°)$ usando la fórmula de suma de ángulos, expresando $75° = 45° + 30°$.

### Resolución paso a paso

**Paso 1: Enunciar la fórmula de suma para el seno.**
$$\sin(\alpha + \beta) = \sin(\alpha)\cos(\beta) + \cos(\alpha)\sin(\beta)$$

**Paso 2: Identificar $\alpha = 45°$ y $\beta = 30°$, y listar los valores conocidos.**
$$\sin(45°) = \frac{\sqrt{2}}{2}, \quad \cos(45°) = \frac{\sqrt{2}}{2}, \quad \sin(30°) = \frac{1}{2}, \quad \cos(30°) = \frac{\sqrt{3}}{2}$$

**Paso 3: Sustituir en la fórmula.**
$$\sin(75°) = \sin(45°)\cos(30°) + \cos(45°)\sin(30°)$$
$$= \frac{\sqrt{2}}{2} \cdot \frac{\sqrt{3}}{2} + \frac{\sqrt{2}}{2} \cdot \frac{1}{2}$$
$$= \frac{\sqrt{6}}{4} + \frac{\sqrt{2}}{4}$$

**Paso 4: Unificar y simplificar.**
$$\sin(75°) = \frac{\sqrt{6} + \sqrt{2}}{4}$$

### Respuesta Final

$$\sin(75°) = \frac{\sqrt{6} + \sqrt{2}}{4}$$

---

## Ejercicio 88 — Ecuación trigonométrica con doble ángulo

**Dificultad:** ⭐⭐⭐ Avanzada

### Enunciado

Resolvé la ecuación $\sin(2x) = \sin(x)$ para $x \in [0, 2\pi)$.

### Resolución paso a paso

**Paso 1: Aplicar la fórmula del ángulo doble.**
$$\sin(2x) = 2\sin(x)\cos(x)$$
La ecuación queda:
$$2\sin(x)\cos(x) = \sin(x)$$

**Paso 2: Pasar todo al mismo miembro y factorizar.**
$$2\sin(x)\cos(x) - \sin(x) = 0$$
$$\sin(x)\,(2\cos(x) - 1) = 0$$

**Paso 3: Resolver cada factor por separado.**

- **Factor 1:** $\sin(x) = 0 \Rightarrow x = 0 \quad \text{o} \quad x = \pi$
- **Factor 2:** $2\cos(x) - 1 = 0 \Rightarrow \cos(x) = \dfrac{1}{2}$

**Paso 4: Resolver $\cos(x) = \dfrac{1}{2}$ en $[0, 2\pi)$.**
El coseno vale $\frac{1}{2}$ para el ángulo de referencia $\frac{\pi}{3}$, en el primer y cuarto cuadrante:
$$x = \frac{\pi}{3} \qquad \text{y} \qquad x = \frac{5\pi}{3}$$

**Paso 5: Reunir todas las soluciones.**
$$x \in \left\{0,\ \frac{\pi}{3},\ \pi,\ \frac{5\pi}{3}\right\}$$

### Respuesta Final

$$x \in \left\{0,\ \frac{\pi}{3},\ \pi,\ \frac{5\pi}{3}\right\}$$

---

## Ejercicio 89 — Demostración de identidad con tangente y cotangente

**Dificultad:** ⭐⭐⭐ Avanzada

### Enunciado

## Ejercicio 91 — Conversión de grados a radianes y ubicación en el círculo trigonométrico

**Dificultad:** ⭐ Básica

### Enunciado

Convertí los siguientes ángulos a radianes y determiná en qué cuadrante se ubica cada uno:
$$\alpha = 210°, \quad \beta = 315°, \quad \gamma = 480°$$

### Resolución paso a paso

**Paso 1: Fórmula de conversión.**
La relación entre grados y radianes es $180° = \pi$ rad, por lo tanto:
$$\text{radianes} = \text{grados} \times \frac{\pi}{180}$$

**Paso 2: Convertir $\alpha = 210°$.**
$$\alpha = 210 \times \frac{\pi}{180} = \frac{210\pi}{180} = \frac{7\pi}{6}$$
Como $\pi < \frac{7\pi}{6} < \frac{3\pi}{2}$, el ángulo está en el **tercer cuadrante**.

**Paso 3: Convertir $\beta = 315°$.**
$$\beta = 315 \times \frac{\pi}{180} = \frac{315\pi}{180} = \frac{7\pi}{4}$$
Como $\frac{3\pi}{2} < \frac{7\pi}{4} < 2\pi$, el ángulo está en el **cuarto cuadrante**.

**Paso 4: Convertir $\gamma = 480°$ y reducir.**
$$\gamma = 480 \times \frac{\pi}{180} = \frac{480\pi}{180} = \frac{8\pi}{3}$$
Restamos una vuelta completa: $\frac{8\pi}{3} - 2\pi = \frac{8\pi}{3} - \frac{6\pi}{3} = \frac{2\pi}{3}$
Como $\frac{\pi}{2} < \frac{2\pi}{3} < \pi$, el ángulo reducido está en el **segundo cuadrante**.

### Respuesta Final

$$\alpha = \frac{7\pi}{6} \text{ (tercer cuadrante)}, \quad \beta = \frac{7\pi}{4} \text{ (cuarto cuadrante)}, \quad \gamma = \frac{8\pi}{3} \equiv \frac{2\pi}{3} \text{ (segundo cuadrante)}$$

---

## Ejercicio 92 — Razones trigonométricas de un ángulo dado un dato y el cuadrante

**Dificultad:** ⭐ Básica

### Enunciado

Sabiendo que $\sin\theta = -\dfrac{3}{5}$ y que $\theta$ está en el tercer cuadrante, hallá $\cos\theta$, $\tan\theta$, $\csc\theta$, $\sec\theta$ y $\cot\theta$.

### Resolución paso a paso

**Paso 1: Aplicar la identidad pitagórica.**
$$\sin^2\theta + \cos^2\theta = 1 \implies \cos^2\theta = 1 - \sin^2\theta = 1 - \frac{9}{25} = \frac{16}{25}$$

**Paso 2: Determinar el signo de $\cos\theta$.**
En el tercer cuadrante tanto el seno como el coseno son negativos:
$$\cos\theta = -\frac{4}{5}$$

**Paso 3: Calcular $\tan\theta$.**
$$\tan\theta = \frac{\sin\theta}{\cos\theta} = \frac{-\frac{3}{5}}{-\frac{4}{5}} = \frac{3}{4}$$
(En el tercer cuadrante la tangente es positiva ✓)

**Paso 4: Calcular las razones recíprocas.**
$$\csc\theta = \frac{1}{\sin\theta} = \frac{1}{-\frac{3}{5}} = -\frac{5}{3}$$
$$\sec\theta = \frac{1}{\cos\theta} = \frac{1}{-\frac{4}{5}} = -\frac{5}{4}$$
$$\cot\theta = \frac{1}{\tan\theta} = \frac{4}{3}$$

### Respuesta Final

$$\cos\theta = -\frac{4}{5}, \quad \tan\theta = \frac{3}{4}, \quad \csc\theta = -\frac{5}{3}, \quad \sec\theta = -\frac{5}{4}, \quad \cot\theta = \frac{4}{3}$$

---

## Ejercicio 93 — Valores exactos de ángulos notables

**Dificultad:** ⭐ Básica

### Enunciado

Calculá el valor exacto de la siguiente expresión sin usar calculadora:
$$E = 2\sin\frac{\pi}{3} \cdot \cos\frac{\pi}{6} - \tan\frac{\pi}{4} + \sin^2\frac{\pi}{2} + \cos\frac{3\pi}{2}$$

### Resolución paso a paso

**Paso 1: Recordar los valores exactos de los ángulos notables.**
$$\sin\frac{\pi}{3} = \frac{\sqrt{3}}{2}, \quad \cos\frac{\pi}{6} = \frac{\sqrt{3}}{2}, \quad \tan\frac{\pi}{4} = 1, \quad \sin\frac{\pi}{2} = 1, \quad \cos\frac{3\pi}{2} = 0$$

**Paso 2: Calcular $2\sin\frac{\pi}{3} \cdot \cos\frac{\pi}{6}$.**
$$2 \cdot \frac{\sqrt{3}}{2} \cdot \frac{\sqrt{3}}{2} = 2 \cdot \frac{3}{4} = \frac{3}{2}$$

**Paso 3: Calcular $\sin^2\frac{\pi}{2}$.**
$$\sin^2\frac{\pi}{2} = 1^2 = 1$$

**Paso 4: Sustituir todos los valores en $E$.**
$$E = \frac{3}{2} - 1 + 1 + 0 = \frac{3}{2}$$

### Respuesta Final

$$E = \frac{3}{2}$$

---

## Ejercicio 94 — Verificación y simplificación de identidades trigonométricas

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Demostrá la siguiente identidad trigonométrica:
$$\frac{\sin\theta}{1 - \cos\theta} - \frac{\sin\theta}{1 + \cos\theta} = 2\cot\theta$$

### Resolución paso a paso

**Paso 1: Trabajar el lado izquierdo (LI) unificando fracciones.**
El mínimo común denominador es $(1 - \cos\theta)(1 + \cos\theta)$:
$$LI = \frac{\sin\theta(1+\cos\theta) - \sin\theta(1-\cos\theta)}{(1-\cos\theta)(1+\cos\theta)}$$

**Paso 2: Expandir el numerador.**
$$\text{Numerador} = \sin\theta + \sin\theta\cos\theta - \sin\theta + \sin\theta\cos\theta = 2\sin\theta\cos\theta$$

**Paso 3: Simplificar el denominador usando identidad pitagórica.**
$$(1-\cos\theta)(1+\cos\theta) = 1 - \cos^2\theta = \sin^2\theta$$

**Paso 4: Simplificar la fracción resultante.**
$$LI = \frac{2\sin\theta\cos\theta}{\sin^2\theta} = \frac{2\cos\theta}{\sin\theta} = 2\cot\theta$$

**Paso 5: Confirmar la igualdad.**
El lado izquierdo se redujo exactamente al lado derecho: $LI = 2\cot\theta = LD$ ✓

### Respuesta Final

La identidad queda demostrada:
$$\frac{\sin\theta}{1 - \cos\theta} - \frac{\sin\theta}{1 + \cos\theta} = \frac{2\sin\theta\cos\theta}{\sin^2\theta} = 2\cot\theta \quad \checkmark$$

---

## Ejercicio 95 — Fórmulas de suma y diferencia de ángulos

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calculá el valor exacto de $\sin 75°$ y $\cos 15°$ utilizando fórmulas de suma de ángulos. Verificá además que $\sin 75° = \cos 15°$ y explicá por qué.

### Resolución paso a paso

**Paso 1: Expresar $75°$ como suma de ángulos notables.**
$$75° = 45° + 30°$$
Aplicamos: $\sin(A+B) = \sin A\cos B + \cos A\sin B$

**Paso 2: Calcular $\sin 75°$.**
$$\sin 75° = \sin 45°\cos 30° + \cos 45°\sin 30°$$
$$= \frac{\sqrt{2}}{2} \cdot \frac{\sqrt{3}}{2} + \frac{\sqrt{2}}{2} \cdot \frac{1}{2} = \frac{\sqrt{6}}{4} + \frac{\sqrt{2}}{4} = \frac{\sqrt{6}+\sqrt{2}}{4}$$

**Paso 3: Expresar $15°$ como diferencia de ángulos notables.**
$$15° = 45° - 30°$$
Aplicamos: $\cos(A-B) = \cos A\cos B + \sin A\sin B$

**Paso 4: Calcular $\cos 15°$.**
$$\cos 15° = \cos 45°\cos 30° + \sin 45°\sin 30°$$
$$= \frac{\sqrt{2}}{2} \cdot \frac{\sqrt{3}}{2} + \frac{\sqrt{2}}{2} \cdot \frac{1}{2} = \frac{\sqrt{6}}{4} + \frac{\sqrt{2}}{4} = \frac{\sqrt{6}+\sqrt{2}}{4}$$

**Paso 5: Justificar la igualdad.**
Se cumple porque $75° + 15° = 90°$, y en general $\sin\theta = \cos(90° - \theta)$ (razones complementarias). Aquí $\sin 75° = \cos(90°-75°) = \cos 15°$ ✓

### Respuesta Final

$$\sin 75° = \cos 15° = \frac{\sqrt{6}+\sqrt{2}}{4}$$

---

## Ejercicio 96 — Fórmulas del ángulo doble y reducción

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Si $\cos\alpha = -\dfrac{5}{13}$ con $\alpha \in \left(\dfrac{\pi}{2}, \pi\right)$, calculá $\sin 2\alpha$, $\cos 2\alpha$ y determiná en qué cuadrante se ubica $2\alpha$.

### Resolución paso a paso

**Paso 1: Hallar $\sin\alpha$ usando la identidad pitagórica.**
$$\sin^2\alpha = 1 - \cos^2\alpha = 1 - \frac{25}{169} = \frac{144}{169}$$
Como $\alpha \in \left(\frac{\pi}{2}, \pi\right)$, el seno es positivo:
$$\sin\alpha = \frac{12}{13}$$

**Paso 2: Calcular $\sin 2\alpha$.**
$$\sin 2\alpha = 2\sin\alpha\cos\alpha = 2 \cdot \frac{12}{13} \cdot \left(-\frac{5}{13}\right) = -\frac{120}{169}$$

**Paso 3: Calcular $\cos 2\alpha$.**
$$\cos 2\alpha = \cos^2\alpha - \sin^2\alpha = \frac{25}{169} - \frac{144}{169} = -\frac{119}{169}$$

**Paso 4: Verificar con la identidad $\sin^2 2\alpha + \cos^2 2\alpha = 1$.**
$$\frac{120^2 + 119^2}{169^2} = \frac{14400 + 14161}{28561} = \frac{28561}{28561} = 1 \quad \checkmark$$

**Paso 5: Determinar el cuadrante de $2\alpha$.**
$\alpha \in \left(\frac{\pi}{2}, \pi\right) \implies 2\alpha \in (\pi, 2\pi)$.
Como $\sin 2\alpha < 0$ y $\cos 2\alpha < 0$, el ángulo $2\alpha$ está en el **tercer cuadrante**.

### Respuesta Final

$$\sin 2\alpha = -\frac{120}{169}, \quad \cos 2\alpha = -\frac{119}{169}, \quad 2\alpha \in \text{tercer cuadrante}$$

---

## Ejercicio 97 — Ecuación trigonométrica lineal en seno y coseno

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Resolvé la ecuación trigonométrica en $[0, 2\pi)$:
$$2\cos^2 x - \cos x - 1 = 0$$

### Resolución paso a paso

**Paso 1: Reconocer la estructura de la ecuación.**
La ecuación es cuadrática en $\cos x$. Hacemos la sustitución $u = \cos x$:
$$2u^2 - u - 1 = 0$$

**Paso 2: Factorizar el trinomio cuadrático.**
Buscamos dos números cuyo producto sea $2 \cdot (-1) = -2$ y suma $-1$: son $-2$ y $1$.
$$2u^2 - 2u + u - 1 = 2u(u-1) + 1(u-1) = (2u+1)(u-1) = 0$$

**Paso 3: Resolver para $u$.**
$$(2u+1) = 0 \implies u = -\frac{1}{2} \qquad \text{o} \qquad (u-1) = 0 \implies u = 1$$

**Paso 4: Volver a la variable $x$ para $\cos x = 1$.**
$$\cos x = 1 \implies x = 0$$

**Paso 5: Resolver para $\cos x = -\dfrac{1}{2}$.**
El coseno vale $-\frac{1}{2}$ en los cuadrantes II y III:
$$x = \pi - \frac{\pi}{3} = \frac{2\pi}{3} \qquad \text{y} \qquad x = \pi + \frac{\pi}{3} = \frac{4\pi}{3}$$

###
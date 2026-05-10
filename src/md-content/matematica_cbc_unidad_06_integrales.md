# Matemática CBC-UBA — Unidad 6: Integrales
**Generado:** 09/05/2026 22:10:27
**Cantidad:** 100 ejercicios · **Dificultad:** mixta
**Archivo:** `matematica_cbc_unidad_06_integrales.md` · **Timestamp:** 20260509_221027

---

## Ejercicio 1 — Integral de una función potencial y constantes

**Dificultad:** ⭐ Básica

### Enunciado

Calculá la siguiente integral indefinida:

$$\int \left(3x^4 - 5x^2 + 7x - 2\right)\, dx$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Aplicamos la linealidad de la integral y la regla de la potencia:
$$\int x^n\, dx = \frac{x^{n+1}}{n+1} + C, \quad n \neq -1$$
Cada término se integra por separado.

**Paso 2: Integrar el término $3x^4$.**
$$\int 3x^4\, dx = 3 \cdot \frac{x^5}{5} = \frac{3x^5}{5}$$

**Paso 3: Integrar el término $-5x^2$.**
$$\int -5x^2\, dx = -5 \cdot \frac{x^3}{3} = -\frac{5x^3}{3}$$

**Paso 4: Integrar los términos restantes.**
$$\int 7x\, dx = 7 \cdot \frac{x^2}{2} = \frac{7x^2}{2}$$
$$\int -2\, dx = -2x$$

**Paso 5: Reunir todos los términos y agregar la constante de integración.**
$$\int \left(3x^4 - 5x^2 + 7x - 2\right)dx = \frac{3x^5}{5} - \frac{5x^3}{3} + \frac{7x^2}{2} - 2x + C$$

### Respuesta Final

$$\int \left(3x^4 - 5x^2 + 7x - 2\right)dx = \frac{3x^5}{5} - \frac{5x^3}{3} + \frac{7x^2}{2} - 2x + C$$

---

## Ejercicio 2 — Integral de funciones exponencial y trigonométricas

**Dificultad:** ⭐ Básica

### Enunciado

Calculá la siguiente integral indefinida:

$$\int \left(e^x + 4\cos x - \frac{3}{\sin^2 x}\right)dx$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Reconocemos tres primitivas inmediatas:
- $\int e^x\,dx = e^x + C$
- $\int \cos x\,dx = \sin x + C$
- $\int \frac{1}{\sin^2 x}\,dx = \int \csc^2 x\,dx = -\cot x + C$

Aplicamos linealidad para separar los términos.

**Paso 2: Integrar $e^x$.**
$$\int e^x\,dx = e^x$$

**Paso 3: Integrar $4\cos x$.**
$$\int 4\cos x\,dx = 4\sin x$$

**Paso 4: Integrar $-\dfrac{3}{\sin^2 x}$.**
$$\int -\frac{3}{\sin^2 x}\,dx = -3\int \csc^2 x\,dx = -3 \cdot (-\cot x) = 3\cot x$$

**Paso 5: Reunir todos los términos.**
$$\int \left(e^x + 4\cos x - \frac{3}{\sin^2 x}\right)dx = e^x + 4\sin x + 3\cot x + C$$

### Respuesta Final

$$\int \left(e^x + 4\cos x - \frac{3}{\sin^2 x}\right)dx = e^x + 4\sin x + 3\cot x + C$$

---

## Ejercicio 3 — Integral por sustitución simple

**Dificultad:** ⭐ Básica

### Enunciado

Calculá la siguiente integral indefinida usando sustitución:

$$\int \frac{6x}{\left(x^2 + 5\right)^4}\, dx$$

### Resolución paso a paso

**Paso 1: Identificar la sustitución adecuada.**
Observamos que $(x^2+5)$ está elevado a una potencia y su derivada $2x$ aparece (salvo constante) en el numerador. Hacemos:
$$u = x^2 + 5 \implies du = 2x\,dx \implies x\,dx = \frac{du}{2}$$

**Paso 2: Reescribir la integral en términos de $u$.**
$$\int \frac{6x}{(x^2+5)^4}\,dx = \int \frac{6}{u^4} \cdot \frac{du}{2} = \int \frac{3}{u^4}\,du = 3\int u^{-4}\,du$$

**Paso 3: Aplicar la regla de la potencia con $n = -4$.**
$$3\int u^{-4}\,du = 3 \cdot \frac{u^{-3}}{-3} = -u^{-3}$$

**Paso 4: Volver a la variable original.**
$$-u^{-3} = -\frac{1}{u^3} = -\frac{1}{(x^2+5)^3}$$

**Paso 5: Escribir el resultado final.**
$$\int \frac{6x}{(x^2+5)^4}\,dx = -\frac{1}{(x^2+5)^3} + C$$

### Respuesta Final

$$\int \frac{6x}{\left(x^2 + 5\right)^4}\, dx = -\frac{1}{\left(x^2+5\right)^3} + C$$

---

## Ejercicio 4 — Integral definida con Teorema Fundamental del Cálculo

**Dificultad:** ⭐ Básica

### Enunciado

Calculá la siguiente integral definida:

$$\int_1^3 \left(2x^2 - 4x + 1\right)dx$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Aplicamos el Teorema Fundamental del Cálculo (TFC): si $F'(x) = f(x)$, entonces
$$\int_a^b f(x)\,dx = F(b) - F(a)$$
Primero hallamos la primitiva $F(x)$ del integrando.

**Paso 2: Calcular la primitiva.**
$$F(x) = \int \left(2x^2 - 4x + 1\right)dx = \frac{2x^3}{3} - \frac{4x^2}{2} + x = \frac{2x^3}{3} - 2x^2 + x$$

**Paso 3: Evaluar $F(3)$.**
$$F(3) = \frac{2(27)}{3} - 2(9) + 3 = 18 - 18 + 3 = 3$$

**Paso 4: Evaluar $F(1)$.**
$$F(1) = \frac{2(1)}{3} - 2(1) + 1 = \frac{2}{3} - 2 + 1 = \frac{2}{3} - 1 = -\frac{1}{3}$$

**Paso 5: Calcular la diferencia $F(3) - F(1)$.**
$$F(3) - F(1) = 3 - \left(-\frac{1}{3}\right) = 3 + \frac{1}{3} = \frac{10}{3}$$

### Respuesta Final

$$\int_1^3 \left(2x^2 - 4x + 1\right)dx = \frac{10}{3}$$

---

## Ejercicio 5 — Integral por sustitución trigonométrica implícita

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calculá la siguiente integral indefinida:

$$\int \sin^3 x \cdot \cos x\, dx$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
El integrando contiene $\sin^3 x \cdot \cos x$. Dado que $\cos x$ es la derivada de $\sin x$, proponemos la sustitución $u = \sin x$.

**Paso 2: Realizar la sustitución.**
$$u = \sin x \implies du = \cos x\,dx$$
Entonces:
$$\int \sin^3 x \cdot \cos x\,dx = \int u^3\,du$$

**Paso 3: Aplicar la regla de la potencia.**
$$\int u^3\,du = \frac{u^4}{4}$$

**Paso 4: Volver a la variable original.**
$$\frac{u^4}{4} = \frac{\sin^4 x}{4}$$

**Paso 5: Escribir el resultado con la constante de integración.**
$$\int \sin^3 x \cdot \cos x\,dx = \frac{\sin^4 x}{4} + C$$

**Verificación:** Derivando, $\left(\dfrac{\sin^4 x}{4}\right)' = \dfrac{4\sin^3 x \cdot \cos x}{4} = \sin^3 x \cdot \cos x$ ✓

### Respuesta Final

$$\int \sin^3 x \cdot \cos x\, dx = \frac{\sin^4 x}{4} + C$$

---

## Ejercicio 6 — Integral por partes

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calculá la siguiente integral indefinida:

$$\int x \cdot e^{3x}\, dx$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
El integrando es producto de un polinomio y una exponencial. Aplicamos integración por partes:
$$\int u\,dv = uv - \int v\,du$$
Elegimos: $u = x$ (se simplifica al derivar) y $dv = e^{3x}\,dx$ (se puede integrar).

**Paso 2: Calcular $du$ y $v$.**
$$u = x \implies du = dx$$
$$dv = e^{3x}\,dx \implies v = \int e^{3x}\,dx = \frac{e^{3x}}{3}$$

**Paso 3: Aplicar la fórmula de integración por partes.**
$$\int x \cdot e^{3x}\,dx = x \cdot \frac{e^{3x}}{3} - \int \frac{e^{3x}}{3}\,dx$$
$$= \frac{xe^{3x}}{3} - \frac{1}{3}\int e^{3x}\,dx$$

**Paso 4: Resolver la integral restante.**
$$\frac{1}{3}\int e^{3x}\,dx = \frac{1}{3} \cdot \frac{e^{3x}}{3} = \frac{e^{3x}}{9}$$

**Paso 5: Reunir los resultados.**
$$\int x \cdot e^{3x}\,dx = \frac{xe^{3x}}{3} - \frac{e^{3x}}{9} + C = e^{3x}\left(\frac{x}{3} - \frac{1}{9}\right) + C$$

### Respuesta Final

$$\int x \cdot e^{3x}\, dx = e^{3x}\!\left(\frac{x}{3} - \frac{1}{9}\right) + C$$

---

## Ejercicio 7 — Integral de función racional por descomposición en fracciones simples

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calculá la siguiente integral indefinida:

$$\int \frac{5x + 1}{x^2 - x - 6}\, dx$$

### Resolución paso a paso

**Paso 1: Factorizar el denominador.**
Buscamos raíces de $x^2 - x - 6 = 0$:
$$x = \frac{1 \pm \sqrt{1+24}}{2} = \frac{1 \pm 5}{2} \implies x = 3 \text{ o } x = -2$$
Entonces: $x^2 - x - 6 = (x-3)(x+2)$

**Paso 2: Descomponer en fracciones simples.**
$$\frac{5x+1}{(x-3)(x+2)} = \frac{A}{x-3} + \frac{B}{x+2}$$
Multiplicando ambos lados por $(x-3)(x+2)$:
$$5x + 1 = A(x+2) + B(x-3)$$

**Paso 3: Determinar $A$ y $B$.**
- Con $x = 3$: $\quad 16 = 5A \implies A = \dfrac{16}{5}$
- Con $x = -2$: $\quad -9 = -5B \implies B = \dfrac{9}{5}$

**Paso 4: Reescribir la integral descompuesta.**
$$\int \frac{5x+1}{(x-3)(x+2)}\,dx = \int \frac{16/5}{x-3}\,dx + \int \frac{9/5}{x+2}\,dx$$
$$= \frac{16}{5}\int \frac{1}{x-3}\,dx + \frac{9}{5}\int \frac{1}{x+2}\,dx$$

**Paso 5: Integrar cada fracción usando $\int \frac{1}{x-a}\,dx = \ln|x-a| + C$.**
$$= \frac{16}{5}\ln|x-3| + \frac{9}{5}\ln|x+2| + C$$

### Respuesta Final

$$\int \frac{5x + 1}{x^2 - x - 6}\, dx = \frac{16}{5}\ln|x-3| + \frac{9}{5}\ln|x+2| + C$$

---

## Ejercicio 8 — Integral definida con sustitución y cálculo de área

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calculá el área de la región encerrada entre la curva $f(x) = x\sqrt{x^2+16}$ y el eje $x$ en el intervalo $[0,\, 3]$:

$$\int_0^3 x\sqrt{x^2 + 16}\, dx$$

### Resolución paso a paso

**Paso 1: Identificar la sustitución.**
La presencia de $x^2 + 16$ bajo la raíz y el factor $x$ sugieren:
$$u = x^2 + 16 \implies du = 2x\,dx \implies x\,dx = \frac{du}{2}$$

**Paso 2: Cambiar los límites de integración.**
- Cuando $x = 0$: $u = 0 + 16 = 16$
- Cuando $x =

## Ejercicio 11 — Integral de una función polinómica

**Dificultad:** ⭐ Básica

### Enunciado

Calculá la integral indefinida:

$$\int \left(4x^3 - 6x^2 + 5x - 2\right)\, dx$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se aplica la regla de linealidad de la integral: $\int [f(x) \pm g(x)]\,dx = \int f(x)\,dx \pm \int g(x)\,dx$, y la regla de potencias $\int x^n\,dx = \dfrac{x^{n+1}}{n+1} + C$ para cada término.

**Paso 2: Separar la integral en cuatro términos.**

$$\int 4x^3\,dx - \int 6x^2\,dx + \int 5x\,dx - \int 2\,dx$$

**Paso 3: Aplicar la regla de potencias a cada término.**

$$4 \cdot \frac{x^4}{4} - 6 \cdot \frac{x^3}{3} + 5 \cdot \frac{x^2}{2} - 2x + C$$

**Paso 4: Simplificar los coeficientes.**

$$x^4 - 2x^3 + \frac{5x^2}{2} - 2x + C$$

### Respuesta Final

$$\int \left(4x^3 - 6x^2 + 5x - 2\right)dx = x^4 - 2x^3 + \frac{5x^2}{2} - 2x + C$$

---

## Ejercicio 12 — Integral por sustitución simple

**Dificultad:** ⭐ Básica

### Enunciado

Calculá la integral indefinida:

$$\int (3x + 5)^7\, dx$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
La función interior es lineal: $u = 3x + 5$. Se aplica sustitución (cambio de variable). Para una expresión $(ax+b)^n$, basta dividir por el coeficiente de $x$ al integrar.

**Paso 2: Definir el cambio de variable.**

Sea $u = 3x + 5$. Entonces $\dfrac{du}{dx} = 3$, por lo que $dx = \dfrac{du}{3}$.

**Paso 3: Reescribir la integral en términos de $u$.**

$$\int u^7 \cdot \frac{du}{3} = \frac{1}{3}\int u^7\, du$$

**Paso 4: Integrar usando la regla de potencias.**

$$\frac{1}{3} \cdot \frac{u^8}{8} + C = \frac{u^8}{24} + C$$

**Paso 5: Reemplazar $u$ por $3x+5$.**

$$\frac{(3x+5)^8}{24} + C$$

### Respuesta Final

$$\int (3x+5)^7\, dx = \frac{(3x+5)^8}{24} + C$$

---

## Ejercicio 13 — Integral de funciones exponencial y trigonométrica

**Dificultad:** ⭐ Básica

### Enunciado

Calculá la integral indefinida:

$$\int \left(e^{2x} + 3\cos x - \frac{2}{x}\right)dx$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se aplica linealidad. Las primitivas inmediatas necesarias son: $\int e^{ax}\,dx = \dfrac{e^{ax}}{a}+C$, $\int \cos x\,dx = \sin x + C$ y $\int \dfrac{1}{x}\,dx = \ln|x| + C$.

**Paso 2: Separar en tres integrales.**

$$\int e^{2x}\,dx + \int 3\cos x\,dx - \int \frac{2}{x}\,dx$$

**Paso 3: Resolver la primera integral.**

$$\int e^{2x}\,dx = \frac{e^{2x}}{2}$$

**Paso 4: Resolver la segunda integral.**

$$\int 3\cos x\,dx = 3\sin x$$

**Paso 5: Resolver la tercera integral.**

$$\int \frac{2}{x}\,dx = 2\ln|x|$$

**Paso 6: Reunir los resultados.**

$$\frac{e^{2x}}{2} + 3\sin x - 2\ln|x| + C$$

### Respuesta Final

$$\int \left(e^{2x} + 3\cos x - \frac{2}{x}\right)dx = \frac{e^{2x}}{2} + 3\sin x - 2\ln|x| + C$$

---

## Ejercicio 14 — Integral definida con Teorema Fundamental del Cálculo

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calculá la integral definida:

$$\int_1^4 \left(3\sqrt{x} - \frac{1}{x^2}\right)dx$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se aplica el Teorema Fundamental del Cálculo (TFC): $\int_a^b f(x)\,dx = F(b) - F(a)$, donde $F$ es una primitiva de $f$. Primero se reescribe la función con exponentes fraccionarios.

**Paso 2: Reescribir la función.**

$$3\sqrt{x} - \frac{1}{x^2} = 3x^{1/2} - x^{-2}$$

**Paso 3: Calcular la primitiva $F(x)$.**

$$F(x) = 3 \cdot \frac{x^{3/2}}{3/2} - \frac{x^{-1}}{-1} = 2x^{3/2} + x^{-1} = 2x^{3/2} + \frac{1}{x}$$

**Paso 4: Evaluar $F(4)$.**

$$F(4) = 2\cdot(4)^{3/2} + \frac{1}{4} = 2\cdot 8 + \frac{1}{4} = 16 + \frac{1}{4} = \frac{65}{4}$$

**Paso 5: Evaluar $F(1)$.**

$$F(1) = 2\cdot(1)^{3/2} + \frac{1}{1} = 2 + 1 = 3$$

**Paso 6: Aplicar el TFC.**

$$\int_1^4\left(3\sqrt{x}-\frac{1}{x^2}\right)dx = F(4) - F(1) = \frac{65}{4} - 3 = \frac{65}{4} - \frac{12}{4} = \frac{53}{4}$$

### Respuesta Final

$$\int_1^4 \left(3\sqrt{x} - \frac{1}{x^2}\right)dx = \frac{53}{4}$$

---

## Ejercicio 15 — Integral por sustitución con función compuesta

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calculá la integral indefinida:

$$\int x^2 \cdot e^{x^3 - 1}\, dx$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
La función es de la forma $f'(x)\cdot e^{f(x)}$, donde $f(x) = x^3 - 1$ y $f'(x) = 3x^2$. Se aplica sustitución: $u = x^3 - 1$.

**Paso 2: Definir el cambio de variable.**

Sea $u = x^3 - 1$. Entonces $\dfrac{du}{dx} = 3x^2$, es decir $du = 3x^2\,dx$, y por tanto $x^2\,dx = \dfrac{du}{3}$.

**Paso 3: Reescribir la integral en términos de $u$.**

$$\int e^u \cdot \frac{du}{3} = \frac{1}{3}\int e^u\, du$$

**Paso 4: Integrar.**

$$\frac{1}{3} e^u + C$$

**Paso 5: Volver a la variable original.**

$$\frac{1}{3} e^{x^3 - 1} + C$$

### Respuesta Final

$$\int x^2 \cdot e^{x^3-1}\, dx = \frac{1}{3}\,e^{x^3-1} + C$$

---

## Ejercicio 16 — Integral por sustitución trigonométrica

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calculá la integral indefinida:

$$\int \frac{\cos x}{\sin^4 x}\, dx$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se observa que el numerador $\cos x$ es la derivada de $\sin x$. Se realiza la sustitución $u = \sin x$.

**Paso 2: Definir el cambio de variable.**

Sea $u = \sin x$. Entonces $du = \cos x\, dx$.

**Paso 3: Reescribir la integral en términos de $u$.**

$$\int \frac{\cos x}{\sin^4 x}\,dx = \int \frac{du}{u^4} = \int u^{-4}\,du$$

**Paso 4: Aplicar la regla de potencias.**

$$\frac{u^{-3}}{-3} + C = -\frac{1}{3u^3} + C$$

**Paso 5: Volver a la variable original.**

$$-\frac{1}{3\sin^3 x} + C$$

### Respuesta Final

$$\int \frac{\cos x}{\sin^4 x}\, dx = -\frac{1}{3\sin^3 x} + C$$

---

## Ejercicio 17 — Integral por partes

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calculá la integral indefinida:

$$\int x \cdot \ln x\, dx$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se aplica integración por partes: $\int u\,dv = uv - \int v\,du$. La regla LIATE sugiere tomar como $u$ la función logarítmica y como $dv$ la parte algebraica.

**Paso 2: Elegir $u$ y $dv$.**

$$u = \ln x \Rightarrow du = \frac{1}{x}\,dx \qquad dv = x\,dx \Rightarrow v = \frac{x^2}{2}$$

**Paso 3: Aplicar la fórmula de integración por partes.**

$$\int x \ln x\, dx = \frac{x^2}{2}\ln x - \int \frac{x^2}{2} \cdot \frac{1}{x}\,dx$$

**Paso 4: Simplificar el integrando restante.**

$$= \frac{x^2}{2}\ln x - \int \frac{x}{2}\,dx = \frac{x^2}{2}\ln x - \frac{1}{2}\int x\,dx$$

**Paso 5: Resolver la integral restante.**

$$\frac{1}{2}\int x\,dx = \frac{1}{2} \cdot \frac{x^2}{2} = \frac{x^2}{4}$$

**Paso 6: Reunir los resultados.**

$$\frac{x^2}{2}\ln x - \frac{x^2}{4} + C$$

### Respuesta Final

$$\int x\ln x\, dx = \frac{x^2}{2}\ln x - \frac{x^2}{4} + C$$

---

## Ejercicio 18 — Integral por fracciones simples

**Dificultad:** ⭐⭐⭐ Avanzada

### Enunciado

Calculá la integral indefinida:

$$\int \frac{3x + 1}{x^2 - x - 2}\, dx$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
El integrando es una fracción racional propia (grado numerador < grado denominador). Se descompone en fracciones simples factorizando el denominador.

**Paso 2: Factorizar el denominador.**

$$x^2 - x - 2 = (x-2)(x+1)$$

**Paso 3: Plantear la descomposición en fracciones simples.**

$$\frac{3x+1}{(x-2)(x+1)} = \frac{A}{x-2} + \frac{B}{x+1}$$

Multiplicando ambos miembros por $(x-2)(x+1)$:

$$3x + 1 = A(x+1) + B(x-2)$$

**Paso 4: Determinar $A$ y $B$.**

- Haciendo $x = 2$: $\quad 3(2)+1 = A(3) \Rightarrow 7 = 3A \Rightarrow A = \dfrac{7}{3}$
- Haciendo $x = -1$: $\quad 3(-1)+1 = B(-3) \Rightarrow -2 = -3B \Rightarrow B = \dfrac{2}{3}$

**Paso 5: Reescribir la integral descompuesta.**

$$\int \frac{3x+1}{(x-2)(x+1)}\,dx = \int \frac{7/3}{x-2}\,dx + \int \frac{2/3}{x+1}\,dx$$

**Paso 6: Integrar cada fracción.**

$$= \frac{7}{3}\ln|x-2| + \frac{2}{3}\ln|x+1| + C$$

### Respuesta Final

$$\int \frac{3x+1}{x^2-x-2}\,dx = \frac{7}{3}\ln|x-2| + \frac{2}{3}\ln|x+1| + C$$

---

## Ejercicio 19 — Integral definida: área entre dos curvas

**Dificultad:** ⭐⭐⭐ Avanzada

### Enunciado

Calculá el área de la región encerrada entre las curvas $f(x) = x^2$ y $g(x) = 2x + 3$.

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
El área entre dos curvas es $A = \int_a^b [g(x) - f(x)]\,dx$, donde $a$ y $b$ son los puntos de intersección y $g(x) \geq f(x)$ en $[a,b]$.

**Paso 2: Encontrar los puntos de intersección.**

$$x^2

## Ejercicio 21 — Integral de una función polinómica

**Dificultad:** ⭐ Básica

### Enunciado

Calculá la integral indefinida:

$$\int \left(4x^3 - 6x^2 + 5x - 2\right)\, dx$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se aplica la regla de integración término a término y la regla de la potencia:
$$\int x^n\, dx = \frac{x^{n+1}}{n+1} + C, \quad n \neq -1$$

**Paso 2: Integrar el término $4x^3$.**
$$\int 4x^3\, dx = 4 \cdot \frac{x^4}{4} = x^4$$

**Paso 3: Integrar el término $-6x^2$.**
$$\int -6x^2\, dx = -6 \cdot \frac{x^3}{3} = -2x^3$$

**Paso 4: Integrar los términos $5x - 2$.**
$$\int 5x\, dx = 5 \cdot \frac{x^2}{2} = \frac{5x^2}{2}$$
$$\int -2\, dx = -2x$$

**Paso 5: Reunir todos los términos.**
$$\int \left(4x^3 - 6x^2 + 5x - 2\right)\, dx = x^4 - 2x^3 + \frac{5x^2}{2} - 2x + C$$

### Respuesta Final

$$\int \left(4x^3 - 6x^2 + 5x - 2\right)\, dx = x^4 - 2x^3 + \frac{5x^2}{2} - 2x + C$$

---

## Ejercicio 22 — Integral con raíces y potencias negativas

**Dificultad:** ⭐ Básica

### Enunciado

Calculá la integral indefinida:

$$\int \left(\sqrt{x} + \frac{3}{x^2} - 4\right)\, dx$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se reescribe cada término usando notación de potencias para poder aplicar la regla $\int x^n\, dx = \dfrac{x^{n+1}}{n+1} + C$.

**Paso 2: Reescribir la expresión en forma de potencias.**
$$\sqrt{x} = x^{1/2}, \qquad \frac{3}{x^2} = 3x^{-2}$$
La integral queda:
$$\int \left(x^{1/2} + 3x^{-2} - 4\right)\, dx$$

**Paso 3: Integrar $x^{1/2}$.**
$$\int x^{1/2}\, dx = \frac{x^{3/2}}{3/2} = \frac{2}{3}x^{3/2}$$

**Paso 4: Integrar $3x^{-2}$.**
$$\int 3x^{-2}\, dx = 3 \cdot \frac{x^{-1}}{-1} = -\frac{3}{x}$$

**Paso 5: Integrar $-4$.**
$$\int -4\, dx = -4x$$

**Paso 6: Reunir todos los términos.**
$$\int \left(\sqrt{x} + \frac{3}{x^2} - 4\right)\, dx = \frac{2}{3}x^{3/2} - \frac{3}{x} - 4x + C$$

### Respuesta Final

$$\int \left(\sqrt{x} + \frac{3}{x^2} - 4\right)\, dx = \frac{2}{3}x^{3/2} - \frac{3}{x} - 4x + C$$

---

## Ejercicio 23 — Integral por sustitución simple

**Dificultad:** ⭐ Básica

### Enunciado

Calculá la integral indefinida:

$$\int (2x - 5)^7\, dx$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
La expresión es una potencia de una función lineal. Se aplica el método de sustitución (cambio de variable), haciendo $u = 2x - 5$.

**Paso 2: Calcular la diferencial de $u$.**
$$u = 2x - 5 \implies \frac{du}{dx} = 2 \implies du = 2\, dx \implies dx = \frac{du}{2}$$

**Paso 3: Sustituir en la integral.**
$$\int (2x-5)^7\, dx = \int u^7 \cdot \frac{du}{2} = \frac{1}{2}\int u^7\, du$$

**Paso 4: Integrar en términos de $u$.**
$$\frac{1}{2}\int u^7\, du = \frac{1}{2} \cdot \frac{u^8}{8} = \frac{u^8}{16}$$

**Paso 5: Volver a la variable original $x$.**
Reemplazando $u = 2x - 5$:
$$\frac{u^8}{16} = \frac{(2x-5)^8}{16} + C$$

### Respuesta Final

$$\int (2x - 5)^7\, dx = \frac{(2x-5)^8}{16} + C$$

---

## Ejercicio 24 — Integral definida con el Teorema Fundamental del Cálculo

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calculá la integral definida:

$$\int_1^3 \left(3x^2 - 4x + 1\right)\, dx$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se aplica el Teorema Fundamental del Cálculo (TFC): si $F$ es primitiva de $f$, entonces:
$$\int_a^b f(x)\, dx = F(b) - F(a)$$

**Paso 2: Calcular la primitiva de $3x^2 - 4x + 1$.**
$$F(x) = \int (3x^2 - 4x + 1)\, dx = x^3 - 2x^2 + x$$
(Se omite la constante $C$ ya que se cancela al aplicar el TFC.)

**Paso 3: Evaluar $F(3)$.**
$$F(3) = (3)^3 - 2(3)^2 + 3 = 27 - 18 + 3 = 12$$

**Paso 4: Evaluar $F(1)$.**
$$F(1) = (1)^3 - 2(1)^2 + 1 = 1 - 2 + 1 = 0$$

**Paso 5: Aplicar el TFC.**
$$\int_1^3 (3x^2 - 4x + 1)\, dx = F(3) - F(1) = 12 - 0 = 12$$

### Respuesta Final

$$\int_1^3 \left(3x^2 - 4x + 1\right)\, dx = 12$$

---

## Ejercicio 25 — Integral por sustitución con función exponencial

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calculá la integral indefinida:

$$\int x\, e^{x^2 - 1}\, dx$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
El integrando contiene $e$ elevado a una función de $x$, y el factor $x$ es (salvo constante) la derivada del exponente $x^2 - 1$. Esto sugiere la sustitución $u = x^2 - 1$.

**Paso 2: Calcular la diferencial de $u$.**
$$u = x^2 - 1 \implies \frac{du}{dx} = 2x \implies du = 2x\, dx \implies x\, dx = \frac{du}{2}$$

**Paso 3: Sustituir en la integral.**
$$\int x\, e^{x^2 - 1}\, dx = \int e^u \cdot \frac{du}{2} = \frac{1}{2}\int e^u\, du$$

**Paso 4: Integrar en términos de $u$.**
$$\frac{1}{2}\int e^u\, du = \frac{1}{2}e^u + C$$

**Paso 5: Volver a la variable original $x$.**
Reemplazando $u = x^2 - 1$:
$$\frac{1}{2}e^u + C = \frac{1}{2}e^{x^2 - 1} + C$$

### Respuesta Final

$$\int x\, e^{x^2 - 1}\, dx = \frac{1}{2}e^{x^2-1} + C$$

---

## Ejercicio 26 — Integral por sustitución con función logarítmica

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calculá la integral indefinida:

$$\int \frac{(\ln x)^2}{x}\, dx$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
El integrando contiene $(\ln x)^2$ y el factor $\dfrac{1}{x}$, que es exactamente la derivada de $\ln x$. Se aplica la sustitución $u = \ln x$.

**Paso 2: Calcular la diferencial de $u$.**
$$u = \ln x \implies \frac{du}{dx} = \frac{1}{x} \implies du = \frac{dx}{x}$$

**Paso 3: Sustituir en la integral.**
$$\int \frac{(\ln x)^2}{x}\, dx = \int u^2\, du$$

**Paso 4: Integrar en términos de $u$.**
$$\int u^2\, du = \frac{u^3}{3} + C$$

**Paso 5: Volver a la variable original $x$.**
Reemplazando $u = \ln x$:
$$\frac{u^3}{3} + C = \frac{(\ln x)^3}{3} + C$$

### Respuesta Final

$$\int \frac{(\ln x)^2}{x}\, dx = \frac{(\ln x)^3}{3} + C$$

---

## Ejercicio 27 — Integral por partes

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calculá la integral indefinida:

$$\int x\, \ln x\, dx$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
El integrando es un producto de una función algebraica ($x$) y una función logarítmica ($\ln x$). Se aplica la fórmula de integración por partes:
$$\int u\, dv = u \cdot v - \int v\, du$$

**Paso 2: Elegir $u$ y $dv$.**
Conviene derivar el logaritmo (pues simplifica) e integrar la potencia:
$$u = \ln x \implies du = \frac{1}{x}\, dx$$
$$dv = x\, dx \implies v = \frac{x^2}{2}$$

**Paso 3: Aplicar la fórmula de integración por partes.**
$$\int x\, \ln x\, dx = \ln x \cdot \frac{x^2}{2} - \int \frac{x^2}{2} \cdot \frac{1}{x}\, dx$$
$$= \frac{x^2 \ln x}{2} - \frac{1}{2}\int x\, dx$$

**Paso 4: Resolver la integral restante.**
$$\frac{1}{2}\int x\, dx = \frac{1}{2} \cdot \frac{x^2}{2} = \frac{x^2}{4}$$

**Paso 5: Reunir los términos.**
$$\int x\, \ln x\, dx = \frac{x^2 \ln x}{2} - \frac{x^2}{4} + C = \frac{x^2}{4}(2\ln x - 1) + C$$

### Respuesta Final

$$\int x\, \ln x\, dx = \frac{x^2}{4}(2\ln x - 1) + C$$

---

## Ejercicio 28 — Integral de función racional por descomposición en fracciones simples

**Dificultad:** ⭐⭐⭐ Avanzada

### Enunciado

Calculá la integral indefinida:

$$\int \frac{3x + 1}{x^2 - x - 2}\, dx$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
El integrando es una fracción racional propia (grado del numerador menor que el del denominador). Se factoriza el denominador y se descompone en fracciones parciales.

**Paso 2: Factorizar el denominador.**
Se buscan raíces de $x^2 - x - 2 = 0$:
$$x = \frac{1 \pm \sqrt{1 + 8}}{2} = \frac{1 \pm 3}{2} \implies x_1 = 2,\; x_2 = -1$$
Entonces: $x^2 - x - 2 = (x - 2)(x + 1)$

**Paso 3: Plantear la descomposición en fracciones parciales.**
$$\frac{3x + 1}{(x-2)(x+1)} = \frac{A}{x-2} + \frac{B}{x+1}$$
Multiplicando ambos miembros por $(x-2)(x+1)$:
$$3x + 1 = A(x+1) + B(x-2)$$

**Paso 4: Determinar las constantes $A$ y $B$.**
- Con $x = 2$: $\;3(2)+1 = A(3) \implies 7 = 3A \implies A = \dfrac{7}{3}$
- Con $x = -1$: $\;3(-1)+1 = B(-3) \implies -2 = -3B \implies B = \dfrac{2}{3}$

**Paso 5: Reescribir y separar la integral.**
$$\int \frac{3x+1}{(x-2)(x+1)}\, dx = \int \frac{7/3}{x-2}\, dx + \int \frac{2/3}{x+1}\, dx$$
$$= \frac{7}{3}\int \frac{dx}{x-2} + \frac{2}{3}\int \frac{dx}{x+1}$$

**Paso 6: Integrar cada término.**
$$\int \frac{dx}{x-2} = \ln|x-2|, \qquad \int \frac{dx}{x+1} = \ln|x+1|$$

**Paso 7: Reunir los resultados.**
$$

## Ejercicio 31 — Integral de una función polinómica

**Dificultad:** ⭐ Básica

### Enunciado

Calculá la integral indefinida:

$$\int \left(4x^3 - 6x^2 + 5x - 2\right)\, dx$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se aplica la linealidad de la integral y la regla de la potencia:
$$\int x^n\, dx = \frac{x^{n+1}}{n+1} + C, \quad n \neq -1$$
Cada término se integra por separado.

**Paso 2: Integrar el término $4x^3$.**
$$\int 4x^3\, dx = 4 \cdot \frac{x^4}{4} = x^4$$

**Paso 3: Integrar el término $-6x^2$.**
$$\int -6x^2\, dx = -6 \cdot \frac{x^3}{3} = -2x^3$$

**Paso 4: Integrar los términos restantes.**
$$\int 5x\, dx = 5 \cdot \frac{x^2}{2} = \frac{5x^2}{2}$$
$$\int -2\, dx = -2x$$

**Paso 5: Reunir todos los términos y agregar la constante de integración.**
$$x^4 - 2x^3 + \frac{5x^2}{2} - 2x + C$$

### Respuesta Final

$$\int \left(4x^3 - 6x^2 + 5x - 2\right) dx = x^4 - 2x^3 + \frac{5x^2}{2} - 2x + C$$

---

## Ejercicio 32 — Integral de funciones con raíces y potencias negativas

**Dificultad:** ⭐ Básica

### Enunciado

Calculá la integral indefinida:

$$\int \left(\sqrt{x} + \frac{3}{x^2} - \frac{1}{\sqrt[3]{x}}\right) dx$$

### Resolución paso a paso

**Paso 1: Reescribir cada término como potencia de $x$.**
Se convierte cada expresión para aplicar la regla de la potencia:
$$\sqrt{x} = x^{1/2}, \quad \frac{3}{x^2} = 3x^{-2}, \quad \frac{1}{\sqrt[3]{x}} = x^{-1/3}$$

La integral queda:
$$\int \left(x^{1/2} + 3x^{-2} - x^{-1/3}\right) dx$$

**Paso 2: Integrar $x^{1/2}$.**
$$\int x^{1/2}\, dx = \frac{x^{3/2}}{3/2} = \frac{2}{3}x^{3/2}$$

**Paso 3: Integrar $3x^{-2}$.**
$$\int 3x^{-2}\, dx = 3 \cdot \frac{x^{-1}}{-1} = -\frac{3}{x}$$

**Paso 4: Integrar $-x^{-1/3}$.**
$$\int -x^{-1/3}\, dx = -\frac{x^{2/3}}{2/3} = -\frac{3}{2}x^{2/3}$$

**Paso 5: Reunir los resultados.**
$$\frac{2}{3}x^{3/2} - \frac{3}{x} - \frac{3}{2}x^{2/3} + C$$

### Respuesta Final

$$\int \left(\sqrt{x} + \frac{3}{x^2} - \frac{1}{\sqrt[3]{x}}\right) dx = \frac{2}{3}x^{3/2} - \frac{3}{x} - \frac{3}{2}x^{2/3} + C$$

---

## Ejercicio 33 — Integral definida con aplicación del Teorema Fundamental del Cálculo

**Dificultad:** ⭐ Básica

### Enunciado

Calculá la integral definida:

$$\int_1^3 \left(2x^2 - 4x + 1\right) dx$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se aplica el Teorema Fundamental del Cálculo (TFC): si $F$ es una primitiva de $f$, entonces:
$$\int_a^b f(x)\, dx = F(b) - F(a)$$

**Paso 2: Hallar la primitiva $F(x)$.**
$$F(x) = \frac{2x^3}{3} - \frac{4x^2}{2} + x = \frac{2x^3}{3} - 2x^2 + x$$

**Paso 3: Evaluar $F(3)$.**
$$F(3) = \frac{2(27)}{3} - 2(9) + 3 = 18 - 18 + 3 = 3$$

**Paso 4: Evaluar $F(1)$.**
$$F(1) = \frac{2(1)}{3} - 2(1) + 1 = \frac{2}{3} - 2 + 1 = \frac{2}{3} - 1 = -\frac{1}{3}$$

**Paso 5: Aplicar el TFC.**
$$\int_1^3 \left(2x^2 - 4x + 1\right) dx = F(3) - F(1) = 3 - \left(-\frac{1}{3}\right) = 3 + \frac{1}{3} = \frac{10}{3}$$

### Respuesta Final

$$\int_1^3 \left(2x^2 - 4x + 1\right) dx = \frac{10}{3}$$

---

## Ejercicio 34 — Integración por sustitución simple

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calculá la integral indefinida:

$$\int \frac{3x^2}{(x^3 + 5)^4}\, dx$$

### Resolución paso a paso

**Paso 1: Identificar la sustitución adecuada.**
Se observa que el numerador $3x^2$ es exactamente la derivada del argumento $x^3 + 5$. Se propone la sustitución:
$$u = x^3 + 5 \implies du = 3x^2\, dx$$

**Paso 2: Reescribir la integral en términos de $u$.**
$$\int \frac{3x^2}{(x^3+5)^4}\, dx = \int \frac{du}{u^4} = \int u^{-4}\, du$$

**Paso 3: Integrar usando la regla de la potencia.**
$$\int u^{-4}\, du = \frac{u^{-3}}{-3} = -\frac{1}{3u^3}$$

**Paso 4: Volver a la variable original sustituyendo $u = x^3 + 5$.**
$$-\frac{1}{3(x^3+5)^3} + C$$

**Paso 5: Verificación (derivada del resultado).**
$$\frac{d}{dx}\left[-\frac{1}{3(x^3+5)^3}\right] = -\frac{1}{3} \cdot (-3)(x^3+5)^{-4} \cdot 3x^2 = \frac{3x^2}{(x^3+5)^4} \checkmark$$

### Respuesta Final

$$\int \frac{3x^2}{(x^3 + 5)^4}\, dx = -\frac{1}{3(x^3+5)^3} + C$$

---

## Ejercicio 35 — Integral de función trigonométrica por sustitución

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calculá la integral indefinida:

$$\int \sin^4(x)\cos(x)\, dx$$

### Resolución paso a paso

**Paso 1: Identificar la sustitución.**
Se observa que $\cos(x)$ es la derivada de $\sin(x)$. Se propone:
$$u = \sin(x) \implies du = \cos(x)\, dx$$

**Paso 2: Reescribir la integral en términos de $u$.**
$$\int \sin^4(x)\cos(x)\, dx = \int u^4\, du$$

**Paso 3: Integrar la potencia.**
$$\int u^4\, du = \frac{u^5}{5}$$

**Paso 4: Volver a la variable original.**
$$\frac{u^5}{5} + C = \frac{\sin^5(x)}{5} + C$$

**Paso 5: Verificación.**
$$\frac{d}{dx}\left[\frac{\sin^5(x)}{5}\right] = \frac{5\sin^4(x)\cos(x)}{5} = \sin^4(x)\cos(x) \checkmark$$

### Respuesta Final

$$\int \sin^4(x)\cos(x)\, dx = \frac{\sin^5(x)}{5} + C$$

---

## Ejercicio 36 — Integral de función exponencial con sustitución

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calculá la integral indefinida:

$$\int x \cdot e^{x^2 - 3}\, dx$$

### Resolución paso a paso

**Paso 1: Identificar la sustitución adecuada.**
Se observa que el factor $x$ es proporcional a la derivada del exponente $x^2 - 3$. Se propone:
$$u = x^2 - 3 \implies du = 2x\, dx \implies x\, dx = \frac{du}{2}$$

**Paso 2: Reescribir la integral en términos de $u$.**
$$\int x \cdot e^{x^2-3}\, dx = \int e^u \cdot \frac{du}{2} = \frac{1}{2}\int e^u\, du$$

**Paso 3: Integrar la exponencial.**
$$\frac{1}{2}\int e^u\, du = \frac{1}{2}e^u$$

**Paso 4: Volver a la variable original.**
$$\frac{1}{2}e^{x^2-3} + C$$

**Paso 5: Verificación.**
$$\frac{d}{dx}\left[\frac{1}{2}e^{x^2-3}\right] = \frac{1}{2} \cdot e^{x^2-3} \cdot 2x = x\,e^{x^2-3} \checkmark$$

### Respuesta Final

$$\int x \cdot e^{x^2 - 3}\, dx = \frac{1}{2}e^{x^2 - 3} + C$$

---

## Ejercicio 37 — Integral definida con función logarítmica (sustitución)

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calculá la integral definida:

$$\int_1^e \frac{3(\ln x)^2}{x}\, dx$$

### Resolución paso a paso

**Paso 1: Elegir la sustitución.**
El factor $\frac{1}{x}$ es la derivada de $\ln x$. Se propone:
$$u = \ln x \implies du = \frac{dx}{x}$$

**Paso 2: Cambiar los límites de integración.**
- Cuando $x = 1$: $u = \ln 1 = 0$
- Cuando $x = e$: $u = \ln e = 1$

**Paso 3: Reescribir la integral en términos de $u$.**
$$\int_1^e \frac{3(\ln x)^2}{x}\, dx = \int_0^1 3u^2\, du$$

**Paso 4: Integrar.**
$$\int_0^1 3u^2\, du = \left[u^3\right]_0^1$$

**Paso 5: Aplicar los límites.**
$$\left[u^3\right]_0^1 = 1^3 - 0^3 = 1$$

### Respuesta Final

$$\int_1^e \frac{3(\ln x)^2}{x}\, dx = 1$$

---

## Ejercicio 38 — Integración por partes

**Dificultad:** ⭐⭐⭐ Avanzada

### Enunciado

Calculá la integral indefinida:

$$\int x^2 \ln(x)\, dx$$

### Resolución paso a paso

**Paso 1: Identificar la fórmula y las partes.**
Se aplica integración por partes:
$$\int u\, dv = uv - \int v\, du$$
Se elige:
$$u = \ln(x) \implies du = \frac{1}{x}\, dx$$
$$dv = x^2\, dx \implies v = \frac{x^3}{3}$$

La elección sigue la regla ILATE (logarítmica antes que algebraica).

**Paso 2: Aplicar la fórmula.**
$$\int x^2 \ln(x)\, dx = \frac{x^3}{3}\ln(x) - \int \frac{x^3}{3} \cdot \frac{1}{x}\, dx$$

**Paso 3: Simplificar la integral restante.**
$$\int \frac{x^3}{3} \cdot \frac{1}{x}\, dx = \int \frac{x^2}{3}\, dx = \frac{1}{3} \cdot \frac{x^3}{3} = \frac{x^3}{9}$$

**Paso 4: Reunir los resultados.**
$$\int x^2 \ln(x)\, dx = \frac{x^3}{3}\ln(x) - \frac{x^3}{9} + C$$

**Paso 5: Verificación mediante derivación.**
$$\frac{d}{dx}\left[\frac{x^3}{3}\ln x - \frac{x^3}{9}\right] = x^2\ln x + \frac{x^3}{3}\cdot\frac{1}{x} - \frac{x^2}{3} = x^2\ln x + \frac{x^2}{3} - \frac{x^2}{3} = x^2\ln x \checkmark$$

### Respuesta Final

$$\int x^2 \ln(x)\, dx = \frac{x^3}{3}\ln(x) - \frac{x^3}{9} + C$$

---

## Ejercicio 39 — Integral por fracciones simples

**Dificultad:** ⭐⭐⭐ Avanzada

### Enunciado

Calculá la integral indefinida:

$$\int \frac{5x + 1}{x^2 - x - 2}\, dx$$

### Resolución paso a paso

**Paso 1: Fact

## Ejercicio 41 — Integral de una función polinómica

**Dificultad:** ⭐ Básica

### Enunciado

Calculá la integral indefinida:

$$\int \left(4x^3 - 6x^2 + 5x - 2\right)\, dx$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Aplicamos la regla de la potencia para integrales: $\int x^n\, dx = \dfrac{x^{n+1}}{n+1} + C$, con $n \neq -1$. Luego usamos linealidad de la integral para integrar término a término.

**Paso 2: Integrar el término $4x^3$.**

$$\int 4x^3\, dx = 4 \cdot \frac{x^{3+1}}{3+1} = 4 \cdot \frac{x^4}{4} = x^4$$

**Paso 3: Integrar el término $-6x^2$.**

$$\int -6x^2\, dx = -6 \cdot \frac{x^{2+1}}{2+1} = -6 \cdot \frac{x^3}{3} = -2x^3$$

**Paso 4: Integrar los términos $5x - 2$.**

$$\int 5x\, dx = 5 \cdot \frac{x^2}{2} = \frac{5x^2}{2}$$

$$\int -2\, dx = -2x$$

**Paso 5: Reunir todos los términos y agregar la constante de integración.**

$$\int \left(4x^3 - 6x^2 + 5x - 2\right)\, dx = x^4 - 2x^3 + \frac{5x^2}{2} - 2x + C$$

### Respuesta Final

$$\boxed{x^4 - 2x^3 + \frac{5x^2}{2} - 2x + C}$$

---

## Ejercicio 42 — Integral con raíces y potencias negativas

**Dificultad:** ⭐ Básica

### Enunciado

Calculá la integral indefinida:

$$\int \left(\sqrt{x} + \frac{3}{x^2} - \frac{1}{\sqrt[3]{x}}\right) dx$$

### Resolución paso a paso

**Paso 1: Reescribir la expresión con notación de potencias.**
Convertimos cada término usando exponentes racionales y negativos para poder aplicar la regla de la potencia:

$$\sqrt{x} = x^{1/2}, \qquad \frac{3}{x^2} = 3x^{-2}, \qquad \frac{1}{\sqrt[3]{x}} = x^{-1/3}$$

La integral queda:

$$\int \left(x^{1/2} + 3x^{-2} - x^{-1/3}\right) dx$$

**Paso 2: Integrar $x^{1/2}$.**

$$\int x^{1/2}\, dx = \frac{x^{1/2+1}}{1/2+1} = \frac{x^{3/2}}{3/2} = \frac{2}{3}x^{3/2}$$

**Paso 3: Integrar $3x^{-2}$.**

$$\int 3x^{-2}\, dx = 3 \cdot \frac{x^{-2+1}}{-2+1} = 3 \cdot \frac{x^{-1}}{-1} = -\frac{3}{x}$$

**Paso 4: Integrar $-x^{-1/3}$.**

$$\int -x^{-1/3}\, dx = -\frac{x^{-1/3+1}}{-1/3+1} = -\frac{x^{2/3}}{2/3} = -\frac{3}{2}x^{2/3}$$

**Paso 5: Reunir todos los términos.**

$$\int \left(x^{1/2} + 3x^{-2} - x^{-1/3}\right) dx = \frac{2}{3}x^{3/2} - \frac{3}{x} - \frac{3}{2}x^{2/3} + C$$

### Respuesta Final

$$\boxed{\frac{2}{3}x^{3/2} - \frac{3}{x} - \frac{3}{2}x^{2/3} + C}$$

---

## Ejercicio 43 — Integral definida de una función cuadrática

**Dificultad:** ⭐ Básica

### Enunciado

Calculá la integral definida:

$$\int_1^3 \left(2x^2 - 4x + 1\right) dx$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Primero obtenemos la primitiva $F(x)$ del integrando, luego aplicamos el Teorema Fundamental del Cálculo (TFC): $\int_a^b f(x)\,dx = F(b) - F(a)$.

**Paso 2: Calcular la primitiva $F(x)$.**

$$F(x) = \int \left(2x^2 - 4x + 1\right) dx = \frac{2x^3}{3} - \frac{4x^2}{2} + x = \frac{2x^3}{3} - 2x^2 + x$$

**Paso 3: Evaluar $F(3)$.**

$$F(3) = \frac{2(3)^3}{3} - 2(3)^2 + 3 = \frac{2 \cdot 27}{3} - 2 \cdot 9 + 3 = 18 - 18 + 3 = 3$$

**Paso 4: Evaluar $F(1)$.**

$$F(1) = \frac{2(1)^3}{3} - 2(1)^2 + 1 = \frac{2}{3} - 2 + 1 = \frac{2}{3} - 1 = -\frac{1}{3}$$

**Paso 5: Aplicar el TFC.**

$$\int_1^3 \left(2x^2 - 4x + 1\right) dx = F(3) - F(1) = 3 - \left(-\frac{1}{3}\right) = 3 + \frac{1}{3} = \frac{10}{3}$$

### Respuesta Final

$$\boxed{\dfrac{10}{3}}$$

---

## Ejercicio 44 — Integral por sustitución simple

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calculá la integral indefinida:

$$\int (3x + 5)^7\, dx$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
El integrando es una potencia de una función lineal. Aplicamos sustitución: si $u = g(x)$, entonces $du = g'(x)\,dx$, y despejamos $dx$ en función de $du$.

**Paso 2: Definir la sustitución.**

Sea $u = 3x + 5$, entonces:

$$\frac{du}{dx} = 3 \implies dx = \frac{du}{3}$$

**Paso 3: Reescribir la integral en términos de $u$.**

$$\int (3x+5)^7\, dx = \int u^7 \cdot \frac{du}{3} = \frac{1}{3}\int u^7\, du$$

**Paso 4: Integrar en $u$.**

$$\frac{1}{3}\int u^7\, du = \frac{1}{3} \cdot \frac{u^8}{8} = \frac{u^8}{24}$$

**Paso 5: Volver a la variable original sustituyendo $u = 3x + 5$.**

$$\frac{u^8}{24} + C = \frac{(3x+5)^8}{24} + C$$

### Respuesta Final

$$\boxed{\dfrac{(3x+5)^8}{24} + C}$$

---

## Ejercicio 45 — Integral por sustitución de función compuesta

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calculá la integral indefinida:

$$\int x \cdot e^{x^2 - 1}\, dx$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Observamos que el factor $x$ es (salvo constante) la derivada del exponente $x^2 - 1$. Aplicamos sustitución $u = x^2 - 1$.

**Paso 2: Definir la sustitución.**

$$u = x^2 - 1 \implies \frac{du}{dx} = 2x \implies x\, dx = \frac{du}{2}$$

**Paso 3: Reescribir la integral en términos de $u$.**

$$\int x \cdot e^{x^2-1}\, dx = \int e^u \cdot \frac{du}{2} = \frac{1}{2}\int e^u\, du$$

**Paso 4: Integrar en $u$.**

$$\frac{1}{2}\int e^u\, du = \frac{1}{2} e^u + C$$

**Paso 5: Volver a la variable original.**

$$\frac{1}{2} e^u + C = \frac{1}{2} e^{x^2 - 1} + C$$

### Respuesta Final

$$\boxed{\dfrac{1}{2}\,e^{x^2-1} + C}$$

---

## Ejercicio 46 — Integral de función racional por sustitución

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calculá la integral indefinida:

$$\int \frac{2x + 1}{x^2 + x - 3}\, dx$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
El numerador $2x + 1$ es exactamente la derivada del denominador $x^2 + x - 3$. Esto corresponde a una integral del tipo $\int \dfrac{f'(x)}{f(x)}\,dx = \ln|f(x)| + C$.

**Paso 2: Verificar que el numerador es la derivada del denominador.**

Sea $f(x) = x^2 + x - 3$. Entonces:

$$f'(x) = 2x + 1 \quad \checkmark$$

**Paso 3: Aplicar la sustitución $u = x^2 + x - 3$.**

$$u = x^2 + x - 3 \implies du = (2x+1)\,dx$$

**Paso 4: Reescribir y resolver la integral.**

$$\int \frac{2x+1}{x^2+x-3}\,dx = \int \frac{du}{u} = \ln|u| + C$$

**Paso 5: Volver a la variable original.**

$$\ln|u| + C = \ln\left|x^2 + x - 3\right| + C$$

### Respuesta Final

$$\boxed{\ln\left|x^2 + x - 3\right| + C}$$

---

## Ejercicio 47 — Integral definida con sustitución y cambio de límites

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calculá la integral definida:

$$\int_0^2 x\sqrt{x^2 + 1}\, dx$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Aplicamos sustitución $u = x^2 + 1$. Como es integral definida, cambiamos los límites de integración en función de $u$.

**Paso 2: Definir la sustitución y cambiar los límites.**

$$u = x^2 + 1 \implies du = 2x\,dx \implies x\,dx = \frac{du}{2}$$

Límites:
- $x = 0 \Rightarrow u = 0^2 + 1 = 1$
- $x = 2 \Rightarrow u = 2^2 + 1 = 5$

**Paso 3: Reescribir la integral con los nuevos límites.**

$$\int_0^2 x\sqrt{x^2+1}\, dx = \int_1^5 \sqrt{u} \cdot \frac{du}{2} = \frac{1}{2}\int_1^5 u^{1/2}\, du$$

**Paso 4: Integrar en $u$.**

$$\frac{1}{2}\int_1^5 u^{1/2}\, du = \frac{1}{2} \cdot \left[\frac{u^{3/2}}{3/2}\right]_1^5 = \frac{1}{2} \cdot \frac{2}{3}\left[u^{3/2}\right]_1^5 = \frac{1}{3}\left[u^{3/2}\right]_1^5$$

**Paso 5: Evaluar en los límites.**

$$\frac{1}{3}\left(5^{3/2} - 1^{3/2}\right) = \frac{1}{3}\left(5\sqrt{5} - 1\right)$$

### Respuesta Final

$$\boxed{\dfrac{5\sqrt{5}-1}{3}}$$

---

## Ejercicio 48 — Integral por integración por partes

**Dificultad:** ⭐⭐⭐ Avanzada

### Enunciado

Calculá la integral indefinida:

$$\int x^2 \ln(x)\, dx$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Aplicamos integración por partes: $\int u\,dv = uv - \int v\,du$. Elegimos $u$ e $dv$ siguiendo la regla LIATE (Logarítmica, Inversa trigonométrica, Algebraica, Trigonométrica, Exponencial): tomamos la función logarítmica como $u$.

**Paso 2: Definir $u$, $dv$, calcular $du$ y $v$.**

$$u = \ln(x) \implies du = \frac{1}{x}\,dx$$

$$dv = x^2\,dx \implies v = \int x^2\,dx = \frac{x^3}{3}$$

**Paso 3: Aplicar la fórmula de integración por partes.**

$$\int x^2 \ln(x)\,dx = \frac{x^3}{3}\ln(x) - \int \frac{x^3}{3} \cdot \frac{1}{x}\,dx$$

**Paso 4: Simplificar el integrando restante.**

$$\int \frac{x^3}{3} \cdot \frac{1}{x}\,dx = \int \frac{x^2}{3}\,dx = \frac{1}{3} \cdot \frac{x^3}{3} = \frac

## Ejercicio 51 — Integral de una función polinómica

**Dificultad:** ⭐ Básica

### Enunciado

Calculá la integral indefinida:

$$\int \left(4x^3 - 6x^2 + 5x - 2\right)\,dx$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se aplica la linealidad de la integral y la regla de la potencia:
$$\int x^n\,dx = \frac{x^{n+1}}{n+1} + C, \quad n \neq -1$$

**Paso 2: Separar la integral por la linealidad.**
$$\int 4x^3\,dx - \int 6x^2\,dx + \int 5x\,dx - \int 2\,dx$$

**Paso 3: Aplicar la regla de la potencia a cada término.**
$$4 \cdot \frac{x^4}{4} - 6 \cdot \frac{x^3}{3} + 5 \cdot \frac{x^2}{2} - 2x$$

**Paso 4: Simplificar los coeficientes.**
$$x^4 - 2x^3 + \frac{5x^2}{2} - 2x + C$$

### Respuesta Final

$$\int \left(4x^3 - 6x^2 + 5x - 2\right)\,dx = x^4 - 2x^3 + \frac{5x^2}{2} - 2x + C$$

---

## Ejercicio 52 — Integral de función con raíces y potencias negativas

**Dificultad:** ⭐ Básica

### Enunciado

Calculá la integral indefinida:

$$\int \left(\sqrt{x} + \frac{3}{x^2} - 4\right)\,dx$$

### Resolución paso a paso

**Paso 1: Reescribir la expresión con potencias fraccionarias y negativas.**
$$\sqrt{x} = x^{1/2}, \qquad \frac{3}{x^2} = 3x^{-2}$$
Entonces la integral queda:
$$\int \left(x^{1/2} + 3x^{-2} - 4\right)\,dx$$

**Paso 2: Separar por linealidad.**
$$\int x^{1/2}\,dx + \int 3x^{-2}\,dx - \int 4\,dx$$

**Paso 3: Aplicar la regla de la potencia a cada término.**
$$\frac{x^{3/2}}{3/2} + 3\cdot\frac{x^{-1}}{-1} - 4x$$

**Paso 4: Simplificar cada fracción.**
$$\frac{2}{3}x^{3/2} - \frac{3}{x} - 4x + C$$

### Respuesta Final

$$\int \left(\sqrt{x} + \frac{3}{x^2} - 4\right)\,dx = \frac{2}{3}x^{3/2} - \frac{3}{x} - 4x + C$$

---

## Ejercicio 53 — Integral por sustitución simple

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calculá la integral indefinida:

$$\int (3x+5)^7\,dx$$

### Resolución paso a paso

**Paso 1: Identificar la sustitución adecuada.**
El integrando es una potencia de una función lineal. Se propone:
$$u = 3x + 5 \implies du = 3\,dx \implies dx = \frac{du}{3}$$

**Paso 2: Reescribir la integral en términos de $u$.**
$$\int u^7 \cdot \frac{du}{3} = \frac{1}{3}\int u^7\,du$$

**Paso 3: Aplicar la regla de la potencia.**
$$\frac{1}{3} \cdot \frac{u^8}{8} + C = \frac{u^8}{24} + C$$

**Paso 4: Volver a la variable original $x$.**
Reemplazando $u = 3x+5$:
$$\frac{(3x+5)^8}{24} + C$$

**Paso 5: Verificación rápida derivando el resultado.**
$$\frac{d}{dx}\left[\frac{(3x+5)^8}{24}\right] = \frac{8(3x+5)^7 \cdot 3}{24} = (3x+5)^7 \checkmark$$

### Respuesta Final

$$\int (3x+5)^7\,dx = \frac{(3x+5)^8}{24} + C$$

---

## Ejercicio 54 — Integral por sustitución con función exponencial

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calculá la integral indefinida:

$$\int x\,e^{x^2 - 1}\,dx$$

### Resolución paso a paso

**Paso 1: Identificar la sustitución.**
El exponente es $x^2 - 1$. Su derivada es $2x$, y el integrando tiene el factor $x$. Se propone:
$$u = x^2 - 1 \implies du = 2x\,dx \implies x\,dx = \frac{du}{2}$$

**Paso 2: Reescribir la integral en términos de $u$.**
$$\int e^u \cdot \frac{du}{2} = \frac{1}{2}\int e^u\,du$$

**Paso 3: Calcular la integral de la exponencial.**
$$\frac{1}{2}\,e^u + C$$

**Paso 4: Volver a la variable original.**
$$\frac{1}{2}\,e^{x^2-1} + C$$

### Respuesta Final

$$\int x\,e^{x^2 - 1}\,dx = \frac{1}{2}\,e^{x^2-1} + C$$

---

## Ejercicio 55 — Integral definida y Teorema Fundamental del Cálculo

**Dificultad:** ⭐ Básica

### Enunciado

Calculá la integral definida:

$$\int_1^4 \left(3x^2 - 2x + 1\right)\,dx$$

### Resolución paso a paso

**Paso 1: Hallar la primitiva del integrando.**
Aplicando la regla de la potencia término a término:
$$F(x) = x^3 - x^2 + x$$

**Paso 2: Recordar el Teorema Fundamental del Cálculo (TFC).**
$$\int_a^b f(x)\,dx = F(b) - F(a)$$
Aquí $a = 1$ y $b = 4$.

**Paso 3: Evaluar $F(4)$.**
$$F(4) = 4^3 - 4^2 + 4 = 64 - 16 + 4 = 52$$

**Paso 4: Evaluar $F(1)$.**
$$F(1) = 1^3 - 1^2 + 1 = 1 - 1 + 1 = 1$$

**Paso 5: Calcular la diferencia.**
$$F(4) - F(1) = 52 - 1 = 51$$

### Respuesta Final

$$\int_1^4 \left(3x^2 - 2x + 1\right)\,dx = 51$$

---

## Ejercicio 56 — Integral por sustitución trigonométrica directa

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calculá la integral indefinida:

$$\int \frac{\cos x}{\sin^3 x}\,dx$$

### Resolución paso a paso

**Paso 1: Identificar la sustitución.**
Se observa que $\cos x$ es la derivada de $\sin x$. Se propone:
$$u = \sin x \implies du = \cos x\,dx$$

**Paso 2: Reescribir la integral en términos de $u$.**
$$\int \frac{du}{u^3} = \int u^{-3}\,du$$

**Paso 3: Aplicar la regla de la potencia.**
$$\frac{u^{-2}}{-2} + C = -\frac{1}{2u^2} + C$$

**Paso 4: Volver a la variable original.**
$$-\frac{1}{2\sin^2 x} + C$$

**Paso 5: Expresar con notación estándar (opcional).**
Usando $\csc x = 1/\sin x$:
$$-\frac{1}{2}\csc^2 x + C$$

### Respuesta Final

$$\int \frac{\cos x}{\sin^3 x}\,dx = -\frac{1}{2\sin^2 x} + C = -\frac{1}{2}\csc^2 x + C$$

---

## Ejercicio 57 — Integral por partes

**Dificultad:** ⭐⭐⭐ Avanzada

### Enunciado

Calculá la integral indefinida:

$$\int x^2 \ln x\,dx$$

### Resolución paso a paso

**Paso 1: Identificar la fórmula de integración por partes.**
$$\int u\,dv = uv - \int v\,du$$
Se elige:
$$u = \ln x \implies du = \frac{1}{x}\,dx$$
$$dv = x^2\,dx \implies v = \frac{x^3}{3}$$
La elección sigue la regla LIATE: logarítmica antes que algebraica.

**Paso 2: Aplicar la fórmula.**
$$\int x^2 \ln x\,dx = \frac{x^3}{3}\ln x - \int \frac{x^3}{3} \cdot \frac{1}{x}\,dx$$

**Paso 3: Simplificar el integrando de la nueva integral.**
$$\frac{x^3}{3} \cdot \frac{1}{x} = \frac{x^2}{3}$$
Entonces:
$$\frac{x^3}{3}\ln x - \int \frac{x^2}{3}\,dx$$

**Paso 4: Calcular la integral resultante.**
$$\int \frac{x^2}{3}\,dx = \frac{1}{3}\cdot\frac{x^3}{3} = \frac{x^3}{9}$$

**Paso 5: Reunir todos los términos.**
$$\frac{x^3}{3}\ln x - \frac{x^3}{9} + C$$

**Paso 6: Factorizar (forma compacta).**
$$\frac{x^3}{9}\left(3\ln x - 1\right) + C$$

### Respuesta Final

$$\int x^2 \ln x\,dx = \frac{x^3}{9}\left(3\ln x - 1\right) + C$$

---

## Ejercicio 58 — Integral de fracción mediante descomposición en fracciones simples

**Dificultad:** ⭐⭐⭐ Avanzada

### Enunciado

Calculá la integral indefinida:

$$\int \frac{5x + 1}{x^2 - x - 6}\,dx$$

### Resolución paso a paso

**Paso 1: Factorizar el denominador.**
$$x^2 - x - 6 = (x-3)(x+2)$$

**Paso 2: Plantear la descomposición en fracciones simples.**
$$\frac{5x+1}{(x-3)(x+2)} = \frac{A}{x-3} + \frac{B}{x+2}$$

**Paso 3: Determinar los coeficientes $A$ y $B$.**
Multiplicando ambos lados por $(x-3)(x+2)$:
$$5x + 1 = A(x+2) + B(x-3)$$

- Para $x = 3$: $\;15 + 1 = A(5) \Rightarrow A = \dfrac{16}{5}$
- Para $x = -2$: $\;-10 + 1 = B(-5) \Rightarrow B = \dfrac{9}{5}$

**Paso 4: Reescribir la integral descompuesta.**
$$\int \frac{5x+1}{(x-3)(x+2)}\,dx = \int \frac{16/5}{x-3}\,dx + \int \frac{9/5}{x+2}\,dx$$

**Paso 5: Integrar cada fracción usando $\int \frac{1}{x-a}\,dx = \ln|x-a|+C$.**
$$\frac{16}{5}\ln|x-3| + \frac{9}{5}\ln|x+2| + C$$

### Respuesta Final

$$\int \frac{5x + 1}{x^2 - x - 6}\,dx = \frac{16}{5}\ln|x-3| + \frac{9}{5}\ln|x+2| + C$$

---

## Ejercicio 59 — Integral definida con sustitución y cálculo de área

**Dificultad:** ⭐⭐⭐ Avanzada

### Enunciado

Calculá la integral definida:

$$\int_0^2 x\sqrt{x^2+1}\,dx$$

### Resolución paso a paso

**Paso 1: Proponer la sustitución.**
Se observa que $2x$ es la derivada de $x^2+1$. Se propone:
$$u = x^2 + 1 \implies du = 2x\,dx \implies x\,dx = \frac{du}{2}$$

**Paso 2: Cambiar los límites de integración.**
- Para $x = 0$: $u = 0^2 + 1 = 1$
- Para $x = 2$: $u = 2^2 + 1 = 5$

La integral pasa a ser una integral definida en $u$ directamente, sin necesidad de volver a $x$.

**Paso 3: Reescribir la integral en términos de $u$.**
$$\int_1^5 \sqrt{u}\,\frac{du}{2} = \frac{1}{2}\int_1^5 u^{1/2}\,du$$

**Paso 4: Calcular la primitiva e integrar.**
$$\frac{1}{2}\cdot\frac{u^{3/2}}{3/2}\Bigg|_1^5 = \frac{1}{2}\cdot\frac{2}{3}\,u^{3/2}\Bigg|_1^5 = \frac{1}{3}\,u^{3/2}\Bigg|_1^5$$

**Paso 5: Evaluar en los límites.**
$$\frac{1}{3}\left(5^{3/2} - 1^{3/2}\right) = \frac{1}{3}\left(5\sqrt{5} - 1\right)$$

**Paso 6: Expresar el resultado.**
$$\frac

## Ejercicio 61 — Integral inmediata de una potencia

**Dificultad:** ⭐ Básica

### Enunciado

Calcular la integral indefinida:

$$\int \left(3x^4 - 2x^3 + 5x - 7\right)\, dx$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se aplica la linealidad de la integral y la regla de la potencia:
$$\int x^n\, dx = \frac{x^{n+1}}{n+1} + C, \quad n \neq -1$$
Cada término se integra por separado.

**Paso 2: Integrar el término $3x^4$.**
$$\int 3x^4\, dx = 3 \cdot \frac{x^{4+1}}{4+1} = 3 \cdot \frac{x^5}{5} = \frac{3x^5}{5}$$

**Paso 3: Integrar el término $-2x^3$.**
$$\int -2x^3\, dx = -2 \cdot \frac{x^{3+1}}{3+1} = -2 \cdot \frac{x^4}{4} = -\frac{x^4}{2}$$

**Paso 4: Integrar los términos restantes.**
$$\int 5x\, dx = 5 \cdot \frac{x^2}{2} = \frac{5x^2}{2}$$
$$\int -7\, dx = -7x$$

**Paso 5: Reunir todos los resultados.**
$$\int \left(3x^4 - 2x^3 + 5x - 7\right)\, dx = \frac{3x^5}{5} - \frac{x^4}{2} + \frac{5x^2}{2} - 7x + C$$

### Respuesta Final

$$\int \left(3x^4 - 2x^3 + 5x - 7\right)\, dx = \frac{3x^5}{5} - \frac{x^4}{2} + \frac{5x^2}{2} - 7x + C$$

---

## Ejercicio 62 — Integral con raíz y potencia negativa

**Dificultad:** ⭐ Básica

### Enunciado

Calcular la integral indefinida:

$$\int \left(\sqrt{x} + \frac{4}{x^2} - 3\right)\, dx$$

### Resolución paso a paso

**Paso 1: Reescribir cada término con notación de potencia.**
Antes de integrar, se expresan raíces y cocientes como potencias:
$$\sqrt{x} = x^{1/2}, \qquad \frac{4}{x^2} = 4x^{-2}$$
La integral queda:
$$\int \left(x^{1/2} + 4x^{-2} - 3\right)\, dx$$

**Paso 2: Integrar $x^{1/2}$.**
$$\int x^{1/2}\, dx = \frac{x^{1/2+1}}{1/2+1} = \frac{x^{3/2}}{3/2} = \frac{2}{3}x^{3/2}$$

**Paso 3: Integrar $4x^{-2}$.**
$$\int 4x^{-2}\, dx = 4 \cdot \frac{x^{-2+1}}{-2+1} = 4 \cdot \frac{x^{-1}}{-1} = -\frac{4}{x}$$

**Paso 4: Integrar la constante $-3$.**
$$\int -3\, dx = -3x$$

**Paso 5: Reunir todos los resultados.**
$$\int \left(\sqrt{x} + \frac{4}{x^2} - 3\right)\, dx = \frac{2}{3}x^{3/2} - \frac{4}{x} - 3x + C$$

### Respuesta Final

$$\int \left(\sqrt{x} + \frac{4}{x^2} - 3\right)\, dx = \frac{2}{3}x^{3/2} - \frac{4}{x} - 3x + C$$

---

## Ejercicio 63 — Integral definida y cálculo de área

**Dificultad:** ⭐ Básica

### Enunciado

Calcular la integral definida:

$$\int_1^3 \left(2x^2 - 4x + 1\right)\, dx$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se aplica el Teorema Fundamental del Cálculo (TFC): si $F$ es una primitiva de $f$, entonces
$$\int_a^b f(x)\, dx = F(b) - F(a)$$
Primero se halla la primitiva, luego se evalúa en los extremos.

**Paso 2: Calcular la primitiva $F(x)$.**
$$F(x) = \int \left(2x^2 - 4x + 1\right)\, dx = \frac{2x^3}{3} - \frac{4x^2}{2} + x = \frac{2x^3}{3} - 2x^2 + x$$

**Paso 3: Evaluar $F(3)$.**
$$F(3) = \frac{2(3)^3}{3} - 2(3)^2 + 3 = \frac{2 \cdot 27}{3} - 2 \cdot 9 + 3 = 18 - 18 + 3 = 3$$

**Paso 4: Evaluar $F(1)$.**
$$F(1) = \frac{2(1)^3}{3} - 2(1)^2 + 1 = \frac{2}{3} - 2 + 1 = \frac{2}{3} - 1 = -\frac{1}{3}$$

**Paso 5: Aplicar el TFC.**
$$\int_1^3 \left(2x^2 - 4x + 1\right)\, dx = F(3) - F(1) = 3 - \left(-\frac{1}{3}\right) = 3 + \frac{1}{3} = \frac{10}{3}$$

### Respuesta Final

$$\int_1^3 \left(2x^2 - 4x + 1\right)\, dx = \frac{10}{3}$$

---

## Ejercicio 64 — Integración por sustitución simple

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calcular la integral indefinida:

$$\int (5x + 3)^7\, dx$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
La expresión $(5x+3)^7$ es una potencia de una función lineal. Se aplica sustitución (cambio de variable): se llama $u$ a la expresión interna para reducir a una integral inmediata.

**Paso 2: Definir la sustitución.**
Sea $u = 5x + 3$. Entonces:
$$\frac{du}{dx} = 5 \implies du = 5\, dx \implies dx = \frac{du}{5}$$

**Paso 3: Reescribir la integral en términos de $u$.**
$$\int (5x+3)^7\, dx = \int u^7 \cdot \frac{du}{5} = \frac{1}{5}\int u^7\, du$$

**Paso 4: Integrar en términos de $u$.**
$$\frac{1}{5}\int u^7\, du = \frac{1}{5} \cdot \frac{u^8}{8} = \frac{u^8}{40}$$

**Paso 5: Volver a la variable original $x$.**
Reemplazando $u = 5x + 3$:
$$\frac{u^8}{40} = \frac{(5x+3)^8}{40} + C$$

### Respuesta Final

$$\int (5x + 3)^7\, dx = \frac{(5x+3)^8}{40} + C$$

---

## Ejercicio 65 — Sustitución con función exponencial

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calcular la integral indefinida:

$$\int x\, e^{x^2 - 1}\, dx$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
El integrando contiene $e^{x^2-1}$ y su derivada interior $2x$ aparece (salvo constante) multiplicando. Esto indica que la sustitución $u = x^2 - 1$ simplificará la integral.

**Paso 2: Definir la sustitución.**
Sea $u = x^2 - 1$. Entonces:
$$\frac{du}{dx} = 2x \implies du = 2x\, dx \implies x\, dx = \frac{du}{2}$$

**Paso 3: Reescribir la integral en términos de $u$.**
$$\int x\, e^{x^2-1}\, dx = \int e^u \cdot \frac{du}{2} = \frac{1}{2}\int e^u\, du$$

**Paso 4: Integrar en términos de $u$.**
Usando $\int e^u\, du = e^u$:
$$\frac{1}{2}\int e^u\, du = \frac{1}{2}e^u$$

**Paso 5: Volver a la variable original $x$.**
Reemplazando $u = x^2 - 1$:
$$\frac{1}{2}e^u = \frac{1}{2}e^{x^2-1} + C$$

### Respuesta Final

$$\int x\, e^{x^2 - 1}\, dx = \frac{1}{2}e^{x^2-1} + C$$

---

## Ejercicio 66 — Integral de función racional por descomposición

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calcular la integral indefinida:

$$\int \frac{3x + 1}{x^2 + 2x - 3}\, dx$$

### Resolución paso a paso

**Paso 1: Factorizar el denominador.**
Se buscan raíces de $x^2 + 2x - 3 = 0$:
$$x = \frac{-2 \pm \sqrt{4 + 12}}{2} = \frac{-2 \pm 4}{2} \implies x_1 = 1,\quad x_2 = -3$$
Entonces: $x^2 + 2x - 3 = (x-1)(x+3)$.

**Paso 2: Plantear la descomposición en fracciones parciales.**
$$\frac{3x+1}{(x-1)(x+3)} = \frac{A}{x-1} + \frac{B}{x+3}$$
Multiplicando ambos lados por $(x-1)(x+3)$:
$$3x + 1 = A(x+3) + B(x-1)$$

**Paso 3: Determinar las constantes $A$ y $B$.**
- Con $x = 1$: $\quad 3(1)+1 = A(4) \implies 4 = 4A \implies A = 1$
- Con $x = -3$: $\quad 3(-3)+1 = B(-4) \implies -8 = -4B \implies B = 2$

**Paso 4: Reescribir la integral.**
$$\int \frac{3x+1}{(x-1)(x+3)}\, dx = \int \frac{1}{x-1}\, dx + \int \frac{2}{x+3}\, dx$$

**Paso 5: Integrar cada fracción.**
Usando $\int \frac{1}{x-a}\, dx = \ln|x-a| + C$:
$$\int \frac{1}{x-1}\, dx = \ln|x-1|$$
$$\int \frac{2}{x+3}\, dx = 2\ln|x+3|$$

**Paso 6: Reunir el resultado.**
$$\int \frac{3x+1}{x^2+2x-3}\, dx = \ln|x-1| + 2\ln|x+3| + C$$

### Respuesta Final

$$\int \frac{3x + 1}{x^2 + 2x - 3}\, dx = \ln|x-1| + 2\ln|x+3| + C$$

---

## Ejercicio 67 — Integración por partes

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calcular la integral indefinida:

$$\int x\ln(x)\, dx$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
El integrando es un producto de $x$ (potencia) y $\ln(x)$ (logaritmo). Se aplica integración por partes:
$$\int u\, dv = uv - \int v\, du$$
La regla ILATE sugiere elegir $u = \ln(x)$ (logaritmo) y $dv = x\, dx$ (potencia).

**Paso 2: Calcular $du$ y $v$.**
$$u = \ln(x) \implies du = \frac{1}{x}\, dx$$
$$dv = x\, dx \implies v = \int x\, dx = \frac{x^2}{2}$$

**Paso 3: Aplicar la fórmula de integración por partes.**
$$\int x\ln(x)\, dx = \ln(x) \cdot \frac{x^2}{2} - \int \frac{x^2}{2} \cdot \frac{1}{x}\, dx$$
$$= \frac{x^2\ln(x)}{2} - \int \frac{x}{2}\, dx$$

**Paso 4: Resolver la integral restante.**
$$\int \frac{x}{2}\, dx = \frac{1}{2} \cdot \frac{x^2}{2} = \frac{x^2}{4}$$

**Paso 5: Reunir el resultado.**
$$\int x\ln(x)\, dx = \frac{x^2\ln(x)}{2} - \frac{x^2}{4} + C$$

### Respuesta Final

$$\int x\ln(x)\, dx = \frac{x^2\ln(x)}{2} - \frac{x^2}{4} + C$$

---

## Ejercicio 68 — Integral definida con sustitución trigonométrica implícita

**Dificultad:** ⭐⭐⭐ Avanzada

### Enunciado

Calcular la integral definida:

$$\int_0^2 \frac{x}{\sqrt{4 - x^2}}\, dx$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
El integrando tiene la forma $\dfrac{x}{\sqrt{a^2 - x^2}}

## Ejercicio 71 — Integral de una función polinómica

**Dificultad:** ⭐ Básica

### Enunciado

Calculá la integral indefinida:

$$\int \left(4x^3 - 6x^2 + 5x - 2\right)\, dx$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se aplica la **linealidad de la integral** y la **regla de la potencia**: $\int x^n\, dx = \dfrac{x^{n+1}}{n+1} + C$, válida para $n \neq -1$.

**Paso 2: Separar la integral en suma de términos.**

$$\int 4x^3\, dx - \int 6x^2\, dx + \int 5x\, dx - \int 2\, dx$$

**Paso 3: Aplicar la regla de la potencia a cada término.**

$$4 \cdot \frac{x^4}{4} - 6 \cdot \frac{x^3}{3} + 5 \cdot \frac{x^2}{2} - 2x + C$$

**Paso 4: Simplificar los coeficientes.**

$$x^4 - 2x^3 + \frac{5}{2}x^2 - 2x + C$$

**Paso 5: Verificación por derivación.**
Derivando el resultado: $\dfrac{d}{dx}\!\left(x^4 - 2x^3 + \dfrac{5}{2}x^2 - 2x\right) = 4x^3 - 6x^2 + 5x - 2$ ✓

### Respuesta Final

$$\int \left(4x^3 - 6x^2 + 5x - 2\right)\, dx = x^4 - 2x^3 + \frac{5}{2}x^2 - 2x + C$$

---

## Ejercicio 72 — Integral con raíces y potencias negativas

**Dificultad:** ⭐ Básica

### Enunciado

Calculá la integral indefinida:

$$\int \left(\sqrt{x} + \frac{3}{x^2} - \frac{1}{\sqrt[3]{x}}\right)\, dx$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se reescriben las raíces y los denominadores como potencias de $x$ para aplicar directamente la regla $\int x^n\, dx = \dfrac{x^{n+1}}{n+1} + C$.

**Paso 2: Reescribir cada término como potencia.**

$$\sqrt{x} = x^{1/2}, \qquad \frac{3}{x^2} = 3x^{-2}, \qquad \frac{1}{\sqrt[3]{x}} = x^{-1/3}$$

La integral queda:

$$\int \left(x^{1/2} + 3x^{-2} - x^{-1/3}\right)\, dx$$

**Paso 3: Aplicar la regla de la potencia a cada término.**

$$\frac{x^{1/2+1}}{1/2+1} + 3\cdot\frac{x^{-2+1}}{-2+1} - \frac{x^{-1/3+1}}{-1/3+1} + C$$

**Paso 4: Calcular los nuevos exponentes y denominadores.**

$$\frac{x^{3/2}}{3/2} + 3\cdot\frac{x^{-1}}{-1} - \frac{x^{2/3}}{2/3} + C$$

**Paso 5: Simplificar las fracciones (dividir por fracción = multiplicar por su inverso).**

$$\frac{2}{3}x^{3/2} - \frac{3}{x} - \frac{3}{2}x^{2/3} + C$$

### Respuesta Final

$$\int \left(\sqrt{x} + \frac{3}{x^2} - \frac{1}{\sqrt[3]{x}}\right)\, dx = \frac{2}{3}x^{3/2} - \frac{3}{x} - \frac{3}{2}x^{2/3} + C$$

---

## Ejercicio 73 — Integral definida con el Teorema Fundamental del Cálculo

**Dificultad:** ⭐ Básica

### Enunciado

Calculá la integral definida:

$$\int_1^4 \left(3x^2 - 4x + 1\right)\, dx$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se aplica el **Teorema Fundamental del Cálculo (TFC)**: si $F$ es una primitiva de $f$, entonces $\displaystyle\int_a^b f(x)\,dx = F(b) - F(a)$.

**Paso 2: Encontrar la primitiva $F(x)$ de $f(x) = 3x^2 - 4x + 1$.**

$$F(x) = x^3 - 2x^2 + x$$

**Paso 3: Evaluar $F(4)$.**

$$F(4) = (4)^3 - 2(4)^2 + 4 = 64 - 32 + 4 = 36$$

**Paso 4: Evaluar $F(1)$.**

$$F(1) = (1)^3 - 2(1)^2 + 1 = 1 - 2 + 1 = 0$$

**Paso 5: Aplicar el TFC.**

$$\int_1^4 \left(3x^2 - 4x + 1\right)\, dx = F(4) - F(1) = 36 - 0 = 36$$

### Respuesta Final

$$\int_1^4 \left(3x^2 - 4x + 1\right)\, dx = 36$$

---

## Ejercicio 74 — Integral por sustitución simple

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calculá la integral indefinida:

$$\int \frac{2x}{\left(x^2 + 3\right)^4}\, dx$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se observa que $2x$ es exactamente la derivada de $x^2 + 3$. Se aplica el método de **sustitución** (cambio de variable): $u = x^2 + 3$.

**Paso 2: Calcular el diferencial $du$.**

$$u = x^2 + 3 \implies \frac{du}{dx} = 2x \implies du = 2x\, dx$$

**Paso 3: Reescribir la integral en términos de $u$.**

El factor $2x\, dx$ se reemplaza por $du$ y $(x^2+3)^4$ por $u^4$:

$$\int \frac{du}{u^4} = \int u^{-4}\, du$$

**Paso 4: Aplicar la regla de la potencia.**

$$\frac{u^{-3}}{-3} + C = -\frac{1}{3u^3} + C$$

**Paso 5: Regresar a la variable original sustituyendo $u = x^2 + 3$.**

$$-\frac{1}{3(x^2+3)^3} + C$$

### Respuesta Final

$$\int \frac{2x}{\left(x^2 + 3\right)^4}\, dx = -\frac{1}{3\left(x^2 + 3\right)^3} + C$$

---

## Ejercicio 75 — Integral de funciones trigonométricas con sustitución

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calculá la integral indefinida:

$$\int \sin^5(x)\cos(x)\, dx$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se reconoce que $\cos(x)$ es la derivada de $\sin(x)$. Se aplica **sustitución** con $u = \sin(x)$.

**Paso 2: Calcular el diferencial $du$.**

$$u = \sin(x) \implies du = \cos(x)\, dx$$

**Paso 3: Reescribir la integral en términos de $u$.**

$$\int u^5\, du$$

**Paso 4: Aplicar la regla de la potencia.**

$$\frac{u^6}{6} + C$$

**Paso 5: Regresar a la variable original sustituyendo $u = \sin(x)$.**

$$\frac{\sin^6(x)}{6} + C$$

**Paso 6: Verificación por derivación.**
$\dfrac{d}{dx}\!\left(\dfrac{\sin^6(x)}{6}\right) = \dfrac{6\sin^5(x)\cos(x)}{6} = \sin^5(x)\cos(x)$ ✓

### Respuesta Final

$$\int \sin^5(x)\cos(x)\, dx = \frac{\sin^6(x)}{6} + C$$

---

## Ejercicio 76 — Integral por sustitución en función exponencial

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calculá la integral indefinida:

$$\int \left(3x^2 + 1\right)e^{x^3 + x}\, dx$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se observa que $3x^2 + 1$ es la derivada de $x^3 + x$. Se aplica **sustitución** con $u = x^3 + x$.

**Paso 2: Calcular el diferencial $du$.**

$$u = x^3 + x \implies \frac{du}{dx} = 3x^2 + 1 \implies du = (3x^2+1)\, dx$$

**Paso 3: Reescribir la integral en términos de $u$.**

$$(3x^2+1)\,dx = du, \quad e^{x^3+x} = e^u$$

$$\int e^u\, du$$

**Paso 4: Integrar usando $\int e^u\, du = e^u + C$.**

$$e^u + C$$

**Paso 5: Regresar a la variable original sustituyendo $u = x^3 + x$.**

$$e^{x^3 + x} + C$$

### Respuesta Final

$$\int \left(3x^2 + 1\right)e^{x^3 + x}\, dx = e^{x^3 + x} + C$$

---

## Ejercicio 77 — Integral por partes

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calculá la integral indefinida:

$$\int x \cdot e^{2x}\, dx$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
El integrando es un producto de una función polinómica y una exponencial. Se aplica **integración por partes**: $\displaystyle\int u\, dv = uv - \int v\, du$. Se elige $u$ como el polinomio (pues su derivada simplifica) y $dv$ como la parte exponencial.

**Paso 2: Elegir $u$ y $dv$, y calcular $du$ y $v$.**

$$u = x \implies du = dx$$
$$dv = e^{2x}\, dx \implies v = \frac{e^{2x}}{2}$$

**Paso 3: Aplicar la fórmula de integración por partes.**

$$\int x\, e^{2x}\, dx = x \cdot \frac{e^{2x}}{2} - \int \frac{e^{2x}}{2}\, dx$$

**Paso 4: Resolver la integral restante.**

$$\int \frac{e^{2x}}{2}\, dx = \frac{1}{2} \cdot \frac{e^{2x}}{2} = \frac{e^{2x}}{4}$$

**Paso 5: Combinar los resultados.**

$$\int x\, e^{2x}\, dx = \frac{x\, e^{2x}}{2} - \frac{e^{2x}}{4} + C = \frac{e^{2x}}{4}(2x - 1) + C$$

### Respuesta Final

$$\int x\, e^{2x}\, dx = \frac{e^{2x}}{4}(2x - 1) + C$$

---

## Ejercicio 78 — Integral de función racional por fracciones simples

**Dificultad:** ⭐⭐⭐ Avanzada

### Enunciado

Calculá la integral indefinida:

$$\int \frac{3x + 1}{x^2 - x - 2}\, dx$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
El grado del numerador es menor que el del denominador, por lo que se aplica directamente **descomposición en fracciones parciales**. Primero se factoriza el denominador.

**Paso 2: Factorizar el denominador.**

$$x^2 - x - 2 = (x-2)(x+1)$$

**Paso 3: Plantear la descomposición en fracciones parciales.**

$$\frac{3x+1}{(x-2)(x+1)} = \frac{A}{x-2} + \frac{B}{x+1}$$

Multiplicando ambos miembros por $(x-2)(x+1)$:

$$3x + 1 = A(x+1) + B(x-2)$$

**Paso 4: Hallar las constantes $A$ y $B$ por sustitución de raíces.**

- Con $x = 2$: $\quad 3(2)+1 = A(3) \implies 7 = 3A \implies A = \dfrac{7}{3}$
- Con $x = -1$: $\quad 3(-1)+1 = B(-3) \implies -2 = -3B \implies B = \dfrac{2}{3}$

**Paso 5: Reescribir y separar la integral.**

$$\int \frac{3x+1}{(x-2)(x+1)}\, dx = \int \frac{7/3}{x-2}\, dx + \int \frac{2/3}{x+1}\, dx$$

**Paso 6: Integrar cada fracción usando $\int \frac{1}{x-a}\,dx = \ln|x-a| + C$.**

$$\frac{7}{3}\ln|x-2| + \frac{2}{3}\ln|x+1| + C$$

### Respuesta Final

$$\int \frac{3x + 1}{x^2 - x - 2}\, dx = \frac{7}{3}\ln|x - 2| + \frac{2}{3}\ln|x + 1| + C$$

---

## Ejercicio 79 — Integral definida con área entre curvas

## Ejercicio 81 — Integral de un polinomio

**Dificultad:** ⭐ Básica

### Enunciado

Calculá la integral indefinida:

$$\int (3x^4 - 5x^2 + 2x - 7)\, dx$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se aplica la regla de la potencia para integrales: $\int x^n\, dx = \dfrac{x^{n+1}}{n+1} + C$, con $n \neq -1$. Como el integrando es una suma de monomios, se integra término a término usando la linealidad de la integral.

**Paso 2: Integrar el término $3x^4$.**

$$\int 3x^4\, dx = 3 \cdot \frac{x^5}{5} = \frac{3x^5}{5}$$

**Paso 3: Integrar el término $-5x^2$.**

$$\int -5x^2\, dx = -5 \cdot \frac{x^3}{3} = -\frac{5x^3}{3}$$

**Paso 4: Integrar los términos restantes.**

$$\int 2x\, dx = 2 \cdot \frac{x^2}{2} = x^2 \qquad \int -7\, dx = -7x$$

**Paso 5: Reunir todos los términos y agregar la constante de integración.**

$$\int (3x^4 - 5x^2 + 2x - 7)\, dx = \frac{3x^5}{5} - \frac{5x^3}{3} + x^2 - 7x + C$$

**Paso 6: Verificación.**
Se deriva el resultado: $\dfrac{d}{dx}\!\left(\dfrac{3x^5}{5} - \dfrac{5x^3}{3} + x^2 - 7x + C\right) = 3x^4 - 5x^2 + 2x - 7$ ✓

### Respuesta Final

$$\int (3x^4 - 5x^2 + 2x - 7)\, dx = \frac{3x^5}{5} - \frac{5x^3}{3} + x^2 - 7x + C$$

---

## Ejercicio 82 — Integral por sustitución simple

**Dificultad:** ⭐ Básica

### Enunciado

Calculá la integral indefinida:

$$\int 6x\,(x^2 + 1)^5\, dx$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
El integrando tiene la forma $f(g(x)) \cdot g'(x)$. Se aplica el método de sustitución: se elige $u = g(x)$ de modo que $du$ aparezca en el integrando.

**Paso 2: Definir la sustitución.**
Sea $u = x^2 + 1$. Entonces:

$$\frac{du}{dx} = 2x \implies du = 2x\, dx \implies 6x\, dx = 3\, du$$

**Paso 3: Reescribir la integral en función de $u$.**

$$\int 6x\,(x^2+1)^5\, dx = \int u^5 \cdot 3\, du = 3\int u^5\, du$$

**Paso 4: Integrar en $u$.**

$$3\int u^5\, du = 3 \cdot \frac{u^6}{6} = \frac{u^6}{2}$$

**Paso 5: Volver a la variable original.**

$$\frac{u^6}{2} + C = \frac{(x^2+1)^6}{2} + C$$

**Paso 6: Verificación por derivación.**

$$\frac{d}{dx}\!\left[\frac{(x^2+1)^6}{2}\right] = \frac{6(x^2+1)^5 \cdot 2x}{2} = 6x(x^2+1)^5 \checkmark$$

### Respuesta Final

$$\int 6x\,(x^2+1)^5\, dx = \frac{(x^2+1)^6}{2} + C$$

---

## Ejercicio 83 — Integral definida con el Teorema Fundamental del Cálculo

**Dificultad:** ⭐ Básica

### Enunciado

Calculá la integral definida:

$$\int_1^3 (2x^2 - 4x + 1)\, dx$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se aplica el Teorema Fundamental del Cálculo (TFC): si $F$ es una primitiva de $f$, entonces $\displaystyle\int_a^b f(x)\,dx = F(b) - F(a)$. Primero se halla la primitiva del integrando.

**Paso 2: Calcular la primitiva.**

$$F(x) = \int (2x^2 - 4x + 1)\, dx = \frac{2x^3}{3} - 2x^2 + x$$

(Se omite la constante $C$ porque se cancelará al aplicar el TFC.)

**Paso 3: Evaluar $F(3)$.**

$$F(3) = \frac{2(27)}{3} - 2(9) + 3 = 18 - 18 + 3 = 3$$

**Paso 4: Evaluar $F(1)$.**

$$F(1) = \frac{2(1)}{3} - 2(1) + 1 = \frac{2}{3} - 2 + 1 = \frac{2}{3} - 1 = -\frac{1}{3}$$

**Paso 5: Aplicar el TFC.**

$$\int_1^3 (2x^2 - 4x + 1)\, dx = F(3) - F(1) = 3 - \left(-\frac{1}{3}\right) = 3 + \frac{1}{3} = \frac{10}{3}$$

### Respuesta Final

$$\int_1^3 (2x^2 - 4x + 1)\, dx = \frac{10}{3}$$

---

## Ejercicio 84 — Integral de funciones exponenciales y trigonométricas

**Dificultad:** ⭐ Básica

### Enunciado

Calculá la integral indefinida:

$$\int \left(e^{3x} + \cos(2x) - \frac{1}{x}\right) dx$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se usa linealidad de la integral y las fórmulas básicas: $\int e^{ax}dx = \dfrac{e^{ax}}{a}+C$, $\int \cos(bx)\,dx = \dfrac{\sin(bx)}{b}+C$ y $\int \dfrac{1}{x}\,dx = \ln|x|+C$.

**Paso 2: Integrar $e^{3x}$.**

$$\int e^{3x}\, dx = \frac{e^{3x}}{3}$$

**Paso 3: Integrar $\cos(2x)$.**

$$\int \cos(2x)\, dx = \frac{\sin(2x)}{2}$$

**Paso 4: Integrar $-\dfrac{1}{x}$.**

$$\int -\frac{1}{x}\, dx = -\ln|x|$$

**Paso 5: Reunir todos los términos.**

$$\int \left(e^{3x} + \cos(2x) - \frac{1}{x}\right)dx = \frac{e^{3x}}{3} + \frac{\sin(2x)}{2} - \ln|x| + C$$

**Paso 6: Verificación por derivación.**

$$\frac{d}{dx}\!\left(\frac{e^{3x}}{3} + \frac{\sin(2x)}{2} - \ln|x|\right) = e^{3x} + \cos(2x) - \frac{1}{x} \checkmark$$

### Respuesta Final

$$\int \left(e^{3x} + \cos(2x) - \frac{1}{x}\right)dx = \frac{e^{3x}}{3} + \frac{\sin(2x)}{2} - \ln|x| + C$$

---

## Ejercicio 85 — Integral por sustitución con función logarítmica

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calculá la integral indefinida:

$$\int \frac{3x^2 + 2}{x^3 + 2x - 5}\, dx$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
El numerador es proporcional a la derivada del denominador. Cuando el integrando tiene la forma $\dfrac{f'(x)}{f(x)}$, su primitiva es $\ln|f(x)| + C$. Se verifica y aplica sustitución.

**Paso 2: Calcular la derivada del denominador.**
Sea $u = x^3 + 2x - 5$. Entonces:

$$\frac{du}{dx} = 3x^2 + 2 \implies du = (3x^2 + 2)\, dx$$

**Paso 3: Observar que el numerador coincide exactamente con $du$.**

$$\int \frac{3x^2 + 2}{x^3 + 2x - 5}\, dx = \int \frac{du}{u}$$

**Paso 4: Integrar en $u$.**

$$\int \frac{du}{u} = \ln|u| + C$$

**Paso 5: Volver a la variable original.**

$$\ln|u| + C = \ln|x^3 + 2x - 5| + C$$

**Paso 6: Verificación por derivación.**

$$\frac{d}{dx}\!\left[\ln|x^3+2x-5|\right] = \frac{3x^2+2}{x^3+2x-5} \checkmark$$

### Respuesta Final

$$\int \frac{3x^2 + 2}{x^3 + 2x - 5}\, dx = \ln|x^3 + 2x - 5| + C$$

---

## Ejercicio 86 — Integral por partes

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calculá la integral indefinida:

$$\int x\, e^{2x}\, dx$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
El integrando es un producto de un polinomio ($x$) y una exponencial ($e^{2x}$). Se aplica integración por partes: $\displaystyle\int u\, dv = uv - \int v\, du$. La regla LIATE sugiere tomar el factor algebraico como $u$.

**Paso 2: Asignar $u$ y $dv$.**

$$u = x \implies du = dx$$
$$dv = e^{2x}\, dx \implies v = \int e^{2x}\, dx = \frac{e^{2x}}{2}$$

**Paso 3: Aplicar la fórmula de integración por partes.**

$$\int x\, e^{2x}\, dx = x \cdot \frac{e^{2x}}{2} - \int \frac{e^{2x}}{2}\, dx$$

**Paso 4: Resolver la integral restante.**

$$\int \frac{e^{2x}}{2}\, dx = \frac{1}{2} \cdot \frac{e^{2x}}{2} = \frac{e^{2x}}{4}$$

**Paso 5: Reunir los términos.**

$$\int x\, e^{2x}\, dx = \frac{x\, e^{2x}}{2} - \frac{e^{2x}}{4} + C = \frac{e^{2x}}{4}(2x - 1) + C$$

**Paso 6: Verificación por derivación (regla del producto).**

$$\frac{d}{dx}\!\left[\frac{e^{2x}}{4}(2x-1)\right] = \frac{2e^{2x}}{4}(2x-1) + \frac{e^{2x}}{4}\cdot 2 = \frac{e^{2x}}{2}(2x-1) + \frac{e^{2x}}{2} = xe^{2x} \checkmark$$

### Respuesta Final

$$\int x\, e^{2x}\, dx = \frac{e^{2x}}{4}(2x - 1) + C$$

---

## Ejercicio 87 — Integral definida: área entre dos curvas

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calculá el área de la región encerrada entre las curvas $f(x) = x^2$ y $g(x) = 2x$ en el intervalo donde se intersectan.

### Resolución paso a paso

**Paso 1: Encontrar los puntos de intersección.**
Se igualan las funciones:

$$x^2 = 2x \implies x^2 - 2x = 0 \implies x(x-2) = 0 \implies x = 0 \text{ o } x = 2$$

El intervalo de integración es $[0, 2]$.

**Paso 2: Determinar qué función es mayor en el intervalo.**
Para $x \in (0, 2)$, tomamos $x = 1$: $f(1) = 1$ y $g(1) = 2$, por lo tanto $g(x) \geq f(x)$ en $[0,2]$.

**Paso 3: Plantear la integral del área.**

$$A = \int_0^2 \bigl[g(x) - f(x)\bigr]\, dx = \int_0^2 (2x - x^2)\, dx$$

**Paso 4: Calcular la primitiva.**

$$F(x) = x^2 - \frac{x^3}{3}$$

**Paso 5: Aplicar el TFC.**

$$A = F(2) - F(0) = \left(4 - \frac{8}{3}\right) - (0) = \frac{12}{3} - \frac{8}{3} = \frac{4}{3}$$

**Paso 6: Interpretar el resultado.**
El área es positiva, lo que confirma que la región está bien delimitada y el cálculo es correcto.

### Respuesta Final

$$A = \int_0^2 (2x - x^2)\, dx = \frac{4}{3} \text{ unidades}^2$$

---

## Ejercicio 88 — Integral por sustitución trigonométrica implícita

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calculá la integral indefinida:

$$\int \frac{\cos x}{\sin^3 x}\, dx$$

### Resolución paso a paso

**Paso

## Ejercicio 91 — Integral de una función polinómica

**Dificultad:** ⭐ Básica

### Enunciado

Calculá la integral indefinida:

$$\int \left(4x^3 - 6x^2 + 5x - 2\right)\,dx$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se aplica la regla de la potencia para integrales: $\displaystyle\int x^n\,dx = \frac{x^{n+1}}{n+1} + C$, válida para $n \neq -1$. Al ser una suma, se integra término a término por linealidad.

**Paso 2: Integrar el término $4x^3$.**

$$\int 4x^3\,dx = 4 \cdot \frac{x^{3+1}}{3+1} = 4 \cdot \frac{x^4}{4} = x^4$$

**Paso 3: Integrar el término $-6x^2$.**

$$\int -6x^2\,dx = -6 \cdot \frac{x^{2+1}}{2+1} = -6 \cdot \frac{x^3}{3} = -2x^3$$

**Paso 4: Integrar el término $5x$.**

$$\int 5x\,dx = 5 \cdot \frac{x^{1+1}}{1+1} = 5 \cdot \frac{x^2}{2} = \frac{5x^2}{2}$$

**Paso 5: Integrar el término $-2$.**

$$\int -2\,dx = -2x$$

**Paso 6: Reunir todos los términos.**

$$x^4 - 2x^3 + \frac{5x^2}{2} - 2x + C$$

### Respuesta Final

$$\int \left(4x^3 - 6x^2 + 5x - 2\right)\,dx = x^4 - 2x^3 + \frac{5x^2}{2} - 2x + C$$

---

## Ejercicio 92 — Integral con raíces y potencias negativas

**Dificultad:** ⭐ Básica

### Enunciado

Calculá la integral indefinida:

$$\int \left(\sqrt{x} + \frac{3}{x^2} - \frac{1}{\sqrt[3]{x}}\right)\,dx$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se reescribe cada término como potencia de $x$ para poder aplicar la regla $\displaystyle\int x^n\,dx = \frac{x^{n+1}}{n+1} + C$.

**Paso 2: Reescribir los términos como potencias.**

$$\sqrt{x} = x^{1/2}, \qquad \frac{3}{x^2} = 3x^{-2}, \qquad \frac{1}{\sqrt[3]{x}} = x^{1/3}$$

La integral queda:

$$\int \left(x^{1/2} + 3x^{-2} - x^{1/3}\right)\,dx$$

**Paso 3: Integrar $x^{1/2}$.**

$$\int x^{1/2}\,dx = \frac{x^{1/2+1}}{1/2+1} = \frac{x^{3/2}}{3/2} = \frac{2}{3}x^{3/2}$$

**Paso 4: Integrar $3x^{-2}$.**

$$\int 3x^{-2}\,dx = 3 \cdot \frac{x^{-2+1}}{-2+1} = 3 \cdot \frac{x^{-1}}{-1} = -\frac{3}{x}$$

**Paso 5: Integrar $x^{1/3}$.**

$$\int x^{1/3}\,dx = \frac{x^{1/3+1}}{1/3+1} = \frac{x^{4/3}}{4/3} = \frac{3}{4}x^{4/3}$$

**Paso 6: Reunir todos los términos.**

$$\frac{2}{3}x^{3/2} - \frac{3}{x} - \frac{3}{4}x^{4/3} + C$$

### Respuesta Final

$$\int \left(\sqrt{x} + \frac{3}{x^2} - \frac{1}{\sqrt[3]{x}}\right)\,dx = \frac{2}{3}x^{3/2} - \frac{3}{x} - \frac{3}{4}x^{4/3} + C$$

---

## Ejercicio 93 — Integral definida y cálculo de área

**Dificultad:** ⭐ Básica

### Enunciado

Calculá la integral definida:

$$\int_1^4 \left(3x^2 - 4x + 1\right)\,dx$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se aplica el Teorema Fundamental del Cálculo (TFC): $\displaystyle\int_a^b f(x)\,dx = F(b) - F(a)$, donde $F$ es una primitiva de $f$. Primero se halla $F(x)$ y luego se evalúa en los extremos.

**Paso 2: Calcular la primitiva $F(x)$.**

$$F(x) = \int \left(3x^2 - 4x + 1\right)\,dx = x^3 - 2x^2 + x$$

(se omite la constante $C$ en integrales definidas).

**Paso 3: Evaluar $F(4)$.**

$$F(4) = (4)^3 - 2(4)^2 + 4 = 64 - 32 + 4 = 36$$

**Paso 4: Evaluar $F(1)$.**

$$F(1) = (1)^3 - 2(1)^2 + 1 = 1 - 2 + 1 = 0$$

**Paso 5: Aplicar el TFC.**

$$\int_1^4 \left(3x^2 - 4x + 1\right)\,dx = F(4) - F(1) = 36 - 0 = 36$$

### Respuesta Final

$$\int_1^4 \left(3x^2 - 4x + 1\right)\,dx = 36$$

---

## Ejercicio 94 — Integral por sustitución simple

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calculá la integral indefinida:

$$\int \frac{x}{\left(x^2 + 5\right)^4}\,dx$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se reconoce la estructura $f(g(x)) \cdot g'(x)$, lo que sugiere el método de sustitución (cambio de variable). Se propone $u = x^2 + 5$.

**Paso 2: Realizar la sustitución.**

$$u = x^2 + 5 \implies \frac{du}{dx} = 2x \implies du = 2x\,dx \implies x\,dx = \frac{du}{2}$$

**Paso 3: Reescribir la integral en términos de $u$.**

$$\int \frac{x\,dx}{\left(x^2+5\right)^4} = \int \frac{1}{u^4} \cdot \frac{du}{2} = \frac{1}{2}\int u^{-4}\,du$$

**Paso 4: Integrar respecto de $u$.**

$$\frac{1}{2}\int u^{-4}\,du = \frac{1}{2} \cdot \frac{u^{-4+1}}{-4+1} = \frac{1}{2} \cdot \frac{u^{-3}}{-3} = -\frac{1}{6u^3}$$

**Paso 5: Volver a la variable original $x$.**

$$-\frac{1}{6u^3} = -\frac{1}{6\left(x^2+5\right)^3} + C$$

### Respuesta Final

$$\int \frac{x}{\left(x^2 + 5\right)^4}\,dx = -\frac{1}{6\left(x^2+5\right)^3} + C$$

---

## Ejercicio 95 — Integral de función exponencial con sustitución

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calculá la integral indefinida:

$$\int x^2\, e^{x^3 - 1}\,dx$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se observa que $x^2$ es (salvo constante) la derivada de $x^3 - 1$, por lo que se aplica sustitución con $u = x^3 - 1$.

**Paso 2: Calcular el diferencial de la sustitución.**

$$u = x^3 - 1 \implies \frac{du}{dx} = 3x^2 \implies du = 3x^2\,dx \implies x^2\,dx = \frac{du}{3}$$

**Paso 3: Reescribir la integral en términos de $u$.**

$$\int x^2 e^{x^3-1}\,dx = \int e^u \cdot \frac{du}{3} = \frac{1}{3}\int e^u\,du$$

**Paso 4: Integrar respecto de $u$.**

$$\frac{1}{3}\int e^u\,du = \frac{1}{3}e^u + C$$

**Paso 5: Volver a la variable original $x$.**

$$\frac{1}{3}e^u + C = \frac{1}{3}e^{x^3 - 1} + C$$

### Respuesta Final

$$\int x^2\, e^{x^3 - 1}\,dx = \frac{1}{3}e^{x^3 - 1} + C$$

---

## Ejercicio 96 — Integral por partes

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calculá la integral indefinida:

$$\int x\,\cos(3x)\,dx$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
Se aplica integración por partes: $\displaystyle\int u\,dv = uv - \int v\,du$. Siguiendo la regla ILATE (Inversa, Logarítmica, Algebraica, Trigonométrica, Exponencial), se elige $u = x$ (algebraica) y $dv = \cos(3x)\,dx$ (trigonométrica).

**Paso 2: Determinar $du$ y $v$.**

$$u = x \implies du = dx$$

$$dv = \cos(3x)\,dx \implies v = \int \cos(3x)\,dx = \frac{\sin(3x)}{3}$$

**Paso 3: Aplicar la fórmula de integración por partes.**

$$\int x\,\cos(3x)\,dx = uv - \int v\,du = x \cdot \frac{\sin(3x)}{3} - \int \frac{\sin(3x)}{3}\,dx$$

$$= \frac{x\sin(3x)}{3} - \frac{1}{3}\int \sin(3x)\,dx$$

**Paso 4: Calcular la integral restante.**

$$\int \sin(3x)\,dx = -\frac{\cos(3x)}{3}$$

**Paso 5: Sustituir y simplificar.**

$$\frac{x\sin(3x)}{3} - \frac{1}{3}\cdot\left(-\frac{\cos(3x)}{3}\right) + C = \frac{x\sin(3x)}{3} + \frac{\cos(3x)}{9} + C$$

### Respuesta Final

$$\int x\,\cos(3x)\,dx = \frac{x\sin(3x)}{3} + \frac{\cos(3x)}{9} + C$$

---

## Ejercicio 97 — Integral de función racional por fracciones simples

**Dificultad:** ⭐⭐ Intermedia

### Enunciado

Calculá la integral indefinida:

$$\int \frac{2x + 1}{x^2 - x - 6}\,dx$$

### Resolución paso a paso

**Paso 1: Identificar la estrategia.**
El integrando es una fracción racional con numerador de grado menor que el denominador. Se factoriza el denominador y se descompone en fracciones parciales.

**Paso 2: Factorizar el denominador.**

$$x^2 - x - 6 = (x-3)(x+2)$$

Las raíces son $x = 3$ y $x = -2$ (verificación: $3 \cdot(-2)=-6$, $3+(-2)=1$; con signo, $-1=$ coeficiente de $x$ ✓).

**Paso 3: Plantear la descomposición en fracciones parciales.**

$$\frac{2x+1}{(x-3)(x+2)} = \frac{A}{x-3} + \frac{B}{x+2}$$

Multiplicando ambos miembros por $(x-3)(x+2)$:

$$2x + 1 = A(x+2) + B(x-3)$$

**Paso 4: Determinar las constantes $A$ y $B$.**

- $x = 3$: $\;2(3)+1 = A(5) \implies 7 = 5A \implies A = \dfrac{7}{5}$
- $x = -2$: $\;2(-2)+1 = B(-5) \implies -3 = -5B \implies B = \dfrac{3}{5}$

**Paso 5: Reescribir e integrar.**

$$\int \frac{2x+1}{x^2-x-6}\,dx = \int \frac{7/5}{x-3}\,dx + \int \frac{3/5}{x+2}\,dx$$

$$= \frac{7}{5}\ln|x-3| + \frac{3}{5}\ln|x+2| + C$$

### Respuesta Final

$$\int \frac{2x+1}{x^2 - x - 6}\,dx = \frac{7}{5}\ln|x-3| + \frac{3}{5}\ln|x+2| + C$$

---

## Ejercicio 98 — Integral definida con sustitución trigonométrica conceptual

**Dificultad:** ⭐⭐⭐ Avanzada

### Enunciado

Calculá la integral definida:

$$\int_0^1 \frac{x}{\sqrt{4 - x^2}}\,dx$$

### Resolución paso a paso

**Paso 1: Identificar la estrate
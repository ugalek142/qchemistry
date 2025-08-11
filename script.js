document.addEventListener("DOMContentLoaded", () => {
  const courseData = {
    1: {
      theory: `
        <h2>Módulo 1: Introducción a la Química Cuántica</h2>
        <p>La química cuántica estudia las propiedades y comportamiento de la materia a nivel atómico y molecular, utilizando la mecánica cuántica.</p>
        <p>Conceptos clave:</p>
        <ul>
          <li>Función de onda \( \\psi \)</li>
          <li>Ecuación de Schrödinger \( \\hat{H} \\psi = E \\psi \)</li>
          <li>Principio de incertidumbre de Heisenberg</li>
        </ul>
        <p>La ecuación de Schrödinger es fundamental para determinar los estados energéticos permitidos en un sistema cuántico.</p>
      `,
      practice: `
        <h3>Ejemplo Práctico</h3>
        <p>Simulación sencilla de la función de onda en una caja unidimensional:</p>
        <pre><code>import numpy as np
import matplotlib.pyplot as plt

L = 1  # Longitud de la caja
x = np.linspace(0, L, 1000)
psi = np.sqrt(2 / L) * np.sin(np.pi * x / L)

plt.plot(x, psi)
plt.title('Función de onda estado fundamental')
plt.xlabel('Posición (x)')
plt.ylabel('$\\psi(x)$')
plt.show()
</code></pre>
      `,
      homework: `
        <h3>Tarea</h3>
        <p>Explique el significado físico de la ecuación de Schrödinger y el principio de incertidumbre, con ejemplos.</p>
      `
    },

    2: {
      theory: `
        <h2>Módulo 2: Mecánica Cuántica Aplicada a Átomos</h2>
        <p>Se estudia el modelo atómico y cómo se describen los electrones con funciones de onda y números cuánticos.</p>
        <ul>
          <li>Números cuánticos: principal \(n\), azimutal \(l\), magnético \(m\), spin \(s\).</li>
          <li>Orbitales atómicos y su forma matemática.</li>
          <li>Principio de exclusión de Pauli.</li>
        </ul>
        <p>Ejemplo de función de onda del estado fundamental del hidrógeno:</p>
        <p>\[
          \\psi_{100}(r) = \\frac{1}{\\sqrt{\\pi a_0^3}} e^{-r/a_0}
        \]</p>
      `,
      practice: `
        <h3>Ejemplo Práctico</h3>
        <p>Código básico para obtener orbitales atómicos en Qiskit Nature:</p>
        <pre><code>from qiskit_nature.drivers import PySCFDriver

driver = PySCFDriver(atom='H .0 .0 .0', basis='sto3g')
molecule = driver.run()
print(molecule.orbital_energies)
</code></pre>
      `,
      homework: `
        <h3>Tarea</h3>
        <p>Describa la importancia del principio de exclusión de Pauli en la estructura electrónica.</p>
      `
    },

    3: {
      theory: `
        <h2>Módulo 3: Estructura Molecular y Enlace</h2>
        <p>El enlace químico es explicado mediante orbitales moleculares resultantes de combinar orbitales atómicos.</p>
        <ul>
          <li>Orbitales atómicos: s, p, d, f.</li>
          <li>Hibridación: sp, sp², sp³.</li>
          <li>Combinación lineal de orbitales atómicos (LCAO).</li>
        </ul>
        <p>Ejemplo de orbital molecular en hidrógeno:</p>
        <p>\[
          \\psi_{mol} = c_1 \\psi_{1s_A} + c_2 \\psi_{1s_B}
        \]</p>
      `,
      practice: `
        <h3>Ejemplo Práctico</h3>
        <p>Visualice orbitales con herramientas externas o con Qiskit Nature.</p>
      `,
      homework: `
        <h3>Tarea</h3>
        <p>Investigue y describa la geometría y propiedades de la hibridación sp, sp² y sp³.</p>
      `
    },

    4: {
      theory: `
        <h2>Módulo 4: Métodos Cuánticos Computacionales</h2>
        <p>Se emplean métodos numéricos para resolver sistemas cuánticos complejos.</p>
        <ul>
          <li>Métodos ab initio (Hartree-Fock, DFT).</li>
          <li>Ventajas y limitaciones de cada método.</li>
        </ul>
      `,
      practice: `
        <h3>Ejemplo Práctico</h3>
        <p>Ejecute cálculo Hartree-Fock para H₂ con Qiskit Nature:</p>
        <pre><code>from qiskit_nature.drivers import PySCFDriver
from qiskit_nature.problems.second_quantization.electronic import ElectronicStructureProblem

driver = PySCFDriver(atom='H .0 .0 .0; H .0 .0 0.74', basis='sto3g')
problem = ElectronicStructureProblem(driver)
print("Energía aproximada:", problem.second_q_ops()[0].to_matrix().diagonal().sum())
</code></pre>
      `,
      homework: `
        <h3>Tarea</h3>
        <p>Compare Hartree-Fock y DFT: ventajas, desventajas y casos de uso.</p>
      `
    },

    5: {
      theory: `
        <h2>Módulo 5: Aplicaciones Prácticas</h2>
        <p>La química cuántica permite avances en:</p>
        <ul>
          <li>Diseño de fármacos</li>
          <li>Materiales avanzados</li>
          <li>Simulación de reacciones químicas</li>
        </ul>
      `,
      practice: `
        <h3>Ejemplo Práctico</h3>
        <p>Simulación de disociación del hidrógeno con Qiskit Nature.</p>
      `,
      homework: `
        <h3>Tarea</h3>
        <p>Investigue un caso real donde química cuántica fue crucial y prepare un resumen.</p>
      `
    },

    6: {
      theory: `
        <h2>Módulo 6: Uso de Qiskit Nature</h2>
        <p>Qiskit Nature facilita simulaciones cuánticas en química y materiales.</p>
        <ul>
          <li>Drivers, problemas y algoritmos clave.</li>
          <li>Integración con simuladores y hardware cuántico real.</li>
        </ul>
      `,
      practice: `
        <h3>Ejemplo Práctico</h3>
        <pre><code>from qiskit_nature.drivers import PySCFDriver
from qiskit_nature.problems.second_quantization.electronic import ElectronicStructureProblem
from qiskit_nature.algorithms import GroundStateEigensolver
from qiskit.algorithms import NumPyMinimumEigensolver

driver = PySCFDriver(atom='Li .0 .0 .0; H .0 .0 1.6', basis='sto3g')
problem = ElectronicStructureProblem(driver)

solver = GroundStateEigensolver(problem.transformation, NumPyMinimumEigensolver())
result = solver.solve(problem)
print("Energía del estado base:", result.total_energies[0])
</code></pre>
      `,
      homework: `
        <h3>Tarea</h3>
        <p>Realice un cálculo para la molécula de agua y documente resultados.</p>
      `
    }
  };

  const moduleButtons = document.querySelectorAll(".module-btn");
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContent = document.getElementById("tab-content");
  const themeToggle = document.getElementById("theme-toggle");

  let currentModule = 1;
  let currentTab = "theory";

  function loadContent(module, tab) {
    tabContent.innerHTML = courseData[module][tab];
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise();
    }
  }

  moduleButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains("active")) return;
      moduleButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentModule = Number(btn.getAttribute("data-module"));
      loadContent(currentModule, currentTab);
    });
  });

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains("active")) return;
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentTab = btn.getAttribute("data-tab");
      loadContent(currentModule, currentTab);
    });
  });

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
      themeToggle.textContent = "☀️";
      themeToggle.setAttribute("aria-label", "Alternar modo claro");
    } else {
      themeToggle.textContent = "🌙";
      themeToggle.setAttribute("aria-label", "Alternar modo oscuro");
    }
  });

  loadContent(currentModule, currentTab);
});

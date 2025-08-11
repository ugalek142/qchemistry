document.addEventListener("DOMContentLoaded", () => {
  const courseData = {
    1: {
      theory: `
        <h3>Teoría: Introducción a la Química Cuántica</h3>
        <p>La química cuántica es el campo que utiliza los principios de la mecánica cuántica para explicar y predecir propiedades químicas y físicas de átomos y moléculas. Es fundamental para el desarrollo de materiales, fármacos y tecnologías avanzadas.</p>
        <ul>
          <li><strong>Definición y alcance:</strong> Cómo la mecánica cuántica permite entender el comportamiento molecular.</li>
          <li><strong>Historia:</strong> Principales hitos desde Schrödinger y Heisenberg hasta la computación cuántica.</li>
          <li><strong>Importancia actual:</strong> Aplicaciones en química computacional, física del estado sólido y química médica.</li>
        </ul>
        <p><strong>Ejemplo:</strong> Evolución del cálculo molecular desde modelos empíricos hasta métodos ab initio.</p>
      `,
      practice: `
        <h3>Práctica: Configuración del entorno de trabajo</h3>
        <ol>
          <li>Instalar Python 3.x y pip (gestor de paquetes).</li>
          <li>Instalar Qiskit y Qiskit Nature para química computacional: <code>pip install qiskit qiskit-nature</code>.</li>
          <li>Verificar la instalación ejecutando un cálculo sencillo en el intérprete Python.</li>
        </ol>
        <p><strong>Ejemplo de comando para instalación:</strong></p>
        <pre><code>pip install qiskit qiskit-nature</code></pre>
      `,
      homework: `
        <h3>Tarea</h3>
        <p>Realice una investigación y redacte un informe breve (1-2 páginas) sobre la evolución histórica de la química cuántica, destacando tres hitos relevantes y sus impactos actuales.</p>
        <ul>
          <li>Incluya referencias académicas.</li>
          <li>Mencione aplicaciones industriales.</li>
        </ul>
      `
    },

    2: {
      theory: `
        <h3>Teoría: Fundamentos de Mecánica Cuántica</h3>
        <p>La mecánica cuántica es la base teórica para describir sistemas microscópicos, donde las leyes clásicas no aplican. Se centra en la dualidad onda-partícula y la naturaleza probabilística de las partículas.</p>
        <ul>
          <li><strong>Postulados:</strong> Función de onda, operadores, y valores propios.</li>
          <li><strong>Ecuación de Schrödinger:</strong> Ecuación fundamental para sistemas cuánticos.</li>
          <li><strong>Principio de incertidumbre:</strong> Limitaciones en la precisión de mediciones simultáneas.</li>
          <li><strong>Estados cuánticos:</strong> Superposición, colapso y entanglement.</li>
        </ul>
        <p><strong>Ejemplo matemático:</strong></p>
        <p>$$i \\hbar \\frac{\\partial}{\\partial t} \\Psi(\\mathbf{r}, t) = \\hat{H} \\Psi(\\mathbf{r}, t)$$</p>
      `,
      practice: `
        <h3>Práctica: Solución para la partícula en una caja unidimensional</h3>
        <p>Calcule y grafique la función de onda para el estado fundamental.</p>
        <pre><code>import numpy as np
import matplotlib.pyplot as plt

L = 1  # longitud de la caja
x = np.linspace(0, L, 1000)
psi = np.sqrt(2 / L) * np.sin(np.pi * x / L)

plt.plot(x, psi)
plt.title('Función de onda estado fundamental')
plt.xlabel('Posición (x)')
plt.ylabel('$\\psi(x)$')
plt.grid(True)
plt.show()
</code></pre>
      `,
      homework: `
        <h3>Tarea</h3>
        <p>Explique en sus propias palabras el significado físico de la ecuación de Schrödinger y el principio de incertidumbre. Incluya ejemplos.</p>
      `
    },

    3: {
      theory: `
        <h3>Teoría: Estructura Molecular y Enlace</h3>
        <p>El enlace químico es explicado a nivel cuántico por la interacción entre orbitales atómicos, describiendo cómo los electrones se distribuyen y forman moléculas estables.</p>
        <ul>
          <li><strong>Orbitales atómicos:</strong> s, p, d y f, y su forma matemática.</li>
          <li><strong>Reglas de construcción:</strong> Principio de exclusión, Aufbau y Pauli.</li>
          <li><strong>Teoría del enlace de valencia:</strong> Hibridación y solapamiento.</li>
          <li><strong>Orbitales moleculares:</strong> Combinación lineal de orbitales atómicos (LCAO).</li>
        </ul>
        <p><strong>Ejemplo:</strong> Orbital molecular de hidrógeno (H<sub>2</sub>):</p>
        <p>$$\\psi_\\text{mol} = c_1 \\psi_{1s_A} + c_2 \\psi_{1s_B}$$</p>
      `,
      practice: `
        <h3>Práctica: Visualización de orbitales atómicos</h3>
        <p>Utilice software como PyMol o VMD para visualizar orbitales s y p.</p>
        <p>Ejemplo con Qiskit:</p>
        <pre><code>from qiskit_nature.drivers import PySCFDriver
driver = PySCFDriver(atom='H .0 .0 .0', basis='sto3g')
molecule = driver.run()
print(molecule.orbital_energies)
</code></pre>
      `,
      homework: `
        <h3>Tarea</h3>
        <p>Describa la hibridación sp, sp2 y sp3, sus geometrías y ejemplos de moléculas correspondientes.</p>
        <ul>
          <li>Incluya diagramas y referencias.</li>
          <li>Discuta la hibridación de orbitales.</li>
        </ul>
      `
    },

    4: {
      theory: `
        <h3>Teoría: Métodos Cuánticos Computacionales</h3>
        <p>Los métodos computacionales permiten simular sistemas moleculares complejos con precisión.</p>
        <ul>
          <li><strong>Ab initio:</strong> Métodos basados en principios fundamentales sin parámetros empíricos.</li>
          <li><strong>Hartree-Fock:</strong> Aproximación central en química computacional.</li>
          <li><strong>Teoría del funcional de densidad (DFT):</strong> Método eficiente para cálculos en sistemas grandes.</li>
          <li><strong>Limitaciones y desafíos:</strong> Costo computacional y precisión.</li>
        </ul>
      `,
      practice: `
        <h3>Práctica: Cálculo de energía molecular con Hartree-Fock</h3>
        <p>Ejecute un cálculo Hartree-Fock básico utilizando Qiskit Nature para la molécula de hidrógeno.</p>
        <pre><code>from qiskit_nature.drivers import PySCFDriver
from qiskit_nature.problems.second_quantization.electronic import ElectronicStructureProblem

driver = PySCFDriver(atom='H .0 .0 .0; H .0 .0 0.74', basis='sto3g')
problem = ElectronicStructureProblem(driver)
print("Energía del sistema:", problem.second_q_ops()[0].to_matrix().diagonal().sum())
</code></pre>
      `,
      homework: `
        <h3>Tarea</h3>
        <p>Realice un informe comparativo entre los métodos Hartree-Fock y DFT, mencionando ventajas, desventajas y casos de aplicación.</p>
      `
    },

    5: {
      theory: `
        <h3>Teoría: Aplicaciones Prácticas de la Química Cuántica</h3>
        <ul>
          <li><strong>Diseño de fármacos:</strong> Modelado molecular para optimización de ligandos.</li>
          <li><strong>Materiales avanzados:</strong> Nanomateriales, superconductores y semiconductores.</li>
          <li><strong>Simulación de reacciones químicas:</strong> Mecánica cuántica para entender mecanismos y energías de activación.</li>
        </ul>
      `,
      practice: `
        <h3>Práctica: Simulación de una reacción química simple</h3>
        <p>Utilice Qiskit Nature para simular la reacción de disociación del hidrógeno molecular.</p>
        <pre><code>from qiskit_nature.drivers import PySCFDriver
from qiskit_nature.problems.second_quantization.electronic import ElectronicStructureProblem
from qiskit_nature.algorithms.ground_state_solvers.minimum_eigensolver_factories import VQEUCCFactory
from qiskit.algorithms import VQE
from qiskit.algorithms.optimizers import SLSQP
from qiskit.circuit.library import TwoLocal
from qiskit.utils import QuantumInstance
from qiskit import Aer

driver = PySCFDriver(atom='H .0 .0 .0; H .0 .0 0.74', basis='sto3g')
problem = ElectronicStructureProblem(driver)

quantum_instance = QuantumInstance(Aer.get_backend('statevector_simulator'))
vqe = VQE(ansatz=TwoLocal(rotation_blocks='ry', entanglement_blocks='cz', reps=1), optimizer=SLSQP(maxiter=100), quantum_instance=quantum_instance)
solver_factory = VQEUCCFactory(quantum_instance)
result = solver_factory.solve(problem)
print("Energía estimada:", result.total_energies[0])
</code></pre>
      `,
      homework: `
        <h3>Tarea</h3>
        <p>Investigue un caso de estudio donde la química cuántica haya sido clave en el desarrollo de un material o fármaco y prepare una presentación profesional.</p>
      `
    },

    6: {
      theory: `
        <h3>Teoría: Uso de Qiskit Nature</h3>
        <p>Qiskit Nature es un módulo de Qiskit diseñado para facilitar la simulación cuántica en química y materiales.</p>
        <ul>
          <li><strong>Arquitectura:</strong> Drivers, problemas, transformadores y algoritmos.</li>
          <li><strong>Componentes clave:</strong> PySCFDriver, ElectronicStructureProblem, GroundStateSolver.</li>
          <li><strong>Integración con backends cuánticos:</strong> Simuladores y hardware real.</li>
        </ul>
      `,
      practice: `
        <h3>Práctica: Desarrollo de un workflow básico con Qiskit Nature</h3>
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
        <p>Configure y ejecute un cálculo similar para la molécula de agua (H₂O) utilizando Qiskit Nature y documente el procedimiento y resultados obtenidos.</p>
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
    // Re-render MathJax fórmulas
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

  // Tema oscuro toggle
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
      themeToggle.textContent = "☀️";
      themeToggle.setAttribute("aria-label", "Alternar modo claro");
    } else {
      themeToggle.textContent = "🌙";
      themeToggle.setAttribute("aria-label", "Alternar modo oscuro");
    }
  });

  loadContent(currentModule, currentTab);
});

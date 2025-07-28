const modelViewer = document.querySelector("#myModel");
const variantSelector = document.querySelector("#variant-selector");

modelViewer.addEventListener("load", () => {
  const variants = modelViewer.availableVariants;

  // Limpiar opciones
  variantSelector.innerHTML = "";

  // Si no hay variantes, mostrar mensaje
  if (!variants || variants.length === 0) {
    const opt = document.createElement("option");
    opt.textContent = "Sin variantes";
    variantSelector.appendChild(opt);
    variantSelector.disabled = true;
    return;
  }

  // Crear opción por cada variante
  variants.forEach(variant => {
    const opt = document.createElement("option");
    opt.value = variant;
    opt.textContent = variant;
    variantSelector.appendChild(opt);
  });

  // Cambiar variante al seleccionar
  variantSelector.addEventListener("change", () => {
    modelViewer.variantName = variantSelector.value;
  });
});

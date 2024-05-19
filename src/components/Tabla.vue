<template>
  <table class="tabla">
    <slot></slot>
  </table>
</template>
<style lang="css">
:root {
  --var-color-negro: #16181c;
  --var-color-gris: #26292f;
  --var-color-balnco: #c4cfdd;
  --var-color-verde: #1dd1a1;
  --var-color-rojo: #ff6b6b;
  --var-color-gris-blanco: #b0bac5;
  --var-borde-radius: 0.7rem;
}
th,
td {
  transition: 0.3s;
  color: var(--var-color-balnco);
  text-align: center;
  padding: 0.5rem 1rem;
}
.tabla {
  width: 100%;
  border-collapse: collapse;
}
thead {
  color: #fff;
  background-color: var(--var-color-negro);
}
tr th:first-child {
  border-top-left-radius: var(--var-borde-radius);
  border-bottom-left-radius: var(--var-borde-radius);
}
tr th:last-child {
  border-top-right-radius: var(--var-borde-radius);
}
tr:last-child td:last-child {
  padding-bottom: 0.8rem;
  background: var(--var-color-negro);
  border-bottom-right-radius: var(--var-borde-radius);
  border-bottom-left-radius: var(--var-borde-radius);
}
td:last-child {
  width: 10%;
  padding: 0.5rem;
  background: var(--var-color-negro);
}
tr:hover td {
  background: #ffffff15 !important;
}
tr:hover .gap button {
  outline: 0.1rem solid #b0bac527;
}
tr:hover td:last-child {
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--var-borde-radius);
  border-bottom-right-radius: var(--var-borde-radius);
}
tr:hover td:nth-child(1) {
  border-top-left-radius: var(--var-borde-radius);
  border-bottom-left-radius: var(--var-borde-radius);
}
</style>
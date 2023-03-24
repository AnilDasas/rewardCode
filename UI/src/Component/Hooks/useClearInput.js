export const ClearInput = (id) => {
    const inputElm = document.getElementById(id);
    if (inputElm && inputElm?.value) {
      inputElm.value = "";
    }
};
const loopCreator = (container, ele, arr, classes) => {
  arr.forEach((a, i) => {
    const isLastColumn = (i + 1) % 4 === 0;
    container.innerHTML += `<${ele} class="${
      a === "="
        ? "bg-green-500/25 col-span-4"
        : isLastColumn || Math.floor(i / 4) == 0
        ? "bg-blue-400/25"
        : ""
    } ${classes}">${a}</${ele}>`;
  });
};

export default loopCreator;

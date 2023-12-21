const deleteAll = (container) => {
  container.forEach(con => {
    con.innerText = 0;
  })
};

export default deleteAll;
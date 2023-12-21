const deleteOne = (value) => {
  let res = value.split("");
  res.splice(-1, 1);
  return res.join("");
};

export default deleteOne;

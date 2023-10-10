let data = [
  {
    id: "",
    nombre: "",
    email: "",
    password: "",
  },
];

const readAll = (req, res) => {
  const { id, nombre, email, password } = req.body;

  data.push({
    id,
    nombre,
    email,
    password,
  });

  res.json({
    msg: "Registro exitoso",
    data: data,
  });
};

export default {
  readAll,
};

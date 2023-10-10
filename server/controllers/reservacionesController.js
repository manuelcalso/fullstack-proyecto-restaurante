let data = [
  {
    title: "",
    description: "",
  },
];

const readAll = (req, res) => {
  const { title, description } = req.body;

  data.push({
    title,
    description,
  });

  res.json({
    msg: "reservacion agregada",
    data: data,
  });
};

export default {
  readAll,
};

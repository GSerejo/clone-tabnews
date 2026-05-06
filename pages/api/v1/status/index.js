function status(req, res) {
  res.status(200).json({ message: "O trem ta rodando" });
}

export default status;

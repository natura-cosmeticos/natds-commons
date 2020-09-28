const onRejected = (error) => {
  if (error) {
    throw error;
  }

  return error;
};

module.exports = onRejected();

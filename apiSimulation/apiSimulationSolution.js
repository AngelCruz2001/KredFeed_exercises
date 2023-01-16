const getUsers = async (limit, skip) => {
  try {
    const response = await fetch(
      `https://randomuser.me/api/?results=${limit}&skip=${skip}`
    );
    const data = await response.json();
    return data.results
      .map((user) => {
        return {
          email: user.email,
          firstName: user.name.first,
          lastName: user.name.last,
          age: user.dob.age,
          city: user.location.city,
          phone: user.phone,
        };
      })
      .sort((a, b) => a.email.localeCompare(b.email));
  } catch (error) {
    return console.log(error);
  }
};

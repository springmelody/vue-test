const deepAddUser = (currentUser, users) => {
  if (currentUser.bossId === null) {
    currentUser.level = 0;
    users.push(currentUser);
    return;
  }

  for (const user of users) {
    if (currentUser.bossId === user.id) {
      console.log("Boss name: ", user.name);
      currentUser.level = user.level + 1;
      user.childrens.push(currentUser);
    } else {
      deepAddUser(currentUser, user.childrens);
    }
  }
};

const deepSortUserName = (users) => {
  users.sort((a, b) => a.name.localeCompare(b.name));
  users.forEach((user) => {
    if (user.childrens) {
      deepSortUserName(user.childrens);
    }
  });
};

const clearPhone = (phone) => {
  const regExp = /[^0-9]/g;
  return phone.replace(regExp, "");
};

const deepSortUserPhone = (users) => {
  users.sort((a, b) => clearPhone(a.phoneNumber) - clearPhone(b.phoneNumber));
  users.forEach((user) => {
    if (user.childrens) {
      deepSortUserPhone(user.childrens);
    }
  });
};

export { deepAddUser, deepSortUserName, deepSortUserPhone };

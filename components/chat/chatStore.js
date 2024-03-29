const Model = require("./chatModel");

function addChat(chat) {
  const myChat = new Model(chat);
  return myChat.save();
}

function listChats(userId) {
  return new Promise((resolve, reject) => {
    let filter = {};
    if (userId) {
      filter = { users: filterUser };
    }
    Model.find(filter)
      .populate("users")
      .exec((error, populated) => {
        if (error) {
          return reject(error);
        }
        resolve(populated);
      });
  });
}

module.exports = {
  add: addChat,
  list: listChats,
};

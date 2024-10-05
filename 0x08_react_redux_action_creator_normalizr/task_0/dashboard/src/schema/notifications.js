const notificationsData = require("../../notifications.json");

export const getAllNotificationsByUser = (userId) => {
  return notificationsData
    .filter((notification) => notification.author.id === userId)
    .map((notification) => notification.context);
};

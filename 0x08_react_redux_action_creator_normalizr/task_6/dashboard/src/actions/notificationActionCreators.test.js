import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
} from "./notificationActionTypes";
import {
  markAsRead,
  setNotificationFilter,
} from "./notificationActionCreators";

describe("Notification Action Creators", () => {
  describe("markAsRead", () => {
    it("should create an action to mark a notification as read", () => {
      const index = 1;
      const expectedAction = {
        type: MARK_AS_READ,
        index: 1,
      };
      expect(markAsRead(index)).toEqual(expectedAction);
    });
  });

  describe("setNotificationFilter", () => {
    it("should create an action to set the notification filter to DEFAULT", () => {
      const filter = NotificationTypeFilters.DEFAULT;
      const expectedAction = {
        type: SET_TYPE_FILTER,
        filter: "DEFAULT",
      };
      expect(setNotificationFilter(filter)).toEqual(expectedAction);
    });
  });
});

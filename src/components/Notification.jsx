import React, { useState, useEffect } from "react";

export const Notification = ({ notification, setNotification, notType }) => {
  const [isVisible, setIsVisible] = useState(notification);

  useEffect(() => {
    // Reset visibility when notificationification prop changes
    setIsVisible(notification);

    if (notification) {
      const timer = setTimeout(() => {
        if (notType != "Win") {
          setIsVisible(false);
          setNotification(false);
        }
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [notification, setNotification]);

  if (!isVisible) return null;

  return (
    <div className="notification">
      {notType === "Win" ? (
        <h1 style={{ color: "green", margin: 0 }}>You Win</h1>
      ) : (
        <h1 style={{ color: "red", margin: 0 }}>Invalid Food Name</h1>
      )}
    </div>
  );
};

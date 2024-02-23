import { Middleware } from "redux";

import { RootState } from "../store";

export const loggerMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    const typedAction = action as { type: string; payload?: any }; // Type assertion

    // Now use 'typedAction' instead of 'action'
    if (!typedAction.type) {
      return next(action);
    }

    console.log("type:", typedAction.type);
    // Rest of your middleware logic
  };

export const HOME_PAGE_METADATA = {
  TITLE: "Clippr",
  DESCRIPTION: "Your personal space to save and organize your favorite links.",
  KEYWORDS: [
    "bookmark manager",
    "save links",
    "Clippr",
    "URL organizer",
    "link storage",
    "web bookmarks",
    "online bookmarks",
    "favorite links",
    "link saver",
    "cloud bookmarks",
    "tagged bookmarks",
    "bookmark sync",
  ],
};

export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  DASHBOARD: "/d",
  BOOKMARKS: "/d/bookmarks",
};

export const GITHUB_REPO_LINK = "https://github.com/starlightroad/clippr";

export const ERRORS = {
  SERVER: {
    UNABLE_TO_PROCESS: "The server was unable to process your request.",
    INTERNAL_ERROR: "An internal server error occurred.",
  },
  AUTH: {
    INVALID_CREDENTIALS: "Invalid email or password.",
    UNAUTHORIZED: "You are not authorized to perform this action.",
    USER_EXISTS: "User already exists.",
    FAILED_TO_CREATE_USER: "Failed to create user.",
    FAILED_TO_LOG_IN_USER: "Failed to log in user.",
  },
  VALIDATION: {
    REQUIRED_FIELD: "This field is required.",
    INVALID_EMAIL: "Please enter a valid email address.",
    PASSWORD_TOO_SHORT: "Password must be at least 8 characters long.",
    PASSWORD_TOO_LONG: "Password must be no more than 32 characters.",
    PASSWORDS_DO_NOT_MATCH: "Passwords do not match.",
    PASSWORD_WEAK:
      "Password must include at least one letter, one number, and one special character.",
    PASSWORD_REQUIRED: "Please enter your password.",
  },
  CLIPPR: {
    BOOKMARK_NOT_FOUND: "Bookmark not found.",
    DUPLICATE_BOOKMARK: "This bookmark already exists in your collection.",
    DUPLICATE_COLLECTION: "This collection already exists.",
  },
};

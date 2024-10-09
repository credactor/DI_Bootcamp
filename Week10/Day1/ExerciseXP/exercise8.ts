// Create a function getAction that takes a string representing a user role and returns an action for the user. Use a switch statement with complex conditions to handle multiple roles.

type Action = "admin" | "editor" | "viewer" | "guest";

function getAction(role: Action) {
  switch (role) {
    case "admin":
        return "Manage users and settings";
    case "editor":
        return "Edit content";
    case "viewer":
        return "View content";
    case "guest":
        return "Limited access";
    default:
        return "Invalid role";
  }
}

console.log(getAction("editor"));
console.log(getAction("admin"));
console.log(getAction("unknown"));
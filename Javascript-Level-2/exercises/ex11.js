/**
 * Exercise 11: createLogger Factory
 * Prompt: Create createLogger(prefix) that returns a function printing [prefix] message.
 */

function createLogger(prefix) {
  return function(message) {
    console.log(`[${prefix.toUpperCase()}] ${new Date().toLocaleTimeString()} - ${message}`);
  };
}

const authLogger = createLogger("AuthService");
const dbLogger = createLogger("Database");

authLogger("User login token generated.");
dbLogger("Connection pool initialized.");

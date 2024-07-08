interface Success {
  success: true;
  error?: undefined; // Explicitly state that error should not be present
}

interface Failure {
  success: false;
  error: { message: string }; // Error must be present when success is false
}

type ErrorHandling = Success | Failure;

// Example usage:

const handleError = (result: ErrorHandling) => {
  if (result.success) {
    console.log("Operation was successful.");
  } else {
    console.log("Error message:", result.error.message);
  }
};

// Valid examples
const validSuccess: ErrorHandling = {
  success: true,
};

const validFailure: ErrorHandling = {
  success: false,
  error: { message: "An error occurred." },
};

// Invalid examples (TypeScript will show errors)
// const invalidSuccess: ErrorHandling = {
//   success: true,
//   error: { message: "This should not be here." }
// };

// const invalidFailure: ErrorHandling = {
//   success: false
// };

handleError(validSuccess);
handleError(validFailure);

export const loadFormDataFromLocalStorage = () => {
  try {
    const savedData = localStorage.getItem("formData");
    return savedData ? JSON.parse(savedData) : {};
  } catch (error) {
    console.error("Failed to load form data:", error);
    return {};
  }
};

export const saveFormDataToLocalStorage = (formData) => {
  try {
    localStorage.setItem("formData", JSON.stringify(formData));
  } catch (error) {
    console.error("Failed to save form data:", error);
  }
};

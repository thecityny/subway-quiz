

export const getDateUpdated = () => {
    const timestamp = process.env.REACT_APP_PUB_DATE;
    if (!timestamp) {
      throw new Error("No publication date defined in .env file!");
    } else {
      const date = new Date(timestamp.replace(/-/g, "/"));
      const dateFormatted = date.toLocaleDateString("en-us", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      return dateFormatted;
    }
  };
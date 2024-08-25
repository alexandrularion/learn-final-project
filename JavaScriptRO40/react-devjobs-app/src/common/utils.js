const utils = {
  getJobType: (type) => {
    switch (type) {
      case 0:
        return "Full Time";
      case 1:
        return "Part Time";
      case 2:
        return "Contract";
    }
    return "N/A";
  },
  getTimeAgo: (inputDate) => {
    const date = new Date(inputDate);
    const now = new Date();
    const diff = Math.floor((now - date) / 1000); // Difference in seconds
    const days = Math.floor(diff / (60 * 60 * 24));
    if (days > 0) {
      return `${days}d ago`;
    }
    const hours = Math.floor(diff / (60 * 60));
    if (hours > 0) {
      return `${hours}h ago`;
    }
    const minutes = Math.floor(diff / 60);
    if (minutes > 0) {
      return `${minutes}m ago`;
    }
    return `${diff}s ago`; // If less than a minute, return seconds
  },
};

export default utils;

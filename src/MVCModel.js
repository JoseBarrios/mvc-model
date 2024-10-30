class MVCModel {
  constructor(initialData = {}) {
    this.data = initialData; // Stores the data, which can be any type (object, array, etc.)
    this.listeners = []; // Array to store observer functions that are notified of data changes
  }

  // Register a listener that will be notified when data changes
  addListener(callback) {
    this.listeners.push(callback);
  }

  // Remove a specific listener
  removeListener(callback) {
    this.listeners = this.listeners.filter((listener) => listener !== callback);
  }

  // Notify all listeners of data changes
  notifyListeners() {
    this.listeners.forEach((listener) => listener(this.data));
  }

  // Get the current data
  getData() {
    return this.data;
  }

  // Set new data, replacing the existing data, and notify listeners
  setData(newData) {
    this.data = newData;
    this.notifyListeners();
  }

  // Update a single property in the data object and notify listeners
  updateData(key, value) {
    if (typeof this.data === 'object' && this.data !== null) {
      this.data[key] = value;
      this.notifyListeners();
    } else {
      throw new Error('Data must be an object to use updateData.');
    }
  }

  // Reset the data to an empty object or array (or any default type) and notify listeners
  resetData(defaultData = {}) {
    this.data = defaultData;
    this.notifyListeners();
  }

  // Clear all listeners (useful for cleanup)
  clearListeners() {
    this.listeners = [];
  }
}

module.exports = MVCModel;

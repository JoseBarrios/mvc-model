const MVCModel = require('../src/MVCModel'); // Import the MVCModel class

describe('MVCModel Class', () => {
  let model;
  let mockListener;

  beforeEach(() => {
    // Initialize a new MVCModel instance before each test
    model = new MVCModel();
    // Create a mock listener function for testing
    mockListener = jest.fn();
  });

  afterEach(() => {
    // Clear any mock data between tests
    jest.clearAllMocks();
  });

  test('initializes with default data', () => {
    const emptyMVCModel = new MVCModel();
    expect(emptyMVCModel.getData()).toEqual({});

    const arrayMVCModel = new MVCModel([1, 2, 3]);
    expect(arrayMVCModel.getData()).toEqual([1, 2, 3]);
  });

  test('setData replaces the current data and notifies listeners', () => {
    model.addListener(mockListener);
    model.setData({ name: 'John Doe' });

    expect(model.getData()).toEqual({ name: 'John Doe' });
    expect(mockListener).toHaveBeenCalledWith({ name: 'John Doe' });
  });

  test('addListener adds a new listener', () => {
    model.addListener(mockListener);
    model.setData({ name: 'Jane Doe' });

    expect(mockListener).toHaveBeenCalledWith({ name: 'Jane Doe' });
  });

  test('removeListener removes a specific listener', () => {
    model.addListener(mockListener);
    model.removeListener(mockListener);
    model.setData({ name: 'John Doe' });

    expect(mockListener).not.toHaveBeenCalled();
  });

  test('notifyListeners calls each listener with updated data', () => {
    const secondListener = jest.fn();
    model.addListener(mockListener);
    model.addListener(secondListener);

    model.setData({ key: 'value' });

    expect(mockListener).toHaveBeenCalledWith({ key: 'value' });
    expect(secondListener).toHaveBeenCalledWith({ key: 'value' });
  });

  test('updateData updates a single property in an object and notifies listeners', () => {
    model.setData({ age: 25 });
    model.addListener(mockListener);

    model.updateData('age', 30);

    expect(model.getData()).toEqual({ age: 30 });
    expect(mockListener).toHaveBeenCalledWith({ age: 30 });
  });

  test('updateData throws an error if data is not an object', () => {
    model.setData('not-an-object');

    expect(() => model.updateData('age', 30)).toThrow(
      'Data must be an object to use updateData.'
    );
  });

  test('resetData clears data to a default value and notifies listeners', () => {
    model.setData({ name: 'John' });
    model.addListener(mockListener);

    model.resetData({ name: 'Anonymous' });

    expect(model.getData()).toEqual({ name: 'Anonymous' });
    expect(mockListener).toHaveBeenCalledWith({ name: 'Anonymous' });
  });

  test('clearListeners removes all listeners', () => {
    model.addListener(mockListener);
    const anotherListener = jest.fn();
    model.addListener(anotherListener);

    model.clearListeners();
    model.setData({ key: 'value' });

    expect(mockListener).not.toHaveBeenCalled();
    expect(anotherListener).not.toHaveBeenCalled();
  });
});
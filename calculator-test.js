

  it('should calculate the monthly rate correctly', function () {
    // ...
    const values = {amount: 100, years: 12, rate: 12};
    expect(calculateMonthlyPayment(values)).toEqual('100.00');
  });
  
  
  it('should calculate the monthly to be >= 0', function () {
    // ...
    const values = {amount: 100, years: 12, rate: 12};
  expect(calculateMonthlyPayment(values)).toBeGreaterThanOrEqual('0');
});

it("should return a result with 2 decimal places", function() {
  // ..
  const values = {amount: 100, years: 12, rate: 12};
  expect(calculateMonthlyPayment(values)).toEqual('100.00')
  
});

/// etc

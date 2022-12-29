
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount:200000, years: 15, rate: 6})).toEqual('1687.71')
  expect(calculateMonthlyPayment({amount:15000, years: 5, rate: 21})).toEqual('405.80')
  expect(calculateMonthlyPayment({amount:1000, years: 1, rate: 32})).toEqual('98.47')
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({amount:2000.897, years: 1.5, rate: 26.99})).toEqual('136.41')
});

/// etc

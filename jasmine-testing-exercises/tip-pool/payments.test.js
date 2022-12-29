describe('Test for payment information setup & teardown', () => {
    beforeEach(() => {
        billAmtInput.value = 500;
        tipAmtInput.value = 100;
    });

    it('should add new payments on submitPaymentInfo', () => {
        submitPaymentInfo()

        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('500');
        expect(allPayments['payment1'].tipAmt).toEqual('100');
        expect(allPayments['payment1'].tipPercent).toEqual(20)
    });

    it('should return undefined with an empty input on createCurPayment()', () => {
        //arrange
        //Act
            createCurPayment();
            let result = {
                billAmt: '500',
                tipAmt: '100',
                tipPercent: 20
            }
        //assert
        expect(createCurPayment()).toEqual(result)
    })
})
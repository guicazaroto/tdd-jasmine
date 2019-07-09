describe('Minor and Major', function() {
    var values = new MinorMajor([9,2,3,4,5]);
    
    it('should return min number 2', function(){
        expect(values.getMinor()).toEqual(2);
    })
    it('should return max number 9', function(){
        expect(values.getMajor()).toEqual(9)
    })
})
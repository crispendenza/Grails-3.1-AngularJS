describe("myapp module", function() {

    beforeEach(angular.mock.module("myapp", function() {
    }));

    describe("disciplinaService", function() {

        var disciplinaService;

        beforeEach(angular.mock.inject(function(_disciplinaService_) {
            disciplinaService = _disciplinaService_;
        }));

        it("should be tested", function() {
            expect(true).toEqual(false);
        });

    });

});

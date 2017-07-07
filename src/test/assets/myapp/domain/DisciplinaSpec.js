describe("myapp module", function() {
    var $httpBackend;

    beforeEach(angular.mock.module("myapp", function() {
    }));

    beforeEach(angular.mock.inject(function(_$httpBackend_) {
        $httpBackend = _$httpBackend_;
    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    describe("Disciplina domain", function() {

        var Disciplina;

        beforeEach(angular.mock.inject(function(_Disciplina_) {
            Disciplina = _Disciplina_;
        }));

        it("should be tested", function() {
            expect(true).toEqual(false);
        });

    });

});

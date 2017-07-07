describe("myapp module", function() {
    var scope;

    beforeEach(angular.mock.module("myapp", function() {
    }));

    beforeEach(angular.mock.inject(function($rootScope) {
        scope = $rootScope.$new();
    }));

    describe("disciplina directive", function() {
        var element;

        beforeEach(angular.mock.inject(function ($compile) {
            element = angular.element('<disciplina></disciplina>');
            $compile(element)(scope);
            scope.$digest();
        }));

        it("should be tested", function() {
            expect(true).toEqual(false);
        });

    });

});
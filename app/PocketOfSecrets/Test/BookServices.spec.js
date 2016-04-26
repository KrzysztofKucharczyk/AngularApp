"use strict";

describe("Test services connected to tests.", function() {
    var scope, BookServices, RequestServices, httpBackend, $rootScope;

    beforeEach(module("app.library"));

    beforeEach(inject(function($rootScope, _BookServices_, $httpBackend, _RequestServices_) {
        scope = $rootScope.$new();
        $rootScope = $rootScope;
        BookServices = _BookServices_;
        httpBackend = $httpBackend;
        RequestServices = _RequestServices_;
    }));

    it("should add book to book repository", function() {

        var bookToSave = {
            "title": "Hamlet",
            "author": "Wieslaw Trzesidzida",
            "genre": "poem",
            "year": "1999"
        };

        httpBackend.expectPOST("/add").respond(200);

        BookServices.createBookOperation(bookToSave);
        httpBackend.flush();
        expect(RequestServices.createBookRequest(bookToSave)).toHaveBeenCalled();
    });
});

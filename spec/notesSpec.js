'use strict';

describe('Note', function(){
  var example;
  beforeEach(function() {
    example = new Note;
  });
  it('returns the string we pass as parameter', function() {
    expect(example.showText('hello')).toEqual('hello');
  });

});

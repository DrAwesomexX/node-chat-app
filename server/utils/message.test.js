var expect = require('expect');
var {generateMessage} = require('./message.js');


describe('GENERATE MESSAGE',()=>{

    it('should gernerate correct message object',()=>{
        
        var from = 'manav';
        var text = 'holla';

        var message = generateMessage(from,text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({
            from,
            text
        })
       
    })
})
const expect = require('expect');
const {
    generateMessage,
    generateLocationMessage
} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'Alexey';
        var text = 'Hello there!';
        var message = generateMessage(from, text);

        expect(message).toMatchObject({
            from,
            text
        });
        expect(typeof message.createdAt).toBe('number');
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'Alexey';
        var latitude = '57.8352512';
        var longitude = '28.3659175';
        var url = `https://www.google.com/maps?q=${latitude},${longitude}`;
        var message = generateLocationMessage(from, latitude, longitude);

        expect(message).toMatchObject({
            from,
            url
        });
        expect(typeof message.createdAt).toBe('number');
    });
});
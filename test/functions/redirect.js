import chai from 'chai';

import {handler} from '../../lib/functions/redirect';

const {expect} = chai;

describe('handler', () => {
	it('should work', done => {
		handler(undefined, undefined, (err, resp) => {
			expect(resp).to.be.eql({statusCode: 200});
			done();
		});
	});
});

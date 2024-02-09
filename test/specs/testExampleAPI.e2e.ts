import api from '../../api/pages/apiBasePage';
import { expect } from 'chai';

describe.skip('My Login application', () => {
    it('should get video cards from onliner.by', async () => {
        const response = await api.getMethod('https://catalog.onliner.by/sdapi/catalog.api/search/videocard', {});
        expect(response.products).to.be.an('array');
    })
})
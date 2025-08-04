import {login} from "../../../src/resolvers/mutations";
import {GraphQLResolveInfo} from "graphql";

jest.mock('../../../src/models', ()=>({
    userModel: {
        findOne: jest.fn().mockResolvedValueOnce({_id: '1'}).mockResolvedValueOnce(null)
    }
}));

jest.mock('jsonwebtoken', () => ({
    sign: jest.fn().mockReturnValue('token'),
}));

describe('login Resolver', ()=>{
    it('should login', async ()=>{
        const res= await login!({}, { input: { email: '', password: '' } }, {userId: null}, {} as GraphQLResolveInfo);

        expect(res).toEqual({
            user: {
                _id: '1',
            },
            token: 'token',
        });
    }, 20000);

    it('should not login', async ()=> {
        try {
            await login!({}, {
                    input: {
                        email: '',
                        password: ''
                    }
                },
                {userId: null}, {} as GraphQLResolveInfo);
        } catch (err) {
            expect(err).toEqual(new Error('Email or password is incorrect'));
        }
    }, 20000);
});
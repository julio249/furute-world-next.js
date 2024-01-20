import { GraphQLClientSingleton } from 'app/graphql';
import { customerName } from 'app/graphql/queries/customerName';
import { cookies } from 'next/headers'


export const validateAccessToken = async () => {
    const cookieStore = cookies();
    const accessToken = cookieStore.get('accessToken')?.value
    const graphqlClient = await GraphQLClientSingleton.getInstance().getClient()
    const { customer } = graphqlClient.request(customerName, {
        customerAccessToken: accessToken
    })

    return customer;
}
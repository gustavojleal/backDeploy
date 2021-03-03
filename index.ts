import { createConnections } from 'typeorm';

const Connection = async () =>  (

    await createConnections()

)

Connection()
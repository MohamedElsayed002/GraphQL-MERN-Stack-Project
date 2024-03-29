import {Link , useParams} from 'react-router-dom'
import Spinner from './Spinner'
import {useQuery} from '@apollo/client'
import { GET_PROJECT } from '../queries/projectQueries'
import ClientInfo from './ClientInfo'
import DeleteProjectButton from './DeleteProjectButton'

const Project = () => {
    
    const {id} = useParams()
    const {loading,error,data} = useQuery(GET_PROJECT , {
        variables : { id}
    })

    if(loading) return <Spinner />
    if(error) return <p>Error</p>

    
    return (
        <>
            {!loading && !error && (
                <div className='mx-auto w-75 card p-5'>
                    <Link to='/' className='btn btn-light btn-sm w-25 d-inline ms-auto'>
                        Back
                    </Link>
                    <h1>{data.project.name}</h1>
                    <p>Description: {data.project.description}</p>
                    <h5 className='mt-3'>Project Status</h5>
                    <p className='leada'>{data.project.status}</p>
                    <ClientInfo client={data.project.client} />
                    <DeleteProjectButton projectId={data.project.id} />
                </div>
            )}
        </>
    )
}

export default Project
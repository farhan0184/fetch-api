import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllData } from '../services/actions/dataAction';

const Todos = () => {
    const { isLoading, data, error } = useSelector((state) => state)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllData())
    }, [])
    return (
        <div>
            <h2>Todos app</h2>
            {isLoading && <h3>Loading.......</h3>}
            {error && <h3>{error.message}</h3>}
            <section>
                {data && data.map((item) =>{
                    console.log(item)
                    return(
                        <article key={item.id}>
                            {/* <h1>{item.productName}</h1>
                            <h1>{item.productBrand}</h1> */}
                            <h1>{item.title}</h1>
                        </article>
                    )
                }
                )
                }
            </section>
        </div>
    );
};

export default Todos;
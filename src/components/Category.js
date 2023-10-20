import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import Roll from 'react-reveal/Roll';

const Category = ({ filterByCat, allCategory }) => {

    const onFilter = (cat) => {
        filterByCat(cat);
    }

    return (
        <Row className="my-2 mb-5">
            <Col className="d-flex justify-content-center">
                <Roll>
                    {
                        allCategory.length >= 1 ?
                            (
                                allCategory.map((category, index) => {
                                    return (

                                        <div key={index}>
                                            <Button onClick={() => onFilter(category)} variant="outline-dark" className='Btn-Cust mx-2'>
                                                {category}
                                            </Button>
                                        </div>

                                    )
                                })
                            ) : <h3 className="text-center"> There is no Category </h3>
                    }
                </Roll>
            </Col>

        </Row>
    )
}

export default Category

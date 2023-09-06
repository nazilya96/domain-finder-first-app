import React, {useState} from "react";
import { Table } from "reactstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import  { DeleteData , AddData , EditData } from '../../redux/actions'
import {useSelector , useDispatch} from 'react-redux';


function Admin() {

  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [id, setId] = useState(undefined);


  const dispatch = useDispatch()

  const myProducts = useSelector(state => state.myProducts)


  const SaveData = () => {
    if(!id) {
      dispatch( AddData({
        title,
        description,
        url
      }) )
    } 
    else {
      dispatch( EditData({
        id: id,
        title,
        description,
        url
      }) )

    }
    CancelFunc()
  }


  const CancelFunc = () => {
    setTitle('')
    setDescription('')
    setId('')
    setUrl('')
  }


  return (
    <div>
      <div className="container">
        <div className="row border p-5 mt-5">
          <div className="col-6">
                <Table striped bordered hover size="sm">
                    <thead>
                          <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Url</th>
                        </tr>
                    </thead>
                    <tbody>
                    {myProducts.map((product , index)=> {
                          return (
                            <tr key={product.id}>
                              <td>{index + 1}</td>
                              <td>{product.title}</td>
                              <td>{product.description}</td>
                              <td>{product.url}</td>
                            </tr>
                          )
                      })}
                    </tbody>
                </Table>
          </div>

          <div className="col-6">
          <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control 
                    onChange={(e)=> {
                     setTitle(e.target.value)
                    }}
                    type="text" value={title} placeholder="title" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control 
                    onChange={(e)=> {
                      setDescription(e.target.value)
                     }}
                    type="text" value={description} placeholder="description" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Url</Form.Label>
                    <Form.Control 
                    onChange={(e)=> {
                      setUrl(e.target.value)
                     }}
                    type="text" value={url} placeholder="url" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Button onChange={()=>{
                      SaveData()
                    }} variant='primary'>
                      Save
                    </Button>
                </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;

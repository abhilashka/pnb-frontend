import React, { useState } from "react";
import ReactQuill from "react-quill";
import {
  Card, CardBody, Form, FormInput, Button, ListGroupItem, CardHeader, CardFooter,
  DropdownToggle,
  DropdownItem, InputGroup, DropdownMenu
} from "shards-react";
import { useDispatch, useSelector } from 'react-redux'
import SidebarCategories from "./SidebarCategories";
import { DropdownButton, Dropdown } from 'react-bootstrap';
import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";
import { addNews } from "../../actions/newsAction"
import DropdownInputGroups from "../components-overview/DropdownInputGroups"

import { toast } from 'react-toastify';



const Editor = () => {
  const dispatch = useDispatch()

  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState("")


  const [file, setFile] = useState()
  const [images, setImages] = useState([])

  const [category, setCategory] = useState()



  const submit = async (event) => {
    event.preventDefault()

    console.log('submit')
    console.log("Editor -> description", content)
    console.log("Editor -> title", title)
    const result = addNews({ image: file, title, content, category })
    console.log("submit -> result", result)

    setImages([result.image, ...images])
    console.log("submit -> toast", toast)

    setContent('')
    setTitle()
    setCategory('')
    setDescription('')
    toast.success('News Added Successfully', { autoClose: 2000 }, { position: toast.POSITION.BOTTOM_RIGHT })
    window.scrollTo(0,0)
  }

  const fileSelected = event => {
    const file = event.target.files[0]
    console.log("Editor -> file", file.name)
    setFile(file)
    setDescription(file.name)
    toast.warning('File uploading...', { autoClose: 2000 }, { position: toast.POSITION.BOTTOM_RIGHT })


  }


  return (
    <Card small className="mb-3">

      <CardBody className="mb-3">
        <Form className="add-new-post">
          <FormInput size="lg" className="mb-3" placeholder="Post Title" onChange={event => setTitle(event.target.value)} />
          <ReactQuill size="sm" className="add-new-post__editor mb-30 " value={content} onChange={setContent} placeholder="Post Description" />
          <h6 className="mt-3">Upload Image/video</h6>

          <div className="custom-file mt-1 mb-3">

            <input onChange={fileSelected} type="file" className="custom-file-input" accept="*/*" required />
            <label className="custom-file-label" htmlFor="customFile2">
              {description}

            </label>
          </div>
        </Form>




        <select onChange={event => setCategory(event.target.value)} className="btn btn-primary" >
          <option value="Select Category">Select Category</option>
          <option value="Business">Business</option>
          <option value="Cars">Cars</option>
          <option value="Entertainment"> Entertainment</option>
          <option value="Family"> Family</option>
          <option value="Health"> Health</option>
          <option value="Politics"> Politics</option>
          <option value="Religion"> Religion</option>
          <option value="Science"> Science</option>
          <option value="Sports"> Sports</option>
          <option value="Travel"> Travel</option>
          <option value="Video"> Video</option>
          <option value="World"> World</option>
        </select>


      </CardBody>
      <CardFooter>
        <ListGroupItem className="d-flex px-3 border-0">
          <Button outline theme="accent" size="sm">
            <i className="material-icons">save</i> Save Draft
          </Button>
          <Button theme="accent" size="sm" className="ml-auto" onClick={submit}>
            <i className="material-icons" >file_copy</i> Publish
          </Button>
        </ListGroupItem></CardFooter>
    </Card>
  )
};

export default Editor;

import React from 'react'
import {
    PlusSquareOutlined,
    BookOutlined,
    CloudDownloadOutlined,
    EyeOutlined
  } from "@ant-design/icons";
const Header = () => {
  return (
    <div className='d-flex justify-content-between p-3 '>
      <button type="submit" className='btn btn-info btn-lg'><PlusSquareOutlined /></button>

        <div className='ml-auto gap-2 d-flex'>
      <button type="submit" className='btn btn-primary btn-lg'> <BookOutlined /> Publish</button>


      <button type="submit" className='btn btn-warning btn-lg'><EyeOutlined />Preview</button>


      <button type="submit" className='btn btn-success btn-lg'><CloudDownloadOutlined />Save</button>
      </div>

    </div>
  )
}

export default Header

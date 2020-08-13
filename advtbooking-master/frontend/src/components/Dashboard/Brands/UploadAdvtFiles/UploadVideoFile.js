import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const UploadVideoFile = (props) => {
    const [value, setValue] = useState()


    const handleChange = (e) => {
        setValue(e.target.files[0]); // you get all the files object here
    }

    const uploadVideoInServer = (e) => {
        e.preventDefault();
        console.log('In uploadImageInServer 1')
        const formData = new FormData();
        formData.append('bannerAdvtFile', value)

        fetch('/api/consumer/uploadBanner', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                console.log('upload success')
                props.history.push({
                    pathname: './',
                    fileNameImage: data.uploadedFileName
                })

            })
            .catch(error => {
                console.error(error)
            })

    }

    return (
        <div style={{   backgroundImage: "url(" + "https://static.vecteezy.com/system/resources/thumbnails/000/407/606/small/v363-aew-44-newyearsalebadge.jpg" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat' }}>
            <center>
                <Card style={{ width: '48rem', backgroundColor: '#919191' }}>
                    <Card.Body>
                        <Card.Title>Upload Advertisement Video</Card.Title>
                        <form encType="multipart/form-data" onSubmit={uploadVideoInServer}>
                            <label for="bannerAdvtFile">Select Banner Advt:&nbsp;&nbsp;  </label>
                            <input type="file" id="bannerAdvtFile" name="bannerAdvtFile" accept="video/*" onChange={handleChange} />

                        &nbsp;&nbsp; <Button variant="primary" type="submit">Submit</Button>
                        </form>
                    </Card.Body>
                </Card>

            </center>
        </div>
    )
}

export default UploadVideoFile

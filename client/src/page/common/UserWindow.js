import React, { useState, useEffect} from "react"

import styles from "./Button.module.css"

function WindowHeader() {
    console.log("rendered!")
    return (
        <div>
            <span>이미지 넣기</span>
        </div>
    );
}

function WindowLoading () {
    return (
        <div>
            <span>Loading...</span>
        </div>
    );
}

function WindowResult ({ imageUrl }) {
    const keywordList = JSON.parse(window.sessionStorage.getItem("keyword_list"));
    const sendFaceData = (image, keywordList) => {
        const data = {
            // image 작성 필요
            "keywordList": keywordList
        }

        fetch('http://ec2-34-228-60-199.compute-1.amazonaws.com/api/image/image', {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            body: JSON.stringify(data)
        })
    }
    return (
        <div>
            <img src={imageUrl} />
            {/* <SendButton text={"완전 좋아!❤️"}/> */}
        </div>
    )
}

function UploadWindow ({ imageUrl, setImageUrl }) {
    const keywordList = window.sessionStorage.getItem("keyword_list");
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        if (event.target.files) {
            setFile(event.target.files[0]);
        }
    }

    const handleClick = (event) => {
        event.preventDefault();
        sendData();
    }

    const sendData = () => {
        const data = new FormData();
        data.append('image', file);
        data.append('keyword_list', keywordList);
        fetch('http://ec2-34-228-60-199.compute-1.amazonaws.com/api/image/image', {
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            },
            body: data
        })
          .then(response => {
              if (!response.ok) {
                  throw new Error('Network error');
              }
              return response.json();
          })
          .then(data => {
              setImageUrl(data.image_url);
              console.log(imageUrl);
          })
          .catch(error => {
              console.log(error);
          })
    }

    function UploadInput () {
        return (
            <div>
                <form onSubmit={handleClick}>
                    <label className={styles["button"]} htmlFor="file">이미지 파일 선택</label>
                    <input type="file" id="file" onChange={handleFileChange} accept=".jpg, .jpeg, .png" style={{opacity: 0}}/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }

    return (
        <section>
            <WindowHeader />
            <UploadInput />
            { imageUrl === "" ? <WindowLoading /> : <WindowResult imageUrl={imageUrl} /> }
        </section>
    )
}

function DiffusionWindow ({ imageUrl, setImageUrl }) {
    const keywordList = JSON.parse(window.sessionStorage.getItem("keyword_list"));
    const [command, setCommand] = useState("");

    const handleClick = (event) => {
        event.preventDefault();
        sendData();
    }

    const handleChange = (event) => {
        console.log(event.target.value);
        console.log(command);
        setCommand(event.target.value);
    }

    const sendData = () => {
        const data = {
            "prompt": command,
            "keyword_list": keywordList
        }

        fetch('http://ec2-34-228-60-199.compute-1.amazonaws.com/api/image/prompt', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network error');
            }
            return response.json();
        })
        .then(data => {
            setImageUrl(data.image_url);
            console.log(imageUrl);
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <section>
            <WindowHeader />
            <form onSubmit={handleClick}>
                <input value={command} type="text" placeholder="ex. 고양이상의 귀여운 얼굴이 좋아!" onChange={handleChange}/>
                <span>입력한 텍스트 기반으로 사진을 생성해요</span>
                <button>Submit</button>
            </form>
            { imageUrl === "" ? <WindowLoading /> : <WindowResult imageUrl={imageUrl} /> }
        </section>
    );
}

function UserWindow({isClicked}) {
    const [imageUrl, setImageUrl] = useState("");

    if (isClicked) {
        return (
            <DiffusionWindow imageUrl={imageUrl} setImageUrl={setImageUrl}/>
        );
    }
    return (
        <UploadWindow imageUrl={imageUrl} setImageUrl={setImageUrl} />
    );
}

export { UserWindow };
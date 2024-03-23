import React, { useState, useEffect} from "react"
import styles from "./UserWindow.module.css"

function WindowHeader() {
    console.log("rendered!")
    return (
        <div className={styles.window_header}>
        </div>
    );
}

function WindowLoading () {
    return (
        <div className={styles.loading}>
            <span className={styles.loading_ment}>Loading...</span>
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
    const keywordList = JSON.parse(window.sessionStorage.getItem("keyword_list"));
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
        data.append('keyword_list', JSON.stringify(keywordList));
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
                    <input type="file" onChange={handleFileChange} accept=".jpg, .jpeg, .png"/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }

    return (
        <section className={styles.window_container}>
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
        <section className={styles.window_container}>
            <WindowHeader />
            <form onSubmit={handleClick} className={styles.window_form}>
                <textarea className={styles.window_input} value={command} type="textarea" placeholder="ex. 고양이상의 귀여운 얼굴이 좋아!" onChange={handleChange}/>
                <div className={styles.window_submit}>
                    <span className={styles.alert}>입력한 텍스트 기반으로 사진을 생성해요</span>
                    <button className={styles.send_btn}>Submit</button>
                </div>
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
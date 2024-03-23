import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { SendButton } from './Button';
import styles from "./UserWindow.module.css"

function WindowHeader() {
    console.log("rendered!")
    const Circle = ({ color }) => {
        return (
            <div className={styles.circle} style={{ backgroundColor: color }}></div>
        );
    }
    return (
        <div className={styles.window_header}>
            <Circle color={"var(--primary-color)"} />
            <Circle color={"var(--highlight-yellow)"} />
            <Circle color={"var(--secondary-color)"} />
            <div className={styles.window_title}>My Ideal 💭💭💭</div>
        </div>
    );
}

function WindowLoading () {
    return (
        <div className={styles.loading}>
            <span className={styles.loading_ment}>Loading... (30초 정도 소요) </span>
        </div>
    );
}

function WindowResult ({ imageUrl }) {
    const keywordList = JSON.parse(window.sessionStorage.getItem("keyword_list"));

    const navigate = useNavigate();

    if (keywordList === null) {
        navigate('/');
    }

    const redirectResult = () => {
        navigate('/result');
    }

    const data = {
        "image": imageUrl,
        "keyword_list": keywordList
    }

    return (
        <div className={styles.img_wrap}>
            <img className={styles.img} src={imageUrl} />
            <SendButton text={"완전 좋아!❤️"} onClickFunction={redirectResult}/>
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
                window.sessionStorage.setItem(imageUrl);
                window.sessionStorage.setItem(data.scores);
                console.log(imageUrl);
                console.log(data.scores);
            })
            .catch(error => {
                console.log(error);
            })
    }

    function UploadInput () {
        return (
            <div>
                <form className={styles.file_upload_wrap} onSubmit={handleClick}>
                    <input className={styles.upload_btn} type="file" id="file" onChange={handleFileChange} accept=".jpg, .jpeg, .png" style={{opacity: 0}}/>
                    <div style={{color: "var(--black-color)"}}>{(file !== null) && `${file.name} (${(file.size / 1024).toFixed(1)} KB)`}</div>
                    <label className={styles.filename} htmlFor="file">이미지 업로드</label>
                    <button className={styles.send_btn}>Submit</button>
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
            window.sessionStorage.setItem("image_url", imageUrl);
            window.sessionStorage.setItem("scores", JSON.stringify(data.scores));
            console.log("scores is", data.scores);
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

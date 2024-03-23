import React, { useState, useEffect} from "react"


function WindowHeader() {
    return (
        <div>
            <i></i>
            <i></i>
            <i></i>
            <span>My ideal💭💭💭</span>
        </div>
    );
}

function DiffusionInput () {
    console.log(image_url);
    return (
        <div>
            <input type="text" placeholder="ex. 고양이상의 귀여운 얼굴이 좋아!"/>
            <span>입력한 텍스트 기반으로 사진을 생성해요</span>
            <button></button>
        </div>
    );
}

function UploadInput () {
    return (
        <div>
            <form>
                <input type="file" />
            </form>
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

function WindowResult ({ image_url }) {
    return (
        <div>
            <img src={image_url}></img>
        </div>
    )
}

function UploadWindow ({ image_url }) {
    if (image_url !== "") {
        return (
            <section>
                <WindowHeader />
                <UploadInput />
                <WindowLoading image_url={image_url} />
            </section>
        );
    }

    return (
        <section>
            <WindowHeader />
            <UploadInput />
            <WindowResult />
        </section>
    );
}

function DiffusionWindow ({ image_url }) {
    if (image_url !== ""){
        return (
            <section>
                <DiffusionInput />
                <WindowLoading image_url={image_url} />
            </section>
        );
    }
    return (
        <section>
            <DiffusionInput />
            <WindowResult />
        </section>
    );
}

function UserWindow() {
    const [isDiffusion, setIsDiffusion] = useState(true);
    const [loading, setLoading] = useState(false);
    
    if (isDiffusion) {
        return (
            <section>
                <div>
                    <a>텍스트에서 이미지 생성</a>
                    <a>이미지 업로드</a>
                </div>
                <WindowHeader />
                <DiffusionInput loading={loading}/>
            </section>
        );
    }

    return (
        <section>
            <a>텍스트에서 이미지 생성</a>
            <a>이미지 업로드</a>
            <WindowHeader />
            <UploadInput loading={loading} />
        </section>
    );
}

export { UserWindow };
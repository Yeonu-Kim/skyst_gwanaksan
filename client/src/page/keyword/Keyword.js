import React, { useState, useEffect} from "react"


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
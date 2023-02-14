import { useState } from "react"

export default function Modal({active, setActive, activeElement}) {

    const [value, setValue] = useState("")

    const onModalExit = () => {
        setActive(false);
        setValue("");
    }
    return (
        <div className={active ? "modal active" : "modal"} onClick={onModalExit}>
            <div className="modal__content" onClick={(e) => e.stopPropagation()}>
                <img src={activeElement.imageUrl} />
                <p className="title">Comments</p>
                <textarea value={value} onChange={(evt) => setValue(evt.target.value)}></textarea>
                <p className="subtitle">Write a few sentences about the photo.</p>
                <button className="btnSave">Save</button>
            </div>
        </div>
    )
}
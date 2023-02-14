
export default function Modal({active, setActive, activeElement}) {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={(e) => e.stopPropagation()}>
                <img src={activeElement.imageUrl} />
                <p className="title">Comments</p>
                <textarea></textarea>
                <p className="subtitle">Write a few sentences about the photo.</p>
                <button className="btnSave">Save</button>
            </div>
        </div>
    )
}
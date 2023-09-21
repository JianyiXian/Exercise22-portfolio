import image from './img/avatar.jpeg'
const Avatar = () => {
    return (
        <div className="avatar_container w-25 float-end">
            <img className="avatar img-fluid border border-5 rounded-circle d-flex align-item-end" src={image}
                alt="avatar" />
        </div>
    )
}

export default Avatar;
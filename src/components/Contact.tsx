import Avatar from "../components/Avatar";

interface Props {
    contact: {
        image: string,
        username: string,
        first: string,
        last: string,
        email: string
    }
}

const Contact = ({ contact }: Props) => {
    return(
        <div className="Contact">
            <Avatar svg={contact.image} loading={false} size={60} />
            <div className="info">
                <h3>{contact.username}</h3>
                <p>{contact.first} {contact.last}</p>
                <p>{contact.email}</p>
            </div>
        </div>
    )
}

export default Contact;
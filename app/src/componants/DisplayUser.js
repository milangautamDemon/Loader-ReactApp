import "./DisplayUser.css";

const DisplayUser = ({id, name, email, companyName}) => {

    return(
        <div className="UserDetail-wrapper">
            <h3 className="userCard-heading">User Card Detail</h3>
            <div className="user-card">
                <h5 className="user-id">ID: {id}</h5>
                <h5 className="user-name">Name: {name}</h5>
                <h5 className="user-email">Email: {email}</h5>
                <h5 className="user-companyName">Company-Name: {companyName}</h5>
            </div>
        </div>
    )

}
export default DisplayUser;
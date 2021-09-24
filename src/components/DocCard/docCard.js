import React from 'react';
import './docCard.css';
import doc from '../../Assets/images/doc.svg'

const Component = React.Component;
export default class DocCard extends Component {
    render() {
        const documents = this.props.documents;
        return (
            <div>
            {documents.map((document) => (
                <div className="outer-box">
                {document.isPending===true?
                <div className="status-pending" ><i className="fas fa-clock" style={{ marginRight: 6 }}></i>
                    Pending
                </div> :
                <div className="status-verified" ><i className="fas fa-check-circle" style={{ marginRight: 6 }}></i>
                    Verified 
                </div>}
                <div className="doc-name">
                    {document.title}
                    </div>
                <div className="inner-box">
                    <img src={doc} alt="doc"></img>
                </div>
            </div>
            ))}
            </div>
        )
    }
}
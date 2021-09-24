import React from 'react';
import './card.css';

const Component = React.Component;

export default class Card extends Component {
    render() {
        const documents = this.props.documents;


        return (
            <div>
            {documents.map((document) => (
                <div className="outer">
                    <div className="inner">
                        <div className="heading">
                            {document.title}
                        </div>   
                        <div className="des">
                            {document.description}   
                        </div> 
                    </div>              
                </div>
            ))}
            </div>
        )
    }
}
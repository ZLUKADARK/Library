import * as React from 'react';
import { connect } from 'react-redux';
import { error } from 'console';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';
import * as Booksstore from '../store/ApiBooks';
import { Component, ChangeEvent } from "react";
import ApiBooks from "../store/ApiBooks";
import IBookData from '../store/ApiBooks';
import Services from '../Services/BookServices';
import BookServices from '../Services/BookServices';
import { METHODS } from 'http';
import { title } from 'process';

type Props = {};

type State = IBookData & {
    correntBook: Array<IBookData> | null,
};


class Home extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.removeBook = this.removeBook.bind(this);
        this.getAllBooks = this.getAllBooks.bind(this);
    }

    i: Number = 0;
    books: Array<IBookData> = [];

    componentDidMount() {
        this.getAllBooks();  
    }

    removeBook = (iId: any) => {
        BookServices.delete(iId)
            .then((response: any) => {
                this.getAllBooks();
            })
            .catch((e: Error) => {
                console.log(e);
            });
    }

    getAllBooks() {
        Services.getAll()
            .then((response: any) => {
                this.setState(this.books = response.data)
            })
            .catch((e: Error) => {
                console.log(e);

            });
    }

    public render() {
        return (
            <React.Fragment>
                {
                    this.books.map((item, i) => {
                        return <ListItem title={item.title} author={item.author} genre={item.genre} releseDate={item.releseDate} id={item.id} key={item.id} authorId={item.authorId} onDelete={ this.removeBook } />
                    })
                }
            </React.Fragment>
        );
    }
};

interface ListProps {
    item: Object,
}

class ListItem extends React.Component<IBookData, State>{
    constructor(props: IBookData) {
        super(props);       
    }

    
    public render() {
        return (
            <>
                <div className="card">
                    <div className="card-header">
                        {this.props.id} | {this.props.title}
                    </div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <p>Genre: {this.props.genre}</p>
                            <p className="Date">Relese Date:  {this.props.releseDate}</p>
                            <footer className="blockquote-footer"> <cite title="Source Title"> {this.props.author.lName} {this.props.author.name} {this.props.author.mName}</cite></footer>
                            <br />
                            <button className="btn btn-primary" onClick={() => this.props.onDelete(this.props.id)}>Delete {this.props.title}</button>
                        </blockquote>
                    </div>
                </div>
                <br/>
            </>
        )
    }
}
export default connect()(Home as any);

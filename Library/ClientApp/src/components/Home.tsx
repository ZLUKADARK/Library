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
import 'bootstrap/dist/css/bootstrap.css';

type Props = {};

type State = IBookData & {
    correntBook: Array<IBookData> | null,
};


class Home extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    i: Number = 0;
    books: Array<IBookData> = [];

    componentDidMount() {
        this.getAllBooks();
        
    }

    getAllBooks() {
        Services.getAll()
            .then((response: any) => {
                this.setState(this.books = response.data)
                console.log(this.books[0].author.lName);
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
                        return <ListItem name={item.name} author={item.author} genre={item.genre} releseDate={item.releseDate} id={item.id} key={item.id} />
                    })
                }
            </React.Fragment>
        );
    }
};

interface ListProps {
    item: Object,


}

class ListItem extends React.Component<IBookData>{
    constructor(props: IBookData) {
        super(props);
    }

    public render() {
        return (
            <>
                <div className="card">
                    <div className="card-header">
                        {this.props.id} | {this.props.name}
                    </div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <p>Genre: {this.props.genre}</p>
                            <p>Relese Date:  {this.props.releseDate}</p>
                            <footer className="blockquote-footer"> <cite title="Source Title"> {this.props.author.lName} {this.props.author.name} {this.props.author.mName}</cite></footer>
                            <br/>
                            <a href="#" className="btn btn-primary">Detail</a>
                        </blockquote>
                    </div>
                </div>
                <br/>
            </>
        )
    }
}
export default connect()(Home as any);

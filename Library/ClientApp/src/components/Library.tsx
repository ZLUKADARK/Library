import { error } from 'console';
import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';
import * as Booksstore from '../store/ApiBooks';
import { Component, ChangeEvent } from "react";
import ApiBooks from "../store/ApiBooks";
import IBookData from '../store/ApiBooks';
import Services from '../store/Services';


type Props = {};
type State = IBookData & {
    books: Array<IBookData>,
    correntBook: Array<IBookData> | null,
};


class Library extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.getAllBooks = this.getAllBooks.bind(this);
        
    }
    
    componentDidMount() {
        this.getAllBooks();
    }

    getAllBooks() {
        Services.getAll()
            .then((response: any) => {
                this.setState({
                    
                    books: response.data
                });

                console.log(this.state.books);
                
            })
            .catch((e: Error) => {
                console.log(e);
            });
    }

    public render() {

        return (
            <div className="patient-container">

                2

            </div>
        );
    }
};

export default connect()(Library);
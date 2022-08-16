import React from 'react';
import { connect } from 'react-redux';
import { error } from 'console';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';
import * as Booksstore from '../store/ApiBooks';
import { Component, ChangeEvent } from "react";
import BookServices from '../Services/BookServices';
import { METHODS } from 'http';
import { type } from 'os';
import { isDate } from 'util';
import { title } from 'process';
import IBooksDataCreateUpdate from "../store/ApiBooks"
import IBookData from "../store/ApiBooks"
import { stat } from 'fs';

type Props = {};

type State = IBookData;

class NewBook extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeGenre = this.onChangeGenre.bind(this);
        this.onChangeReleseDate = this.onChangeReleseDate.bind(this);
        this.onChangeAuthorId = this.onChangeAuthorId.bind(this);
        this.saveBook = this.saveBook.bind(this);

        this.state = {
            title: "",
            genre: "",
            releseDate: new Date(),
            authorId: null
        };
    }



    onChangeTitle(e: ChangeEvent<HTMLInputElement>) {
        this.setState({
            title: e.target.value
        });
    }
    onChangeGenre(e: ChangeEvent<HTMLInputElement>) {
        this.setState({
            genre: e.target.value
        });
    }
    onChangeReleseDate(e: ChangeEvent<HTMLInputElement>) {
        this.setState({
            releseDate: new Date(e.target.value).toISOString().slice(0, 10)
        })
        
        
    }
    onChangeAuthorId(e: ChangeEvent<HTMLInputElement>) {
        this.setState({
            authorId: new Number(e.target.value)
        });
    }

    saveBook() {
        const data: IBookData = {
            title: this.state.title,
            genre: this.state.genre,
            authorId: this.state.authorId,
            releseDate: this.state.releseDate
        };
        BookServices.create(data)
            .then((response: any) => {
                this.setState({
                    id: response.data.id,
                    title: response.data.title,
                    genre: response.data.genre,
                    releseDate: response.data.releseDate,
                    authorId: response.data.authorId
                });
                console.log(response.data);
            })
            .catch((e: Error) => {
                console.log(e);
            });
    }

    public render() {
        const { title, genre, authorId, releseDate } = this.state;
        return (
            <>
                <div className="form-outline mb-4">
                    <input value={title} onChange={this.onChangeTitle} name="title" type="text" className="form-control" />
                    <label className="form-label" htmlFor="form6Example3">Book title</label>
                </div>

                <div className="form-outline mb-4">
                    <input  value={genre} onChange={this.onChangeGenre} name="genre" type="text" className="form-control" />
                    <label className="form-label" htmlFor="form6Example4">Genre</label>
                </div>

                <div className="form-outline mb-4">
                    <input value={authorId} onChange={this.onChangeAuthorId} name="authorId" type="number" className="form-control" />
                    <label className="form-label" htmlFor="form6Example5">Author Id</label>
                </div>

                <div className="form-outline mb-4">
                    <input value={releseDate} onChange={this.onChangeReleseDate} name="releseDate" type="date" className="form-control" />
                    <label className="form-label" htmlFor="form6Example5">Relese date</label>
                    
                </div>
                    
             
                <button type="submit" className="btn btn-primary btn-block mb-4" onClick={this.saveBook}>Place order</button>
            </>
        );
    }
};

export default connect()(NewBook as any);
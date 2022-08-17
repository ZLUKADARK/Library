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
import IBookData from "../store/ApiBooks"
import IAuthosData from "../store/ApiBooks"
import { stat } from 'fs';
import AuthorServices from '../Services/AuthorServices';


type Props = {};

type State = IBookData & IAuthosData & {
    checkedAuthor: boolean,
    showAuthor: boolean
};;

class NewBook extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeGenre = this.onChangeGenre.bind(this);
        this.onChangeReleseDate = this.onChangeReleseDate.bind(this);
        this.onChangeAuthorId = this.onChangeAuthorId.bind(this);
        this.saveBook = this.saveBook.bind(this);
        this.saveAuthor = this.saveAuthor.bind(this);
        this.getAuthors = this.getAuthors.bind(this);
        this.handleChangeAddAuthor = this.handleChangeAddAuthor.bind(this);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeLName = this.onChangeLName.bind(this);
        this.onChangeMName = this.onChangeMName.bind(this);

        this.state = {
            title: "",
            genre: "",
            releseDate: new Date(),
            authorId: null,

            checkedAuthor: false,
           
            name: "",
            lName: "",
            mName: ""
            
            
        };
    }
    
    i: Number = 0;
    authors: Array<IAuthosData> = [];

    componentDidMount() {
        this.getAuthors();
    }

    getAuthors() {
        AuthorServices.getAll()
            .then((response: any) => {
                this.setState(this.authors = response.data)
            })
            .catch((e: Error) => {
                console.log(e);

            });
    }

    handleChangeAddAuthor(e: ChangeEvent<HTMLInputElement>) {
        this.setState({
            checkedAuthor: e.target.checked
        });
    }

    onChangeName(e: ChangeEvent<HTMLInputElement>) {
        this.setState({
            name: e.target.value
        });
    }
    onChangeLName(e: ChangeEvent<HTMLInputElement>) {
        this.setState({
            lName: e.target.value
        });
    }
    onChangeMName(e: ChangeEvent<HTMLInputElement>) {
        this.setState({
            mName: e.target.value
        });
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

    saveAuthor() {
        const data: IAuthosData = {
            name: this.state.name,
            lName: this.state.lName,
            mName: this.state.mName,
        };
        AuthorServices.create(data)
            .then((response: any) => {
                this.setState({
                    id: response.data.id,
                    name: response.data.name,
                    lName: response.data.lName,
                    mName: response.data.mName,
                    authorId: response.data.id,
                    checkedAuthor: false,
                });
                this.getAuthors();

                alert('Author added')
            })
            .catch((e: Error) => {
                console.log(e);
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
                alert('Book added')
            })
            .catch((e: Error) => {
                console.log(e);
            });
    }

    public render() {
        const { title, genre, authorId, releseDate, checkedAuthor, name, lName, mName } = this.state;
        
        return (
            <>
                <br/>
                <br/>
                <br />
                
                <div className="container">
                    
                {(() => {
                    if (this.state.checkedAuthor === true) {
                        return (
                            <>
                            <div className="row mb-4">
                                <div className="col">
                                    <div className="form-outline">
                                        <input value={name} onChange={this.onChangeName} name="name" type="text" className="form-control" />
                                        <label className="form-label" htmlFor="form6Example1">Name</label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-outline">
                                        <input value={lName} onChange={this.onChangeLName} name="lName" type="text" className="form-control" />
                                        <label className="form-label" htmlFor="form6Example2">Last name</label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-outline">
                                        <input value={mName} onChange={this.onChangeMName} name="mName" type="text" className="form-control" />
                                        <label className="form-label" htmlFor="form6Example2">Middle name</label>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block mb-2" onClick={this.saveAuthor}>Add new author</button>
                            </div>
                            <br/>
                            </>
                        )
                    }
                })()}
                    
                <div className="row mb-4">
                    <div className="col-2 newbook-menu-title" >
                        <label className="form-label" htmlFor="form6Example3">Book title</label>
                    </div>
                    <div className="col-10 justify-content-end text-center">
                        <input value={title} onChange={this.onChangeTitle} name="title" type="text" className="form-control" />
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col-2 newbook-menu-title" >
                        <label className="form-label" htmlFor="form6Example4">Genre</label>
                    </div>
                    <div className="col-10 justify-content-end text-center">
                        <input value={genre} onChange={this.onChangeGenre} name="genre" type="text" className="form-control" />
                    </div>
                </div>

                <div className="row mb-4 ">
                    <div className="col-2 newbook-menu-title" >
                        <label className="form-label " >Author</label>
                    </div>
                    <div className="col-10 justify-content-end text-center">
                            <select
                                className="form-control"
                                name="lang"
                                value={authorId}
                                onChange={this.onChangeAuthorId}
                            >
                                {
                                this.authors.map((item, i) => {
                                    return <option key={item.id} value={item.id}> {item.lName} {item.name} {item.mName}</option>
                                    })
                                }
                            </select>
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col-2 newbook-menu-title" >
                        <label className="form-label" htmlFor="form6Example5">Relese date</label>
                    </div>
                    <div className="col-10 justify-content-end text-center">
                        <input value={releseDate} onChange={this.onChangeReleseDate} name="releseDate" type="date" className="form-control" />
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col-2 newbook-menu-title" >
                        <label className="form-label" htmlFor="form6Example5">Add new author</label>
                    </div>
                    <div className="col-10 justify-content-start text-left">
                        <input value={checkedAuthor} onChange={this.handleChangeAddAuthor} name="checkedAuthor" type="checkbox" className="form-control" />
                    </div>
                </div>
                
                <button type="submit" className="btn btn-primary btn-block mb-2" onClick={this.saveBook}>Save book</button>
                </div>
            </>
        );
    }
};

export default connect()(NewBook as any);
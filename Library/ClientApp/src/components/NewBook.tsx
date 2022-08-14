import React from 'react';
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
import { type } from 'os';
import { isDate } from 'util';
import { title } from 'process';

type Props = {};

type State = IBookData & {
    correntBook: Array<IBookData> | null,
   
};



class NewBook extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            id: null,
            title: "",
            genre: "",
            authorId: null,
            releseDate: new Date,
            author: {
                id: null,
                lName: "",
                name: "",
                mName: "",
            }
        }
    }
    newAuthor = false;

    onChageAuthor = () => {
        this.newAuthor = true;
        this.componentDidMount;
    };

    public render() {
        return (
            <>
                <form>
                    {(() => {
                        if (this.newAuthor === true) {
                                return (
                                    <div className="row mb-4">
                                        <div className="col">
                                            <div className="form-outline">
                                                <input type="text" id="form6Example1" className="form-control" />
                                                <label className="form-label" htmlFor="form6Example1">First name</label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-outline">
                                                <input type="text" id="form6Example2" className="form-control" />
                                                <label className="form-label" htmlFor="form6Example2">Last name</label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-outline">
                                                <input type="text" id="form6Example2" className="form-control" />
                                                <label className="form-label" htmlFor="form6Example2">Middle name</label>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })()}
                    <div className="form-outline mb-4">
                        <input type="text" id="form6Example3" className="form-control" />
                        <label className="form-label" htmlFor="form6Example3">Book title</label>
                    </div>

     
                    <div className="form-outline mb-4">
                        <input type="text" id="form6Example4" className="form-control" />
                        <label className="form-label" htmlFor="form6Example4">Genre</label>
                    </div>

    
                    <div className="form-outline mb-4">
                        <input type="email" id="form6Example5" className="form-control" />
                        <label className="form-label" htmlFor="form6Example5">Email</label>
                    </div>

        
                    <div className="form-outline mb-4">
                        <input type="number" id="form6Example6" className="form-control" />
                        <label className="form-label" htmlFor="form6Example6">Phone</label>
                    </div>

         
                    <div className="form-outline mb-4">
                        <textarea className="form-control" id="form6Example7"></textarea>
                        <label className="form-label" htmlFor="form6Example7">Additional information</label>
                    </div>

               
                    <div className="form-check d-flex justify-content-center mb-4">
                        <input className="form-check-input me-2" type="checkbox" value=""  id="form6Example8" />
                    </div>
                    
             
                    <button type="submit" className="btn btn-primary btn-block mb-4" onClick={this.newAuthor === true}>Place order</button>
                </form>
            </>
        );
    }
};

export default connect()(NewBook as any);